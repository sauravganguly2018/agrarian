import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Features = () => {
  const solutions = [
    {
      title: 'Soil Health',
      description: 'Sustainable fertility for generations of farmers.',
      imgSrc: '/images/a70dc1600387e999e6d07d3c2338edfe81ae0c46.jpg', 
    },
    {
      title: 'Plant Health',
      description: 'Strengthening natural defense systems',
      imgSrc: '/images/bdcd148d843363e14bba325124422f07790fd3ba.jpg', 
    },
    {
      title: 'Plant Fertility',
      description: 'Enhancing metabolic activity and robust development.',
      imgSrc: '/images/c9fe7ae00f5ded6dd3bd0e62aca116db3f81f253.jpg', 
    },
    {
      title: 'Plant Protection',
      description: 'Eco-friendly biological solutions for pest and disease management.',
      imgSrc: '/images/880f1e8ab1be57fb9bff37e37f5428e34eccfe63.jpg', 
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Agrarian <span className="text-agrarian-accent font-serif italic font-medium">Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={solution.imgSrc} 
                  alt={solution.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative">
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-agrarian-dark transition-colors duration-300">
                  {solution.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-12 group-hover:text-agrarian-dark transition-colors duration-300">
                  {solution.description}
                </p>
                
                <div className="absolute bottom-6 right-6">
                  <button className="bg-black text-white p-2 rounded-full group-hover:bg-agrarian-dark transition-colors duration-300 flex items-center justify-center">
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
