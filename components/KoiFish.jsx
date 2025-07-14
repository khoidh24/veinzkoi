"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Object3D } from "three";
import KoiFishModelWrapper from "./KoiFishModelWrapper";
import { OrbitControls } from "@react-three/drei";

export default function KoiFish() {
  const cameraTarget = useRef(new Object3D());

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 75 }}>
      <ambientLight intensity={1} />
      <primitive object={cameraTarget.current} position={[0, 0, 0]} />
      {/* Direction Light - */}
      <directionalLight
        castShadow
        position={[0, 0, 5]}
        intensity={2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
      />
      <directionalLight
        castShadow
        position={[0, 0, -5]}
        intensity={2}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
      />
      {/* Bottom spotlight */}
      {/* <spotLight
        position={[0, -2, 2]}
        angle={0.6}
        penumbra={0.4}
        intensity={10}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      /> */}
      {/* Top spotlight */}
      {/* <spotLight
        position={[0, 5, 0]}
        angle={0.4}
        penumbra={0.3}
        intensity={2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
      /> */}

      {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
      <Suspense fallback={null}>
        <KoiFishModelWrapper />
      </Suspense>
    </Canvas>
  );
}
