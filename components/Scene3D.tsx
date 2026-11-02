'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useRef } from 'react';
import * as THREE from 'three';

function Model3D() {
  const { scene } = useGLTF('/models/test.glb');
  
  useEffect(() => {
    // Scale and position the model
    scene.scale.set(0.5, 0.5, 0.5);
    scene.position.set(0, -1, 0);
  }, [scene]);

  return <primitive object={scene} />;
}

interface Scene3DProps {
  activeCheckpoint: string;
  onCheckpointClick: (id: string) => void;
}

export default function Scene3D({ activeCheckpoint, onCheckpointClick }: Scene3DProps) {
  const controlsRef = useRef<any>();

  // Camera positions for each checkpoint
  const checkpointPositions: Record<string, { position: [number, number, number]; target: [number, number, number] }> = {
    living: { position: [0, 2, 8], target: [0, 0, 0] },
    bedroom1: { position: [5, 2, 5], target: [5, 0, 0] },
    bedroom2: { position: [-5, 2, 5], target: [-5, 0, 0] },
    kitchen: { position: [0, 2, -5], target: [0, 0, -5] },
    balcony: { position: [0, 3, -8], target: [0, 0, -5] },
  };

  useEffect(() => {
    if (controlsRef.current && activeCheckpoint) {
      const checkpoint = checkpointPositions[activeCheckpoint];
      if (checkpoint) {
        // Animate camera to checkpoint
        const camera = controlsRef.current.object;
        const controls = controlsRef.current;

        // Smooth transition (using simple lerp for demo)
        const startPos = camera.position.clone();
        const endPos = new THREE.Vector3(...checkpoint.position);
        const startTarget = controls.target.clone();
        const endTarget = new THREE.Vector3(...checkpoint.target);

        let progress = 0;
        const duration = 1000; // 1 second
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          progress = Math.min(elapsed / duration, 1);

          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);

          camera.position.lerpVectors(startPos, endPos, eased);
          controls.target.lerpVectors(startTarget, endTarget, eased);
          controls.update();

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        animate();
      }
    }
  }, [activeCheckpoint]);

  return (
    <Canvas
      shadows
      gl={{ antialias: true, alpha: false }}
      dpr={[1, 2]}
      style={{ touchAction: 'none' }}
    >
      {/* Camera */}
      <PerspectiveCamera makeDefault position={[0, 2, 8]} fov={60} />

      {/* Lights */}
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />

      {/* Environment */}
      <Environment preset="apartment" />

      {/* 3D Model */}
      <Suspense fallback={null}>
        <Model3D />
      </Suspense>

      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#f0f0f0" />
      </mesh>

      {/* Controls */}
      <OrbitControls
        ref={controlsRef}
        enableDamping
        dampingFactor={0.05}
        minDistance={3}
        maxDistance={20}
        maxPolarAngle={Math.PI / 2 - 0.1}
        target={[0, 0, 0]}
      />
    </Canvas>
  );
}

// Preload the model
useGLTF.preload('/models/test.glb');
