import { AuroraText } from "@/components/AuroraText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const Introduction = () => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(
      ".introduction--section__heading, .introduction--section__text",
      {
        opacity: 1,
        ease: "power1.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#introduction--section",
          start: "top top",
          end: "bottom top+=500",
          scrub: true,
          //   markers: true,
        },
      },
      0
    );
  });
  return (
    <div className="container px-4 xl:px-0 py-8 mx-auto w-svw h-svh bg-background/30 backdrop-blur-sm z-20 relative">
      <div className="text-[1.8rem] xl:text-6xl font-bold mb-3 xl:mb-8 opacity-0 introduction--section__heading">
        <h1>Experience is the easiest</h1>
        <h1>measure of maturity.</h1>
      </div>
      <p className="max-w-[600px] text-base xl:text-xl opacity-0 introduction--section__text">
        Once curious about how websites came to life, the journey began with
        late nights exploring{" "}
        <AuroraText className="font-bold">HTML</AuroraText> and{" "}
        <AuroraText className="font-bold">CSS</AuroraText>. Discovery turned
        into passion when <AuroraText className="font-bold">ReactJS</AuroraText>{" "}
        entered the{" "}
        <AuroraText className="font-bold">picture—bringing</AuroraText>{" "}
        structure to <AuroraText className="font-bold">creativity</AuroraText>.
        From building simple UI components to dynamic single-page applications,
        every bug fixed and feature shipped added a brick to a growing
        foundation. Still early, but the fire is real.
      </p>
    </div>
  );
};

export default Introduction;
