import React from 'react';
import GhostCursor from '../components/GhostCursor';

const Home = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
      <GhostCursor />
      <div style={{ position: 'relative', zIndex: 20, color: 'white', textAlign: 'center', paddingTop: '20%' }}>
        <h1 style={{ fontSize: '4rem', fontFamily: 'Arial, sans-serif' }}>RUN</h1>
        <p style={{ fontSize: '1.5rem' }}>Hoş Geldiniz</p>
      </div>
    </div>
  );
};

export default Home;
