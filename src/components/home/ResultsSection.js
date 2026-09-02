"use client";

import { useEffect, useRef, useState } from "react";

const results = [
  {
    id: 1,
    statNumber: 10,
    statSuffix: "+",
    title: "Years of experience",
    description: "Delivering residential, commercial, and hospitality projects with trust, precision, and dependable execution since day one.",
  },
  {
    id: 2,
    statNumber: 132,
    statSuffix: "",
    title: "Residential Projects",
    description: "Homes, student living spaces, and mixed-use developments built to last on time, on budget, and beyond expectations.",
  },
  {
    id: 3,
    statNumber: 3,
    statSuffix: "+",
    title: "3 GW+ Operating & Under Construction",
    description: "The \"3 GW+ Operating\" label is clearly leftover energy template copy. Depending on what's true for Construa, this could be:",
  },
  {
    id: 4,
    statNumber: 300,
    statSuffix: "+",
    title: "Homes built worldwide",
    description: "Sq. ft. delivered (or units handed over) spaces where families live, businesses thrive, and communities grow.",
  },
];

function AnimatedNumber({ value, isVisible }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTimestamp = null;
    const duration = 2000; // 2 seconds animation
    
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeProgress * value));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    
    window.requestAnimationFrame(step);
  }, [isVisible, value]);

  return <span>{count}</span>;
}

export default function ResultsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#18181a] text-white page-padding py-24 md:py-32">
      <div className="w-full flex flex-col gap-16 items-center">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#252525] rounded-full text-xs font-semibold tracking-widest text-gray-300 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            Results
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium tracking-tight">
            Building with experience<br />you can measure
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {results.map((result) => (
            <div 
              key={result.id} 
              className="bg-[#222224] rounded-3xl p-8 md:p-12 flex flex-col justify-between min-h-[320px] transition-transform hover:-translate-y-1 duration-300"
            >
              {/* Stat (Top Right) */}
              <div className="flex justify-end">
                <span className="text-6xl md:text-8xl font-light tracking-tight">
                  <AnimatedNumber value={result.statNumber} isVisible={isVisible} />
                  {result.statSuffix}
                </span>
              </div>
              
              {/* Content (Bottom Left) */}
              <div className="flex flex-col gap-3 mt-12">
                <h3 className="text-xl font-medium text-white">
                  {result.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  {result.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

