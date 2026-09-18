import VisionSection from "@/components/about/VisionSection";
import OverviewSection from "@/components/about/OverviewSection";
import TeamSection from "@/components/about/TeamSection";

export const metadata = {
  title: "About Us | Nexova",
  description: "Learn more about our vision for luxury real estate and our commitment to crafting premium spaces.",
};

export default function AboutPage() {
  return (
    <main className="bg-black w-full relative flex flex-col min-h-screen">
      {/* Hero Banner */}
      <div className="relative w-full h-[100dvh] bg-black">
        <img
          src="/Eyv1ZwKmJy5eSYZZEwI9We1sNis.jpg"
          alt="About Us Background"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Title Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center md:items-end md:justify-start px-4 md:px-[43px] pb-8 md:pb-[43px]">
          <h1
            className="text-5xl md:text-7xl font-bold text-white text-center md:text-left tracking-tight"
            style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          >
            About Us
          </h1>
        </div>
      </div>
      <OverviewSection />
      <VisionSection />
      <TeamSection />

    </main>
  );
}
