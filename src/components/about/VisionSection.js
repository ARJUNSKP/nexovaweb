import React from "react";
import FadeIn from "@/components/common/FadeIn";

export default function VisionSection() {
  return (
    <section className="bg-white text-black py-24 md:py-32 w-full px-[43px]">
      <div className="w-full flex flex-col gap-8">
        
        {/* Top Row: Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Vision Card */}
          <FadeIn delay={0} className="w-full">
            <div className="bg-[#f8f8f8] rounded-none overflow-hidden border border-black/5 h-full flex flex-col">
              {/* Image Area */}
              <div className="w-full h-[240px] relative overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Vision" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Content Area */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="text-3xl font-medium mb-6">Our Vision</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  At Nivasata, our vision is to become a symbol of excellence in the real estate industry by shaping timeless spaces that enrich lives and communities. We aspire to lead with innovation, integrity, and a commitment to quality—delivering developments that reflect the perfect harmony of aesthetics, functionality, and sustainability.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Our Mission Card */}
          <FadeIn delay={100} className="w-full">
            <div className="bg-[#f8f8f8] rounded-none overflow-hidden border border-black/5 h-full flex flex-col">
              {/* Image Area */}
              <div className="w-full h-[240px] relative overflow-hidden bg-gray-200">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Our Mission" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              {/* Content Area */}
              <div className="p-8 md:p-10 flex flex-col flex-1">
                <h3 className="text-3xl font-medium mb-6">Our Mission</h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  Our mission is to consistently deliver premium residential and commercial spaces that exceed expectations. We strive to foster long-term relationships with our clients through transparency, expert planning, and flawless execution, turning aspirations into enduring realities and redefining the meaning of luxury living.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>

        {/* Bottom Row: Our Value */}
        <FadeIn delay={200} className="w-full">
          <div className="bg-[#f8f8f8] rounded-none overflow-hidden border border-black/5 flex flex-col md:flex-row">
            {/* Image Area */}
            <div className="w-full md:w-[40%] h-[240px] md:h-auto relative shrink-0 overflow-hidden bg-gray-200">
              <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80" alt="Our Value" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            {/* Content Area */}
            <div className="w-full md:w-[60%] p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-medium mb-6">Our Value</h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Integrity is our cornerstone. We believe in placing the needs and satisfaction of our clients at the forefront of every decision and service delivery. Innovation, adaptability, and accountability have enabled us to provide exceptional solutions and build lasting partnerships. We are committed to sustainable development and creating environments that endure for generations.
              </p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
