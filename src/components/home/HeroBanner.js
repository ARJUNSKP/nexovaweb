"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const TOTAL_FRAMES = 70; // 0 to 69

export default function HeroBanner() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [showContent, setShowContent] = useState(false);
  const imagesRef = useRef([]);

  // Preload images
  useEffect(() => {
    const images = [];
    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/frame_${i.toString().padStart(3, "0")}.jpg`;
      images.push(img);
    }
    imagesRef.current = images;

    // Draw first frame when loaded
    images[0].onload = () => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        ctx.drawImage(images[0], 0, 0, 1920, 1080);
      }
    };
  }, []);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      if (!containerRef.current || !canvasRef.current) return;

      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const maxScroll = height - windowHeight;
      let progress = -top / maxScroll;
      
      if (progress < 0) progress = 0;
      if (progress > 1) progress = 1;

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.floor(progress * TOTAL_FRAMES)
      );

      // Draw frame
      const img = imagesRef.current[frameIndex];
      if (img && img.complete) {
        const ctx = canvasRef.current.getContext("2d");
        ctx.drawImage(img, 0, 0, 1920, 1080);
      }

      // Show content only at the last frame
      if (frameIndex === TOTAL_FRAMES - 1) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // Initial draw
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[300vh] bg-black">
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden">
        {/* Canvas for frames */}
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Subtle gradient overlay only at the very bottom for text readability */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

        {/* Content Overlay */}
        <div 
          className={`absolute inset-0 z-20 h-full page-padding flex flex-col justify-end pb-8 md:pb-[50px] transition-opacity duration-500 ease-in-out ${
            showContent ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
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
    </div>
  );
}

