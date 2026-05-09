import React from 'react';
import { Download, ArrowUpRight } from 'lucide-react';

const SidebarOverlay = () => {
  return (
    <>
      {/* Desktop Sidebars */}
      <div className="hidden lg:flex fixed inset-y-0 left-0 right-0 z-40 items-center justify-between pointer-events-none">
        {/* Left Social Icons Stack */}
        <div className="pointer-events-auto w-10 flex flex-col items-center gap-4 bg-black/40 backdrop-blur-md py-6 rounded-r-xl border border-white/10 shadow-2xl">
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

        {/* Right Sidebar - "DOWNLOAD BROCHURE" */}
        <div className="pointer-events-auto">
          <a 
            href="/pdf/agrarian-brochure.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#ffb300] hover:bg-[#ffa000] text-black font-black py-8 px-6 rounded-l-xl transition-all duration-300 transform rotate-180 [writing-mode:vertical-lr] text-center shadow-2xl hover:translate-x-1 group flex items-center gap-2"
          >
            <div className="rotate-90 mb-4">
              <Download size={20} strokeWidth={3} className="group-hover:translate-y-1 transition-transform" />
            </div>
            <span className="tracking-[0.1em] text-[13px] uppercase">
              DOWNLOAD <span className="text-[#1b4332]">BROCHURE</span>
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default SidebarOverlay;
