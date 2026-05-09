import React, { useEffect } from 'react';

const Sustainability = () => {
  useEffect(() => {
    document.title = "Sustainability | Agrarian";
  }, []);

  const benefits = [
    {
      id: 1,
      icon: "🛡️",
      title: "Resistance Management",
      desc: "Chemical pesticides use single-action molecules, causing resistance over time. Biotech uses multiple modes of action with zero residue."
    },
    {
      id: 2,
      icon: "📊",
      title: "Maximum Residue Limit",
      desc: "Zero Residue Farming eliminates MRL concerns, helping farmers access premium domestic and export markets."
    },
    {
      id: 3,
      icon: "🚪",
      title: "Zero Re-Entry Interval",
      desc: "Biopesticides leave no harmful residue, allowing safe field re-entry immediately after application."
    },
    {
      id: 4,
      icon: "🌍",
      title: "No Collateral Damage",
      desc: "Unlike conventional pesticides, biopesticides break down quickly without harming soil, groundwater, or beneficial organisms."
    },
    {
      id: 5,
      icon: "👷",
      title: "Safe For Farm Workers",
      desc: "Biopesticides reduce health risks for farm workers, making farming safer and more productive."
    },
    {
      id: 6,
      icon: "💧",
      title: "Soil & Water Health",
      desc: "Biopesticides and bio-fertilizers improve soil quality and protect water bodies without harmful contamination."
    }
  ];

  return (
    <main className="flex-grow bg-[#fcfaf4] animate-fade-in-up">
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/4e24c10b424f60dc63a56cf3c11822c519440fcf.jpg"
            alt="Sustainability Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12 md:pb-16">
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black text-white tracking-[0.05em] uppercase leading-[0.9]">
            SUSTAINABILITY
          </h1>
        </div>
      </section>

      {/* Zero Residue Farming Section */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-xl flex flex-col lg:flex-row">
            
            {/* Text side */}
            <div className="lg:w-1/2 p-6 sm:p-10 lg:p-8 flex flex-col justify-center">
              <h2 className="text-3xl md:text-[2.5rem] font-bebas font-black tracking-[0.05em] uppercase leading-none mb-6">
                <span className="text-[#76b947]">ZERO RESIDUE</span> FARMING
              </h2>
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <p>
                  In a situation where global demand for food is increasingly at risk, the use of large amounts of synthetic and toxic materials in agriculture throws the equilibrium of nature out of balance — reducing the productivity of land over time.
                </p>
                <p>
                  Agrarian's Zero Residue Farming campaign represents a more sustainable, safer and gentler method. This philosophy is centred around creating organically derived biopesticides and bio-fertilizers that leave no residue in soil, air or water.
                </p>
                <p>
                  Meanwhile, bio-fertilizers containing bio-available NPK promote plant health and growth by increasing the supply of nutrients to the plant — without the long-term damage of synthetic alternatives.
                </p>
              </div>
            </div>

            {/* Image side */}
            <div className="lg:w-1/2 relative min-h-[150px] lg:min-h-full overflow-hidden">
              <img 
                src="/images/3963.jpg.jpeg" 
                alt="Field Sunset"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-16">
            <h2 className="text-3xl md:text-[2.5rem] font-bebas font-black tracking-[0.05em] uppercase leading-none">
              <span className="text-[#76b947]">BENEFITS</span> OF ZERO RESIDUE FARMING
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <div key={benefit.id} className="bg-white border border-gray-100 rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-300 group">
                <div className="text-4xl mb-6 transform group-hover:scale-125 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1e1e1e] mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-base">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Branded Quote Section */}
      <section className="bg-[#ffb300] py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bebas font-black text-[#0a1d13] tracking-[0.02em] leading-tight uppercase">
            "AGRARIAN PROMOTES SUSTAINABLE CROP SOLUTIONS ESSENTIAL TO A SAFER AND HEALTHIER LIFE FOR PEOPLE EVERYWHERE"
          </h2>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="mb-12">
            <h2 className="text-3xl md:text-[2.5rem] font-bebas font-black tracking-[0.05em] uppercase leading-none mb-6">
              <span className="text-[#76b947]">ZERO RESIDUE</span> VS ORGANIC VS CHEMICAL
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl">
              A clear comparison of farming methods across the parameters that matter most to farmers, consumers and the environment.
            </p>
          </div>

          <div className="overflow-x-auto scrollbar-hide rounded-[2rem] shadow-2xl">
            <table className="w-full text-left border-collapse bg-white">
              <thead>
                <tr className="text-white font-bebas tracking-wider uppercase text-lg">
                  <th className="bg-[#f8f9fa] text-[#1e1e1e] p-6 border-r border-white/10 min-w-[180px]">Parameters</th>
                  <th className="bg-[#1b4332] p-6 border-r border-white/10 min-w-[280px]">
                    <span className="flex items-center gap-2">
                      <span className="text-[#ffb300]">✓</span> ZERO RESIDUE (AGRARIAN)
                    </span>
                  </th>
                  <th className="bg-[#3d5a3e] p-6 border-r border-white/10 min-w-[280px]">ORGANIC</th>
                  <th className="bg-[#4a4a40] p-6 min-w-[280px]">CHEMICAL INPUTS</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600 leading-relaxed">
                {[
                  {
                    param: 'Availability',
                    zero: "Agrarian's network ensures uninterrupted supply of high-quality products across the country",
                    organic: "Mostly local; cannot be scaled to meet sudden demand or replace pesticides entirely",
                    chemical: "Affected by market forces, hoarding and manipulation by local dealers"
                  },
                  {
                    param: 'Consistency',
                    zero: "Highly standardised production process — quality is the priority",
                    organic: "Inconsistent performance makes this unreliable",
                    chemical: "Relatively consistent, but novel chemistry is rarely used due to high cost"
                  },
                  {
                    param: 'Cost Effectiveness',
                    zero: "Prices comparable or lower than chemical products; longer protection reduces labour costs",
                    organic: "Pure organic inputs are prohibitively expensive and not always available locally",
                    chemical: "Reasonably priced, but novel chemistry is among the most expensive"
                  },
                  {
                    param: 'Yields',
                    zero: "Promotes growth while protecting crops, ensuring high yields season after season",
                    organic: "May not withstand severe pest or disease attacks, resulting in lower yields",
                    chemical: "Declining crop yield and quality due to increasing pest resistance"
                  },
                  {
                    param: 'Biological Impact',
                    zero: "✓ Maintains biodiversity; no adverse impact on the entire food chain",
                    organic: "Does not impact biodiversity, but may not be effective against stronger pest varieties",
                    chemical: "✗ Indiscriminate — affects animals and beneficial microorganisms; adverse food chain impact"
                  },
                  {
                    param: 'Human Health',
                    zero: "✓ No adverse effect on human health and safety",
                    organic: "✓ No adverse effect on human health and safety",
                    chemical: "✗ Toxins cause cardio-respiratory, neurological, digestive and reproductive ailments"
                  },
                  {
                    param: 'Soil Health',
                    zero: "✓ Maintains pH levels and improves soil quality",
                    organic: "– Single nutrient deficiencies may exist",
                    chemical: "✗ Destroys soil nutrients over time; land may become barren and unfit for cultivation"
                  },
                  {
                    param: 'Effect on Water',
                    zero: "✓ Zero effect on natural composition of water bodies",
                    organic: "✓ Zero effect on natural composition of water bodies",
                    chemical: "✗ Leftover chemicals seep into surface and ground water, causing health hazards"
                  },
                  {
                    param: 'Sustainability',
                    zero: "✓ Best and most viable long-term option — profitable while being good for soil",
                    organic: "Yields much lower than conventional farming; higher cost for consumers",
                    chemical: "✗ Yields deteriorate progressively; not suited for long-term sustainability"
                  }
                ].map((row, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="p-6 font-bold text-[#1e1e1e] border-r border-gray-100">{row.param}</td>
                    <td className="p-6 border-r border-gray-100">
                      {row.zero.startsWith('✓') ? (
                        <span className="flex items-start gap-2">
                          <span className="text-[#76b947] font-bold">✓</span>
                          <span>{row.zero.substring(2)}</span>
                        </span>
                      ) : row.zero}
                    </td>
                    <td className="p-6 border-r border-gray-100">
                      {row.organic.startsWith('✓') ? (
                        <span className="flex items-start gap-2">
                          <span className="text-[#76b947] font-bold">✓</span>
                          <span>{row.organic.substring(2)}</span>
                        </span>
                      ) : row.organic}
                    </td>
                    <td className="p-6">
                      {row.chemical.startsWith('✗') ? (
                        <span className="flex items-start gap-2">
                          <span className="text-red-500 font-bold">✗</span>
                          <span>{row.chemical.substring(2)}</span>
                        </span>
                      ) : row.chemical}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Strategic Pillars Section */}
      <section className="pb-24 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="relative bg-[#1b4332] rounded-[3rem] overflow-hidden p-10 sm:p-16 lg:p-24">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img 
                src="/images/fake-cactus-plant-gardening-tools-black-soil.jpg.jpeg" 
                alt="Field Background"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <div className="max-w-3xl mb-16">
                <h2 className="text-3xl md:text-[2.5rem] font-bebas font-black tracking-[0.05em] uppercase leading-none text-white mb-6">
                  PROMOTING SUSTAINABLE <span className="text-[#ffb300]">CROP SOLUTIONS</span>
                </h2>
                <p className="text-white/80 text-lg leading-relaxed">
                  Agrarian is committed to promote Zero Residue Farming — providing integrated bio- agriculture and farm management solutions that ensure purity and reliability for farmers across India and beyond.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: 'Zero Residue Farming',
                    icon: '🌱',
                    desc: 'Promoting farming solutions that ensure zero chemical residue — protecting soil, water, air and the entire food chain for future generations.'
                  },
                  {
                    title: 'Integrated Bio Agriculture',
                    icon: '🔬',
                    desc: 'Providing integrated bio-agriculture and farm management solutions that ensure purity and reliability for farmers through cutting-edge biotechnology.'
                  },
                  {
                    title: 'World-Class Distribution',
                    icon: '🌐',
                    desc: 'Building world-class distribution infrastructure and network for biotechnology products that are effective, non-poisonous, eco-friendly and cost-effective.'
                  },
                  {
                    title: 'Farmer ROI & Yield',
                    icon: '💰',
                    desc: "Maximising farmers' return on investment by enabling stronger, healthier crops and delivering high-quality farm management solutions across India."
                  },
                  {
                    title: 'Genetics & Biotechnology',
                    icon: '🧬',
                    desc: 'Advancing crop varieties through genetics, plant breeding and biopesticide development for resilient, high-yielding agriculture that sustains communities.'
                  },
                  {
                    title: 'Safe Food For All',
                    icon: '🍚',
                    desc: 'Ensuring every farmer can produce quality, chemical-free food — contributing to a healthier and disease-free society for people everywhere.'
                  }
                ].map((pillar, idx) => (
                  <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                    <div className="bg-[#ffb300]/10 w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform">
                      {pillar.icon}
                    </div>
                    <h3 className="text-[#ffb300] font-bold text-xl mb-4">
                      {pillar.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Sustainability;
