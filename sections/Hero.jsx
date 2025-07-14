"use client";

import { AuroraText } from "@/components/AuroraText";
import KoiFish from "@/components/KoiFish";
import React from "react";

const Hero = () => {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        className="object-cover absolute top-0 left-0 w-svw h-svh z-[-1] opacity-60"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="container px-4 xl:px-0 mx-auto w-svw h-svh">
        <div className="flex justify-between items-center xl:items-start h-svh py-12 flex-col text-white">
          <AuroraText className="text-7xl xl:text-9xl font-bold uppercase">
            Veinzkoi
          </AuroraText>
          <div className="font-bold text-center xl:text-left">
            <p className="text-xl xl:text-4xl mb-2 uppercase">
              Where art and magic meet
            </p>
            <div className="text-sm xl:text-base font-normal">
              <p>An interface is not just something to look at</p>
              <p>but an experience to feel.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
