
import { Mail } from 'lucide-react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterCustom() {
  return (
    <footer className="bg-black text-white py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-gray-100">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            As a software engineer who loves both code and design, I thrive at the intersection of logic and creativity, 
            building solutions that are as elegant under the hood as they are intuitive on the surface. Whether architecting 
            scalable backend systems or crafting sleek, user-friendly interfaces, I see programming as a blend of 
            problem-solving and artistry—where clean, efficient algorithms meet thoughtful, visually engaging experiences.
          </p>
        </div>

        {/* Contact Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-gray-100">Get In Touch</h2>
          
          {/* Email */}
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-gray-800 rounded-full group-hover:bg-primary transition-colors">
              <Mail className="text-white h-5 w-5" />
            </div>
            <a 
              href="mailto:sn.mousavi77@gmail.com" 
              className="text-gray-300 hover:text-white transition-colors"
            >
              sn.mousavi77@gmail.com
            </a>
          </div>
          
          {/* LinkedIn */}
          <div className="flex items-center space-x-3 group">
            <div className="p-2 bg-gray-800 rounded-full group-hover:bg-primary transition-colors">
              <LinkedInIcon className="text-white" />
            </div>
            <a 
              href="https://linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Connect on LinkedIn
            </a>
          </div>
          

        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Niloofar Mousavi. All rights reserved.
      </div>
    </footer>
  )
}