"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Abhishek House",
    location: "Calicut, Kerala, India",
    type: "HOUSE",
    image: "/home/Image (Hotel).png",
    width: "w-[300px] md:w-[900px]",
  },
  {
    id: 2,
    title: "Parakkal House",
    location: "Calicut, Kerala, India",
    type: "HOUSE",
    image: "/home/Image (Hotel) (2).png",
    width: "w-[300px] md:w-[550px]",
  },
  {
    id: 3,
    title: "Abhishek House",
    location: "Calicut, Kerala, India",
    type: "HOUSE",
    image: "/home/Image (Hotel) (1).png",
    width: "w-[300px] md:w-[550px]",
  },
  {
    id: 4,
    title: "Sharma Residence",
    location: "Kochi, Kerala, India",
    type: "HOUSE",
    image: "/home/Image (Hotel).png",
    width: "w-[300px] md:w-[550px]",
  },
  {
    id: 5,
    title: "Nexus Commercial",
    location: "Bangalore, Karnataka, India",
    type: "COMMERCIAL",
    image: "/home/Image (Hotel) (2).png",
    width: "w-[300px] md:w-[550px]",
  },
];

export default function FeaturedProjects() {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
    }
  };

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        // If we've reached the end, loop back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainerRef.current.scrollBy({ left: 400, behavior: "smooth" });
        }
      }
    }, 3000); // Scrolls every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white text-black page-padding overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full text-xs font-semibold tracking-widest text-gray-500 mb-6 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
            Projects
          </div>
          <h2 className="text-4xl md:text-6xl font-medium tracking-tight text-gray-900">
            Our Featured Projects
          </h2>
        </div>
        
        <div className="flex flex-col items-start md:items-end gap-6 max-w-sm">
          {/* <p className="text-gray-500 text-base md:text-lg md:text-right">
            Explore projects where thoughtful design meets reliable execution each one tailored to meet real-world demands.
          </p> */}
          
          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button 
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button 
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div 
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory w-full pb-8 [&::-webkit-scrollbar]:hidden"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project) => (
            <div 
              key={project.id} 
              className={`relative ${project.width} h-[400px] md:h-[498px] rounded-xl overflow-hidden shrink-0 group cursor-pointer snap-start`}
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
      </div>
    </section>
  );
}
