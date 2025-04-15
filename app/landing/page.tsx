import Certificates from "@/components/Landing/Certificates";
import Education from "@/components/Landing/Education";
import Hero from "@/components/Landing/Hero";
import Projects from "@/components/Landing/Projects";
import Skills from "@/components/Landing/Skills";
import Work from "@/components/Landing/Work";
// import { motion, useScroll } from "framer-motion"; // corrected import

export default function Landing() {
  // const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Indicator
      <motion.div
        id="scroll-indicator"
        style={{
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 10,
          originX: 0,
          backgroundColor: "#ff0088",
          zIndex: 50, // so it stays above the rest
        }}
      /> */}

      {/* Main Content */}
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
