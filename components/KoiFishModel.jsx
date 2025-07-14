"use client";

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const KoiFishModel = ({ scale, ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/koi_fish.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (actions && actions["MorphBake"]) {
      actions["MorphBake"].play();
      actions["MorphBake"].timeScale = 2;
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="koifish_0"
                position={[0, 0, 0]}
                rotation={[Math.PI, 0, Math.PI]}
              >
                <mesh
                  castShadow
                  receiveShadow
                  name="mesh_0"
                  scale={scale}
                  geometry={nodes.mesh_0.geometry}
                  material={materials.SimplygonCastMaterial}
                  morphTargetDictionary={nodes.mesh_0.morphTargetDictionary}
                  morphTargetInfluences={nodes.mesh_0.morphTargetInfluences}
                />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/koi_fish.glb");
export default KoiFishModel;
