"use client";

import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/sections/Hero"), { ssr: false });
import KoiFish from "@/components/KoiFish";

const Home = () => {
  return (
    <>
      <div className="absolute top-0 left-0 w-svw h-svh pointer-events-none">
        <KoiFish />
      </div>
      <section id="hero--section" className="w-svw h-svh overflow-hidden">
        <Hero />
      </section>
      <section
        id="introduction--section"
        className="w-svw h-svh overflow-hidden z-10"
      ></section>
    </>
  );
};

export default Home;
