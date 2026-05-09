import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileText } from 'lucide-react';

const Hero = () => {
  const images = [
    "/images/f82f7de733fd3f9b3af07beecec5716bcdf0ef22.png",
    "/images/0c92d06746f135612ff1172b9ae4f720da293224.jpg",
    "/images/21263f7b9fbbf3324e17d5a973246d44891e8197.jpg",
    "/images/4e24c10b424f60dc63a56cf3c11822c519440fcf.jpg",
    "/images/880f1e8ab1be57fb9bff37e37f5428e34eccfe63.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative flex items-center py-24 md:py-48 min-h-[80vh] lg:min-h-0 overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={img}
              alt={`Agriculture Field Background ${index + 1}`}
              className={`w-full h-full object-cover scale-105 animate-slow-zoom ${
                index === 0 ? 'object-[65%_center] md:object-[70%_center] lg:object-[85%_center]' : 'object-center'
              }`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 lg:hidden"></div>
      </div>

      {/* Side Tabs Wrapper (Desktop Only) */}
      <div className="hidden md:flex absolute inset-y-0 left-0 right-0 z-20 items-center justify-between pointer-events-none">
        {/* Left Social Icons Stack */}
        <div className="pointer-events-auto w-8 flex flex-col items-center gap-6 bg-black/40 backdrop-blur-md py-6 rounded-r-md border border-white/10 animate-fade-in-up">
          <a 
            href="https://www.instagram.com/agrariancrop?igsh=MWlnb2RpczBhODF4bA==" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ffb300] transition-colors p-1"
          >
            <img src="/images/instagram logo.svg" alt="Instagram" className="w-4 h-4 filter brightness-0 invert" />
          </a>
          <a href="#" className="text-white hover:text-[#ffb300] transition-colors p-1">
            <img src="/images/facebook logo.svg" alt="Facebook" className="w-5 h-5 filter brightness-0 invert" />
          </a>
          <a 
            href="https://youtube.com/@agrariancrop9379?si=oF85VgRyzFBNsMgm" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-[#ffb300] transition-colors p-1"
          >
            <img src="/images/YouTube logo.svg" alt="YouTube" className="w-5 h-5 filter brightness-0 invert" />
          </a>
        </div>

        {/* Right Brochure Button */}
        <a 
          href="/Brochure.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto w-8 bg-black/40 backdrop-blur-md text-white py-8 rounded-l-md border border-white/10 flex flex-col items-center gap-2 group hover:bg-black/70 transition-all duration-300"
        >
          <span className="uppercase font-medium tracking-[0.1em] [writing-mode:vertical-lr] text-[10px]">
            Brochure
          </span>
        </a>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto pl-12 sm:pl-20 lg:pl-24 pr-6 sm:pr-10 lg:pr-8 w-full">
        <div className="max-w-4xl text-left text-white">
          <h1 className="text-[3.2rem] sm:text-[4.2rem] md:text-[5.5rem] lg:text-[6.5rem] font-bebas font-black leading-[0.9] mb-8 md:mb-16 tracking-[0.05em] animate-fade-in-up uppercase">
            SUSTAINABLE<br />
            CROP <span className="text-[#ffb300]">SOLUTIONS</span><br />
            FOR A SAFER WORLD
          </h1>

          <div className="animate-fade-in-up delay-200">
            <Link
              to="/solutions"
              className="inline-block bg-white text-gray-900 px-8 py-3 md:px-12 md:py-4 rounded-full font-bold text-xs md:text-sm hover:bg-[#1e5229] hover:text-white transition-all shadow-lg"
            >
              Explore Our Products
            </Link>
          </div>

          {/* Mobile-only Social and Brochure Row */}
          <div className="flex md:hidden items-center gap-6 animate-fade-in-up delay-300 mt-10">
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/agrariancrop?igsh=MWlnb2RpczBhODF4bA==" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <img src="/images/instagram logo.svg" alt="Instagram" className="w-5 h-5 filter brightness-0 invert" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <img src="/images/facebook logo.svg" alt="Facebook" className="w-5 h-5 filter brightness-0 invert" />
              </a>
              <a 
                href="https://youtube.com/@agrariancrop9379?si=oF85VgRyzFBNsMgm" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                <img src="/images/YouTube logo.svg" alt="YouTube" className="w-5 h-5 filter brightness-0 invert" />
              </a>
            </div>
            <div className="w-[1px] h-6 bg-white/20"></div>
            <a 
              href="/Brochure.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/90 hover:text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              Brochure
            </a>
          </div>
        </div>
      </div>

      {/* Slider Indicators - Bottom Right */}
      <div className="absolute bottom-10 right-10 z-20 flex gap-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentImage 
                ? 'bg-white border-white' 
                : 'bg-transparent border-white/60 hover:border-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
