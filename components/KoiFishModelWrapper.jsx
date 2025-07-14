"use client";

import KoiFishModel from "@/components/KoiFishModel";
import { useGSAP } from "@gsap/react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useMemo, useRef, useState } from "react";

const KoiFishModelWrapper = () => {
  const groupRef = useRef();
  const { viewport } = useThree();

  const scale = useMemo(() => {
    return viewport.width < 8 ? (viewport.width > 2.75 ? 0.56 : 0.4) : 1;
  }, [viewport]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero--section",
        start: "top top",
        end: "bottom top-=1000",
        scrub: true,
        pin: true,
        markers: true,
      },
    });

    tl.to(".hero--section__heading, .hero--section__text", {
      opacity: 0,
    });

    tl.to(groupRef.current.rotation, {
      z: -0.3,
    });

    tl.to(groupRef.current.position, {
      x: viewport.width * 0.2,
      y: -0.5,
    });

    tl.to(groupRef.current.position, {
      x: viewport.width * 0.6,
      y: -1,
    });

    tl.to(groupRef.current.position, {
      x: viewport.width * 1,
      y: -1.5,
    });

    tl.to(groupRef.current.position, {
      x: viewport.width * 1.4,
      y: -2,
    });
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} rotation={[0, 0, 0]}>
      <KoiFishModel scale={scale} />
    </group>
  );
};

export default KoiFishModelWrapper;
