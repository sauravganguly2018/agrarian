import React, { useEffect } from 'react';
import { Target, Leaf, ShieldCheck, HeartHandshake, TrendingUp } from 'lucide-react'; // Icons

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
    <main className="flex-grow bg-white animate-fade-in-up">
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/4e24c10b424f60dc63a56cf3c11822c519440fcf.jpg"
            alt="About Us Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12 md:pb-16">
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black text-white tracking-[0.05em] uppercase leading-[0.9]">
            ABOUT <span className="text-[#76b947]">US</span>
          </h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Who We Are Section - Matched Height Layout */}
        <section className="py-40 md:py-56">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-20 lg:gap-32">

            {/* Left Content (Narrower) */}
            <div className="w-full lg:w-[45%] flex flex-col justify-center">
              <p className="text-lg md:text-[1.5rem] text-[#1e4a36] leading-[1.4] font-normal font-['Neue_Montreal',_sans-serif]">
                Agrarian is an integrated agriculture solutions provider founded in 2018 in Haryana with a mission to promote Zero Residue Farming and restore balance between productivity and sustainability. We work closely with farmers to reduce dependence on chemical inputs and adopt safe, eco-friendly alternatives that protect soil health, biodiversity, and the food chain.
              </p>
            </div>

            {/* Right Image Area (Matched Height on Desktop, Fixed on Mobile) */}
            <div className="w-full lg:w-[35%]">
              <div className="h-[400px] md:h-[500px] lg:h-full bg-gray-100 rounded-3xl overflow-hidden relative group shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
                  alt="Agricultural field"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
              </div>
            </div>

          </div>
        </section>

      </div>

      {/* Core Values Section - Overlapping Design */}
      <section className="relative w-full overflow-hidden bg-[#0a1f14]">
        <div className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[850px] relative">

          {/* Left Dark Sidebar Area (Decorative) */}
          <div className="hidden lg:block lg:w-[28%] bg-[#0a1f14] z-10"></div>

          {/* Main Background Image Area */}
          <div className="relative w-full lg:w-[72%] h-[500px] md:h-[600px] lg:h-auto z-0">
            <img
              src="/images/21263f7b9fbbf3324e17d5a973246d44891e8197.jpg"
              alt="Core Values Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlapping Card - Positioned relative on mobile, absolute on desktop */}
          <div className="relative lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[15%] w-[92%] sm:w-[85%] md:w-[70%] lg:w-[600px] bg-white p-8 md:p-16 lg:p-20 shadow-2xl z-30 -mt-20 mb-20 lg:my-0 mx-auto lg:mx-0">
            <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black tracking-[0.05em] mb-8 md:mb-10 uppercase leading-[0.9] lg:whitespace-nowrap">
              OUR CORE <span className="text-[#76b947]">VALUE</span>
            </h2>

            <div className="space-y-6">
              {coreValues.map((value, idx) => (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="flex-shrink-0 text-[#76b947]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:scale-125 transition-transform">
                      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
                    {value.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="bg-white py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black tracking-[0.05em] mb-16 uppercase leading-[0.9]">
            OUR <span className="text-[#76b947]">VISION</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Zero Residue Farming",
                desc: "Promoting farming solutions that ensure zero chemical residue — protecting soil, water, air, and the entire food chain."
              },
              {
                title: "Integrated Bio Agriculture",
                desc: "Providing integrated bio-agriculture and farm management solutions that ensure purity and reliability for farmers."
              },
              {
                title: "World-Class Distribution",
                desc: "Building a world-class infrastructure and network for biotechnology products that are effective, non-poisonous, and eco-friendly."
              },
              {
                title: "Farmer ROI & Yield",
                desc: "Maximising farmers' return on investment by enabling stronger, healthier crops and delivering high-quality farm management solutions."
              },
              {
                title: "Genetics & Biotechnology",
                desc: "Advancing crop varieties through genetics, plant breeding, and biopesticide development for resilient, high-yielding agriculture."
              },
              {
                title: "Safe Food for All",
                desc: "Ensuring every farmer can produce quality, chemical-free food — contributing to a healthier and disease-free society."
              }
            ].map((v, i) => (
              <div key={i} className="border border-gray-200 rounded-3xl p-8 md:p-12 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 bg-[#1b4332] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-6 h-6 text-[#ffb300]" />
                </div>
                <h3 className="text-2xl font-bold text-[#76b947] mb-4">
                  {v.title}
                </h3>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
};

export default About;
