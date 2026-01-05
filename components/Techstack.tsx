"use client";
import React from "react";
import { motion } from "motion/react";
import { FaReact, FaNodeJs, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiTypescript,SiFirebase, SiReactrouter, SiRedux } from "react-icons/si";

const techStack = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiReactrouter  />, name: "React Router" },
  { icon: <SiRedux  />, name: "Redux" },
];

export const TechMarquee = () => {
  // We double the array to create a seamless loop
  const duplicatedStack = [...techStack, ...techStack];

  return (
    <div className="relative flex w-full overflow-hidden py-10">
      {/* Gradient Overlays for the "Spotify" fade effect */}
      <div className="absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-black to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-black to-transparent" />

      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedStack.map((tech, index) => (
          <div
            key={index}
            className="mx-8 flex items-center gap-2 text-2xl font-medium text-white/70 hover:text-purple-600 transition-colors"
          >
            <span className="text-3xl">{tech.icon}</span>
            <span>{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};