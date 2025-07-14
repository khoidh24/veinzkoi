"use client";

import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";

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
