"use client";

import { useState } from "react";
import { Binoculars, PencilRuler, Home, Handshake } from "lucide-react";

const processes = [
  {
    id: 1,
    phase: "PHASE 01",
    tabTitle: "Step 1",
    icon: Binoculars,
    title: "Discovery & Brief",
    description: "We begin every project with a thorough discovery session — understanding your goals, budget envelope, site constraints, and timeline. This phase defines the entire project foundation and prevents costly changes down the line.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    phase: "PHASE 02",
    tabTitle: "Step 2",
    icon: PencilRuler,
    title: "Design & Planning",
    description: "Our architectural and engineering teams develop comprehensive plans. We navigate local regulations and secure necessary permits while refining the design to meet both aesthetic desires and practical requirements.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    phase: "PHASE 03",
    tabTitle: "Step 3",
    icon: Home,
    title: "Construction Phase",
    description: "With plans approved, our expert builders take over. We maintain strict quality control and provide regular updates, ensuring the build progresses according to schedule while maintaining our high standards of craftsmanship.",
    image: "/home/Image (Discovery Call).png",
  },
  {
    id: 4,
    phase: "PHASE 04",
    tabTitle: "Step 4",
    icon: Handshake,
    title: "Final Handover",
    description: "We conduct exhaustive final inspections before welcoming you to your new space. We ensure every detail is perfect and provide you with all necessary documentation and operational guidance.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ProcessSection() {
  const [activeTab, setActiveTab] = useState(1);
  const activeProcess = processes.find((p) => p.id === activeTab);

  return (
    <section className="bg-[#18181a] text-white page-padding pt-12 md:pt-32 pb-0">
      <div className="w-full flex flex-col gap-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#252525] rounded-full text-xs font-semibold tracking-widest text-gray-300 mb-6 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium tracking-tight">
              How we deliver every project
            </h2>
          </div>
          <div className="max-w-md text-gray-400 text-lg leading-relaxed">
            A proven four-phase methodology built for complex builds — from first brief to final handover, nothing is left to chance.
          </div>
        </div>

        {/* Interactive Area */}
        <div className="bg-[#222224] rounded-3xl p-4 md:p-8 flex flex-col gap-8">
          
          {/* Tabs */}
          <div className="flex flex-row overflow-x-auto hide-scrollbar gap-2 border-b border-white/5 pb-4 md:pb-0 md:border-none">
            {processes.map((process) => {
              const Icon = process.icon;
              const isActive = activeTab === process.id;
              return (
                <button
                  key={process.id}
                  onClick={() => setActiveTab(process.id)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 whitespace-nowrap flex-1 justify-center md:justify-start ${
                    isActive 
                      ? "bg-[#18181a] text-white shadow-lg" 
                      : "text-gray-500 hover:text-gray-300 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{process.tabTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Content Area */}
          <div className="bg-[#18181a] rounded-2xl p-6 md:p-12 flex flex-col lg:flex-row gap-12 items-center min-h-[400px]">
            
            {/* Text Content */}
            <div className="flex-1 flex flex-col gap-6 w-full animate-in fade-in slide-in-from-bottom-4 duration-500" key={`text-${activeTab}`}>
              <div className="text-xs font-semibold tracking-widest text-gray-500 uppercase pb-6 border-b border-white/10">
                {activeProcess.phase}
              </div>
              <div className="flex flex-col gap-4 mt-2">
                <h3 className="text-3xl md:text-4xl font-medium">
                  {activeProcess.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {activeProcess.description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full h-[300px] lg:h-[450px] relative rounded-2xl overflow-hidden border-2 border-[#1a73e8] shadow-[0_0_30px_rgba(26,115,232,0.15)] animate-in fade-in zoom-in-95 duration-500" key={`img-${activeTab}`}>
              <img 
                src={activeProcess.image} 
                alt={activeProcess.title}
                className="w-full h-full object-cover"
              />
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
