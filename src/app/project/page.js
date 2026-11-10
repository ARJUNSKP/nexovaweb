import ProjectSection from "@/components/project/ProjectSection";
import ProjectHeroBanner from "@/components/project/ProjectHeroBanner";

export const metadata = {
  title: "Products | Nexova Constructions",
  description:
    "Explore products and construction solutions offered by Nexova Constructions.",
  alternates: {
    canonical: "/project",
  },
};

export default function ProjectPage() {
  return (
    <main className="bg-white w-full relative">
      <ProjectHeroBanner />
      <ProjectSection />
    </main>
  );
}
