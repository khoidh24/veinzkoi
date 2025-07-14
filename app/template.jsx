"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import { useEffect } from "react";

const RootLayoutTemplate = ({ children }) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      onFocusIn: () => false,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    smoother.effects(".plant--img", {
      speed: 0.6,
    });

    gsap.from(".menu--button", {
      y: 200,
      delay: 2,
      duration: 1,
      ease: "power2.out",
    });
    gsap.from(".container--res", {
      opacity: 0,
      duration: 1,
      delay: 1.5,
      ease: "power2.out",
    });
  });

  useEffect(() => {
    const handleContextMenu = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    const handleTouchStart = (e) => {
      if (e.target.tagName === "IMG") {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("touchstart", handleTouchStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("touchstart", handleTouchStart);
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content" className="relative mx-auto !overflow-x-hidden">
        {children}
      </div>
    </div>
  );
};

export default RootLayoutTemplate;
