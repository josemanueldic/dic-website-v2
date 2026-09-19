export type FeatureCard = {
  title: string;
  text: string;
};

type FeatureCardsProps = {
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
export function FeatureCards({ heading, items }: FeatureCardsProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">{heading}</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold text-primary">{item.title}</h3>
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
  return <FeatureCards heading="Why DIC" items={whyDicReasons} />;
}
