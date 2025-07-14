"use client";

import { useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import KoiFishModel from "@/components/KoiFishModel";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const KoiFishModelWrapper = () => {
  const groupRef = useRef();
  const { viewport } = useThree();

  const scale = useMemo(() => {
    return viewport.width < 8 ? (viewport.width > 2.75 ? 0.56 : 0.4) : 1;
  }, [viewport]);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#introduction--section",
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <KoiFishModel scale={scale} />
    </group>
  );
};

export default KoiFishModelWrapper;
