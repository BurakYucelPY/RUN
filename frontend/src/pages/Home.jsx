import React from 'react';
import GhostCursor from '../components/GhostCursor';

const Home = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <GhostCursor />
      <div style={{ position: 'relative', zIndex: 20, color: '#050505', textAlign: 'center', paddingTop: '20%' }}>
        <button style={{ fontSize: '12rem', fontFamily: 'Arial, sans-serif', background: 'none', border: 'none', color: 'inherit', cursor: 'pointer', padding: 0 }}>𝕽𝔘𝒩!</button>
      </div>
    </div>
  );
};

export default Home;
