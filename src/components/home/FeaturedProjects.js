"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Abhishek House",
    location: "Calicut, Kerala, India",
    type: "Residential",
    image: "/home/Image (Hotel).png",
  },
  {
    id: 2,
    title: "Parakkal House",
    location: "Calicut, Kerala, India",
    type: "Residential",
    image: "/home/Image (Hotel) (2).png",
  },
  {
    id: 3,
    title: "IBS Campus Project",
    location: "Trivandrum, Kerala, India",
    type: "Commercial",
    image: "/home/Image (Hotel) (1).png",
  },
  {
    id: 4,
    title: "Lulu Mall Calicut",
    location: "Calicut, Kerala, India",
    type: "Commercial",
    image: "/home/Image (Hotel).png",
  },
  {
    id: 5,
    title: "Nexus Commercial",
    location: "Bangalore, Karnataka, India",
    type: "Commercial",
    image: "/home/Image (Hotel) (2).png",
  },
];

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 4000); // Scrolls every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const getRelativePosition = (index) => {
    const total = projects.length;
    if (index === activeIndex) return 0; // Center
    if (index === (activeIndex - 1 + total) % total) return -1; // Left
    if (index === (activeIndex + 1) % total) return 1; // Right
    
    // Smooth entry/exit positions
    if (index === (activeIndex + 2) % total) return 2; // Entering from right
    if (index === (activeIndex - 2 + total) % total) return -2; // Exiting to left
    
    return 3; // Hidden far away
  };

  const getPositionClass = (relativePos) => {
    switch (relativePos) {
      case 0:
        return "left-[calc(10%+12px)] w-[calc(80%-24px)] md:left-[calc(20%+12px)] md:w-[calc(60%-24px)] opacity-100 z-20 cursor-default";
      case -1:
        return "left-0 w-[calc(10%-12px)] md:left-0 md:w-[calc(20%-12px)] opacity-100 z-10 cursor-pointer brightness-75 hover:brightness-100";
      case 1:
        return "left-[calc(90%+12px)] w-[calc(10%-12px)] md:left-[calc(80%+12px)] md:w-[calc(20%-12px)] opacity-100 z-10 cursor-pointer brightness-75 hover:brightness-100";
      case -2:
        return "left-[calc(-10%-12px)] w-[calc(10%-12px)] md:left-[calc(-20%-12px)] md:w-[calc(20%-12px)] opacity-0 z-0 pointer-events-none";
      case 2:
        return "left-[calc(100%+24px)] w-[calc(10%-12px)] md:left-[calc(100%+24px)] md:w-[calc(20%-12px)] opacity-0 z-0 pointer-events-none";
      default:
        return "left-[calc(100%+24px)] w-[calc(10%-12px)] md:left-[calc(100%+24px)] md:w-[calc(20%-12px)] opacity-0 z-0 pointer-events-none";
    }
  };

  return (
    <section className="py-24 bg-white text-black page-padding overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between md:items-end gap-6 mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight text-black uppercase" style={{ fontFamily: "'Bebas Neue', 'Oswald', sans-serif", lineHeight: "1" }}>
          PROJECTS
        </h2>
        
        {/* Navigation Arrows */}
        <div className="flex gap-4 pb-1">
          <button 
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors rounded-full"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 flex items-center justify-center hover:bg-gray-50 transition-colors rounded-full"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-black">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative w-full h-[300px] md:h-[450px]">
        {projects.map((project, index) => {
          const relativePos = getRelativePosition(index);
          const positionClass = getPositionClass(relativePos);
          const isCenter = relativePos === 0;

          return (
            <div 
              key={project.id} 
              onClick={() => {
                if (relativePos === -1) prev();
                if (relativePos === 1) next();
              }}
              className={`absolute top-0 h-full overflow-hidden shrink-0 group bg-gray-100 transition-all duration-700 ease-in-out ${positionClass}`}
            >
              {/* Background Image */}
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={project.title}
                  className={`absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ${isCenter ? 'group-hover:scale-105' : ''}`}
                />
              ) : (
                <div className={`absolute inset-0 w-full h-full bg-gray-200 z-0`} />
              )}
              
              {/* Bottom Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-700 ${isCenter ? 'opacity-90 group-hover:opacity-100' : 'opacity-0'}`}></div>

              {/* Bottom Text */}
              <div className={`absolute bottom-4 left-4 md:bottom-8 md:left-8 z-20 transition-opacity duration-700 delay-100 ${isCenter ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-lg md:text-3xl lg:text-[40px] font-semibold text-white mb-0.5 md:mb-1 uppercase tracking-tight whitespace-nowrap" style={{ fontFamily: "'Bebas Neue', 'Oswald', sans-serif" }}>
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs md:text-base font-light whitespace-nowrap">{project.type}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
