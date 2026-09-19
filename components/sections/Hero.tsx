import { LinkButton } from "@/components/ui/Button";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

// hero.home, image variant (spec section 4).
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-strong via-primary to-primary"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <span className="inline-flex items-center rounded-full border border-primary-foreground/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent">
            Since 2007 · Qatar
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight lg:text-6xl">
            Building Qatar&apos;s infrastructure, on time and on budget.
          </h1>
          <p className="mt-5 max-w-md text-lg text-primary-foreground/75">
            Underground utilities, building and civil construction across
            government, semi-government and private sectors.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <LinkButton href="/projects">View Our Work</LinkButton>
            <LinkButton href="/contact" variant="outline-light">
              Request a Quote
            </LinkButton>
          </div>
        </div>
        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-2xl bg-accent/20 blur-2xl"
          />
          <div className="relative rounded-2xl shadow-2xl shadow-black/30">
            <PhotoSlot slot="home/hero" ratio="16/9" />
          </div>
        </div>
      </div>
    </section>
  );
}
