import ProjectSection from "@/components/project/ProjectSection";
import ProjectHeroBanner from "@/components/project/ProjectHeroBanner";

export const metadata = {
  title: "Projects | Nexova Constructions",
  description:
    "Explore residential, commercial, and hospitality construction projects delivered by Nexova Constructions.",
  alternates: {
    canonical: "/project",
  },
  robots: {
    index: true,
    follow: true,
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
