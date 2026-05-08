import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionsSection = () => {
  const solutions = [
    {
      title: 'Soil Health',
      desc: 'Sustainable fertility for generations of farmers.',
      image: '/images/a70dc1600387e999e6d07d3c2338edfe81ae0c46.jpg',
    },
    {
      title: 'Plant Health',
      desc: 'Strengthening natural defense systems',
      image: '/images/bdcd148d843363e14bba325124422f07790fd3ba.jpg',
    },
    {
      title: 'Plant Fertility',
      desc: 'Enhancing metabolic activity and robust development.',
      image: '/images/c9fe7ae00f5ded6dd3bd0e62aca116db3f81f253.jpg',
    },
    {
      title: 'Plant Protection',
      desc: 'Eco-friendly biological solutions for pest and disease management.',
      image: '/images/880f1e8ab1be57fb9bff37e37f5428e34eccfe63.jpg',
    }
  ];

  return (
    <section className="bg-[#f8f9f8] py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black mb-16 leading-[0.9] tracking-[0.05em] uppercase">
          AGRARIAN <span className="text-[#76b947]">SOLUTIONS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-[2.5rem] overflow-hidden group hover:shadow-xl transition-all duration-500 flex flex-col">
              <div className="h-64 sm:h-72 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="p-10 relative min-h-[260px]">
                <h3 className="text-2xl font-bold text-[#1e1e1e] mb-4">{item.title}</h3>
                <p className="text-[#555] text-[1.125rem] leading-relaxed max-w-[240px]">
                  {item.desc}
                </p>
                <Link 
                  to={`/solutions?category=${encodeURIComponent(item.title)}`}
                  className="absolute bottom-6 right-8 w-14 h-14 rounded-full bg-[#121212] hover:bg-[#76b947] text-white flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg"
                >
                  <ArrowUpRight size={28} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
