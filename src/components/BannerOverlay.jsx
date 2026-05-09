import React from 'react';
import { Download } from 'lucide-react';
import MobileSocialRow from './MobileSocialRow';

const BannerOverlay = () => {
  return (
    <>
      {/* Desktop Sidebars (Always Absolute to the Banner) */}
      <div className="hidden lg:flex absolute inset-y-0 left-0 right-0 z-20 items-center justify-between pointer-events-none">
        {/* Left Social Icons Stack */}
        <div className="pointer-events-auto w-10 flex flex-col items-center gap-4 bg-black/40 backdrop-blur-md py-6 border-y border-r border-white/10 shadow-2xl">
          <a 
            href="https://www.instagram.com/agrariancrop?igsh=MWlnb2RpczBhODF4bA==" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:scale-110"
          >
            <img src="/images/instagram logo.svg" alt="Instagram" className="w-4 h-4 filter brightness-0 invert" />
          </a>
          <a 
            href="#" 
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#1877F2] hover:scale-110"
          >
            <img src="/images/facebook logo.svg" alt="Facebook" className="w-5 h-5 filter brightness-0 invert" />
          </a>
          <a 
            href="https://youtube.com/@agrariancrop9379?si=oF85VgRyzFBNsMgm" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#FF0000] hover:scale-110"
          >
            <img src="/images/YouTube logo.svg" alt="YouTube" className="w-5 h-5 filter brightness-0 invert" />
          </a>
        </div>

        {/* Right Sidebar - "Brochure" */}
        <div className="pointer-events-auto w-10 flex flex-col items-center bg-black/40 backdrop-blur-md py-8 border-y border-l border-white/10 shadow-2xl group">
          <a 
            href="/Brochure.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center transition-all duration-300 hover:translate-x-[-2px]"
          >
            <span className="text-[18px] font-medium text-white [writing-mode:vertical-lr] rotate-180 py-4 tracking-wide">
              Brochure
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Social Row (Already included in heroes, but can be part of this overlay if preferred) */}
      {/* We keep it in the hero content for alignment purposes */}
    </>
  );
};

export default BannerOverlay;
