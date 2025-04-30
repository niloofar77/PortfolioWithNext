import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-zinc-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
          <div className="space-y-8">
            <div className="space-y-4">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <h1 className="text-white text-3xl sm:text-4xl font-bold">Let's get in touch!</h1>
              <h2 className="text-zinc-300 text-lg">
                Or reach out manually to sn.mousavi77@gmail.com
              </h2>
            </div>
        
            <form className="space-y-6">
              <div className="space-y-2">
                <Label className="text-white" htmlFor="fullName">Full Name</Label>
                <Input 
                  type="text" 
                  id="fullName" 
                  placeholder="Your name" 
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-white" htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="your.email@example.com" 
                  className="bg-zinc-800 border-zinc-700 text-white"
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-white" htmlFor="message">Message</Label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="Your message here..."
                  className="flex w-full rounded-md border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:border-transparent"
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-primary text-white"
              >
                Send Message
              </Button>
            </form>
          </div>
          
      
          <div className="hidden lg:block">
            <div className="relative h-full min-h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/s6.jpg"
                alt="Contact illustration"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}