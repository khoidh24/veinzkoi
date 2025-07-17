"use client";

import KoiFish from "@/components/KoiFish";
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
      smooth: 3,
      effects: true,
      onFocusIn: () => false,
      normalizeScroll: true,
      ignoreMobileResize: true,
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

    const handleTouchMove = (e) => {
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("touchstart", handleTouchStart);

    document.addEventListener("touchmove", handleTouchMove, {
      passive: false,
    });

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <>
      <div
        id="koi-fish"
        className="fixed top-0 left-0 w-svw h-svh pointer-events-none z-10"
      >
        <KoiFish />
      </div>
      <div id="smooth-wrapper">
        <div id="smooth-content" className="relative mx-auto !overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
};

export default RootLayoutTemplate;
