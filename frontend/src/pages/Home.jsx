import React, { useState } from 'react';
import GhostCursor from '../components/GhostCursor';

const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <GhostCursor />
      <div style={{ position: 'relative', zIndex: 20, color: '#050505', textAlign: 'center', paddingTop: '20%' }}>
        <button 
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
