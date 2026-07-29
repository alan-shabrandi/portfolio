import { Header } from "@/components/layout/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/layout/footer";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-cyan-900 selection:text-cyan-100 flex flex-col justify-between">
      <div>
        <Header />

        <main className="container mx-auto max-w-7xl px-6 lg:px-12">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>

      <Footer />
    </div>
  );
}
