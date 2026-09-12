import { existsSync } from "fs";
import { join } from "path";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToTop } from "@/components/ToTop";
import { SectionDivider } from "@/components/SectionDivider";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Philosophy } from "@/sections/Philosophy";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Skills } from "@/sections/Skills";
import { Achievements } from "@/sections/Achievements";
import { Teaching } from "@/sections/Teaching";
import { Contact } from "@/sections/Contact";

export function SiteSections() {
  const hasCv = existsSync(join(process.cwd(), "public", "Saad-Nofal-CV.pdf"));

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero hasCv={hasCv} />
        <SectionDivider branch="git: checkout about" />
        <About />
        <SectionDivider branch="git: checkout method" />
        <Philosophy />
        <SectionDivider branch="git: checkout projects" />
        <Projects />
        <SectionDivider branch="git: checkout experience" />
        <Experience />
        <SectionDivider branch="git: checkout skills" />
        <Skills />
        <SectionDivider branch="git: merge achievements" />
        <Achievements />
        <SectionDivider branch="git: checkout teaching" />
        <Teaching />
        <SectionDivider branch="git: checkout contact" />
        <Contact />
      </main>
      <Footer />
      <ToTop />
    </>
  );
}