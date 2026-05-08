import React, { useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Bug, FlaskConical, ArrowUpRight, TrendingUp } from 'lucide-react';
import productsData from '../data/products.json';

const ProductDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  // Find the product based on slug
  const product = useMemo(() => {
    return productsData.find(p => p.productName.toLowerCase().replace(/\s+/g, '-') === name);
  }, [name]);

  // Get 3 related products (fixed but distinct from current)
  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return productsData
      .filter(p => p.productName !== product.productName)
      .slice(0, 3);
  }, [product]);

  useEffect(() => {
    if (product) {
      document.title = `${product.productName} | Agrarian`;
      window.scrollTo(0, 0);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product not found</h2>
          <button onClick={() => navigate('/solutions')} className="text-agrarian-green font-bold">Back to Solutions</button>
        </div>
      </div>
    );
  }

  return (
    <main className="flex-grow pt-20 pb-0 animate-fade-in-up bg-white">
      
      {/* Product Detail Section */}
      <div className="w-full py-10 md:py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate('/solutions')} 
            className="flex items-center gap-2 text-gray-500 hover:text-agrarian-dark font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Solutions
          </button>
          
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
            
            {/* Left Image Side */}
            <div className="w-full lg:w-[40%] flex justify-center items-center">
              <div className="relative group">
                <img 
                  src={product.imageLink} 
                  alt={product.productName} 
                  className="max-w-full h-auto object-contain max-h-[450px] drop-shadow-2xl mix-blend-multiply transform transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
            </div>

            {/* Right Details Card */}
            <div className="w-full lg:w-[60%] bg-white rounded-[2rem] p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-50">
              
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5 ${
                product.isBiological ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
              }`}>
                {product.isBiological ? <Bug size={12} /> : <FlaskConical size={12} />}
                {product.isBiological ? 'Biological' : 'Chemical'}
              </span>

              <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-1">{product.productName}</h1>
              <p className="text-lg text-gray-400 italic mb-6">{product.category}</p>

              <p className="text-gray-600 leading-relaxed text-base mb-8">
                {product.description}
              </p>

              <div className="space-y-6">
                <div className="border-t border-gray-100 pt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Available Packing</h3>
                  <p className="text-gray-600 text-base">{product.availabePacking}</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Application</h3>
                  <div className="space-y-2">
                    {product.application.map((app, idx) => (
                      <div key={idx} className="flex gap-4 items-start">
                        <span className="font-bold text-agrarian-green whitespace-nowrap text-sm mt-0.5">{app.stage} Stage:</span>
                        <p className="text-gray-600 text-sm leading-relaxed">{app.details}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Dosage</h3>
                  <p className="text-gray-600 text-base">{product.dosage}</p>
                </div>

                <div className="border-t border-gray-100 pt-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Recommended Crops</h3>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {product.crops}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section - Image 3 Style */}
      <section className="bg-[#0a1f14] w-full py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black text-white tracking-[0.05em] leading-[0.9] uppercase mb-16">
            KEY <span className="text-[#76b947]">BENEFITS</span>
          </h2>

          <div className={`grid grid-cols-1 ${
            product.benefits.length === 1 ? '' : 
            product.benefits.length === 2 ? 'sm:grid-cols-2' : 
            `sm:grid-cols-2 lg:grid-cols-${Math.min(product.benefits.length, 4)}`
          } gap-4 md:gap-6`}>
            {product.benefits.slice(0, 4).map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-[#153124] rounded-3xl p-8 flex flex-col hover:bg-[#1c3f2e] transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#ffb300]/10 flex items-center justify-center text-[#ffb300] mb-12 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-7 h-7" />
                </div>
                
                <h4 className="text-white font-bold text-2xl leading-tight mb-4">
                  {benefit}
                </h4>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Related Products Section - Image 4 Style */}
      <section className="bg-white w-full pt-48 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black text-[#1e4a36] tracking-[0.05em] leading-[0.9] uppercase mb-16 text-left">
            RELATED <span className="text-[#76b947]">PRODUCTS</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {relatedProducts.map((p, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-gray-100 rounded-[2.5rem] p-8 flex flex-col items-center hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-full flex justify-start mb-6">
                  <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${
                    p.isBiological ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'
                  }`}>
                    {p.isBiological ? <Bug size={12} /> : <FlaskConical size={12} />}
                    {p.isBiological ? 'Biological' : 'Chemical'}
                  </span>
                </div>

                <div className="h-64 w-full flex items-center justify-center mb-8">
                  <img 
                    src={p.imageLink} 
                    alt={p.productName} 
                    className="max-h-full object-contain mix-blend-multiply transform transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="text-left w-full">
                  <h3 className="text-3xl font-black text-gray-900 mb-1">{p.productName}</h3>
                  <p className="text-gray-500 font-medium mb-10">{p.category}</p>
                  
                  <Link 
                    to={`/product/${p.productName.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full bg-[#ffb300] hover:bg-[#e6a100] text-black font-bold py-5 rounded-2xl flex justify-center items-center gap-2 transition-all duration-300 shadow-lg"
                  >
                    <span>Explore</span> <ArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link 
              to="/solutions" 
              className="inline-flex items-center gap-2 bg-[#0a1f14] text-white px-12 py-5 rounded-full font-bold hover:bg-[#153124] transition-all duration-300 shadow-xl"
            >
              Explore All <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
};

export default ProductDetails;
