import type { Project } from "@/lib/data/projects";

type ProjectHeaderProps = {
  project: Project;
};

// project.header, fixed variant (spec section 4).
export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-strong via-primary to-primary"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {project.client} · {project.location}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight lg:text-5xl">{project.name}</h1>
        <span className="mt-4 inline-flex items-center rounded-full border border-primary-foreground/20 px-3 py-1 text-xs font-semibold">
          {project.status}
        </span>
        {project.facts && project.facts.length > 0 ? (
          <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-primary-foreground/10 pt-6">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-wide text-primary-foreground/60">
                  {fact.label}
                </dt>
                <dd className="mt-1 font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
