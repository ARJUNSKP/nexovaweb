"use client";
import React, { useState, useEffect } from "react";
import FadeIn from "@/components/common/FadeIn";

const bannerData = [
  {
    image: "/G0DZwFMbldOpF4lQTkO6cr18tQ.webp",
    labels: ["1800 Square Feet", "Skill & Care", "12 Months", "Residential"]
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    labels: ["2400 Square Feet", "Precision Build", "18 Months", "Commercial"]
  },
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    labels: ["12000 Square Feet", "Master Planning", "24 Months", "Hospitality"]
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    labels: ["4500 Square Feet", "Sustainable Design", "14 Months", "Mixed-Use"]
  }
];

export default function ProjectHeroBanner() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % bannerData.length);
    }, 4000); // Change image every 4 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100dvh] bg-black overflow-hidden">
      {/* Carousel Images */}
      {bannerData.map((data, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={data.image}
            alt={`Project Banner ${index + 1}`}
            className="w-full h-full object-cover object-center"
          />
        </div>
      ))}
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Title Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 md:px-[43px] text-center text-white mt-16">
        <FadeIn delay={0}>
          <h1 className="text-4xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold mb-6 tracking-tight max-w-4xl mx-auto">
            Built with precision. <br className="hidden md:block" />
            Delivered with confidence.
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Explore a selection of residential, commercial, and hospitality projects each delivered with precision, quality, and attention to detail.
          </p>
        </FadeIn>
      </div>
      {/* Bottom Labels */}
      <div className="absolute bottom-0 left-0 w-full z-20 px-4 md:px-[43px]">
        <div className="w-full">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-8 py-8 md:py-8 border-t border-white/20">
            {bannerData[currentImage].labels.map((label, i) => (
              <div key={i} className="text-white text-xs md:text-sm tracking-widest uppercase font-semibold transition-opacity duration-500">
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
