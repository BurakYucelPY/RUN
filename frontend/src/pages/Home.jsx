import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GhostCursor from '../components/GhostCursor';
import Loader from '../components/Loader';
import { ROUTES } from '../navigation/routes';
import { getAssetPath } from '../utils/assets';

const imagesToPreload = [
  // Main Categories
  getAssetPath('/assets/categories/scifi.jpg'),
  getAssetPath('/assets/categories/komik.jpg'),
  getAssetPath('/assets/categories/korku.jpg'),
  getAssetPath('/assets/categories/tarih.jpg'),
  getAssetPath('/assets/categories/hard.jpg'),
  getAssetPath('/assets/categories/fantastik.jpg'),

  // Comedy
  getAssetPath('/assets/categoriesComedy/DahiBebekBakicisi.png'),
  getAssetPath('/assets/categoriesComedy/KediSimulatoru.png'),
  getAssetPath('/assets/categoriesComedy/SinavdaKopya.png'),
  getAssetPath('/assets/categoriesComedy/TuvaletteKağitBitti.png'),
  getAssetPath('/assets/categoriesComedy/YanlisDugun.png'),
  getAssetPath('/assets/categoriesComedy/YilbasiHindisi.png'),

  // Horror
  getAssetPath('/assets/categoriesHorror/AkılHastanesiBlokC.png'),
  getAssetPath('/assets/categoriesHorror/DiriDiriGomulen.png'),
  getAssetPath('/assets/categoriesHorror/GeceYarisiMetro.png'),
  getAssetPath('/assets/categoriesHorror/LanetliBebek.png'),
  getAssetPath('/assets/categoriesHorror/OtelOdasi303.png'),
  getAssetPath('/assets/categoriesHorror/SeriKatilinBodrumu.png'),

  // SciFi
  getAssetPath('/assets/categoriesSciFi/KriyojenikUyanış.png'),
  getAssetPath('/assets/categoriesSciFi/MarstaTekBaşına.png'),
  getAssetPath('/assets/categoriesSciFi/NeonŞehriKaçışı.png'),
  getAssetPath('/assets/categoriesSciFi/UzaylıDeneyi.png'),
  getAssetPath('/assets/categoriesSciFi/ZamanDongusu.png'),
  getAssetPath('/assets/categoriesSciFi/İsyankarYapayZeka.png'),

  // History
  getAssetPath('/assets/categoriesHistory/BatanGemiTitanik.png'),
  getAssetPath('/assets/categoriesHistory/FiravununLaneti.png'),
  getAssetPath('/assets/categoriesHistory/GladyatorArenasi.png'),
  getAssetPath('/assets/categoriesHistory/SiperSavaşi1917.png'),
  getAssetPath('/assets/categoriesHistory/VahsiBatiSoygunu.png'),
  getAssetPath('/assets/categoriesHistory/VikingBaskini.png'),

  // Hardcore
  getAssetPath('/assets/categoriesHardcore/KorveSagir.png'),
  getAssetPath('/assets/categoriesHardcore/NukleerSiginak.png'),
  '/assets/categoriesHardcore/OkyanusunOrtasi.png',
  '/assets/categoriesHardcore/ParasutsuzDusus.png',
  '/assets/categoriesHardcore/SuDoluMagara.png',
  '/assets/categoriesHardcore/ÇigAltinda.png',

  // Fantasy
  '/assets/categoriesFantasy/BuyucuKulesi.png',
  '/assets/categoriesFantasy/DolunayGecesi.png',
  '/assets/categoriesFantasy/EjderhaHazinesi.png',
  '/assets/categoriesFantasy/HayaletKorsanGemisi.png',
  '/assets/categoriesFantasy/MinotaurunLabirenti.png',
  '/assets/categoriesFantasy/VampirSatosu.png'
];

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const preloadImages = async () => {
      const promises = imagesToPreload.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // Continue even if one fails
        });
      });

      await Promise.all(promises);
      // Short delay to ensure smooth transition
      setTimeout(() => setIsLoading(false), 500);
    };

    preloadImages();
  }, []);

  if (isLoading) {
    return (
      <div style={{ width: '100vw', height: '100vh', backgroundColor: '#000', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Loader />
      </div>
    );
  }

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <GhostCursor color="#ff0000" />
      <div style={{ position: 'relative', zIndex: 20, color: '#050505', textAlign: 'center', paddingTop: '20%' }}>
        <button 
          onClick={() => navigate(ROUTES.CATEGORY_SELECTION)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ fontSize: '12rem', fontFamily: 'Arial, sans-serif', background: 'rgba(177, 158, 239, 0.03)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '30px', color: 'inherit', cursor: 'pointer', padding: '0 4rem', transition: 'all 0.3s ease', userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}
        >
          <span style={{ display: 'inline-block', transform: isHovered ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
            𝕽𝔘𝒩!
          </span>
        </button>
      </div>
    </div>
  );
};

export default Home;
