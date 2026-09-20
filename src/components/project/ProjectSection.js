"use client";
import React, { useState } from "react";
import { projects } from "@/data/projects";
import FadeIn from "@/components/common/FadeIn";

const categories = ["All", "Residential", "Commercial", "Educational", "Healthcare"];

export default function ProjectSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === "All") return true;
    const tag = project.tag.toLowerCase();
    const cat = activeCategory.toLowerCase();
    
    if (cat === "residential") return tag.includes("residential") || tag.includes("villa") || tag.includes("housing");
    if (cat === "commercial") return tag.includes("commercial");
    if (cat === "educational") return tag.includes("student") || tag.includes("education") || tag.includes("institutional");
    if (cat === "healthcare") return tag.includes("health") || tag.includes("hospital");
    
    return tag.includes(cat);
  });

  return (
    <>
      <section id="projects" className="py-24 bg-white w-full px-4 md:px-[43px]">
        <div className="w-full max-w-7xl mx-auto relative">
          {/* Header Section */}
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-black tracking-tight" style={{ fontFamily: "'Bebas Neue', 'Oswald', sans-serif", lineHeight: "1" }}>
              Our Projects
            </h2>
            <div className="flex flex-wrap items-center gap-6 md:gap-8 pb-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`text-[15px] font-medium transition-all duration-300 relative pb-1 ${
                    activeCategory === category
                      ? "text-black"
                      : "text-gray-500 hover:text-black"
                  }`}
                >
                  {category}
                  {/* Active Underline */}
                  {activeCategory === category && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-black"></span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {filteredProjects.map((project, index) => (
              <FadeIn delay={100 + (index % 3) * 100} key={project.id} className="w-full">
                <div
                  onClick={() => setSelectedProject(project)}
                  className="group flex flex-col gap-4 cursor-pointer w-full h-full"
                >
                {/* Image Container */}
                <div className="relative h-[250px] md:h-[300px] overflow-hidden bg-gray-100">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>

                {/* Text underneath the image */}
                <div className="flex flex-col gap-1 px-1">
                  <h3 className="text-xl font-semibold text-black group-hover:text-black transition-colors duration-300 font-sans" style={{ fontFamily: "'Bebas Neue', 'Oswald', sans-serif", letterSpacing: "0.5px" }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-[14px]">
                    {project.tag.charAt(0).toUpperCase() + project.tag.slice(1).toLowerCase()}
                  </p>
                </div>
                </div>
              </FadeIn>
            ))}
            {filteredProjects.length === 0 && (
              <div className="col-span-full py-12 text-center text-gray-500">
                No projects found in this category.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-12 bg-black/60 backdrop-blur-sm animate-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div 
            className="relative w-full max-w-5xl bg-[#f0f6f8] rounded-none overflow-hidden shadow-2xl flex flex-col animate-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-black/40 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Section */}
            <div className="w-full h-[40vh] md:h-[55vh] relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title} 
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>

            {/* Content Section */}
            <div className="p-8 md:p-12 flex flex-col items-center text-center">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-2 tracking-tight uppercase" style={{ fontFamily: "'Bebas Neue', 'Oswald', sans-serif" }}>
                {selectedProject.title}
              </h2>
              <p className="text-black text-base md:text-lg font-medium mb-10">
                {selectedProject.location}
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-black text-lg md:text-xl uppercase" style={{ fontFamily: "'Bebas Neue', 'Oswald', sans-serif", letterSpacing: "1px" }}>
                <span>{selectedProject.area}</span>
                <span className="text-black/80 font-normal">|</span>
                <span>{selectedProject.client}</span>
                <span className="text-black/80 font-normal">|</span>
                <span>{selectedProject.timeline}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
