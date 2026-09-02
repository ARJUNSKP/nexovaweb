import { Play } from "lucide-react";
import Image from "next/image";

export default function TestimonialSection() {
  return (
    <section className="bg-white page-padding pb-24 md:pb-32">
      {/* Large Image/Video Card */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] rounded-2xl overflow-hidden bg-stone-800 text-white shadow-2xl flex flex-col justify-end">
        
        {/* Background image */}
        <Image 
          src="/home/Image (Background image).png"
          alt="Testimonial Background"
          fill
          className="object-cover z-0"
        />
        
        {/* Gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

        {/* Content Overlay */}
        <div className="relative z-20 w-full p-8 md:p-16 flex flex-col md:flex-row justify-between items-end gap-12">
          
          {/* Left Side: Testimonial */}
          <div className="max-w-2xl flex flex-col gap-6">
            
            {/* Overlapping Avatars/Icons */}
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-600 flex items-center justify-center overflow-hidden">
                <span className="text-xs">HJ</span>
              </div>
              <div className="w-12 h-12 rounded-full border-2 border-white bg-white flex items-center justify-center overflow-hidden">
                <span className="text-xs text-black font-bold">LOGO</span>
              </div>
            </div>

            {/* Testimonial Text */}
            <h3 className="text-2xl md:text-4xl leading-snug font-medium text-white">
              Our project was completed ahead of schedule without compromising on quality. It's rare to find a team this reliable in construction.
            </h3>

            {/* Author */}
            <div>
              <p className="font-semibold text-lg text-white">Hiran Jackob</p>
              <p className="text-gray-300 text-sm">Company CEO</p>
            </div>
          </div>

          {/* Right Side: Actions */}
          <div className="flex flex-wrap items-center gap-6 shrink-0 pb-2">
            
            <button className="flex items-center gap-3 text-white hover:text-gray-200 transition-colors group">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-4 h-4 fill-black" />
              </div>
              <span className="font-medium text-sm">Watch video</span>
            </button>

            <button className="px-6 py-3 bg-white text-black font-semibold text-sm rounded hover:bg-gray-100 transition-colors">
              Get Started
            </button>
            
          </div>

        </div>
      </div>
    </section>
  );
}
