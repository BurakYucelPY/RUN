import React from 'react';
import MagicBento from '../components/MagicBento';
import BloodBackground from '../components/BloodBackground';

const CategorySelection = () => {
  return (
    <div style={{ width: '100vw', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '2rem', position: 'relative' }}>
      <BloodBackground />
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <MagicBento />
      </div>
    </div>
  );
};

export default CategorySelection;
