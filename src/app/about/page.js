import VisionSection from "@/components/about/VisionSection";
import OverviewSection from "@/components/about/OverviewSection";
import TeamSection from "@/components/about/TeamSection";
import ResultsSection from "@/components/home/ResultsSection";

export const metadata = {
  title: "About Us | Nexova",
  description: "Learn more about our vision for luxury real estate and our commitment to crafting premium spaces.",
};

export default function AboutPage() {
  return (
    <main className="bg-white w-full relative flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[100dvh] bg-black">
        <img
          src="/3Nab7Dc5wrFpuMGP2p9pNjBXXRY.avif"
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Bottom Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent z-10" />

        {/* Title Content */}
        <div className="absolute inset-0 z-20 flex items-center justify-center px-4 md:px-[43px]">
          <h1
            className="text-5xl md:text-7xl font-bold text-white text-center tracking-tight"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            About Us
          </h1>
        </div>
      </div>
      <OverviewSection />
      <VisionSection />
        <ResultsSection />
      <TeamSection />

    </main>
  );
}
