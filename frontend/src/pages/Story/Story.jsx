import React from 'react';
import { useLocation } from 'react-router-dom';
import LightRays from '../../components/LightRays';
import { useStoryLogic } from './StoryLogic';

const Story = () => {
  const location = useLocation();
  const storyData = location.state?.story;
  
  const {
    currentScene,
    showResult,
    resultText,
    gameStatus,
    handleOptionClick,
    handleNextScene,
    handleGoHome
  } = useStoryLogic(storyData);

  if (!storyData || !storyData.sahneler) {
    return (
      <div style={{ width: '100%', height: '100vh', backgroundColor: '#000', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h1>Hikaye yüklenemedi...</h1>
        <button onClick={handleGoHome} style={{ marginLeft: '20px', padding: '10px' }}>Ana Sayfa</button>
      </div>
    );
  }

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: '#000', color: '#fff', overflow: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
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

      <div style={{ position: 'relative', zIndex: 1, padding: '40px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h1 style={{ color: '#ff0000', marginBottom: '20px', textShadow: '0 0 10px #ff0000' }}>{storyData.oyun_adi}</h1>

        {showResult ? (
          <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', padding: '30px', borderRadius: '10px', border: '1px solid #8B0000' }}>
            <p style={{ fontSize: '1.3rem', lineHeight: '1.6', marginBottom: '30px' }}>{resultText}</p>
            
            {gameStatus === 'PLAYING' && (
              <button 
                onClick={handleNextScene}
                style={{ 
                  padding: '15px 30px', 
                  fontSize: '1.2rem', 
                  cursor: 'pointer', 
                  backgroundColor: '#333', 
                  color: 'white', 
                  border: '1px solid white',
                  borderRadius: '5px'
                }}
              >
                DEVAM ET
              </button>
            )}

            {(gameStatus === 'LOST' || gameStatus === 'WON') && (
              <div>
                <h2 style={{ color: gameStatus === 'WON' ? '#00ff00' : '#ff0000', marginBottom: '20px', fontSize: '2rem' }}>
                  {gameStatus === 'WON' ? 'TEBRİKLER, KAZANDIN!' : 'ÖLDÜN...'}
                </h2>
                <button 
                  onClick={handleGoHome}
                  style={{ 
                    padding: '15px 30px', 
                    fontSize: '1.2rem', 
                    cursor: 'pointer', 
                    backgroundColor: '#8B0000', 
                    color: 'white', 
                    border: 'none',
                    borderRadius: '5px',
                    fontWeight: 'bold'
                  }}
                >
                  ANA SAYFAYA DÖN
                </button>
              </div>
            )}
          </div>
        ) : (
          <div style={{ backgroundColor: 'rgba(0,0,0,0.8)', padding: '30px', borderRadius: '10px', border: '1px solid #555' }}>
            <h3 style={{ color: '#aaa', marginBottom: '15px', textAlign: 'left' }}>Sahne {currentScene.sahne_no}</h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '30px', textAlign: 'left' }}>
              {currentScene.mekan_betimlemesi}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              {currentScene.secenekler.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleOptionClick(opt)}
                  style={{ 
                    padding: '20px', 
                    fontSize: '1.1rem', 
                    cursor: 'pointer', 
                    backgroundColor: '#1a1a1a', 
                    color: '#ddd', 
                    border: '1px solid #444',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                    borderRadius: '5px'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#333';
                    e.target.style.borderColor = '#8B0000';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#1a1a1a';
                    e.target.style.borderColor = '#444';
                  }}
                >
                  <span style={{ color: '#ff0000', fontWeight: 'bold', marginRight: '10px' }}>{opt.id}.</span>
                  {opt.metin}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Story;
