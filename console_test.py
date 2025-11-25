import asyncio
import json
import data
import ai_service
from models import OyunIstegi

# Konsol renkleri
YESIL = "\033[92m"
KIRMIZI = "\033[91m"
SARI = "\033[93m"
MAVI = "\033[94m"
RESET = "\033[0m"

async def test_baslat():
    print(f"\n{MAVI}========================================{RESET}")
    print(f"{MAVI}      RUN OYUNU - KONSOL TESTİ (v4){RESET}")
    print(f"{MAVI}========================================{RESET}\n")

    # 1. Listele
    scenarios = data.get_all_scenarios()
    for k, v in scenarios.items():
        print(f" - [{k}]: {v['baslik']}")
    
    # 2. Seç
    secilen_id = input(f"\n{YESIL}KODU YAZ: {RESET}").strip()
    if secilen_id not in scenarios:
        print("❌ Hata: Kod yok.")
        return

    # 3. Bilgiler
    isim = input("Adın: ")
    esya = input("Eşyan: ")
    korku = input("Korkun (Örn: Hayalet): ")

    istek = OyunIstegi(
        scenario_id=secilen_id,
        oyuncu_adi=isim,
        esya=esya,
        korku=korku
    )

    try:
        # AŞAMA 1: Analist
        analiz = await ai_service.analist_calistir(scenarios[secilen_id], istek)
        
        print(f"\n{SARI}🧠 ANALİST RAPORU:{RESET}")
        # BURASI DÜZELTİLDİ: Yeni anahtarları kullanıyoruz
        print(f"Hikaye Konsepti: {analiz.get('hikaye_konsepti', 'Veri Yok')}")
        print(f"Tehdit Görünüşü: {analiz.get('korku_gorunusu', 'Veri Yok')}")
        print(f"Oyuncu Rolü:     {analiz.get('oyuncu_rolu', 'Veri Yok')}")
        
        # AŞAMA 2: Mimar
        iskelet = await ai_service.planla_mimar(analiz, scenarios[secilen_id], istek)
        if not iskelet: return
        print(f"\n{SARI}✅ Mimar planı çizdi.{RESET}")

        # AŞAMA 3: Senarist
        oyun = await ai_service.yaz_senarist(iskelet, analiz, scenarios[secilen_id], istek)
        if not oyun: return

        print(f"\n{YESIL}🎉 OYUN OLUŞTU! İLK SAHNE KONTROLÜ:{RESET}")
        ilk = oyun["sahneler"][0]
        print(f"Mekan: {ilk['mekan_betimlemesi'][:100]}...")
        print("\nSeçenekler:")
        for opt in ilk['secenekler']:
            print(f"- [{opt['id']}] {opt['metin']} (Sonuç: {opt['sonuc']})")
            
        # Kaydet
        with open("test_sonuc.json", "w", encoding="utf-8") as f:
            json.dump(oyun, f, ensure_ascii=False, indent=4)
        print("\n💾 Detaylar 'test_sonuc.json' dosyasına kaydedildi.")

    except Exception as e:
        print(f"{KIRMIZI}HATA: {e}{RESET}")
        # Hata detayını görmek için bunu açabilirsin:
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    asyncio.run(test_baslat())