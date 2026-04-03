import React, { useEffect } from 'react';
import { Target, Leaf, ShieldCheck, HeartHandshake } from 'lucide-react';

const About = () => {
  useEffect(() => {
    document.title = "About Us | Agrarian";
  }, []);
  const coreValues = [
    { title: 'Safety & Health', icon: <ShieldCheck className="w-8 h-8 text-agrarian-green" /> },
    { title: 'Sustainability', icon: <Leaf className="w-8 h-8 text-agrarian-green" /> },
    { title: 'Protecting the Planet', icon: <Target className="w-8 h-8 text-agrarian-green" /> },
    { title: 'Ethical Practices', icon: <HeartHandshake className="w-8 h-8 text-agrarian-green" /> }
  ];

  return (
    <main className="flex-grow pt-32 pb-24 bg-gray-50 animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Who We Are Section */}
        <section className="mb-20 bg-white rounded-[2rem] shadow-sm p-10 lg:p-16 border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-agrarian-light rounded-bl-[100%] opacity-50"></div>
          
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
              Who we <span className="text-agrarian-green font-serif italic">are?</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6">
              <strong className="text-agrarian-dark font-semibold">Agrarian</strong> is an integrated agriculture solutions provider founded in 2018 in Haryana with a mission to promote Zero Residue Farming and restore balance between productivity and sustainability.
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              We work closely with farmers to reduce dependence on chemical inputs and adopt safe, eco-friendly alternatives that protect soil health, biodiversity, and the food chain.
            </p>
          </div>
        </section>

        {/* Core Values Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Our Core <span className="text-agrarian-accent italic font-serif">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300 group hover:-translate-y-1 transform"
              >
                <div className="w-20 h-20 rounded-full bg-agrarian-light flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
};

export default About;
