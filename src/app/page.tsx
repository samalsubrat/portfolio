import About from "@/components/landingpage/About";
import Hero from "@/components/landingpage/Hero";
import ProjectMarquee from "@/components/landingpage/ProjectMarquee";
import Projects from "@/components/landingpage/Projects";
import Testimonials from "@/components/landingpage/Testimonials";
import Working from "@/components/landingpage/Working";

export default function Home() {
  return (
    <>
      <Hero/>
      <ProjectMarquee/>
      <Projects/>
      <About/>
      <Testimonials/>
      <Working/>
    </>
  );
}
