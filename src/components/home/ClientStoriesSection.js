"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const stories = [
  {
    id: 1,
    quote: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. the point of using lorem ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'content here, content here', making it look like readable english. many desktop publishing packages and web page editors now use lorem ipsum as their default model text, and a search for 'lorem ipsum will uncover many web sites still in their infancy. it is a long established fact that a reader.",
    author: "Alexandra George",
    role: "Sales Manager",
  },
  {
    id: 2,
    quote: "Working with the Nexova team was a seamless experience from start to finish. Their attention to detail and commitment to quality exceeded our expectations. We were particularly impressed with how they managed the timeline and kept us informed at every stage of the project. Highly recommended.",
    author: "David Chen",
    role: "Operations Director",
  },
  {
    id: 3,
    quote: "The final result speaks for itself. They transformed our vision into reality while navigating complex site constraints. Their problem-solving approach and professional execution made what could have been a stressful build into an enjoyable journey. We couldn't be happier with our new space.",
    author: "Sarah Jenkins",
    role: "Property Owner",
  }
];

export default function ClientStoriesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextStory = () => {
    setActiveIndex((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setActiveIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStory = stories[activeIndex];
  const progressPercentage = ((activeIndex + 1) / stories.length) * 100;

  return (
    <section className="bg-white text-black page-padding py-24 md:py-32">
      <div className="w-full flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full text-xs font-semibold tracking-widest text-gray-500 uppercase self-start">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
            Client Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight">
            In their words
          </h2>
        </div>

        {/* Quote Content */}
        <div className="flex flex-col gap-8 relative min-h-[300px]">
          {/* Quote Icon */}
          <div className="text-gray-800">
            <span className="text-6xl font-serif leading-none tracking-tighter">“</span>
          </div>
          
          {/* Text Area with simple fade transition */}
          <div className="relative flex-1">
            {stories.map((story, idx) => (
              <div 
                key={story.id}
                className={`transition-opacity duration-500 absolute top-0 left-0 w-full ${
                  activeIndex === idx ? "opacity-100 z-10 relative" : "opacity-0 z-0 hidden"
                }`}
              >
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
                  {story.quote}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Area (Progress & Controls) */}
        <div className="flex flex-col gap-6 mt-8">
          
          {/* Progress Bar */}
          <div className="w-full h-[2px] bg-gray-200 relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 h-full bg-[#82a4c9] transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>

          {/* Author & Controls */}
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900">{currentStory.author}</span>
              <span className="text-gray-500 text-sm">{currentStory.role}</span>
            </div>
            
            <div className="flex gap-4">
              <button 
                onClick={prevStory}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-900"
                aria-label="Previous story"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextStory}
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors text-gray-900"
                aria-label="Next story"
              >
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
