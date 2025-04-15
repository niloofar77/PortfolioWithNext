import { Button } from "@/components/ui/button";
import Image from "next/image";
import Skills from "../Skills";

export default function Projects() {
  return (
    <>
      <h1 className="text-white text-xl underline">Projects</h1>
      <div className="flex flex-row gap-3">
        <div>
          <p className="text-white text-xl">
            This project was a Dashboard for Mci.this dashboard was built using
            react js and MUI. This dashboard is consisted of User Management and
            a dashboard for designing a offer.
          </p>
          <h3 className="text-primary text-xl">Technology:</h3>
          <h3 className="text-white text-xl">React,MUI</h3>

          {/* <Button className="mt-4">More Details</Button> */}
        </div>

        <div className="pr:2">
          <Image
            src="/images/2.png"
            alt="Project 1"
            className="rounded-lg object-cover border-primary  border-[10px] "
            priority
            width={2000}
            height={2000}
          />
        </div>
        </div>
        <div className="flex flex-row gap-3 mt-4">
        <div>
          <p className="text-white text-xl">
            This project was a Dashboard for Mci.this dashboard was built using
            react js and MUI. This dashboard is consisted of User Management and
            a dashboard for designing a offer.
          </p>
          <h3 className="text-primary text-xl">Technology:</h3>
          <h3 className="text-white text-xl">React,MUI</h3>
          {/* <Button className="mt-4">More Details</Button> */}
        </div>

        <div className="pr:2">
          <Image
            src="/images/s3.png"
            alt="Project 1"
            className="rounded-lg object-cover border-primary  border-[10px] "
            priority
            width={2000}
            height={2000}
          />
        </div>
       <div>
       </div>
        </div>

    
    </>
  );
}
