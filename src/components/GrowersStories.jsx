import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GrowersStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const minSwipeDistance = 50;

  const stories = [
    {
      id: 1,
      quote: "Lorem ipsum dolor sit amet consectetur. Elit integer non ac at convallis et. Sollicitudin ornare at sit sed ac. Sit habitasse nec in vestibulum id. Elit dictum non nunc iaculis faucibus diam dapibus gravida. Massa vel.",
      name: "Lorem Singh",
      details: "Mansa, Punjab | Paddy 10 Acres",
      image: "/images/880f1e8ab1be57fb9bff37e37f5428e34eccfe63.jpg"
    },
    {
      id: 2,
      quote: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat.",
      name: "Gurpreet Kaur",
      details: "Ludhiana, Punjab | Wheat 15 Acres",
      image: "/images/c9fe7ae00f5ded6dd3bd0e62aca116db3f81f253.jpg"
    },
    {
      id: 3,
      quote: "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Proin eget tortor risus. Vestibulum ac diam sit amet quam vehicula.",
      name: "Amit Patel",
      details: "Surat, Gujarat | Cotton 20 Acres",
      image: "/images/4e24c10b424f60dc63a56cf3c11822c519440fcf.jpg"
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
    <section className="py-24 bg-gray-50 flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Growers <span className="text-agrarian-green font-serif italic font-medium">Stories</span>
          </h2>
        </div>

        <div className="relative w-full max-w-6xl mx-auto group">
          
          {/* Main Carousel Wrapper */}
          <div 
            className="overflow-hidden rounded-3xl shadow-xl w-full"
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
              className="flex transition-transform duration-700 ease-out cursor-grab active:cursor-grabbing" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {stories.map((story) => (
                <div key={story.id} className="w-full flex-shrink-0 flex flex-col lg:flex-row bg-white">
                  
                  {/* Image side */}
                  <div className="lg:w-1/2 h-72 lg:h-[450px] relative">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover select-none pointer-events-none"
                    />
                  </div>
                  
                  {/* Text side */}
                  <div className="lg:w-1/2 bg-[#1b4332] text-white p-10 lg:p-14 flex flex-col justify-center select-none">
                    <p className="text-xl lg:text-2xl font-light leading-relaxed mb-8 text-gray-100 italic">
                      "{story.quote}"
                    </p>
                    <div className="mt-auto pt-6 border-t border-white/20">
                      <h4 className="text-2xl font-semibold mb-1">{story.name}</h4>
                      <p className="text-gray-300 font-light">{story.details}</p>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute -left-4 lg:-left-6 top-1/2 -translate-y-1/2 bg-white text-[#1b4332] p-3 rounded-full shadow-lg opacity-0 md:opacity-100 group-hover:opacity-100 hover:scale-110 transition-all duration-300 z-10"
            aria-label="Previous story"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute -right-4 lg:-right-6 top-1/2 -translate-y-1/2 bg-white text-[#1b4332] p-3 rounded-full shadow-lg opacity-0 md:opacity-100 group-hover:opacity-100 hover:scale-110 transition-all duration-300 z-10"
            aria-label="Next story"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Indicators */}
          <div className="flex justify-center items-center gap-3 mt-10" role="tablist">
            {stories.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                role="tab"
                aria-selected={currentIndex === idx}
                aria-label={`Go to story ${idx + 1}`}
                className={`transition-all duration-300 rounded-full border-2 border-gray-400 ${
                  currentIndex === idx 
                    ? "w-10 h-3 border-[#ffc107] bg-[#ffc107]" 
                    : "w-3 h-3 border-gray-400 bg-transparent"
                }`}
              ></button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default GrowersStories;
