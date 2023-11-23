import React from "react";
import Hero from "../Hero";

const HeroBlackhole = () => {
  return (
    <div className="relative flex flex-col bg-transparent h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-350px] md:top-[-270px] xl:top-[-315px] 2xl:top-[-365px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <Hero />
    </div>
  );
};

export default HeroBlackhole;