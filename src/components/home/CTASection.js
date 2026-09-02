import Image from "next/image";

export default function CTASection() {
  return (
    <section className="relative w-full min-h-[500px] flex items-center justify-center py-24 text-center px-6">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/home/Frame 1618875623.png" 
          alt="Construction Site" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-white leading-tight">
          Bring the next<br />landmark closer.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed">
          Whether it's a residential project, commercial space, or renovation, we're here to bring your vision to life—with quality, clarity, and on-time delivery.
        </p>

        <button className="px-8 py-3.5 bg-white text-black font-medium text-lg rounded shadow-lg hover:bg-gray-100 transition-colors mt-4">
          Get Started
        </button>
      </div>
    </section>
  );
}
