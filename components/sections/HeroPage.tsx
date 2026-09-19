type HeroPageProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

// hero.page, plain variant (spec section 4).
export function HeroPage({ eyebrow, title, intro }: HeroPageProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary-strong via-primary to-primary"
      />
      <div className="relative mx-auto max-w-6xl px-6 py-16 lg:py-20">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
        ) : null}
        <h1 className="mt-2 text-3xl font-bold tracking-tight lg:text-5xl">{title}</h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/75">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
