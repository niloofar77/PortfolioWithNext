import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center px-4">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      
        <div className="space-y-6">
          <h1 className="text-2xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hi, I'm Niloofar Mousavi.
          </h1>
          <p className="text-lg md:text-xl text-white">
            Software Engineer
          </p>
          <p className="text-white text-l">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm a Software Engineer and Frontend Developer with a passion for crafting high-performance web applications and intuitive user experiences. Combining robust coding skills with UI/UX design principles, I build seamless digital solutions that are both technically sound and visually engaging. My expertise in modern frameworks like React and Next.js, paired with a keen eye for design, allows me to bridge the gap between functionality and aesthetics—delivering products that users love to interact with."
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-[#673AB7] hover:bg-[#673AB7]/90">
              Download CV
            </Button>
            <Button size="lg" variant="outline">
              Contact
            </Button>
          </div>
        </div>

     
        <div className="relative aspect-video">
          <Image
            src="/images/s5.png"
            alt="Hero Image"
         
           
            priority
            width={4000}
            height={4000}
          />
        </div>
      </div>
    </section>
  );
}
