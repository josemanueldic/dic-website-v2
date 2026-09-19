import type { Recognition as RecognitionItem } from "@/lib/data/recognition";
import { SectionHeading } from "@/components/ui/SectionHeading";

type RecognitionProps = {
  items: RecognitionItem[];
};

// recognition, card variant (spec section 4).
// Renders nothing if there is nothing to show (spec section 3, rule 4).
export function Recognition({ items }: RecognitionProps) {
  if (items.length === 0) return null;

  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Appreciation" title="Recognition" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.slug}
              className="flex items-center gap-4 rounded-2xl border border-border bg-background p-6"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <svg viewBox="0 0 20 20" className="h-5 w-5" fill="currentColor">
                  <path d="M10 1.5 12.4 6l5 .7-3.6 3.5.9 5-4.7-2.4-4.7 2.4.9-5-3.6-3.5 5-.7Z" />
                </svg>
              </span>
              <p className="font-semibold text-primary">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
