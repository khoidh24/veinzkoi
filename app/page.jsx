"use client";

import Hero from "@/sections/Hero";

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
        className="w-svw h-svh overflow-x-hidden bg-[#182529]"
      ></section>
      <section
        id="contact--section"
        className="w-svw h-svh overflow-x-hidden bg-[#182529]"
      ></section>
    </>
  );
};

export default Home;
