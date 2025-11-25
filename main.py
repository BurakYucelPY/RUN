from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from models import OyunIstegi
import data
import ai_service

app = FastAPI()

# React (Frontend) bağlantı izni
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Güvenlik notu: Yayına alırken buraya site adresi yazılır
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"durum": "RUN API Çalışıyor! (v4 - Full Logic)"}

@app.get("/senaryolar")
def senaryo_listesi():
    """Frontend vitrini için senaryo listesini gönderir."""
    return data.get_all_scenarios()

@app.post("/oyun-baslat")
async def oyunu_baslat(istek: OyunIstegi):
    """
    1. Senaryoyu bulur.
    2. Analist -> Mimar -> Yazar zincirini çalıştırır.
    3. Hazır JSON oyun paketini döner.
    """
    # 1. Senaryo Kontrolü
    senaryo = data.get_scenario(istek.scenario_id)
    if not senaryo:
        raise HTTPException(status_code=404, detail="Senaryo bulunamadı!")

    print(f"🎮 API İSTEĞİ: {senaryo['baslik']} için oyun kuruluyor...")

    try:
        # 2. AŞAMA 1: Analist (Kurguyu Bağla)
        analiz = await ai_service.analist_calistir(senaryo, istek)
        if not analiz:
            raise HTTPException(status_code=500, detail="Analist başarısız oldu.")

        # 3. AŞAMA 2: Mimar (Rotayı Çiz)
        iskelet = await ai_service.planla_mimar(analiz, senaryo, istek)
        if not iskelet:
            raise HTTPException(status_code=500, detail="Mimar başarısız oldu.")

        # 4. AŞAMA 3: Senarist (Hikayeyi Yaz)
        oyun_verisi = await ai_service.yaz_senarist(iskelet, analiz, senaryo, istek)
        if not oyun_verisi:
            raise HTTPException(status_code=500, detail="Senarist başarısız oldu.")
        
        print("✅ Oyun paketi başarıyla hazırlandı ve gönderildi.")
        return oyun_verisi
        
    except Exception as e:
        print(f"❌ SUNUCU HATASI: {e}")
        # Hata detayını frontend'e de gönderelim ki ne olduğunu anlayalım
        raise HTTPException(status_code=500, detail=str(e))