export const projects = [
  {
    id: 1,
    slug: "grand-horizon-hotel",
    tag: "HOSPITALITY",
    title: "Grand Horizon Hotel & Suites",
    location: "Goa, India",
    color: "bg-[#2c3e50]",
    description: "A luxury beachfront hospitality project designed to harmonize with the natural landscape while offering world-class amenities.",
    client: "Horizon Group",
    timeline: "2021 - 2023",
    services: ["Architecture", "Interior Design", "Project Management"],
  },
  {
    id: 2,
    slug: "urban-nest-student-living",
    tag: "STUDENT HOUSING",
    title: "Urban Nest Student Living",
    location: "Pune, India",
    color: "bg-[#34495e]",
    description: "Modern, sustainable, and community-focused student housing featuring smart living spaces and collaborative study areas.",
    client: "EduSpaces Realty",
    timeline: "2022 - 2024",
    services: ["Architecture", "Structural Engineering"],
  },
  {
    id: 3,
    slug: "vertex-tech-park",
    tag: "COMMERCIAL / TECH",
    title: "Vertex Tech Park",
    location: "Bangalore, India",
    color: "bg-[#7f8c8d]",
    description: "A state-of-the-art commercial IT park built with green energy solutions and highly flexible workspace configurations.",
    client: "Vertex Innovates",
    timeline: "2020 - 2022",
    services: ["Architecture", "MEP Design", "Sustainability Consulting"],
  },
  {
    id: 4,
    slug: "city-administrative-complex",
    tag: "GOVERNMENT / INSTITUTIONAL",
    title: "City Administrative Complex",
    location: "Bhopal, India",
    color: "bg-[#95a5a6]",
    description: "An institutional hub centralizing administrative functions with a focus on public accessibility and modern civic architecture.",
    client: "State Government",
    timeline: "2019 - 2023",
    services: ["Master Planning", "Architecture", "Project Management"],
  },
];

export function getProjectById(id) {
  return projects.find((project) => project.id.toString() === id.toString());
}
