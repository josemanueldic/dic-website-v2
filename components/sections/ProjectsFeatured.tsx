import Link from "next/link";
import { getFeaturedProjects } from "@/lib/data/projects";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

// projects.featured, 3-up grid variant (spec section 4).
// Renders nothing if there are no featured projects (spec section 3, rule 4).
export function ProjectsFeatured() {
  const featured = getFeaturedProjects();
  if (featured.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Featured Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-lg border border-border transition hover:shadow-md"
            >
              <PhotoSlot slot={`project/${project.slug}/cover`} ratio="4/3" />
              <div className="p-5">
                <p className="text-xs uppercase tracking-wide text-accent">
                  {project.client}
                </p>
                <h3 className="mt-1 font-semibold text-primary group-hover:underline">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
