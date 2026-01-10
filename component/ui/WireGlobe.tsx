"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  OrbitControls,
} from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { useMemo, useRef } from "react";

/* =========================
   FIBONACCI SPHERE (PURE)
========================= */

function fibonacciSphere(count: number, radius = 1) {
  const positions = new Float32Array(count * 3);
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = goldenAngle * i;

    positions[i * 3] = Math.cos(theta) * r * radius;
    positions[i * 3 + 1] = y * radius;
    positions[i * 3 + 2] = Math.sin(theta) * r * radius;
  }

  return positions;
}

/* =========================
   ENERGY CORE
========================= */

function EnergyCore(){
  const group = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.PointsMaterial>(null);
  const mouse = useRef({ x: 0, y: 0 });

  const COUNT = 2200;
  const positions = useMemo(() => fibonacciSphere(COUNT, 1), []);

  /* Mouse parallax */
  useThree(({ gl }) => {
    gl.domElement.addEventListener("mousemove", (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    });
  });

  /* Animation loop */
  useFrame(({ clock }) => {
    if (!group.current || !materialRef.current) return;

    const t = clock.getElapsedTime();

    /* Organic rotation */
    group.current.rotation.y = t * 0.25 + mouse.current.x * 0.3;
    group.current.rotation.x = Math.sin(t * 0.3) * 0.15 + mouse.current.y * 0.3;

    /* ENERGY WAVE (pulse through sphere) */
    const wave = (Math.sin(t * 2) + 1) / 2;
materialRef.current.size = 0.035 + wave * 0.015;


  });

  return (
    <group ref={group}>
      {/* POINT CLOUD */}
      <Points positions={positions}>
        <PointMaterial
          ref={materialRef}
          transparent
          opacity={0.9}
          depthWrite={false}
          color="#000000"
        />
      </Points>
    </group>
  );
}

/* =========================
   EXPORT
========================= */

export default function EnergySphere(){
  return (
    <div className="h-150 w-150 md:h-100">
      <Canvas camera={{ position: [0, 0, 3.2], fov: 50 }}>
        <ambientLight intensity={0} />
        <directionalLight position={[6, 6, 6]} intensity={0} />

        <EnergyCore />

        {/* CINEMATIC GLOW */}
        <EffectComposer>
          <Bloom
            intensity={0}
            luminanceThreshold={0}
            luminanceSmoothing={0.9}
          />
        </EffectComposer>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}
