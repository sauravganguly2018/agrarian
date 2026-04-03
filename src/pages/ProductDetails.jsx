import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Bug, Sprout } from 'lucide-react';

const ProductDetails = () => {
  const { name } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const productName = name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Product';
    document.title = `${productName} | Product Details | Agrarian`;
  }, [name]);

  // Dummy mock logic for 'Beauver' matching the screenshot
  // In a real app, this would be fetched based on `name`
  const product = {
    name: name ? name.charAt(0).toUpperCase() + name.slice(1) : 'Beauver',
    category: 'Bio Insecticide',
    type: 'Biological',
    imgSrc: '/images/8851d8bdf154574698639099545172d5465a4936.png', // The beauver bag image
    description: "Agrarian BioNPK is a natural biofertilizer containing beneficial microbial inoculants (nitrogen-fixing, phosphate-solubilizing, and potash-mobilizing bacteria). It converts unavailable nutrients into plant-available forms, improving overall soil fertility.",
    dosage: "25 kg per acre",
    crops: {
      Vegetables: "Tomato, capsicum, brinjal, cabbage, okra, onion, cauliflower, carrot, potato, chilli, cucumber, bottle gourd, green gram, etc.",
      Fruits: "Mango, sapota, pomegranate, papaya, grapes, apple, guava, citrus, etc.",
      Others: "Cereals, pulses, oilseeds, and ornamental crops"
    },
    benefits: [
      {
        title: "Nutrient Availability Enhancement",
        text: "Enhances availability of N, P, K and micronutrients"
      },
      {
        title: "Plant Growth & Yield",
        text: "Promotes better growth and higher yields"
      },
      {
        title: "Hormonal Root Development",
        text: "Secretes plant hormones (IAA, cytokinins, gibberellins) and vitamins for strong root and shoot development"
      },
      {
        title: "Soil Structure Improvement",
        text: "Improves soil structure, aeration, and water retention"
      }
    ]
  };

  return (
    <main className="flex-grow pt-28 pb-0 animate-fade-in-up">
      
      {/* Top Banner Section */}
      <div className="bg-[#f7f8f7] w-full pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {/* Back Button */}
          <button 
            onClick={() => navigate(-1)} 
            className="flex items-center gap-2 text-gray-500 hover:text-agrarian-dark font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Products
          </button>
          
          <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
            
            {/* Left Image Side */}
            <div className="w-full lg:w-5/12 flex justify-center items-center py-10">
              <img 
                src={product.imgSrc} 
                alt={product.name} 
                className="max-w-full h-auto object-contain max-h-[500px] drop-shadow-2xl mix-blend-multiply" 
              />
            </div>

            {/* Right Details Card */}
            <div className="w-full lg:w-7/12 bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
              
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold bg-green-100 text-green-700 mb-6">
                <Bug className="w-4 h-4" /> {product.type}
              </span>

              <h1 className="text-4xl font-extrabold text-gray-900 mb-1">{product.name}</h1>
              <p className="text-lg text-gray-600 italic font-serif mb-8">{product.category}</p>

              <p className="text-gray-600 leading-relaxed mb-8">
                {product.description}
              </p>

              <div className="border-t border-gray-100 pt-6 mb-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Dosage & Application</h3>
                <p className="text-gray-600">{product.dosage}</p>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Recommended Crops</h3>
                <div className="space-y-2 text-gray-600 text-sm">
                  <p><strong className="text-gray-900">Vegetables:</strong> {product.crops.Vegetables}</p>
                  <p><strong className="text-gray-900">Fruits:</strong> {product.crops.Fruits}</p>
                  <p><strong className="text-gray-900">Others:</strong> {product.crops.Others}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Bottom Section */}
      <div className="bg-white w-full py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-12">
            Key <span className="text-agrarian-green font-serif italic font-medium">Benefits</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-[#1e4a36] rounded-[2rem] p-8 flex flex-col hover:shadow-xl transition-shadow shadow-md h-full"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-8 border border-white/20">
                  <Sprout className="w-5 h-5" />
                </div>
                
                <h4 className="text-[#facc15] font-bold text-xl mb-4 leading-snug pr-4">
                  {benefit.title}
                </h4>
                
                <p className="text-gray-100 text-sm leading-relaxed mt-auto">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </main>
  );
};

export default ProductDetails;
