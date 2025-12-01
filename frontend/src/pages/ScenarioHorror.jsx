import React from 'react';
import LightRays from '../components/LightRays';
import InfiniteMenu from '../components/InfiniteMenu';

const items = [
  {
    image: '/assets/categoriesHorror/DiriDiriGomulen.png',
    link: 'https://google.com/',
    title: 'Diri Diri Gömülen',
    description: 'Gözlerini açtığında zifiri karanlık seni karşılıyor. Ciğerlerine dolan ağır toprak kokusu ve daracık bir alanda sıkışmış olmanın verdiği dehşet... Hareket edemiyorsun, üzerindeki tahta kapağın ağırlığını hissediyorsun. Tonlarca toprağın altındasın ve oksijenin her saniye azalıyor.'
  },
  {
    image: '/assets/categoriesHorror/AkılHastanesiBlokC.png',
    link: 'https://google.com/',
    title: 'Akıl Hastanesi: Blok C',
    description: 'Yıllar önce kapatılmış, çürümeye yüz tutmuş bir akıl hastanesinin soğuk koridorlarındasın. Duvarlardaki dökülen boyalar ve paslı tekerlekli sandalyeler geçmişin acılarını haykırıyor. Ama burası tamamen boş değil; koridorun sonundan gelen ağır, sürüklenen ayak sesleri sana doğru yaklaşıyor.'
  },
  {
    image: '/assets/categoriesHorror/GeceYarisiMetro.png',
    link: 'https://google.com/',
    title: 'Gece Yarısı Metro',
    description: 'Gecenin en karanlık saatinde, son metro seferindesin. Tünelin tam ortasında aniden ışıklar kesildi ve motorlar sustu. Acil durum ışıklarının titrek aydınlığında, vagonun diğer ucunda insan olmayan bir silüetin sana doğru baktığını fark ediyorsun.'
  },
  {
    image: '/assets/categoriesHorror/SeriKatilinBodrumu.png',
    link: 'https://google.com/',
    title: 'Seri Katilin Bodrumu',
    description: 'Soğuk ve nemli bir bodrum katında, ellerin ve ayakların sandalyeye sıkıca bağlanmış halde uyanıyorsun. Duvarda paslı testereler ve garip aletler asılı. Üst kattan gelen ağır adım sesleri ve bıçak bileme gürültüsü, katilin işini bitirmek için aşağı inmek üzere olduğunu haber veriyor.'
  },
  {
    image: '/assets/categoriesHorror/LanetliBebek.png',
    link: 'https://google.com/',
    title: 'Lanetli Bebek',
    description: 'Fırtınalı bir gecede evde tek başınasın. Odanın köşesindeki antika porselen bebeğin yeri, sen her arkamı döndüğünde değişiyor. Şimdi ise cam gibi parlayan gözleriyle doğrudan sana bakıyor ve yüzünde daha önce olmayan, tüyler ürpertici bir gülümseme var.'
  },
  {
    image: '/assets/categoriesHorror/OtelOdasi303.png',
    link: 'https://google.com/',
    title: 'Otel Odası 303',
    description: 'Yorgun argın girdiğin Otel Odası 303\'ün kapısı arkandan kendiliğinden kilitlendi. Duvardaki eski tablolardaki gözlerin seni izlediğini hissediyorsun. Boş banyodan gelen su sesleri ve aynadaki buğuda beliren yardım çığlıkları, bu odadan çıkışın kolay olmayacağını fısıldıyor.'
  }
];

const ScenarioHorror = () => {
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

export default ScenarioHorror;
