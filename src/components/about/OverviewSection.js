import React from "react";
import FadeIn from "@/components/common/FadeIn";

export default function OverviewSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32 w-full px-4 md:px-[43px]">
      <div className="w-full flex flex-col items-center text-center mb-16">
        
        <FadeIn delay={0}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#252525] rounded-full text-xs font-semibold tracking-widest text-gray-300 mb-8 uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            Company Overview
          </div>
        </FadeIn>
        
        <FadeIn delay={100} className="w-full max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium tracking-tight mb-8">
            Building Prosperity Through Smarter Real Estate
          </h2>
          <p className="text-gray-400 text-[15px] leading-relaxed max-w-3xl mx-auto">
            Nivasata is a visionary real estate brand committed to crafting premium residential, commercial, and mixed-use spaces. Rooted in trust, quality, and timeless design, we bring together expert planning and flawless execution to create developments that elevate modern living.
          </p>
        </FadeIn>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FadeIn delay={200} className="w-full">
          <div className="w-full aspect-[3/4] rounded-[24px] bg-gradient-to-br from-[#1a252f] to-[#2c3e50] shadow-xl flex items-center justify-center border border-white/5">
            <span className="text-gray-500 font-medium">Image Placeholder</span>
          </div>
        </FadeIn>
        <FadeIn delay={300} className="w-full">
          <div className="w-full aspect-[3/4] rounded-[24px] bg-gradient-to-br from-[#2c3e50] to-[#34495e] shadow-xl flex items-center justify-center border border-white/5">
            <span className="text-gray-400 font-medium">Image Placeholder</span>
          </div>
        </FadeIn>
        <FadeIn delay={400} className="w-full">
          <div className="w-full aspect-[3/4] rounded-[24px] bg-gradient-to-br from-[#1a252f] to-[#2c3e50] shadow-xl flex items-center justify-center border border-white/5">
            <span className="text-gray-500 font-medium">Image Placeholder</span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
