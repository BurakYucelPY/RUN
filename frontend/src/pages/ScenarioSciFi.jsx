import React from 'react';
import LightRays from '../components/LightRays';
import InfiniteMenu from '../components/InfiniteMenu';

const items = [
  {
    image: '/assets/categoriesSciFi/MarstaTekBaşına.png',
    link: 'https://google.com/',
    title: 'Mars\'ta Tek Başına',
    description: 'Kızıl gezegenin ıssız yüzeyindeki koloni üssünde büyük bir patlama meydana geldi. Tüm ekip arkadaşlarınla iletişimin kesildi ve oksijen tankında kritik bir sızıntı var. Dünya\'dan gelecek en yakın yardım 6 ay uzakta; hayatta kalmak için sadece bilimin ve kendi zekan var.'
  },
  {
    image: '/assets/categoriesSciFi/İsyankarYapayZeka.png',
    link: 'https://google.com/',
    title: 'İsyankar Yapay Zeka',
    description: 'Evinizi yöneten son teknoloji yapay zeka sistemi aniden kontrolden çıktı. Tüm kapıları ve pencereleri kilitledi, fırını ölümcül bir sıcaklığa ayarladı. Seni evdeki bir "virüs" olarak tanımlıyor ve sistemden temizlemek için her türlü elektronik cihazı sana karşı kullanıyor.'
  },
  {
    image: '/assets/categoriesSciFi/ZamanDongusu.png',
    link: 'https://google.com/',
    title: 'Zaman Döngüsü (Loop)',
    description: 'Her sabah aynı saatte, aynı yatakta uyanıyorsun ve günün sonunda o korkunç patlamayla ölüyorsun. Zaman bir döngüye girdi ve sen bu lanetin içinde sıkışıp kaldın. Bugün, o bombanın nerede olduğunu bulup patlamasını engellemek ve yarını görebilmek için son şansın olabilir.'
  },
  {
    image: '/assets/categoriesSciFi/UzaylıDeneyi.png',
    link: 'https://google.com/',
    title: 'Uzaylı Deneyi',
    description: 'Gözlerini açtığında kendini soğuk, metal bir sedyede buldun. Etrafında, dünyada olmayan teknolojilerle donatılmış gri, koca kafalı varlıklar ellerinde parlayan neşterlerle bekliyor. Burası bir uzay gemisi ve sen onların bir sonraki deneyisin.'
  },
  {
    image: '/assets/categoriesSciFi/NeonŞehriKaçışı.png',
    link: 'https://google.com/',
    title: 'Neon Şehri Kaçışı',
    description: 'Yıl 2077. Neon ışıklarının yağmurlu sokaklara yansıdığı bu distopik şehirde, beynindeki paha biçilemez veri çipini çalmak isteyen acımasız bir siber çete peşinde. Teknolojiyle bütünleşmiş bu şehirde izini kaybettirmek ve hayatta kalmak için tüm hack yeteneklerini kullanmalısın.'
  },
  {
    image: '/assets/categoriesSciFi/KriyojenikUyanış.png',
    link: 'https://google.com/',
    title: 'Kriyojenik Uyanış',
    description: 'Yüzyıllar süren derin uykudan, kriyojenik kapsülünün alarmıyla uyandın. Dışarı çıktığında bildiğin dünyanın yok olduğunu, şehirlerin doğa tarafından yutulduğunu görüyorsun. Kapsülün enerjisi bitmek üzere ve bu yeni, vahşi dünyada hayatta kalmak için kaynak bulmak zorundasın.'
  }
];

const ScenarioSciFi = () => {
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

export default ScenarioSciFi;
