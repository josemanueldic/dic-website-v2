import type { Project } from "@/lib/data/projects";

type ProjectHeaderProps = {
  project: Project;
};

// project.header, fixed variant (spec section 4).
export function ProjectHeader({ project }: ProjectHeaderProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <p className="text-sm uppercase tracking-wide text-primary-foreground/70">
          {project.client} · {project.location}
        </p>
        <h1 className="mt-2 text-3xl font-bold lg:text-4xl">{project.name}</h1>
        <p className="mt-2 text-sm text-primary-foreground/70">{project.status}</p>
        {project.facts && project.facts.length > 0 ? (
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
            {project.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="text-xs uppercase tracking-wide text-primary-foreground/60">
                  {fact.label}
                </dt>
                <dd className="font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </section>
  );
}
