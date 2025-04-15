import Image from "next/image";

export default function Certificates() {

    return(<>
    <h1 className="text-white text-2xl mb-3 underline">Certificates</h1>
    <div className="grid grid-cols-2 gap-4">
    
        <div>
        <Image
            src="/images/c1.png"
            alt="Hero Image"
         
           
            priority
            width={4000}
            height={4000}
          />
        </div>
        <div>
        <Image
            src="/images/c2.png"
            alt="Hero Image"
         
           
            priority
            width={4000}
            height={4000}
          />

        </div>
        <div>
        <Image
            src="/images/c3.png"
            alt="Hero Image"
         
           
            priority
            width={4000}
            height={4000}
          />

        </div>



    </div>
    
    
    </>)
}