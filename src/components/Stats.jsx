import React from 'react';

const Stats = () => {
  return (
    <section className="bg-[#0a1f14] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-around items-center gap-y-16 gap-x-16">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center text-4xl md:text-[3rem] font-black text-[#ffb300] tracking-tighter leading-none transform scale-y-[1.25]">
              3,000<span className="text-[0.85em] ml-0.5">+</span>
            </span>
            <div className="text-lg md:text-[1.25rem] font-medium leading-[1.2] text-white">
              Distribution<br/>Partners
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center text-4xl md:text-[3rem] font-black text-[#ffb300] tracking-tighter leading-none transform scale-y-[1.25]">
              50,000<span className="text-[0.85em] ml-0.5">+</span>
            </span>
            <div className="text-lg md:text-[1.25rem] font-medium leading-[1.2] text-white">
              Retail<br/>Touchpoints
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center text-4xl md:text-[3rem] font-black text-[#ffb300] tracking-tighter leading-none transform scale-y-[1.25]">
              50M<span className="text-[0.85em] ml-0.5">+</span>
            </span>
            <div className="text-lg md:text-[1.25rem] font-medium leading-[1.2] text-white">
              Farmers<br/>Impacted
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
