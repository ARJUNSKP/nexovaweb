import React from "react";
import FadeIn from "@/components/common/FadeIn";

const teamMembers = [
  {
    id: 1,
    name: "Ronald R.",
    role: "Founder",
  },
  {
    id: 2,
    name: "Devon L.",
    role: "Chief Executive Officer",
  },
  {
    id: 3,
    name: "Jacob J.",
    role: "Chief Financial Officer",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32 w-full px-4 md:px-[43px]">
      <div className="w-full flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col items-end w-full">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#252525] rounded-full text-xs font-semibold tracking-widest text-gray-300 uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              The People Behind Nivasata
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium tracking-tight">
              Our Team
            </h2>
          </FadeIn>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          
          {/* Left Title */}
          <div className="lg:w-1/4 w-full">
            <FadeIn delay={200}>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">Executives</h3>
            </FadeIn>
          </div>

          {/* Cards */}
          <div className="lg:w-3/4 w-full grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member, index) => (
              <FadeIn delay={300 + index * 100} key={member.id} className="w-full">
                <div className="group relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1a252f] to-[#2c3e50] shadow-xl flex items-center justify-center cursor-pointer border border-white/5">
                  {/* Image Placeholder */}
                  <span className="text-gray-500 font-medium group-hover:opacity-0 transition-opacity duration-500">Image Placeholder</span>
                  
                  {/* Gradient Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Details (appear on hover) */}
                  <div className="absolute bottom-0 left-0 w-full p-6 lg:p-8 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col gap-1">
                    <h4 className="text-2xl font-bold text-white">{member.name}</h4>
                    <p className="text-gray-300 text-sm font-medium">{member.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
