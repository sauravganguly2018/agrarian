import React, { useState, useEffect, useRef } from 'react';

const Counter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = target;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutExpo
      const easeOutExpo = (x) => (x === 1 ? 1 : 1 - Math.pow(2, -10 * x));
      
      const currentCount = Math.floor(easeOutExpo(progress) * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={elementRef} className="inline-flex items-center text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-bebas font-black text-[#ffb300] tracking-normal leading-none">
      {count.toLocaleString()}<span className="text-[0.85em] ml-0.5">{suffix}</span>
    </span>
  );
};

const Stats = () => {
  return (
    <section className="bg-[#0a1f14] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center md:justify-around items-center gap-y-16 gap-x-12">

          {/* Stat 1 */}
          <div className="flex items-center gap-5">
            <Counter target={3000} suffix="+" />
            <div className="text-lg md:text-[1.25rem] font-medium leading-[1.2] text-white uppercase">
              Distribution<br />Partners
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-5">
            <Counter target={50000} suffix="+" />
            <div className="text-lg md:text-[1.25rem] font-medium leading-[1.2] text-white uppercase">
              Retail<br />Touchpoints
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-5">
            <Counter target={50} suffix="M+" />
            <div className="text-lg md:text-[1.25rem] font-medium leading-[1.2] text-white uppercase">
              Farmers<br />Impacted
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;
