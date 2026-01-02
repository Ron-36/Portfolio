import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black overflow-hidden">
      
      <FloatingNav navItems={[{name:'Home',link:'/',icon:<FaHome/>}]}/>
      {/* FULL WIDTH HERO */}
      <Hero />
      <Grid/>

      {/* REST OF PAGE (CONSTRAINED) */}
      <section className="mx-auto max-w-7xl px-5 sm:px-10">
        {/* other sections */}
      </section>

    </main>
  );
}
