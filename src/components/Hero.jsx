import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/f82f7de733fd3f9b3af07beecec5716bcdf0ef22.png" 
          alt="Agriculture Field Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-agrarian-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <span className="inline-block py-1 px-3 rounded-full bg-agrarian-accent/20 border border-agrarian-accent/50 text-agrarian-light text-sm font-semibold tracking-wider mb-6 animate-fade-in-up">
            SUSTAINABLE CROP SOLUTIONS FOR A SAFER, HEALTHIER LIFE
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up delay-100">
            Agrarian promotes sustainable <span className="text-agrarian-accent">crop solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl animate-fade-in-up delay-200">
            We are leading provider of sustainable agricultural inputs, offering innovative biological and chemical solutions to enhance soil health, plant health, plant fertility and plant protection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
            <Link 
              to="/solutions" 
              aria-label="Explore all agrarian products and solutions"
              className="flex items-center justify-center gap-2 bg-agrarian-green hover:bg-agrarian-light hover:text-agrarian-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
            >
              Explore Our Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Hero;
