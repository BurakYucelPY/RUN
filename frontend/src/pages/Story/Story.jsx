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
    handleGoHome,
    handleRestart
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
    <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: '#000', color: '#fff', overflow: 'hidden', fontFamily: "'Courier New', Courier, monospace" }}>
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

      <div style={{ 
        position: 'relative', 
        zIndex: 1, 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        padding: '40px', 
        boxSizing: 'border-box',
        overflowY: 'auto',
        overflowX: 'hidden'
      }}>
        
        {/* Header / Title */}
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <h1 style={{ 
            color: '#ff0000', 
            margin: 0, 
            textShadow: '0 0 5px #8B0000', 
            fontSize: '3rem', 
            letterSpacing: '5px',
            fontFamily: 'Impact, sans-serif',
            textTransform: 'uppercase'
          }}>
            {storyData.oyun_adi}
          </h1>
        </div>

        {showResult ? (
          // RESULT VIEW
          <div style={{ 
            flex: 1, 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            animation: 'fadeIn 0.5s ease-in'
          }}>
            <div style={{ 
              backgroundColor: 'rgba(0, 0, 0, 0.9)', 
              padding: '50px', 
              border: '1px solid #8B0000',
              boxShadow: '0 0 50px rgba(139, 0, 0, 0.2)',
              textAlign: 'center',
              position: 'relative'
            }}>
              {/* Corner accents */}
              <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '20px', height: '20px', borderTop: '3px solid #ff0000', borderLeft: '3px solid #ff0000' }} />
              <div style={{ position: 'absolute', top: '-1px', right: '-1px', width: '20px', height: '20px', borderTop: '3px solid #ff0000', borderRight: '3px solid #ff0000' }} />
              <div style={{ position: 'absolute', bottom: '-1px', left: '-1px', width: '20px', height: '20px', borderBottom: '3px solid #ff0000', borderLeft: '3px solid #ff0000' }} />
              <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '20px', height: '20px', borderBottom: '3px solid #ff0000', borderRight: '3px solid #ff0000' }} />

              <p style={{ fontSize: '1.3rem', lineHeight: '1.8', marginBottom: '40px', color: '#ddd' }}>
                {resultText}
              </p>
              
              {gameStatus === 'PLAYING' && (
                <button 
                  onClick={handleNextScene}
                  style={{ 
                    padding: '15px 50px', 
                    fontSize: '1.5rem', 
                    cursor: 'pointer', 
                    backgroundColor: '#8B0000', 
                    color: 'white', 
                    border: 'none',
                    fontFamily: 'Impact, sans-serif',
                    letterSpacing: '2px',
                    transition: 'all 0.2s',
                    clipPath: 'polygon(10% 0, 100% 0, 100% 80%, 90% 100%, 0 100%, 0 20%)'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#ff0000';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#8B0000';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  DEVAM ET
                </button>
              )}

              {(gameStatus === 'LOST' || gameStatus === 'WON') && (
                <div>
                  <h2 style={{ 
                    color: gameStatus === 'WON' ? '#00ff00' : '#ff0000', 
                    marginBottom: '30px', 
                    fontSize: '3rem',
                    fontFamily: 'Impact, sans-serif',
                    textShadow: '0 0 20px currentColor'
                  }}>
                    {gameStatus === 'WON' ? 'HAYATTA KALDIN' : 'ÖLDÜN'}
                  </h2>
                  <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                    <button 
                      onClick={handleRestart}
                      style={{ 
                        padding: '15px 40px', 
                        fontSize: '1.2rem', 
                        cursor: 'pointer', 
                        backgroundColor: '#8B0000', 
                        color: '#fff', 
                        border: '1px solid #ff0000',
                        fontFamily: "'Courier New', monospace",
                        transition: 'all 0.3s'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#ff0000';
                        e.target.style.boxShadow = '0 0 15px #ff0000';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#8B0000';
                        e.target.style.boxShadow = 'none';
                      }}
                    >
                      [ BAŞTAN BAŞLA ]
                    </button>

                    <button 
                      onClick={handleGoHome}
                      style={{ 
                        padding: '15px 40px', 
                        fontSize: '1.2rem', 
                        cursor: 'pointer', 
                        backgroundColor: 'transparent', 
                        color: '#fff', 
                        border: '1px solid #fff',
                        fontFamily: "'Courier New', monospace",
                        transition: 'all 0.3s'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#fff';
                        e.target.style.color = '#000';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = '#fff';
                      }}
                    >
                      [ ANA MENÜYE DÖN ]
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          // SCENE VIEW
          <>
            {/* Description Area */}
            <div style={{ 
              flex: 1, 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              marginBottom: '20px' 
            }}>
              <div style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                padding: '40px', 
                width: '90%',
                maxWidth: '1400px',
                position: 'relative',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(139, 0, 0, 0.3)',
                borderLeft: '5px solid #8B0000'
              }}>
                <p style={{  
                  fontSize: '1.4rem', 
                  lineHeight: '1.8', 
                  color: '#e0e0e0',
                  textShadow: '1px 1px 2px #000',
                  textAlign: 'justify'
                }}>
                  {currentScene.mekan_betimlemesi}
                </p>
              </div>
            </div>

            {/* Options Area (Cards) */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: '30px', 
              flexWrap: 'wrap',
              paddingBottom: '20px'
            }}>
              {currentScene.secenekler.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => handleOptionClick(opt)}
                  style={{ 
                    flex: '1 1 300px',
                    maxWidth: '450px',
                    backgroundColor: 'rgba(10, 0, 0, 0.85)', 
                    border: '1px solid #330000',
                    padding: '25px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = '#ff0000';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(139, 0, 0, 0.6)';
                    e.currentTarget.style.backgroundColor = 'rgba(30, 0, 0, 0.9)';
                    e.currentTarget.querySelector('.opt-id').style.color = '#fff';
                    e.currentTarget.querySelector('.opt-id').style.backgroundColor = '#ff0000';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = '#330000';
                    e.currentTarget.style.boxShadow = '0 0 10px rgba(0,0,0,0.5)';
                    e.currentTarget.style.backgroundColor = 'rgba(10, 0, 0, 0.85)';
                    e.currentTarget.querySelector('.opt-id').style.color = '#ff0000';
                    e.currentTarget.querySelector('.opt-id').style.backgroundColor = 'transparent';
                  }}
                >
                  <div className="opt-id" style={{ 
                    fontSize: '1.5rem', 
                    fontWeight: 'bold', 
                    color: '#ff0000', 
                    marginBottom: '15px',
                    border: '1px solid #ff0000',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s'
                  }}>
                    {opt.id}
                  </div>
                  <p style={{ fontSize: '1.1rem', color: '#bbb', lineHeight: '1.5' }}>
                    {opt.metin}
                  </p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Story;
