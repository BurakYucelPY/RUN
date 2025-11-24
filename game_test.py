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

# --- TEST VERİLERİMİZ (Kullanıcıdan gelmiş gibi) ---
KONSEPT = "Terk Edilmiş Sovyet Laboratuvarı"
OYUNCU = "Burak"
ESYA = "Paslı İngiliz Anahtarı"
KORKU = "Karanlık ve Dar Alanlar"

print(f"🧪 Test Başlıyor... Konsept: {KONSEPT}")

# --- ADIM 1: OYUN MİMARI (Sadece İskeleti Kurar) ---
# Amacı: Hikaye yazmak değil, mantıklı bir rota ve ölüm/kalım dengesi kurmak.
print("\n🏗️ ADIM 1: Mimar iskeleti kuruyor...")

mimar_prompt = f"""
Sen uzman bir oyun mimarısın.
GÖREV: '{KONSEPT}' temasında geçen, tam 10 AŞAMALI bir kaçış rotası planla.

OYUNCU PROFİLİ:
- İsim: {OYUNCU}
- Yanındaki Eşya: {ESYA} (Bunu en az 3 yerde kilit rolde kullandır)
- Korkusu: {KORKU} (Bunu atmosferi germek için kullan)

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
print("✅ Mimar planı bitirdi. Rota oluşturuldu.")
# İstersen burada planı yazdırıp bakabilirsin: print(plan)


# --- ADIM 2: SENARİST (Eti Kemiğe Büründürür) ---
# Amacı: Mimarın planını alıp, oyuncuyu içine çeken o edebi metinleri yazmak.
print("\n✍️ ADIM 2: Senarist detaylı hikayeyi yazıyor...")

yazar_prompt = f"""
Sen dünyaca ünlü bir korku romanı yazarısın.
ELİNDEKİ PLAN: {json.dumps(plan)}

GÖREV: Bu planı al ve oynanabilir, detaylı bir metin tabanlı oyuna çevir.

YAZIM KURALLARI (ÇOK ÖNEMLİ):
1. **Atmosfer:** Kullanıcı ({OYUNCU}) oradaymış gibi hissetmeli. Kokuları, sesleri, {KORKU} hissini betimle.
2. **Eşya Kullanımı:** Kullanıcı '{ESYA}'sını kullandığında, bunun hikayeye etkisini detaylı yaz.
3. **Seçenekler:** Her sahnede 3 seçenek ver:
   - A: Mantıklı/Doğru yol (Bir sonraki sahneye geçer)
   - B: Hatalı yol (ÖLÜM ile sonuçlanır)
   - C: Şans/Riskli yol (ÖLÜM ile sonuçlanır)
4. **Ölüm Mesajları:** Kullanıcı ölürse, neden öldüğünü aptalca veya trajik bir dille anlat.

ÇIKTI FORMATI (JSON):
{{
  "oyun_adi": "...",
  "sahneler": [
    {{
       "sahne_no": 1,
       "mekan_betimlemesi": "Burada uzun uzun hikaye anlat...",
       "secenekler": [
          {{ "id": "A", "metin": "...", "sonuc": "DEVAM", "sonuc_metni": "..." }},
          {{ "id": "B", "metin": "...", "sonuc": "OLUM", "sonuc_metni": "Buraya detaylı ölüm senaryosu yaz..." }},
          {{ "id": "C", "metin": "...", "sonuc": "OLUM", "sonuc_metni": "..." }}
       ]
    }},
    ... (10 sahneye kadar devam et)
  ]
}}
"""

# Bu işlem biraz uzun sürer çünkü 10 sayfalık kitap yazıyor gibi düşün.
final_cevap = model.generate_content(yazar_prompt)
oyun_verisi = json.loads(final_cevap.text)

print("\n🎉 OYUN HAZIR! İşte ilk sahne ve örnek bir ölüm:")
print("-" * 50)
print(f"📍 MEKAN: {oyun_verisi['sahneler'][0]['mekan_betimlemesi'][:200]}...") # İlk 200 karakter
print("-" * 50)
print("💀 ÖRNEK ÖLÜM SENARYOSU (Eğer yanlış seçerse):")
print(oyun_verisi['sahneler'][0]['secenekler'][1]['sonuc_metni'])
print("-" * 50)

# Tüm veriyi dosyaya kaydedelim ki inceleyebilesin
with open("hazir_oyun.json", "w", encoding="utf-8") as f:
    json.dump(oyun_verisi, f, ensure_ascii=False, indent=4)

print("\n📂 Tüm oyun 'hazir_oyun.json' dosyasına kaydedildi. Açıp incele.")