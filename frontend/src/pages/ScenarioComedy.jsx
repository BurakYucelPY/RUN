import React from 'react';
import LightRays from '../components/LightRays';
import InfiniteMenu from '../components/InfiniteMenu';

const items = [
  {
    id: 'komik_hindi',
    image: '/assets/categoriesComedy/YilbasiHindisi.png',
    link: 'https://google.com/',
    title: 'Yılbaşı Hindisi',
    description: 'Bu hikayede sen bir hindisin ve yılbaşı yemeği olmana sadece 2 saat kaldı. Fırının ısınma seslerini duyabiliyorsun. Sahibi bıçakları bilerken, mutfaktan kaçıp özgürlüğüne kanat çırpmak için absürt fizik kurallarına meydan okumalısın.'
  },
  {
    id: 'komik_kopya',
    image: '/assets/categoriesComedy/SinavdaKopya.png',
    link: 'https://google.com/',
    title: 'Sınavda Kopya',
    description: 'Hayatının en önemli ve dünyanın en zor matematik sınavındasın, ama tek bir formül bile hatırlamıyorsun. Gözetmen hoca bir şahin gibi sınıfı tarıyor. Yakalanmadan yanındaki inekten kopya çekmek için geliştireceğin stratejiler hem riskli hem de komik olacak.'
  },
  {
    id: 'komik_tuvalet',
    image: '/assets/categoriesComedy/TuvaletteKağitBitti.png',
    link: 'https://google.com/',
    title: 'Tuvalette Kağıt Bitti',
    description: 'Sevgilinin ailesiyle tanıştığın o kritik akşam yemeğindesin. Tuvalete girdin, işini hallettin ama o da ne? Tuvalet kağıdı bitmiş! Dışarıda seni bekleyen müstakbel kayınpederin varken, bu utanç verici durumdan kurtulmak için yaratıcılığının sınırlarını zorlamalısın.'
  },
  {
    id: 'komik_kedi',
    image: '/assets/categoriesComedy/KediSimulatoru.png',
    link: 'https://google.com/',
    title: 'Kedi Simülatörü',
    description: 'Evin tembel kedisi olarak keyfin yerindeydi, ta ki sahibinin o nefret ettiğin taşıma kutusunu çıkardığını görene kadar. Veteriner demek, iğne demek! Evin içinde bir kovalamaca başlatmalı, mobilyaların tepesine tırmanmalı ve o kutuya girmemek için her türlü kedi numarasını yapmalısın.'
  },
  {
    id: 'komik_dugun',
    image: '/assets/categoriesComedy/YanlisDugun.png',
    link: 'https://google.com/',
    title: 'Yanlış Düğün',
    description: 'Eski sevgilinin düğününü basıp onu geri kazanmaya karar verdin. Kapıyı tekmeleyip "İtirazı olan var mı?" diye bağırdığında, tüm davetliler şaşkınlıkla sana baktı. Ancak küçük bir sorun var: Yanlış düğüne geldin ve şimdi bu durumu toparlaman gerekiyor.'
  },
  {
    id: 'komik_bebek',
    image: '/assets/categoriesComedy/DahiBebekBakicisi.png',
    link: 'https://google.com/',
    title: 'Dahi Bebek Bakıcısı',
    description: 'Sıradan bir bebek bakıcılığı işi sandın ama bu bebek normal değil. O, dünyayı ele geçirme planları yapan kötü bir dahi! Altını değiştirirken sana kurduğu tuzaklardan kurtulmalı ve ebeveynleri gelene kadar onun şeytani planlarını bozmalısın.'
  }
];

const ScenarioComedy = () => {
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

export default ScenarioComedy;
