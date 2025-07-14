"use client";

const Hero = dynamic(() => import("@/sections/Hero"), { ssr: false });
import Introduction from "@/sections/Introduction";
import dynamic from "next/dynamic";

const Home = () => {
  return (
    <>
      <section
        id="hero--section"
        className="w-svw h-svh overflow-x-hidden relative"
      >
        <Hero />
      </section>
      <section
        id="introduction--section"
        className="w-svw h-svh overflow-x-hidden relative z-90"
      >
        <Introduction />
      </section>
    </>
  );
};

export default Home;
