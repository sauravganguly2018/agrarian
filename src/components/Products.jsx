import React from 'react';
import { ArrowUpRight, FlaskConical, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';

const Products = () => {
  const products = [
    {
      name: 'Beauver',
      category: 'Bio Insecticide',
      type: 'Biological',
      imgSrc: '/images/8851d8bdf154574698639099545172d5465a4936.png', 
    },
    {
      name: 'Bravo',
      category: 'Control BPH & Whiteflies',
      type: 'Chemical',
      imgSrc: '/images/5aabb200cc2fcc2cc6de20c1b2a55773ce47e5e0.png', // Placeholder
    },
    {
      name: 'Crobia',
      category: 'Biological Soil Amendment',
      type: 'Biological',
      imgSrc: '/images/86cfea1d6344ac72acf3086527460225d79352d5.png', 
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Agrarian <span className="text-agrarian-accent font-serif italic font-medium">Solutions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-3xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
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
              <div className="h-48 w-full flex items-center justify-center mb-8">
                <img 
                  src={product.imgSrc} 
                  alt={product.name} 
                  className="max-h-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="w-full mt-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-6">{product.category}</p>
                
                <Link 
                  to={`/product/${product.name.toLowerCase()}`}
                  className="w-full bg-[#ffc107] hover:bg-[#ffb300] text-black font-semibold py-3 rounded-xl flex justify-center items-center gap-2 transition-colors duration-200"
                >
                  <span className="italic">Explore</span> <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/solutions" className="border border-gray-400 text-gray-700 hover:bg-gray-50 hover:border-gray-500 font-medium py-2.5 px-8 rounded-full flex items-center gap-2 transition-all duration-300">
            Explore All <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;
