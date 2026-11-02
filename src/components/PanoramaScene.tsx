import { useRef, useState, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { useTexture, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { LightingMode } from '../types';

interface PanoramaSceneProps {
  selectedFloor: number;
  lightingMode: LightingMode;
  cameraPhase: 'exterior' | 'flyIn' | 'interior';
  currentCheckpoint: string;
  onCheckpointChange: (checkpoint: string) => void;
  onLoadStart?: () => void;
  onLoadComplete?: () => void;
}

// Panorama sources - Using Poly Haven CC0 HDRIs converted to equirectangular JPG
// These will be loaded from public/panoramas/
const PANORAMAS: Record<string, { url: string; name: string; author: string }> = {
  living: {
    url: '/panoramas/living-room.jpg',
    name: 'Living Room - Modern Interior',
    author: 'Poly Haven (CC0)',
  },
  bedroom: {
    url: '/panoramas/bedroom.jpg',
    name: 'Bedroom - Lythwood Room',
    author: 'Greg Zaal via Poly Haven (CC0)',
  },
  bathroom: {
    url: '/panoramas/bathroom.jpg',
    name: 'Bathroom - Modern',
    author: 'Adrian Kubasa via Poly Haven (CC0)',
  },
  kitchen: {
    url: '/panoramas/kitchen.jpg',
    name: 'Kitchen/Dining Area',
    author: 'Poly Haven (CC0)',
  },
  balcony: {
    url: '/panoramas/balcony.jpg',
    name: 'Balcony View',
    author: 'Poly Haven (CC0)',
  },
};

// Simple condo tower for exterior view
function CondoTower({ selectedFloor }: { selectedFloor: number }) {
  return (
    <group position={[0, 0, -20]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[8, 40, 8]} />
        <meshStandardMaterial color="#c0c0d0" roughness={0.6} metalness={0.2} />
      </mesh>
      
      <mesh position={[0, -20 + selectedFloor * 1.3, 0]}>
        <boxGeometry args={[8.2, 1.3, 8.2]} />
        <meshStandardMaterial
          color="#ffeb3b"
          emissive="#ffeb3b"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>

      {Array.from({ length: 30 }).map((_, floor) => (
        <group key={floor} position={[0, -19 + floor * 1.3, 0]}>
          {Array.from({ length: 3 }).map((_, i) => (
            <mesh key={i} position={[(-1 + i) * 2.5, 0, 4.05]}>
              <boxGeometry args={[1.5, 1, 0.1]} />
              <meshStandardMaterial color="#4fc3f7" transparent opacity={0.6} />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

// Panorama sphere component with lazy loading
function PanoramaSphere({ 
  panoramaUrl, 
  opacity = 1,
  onLoad,
}: { 
  panoramaUrl: string; 
  opacity?: number;
  onLoad?: () => void;
}) {
  const [texture, setTexture] = useState<THREE.Texture | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const loader = new THREE.TextureLoader();
    
    loader.load(
      panoramaUrl,
      (loadedTexture) => {
        loadedTexture.mapping = THREE.EquirectangularReflectionMapping;
        loadedTexture.colorSpace = THREE.SRGBColorSpace;
        setTexture(loadedTexture);
        setError(false);
        if (onLoad) onLoad();
      },
      undefined,
      (err) => {
        console.error('Error loading panorama:', panoramaUrl, err);
        setError(true);
        if (onLoad) onLoad(); // Still call onLoad to remove loading state
      }
    );

    return () => {
      if (texture) {
        texture.dispose();
      }
    };
  }, [panoramaUrl, onLoad]);

  // Fallback for missing panoramas - gradient sphere
  if (error || !texture) {
    return (
      <mesh scale={[-1, 1, 1]}>
        <sphereGeometry args={[500, 60, 40]} />
        <meshBasicMaterial
          color={error ? '#4a5568' : '#2a2a3e'}
          side={THREE.BackSide}
          transparent={opacity < 1}
          opacity={opacity}
        />
      </mesh>
    );
  }

  return (
    <mesh scale={[-1, 1, 1]}>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}
        transparent={opacity < 1}
        opacity={opacity}
      />
    </mesh>
  );
}

// Transition manager for smooth panorama crossfade
function PanoramaTransition({ 
  currentCheckpoint, 
  lightingMode,
  onLoadStart,
  onLoadComplete,
}: { 
  currentCheckpoint: string; 
  lightingMode: LightingMode;
  onLoadStart?: () => void;
  onLoadComplete?: () => void;
}) {
  const [currentPano, setCurrentPano] = useState(currentCheckpoint);
  const [previousPano, setPreviousPano] = useState<string | null>(null);
  const [transitionProgress, setTransitionProgress] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (currentCheckpoint !== currentPano) {
      setIsLoading(true);
      if (onLoadStart) onLoadStart();
      
      setPreviousPano(currentPano);
      setTransitionProgress(0);
      
      const duration = 800; // ms
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setTransitionProgress(progress);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCurrentPano(currentCheckpoint);
          setPreviousPano(null);
          setIsLoading(false);
          if (onLoadComplete) onLoadComplete();
        }
      };
      
      animate();
    }
  }, [currentCheckpoint, currentPano, onLoadStart, onLoadComplete]);

  const currentPanoramaUrl = PANORAMAS[currentPano]?.url || PANORAMAS.living.url;
  const previousPanoramaUrl = previousPano ? PANORAMAS[previousPano]?.url : null;

  // Apply brightness adjustment for day/night
  const brightness = lightingMode === 'night' ? 0.3 : 1.0;

  const handleLoad = () => {
    if (isLoading) {
      setIsLoading(false);
      if (onLoadComplete) onLoadComplete();
    }
  };

  return (
    <group>
      {previousPanoramaUrl && transitionProgress < 1 && (
        <PanoramaSphere 
          panoramaUrl={previousPanoramaUrl} 
          opacity={1 - transitionProgress}
        />
      )}
      <PanoramaSphere 
        panoramaUrl={currentPanoramaUrl} 
        opacity={transitionProgress}
        onLoad={handleLoad}
      />
      
      {/* Overlay for day/night effect */}
      {brightness < 1 && (
        <mesh scale={[-1, 1, 1]}>
          <sphereGeometry args={[499, 60, 40]} />
          <meshBasicMaterial
            color="#000000"
            side={THREE.BackSide}
            transparent
            opacity={1 - brightness}
          />
        </mesh>
      )}
    </group>
  );
}

export default function PanoramaScene({
  selectedFloor,
  lightingMode,
  cameraPhase,
  currentCheckpoint,
  onLoadStart,
  onLoadComplete,
}: PanoramaSceneProps) {
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);
  const controlsRef = useRef<any>(null);

  // Fly-in animation
  useEffect(() => {
    if (cameraPhase === 'flyIn' && cameraRef.current) {
      const startPos = new THREE.Vector3(0, selectedFloor * 0.8 - 10, 15);
      const endPos = new THREE.Vector3(0, 0, 0);
      const startTime = Date.now();
      const duration = 3000;

      // Disable controls during fly-in
      if (controlsRef.current) {
        controlsRef.current.enabled = false;
      }

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        if (cameraRef.current) {
          cameraRef.current.position.lerpVectors(startPos, endPos, eased);
          cameraRef.current.lookAt(0, 0, 0);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else if (controlsRef.current) {
          // Re-enable controls after fly-in
          controlsRef.current.enabled = true;
        }
      };

      animate();
    }
  }, [cameraPhase, selectedFloor]);

  const bgColor = lightingMode === 'night' ? '#0a0a1e' : '#87ceeb';

  return (
    <>
      <color attach="background" args={[bgColor]} />
      
      {cameraPhase === 'exterior' && (
        <>
          <fog attach="fog" args={[bgColor, 10, 50]} />
          <ambientLight intensity={lightingMode === 'night' ? 0.2 : 0.6} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={lightingMode === 'night' ? 0.1 : 1.5}
            castShadow
          />
          {lightingMode === 'night' && (
            <pointLight position={[5, 10, 5]} intensity={0.3} color="#a5b8ff" />
          )}
          <CondoTower selectedFloor={selectedFloor} />
        </>
      )}

      {(cameraPhase === 'flyIn' || cameraPhase === 'interior') && (
        <PanoramaTransition 
          currentCheckpoint={currentCheckpoint}
          lightingMode={lightingMode}
          onLoadStart={onLoadStart}
          onLoadComplete={onLoadComplete}
        />
      )}

      {cameraPhase === 'interior' && (
        <OrbitControls
          ref={controlsRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={-0.5}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={(3 * Math.PI) / 4}
        />
      )}

      <perspectiveCamera
        ref={cameraRef}
        position={cameraPhase === 'exterior' ? [0, 5, 25] : [0, 0, 0]}
        fov={75}
        near={0.1}
        far={1000}
      />
    </>
  );
}
