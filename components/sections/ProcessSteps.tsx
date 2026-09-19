import { SectionHeading } from "@/components/ui/SectionHeading";

type ProcessStepsProps = {
  eyebrow?: string;
  heading: string;
  steps: string[];
};

// process.steps, vertical variant (spec section 4).
export function ProcessSteps({ eyebrow, heading, steps }: ProcessStepsProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow={eyebrow} title={heading} />
        <ol className="mt-10 space-y-4">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-4 rounded-2xl border border-border p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-accent-foreground">
                {index + 1}
              </span>
              <p className="pt-1.5 text-muted-foreground">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
