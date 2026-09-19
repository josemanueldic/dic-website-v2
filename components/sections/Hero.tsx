import Link from "next/link";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

// hero.home, image variant (spec section 4).
export function Hero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
        <div>
          <h1 className="text-3xl font-bold leading-tight lg:text-5xl">
            Building Qatar&apos;s infrastructure, on time and on budget.
          </h1>
          <p className="mt-4 max-w-md text-primary-foreground/80">
            Underground utilities, building and civil construction across
            government, semi-government and private sectors.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/projects"
              className="rounded bg-accent px-5 py-3 text-sm font-semibold text-primary hover:brightness-110"
            >
              View Our Work
            </Link>
            <Link
              href="/contact"
              className="rounded border border-primary-foreground/40 px-5 py-3 text-sm font-semibold hover:bg-primary-foreground/10"
            >
              Request a Quote
            </Link>
          </div>
        </div>
        <PhotoSlot slot="home/hero" ratio="16/9" />
      </div>
    </section>
  );
}
