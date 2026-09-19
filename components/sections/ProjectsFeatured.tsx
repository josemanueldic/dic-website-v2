import { getFeaturedProjects } from "@/lib/data/projects";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

// projects.featured, 3-up grid variant (spec section 4).
export function ProjectsFeatured() {
  return (
    <ProjectsGrid eyebrow="Our Work" heading="Featured Projects" projects={getFeaturedProjects()} />
  );
}
