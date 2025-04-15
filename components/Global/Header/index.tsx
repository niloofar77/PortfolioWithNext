
import Image from "next/image"

export default function Header() {
  return (
    <header className="bg-black shadow-md">
  <div className="container mx-auto px-4 py-3 flex justify-between items-center">

    <div className="flex items-center">
       
    <Image
            src="/images/avid-logo-svg.svg"
            alt="Hero Image"
         
      
            priority
            width={64}
            height={64}
          />
    </div>
    

    <nav className="hidden md:flex space-x-8">
      <a href="/" className="text-white hover:text-primary transition">Home</a>
      
      {/* <a href="/projects" className="text-white hover:text-primary transition">Projects</a> */}
      <a href="/contact" className="text-white  hover:text-primary transition">Contact</a>
    </nav>
    
 


  </div>
</header>
  )
}