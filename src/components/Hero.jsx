import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center py-24 md:py-48 min-h-[80vh] lg:min-h-0">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/f82f7de733fd3f9b3af07beecec5716bcdf0ef22.png"
          alt="Agriculture Field Background"
          className="w-full h-full object-cover object-[65%_center] md:object-[70%_center] lg:object-[85%_center]"
        />
        {/* Dark Gradient Overlay to match image */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent hidden lg:block"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40 lg:hidden"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 w-full">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
