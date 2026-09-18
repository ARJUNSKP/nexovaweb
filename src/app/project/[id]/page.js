import { getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import FadeIn from "@/components/common/FadeIn";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const project = getProjectById(id);
  
  if (!project) {
    return { title: "Project Not Found | Nexova" };
  }

  return {
    title: `${project.title} | Nexova Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <main className="bg-white w-full relative min-h-screen flex flex-col">
      {/* Hero Banner (Matches Main Project Page) */}
      <div className="relative w-full h-[100dvh] bg-black">
        <img
          src="/G0DZwFMbldOpF4lQTkO6cr18tQ.webp"
          alt="Project Cover"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Title Content */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center md:items-start md:justify-end px-4 md:px-[43px] pb-8 md:pb-[43px]">
          <div className="mb-4">
            <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold tracking-wider px-3 py-1.5 rounded uppercase">
              {project.tag}
            </span>
          </div>
          <h1 
            className="text-5xl md:text-7xl font-bold text-white text-center md:text-left tracking-tight mb-2"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            {project.title}
          </h1>
          <p className="text-white/80 text-lg flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-white/60"></span> {project.location}
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full px-4 md:px-4 md:px-[43px] py-16">
        {/* Back Button */}
        <div className="mb-12">
          <Link href="/project" className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Projects
          </Link>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-black tracking-tight">Project Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {project.description}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our team worked closely with the client to bring this vision to life, ensuring that every detail met the highest standards of quality and precision. This project stands as a testament to our commitment to excellence in the built environment, showcasing innovative design and sustainable execution.
            </p>
          </div>
          
          <div className="bg-[#f8f8f8] p-8 rounded-[24px] h-fit">
            <h3 className="text-xl font-bold mb-6 text-black tracking-tight">Project Details</h3>
            
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1 font-medium">Client</p>
                <p className="text-black font-medium">{project.client}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-1 font-medium">Timeline</p>
                <p className="text-black font-medium">{project.timeline}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 mb-2 font-medium">Services Provided</p>
                <ul className="space-y-2">
                  {project.services.map((service, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-black font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0055a4]"></span>
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Masonry Gallery Placeholder */}
        <div className="mt-32">
          <h2 className="text-3xl font-bold mb-12 text-black tracking-tight">Project Gallery</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[250px]">
            <FadeIn delay={0} className="md:col-span-8 row-span-2 rounded-[32px] bg-gradient-to-br from-gray-200 to-gray-300 shadow-md flex items-center justify-center">
              <span className="text-gray-400 font-medium">Image Placeholder</span>
            </FadeIn>
            <FadeIn delay={150} className="md:col-span-4 row-span-1 rounded-[32px] bg-gradient-to-br from-gray-300 to-gray-400 shadow-md flex items-center justify-center">
              <span className="text-gray-500 font-medium">Image</span>
            </FadeIn>
            <FadeIn delay={300} className="md:col-span-4 row-span-2 rounded-[32px] bg-gradient-to-br from-gray-100 to-gray-200 shadow-md flex items-center justify-center">
              <span className="text-gray-400 font-medium">Portrait Image</span>
            </FadeIn>
            <FadeIn delay={100} className="md:col-span-8 row-span-1 rounded-[32px] bg-gradient-to-br from-gray-400 to-gray-500 shadow-md flex items-center justify-center">
              <span className="text-gray-600 font-medium text-white">Landscape Image</span>
            </FadeIn>
            <FadeIn delay={200} className="md:col-span-12 row-span-2 rounded-[32px] bg-gradient-to-br from-gray-300 to-gray-200 shadow-md flex items-center justify-center">
              <span className="text-gray-500 font-medium">Hero Image</span>
            </FadeIn>
          </div>
        </div>
      </div>
    </main>
  );
}
