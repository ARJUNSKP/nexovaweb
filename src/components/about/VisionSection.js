import React from "react";
import FadeIn from "@/components/common/FadeIn";

export default function VisionSection() {
  return (
    <section className="bg-[#111111] text-white py-24 md:py-32 w-full px-4 md:px-[43px]">
      <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        
        {/* Left Text */}
        <div className="w-full lg:w-[30%] flex flex-col gap-8 pt-8">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#252525] rounded-full text-xs font-semibold tracking-widest text-gray-300 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              Our Strategic Outlook
            </div>
          </FadeIn>
          
          <FadeIn delay={100}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium tracking-tight">
              Our Vision
            </h2>
          </FadeIn>

          <FadeIn delay={200} className="flex flex-col gap-6 text-gray-400 text-[15px] leading-relaxed">
            <p>
              At Nivasata, our vision is to become a symbol of excellence in the real estate industry by shaping timeless spaces that enrich lives and communities. We aspire to lead with innovation, integrity, and a commitment to quality—delivering developments that reflect the perfect harmony of aesthetics, functionality, and sustainability.
            </p>
            <p>
              We believe that true luxury is not just defined by materials or finishes, but by meaning, intention, and lasting impact. Every project we undertake is a reflection of our commitment to creating environments that inspire, endure, and harmonize with both people and place.
            </p>
          </FadeIn>
        </div>

        {/* Center Image Placeholder */}
        <div className="w-full lg:w-[40%]">
          <FadeIn delay={300}>
            <div className="w-full aspect-[4/5] rounded-[24px] bg-gradient-to-br from-[#1a252f] to-[#2c3e50] shadow-2xl flex items-center justify-center">
              <span className="text-gray-500 font-medium tracking-wide">Image Placeholder</span>
            </div>
          </FadeIn>
        </div>

        {/* Right Text */}
        <div className="w-full lg:w-[30%] flex flex-col gap-6 text-gray-400 text-[15px] leading-relaxed lg:pt-48">
          <FadeIn delay={400} className="flex flex-col gap-6">
            <p>
              From the grandeur of a facade to the subtlety of natural light in an interior space, our work is a balance of aesthetics, utility, and sustainability.
            </p>
            <p>
              We envision a future where every Nivasata project sets a new benchmark in design and construction, turning aspirations into enduring realities and redefining the meaning of luxury living.
            </p>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
