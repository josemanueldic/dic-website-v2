const reasons = [
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

// feature.cards, 3-column variant — "why DIC" instance (spec section 5).
export function FeatureCards() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Why DIC</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {reasons.map((reason) => (
            <div key={reason.title}>
              <h3 className="font-semibold text-primary">{reason.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
