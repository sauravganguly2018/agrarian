import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const GrowersStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const minSwipeDistance = 50;

  const stories = [
    {
      id: 1,
      quote: "Agrarian's products reduced pest problems without damaging my soil. My farming costs have gone down, and the crops look stronger and healthier than before.",
      name: "Rajesh Kumar",
      details: "Velora, Odisha",
      image: "/images/957bfb68142754af562816dd817ae37351615975.png"
    },
    {
      id: 2,
      quote: "Since switching to Agrarian's bio solutions, my soil is healthier, my yields are better, and I no longer worry about residue on my produce. It has truly changed how I farm.",
      name: "Ramesh Naik",
      details: "Raipur, Chhattisgarh",
      image: "/images/4afc7cd30ee914b47930294d024eae43044fb984.png"
    },
    {
      id: 3,
      quote: "Switching to bio-based farming helped improve both soil and water retention on my farm. I feel safer working in the fields, and buyers are happier with the produce quality.",
      name: "Prakash Behera",
      details: "Jaleswar, Odisha",
      image: "/images/84ec13e8218a6e330128b99da798be00028084cc.png"
    }
  ];

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % stories.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);

  // Auto-advance
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, stories.length]);

  // Swipe handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches ? e.targetTouches[0].clientX : e.clientX);
    setIsPaused(true);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches ? e.targetTouches[0].clientX : e.clientX);
  };

  const onTouchEndHandler = () => {
    setIsPaused(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  return (
    <section className="py-12 md:py-24 bg-white flex flex-col items-center overflow-hidden">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8 md:mb-12">
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black text-[#1e1e1e] leading-[0.9] tracking-[0.05em] uppercase">
            GROWERS <span className="text-[#76b947]">STORIES</span>
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto group">
          
          {/* Main Carousel Wrapper */}
          <div 
            className="overflow-hidden rounded-[2rem] w-full"
            onMouseEnter={() => setIsPaused(true)}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEndHandler}
            onMouseDown={onTouchStart}
            onMouseMove={touchStart ? onTouchMove : undefined}
            onMouseUp={onTouchEndHandler}
            onMouseLeave={onTouchEndHandler}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out cursor-grab active:cursor-grabbing" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {stories.map((story, index) => (
                <div key={story.id} className="w-full flex-shrink-0 flex flex-col lg:flex-row bg-[#0a1d13] lg:h-[480px]">
                  
                  {/* Image side */}
                  <div className="lg:w-1/2 h-80 sm:h-96 lg:h-full relative w-full overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover select-none pointer-events-none object-top"
                    />
                  </div>
                  
                  {/* Text side */}
                  <div className="lg:w-1/2 text-white p-6 pb-12 sm:p-10 lg:p-16 flex flex-col lg:justify-center select-none relative lg:h-full">
                    <div className="mb-2 lg:mb-8">
                      <Quote className="w-6 h-6 lg:w-12 lg:h-12 text-[#1b4332] fill-current opacity-40" />
                    </div>
                    
                    <p className="text-base lg:text-2xl font-light leading-relaxed mb-4 lg:mb-10 text-gray-200 italic">
                      "{story.quote}"
                    </p>
                    
                    <div className="mt-4 lg:mt-auto">
                      <h4 className="text-lg lg:text-2xl font-bold text-white mb-0">{story.name}</h4>
                      <p className="text-gray-500 font-medium text-xs lg:text-sm mb-4">{story.details}</p>
                      
                      {/* Pagination Bars - Moved into flow to eliminate gaps */}
                      <div className="flex items-center gap-2">
                        {stories.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setCurrentIndex(idx);
                            }}
                            className={`transition-all duration-300 h-1 rounded-full ${
                              currentIndex === idx 
                                ? "w-10 bg-[#ffb300]" 
                                : "w-6 bg-[#1b4332]"
                            }`}
                            aria-label={`Go to story ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute -left-6 lg:-left-12 top-1/2 -translate-y-1/2 bg-white text-[#0a1d13] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300 z-10 hidden md:block"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-6 lg:-right-12 top-1/2 -translate-y-1/2 bg-white text-[#0a1d13] p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 hover:scale-110 transition-all duration-300 z-10 hidden md:block"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

        </div>
      </div>
    </section>
  );
};

export default GrowersStories;
