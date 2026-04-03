import React, { useState, useEffect } from 'react';
import { ArrowUpRight, FlaskConical, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';

const Solutions = () => {
  useEffect(() => {
    document.title = "Our Solutions | Agrarian";
  }, []);
  const [activeSolution, setActiveSolution] = useState('All');
  const [activeType, setActiveType] = useState('All');

  const solutionFilters = ['All', 'Soil Health', 'Plant Health', 'Plant Fertility', 'Plant Protection'];
  const typeFilters = ['All', 'Biological', 'Chemical'];

  const baseProducts = [
    {
      name: 'Beauver',
      category: 'Bio Insecticide',
      solution: 'Soil Health',
      type: 'Biological',
      imgSrc: '/images/8851d8bdf154574698639099545172d5465a4936.png',
    },
    {
      name: 'Bravo',
      category: 'Control BPH & Whiteflies',
      solution: 'Plant Health',
      type: 'Chemical',
      imgSrc: '/images/5aabb200cc2fcc2cc6de20c1b2a55773ce47e5e0.png',
    },
    {
      name: 'Crobia',
      category: 'Biological Soil Amendment',
      solution: 'Plant Fertility',
      type: 'Biological',
      imgSrc: '/images/86cfea1d6344ac72acf3086527460225d79352d5.png',
    }
  ];

  // Repeat for a 3x3 grid
  const allProducts = [...baseProducts, ...baseProducts, ...baseProducts].map((p, i) => ({ ...p, id: i }));

  const filteredProducts = allProducts.filter(product => {
    const matchesSolution = activeSolution === 'All' || product.solution === activeSolution;
    const matchesType = activeType === 'All' || product.type === activeType;
    return matchesSolution && matchesType;
  });

  return (
    <main className="flex-grow pt-32 pb-24 bg-white animate-fade-in-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Filters Top Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          
          {/* Solution Filters */}
          <div className="flex flex-wrap gap-3">
            {solutionFilters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveSolution(filter)}
                aria-pressed={activeSolution === filter}
                aria-label={`Filter by ${filter} solutions`}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  activeSolution === filter
                    ? 'bg-[#ffc107] text-black shadow-md'
                    : 'bg-white border border-gray-200 text-gray-700 hover:border-[#ffc107] hover:text-[#ffc107]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Type Filters (Segmented Control) */}
          <div className="flex bg-[#1b4332] p-1 rounded-full shadow-inner border border-[#1b4332]">
            {typeFilters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveType(filter)}
                aria-pressed={activeType === filter}
                aria-label={`Filter by ${filter} products`}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeType === filter
                    ? 'bg-white text-[#1b4332] shadow-sm'
                    : 'bg-transparent text-gray-200 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Count Label */}
        <div className="mb-6" aria-live="polite">
          <p className="text-gray-500 italic text-lg">
            {filteredProducts.length} Products
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              {/* Badge */}
              <div className="w-full flex justify-start mb-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  product.type === 'Biological' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-blue-100 text-blue-700'
                }`}>
                  {product.type === 'Biological' ? <Bug size={14} /> : <FlaskConical size={14} />}
                  {product.type}
                </span>
              </div>

              {/* Product Image */}
              <div className="h-56 w-full flex items-center justify-center mb-8">
                <img 
                  src={product.imgSrc} 
                  alt={product.name} 
                  className="max-h-full object-contain mix-blend-multiply"
                />
              </div>

              {/* Product Info */}
              <div className="w-full mt-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{product.category}</p>
                
                <Link 
                  to={`/product/${product.name.toLowerCase()}`}
                  className="w-full bg-[#ffc107] hover:bg-[#ffb300] text-black font-semibold py-3.5 rounded-xl flex justify-center items-center gap-2 transition-colors duration-200 shadow-sm"
                >
                  <span className="font-bold">Explore</span> <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No products found matching the selected filters.</p>
          </div>
        )}

      </div>
    </main>
  );
};

export default Solutions;
