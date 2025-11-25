import React from 'react';
import GhostCursor from '../components/GhostCursor';

const Home = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <GhostCursor />
      <div style={{ position: 'relative', zIndex: 20, color: '#050505', textAlign: 'center', paddingTop: '20%' }}>
        <h1 style={{ fontSize: '12rem', fontFamily: 'Arial, sans-serif' }}>𝕽𝔘𝒩!</h1>
      </div>
    </div>
  );
};

export default Home;
