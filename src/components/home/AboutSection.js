"use client";

import { useEffect, useRef, useState } from "react";

const text = "We're a specialist main contractor delivering residential, commercial, and hospitality projects built on trust and precision. With a commitment to honest work and dependable execution, we create spaces that stand strong, serve their purpose, and endure for years to come.";

export default function AboutSection() {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const words = text.split(" ");

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Start revealing when the text is 90% down the screen
      const startReveal = windowHeight * 0.9;
      // Finish revealing when the text is 10% down the screen (near the top)
      // This spreads the animation out over a longer scroll distance so it reveals slower.
      const endReveal = windowHeight * 0.1;
      
      let currentProgress = (startReveal - rect.top) / (startReveal - endReveal);
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      
      setProgress(currentProgress);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run once on mount to set initial state
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="bg-white text-black page-padding py-[100px]">
      <div className="w-full">
        <h2 
          ref={containerRef}
          className="text-[26px] leading-tight font-medium tracking-tight mb-12"
        >
          {words.map((word, i) => {
            // A word is revealed if the overall progress is past its index threshold
            const threshold = i / words.length;
            const isRevealed = progress >= threshold;
            
            return (
              <span 
                key={i} 
                className={`transition-colors duration-700 ${
                  isRevealed ? "text-gray-900" : "text-gray-300"
                }`}
              >
                {word}{" "}
              </span>
            );
          })}
        </h2>
        
        <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded transition-colors">
          Learn our Story
        </button>
      </div>
    </section>
  );
}
