import type { Metadata } from "next";
import { HeroPage } from "@/components/sections/HeroPage";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { projects } from "@/lib/data/projects";

export const metadata: Metadata = {
  title: "Projects | Doha International Co. W.L.L.",
  description: "Government, semi-government and private projects delivered across Qatar.",
};

// Projects page default order (spec section 5):
// hero.page -> projects.grid (all filters on) -> cta.banner
// Sector/service/status/value/year filters and keyword search (spec
// section 6.4) are not implemented in this static scaffold.
export default function ProjectsPage() {
  return (
    <main>
      <HeroPage
        title="Projects"
        intro="A selection of the projects delivered across government, semi-government and private sectors."
      />
      <ProjectsGrid heading="All Projects" projects={projects} />
      <CtaBanner />
    </main>
  );
}
