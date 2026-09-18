import { ArrowRight } from "lucide-react";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-[100dvh] bg-black">
      {/* Static Background Image */}
      <img
        src="/Eyv1ZwKmJy5eSYZZEwI9We1sNis.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay for all screens to improve text readability */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 h-full page-padding flex flex-col justify-start md:justify-end pt-[220px] md:pt-32 pb-8 md:pb-10 lg:pb-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8">
          {/* Left Side: Headlines */}
          <div className="max-w-2xl text-center md:text-left">
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
            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-none hover:bg-gray-100 transition-colors">
              Work With Us <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-6 py-3 bg-transparent border border-white/60 text-white font-medium rounded-none hover:bg-white/10 transition-colors">
              Our Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
