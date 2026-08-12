import Navbar from "@/components/layout/Navbar";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import CursorDot from "@/components/ui/CursorDot";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Achievements from "@/components/sections/Achievements";
import Skills from "@/components/sections/Skills";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <CursorDot />
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Skills />
        <Education />
        <Contact />
      </main>
    </SmoothScrollProvider>
  );
}
