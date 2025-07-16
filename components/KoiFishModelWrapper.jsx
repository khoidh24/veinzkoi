"use client";

import KoiFishModel from "@/components/KoiFishModel";
import { useGSAP } from "@gsap/react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useMemo, useRef } from "react";

const KoiFishModelWrapper = () => {
  const groupRef = useRef();
  const { viewport } = useThree();

  const scale = useMemo(() => {
    return viewport.width < 8 ? (viewport.width > 2.75 ? 0.56 : 0.4) : 1;
  }, [viewport]);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(
      {
        // mobile: width <= 768px
        isMobile: "(max-width: 768px)",
        // desktop: width > 768px
        isDesktop: "(min-width: 769px)",
      },
      (context) => {
        const { isMobile } = context.conditions;

        const heroTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#hero--section",
            start: "top top",
            end: isMobile ? "bottom top-=1000" : "bottom top-=2500",
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

        heroTimeline.to(
          groupRef.current.rotation,
          {
            z: -0.4,
          },
          0.5
        );

        heroTimeline.to(
          groupRef.current.position,
          {
            x: viewport.width < 8 ? 4.4 : 13,
            y: -2,
            duration: 1,
            ease: "power1.out",
          },
          0.5
        );

        introductionTimeline.to(groupRef.current.rotation, {
          z: 0.3,
          y: Math.PI,
        });

        introductionTimeline.to(groupRef.current.position, {
          x: viewport.width < 8 ? 1.5 : 5,
          y: 0,
        });
      }
    );
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]} rotation={[0, 0, 0]}>
      <KoiFishModel scale={scale} />
    </group>
  );
};

export default KoiFishModelWrapper;
