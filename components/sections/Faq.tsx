import { SectionHeading } from "@/components/ui/SectionHeading";

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
    <section className="bg-background">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" />
        <div className="mt-10 space-y-3">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-primary">
                {item.question}
                <svg
                  viewBox="0 0 20 20"
                  className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  fill="currentColor"
                >
                  <path d="M5.5 7.5 10 12l4.5-4.5" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
