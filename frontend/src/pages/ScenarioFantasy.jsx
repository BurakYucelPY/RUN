import React from 'react';
import LightRays from '../components/LightRays';
import InfiniteMenu from '../components/InfiniteMenu';
import { getAssetPath } from '../utils/assets';

const items = [
  {
    id: 'fantastik_ejderha',
    image: getAssetPath('/assets/categoriesFantasy/EjderhaHazinesi.png'),
    link: 'https://google.com/',
    title: 'Ejderha Hazinesi',
    description: 'Alevlerin ve külün hüküm sürdüğü devasa bir inin merkezindesin. Dağ gibi yığılmış altınların üzerinde uyuyan kadim bir ejderha var. Onun nefesi bile havayı yakarken, uyanmadan o efsanevi mücevheri alıp sessizce kaçmak zorundasın.'
  },
  {
    id: 'fantastik_labirent',
    image: getAssetPath('/assets/categoriesFantasy/MinotaurunLabirenti.png'),
    link: 'https://google.com/',
    title: 'Minotaur\'un Labirenti',
    description: 'Kendini efsanevi Minotaur\'un labirentinde buldun. Duvarlar sürekli yer değiştiriyor ve uzaktan gelen canavarın kükremesi kanını donduruyor. Yerdeki eski bir ipi takip ederek, bu ölümcül tuzaklarla dolu labirentten çıkışı bulmalı ve canavara yem olmamalısın.'
  },
  {
    id: 'fantastik_buyu',
    image: getAssetPath('/assets/categoriesFantasy/BuyucuKulesi.png'),
    link: 'https://google.com/',
    title: 'Büyücü Kulesi',
    description: 'Kötü kalpli bir büyücünün kulesinde, yaptığı büyü sonucu bir kurbağaya dönüştün. Artık her şey sana devasa görünüyor. Kedilerden kaçarak ve büyücünün dikkatini çekmeden iksir odasına ulaşmalı, insan formuna dönmeni sağlayacak o karışımı bulmalısın.'
  },
  {
    id: 'fantastik_vampir',
    image: getAssetPath('/assets/categoriesFantasy/VampirSatosu.png'),
    link: 'https://google.com/',
    title: 'Vampir Şatosu',
    description: 'Kont Drakula\'nın kasvetli şatosunun zindanlarında esirsin. Güneş batmak üzere ve şatonun efendileri uyanmak için gün sayıyor. Vampirler tabutlarından çıkıp avlanmaya başlamadan önce bu lanetli yerden kaçmanın bir yolunu bulmalısın.'
  },
  {
    id: 'fantastik_kurt',
    image: getAssetPath('/assets/categoriesFantasy/DolunayGecesi.png'),
    link: 'https://google.com/',
    title: 'Dolunay Gecesi',
    description: 'Arkadaşlarınla ormanda kamp yaparken dolunay bulutların arasından sıyrıldı. En yakın arkadaşın aniden garip sesler çıkarmaya, kemikleri çatırdamaya başladı. O bir kurtadama dönüşürken, hem hayatta kalmalı hem de arkadaşına zarar vermeden onu durdurmalısın.'
  },
  {
    id: 'fantastik_gemi',
    image: getAssetPath('/assets/categoriesFantasy/HayaletKorsanGemisi.png'),
    link: 'https://google.com/',
    title: 'Hayalet Korsan Gemisi',
    description: 'Sislerin arasından çıkan lanetli bir korsan gemisinde uyandın. Mürettebat et ve kemikten değil, iskeletlerden oluşuyor. Onlar fark etmeden güverteye çıkmalı, bir sandal bulmalı ve ruhunu bu hayalet gemiye kaptırmadan önce kaçmalısın.'
  }
];

const ScenarioFantasy = () => {
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

export default ScenarioFantasy;
