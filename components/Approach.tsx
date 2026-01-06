"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { div } from "motion/react-client";

export default function Approach() {
  return (
    <>
      <section className="w-full py-20">
        <h1 className="text-heading text-4xl text-center">
          My
          <span className="text-purple-600"> Approach</span>
        </h1>
        <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
          <Card
            title="Planning & Strategy"
            icon={<AceternityIcon order="Phase 1" />}
            desc="I will define your project goals and user needs together to create a clear roadmap ensuring a smooth development process from start."
          >
            <CanvasRevealEffect
              animationSpeed={5.1}
              containerClassName="bg-emerald-900"
            />
          </Card>
          <Card
            title="Development & Progress Update"
            icon={<AceternityIcon order="Phase 2" />}
            desc="I write clean and efficient code while providing regular updates on my progress so I can refine the project details as needed."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-black"
              colors={[
                [236, 72, 153],
                [232, 121, 249],
              ]}
              dotSize={2}
            />
            {/* Radial gradient for the cute fade */}
            <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
          </Card>
          <Card
            title="Development & Launch"
            icon={<AceternityIcon order="Phase 3" />}
            desc="After rigorous testing across all devices I deploy your fully functional website and ensure everything performs perfectly for your brand new users."
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName="bg-sky-600"
              colors={[[125, 211, 252]]}
            />
          </Card>
        </div>
      </section>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
  desc,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  desc: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-white/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] roundec-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 text-white " />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 text-white" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 text-white " />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className={`
    text-center absolute top-[50%] left-[50%]
    translate-x-[-50%] translate-y-[-50%]
    transition duration-200 min-w-40 mx-auto
    flex items-center justify-center
    ${hovered ? "opacity-0 -translate-y-4" : "opacity-100"}
    lg:group-hover/canvas-card:opacity-0
    lg:group-hover/canvas-card:-translate-y-4
  `}
        >
          {icon}
        </div>

        <h2
          // change text-3xl, add text-center
          className={`
  text-center text-3xl font-bold mt-4 relative z-10
  text-white dark:text-white
  transition duration-200
  ${hovered ? "opacity-100 -translate-y-2" : "opacity-0"}
  lg:opacity-0
  lg:group-hover/canvas-card:opacity-100
  lg:group-hover/canvas-card:-translate-y-2
`}
        >
          {title}
        </h2>
        {/* add this one for the description */}
        <p
          className={`
  text-sm mt-4 text-center relative z-10
  transition duration-200
  ${hovered ? "opacity-100 -translate-y-2" : "opacity-0"}
  lg:opacity-0
  lg:group-hover/canvas-card:opacity-100
  lg:group-hover/canvas-card:-translate-y-2
`}
          style={{ color: "#E4ECFF" }}
        >
          {desc}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex  h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-2xl font-bold text-white backdrop-blur-3xl">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
