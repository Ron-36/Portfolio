import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { 
  FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaFire 
} from "react-icons/fa";
import { 
  SiTailwindcss, SiMui, SiFramer, SiJavascript, 
  SiNextdotjs, SiRedux 
} from "react-icons/si";

export function Grid() {
  return (
    <div className="max-w-4xl mx-auto px-4 -my-1">
      <h2 className="text-4xl font-bold text-white mb-10 text-center tracking-tight">
        Technical <span className="text-cyan-500">Arsenal</span>
      </h2>
      <BentoGrid className="max-w-5xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            // Logic: Make the 1st, 4th, and 6th items wider
            className={i === 0 || i === 3 || i === 7 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const Skeleton = ({ children, color }: { children: React.ReactNode; color: string }) => (
  <div className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br ${color} items-center justify-center border border-white/10 group-hover:scale-[0.98] transition-transform duration-200`}>
    {children}
  </div>
);

const items = [

    {
    title: "UI Foundations",
    description: "HTML5, CSS3 and Bootstrap for robust design systems.",
    header: (
      <Skeleton color="from-gray-500/20 to-neutral-500/10">
        <div className="flex gap-4">
          <FaHtml5 className="text-orange-600 text-4xl" />
          <FaCss3Alt className="text-blue-600 text-4xl" />
          <FaBootstrap className="text-purple-600 text-4xl" />
          
        </div>
      </Skeleton>
    ),
    icon: <FaHtml5 className="h-4 w-4 text-orange-500" />,
  },
  
  {
    title: "JavaScript",
    description: "ES6+, Async/Await, and functional programming patterns.",
    header: <Skeleton color="from-yellow-500/20 to-orange-500/10"><SiJavascript className="text-yellow-400 text-5xl" /></Skeleton>,
    icon: <SiJavascript className="h-4 w-4 text-yellow-400" />,
  },
  {
    title: "Tailwind CSS",
    description: "Rapid UI development with utility-first styling.",
    header: <Skeleton color="from-cyan-400/20 to-blue-500/10"><SiTailwindcss className="text-cyan-300 text-5xl" /></Skeleton>,
    icon: <SiTailwindcss className="h-4 w-4 text-cyan-300" />,
  },
  {
    title: "React & Next.js",
    description: "Building high-performance SEO-friendly applications with the App Router.",
    header: (
      <Skeleton color="from-blue-500/20 to-cyan-500/20">
        <FaReact className="text-cyan-400 text-5xl animate-[spin_15s_linear_infinite]" />
        <SiNextdotjs className="text-white text-5xl ml-6" />
      </Skeleton>
    ),
    icon: <FaReact className="h-4 w-4 text-cyan-400" />,
  },
  {
    title: "Framer Motion & Animations",
    description: "Bringing interfaces to life with smooth, physics-based transitions.",
    header: (
      <Skeleton color="from-purple-500/20 to-pink-500/20">
        <SiFramer className="text-pink-400 text-5xl animate-pulse" />
      </Skeleton>
    ),
    icon: <SiFramer className="h-4 w-4 text-pink-400" />,
  },
  {
    title: "State Management",
    description: "Global state with Redux Toolkit and efficient data fetching.",
    header: <Skeleton color="from-violet-500/20 to-purple-500/10"><SiRedux className="text-purple-400 text-5xl" /></Skeleton>,
    icon: <SiRedux className="h-4 w-4 text-purple-400" />,
  },
  {
    title: "Firebase",
    description: "Real-time databases, Authentication, and Serverless deployment.",
    header: <Skeleton color="from-orange-500/20 to-red-500/10"><FaFire className="text-orange-500 text-5xl" /></Skeleton>,
    icon: <FaFire className="h-4 w-4 text-orange-500" />,
  },
  
  
];

export default Grid