import { milestones } from "@/lib/data/milestones";
import { SectionHeading } from "@/components/ui/SectionHeading";

// timeline, vertical variant (spec section 4).
export function Timeline() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Since 2007" title="Our Journey" />
        <ol className="mt-10 space-y-10 border-l-2 border-border pl-8">
          {milestones.map((milestone) => (
            <li key={milestone.year} className="relative">
              <span className="absolute -left-[2.15rem] flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background" />
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
