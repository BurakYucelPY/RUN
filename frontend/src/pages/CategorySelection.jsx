import React from 'react';
import MagicBento from '../components/MagicBento';
import BloodBackground from '../components/BloodBackground';
import BlurText from '../components/BlurText';

const CategorySelection = () => {
  return (
    <div style={{ width: '100vw', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '1rem', paddingTop: '1rem', position: 'relative' }}>
      <BloodBackground />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <BlurText
          text="Kaderini Seç!"
          delay={400}
          stepDuration={1}
          animateBy="words"
          direction="top"
          className="text-4xl mb-8 font-bold text-white"
          style={{
            fontSize: '2.8rem',
            fontWeight: '900',
            marginBottom: '1.0rem',
            color: '#e0e0e0',
            textShadow: '0 0 10px rgba(255, 0, 0, 0.5)',
            justifyContent: 'center',
          }}
        />
        <MagicBento />
      </div>
    </div>
  );
};

export default CategorySelection;
