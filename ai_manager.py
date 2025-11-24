import os
import json
from dotenv import load_dotenv
import google.generativeai as genai

load_dotenv()

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

# JSON formatında çıktı vermesi için ayar yapıyoruz
config = {
    "response_mime_type": "application/json"
}

model = genai.GenerativeModel("gemini-2.5-flash", generation_config=config)

# AI'ya göndereceğimiz emir (Prompt)
prompt = """
Sen "RUN" adında bir korku/kaçış oyununun yöneticisisin.
GÖREV: Zombi istilası altındaki bir hastanede geçen bir başlangıç sahnesi yaz.

Kurallar:
1. Hikaye kısa ve gerilim dolu olsun.
2. 3 tane seçenek sun (A, B, C).
3. Çıktıyı SADECE şu JSON formatında ver:
{
    "hikaye": "Buraya hikaye gelecek...",
    "secenekler": [
        {"id": "A", "metin": "Seçenek A metni"},
        {"id": "B", "metin": "Seçenek B metni"},
        {"id": "C", "metin": "Seçenek C metni"}
    ]
}
"""

print("⏳ Senaryo hazırlanıyor...")

response = model.generate_content(prompt)

# Gelen cevabı yazdır
print("\n--- AI'DAN GELEN JSON VERİSİ ---")
print(response.text)

# Python'un bunu gerçekten veri olarak anlayıp anlamadığını test edelim
try:
    veri = json.loads(response.text)
    print("\n✅ TEST BAŞARILI: Veri parçalanabiliyor!")
    print("Hikaye:", veri["hikaye"][:50], "...") # İlk 50 harfi göster
    print("1. Buton:", veri["secenekler"][0]["metin"])
except:
    print("\n❌ HATA: Gelen şey JSON değil!")