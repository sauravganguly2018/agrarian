import React, { useEffect } from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileSocialRow from '../components/MobileSocialRow';
import BannerOverlay from '../components/BannerOverlay';

const News = () => {
  useEffect(() => {
    document.title = "News & Insights | Agrarian";
  }, []);

  const articles = [
    {
      id: 1,
      tag: 'FEATURED',
      category: 'ZERO RESIDUE FARMING',
      date: 'March 2025',
      title: 'WHY ZERO RESIDUE FARMING IS THE FUTURE OF AGRICULTURE',
      description: 'In a situation where global demand for food is at risk, the indiscriminate use of synthetic and toxic materials in agriculture throws the equilibrium of nature out of balance. Agrarian campaigns Zero Residue Farming as a more sustainable, safer and gentler method of farming — creating organically derived biopesticides and bio-fertilizers that leave no residue in soil, air or water.',
      image: '/images/c9fe7ae00f5ded6dd3bd0e62aca116db3f81f253.jpg'
    }
  ];

  return (
    <main className="flex-grow animate-fade-in-up">
      {/* Hero Banner */}
      <section className="relative h-[400px] md:h-[500px] flex items-end overflow-hidden">
        <BannerOverlay />
        <div className="absolute inset-0">
          <img
            src="/images/4e24c10b424f60dc63a56cf3c11822c519440fcf.jpg"
            alt="News Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pb-12 md:pb-16">
          <h1 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black text-white tracking-[0.05em] uppercase leading-[0.9]">
            NEWS & <span className="text-[#76b947]">INSIGHTS</span>
          </h1>
          <MobileSocialRow className="mt-8" />
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="space-y-12">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col lg:flex-row hover:shadow-2xl transition-shadow duration-500">
                
                {/* Image side */}
                <div className="lg:w-1/2 relative h-[300px] sm:h-[400px] lg:h-auto overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Featured Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="bg-[#ffb300] text-black text-[10px] font-bold px-4 py-1.5 rounded-full tracking-wider uppercase">
                      {article.tag}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[#76b947] text-xs font-bold tracking-widest uppercase">
                      {article.category}
                    </span>
                    <span className="text-gray-300">|</span>
                    <span className="text-gray-400 text-xs font-medium">
                      {article.date}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bebas font-black text-[#1e1e1e] tracking-[0.02em] leading-[1.2] mb-8 uppercase">
                    {article.title.split('ZERO RESIDUE').map((part, i, arr) => (
                      <React.Fragment key={i}>
                        {part}
                        {i < arr.length - 1 && <span className="text-[#76b947]">ZERO RESIDUE</span>}
                      </React.Fragment>
                    ))}
                  </h2>

                  <p className="text-gray-500 text-lg leading-relaxed mb-10 line-clamp-4 lg:line-clamp-none">
                    {article.description}
                  </p>

                  <div>
                    <button className="bg-[#ffb300] text-black px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#e6a100] transition-all transform hover:scale-105 active:scale-95 group">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Latest Articles Section */}
          <div className="mt-24 md:mt-32">
            <div className="mb-12">
              <h2 className="text-3xl md:text-[2.5rem] font-bebas font-black tracking-[0.05em] uppercase leading-[0.9]">
                LATEST <span className="text-[#76b947]">ARTICLES</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: 'How Biopesticides Are Reshaping Pest Management',
                  category: 'BIOPESTICIDES',
                  date: 'Feb 2025',
                  desc: 'Chemical pesticides affect the entire ecosystem — soil, water, air, plants and animals. Biopesticides target specific pests and then disintegrate.',
                  image: '/images/fake-cactus-plant-gardening-tools-black-soil.jpg.jpeg'
                },
                {
                  id: 2,
                  title: 'Bio-Available NPK: Why It Outperforms Synthetic',
                  category: 'BIO-FERTILIZERS',
                  date: 'Jan 2025',
                  desc: "Agrarian's bio-fertilizers enriched with bio-available NPK not only nourish plants but also actively improve soil texture.",
                  image: '/images/21263f7b9fbbf3324e17d5a973246d44891e8197.jpg'
                },
                {
                  id: 3,
                  title: 'Dealer Financing: How Agrarian Is Changing Credit',
                  category: 'AGRI FINANCE',
                  date: 'Dec 2024',
                  desc: "Agrarian's Dealer Stock Purchase Financing (SPC) offers short-term revolving working capital with no collateral.",
                  image: '/images/880f1e8ab1be57fb9bff37e37f5428e34eccfe63.jpg'
                },
                {
                  id: 4,
                  title: "Hybrid Seeds And Their Role In India's Food Revolution",
                  category: 'HYBRID SEEDS',
                  date: 'Nov 2024',
                  desc: "Hybrid seed varieties are packed with nutrition and provide tremendous advantage to growers — enabling higher yields.",
                  image: '/images/0c92d06746f135612ff1172b9ae4f720da293224.jpg'
                },
                {
                  id: 5,
                  title: 'Keeping Our Soil Fertile For Future Generations',
                  category: 'SOIL HEALTH',
                  date: 'Oct 2024',
                  desc: "Agrarian's efforts continue to maintain sustainable soil fertility across generations of farmers. Bio-products help preserve pH levels.",
                  image: '/images/957bfb68142754af562816dd817ae37351615975.png'
                },
                {
                  id: 6,
                  title: 'Natural Bioactivators: The Science Of Smarter Growth',
                  category: 'GROWTH PROMOTERS',
                  date: 'Sep 2024',
                  desc: "Bioactivators aid beneficial microorganisms in distributing nutrients within the soil. These products allow for reduced fertilizer rates.",
                  image: '/images/bdcd148d843363e14bba325124422f07790fd3ba.jpg'
                }
              ].map((article) => (
                <div key={article.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#ffb300] text-black text-[10px] font-bold px-3 py-1 rounded-md tracking-wider uppercase">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[#76b947] text-[10px] font-bold tracking-widest uppercase">{article.category}</span>
                      <span className="text-gray-300">|</span>
                      <span className="text-gray-400 text-[10px] font-medium">{article.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-[#1e1e1e] leading-snug mb-4 group-hover:text-[#76b947] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                      {article.desc}
                    </p>
                    <div className="mt-auto">
                      <button className="text-[#1b4332] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                        Read More 
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 flex justify-center">
              <button className="px-10 py-3.5 bg-[#0a1d13] text-white rounded-full font-bold text-sm flex items-center gap-2 hover:bg-[#1b4332] transition-all group">
                Load More Articles
                <svg className="w-4 h-4 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
};

export default News;
