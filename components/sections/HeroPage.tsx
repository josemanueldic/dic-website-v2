type HeroPageProps = {
  title: string;
  intro?: string;
};

// hero.page, plain variant (spec section 4).
export function HeroPage({ title, intro }: HeroPageProps) {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <h1 className="text-3xl font-bold lg:text-4xl">{title}</h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-primary-foreground/80">{intro}</p>
        ) : null}
      </div>
    </section>
  );
}
