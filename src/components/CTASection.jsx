import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden bg-[#0a1f14]">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        {/* Real background image */}
        <img
          src="/images/3963.jpg.jpeg"
          alt="Ready to go with nature"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center">
        <h2 className="inline-block text-4xl md:text-6xl font-black mb-8 tracking-tight text-white uppercase transform scale-y-[1.15]">
          READY TO <span className="text-[#ffb300]">GO WITH NATURE?</span>
        </h2>

        <p className="text-white text-lg md:text-xl leading-relaxed mb-12 max-w-3xl mx-auto font-medium opacity-90">
          Join thousands of farmers across India who have already made the switch to zero residue, sustainable farming solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <Link
            to="/contact"
            className="bg-[#ffb300] text-black px-10 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-[#e6a100] transition-all duration-300 shadow-xl hover:scale-105"
          >
            Contact Us Today <ArrowRight size={20} strokeWidth={3} />
          </Link>

          <Link
            to="/solutions"
            className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
          >
            Explore Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
