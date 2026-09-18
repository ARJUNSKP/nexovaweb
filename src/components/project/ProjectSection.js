import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";
import FadeIn from "@/components/common/FadeIn";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 bg-[#f8f8f8] w-full px-4 md:px-[43px]">
      <div className="w-full">
        <FadeIn delay={0} className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-200 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
            <span className="text-[11px] font-bold text-gray-600 tracking-wider uppercase">
              CASE STUDIES
            </span>
          </div>
          <h2 className="text-4xl md:text-[56px] leading-[1.1] font-medium text-black mb-6 tracking-tight">
            Built with precision. <br className="hidden md:block" />
            Delivered with confidence.
          </h2>
          <p className="text-gray-600 text-[16px] max-w-xl">
            Explore a selection of residential, commercial, and hospitality projects each delivered with precision, quality, and attention to detail.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <FadeIn delay={100 + (index % 4) * 100} key={project.id} className="w-full">
              <Link
                href={`/project/${project.id}`}
                className="group flex flex-col gap-4 cursor-pointer w-full h-full"
              >
              {/* Image Container */}
              <div className="relative h-[300px] md:h-[380px] overflow-hidden bg-gray-100 shadow-md">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
              </div>

              {/* Text underneath the image */}
              <div className="flex flex-col gap-1 px-1">
                <h3 className="text-xl font-medium text-black group-hover:text-[#0055a4] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-[15px]">
                  {project.location}
                </p>
              </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
