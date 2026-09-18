import ProjectSection from "@/components/project/ProjectSection";
import ProjectHeroBanner from "@/components/project/ProjectHeroBanner";

export const metadata = {
  title: "Projects | Nexova",
  description: "Explore a selection of residential, commercial, and hospitality projects.",
};

export default function ProjectPage() {
  return (
    <main className="bg-white w-full relative">
      <ProjectHeroBanner />
      <ProjectSection />
    </main>
  );
}
