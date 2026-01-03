import Client from "@/components/Client";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">
      
      <FloatingNav navItems={navItems}/>
      {/* FULL WIDTH HERO */}
      <Hero />
      <Grid/>
      <RecentProjects/>
      <Client/>


      

    </main>
  );
}
