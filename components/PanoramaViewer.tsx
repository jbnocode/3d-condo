'use client';

import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { Html, OrbitControls } from '@react-three/drei';
import {
  Suspense,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import * as THREE from 'three';
import type { Hotspot, Room } from '@/lib/units';

function athToPosition(ath: number, atv: number, radius = 95): [number, number, number] {
  const yaw = THREE.MathUtils.degToRad(ath);
  const pitch = THREE.MathUtils.degToRad(atv);
  return [
    Math.sin(yaw) * Math.cos(pitch) * radius,
    -Math.sin(pitch) * radius,
    -Math.cos(yaw) * Math.cos(pitch) * radius,
  ];
}

function PanoramaSphere({ url }: { url: string }) {
  const texture = useLoader(THREE.TextureLoader, url);
  useLayoutEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.minFilter = THREE.LinearFilter;
    texture.needsUpdate = true;
  }, [texture]);

  const geom = useMemo(() => {
    const g = new THREE.SphereGeometry(500, 64, 48);
    g.scale(-1, 1, 1);
    return g;
  }, []);

  return (
    <mesh geometry={geom}>
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

function FloorHotspot({
  hotspot,
  onJump,
}: {
  hotspot: Hotspot;
  onJump: (id: Hotspot['to']) => void;
}) {
  const pos = athToPosition(hotspot.ath, hotspot.atv);
  return (
    <Html position={pos} center zIndexRange={[20, 0]} style={{ pointerEvents: 'auto' }}>
      <button
        type="button"
        onPointerDown={(e) => e.stopPropagation()}
        onClick={(e) => {
          e.stopPropagation();
          onJump(hotspot.to);
        }}
        className="flex flex-col items-center gap-1.5"
      >
        <span className="whitespace-nowrap text-[12px] font-semibold text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]">
          {hotspot.label}
        </span>
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-ink-900 shadow-overlay ring-2 ring-white/80 transition hover:scale-110">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
            <path
              d="M8 3.2v9.6M4.2 8.8 8 12.8l3.8-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    </Html>
  );
}

function LookControls({ yaw }: { yaw: number }) {
  const ref = useRef<any>(null);
  const { camera } = useThree();

  useLayoutEffect(() => {
    const theta = THREE.MathUtils.degToRad(yaw);
    camera.position.set(-Math.sin(theta) * 0.1, 0, Math.cos(theta) * 0.1);
    camera.lookAt(0, 0, 0);
    const controls = ref.current;
    if (!controls) return;
    controls.target.set(0, 0, 0);
    controls.update();
  }, [yaw, camera]);

  return (
    <OrbitControls
      key={yaw}
      ref={ref}
      enableZoom={false}
      enablePan={false}
      rotateSpeed={-0.42}
      enableDamping
      dampingFactor={0.08}
      minDistance={0.1}
      maxDistance={0.1}
      minPolarAngle={Math.PI * 0.28}
      maxPolarAngle={Math.PI * 0.78}
    />
  );
}

function Scene({
  room,
  onJump,
}: {
  room: Room;
  onJump: (id: Hotspot['to']) => void;
}) {
  return (
    <>
      <PanoramaSphere url={room.panorama} />
      {room.hotspots.map((h) => (
        <FloorHotspot key={`${room.id}-${h.to}-${h.ath}`} hotspot={h} onJump={onJump} />
      ))}
      <LookControls yaw={room.yaw} />
    </>
  );
}

export default function PanoramaViewer({
  room,
  onJump,
}: {
  room: Room;
  onJump: (id: Hotspot['to']) => void;
}) {
  const [fading, setFading] = useState(false);
  const [shown, setShown] = useState(room);
  const fadeRef = useRef<number | null>(null);

  useEffect(() => {
    if (room.id === shown.id) return;
    setFading(true);
    if (fadeRef.current) window.clearTimeout(fadeRef.current);
    fadeRef.current = window.setTimeout(() => {
      setShown(room);
      setFading(false);
    }, 180);
    return () => {
      if (fadeRef.current) window.clearTimeout(fadeRef.current);
    };
  }, [room, shown.id]);

  return (
    <div className="relative h-full w-full bg-ink-950">
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 2000, position: [0, 0, 0.1] }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: false, powerPreference: 'high-performance' }}
        style={{ touchAction: 'none' }}
      >
        <Suspense fallback={null}>
          <Scene room={shown} onJump={onJump} />
        </Suspense>
      </Canvas>
      <div
        className={`pointer-events-none absolute inset-0 bg-ink-950 transition-opacity duration-200 ${
          fading ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
