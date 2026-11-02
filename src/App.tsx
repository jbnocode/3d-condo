import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { getProject } from '@theatre/core';
import { SheetProvider } from '@theatre/r3f';
import CondoScene from './components/CondoScene';
import FloorSelector from './components/FloorSelector';
import Controls from './components/Controls';
import AgentBranding from './components/AgentBranding';
import NavigationHotspots from './components/NavigationHotspots';
import { AgentInfo, LightingMode, ViewMode } from './types';
import theatreState from './theatreState.json';

function App() {
  const [selectedFloor, setSelectedFloor] = useState<number>(12);
  const [lightingMode, setLightingMode] = useState<LightingMode>('day');
  const [viewMode, setViewMode] = useState<ViewMode>('walkthrough');
  const [agentInfo, setAgentInfo] = useState<AgentInfo | null>(null);
  const [showFloorSelector, setShowFloorSelector] = useState(true);
  const [cameraPhase, setCameraPhase] = useState<'exterior' | 'flyIn' | 'interior'>('exterior');

  // Parse agent info from URL query params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const agent = params.get('agent');
    const phone = params.get('phone');
    
    if (agent || phone) {
      setAgentInfo({
        name: agent || 'Real Estate Agent',
        phone: phone || '',
      });
    }
  }, []);

  const sheet = getProject('Condo Walkthrough', { state: theatreState }).sheet('Scene');

  const handleFloorSelect = (floor: number) => {
    setSelectedFloor(floor);
    setShowFloorSelector(false);
    setCameraPhase('flyIn');
    
    // Transition to interior after fly-in animation
    setTimeout(() => {
      setCameraPhase('interior');
    }, 3000);
  };

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative', overflow: 'hidden' }}>
      <Canvas
        shadows
        gl={{ preserveDrawingBuffer: true }}
        camera={{ position: [0, 0, 10], fov: 75 }}
      >
        <SheetProvider sheet={sheet}>
          <CondoScene
            selectedFloor={selectedFloor}
            lightingMode={lightingMode}
            viewMode={viewMode}
            cameraPhase={cameraPhase}
          />
        </SheetProvider>
      </Canvas>

      {showFloorSelector && (
        <FloorSelector
          onSelectFloor={handleFloorSelect}
          totalFloors={30}
        />
      )}

      {!showFloorSelector && cameraPhase === 'interior' && (
        <>
          <NavigationHotspots />
          <Controls
            lightingMode={lightingMode}
            setLightingMode={setLightingMode}
            viewMode={viewMode}
            setViewMode={setViewMode}
          />
        </>
      )}

      {agentInfo && <AgentBranding agentInfo={agentInfo} />}

      {/* Disclaimer */}
      <div
        style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'rgba(255, 255, 255, 0.7)',
          fontSize: '12px',
          textAlign: 'center',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          padding: '8px 16px',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '4px',
          backdropFilter: 'blur(10px)',
        }}
      >
        Artist's rendition · for illustration only
      </div>
    </div>
  );
}

export default App;
