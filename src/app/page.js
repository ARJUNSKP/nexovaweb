import HeroBanner from "@/components/home/HeroBanner";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialSection from "@/components/home/TestimonialSection";
import ProcessSection from "@/components/home/ProcessSection";
import ResultsSection from "@/components/home/ResultsSection";
import ClientStoriesSection from "@/components/home/ClientStoriesSection";
import ContactSection from "@/components/home/ContactSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <main className="bg-white w-full relative">
      <HeroBanner />
      <AboutSection />
      <FeaturedProjects />
      <TestimonialSection />
      <ServicesSection />
      <ProcessSection />
      <ResultsSection />
      <ClientStoriesSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
