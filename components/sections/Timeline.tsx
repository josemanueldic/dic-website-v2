import { milestones } from "@/lib/data/milestones";

// timeline, vertical variant (spec section 4).
export function Timeline() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Our Journey</h2>
        <ol className="mt-8 space-y-8 border-l border-border pl-6">
          {milestones.map((milestone) => (
            <li key={milestone.year}>
              <p className="text-sm font-semibold text-accent">{milestone.year}</p>
              <p className="mt-1 font-semibold text-primary">{milestone.title}</p>
              <p className="mt-1 text-sm text-muted-foreground">{milestone.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
