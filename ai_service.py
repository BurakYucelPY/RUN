import os
import json
from dotenv import load_dotenv
import google.generativeai as genai

# Ayarları yükle
load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

if not api_key:
    print("⚠️ UYARI: API Key bulunamadı! .env dosyasını kontrol et.")
else:
    genai.configure(api_key=api_key)

# JSON modunu zorluyoruz
config = {"response_mime_type": "application/json"}
AI_MODEL = genai.GenerativeModel("gemini-2.5-flash", generation_config=config)

def temizle_ve_parse_et(text):
    """AI'dan gelen veriyi temizleyip JSON yapar."""
    text = text.strip()
    # Fazlalık etiketleri temizle
    if text.startswith("```json"):
        text = text.replace("```json", "").replace("```", "")
    elif text.startswith("```"):
        text = text.replace("```", "")
    
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        print(f"❌ JSON PARSE HATASI! Gelen veri bozuk:\n{text}")
        return None

async def planla_mimar(konsept_data, user_data):
    """1. Aşama: İskelet Kurma"""
    print(f"🏗️ Mimar çalışıyor... ({konsept_data['baslik']})")
    
    prompt = f"""
    Sen uzman bir oyun mimarısın.
    GÖREV: '{konsept_data['baslik']}' senaryosu için 10 AŞAMALI bir kaçış rotası planla.
    SENARYO: {konsept_data['kapak_yazisi']}
    ODAK: {konsept_data['ai_odak']}

    OYUNCU: {user_data.oyuncu_adi} | EŞYA: {user_data.esya} | KORKU: {user_data.korku}

    KURALLAR:
    1. Sahne 1'den 10'a kadar planla.
    2. Sadece JSON iskeleti ver. Başka açıklama yapma.
    
    ÇIKTI FORMATI: {{ "ozet": "...", "rota": [ ... ] }}
    """
    
    response = AI_MODEL.generate_content(prompt)
    return temizle_ve_parse_et(response.text)

async def yaz_senarist(iskelet, konsept_data, user_data):
    """2. Aşama: Hikaye Yazma"""
    print("✍️ Senarist hikayeyi yazıyor...")
    
    prompt = f"""
    Sen korku yazarısın. ELİNDEKİ PLAN: {json.dumps(iskelet)}
    
    GÖREV: '{konsept_data['baslik']}' hikayesini detaylandır.
    ATMOSFER: {konsept_data['ai_odak']} hissiyatını oyuncuya geçir.
    OYUNCU: {user_data.oyuncu_adi} | EŞYA: {user_data.esya} | KORKU: {user_data.korku}

    !!! KRİTİK KURAL !!!
    - 1-9. Sahneler: Doğru cevap -> "DEVAM", Yanlış -> "OLUM"
    - 10. Sahne: Doğru cevap KESİNLİKLE "KAZANDIN"

    ÇIKTI FORMATI:
    {{
      "oyun_adi": "{konsept_data['baslik']}",
      "sahneler": [
        {{
           "sahne_no": 1,
           "mekan_betimlemesi": "...",
           "secenekler": [
              {{ "id": "A", "metin": "...", "sonuc": "DEVAM", "sonuc_metni": "..." }}, 
              {{ "id": "B", "metin": "...", "sonuc": "OLUM", "sonuc_metni": "..." }}
           ]
        }}
      ]
    }}
    """
    
    response = AI_MODEL.generate_content(prompt)
    return temizle_ve_parse_et(response.text)