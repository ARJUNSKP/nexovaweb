"use client";

import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[100dvh] overflow-hidden bg-black">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center"
      >
        <source src="/video_trimmed_watermark_cropped.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle gradient overlay only at the very bottom for text readability */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />

      {/* Content Overlay */}
      <div className="relative z-20 h-full page-padding flex flex-col justify-end pb-[50px]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">

          {/* Left Side: Headlines */}
          <div className="max-w-2xl text-left">
            <h1
              className="text-5xl md:text-7xl font-bold text-white mb-[24px] leading-tight"
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
            >
              We construct <br /> what endures.
            </h1>
            <p className="text-[16px] text-gray-300 max-w-xl w-full md:min-w-[540px]">
              From concept to completion, we partner with visionaries to deliver high-quality residential and commercial spaces on time, on budget, and beyond expectations.
            </p>
          </div>

          {/* Right Side: Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto mt-8 md:mt-0 pb-2">
            <button className="flex items-center justify-center gap-2 px-[14px] py-[16px] bg-white text-black font-medium rounded hover:bg-gray-100 transition-colors">
              Work With Us <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-[14px] py-[16px] bg-transparent border border-white/60 text-white font-medium rounded hover:bg-white/10 transition-colors">
              Our Services
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
