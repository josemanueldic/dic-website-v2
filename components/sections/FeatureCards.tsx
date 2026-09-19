import { SectionHeading } from "@/components/ui/SectionHeading";

export type FeatureCard = {
  title: string;
  text: string;
};

type FeatureCardsProps = {
  eyebrow?: string;
  heading: string;
  items: FeatureCard[];
};

const whyDicReasons: FeatureCard[] = [
  {
    title: "Proven delivery",
    text: "A track record of on-time, on-budget delivery across government and private contracts.",
  },
  {
    title: "Full-service capability",
    text: "From underground utilities to building fit-out, under one contractor.",
  },
  {
    title: "Certified quality",
    text: "ISO-certified quality, safety and environmental management.",
  },
];

// feature.cards, 3-column variant (spec section 4). Reused across pages
// with different headings and content — e.g. "Why DIC" on Home, or
// quality/HSE/training on the Quality, HSE & Sustainability page.
export function FeatureCards({ eyebrow, heading, items }: FeatureCardsProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow={eyebrow} title={heading} />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {items.map((item, index) => (
            <div key={item.title} className="rounded-2xl border border-border p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5 text-sm font-bold text-primary">
                {index + 1}
              </span>
              <h3 className="mt-4 font-semibold text-primary">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// why.dic — the "why DIC" instance used on Home and the Services overview (spec section 5).
export function WhyDicCards() {
  return <FeatureCards eyebrow="Why DIC" heading="Built for Results" items={whyDicReasons} />;
}
