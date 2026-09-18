import ProjectSection from "@/components/project/ProjectSection";

export const metadata = {
  title: "Projects | Nexova",
  description: "Explore a selection of residential, commercial, and hospitality projects.",
};

export default function ProjectPage() {
  return (
    <main className="bg-white w-full relative">
      {/* Hero Banner */}
      <div className="relative w-full h-[100dvh] bg-black">
        <img
          src="/G0DZwFMbldOpF4lQTkO6cr18tQ.webp"
          alt="Our Projects Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Title Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center md:items-end md:justify-start px-4 md:px-[43px] pb-8 md:pb-[43px]">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white text-center md:text-left tracking-tight"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            Projects
          </h1>
        </div>
      </div>

      <ProjectSection />
    </main>
  );
}
