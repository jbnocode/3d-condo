import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll, ScrollControls } from '@react-three/drei';
import { useCurrentSheet, editable as e } from '@theatre/r3f';
import { val } from '@theatre/core';
import * as THREE from 'three';
import { LightingMode, ViewMode } from '../types';

interface CondoSceneProps {
  selectedFloor: number;
  lightingMode: LightingMode;
  viewMode: ViewMode;
  cameraPhase: 'exterior' | 'flyIn' | 'interior';
}

// Simple condo tower
function CondoTower({ selectedFloor }: { selectedFloor: number }) {
  return (
    <group position={[0, 0, -20]}>
      {/* Main tower body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[8, 40, 8]} />
        <meshStandardMaterial color="#c0c0d0" roughness={0.6} metalness={0.2} />
      </mesh>
      
      {/* Selected floor highlight */}
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

      {/* Windows grid */}
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

// Simple apartment interior
function ApartmentInterior({ lightingMode }: { lightingMode: LightingMode }) {
  const isDark = lightingMode === 'night';
  
  return (
    <group position={[0, 0, 0]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#d4a373" />
      </mesh>

      {/* Walls */}
      {/* Back wall */}
      <mesh position={[0, 3, -10]} receiveShadow>
        <boxGeometry args={[20, 6, 0.2]} />
        <meshStandardMaterial color="#e8e8f0" />
      </mesh>
      
      {/* Left wall */}
      <mesh position={[-10, 3, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[20, 6, 0.2]} />
        <meshStandardMaterial color="#e8e8f0" />
      </mesh>
      
      {/* Right wall */}
      <mesh position={[10, 3, 0]} rotation={[0, Math.PI / 2, 0]} receiveShadow>
        <boxGeometry args={[20, 6, 0.2]} />
        <meshStandardMaterial color="#e8e8f0" />
      </mesh>

      {/* Living room area */}
      <group position={[-5, 0, -5]}>
        {/* Sofa */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[3, 1, 1.5]} />
          <meshStandardMaterial color="#4a5568" />
        </mesh>
        
        {/* Coffee table */}
        <mesh position={[0, 0.3, 2]} castShadow>
          <boxGeometry args={[2, 0.6, 1]} />
          <meshStandardMaterial color="#8b4513" />
        </mesh>
      </group>

      {/* Bedroom area */}
      <group position={[5, 0, -7]}>
        {/* Bed */}
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[2.5, 1, 2]} />
          <meshStandardMaterial color="#5c6bc0" />
        </mesh>
      </group>

      {/* Kitchen area */}
      <group position={[5, 0, 5]}>
        {/* Counter */}
        <mesh position={[0, 0.9, 0]} castShadow>
          <boxGeometry args={[3, 1.8, 0.6]} />
          <meshStandardMaterial color="#78909c" />
        </mesh>
      </group>

      {/* Bathroom */}
      <group position={[-7, 0, 7]}>
        {/* Sink */}
        <mesh position={[0, 0.8, 0]} castShadow>
          <boxGeometry args={[0.8, 1.6, 0.5]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </group>

      {/* Balcony door/window */}
      <mesh position={[0, 2, 9.9]}>
        <boxGeometry args={[4, 4, 0.1]} />
        <meshStandardMaterial
          color={isDark ? '#1a237e' : '#4fc3f7'}
          transparent
          opacity={0.3}
        />
      </mesh>
    </group>
  );
}

function Scene({ selectedFloor, lightingMode, cameraPhase }: CondoSceneProps) {
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const cameraRef = useRef<THREE.PerspectiveCamera>(null);

  useFrame(() => {
    if (cameraPhase === 'interior') {
      const sequenceLength = val(sheet.sequence.pointer.length) as number;
      sheet.sequence.position = scroll.offset * sequenceLength;
    }
  });

  // Camera animation for fly-in
  useEffect(() => {
    if (cameraPhase === 'flyIn' && cameraRef.current) {
      const startPos = new THREE.Vector3(0, selectedFloor * 0.8 - 10, 15);
      const endPos = new THREE.Vector3(0, 1.6, 8);
      const startTime = Date.now();
      const duration = 3000;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        if (cameraRef.current) {
          cameraRef.current.position.lerpVectors(startPos, endPos, eased);
          cameraRef.current.lookAt(0, 1.6, 0);
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }
  }, [cameraPhase, selectedFloor]);

  const isDark = lightingMode === 'night';
  const bgColor = isDark ? '#0a0a1e' : '#87ceeb';
  const ambientIntensity = isDark ? 0.2 : 0.6;
  const sunIntensity = isDark ? 0.1 : 1.5;

  return (
    <>
      <color attach="background" args={[bgColor]} />
      <fog attach="fog" args={[bgColor, 10, 50]} />
      
      <ambientLight intensity={ambientIntensity} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={sunIntensity}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Moon light for night mode */}
      {isDark && (
        <pointLight position={[5, 10, 5]} intensity={0.3} color="#a5b8ff" />
      )}

      {cameraPhase === 'exterior' && <CondoTower selectedFloor={selectedFloor} />}
      {(cameraPhase === 'flyIn' || cameraPhase === 'interior') && (
        <ApartmentInterior lightingMode={lightingMode} />
      )}

      <e.perspectiveCamera
        ref={cameraRef}
        theatreKey="Camera"
        makeDefault
        position={cameraPhase === 'exterior' ? [0, 5, 25] : [0, 1.6, 8]}
        fov={75}
        near={0.1}
        far={100}
      />
    </>
  );
}

export default function CondoScene(props: CondoSceneProps) {
  return (
    <ScrollControls pages={props.cameraPhase === 'interior' ? 5 : 0}>
      <Scene {...props} />
    </ScrollControls>
  );
}
