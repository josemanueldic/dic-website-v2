type ProcessStepsProps = {
  heading: string;
  steps: string[];
};

// process.steps, vertical variant (spec section 4).
export function ProcessSteps({ heading, steps }: ProcessStepsProps) {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">{heading}</h2>
        <ol className="mt-8 space-y-4">
          {steps.map((step, index) => (
            <li key={step} className="flex gap-4">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-semibold text-primary">
                {index + 1}
              </span>
              <p className="pt-1 text-muted-foreground">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
