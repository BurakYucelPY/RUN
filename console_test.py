import asyncio
import json
import data
import ai_service
from models import OyunIstegi

async def test_baslat():
    print("\n========================================")
    print("      RUN OYUNU - KONSOL TESTİ")
    print("========================================\n")

    # 1. Listeyi Göster
    scenarios = data.get_all_scenarios()
    print("Mevcut Senaryolar:")
    for k, v in scenarios.items():
        print(f" - [{k}]: {v['baslik']}")
    
    print("-" * 30)

    # 2. Seçim Yap
    secilen_id = input("\nOynamak istediğin senaryonun KODUNU yaz (örn: komik_hindi): ").strip()

    if secilen_id not in scenarios:
        print("❌ HATA: Böyle bir senaryo kodu yok!")
        return

    # 3. Bilgileri Gir
    print(f"\nSeçilen: {scenarios[secilen_id]['baslik']}")
    isim = input("Adın ne?: ")
    esya = input("Yanındaki Eşya?: ")
    korku = input("En Büyük Korkun?: ")

    istek_paketi = OyunIstegi(
        scenario_id=secilen_id,
        oyuncu_adi=isim,
        esya=esya,
        korku=korku
    )

    # 4. AI Çalışsın
    try:
        # Mimar
        iskelet = await ai_service.planla_mimar(scenarios[secilen_id], istek_paketi)
        if not iskelet:
            return
        
        print("✅ Mimar rotayı çizdi.")

        # Yazar
        oyun_verisi = await ai_service.yaz_senarist(iskelet, scenarios[secilen_id], istek_paketi)
        
        if not oyun_verisi:
            return

        print("\n🎉 OYUN OLUŞTURULDU! İşte ilk sahne:\n")
        
        # Sadece ilk sahneyi basalım ki kalabalık olmasın
        ilk_sahne = oyun_verisi["sahneler"][0]
        print(f"MEKAN: {ilk_sahne['mekan_betimlemesi']}")
        print("\nSEÇENEKLER:")
        for opt in ilk_sahne['secenekler']:
            print(f"- [{opt['id']}] {opt['metin']} (Sonuç: {opt['sonuc']})")
        
        # İstersen tamamını kaydet
        with open("test_sonuc.json", "w", encoding="utf-8") as f:
            json.dump(oyun_verisi, f, ensure_ascii=False, indent=4)
        print("\n💾 Tüm oyun verisi 'test_sonuc.json' dosyasına kaydedildi.")

    except Exception as e:
        print(f"HATA: {e}")

if __name__ == "__main__":
    asyncio.run(test_baslat())