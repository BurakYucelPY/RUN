import os
import json
from dotenv import load_dotenv
import google.generativeai as genai

# 1. Ayarları Yükle
load_dotenv()
api_key = os.getenv("GOOGLE_API_KEY")

if not api_key:
    print("❌ HATA: API Key yok!")
    exit()

genai.configure(api_key=api_key)

# Senin istediğin model ve JSON modu
config = {"response_mime_type": "application/json"}
model = genai.GenerativeModel("gemini-2.5-flash", generation_config=config)

# --- TEST VERİLERİMİZ ---
KONSEPT = "Terk Edilmiş Sovyet Laboratuvarı"
OYUNCU = "Burak"
ESYA = "Paslı İngiliz Anahtarı"
KORKU = "Karanlık ve Dar Alanlar"

print(f"🧪 Test Başlıyor... Konsept: {KONSEPT}")

# --- ADIM 1: OYUN MİMARI (İskelet) ---
print("\n🏗️ ADIM 1: Mimar iskeleti kuruyor...")

mimar_prompt = f"""
Sen uzman bir oyun mimarısın.
GÖREV: '{KONSEPT}' temasında geçen, tam 10 AŞAMALI bir kaçış rotası planla.

OYUNCU PROFİLİ:
- İsim: {OYUNCU}
- Yanındaki Eşya: {ESYA}
- Korkusu: {KORKU}

PLANLAMA KURALLARI:
1. Sahne 1'de başlar, Sahne 10'da kesinlikle kurtulur.
2. Aradaki her sahnede bir engel ve 3 çözüm yolu olsun.
3. Sadece Olay Örgüsünü planla.

ÇIKTIYI ŞU JSON FORMATINDA VER:
{{
  "ozet": "Oyunun genel akışı...",
  "rota": [
    {{ "no": 1, "mekan": "...", "ana_tehdit": "...", "cozum_yolu": "..." }},
    ... (10 sahne olacak)
  ]
}}
"""

mimar_cevap = model.generate_content(mimar_prompt)
plan = json.loads(mimar_cevap.text)
print("✅ Mimar planı bitirdi.")


# --- ADIM 2: SENARİST (DÜZELTİLMİŞ VERSİYON) ---
print("\n✍️ ADIM 2: Senarist detaylı hikayeyi yazıyor...")

yazar_prompt = f"""
Sen dünyaca ünlü bir korku romanı yazarısın.
ELİNDEKİ PLAN: {json.dumps(plan)}

GÖREV: Bu planı al ve oynanabilir, detaylı bir metin tabanlı oyuna çevir.

YAZIM KURALLARI (ÇOK ÖNEMLİ):
1. **Atmosfer:** Kullanıcı ({OYUNCU}) oradaymış gibi hissetmeli. {KORKU} hissini betimle.
2. **Eşya Kullanımı:** '{ESYA}' kullanımını hikayeye yedir.
3. **Seçenekler:** Her sahnede 3 seçenek ver (A, B, C).
4. **Ölüm Mesajları:** Yanlış seçimlerde trajik/komik ölüm metinleri yaz.

!!! KRİTİK KURAL (SONUÇ TİPLERİ) !!!
- Ara Sahneler (1-9): Doğru cevabın sonucu "DEVAM", yanlışların sonucu "OLUM".
- Final Sahnesi (10): Doğru cevabın sonucu KESİNLİKLE "KAZANDIN" olmalı. Asla "DEVAM" yazma. Yanlışlar yine "OLUM".

ÇIKTI FORMATI (JSON):
{{
  "oyun_adi": "...",
  "sahneler": [
    {{
       "sahne_no": 1,
       "mekan_betimlemesi": "...",
       "secenekler": [
          {{ "id": "A", "metin": "...", "sonuc": "DEVAM", "sonuc_metni": "..." }}, 
          {{ "id": "B", "metin": "...", "sonuc": "OLUM", "sonuc_metni": "..." }}
       ]
    }},
    ...
    {{
       "sahne_no": 10,
       "mekan_betimlemesi": "FİNAL SAHNESİ...",
       "secenekler": [
          {{ "id": "A", "metin": "Doğru Kaçış Yolu", "sonuc": "KAZANDIN", "sonuc_metni": "Tebrikler, gün ışığına çıktın!" }},
          {{ "id": "B", "metin": "Yanlış Yol", "sonuc": "OLUM", "sonuc_metni": "Son anda öldün..." }}
       ]
    }}
  ]
}}
"""

final_cevap = model.generate_content(yazar_prompt)
oyun_verisi = json.loads(final_cevap.text)

# --- KONTROL ---
son_sahne = oyun_verisi["sahneler"][-1]
print("\n🔍 SON SAHNE KONTROLÜ:")
for secenek in son_sahne["secenekler"]:
    if secenek["sonuc"] == "KAZANDIN":
        print(f"✅ Doğru seçenek ('{secenek['metin']}') -> Sonuç: {secenek['sonuc']}")

# Kaydet
with open("hazir_oyun.json", "w", encoding="utf-8") as f:
    json.dump(oyun_verisi, f, ensure_ascii=False, indent=4)

print("\n📂 'hazir_oyun.json' güncellendi.")