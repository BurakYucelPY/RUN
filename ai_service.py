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

config = {"response_mime_type": "application/json"}
AI_MODEL = genai.GenerativeModel("gemini-2.5-flash", generation_config=config)

def temizle_ve_parse_et(text):
    text = text.strip()
    if text.startswith("```json"):
        text = text.replace("```json", "").replace("```", "")
    elif text.startswith("```"):
        text = text.replace("```", "")
    try:
        return json.loads(text)
    except json.JSONDecodeError:
        print(f"❌ JSON PARSE HATASI:\n{text}")
        return None

# --- AŞAMA 1: KURGU ANALİSTİ (Sentezci) ---
async def analist_calistir(konsept_data, user_data):
    print(f"🧠 Analist hikayeyi örüyor... ({konsept_data['baslik']} + {user_data.korku})")
    
    prompt = f"""
    Sen usta bir kurgu uzmanısın.
    GÖREV: Verilen OYUN SENARYOSU ile kullanıcının KORKUSUNU tek bir hikayede birleştir.

    1. OYUNUN BAŞLANGIÇ NOKTASI (KAPAK YAZISI):
    "{konsept_data['kapak_yazisi']}"
    (Bu metin, oyuncunun kim olduğunu, nerede olduğunu ve amacını belirler. Buna sadık kal.)

    2. OYUNCUNUN KORKUSU (TEHDİT):
    "{user_data.korku}"
    (Bu korku unsuru, yukarıdaki senaryonun içine fiziksel bir tehdit olarak girmeli.)

    3. YANINDAKİ EŞYA: {user_data.esya}

    ANALİZ EMRİ:
    - Kapak yazısındaki atmosferi bozmadan, korku unsurunu içeri sok.
    - Örnek: Eğer senaryo "Hindi" ve korku "Uzaylı" ise -> "Uzaylılar mutfağı bastı, hindi fırından kaçarken onlara yakalanmamalı."
    - Örnek: Eğer senaryo "Zindan" ve korku "Palyaço" ise -> "Zindanın gardiyanları palyaço kılığında işkencecilerdir."

    ÇIKTI (JSON):
    {{
      "hikaye_konsepti": "Kapak yazısı ve korkunun birleştiği ana fikir.",
      "korku_gorunusu": "Korku unsurunun bu senaryoda nasıl göründüğü (Fiziksel tanım).",
      "oyuncu_rolu": "Oyuncunun bu tehdit karşısındaki durumu (Kapak yazısına göre)."
    }}
    """
    response = AI_MODEL.generate_content(prompt)
    return temizle_ve_parse_et(response.text)

# --- AŞAMA 2: MİMAR (10 Sahne + 3 Seçenek) ---
async def planla_mimar(analiz, konsept_data, user_data):
    print("🏗️ Mimar rotayı çiziyor...")
    
    prompt = f"""
    Sen oyun mimarısın.
    ANALİST KURGUSU: {json.dumps(analiz)}
    
    GÖREV: 10 sahneli akış oluştur.
    
    KURALLAR:
    1. Hikaye Analistin belirlediği '{analiz['hikaye_konsepti']}' üzerinden ilerlemeli.
    2. Tehdit ({analiz['korku_gorunusu']}) oyuncunun peşinde olmalı.
    3. HER SAHNEDE KESİNLİKLE 3 SEÇENEK (A, B, C) OLACAK.
    
    ÇIKTI (JSON):
    {{
      "rota": [
        {{ "no": 1, "ozet": "...", "secenekler_taslak": ["A...", "B...", "C..."] }},
        ...
      ]
    }}
    """
    response = AI_MODEL.generate_content(prompt)
    return temizle_ve_parse_et(response.text)

# --- AŞAMA 3: SENARİST (Final Metni) ---
async def yaz_senarist(iskelet, analiz, konsept_data, user_data):
    print("✍️ Senarist yazıyor...")
    
    prompt = f"""
    Sen yazarsın. TÜR: {konsept_data['ai_odak']}
    
    MEVCUT DURUM:
    - Oyuncu Kim?: {analiz['oyuncu_rolu']}
    - Tehdit Ne?: {analiz['korku_gorunusu']}
    - Bağlam: {konsept_data['kapak_yazisi']}
    
    İSKELET: {json.dumps(iskelet)}
    
    GÖREV: Tam metni yaz.
    
    YAZIM KURALLARI:
    1. Kapak yazısındaki rolü (Örn: Hindi olmak, Gömülü olmak) asla unutma.
    2. Korku unsurunu fiziksel olarak hissettir.
    3. HER SAHNEYE 3 SEÇENEK KOY (A, B, C).
    4. Sahne 10: Doğru -> KAZANDIN
    
    ÇIKTI (JSON):
    {{
      "oyun_adi": "{konsept_data['baslik']}",
      "sahneler": [
        {{
           "sahne_no": 1,
           "mekan_betimlemesi": "...",
           "secenekler": [
              {{ "id": "A", "metin": "...", "sonuc": "DEVAM", "sonuc_metni": "..." }}, 
              {{ "id": "B", "metin": "...", "sonuc": "OLUM", "sonuc_metni": "..." }},
              {{ "id": "C", "metin": "...", "sonuc": "OLUM", "sonuc_metni": "..." }}
           ]
        }}
      ]
    }}
    """
    response = AI_MODEL.generate_content(prompt)
    return temizle_ve_parse_et(response.text)