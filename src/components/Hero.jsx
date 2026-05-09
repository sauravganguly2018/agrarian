import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MobileSocialRow from './MobileSocialRow';
import BannerOverlay from './BannerOverlay';

const Hero = () => {
  const images = [
    "/images/f82f7de733fd3f9b3af07beecec5716bcdf0ef22.png",
    "/images/ChatGPT Image May 9, 2026, 01_43_27 PM.png",
    "/images/4b7d73a96a96606d1ebdbdd26d08450cd68bc606.jpg",
    "/images/c9fe7ae00f5ded6dd3bd0e62aca116db3f81f253.jpg",
    "/images/farmer-holds-rice-hand (2).jpg.jpeg",
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
      {/* Banner Overlay (Socials & Brochure) */}
      <BannerOverlay />
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
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/30 lg:hidden"></div>
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

          <MobileSocialRow className="mt-10" />
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
