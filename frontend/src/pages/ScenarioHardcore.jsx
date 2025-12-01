import React from 'react';
import LightRays from '../components/LightRays';
import InfiniteMenu from '../components/InfiniteMenu';

const items = [
  {
    id: 'hard_kor',
    image: '/assets/categoriesHardcore/KorveSagir.png',
    link: 'https://google.com/',
    title: 'Kör ve Sağır',
    description: 'Dünyan tamamen karanlık ve sessiz. Ne görebiliyorsun ne de duyabiliyorsun. Sadece titreşimleri, ısıyı ve kokuları algılayabiliyorsun. Ve şimdi burnuna yoğun bir duman kokusu geliyor; evde yangın çıktı. Duyularını kullanarak alevlerin arasından çıkış yolunu bulmalısın.'
  },
  {
    id: 'hard_nukleer',
    image: '/assets/categoriesHardcore/NukleerSiginak.png',
    link: 'https://google.com/',
    title: 'Nükleer Sığınak',
    description: 'Savaşın bittiğini sanıp nükleer sığınağın ağır kapısını açtın. Ancak dışarısı hala ölümcül radyasyonla dolu ve kapı arkandan kilitlendi. Gaz maskenin filtresi sadece 10 dakika dayanacak. Bu süre içinde güvenli bir bölge veya yeni bir filtre bulamazsan sonun gelecek.'
  },
  {
    id: 'hard_parasut',
    image: '/assets/categoriesHardcore/ParasutsuzDusus.png',
    link: 'https://google.com/',
    title: 'Paraşütsüz Düşüş',
    description: 'Uçaktan atladın, rüzgar yüzüne çarpıyor ama ipi çektiğinde paraşütün açılmadığını fark ettin. Yere çakılmana sadece 60 saniye var. Hızla düşerken havada süzülen enkaz parçalarını veya yedek paraşütü yakalamak için fizik kurallarını zorlayan bir mucize yaratmalısın.'
  },
  {
    id: 'hard_okyanus',
    image: '/assets/categoriesHardcore/OkyanusunOrtasi.png',
    link: 'https://google.com/',
    title: 'Okyanusun Ortası',
    description: 'Uçsuz bucaksız okyanusun ortasında, küçük bir tahta salın üzerindesin. Etrafında dönen köpekbalığı yüzgeçleri çemberi daraltıyor. İçme suyun yok, güneş tepede acımasızca yakıyor ve zihnin sana oyunlar oynamaya başladı. Hayatta kalmak için iradeni çelik gibi tutmalısın.'
  },
  {
    id: 'hard_magara',
    image: '/assets/categoriesHardcore/SuDoluMagara.png',
    link: 'https://google.com/',
    title: 'Su Dolu Mağara',
    description: 'Derin bir su altı mağarasında keşif yaparken kayaların arasına sıkıştın. Oksijen tüpündeki hava kritik seviyede azalıyor ve fenerin titreyerek söndü. Zifiri karanlıkta, daracık bir alanda boğulma korkusuyla savaşırken çıkış yolunu el yordamıyla bulmalısın.'
  },
  {
    id: 'hard_cig',
    image: '/assets/categoriesHardcore/ÇigAltinda.png',
    link: 'https://google.com/',
    title: 'Çığ Altında',
    description: 'Dağcılık yaparken korkunç bir gürültüyle çığ düştü ve tonlarca karın altında kaldın. Hareket edemiyorsun, soğuk iliklerine işliyor ve hipotermi başlıyor. Hangi yönün yukarı olduğunu bile bilmiyorsun. Kalan azıcık oksijenini harcamadan doğru yöne kazmak için içgüdülerine güvenmelisin.'
  }
];

const ScenarioHardcore = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: '#000', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#8B0000"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          fadeDistance={2.0}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
        />
      </div>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 10 }}>
         <InfiniteMenu items={items}/>
      </div>
    </div>
  );
};

export default ScenarioHardcore;
