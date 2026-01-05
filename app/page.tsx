import Approach from "@/components/Approach";
import Client from "@/components/Client";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data/data";

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">
      
      <FloatingNav navItems={navItems}/>
      {/* FULL WIDTH HERO */}
      <Hero />
      <Grid/>
      <RecentProjects/>
      <Client/>
      <Experience/>
      <Approach/>
      <Footer/>

      

    </main>
  );
}
