import React from 'react';

const CategoryBar = () => {
  const categories = [
    "BIOPESTICIDES",
    "BIO-FERTILIZERS",
    "HYBRID SEEDS",
    "NATURAL GROWTH PROMOTERS"
  ];

  return (
    <div className="bg-[#ffb300] py-6 border-y border-[#e6a100] overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center">
            {categories.map((category, index) => (
              <span
                key={index}
                className="text-[#1e5229] font-black text-sm md:text-base tracking-[0.25em] mx-12"
              >
                {category}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryBar;
