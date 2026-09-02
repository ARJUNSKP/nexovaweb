"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";


const projects = [
  {
    id: 1,
    title: "Abhishek House",
    location: "Calicut, Kerala, India",
    type: "HOUSE",
    image: "/home/Image (Hotel).png",
  },
  {
    id: 2,
    title: "Parakkal House",
    location: "Calicut, Kerala, India",
    type: "HOUSE",
    image: "/home/Image (Hotel) (2).png",
  },
  {
    id: 3,
    title: "Abhishek House",
    location: "Calicut, Kerala, India",
    type: "HOUSE",
    image: "/home/Image (Hotel) (1).png",
  },
  {
    id: 4,
    title: "Sharma Residence",
    location: "Kochi, Kerala, India",
    type: "HOUSE",
    image: "/home/Image (Hotel).png",
  },
  {
    id: 5,
    title: "Nexus Commercial",
    location: "Bangalore, Karnataka, India",
    type: "COMMERCIAL",
    image: "/home/Image (Hotel) (2).png",
  },
];

export default function FeaturedProjects() {
  const containerRef = useRef(null);
  const scrollContainerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [maxScrollWidth, setMaxScrollWidth] = useState(0);

  useEffect(() => {
    const calculateScrollWidth = () => {
      if (scrollContainerRef.current) {
        const scrollWidth = scrollContainerRef.current.scrollWidth;
        const clientWidth = scrollContainerRef.current.clientWidth;
        setMaxScrollWidth(scrollWidth - clientWidth);
      }
    };
    
    // Calculate on mount and resize
    setTimeout(calculateScrollWidth, 100);
    window.addEventListener('resize', calculateScrollWidth);
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Total scrollable distance is the height of the container minus the viewport height
      const totalScroll = rect.height - windowHeight;
      
      // How much we've scrolled past the top of the container
      const scrolled = -rect.top;
      
      // Calculate progress from 0 to 1
      let currentProgress = scrolled / totalScroll;
      currentProgress = Math.max(0, Math.min(1, currentProgress));
      
      setProgress(currentProgress);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial state
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', calculateScrollWidth);
    };
  }, []);

  return (
    // Tall container to create scrolling space
    <div ref={containerRef} className="h-[300vh] bg-white text-black relative">
      
      <section className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center page-padding py-24">
        
        {/* Top Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 shrink-0">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full text-xs font-semibold tracking-widest text-gray-500 mb-6 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
              Projects
            </div>
            <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900">
              Our Featured Projects
            </h2>
          </div>
          
          <p className="text-gray-500 text-base md:text-lg max-w-sm">
            Explore projects where thoughtful design meets reliable execution each one tailored to meet real-world demands.
          </p>
        </div>

        {/* Projects Horizontal Slider */}
        <div className="relative flex-1 flex flex-col justify-center">
          {/* We translate this div to the left based on scroll progress */}
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 flex-nowrap w-full"
            style={{ 
              transform: `translateX(-${progress * maxScrollWidth}px)`, 
              transition: 'transform 0.1s ease-out' 
            }}
          >
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className="relative w-[300px] md:w-[436px] h-[400px] md:h-[498px] rounded-xl overflow-hidden shrink-0 group cursor-pointer"
              >
                {/* Background Image */}
                {project.image ? (
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover z-0"
                  />
                ) : (
                  <div className={`absolute inset-0 w-full h-full ${project.color} z-0`} />
                )}
                
                {/* Top Tag */}
                <div className="absolute top-6 right-6 z-20">
                  <span className="px-3 py-1 bg-white/90 text-gray-900 text-xs font-bold rounded shadow-sm">
                    {project.type}
                  </span>
                </div>

                {/* Bottom Gradient Overlay */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />

                {/* Bottom Text */}
                <div className="absolute bottom-6 left-6 z-20">
                  <h3 className="text-2xl font-semibold text-white mb-1">{project.title}</h3>
                  <p className="text-gray-300 text-sm">{project.location}</p>
                </div>

                {/* Glassmorphic View All Button (Visible on hover) */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white text-sm hover:bg-black/60 transition-colors shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-300">
                    View<br/>All
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Progress Bar Line */}
          <div className="w-full h-[2px] bg-gray-200 mt-12 relative shrink-0">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#0055a4]" style={{ left: `${progress * 100}%`, transition: 'left 0.1s ease-out' }}></div>
            <div className="absolute left-0 top-0 h-full bg-[#0055a4]" style={{ width: `${progress * 100}%`, transition: 'width 0.1s ease-out' }}></div>
          </div>
        </div>
        
      </section>
    </div>
  );
}
