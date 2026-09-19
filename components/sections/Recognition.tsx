import type { Recognition as RecognitionItem } from "@/lib/data/recognition";

type RecognitionProps = {
  items: RecognitionItem[];
};

// recognition, card variant (spec section 4).
// Renders nothing if there is nothing to show (spec section 3, rule 4).
export function Recognition({ items }: RecognitionProps) {
  if (items.length === 0) return null;

  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Recognition</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.slug} className="rounded-lg border border-border bg-background p-5">
              <p className="font-semibold text-primary">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
