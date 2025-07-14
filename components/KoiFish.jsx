"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { Object3D } from "three";
import KoiFishModelWrapper from "./KoiFishModelWrapper";

export default function KoiFish() {
  const cameraTarget = useRef(new Object3D());

  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 70 }}>
      <ambientLight intensity={1} />
      <primitive object={cameraTarget.current} position={[0, 0, 0]} />
      {/* Direction Light - */}
      <directionalLight
        castShadow
        position={[0, 0, 5]}
        intensity={4}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        color={"#87a6a6"}
      />
      <directionalLight
        castShadow
        position={[0, 0, -5]}
        intensity={4}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        color={"#87a6a6"}
      />

      {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} /> */}
      <Suspense fallback={null}>
        <KoiFishModelWrapper />
      </Suspense>
    </Canvas>
  );
}
