import React from "react";
import FadeIn from "@/components/common/FadeIn";

const LinkedinIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const teamMembers = [
  {
    id: 1,
    name: "Alexander Morrison",
    role: "CO-founder & CEO",
  },
  {
    id: 2,
    name: "Sarah Okonkwo",
    role: "CO-founder & CEO",
  },
  {
    id: 3,
    name: "James Whitfield",
    role: "CO-founder & CEO",
  },
  {
    id: 4,
    name: "Chris Renwick",
    role: "CO-founder & CEO",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-[#F5F5F5] text-black py-24 md:py-32 w-full page-padding">
      <div className="w-full flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center w-full">
          <FadeIn delay={0}>
            <p className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase mb-4">
              Our Team
            </p>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900">
              The People Behind The Work
            </h2>
          </FadeIn>
        </div>

        {/* Content / Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
          {teamMembers.map((member, index) => {
            const teamImages = [
              "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80"
            ];
            return (
              <FadeIn delay={200 + index * 100} key={member.id} className="w-full">
                <div className="w-full flex flex-col rounded-none overflow-hidden bg-white shadow-sm border border-black/5">
                  {/* Image Area */}
                  <div className="w-full aspect-[4/5] bg-[#e0e0e0] flex items-center justify-center relative overflow-hidden">
                    <img src={teamImages[index]} alt={member.name} className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                  </div>
                
                {/* Info Area */}
                <div className="flex items-center justify-between p-6 bg-white">
                  <div className="flex flex-col gap-1">
                    <h4 className="text-[17px] font-medium text-gray-900">{member.name}</h4>
                    <p className="text-[11px] text-gray-500 uppercase tracking-wide">{member.role}</p>
                  </div>
                  <div className="w-8 h-8 rounded bg-[#0A66C2] flex items-center justify-center shrink-0 ml-2">
                    <LinkedinIcon className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}
