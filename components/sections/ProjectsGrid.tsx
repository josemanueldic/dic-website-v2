import Link from "next/link";
import type { Project } from "@/lib/data/projects";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ProjectsGridProps = {
  eyebrow?: string;
  heading: string;
  projects: Project[];
};

// projects.grid, filterable grid variant (spec section 4).
// The sector/service/status/value/year filters and keyword search from
// spec section 6.4 are not implemented in this static scaffold — this
// renders the given project list as a plain grid.
// Renders nothing if there are no projects to show (spec section 3, rule 4).
export function ProjectsGrid({ eyebrow, heading, projects }: ProjectsGridProps) {
  if (projects.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow={eyebrow} title={heading} />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-2xl border border-border transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <PhotoSlot slot={`project/${project.slug}/cover`} ratio="4/3" className="rounded-none" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  {project.client}
                </p>
                <h3 className="mt-1 font-semibold text-primary group-hover:text-accent">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{project.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
