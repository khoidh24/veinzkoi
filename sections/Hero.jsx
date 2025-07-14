"use client";

import { AuroraText } from "@/components/AuroraText";

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
      <div className="absolute bottom-0 left-0 w-svw h-14 content-none z-[-1] bg-gradient-to-t from-[#182529] to-transparent"></div>
      <div className="container px-4 xl:px-0 mx-auto w-svw h-svh">
        <div className="flex justify-between items-center xl:items-start h-svh py-12 xl:py-2 flex-col text-white">
          <AuroraText className="text-7xl sm:text-9xl xl:text-[14rem] font-bold uppercase tracking-[-0.02em] hero--section__heading">
            Veinzkoi
          </AuroraText>
          <div className="font-bold text-center xl:text-left mb:0 xl:mb-8 hero--section__text">
            <p className="text-xl xl:text-5xl mb-2 uppercase">
              Where art and magic meet
            </p>
            <div className="text-sm xl:text-lg font-normal">
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
