import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ProjectSection from "@/components/project/ProjectSection";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ProcessSection from "@/components/home/ProcessSection";
import ResultsSection from "@/components/home/ResultsSection";
import ClientStoriesSection from "@/components/home/ClientStoriesSection";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/home/CTASection";

export const metadata = {
  title: "Nexova Constructions | Residential & Commercial Construction",
  description:
    "Nexova Constructions delivers residential, commercial construction projects.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.nexovaconstructions.com/#website",
      "url": "https://www.nexovaconstructions.com",
      "name": "Nexova Constructions",
      "alternateName": ["Nexova", "Nexova Constructions Kerala"],
      "description":
        "Specialist main contractor delivering residential, commercial, and hospitality projects.",
      "publisher": {
        "@id": "https://www.nexovaconstructions.com/#organization",
      },
    },
    {
      "@type": "Organization",
      "@id": "https://www.nexovaconstructions.com/#organization",
      "name": "Nexova Constructions",
      "url": "https://www.nexovaconstructions.com",
      "logo": "https://www.nexovaconstructions.com/icon.png",
      "description":
        "Nexova Constructions delivers residential, commercial, and hospitality construction projects.",
    },
  ],
};

export default function Home() {
  return (
    <main className="bg-white w-full relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroBanner />
      <AboutSection />
      {/* <FeaturedProjects /> */}
      <TestimonialSection />
      <ServicesSection />
      {/* <ProcessSection /> */}
      <ResultsSection />
      {/* <ClientStoriesSection /> */}
      {/* <ContactSection /> */}
      <CTASection />
    </main>
  );
}
