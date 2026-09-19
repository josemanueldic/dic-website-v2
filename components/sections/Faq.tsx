type FaqItem = {
  question: string;
  answer: string;
};

type FaqProps = {
  items: FaqItem[];
};

// faq, accordion variant (spec section 4). Uses native <details> so it
// works with no client-side JavaScript.
// Renders nothing if there are no questions for this page (spec section 3, rule 4).
export function Faq({ items }: FaqProps) {
  if (items.length === 0) return null;

  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-3">
          {items.map((item) => (
            <details key={item.question} className="rounded-lg border border-border bg-background p-4">
              <summary className="cursor-pointer font-semibold text-primary">
                {item.question}
              </summary>
              <p className="mt-2 text-sm text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
