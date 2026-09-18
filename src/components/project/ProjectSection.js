import React from "react";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectSection() {
  return (
    <section id="projects" className="py-24 bg-[#f8f8f8] w-full px-4 md:px-[43px]">
      <div className="w-full">
        <div className="mb-12">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link
              href={`/project/${project.id}`}
              key={project.id}
              className={`relative group h-[400px] md:h-[540px] rounded-[32px] overflow-hidden flex flex-col justify-end p-8 ${project.color} transition-transform duration-300 hover:-translate-y-2 cursor-pointer shadow-lg hover:shadow-xl`}
            >
              <div className="absolute top-8 right-8 z-20">
                <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-[11px] font-bold tracking-wider px-3 py-1.5 rounded uppercase">
                  {project.tag}
                </span>
              </div>
              
              {/* Gradient Overlay for text readability over placeholder colors */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-0"></div>

              <div className="relative z-10 text-white transform transition-transform duration-300 group-hover:translate-x-2">
                <h3 className="text-2xl font-medium mb-1">{project.title}</h3>
                <p className="text-white/70 text-sm">{project.location}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
