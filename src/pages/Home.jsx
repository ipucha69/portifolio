import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import FeaturedProjects from "../components/FeaturedProjects";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <CTA />
    </>
  );
}
