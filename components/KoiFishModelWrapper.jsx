"use client";

import KoiFishModel from "@/components/KoiFishModel";
import { useGSAP } from "@gsap/react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useMemo, useRef } from "react";

const KoiFishModelWrapper = () => {
  const groupRef = useRef();
  const { viewport } = useThree();

  const animationArr = useMemo(() => {
    return Array.from({ length: 7 }, (_, i) => ({
      x: viewport.width * ((i + 1) * 0.15),
      y: -(i + 1) * 0.2,
    }));
  }, [viewport]);

  const scale = useMemo(() => {
    return viewport.width < 8 ? (viewport.width > 2.75 ? 0.56 : 0.4) : 1;
  }, [viewport]);

  useGSAP(() => {
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero--section",
        start: "top top",
        end: "bottom top-=1000",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    const introductionTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#introduction--section",
        start: "top top",
        end: "bottom top+=500",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });

    heroTimeline.to(".hero--section__heading, .hero--section__text", {
      opacity: 0,
    });

    heroTimeline.to(groupRef.current.rotation, {
      z: -0.3,
    });

    animationArr.forEach((animation) => {
      heroTimeline.to(groupRef.current.position, {
        x: animation.x,
        y: animation.y,
        duration: 1,
        ease: "power1.out",
      });
    });

    introductionTimeline.to(groupRef.current.rotation, {
      z: 0.3,
      y: Math.PI,
    });

    introductionTimeline.to(groupRef.current.position, {
      x: viewport.width < 8 ? 1.8 : 5,
      y: 0,
    });
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} rotation={[0, 0, 0]}>
      <KoiFishModel scale={scale} />
    </group>
  );
};

export default KoiFishModelWrapper;
