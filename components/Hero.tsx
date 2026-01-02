import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { GridBackgroundDemo } from "@/components/ui/BackgroundLines";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative h-screen bg-black overflow-hidden">

      {/* TOP GRID */}
      <GridBackgroundDemo height="90vh" />

      {/* SPOTLIGHTS */}
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
      <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
      <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />

      {/* TEXT AREA (ON GRID) */}
      <div className="relative mt-50 z-10 h-[40vh] flex flex-col items-center justify-center gap-3">
        
        <h1 className="text-2xl sm:text-7xl font-bold text-white">
          Frontend Developer
        </h1>

        <TextGenerateEffect
          words="Hi, I'm Ronak Somaiya 👋"
          className="text-white text-[28px] md:text-4xl lg:text-5xl"
          duration={2}
        />
            <a href="#about"> 
              <MagicButton title="Show my work" icon={<FaLocationArrow/>} position="right"/>

            </a>
      </div>

    </section>
  );
};

export default Hero;
