import React from 'react';
import LightRays from '../components/LightRays';
import InfiniteMenu from '../components/InfiniteMenu';

const items = [
  {
    image: '/assets/categoriesHistory/BatanGemiTitanik.png',
    link: 'https://google.com/',
    title: 'Batan Gemi: Titanik',
    description: 'Devasa gemi Titanik, buzdağına çarptıktan sonra hızla sulara gömülüyor. Sen alt kattaki kamaradasın ve buz gibi okyanus suyu kapının altından içeri dolmaya başladı. Kapı sıkışmış durumda ve koridorlardaki panik dolu çığlıklar, zamanın daraldığını haykırıyor.'
  },
  {
    image: '/assets/categoriesHistory/FiravununLaneti.png',
    link: 'https://google.com/',
    title: 'Firavunun Laneti',
    description: 'Büyük Piramit\'in keşfedilmemiş derinliklerinde yolunu kaybettin. Elindeki meşale son nefesini verirken, antik tuzakların mekanik sesleri yankılanmaya başladı. Firavunun laneti uyanıyor ve bu labirentten çıkmak için antik bulmacaları çözmek zorundasın.'
  },
  {
    image: '/assets/categoriesHistory/GladyatorArenasi.png',
    link: 'https://google.com/',
    title: 'Gladyatör Arenası',
    description: 'Roma Kolezyumu\'nun kumlu zeminindesin, binlerce seyirci kan istiyor. İmparator locasından sana bakarken, karşındaki demir kapı gürültüyle açılıyor. Karanlığın içinden günlerdir aç bırakılmış devasa bir aslan çıkıyor ve elinde seni koruyacak hiçbir silah yok.'
  },
  {
    image: '/assets/categoriesHistory/SiperSavaşi1917.png',
    link: 'https://google.com/',
    title: 'Siper Savaşı 1917',
    description: '1917, Batı Cephesi. Düşman hattının arkasında mahsur kaldın ve gökyüzünü sarı bir duman kaplamaya başladı. Gaz saldırısı sireni acı acı çalıyor, ciğerlerini yakacak bu ölümcül buluttan korunmak için gaz maskeni bulman gerek, ama nerede?'
  },
  {
    image: '/assets/categoriesHistory/VahsiBatiSoygunu.png',
    link: 'https://google.com/',
    title: 'Vahşi Batı Soygunu',
    description: 'Vahşi Batı\'nın tozlu kasabasında planladığınız banka soygunu ters gitti. Şerif ve adamları binayı dört bir yandan kuşattı, mermiler camları parçalayarak içeri yağıyor. Cephanen bitmek üzere ve buradan sağ çıkmak için kurnazca bir plana ihtiyacın var.'
  },
  {
    image: '/assets/categoriesHistory/VikingBaskini.png',
    link: 'https://google.com/',
    title: 'Viking Baskını',
    description: 'Sabahın sisli havasında, ufukta beliren ejderha başlı gemiler felaketin habercisiydi. Vikingler sahile çıktı ve köyün alevler içinde. Aileni korumak ve onları güvenli bir yere ulaştırmak için yanan evlerin arasından geçip ormanın derinliklerine kaçmalısın.'
  }
];

const ScenarioHistory = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: '#000', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#ff0000"
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

export default ScenarioHistory;
