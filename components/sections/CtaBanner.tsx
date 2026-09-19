import { LinkButton } from "@/components/ui/Button";

// cta.banner, solid variant (spec section 4).
export function CtaBanner() {
  return (
    <section className="bg-background px-6 py-16">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary-strong px-8 py-16 text-center text-primary-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl"
        />
        <h2 className="relative text-2xl font-bold tracking-tight sm:text-3xl">
          Ready to start your project?
        </h2>
        <p className="relative mx-auto mt-3 max-w-md text-primary-foreground/75">
          Tell us about your scope and we&apos;ll follow up with a quote.
        </p>
        <div className="relative mt-8">
          <LinkButton href="/contact">Request a Quote</LinkButton>
        </div>
      </div>
    </section>
  );
}
