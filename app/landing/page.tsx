import Certificates from "@/components/Landing/Certificates";
import Education from "@/components/Landing/Education";
import Hero from "@/components/Landing/Hero";
import Projects from "@/components/Landing/Projects";
import Skills from "@/components/Landing/Skills";
import Work from "@/components/Landing/Work";


export default function Landing() {

  return (
    <>


   
      <div className="flex flex-col gap-4">
        <Hero />
        <Education />
        <Projects />
        <Skills />
        <Certificates />
        <Work />
      </div>
    </>
  );
}
