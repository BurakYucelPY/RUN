import React from 'react';
import GhostCursor from '../components/GhostCursor';

const Home = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <GhostCursor />
      <div style={{ position: 'relative', zIndex: 20, color: '#050505', textAlign: 'center', paddingTop: '20%' }}>
        <button style={{ fontSize: '12rem', fontFamily: 'Arial, sans-serif', background: 'rgba(177, 158, 239, 0.03)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '30px', color: 'inherit', cursor: 'pointer', padding: '0 4rem', transition: 'all 0.3s ease', userSelect: 'none', WebkitUserSelect: 'none', MozUserSelect: 'none', msUserSelect: 'none' }}>𝕽𝔘𝒩!</button>
      </div>
    </div>
  );
};

export default Home;
