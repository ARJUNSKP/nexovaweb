import React from "react";
import FadeIn from "@/components/common/FadeIn";

export default function OverviewSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32 w-full page-padding">
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

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <FadeIn delay={200} className="w-full md:col-span-1">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-none overflow-hidden shadow-xl border border-white/5 bg-gray-900">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80" alt="Architecture" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </FadeIn>
        <FadeIn delay={300} className="w-full md:col-span-2">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-none overflow-hidden shadow-xl border border-white/5 bg-gray-900">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" alt="Office space" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </FadeIn>
        <FadeIn delay={400} className="w-full md:col-span-1">
          <div className="relative w-full h-[300px] md:h-[400px] rounded-none overflow-hidden shadow-xl border border-white/5 bg-gray-900">
            <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80" alt="Interior design" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
