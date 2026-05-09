import React, { useMemo } from 'react';
import { ArrowUpRight, FlaskConical, Bug } from 'lucide-react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductImage from './ProductImage';

const Products = () => {
  // Take 3 products for the home page
  const homeProducts = useMemo(() => {
    return productsData.slice(0, 3);
  }, []);

  return (
    <section className="py-24 bg-[#f8f9f8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black text-[#1e1e1e] leading-[0.9] tracking-[0.05em] uppercase">
            AGRARIAN <span className="text-[#76b947]">PRODUCTS</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeProducts.map((product, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-col items-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Badge */}
              <div className="w-full flex justify-start mb-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                  product.isBiological ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                }`}>
                  {product.isBiological ? <Bug size={14} /> : <FlaskConical size={14} />}
                  {product.isBiological ? 'Biological' : 'Chemical'}
                </span>
              </div>

              {/* Product Image */}
              <ProductImage 
                src={product.imageLink} 
                alt={product.productName} 
                className="max-h-full object-contain mix-blend-multiply"
                containerClassName="h-56 w-full flex items-center justify-center mb-8"
              />

              {/* Product Info */}
              <div className="w-full mt-auto">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.productName}</h3>
                <p className="text-gray-500 text-sm mb-6">{product.category}</p>
                
                <Link 
                  to={`/product/${product.productName.toLowerCase().replace(/\s+/g, '-')}`}
                  className="w-full bg-[#ffc107] hover:bg-[#ffb300] text-black font-semibold py-3.5 rounded-xl flex justify-center items-center gap-2 transition-colors duration-200 shadow-sm"
                >
                  <span className="font-bold text-[16px]">Explore</span> <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/solutions" className="bg-[#0a1f14] text-white hover:bg-[#153124] font-medium py-3 px-12 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg group">
            Explore All <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Products;
