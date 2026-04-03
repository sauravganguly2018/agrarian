import React from 'react';

const Stats = () => {
  return (
    <section className="bg-agrarian-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center md:justify-around gap-10 md:gap-4 flex-wrap">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4">
            <span className="text-5xl font-serif italic font-light tracking-wide">3,000+</span>
            <div className="text-sm font-medium leading-tight text-gray-200">
              Distribution<br/>Partners
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4">
            <span className="text-5xl font-serif italic font-light tracking-wide">50,000+</span>
            <div className="text-sm font-medium leading-tight text-gray-200">
              Retail<br/>Touchpoints
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4">
            <span className="text-5xl font-serif italic font-light tracking-wide">50M+</span>
            <div className="text-sm font-medium leading-tight text-gray-200">
              Farmers<br/>Impacted
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
