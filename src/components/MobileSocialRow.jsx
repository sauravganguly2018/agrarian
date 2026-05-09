import React from 'react';
import { FileText } from 'lucide-react';

const MobileSocialRow = ({ className = "" }) => {
  return (
    <div className={`flex lg:hidden flex-col sm:flex-row items-start sm:items-center gap-6 animate-fade-in-up delay-300 ${className}`}>
      <div className="flex gap-4">
        <a 
          href="https://www.instagram.com/agrariancrop?igsh=MWlnb2RpczBhODF4bA==" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:scale-110 shadow-lg"
        >
          <img src="/images/instagram logo.svg" alt="Instagram" className="w-5 h-5 filter brightness-0 invert" />
        </a>
        <a 
          href="#" 
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-[#1877F2] hover:scale-110 shadow-lg"
        >
          <img src="/images/facebook logo.svg" alt="Facebook" className="w-5 h-5 filter brightness-0 invert" />
        </a>
        <a 
          href="https://youtube.com/@agrariancrop9379?si=oF85VgRyzFBNsMgm" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:bg-[#FF0000] hover:scale-110 shadow-lg"
        >
          <img src="/images/YouTube logo.svg" alt="YouTube" className="w-6 h-6 filter brightness-0 invert" />
        </a>
      </div>
      <div className="hidden sm:block w-[1px] h-6 bg-white/20"></div>
      <a 
        href="/Brochure.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-white/90 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-lg"
      >
        <FileText className="w-4 h-4" />
        BROCHURE
      </a>
    </div>
  );
};

export default MobileSocialRow;
