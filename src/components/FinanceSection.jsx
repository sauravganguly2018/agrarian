import React from 'react';
import { Check } from 'lucide-react';

const FinanceSection = () => {
  const features = [
    'No Collateral Required',
    'Approval in 4 Hours',
    'Paperless / E-KYC',
    'Kisan Credit Card',
    'Crop Insurance',
    'Peak Season 2X Limit'
  ];

  return (
    <section className="relative py-24 min-h-[700px] flex items-center bg-[#121212] overflow-hidden">
      {/* Background Placeholder - Dark overlay to simulate soil image background */}
      <div className="absolute inset-0 z-0">
        {/* Real background image */}
        <img 
          src="/images/fake-cactus-plant-gardening-tools-black-soil.jpg.jpeg" 
          alt="Agri Finance Background" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
        <div className="max-w-3xl">
          <h2 className="inline-block text-4xl md:text-5xl font-black mb-6 tracking-tight text-white uppercase transform scale-y-[1.15] leading-none origin-left">
            AGRI <span className="text-[#ffb300]">FINANCE</span> FOR DEALERS
          </h2>
          
          <p className="text-gray-300 text-[1rem] md:text-[1.25rem] leading-[1.3] tracking-normal mb-12 font-normal max-w-2xl font-inter align-middle">
            Agrarian dares to bring industry-unique financial support for the entire channel — extending organised credit to dealers who have historically relied on local money lenders.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white/10 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-3 transition-all hover:bg-white/20"
              >
                <div className="text-[#ffb300]">
                  <Check size={20} strokeWidth={3} />
                </div>
                <span className="text-white font-neue font-medium text-[0.75rem] md:text-[0.875rem] leading-[1] tracking-normal align-middle">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-12 pt-8 border-t border-white/10">
            <div className="flex items-center gap-4">
              <span className="inline-block text-4xl md:text-5xl font-black text-[#ffb300] transform scale-y-[1.25] leading-none">50%</span>
              <div className="text-white font-neue font-medium text-[1rem] md:text-[1.25rem] leading-[1.3] tracking-[0.015em] align-middle uppercase">
                LOWER<br/>INTEREST RATE
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="inline-block text-4xl md:text-5xl font-black text-[#ffb300] transform scale-y-[1.25] leading-none">48H</span>
              <div className="text-white font-neue font-medium text-[1rem] md:text-[1.25rem] leading-[1.3] tracking-[0.015em] align-middle uppercase">
                LOAN<br/>DISBURSEMENT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinanceSection;
