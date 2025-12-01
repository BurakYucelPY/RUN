import React from 'react';
import { useLocation } from 'react-router-dom';
import LightRays from '../components/LightRays';

const Story = () => {
  const location = useLocation();
  const storyData = location.state?.story;

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', backgroundColor: '#000', color: '#fff', overflow: 'auto' }}>
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

      <div style={{ position: 'relative', zIndex: 1, padding: '20px' }}>
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
          {JSON.stringify(storyData, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Story;
