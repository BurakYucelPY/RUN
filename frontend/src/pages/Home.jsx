import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GhostCursor from '../components/GhostCursor';
import Loader from '../components/Loader';
import { ROUTES } from '../navigation/routes';

const imagesToPreload = [
  // Main Categories
  '/assets/categories/scifi.jpg',
  '/assets/categories/komik.jpg',
  '/assets/categories/korku.jpg',
  '/assets/categories/tarih.jpg',
  '/assets/categories/hard.jpg',
  '/assets/categories/fantastik.jpg',

  // Comedy
  '/assets/categoriesComedy/DahiBebekBakicisi.png',
  '/assets/categoriesComedy/KediSimulatoru.png',
  '/assets/categoriesComedy/SinavdaKopya.png',
  '/assets/categoriesComedy/TuvaletteKağitBitti.png',
  '/assets/categoriesComedy/YanlisDugun.png',
  '/assets/categoriesComedy/YilbasiHindisi.png',

  // Horror
  '/assets/categoriesHorror/AkılHastanesiBlokC.png',
  '/assets/categoriesHorror/DiriDiriGomulen.png',
  '/assets/categoriesHorror/GeceYarisiMetro.png',
  '/assets/categoriesHorror/LanetliBebek.png',
  '/assets/categoriesHorror/OtelOdasi303.png',
  '/assets/categoriesHorror/SeriKatilinBodrumu.png',

  // SciFi
  '/assets/categoriesSciFi/KriyojenikUyanış.png',
  '/assets/categoriesSciFi/MarstaTekBaşına.png',
  '/assets/categoriesSciFi/NeonŞehriKaçışı.png',
  '/assets/categoriesSciFi/UzaylıDeneyi.png',
  '/assets/categoriesSciFi/ZamanDongusu.png',
  '/assets/categoriesSciFi/İsyankarYapayZeka.png',

  // History
  '/assets/categoriesHistory/BatanGemiTitanik.png',
  '/assets/categoriesHistory/FiravununLaneti.png',
  '/assets/categoriesHistory/GladyatorArenasi.png',
  '/assets/categoriesHistory/SiperSavaşi1917.png',
  '/assets/categoriesHistory/VahsiBatiSoygunu.png',
  '/assets/categoriesHistory/VikingBaskini.png',

  // Hardcore
  '/assets/categoriesHardcore/KorveSagir.png',
  '/assets/categoriesHardcore/NukleerSiginak.png',
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
