import Link from "next/link";

// cta.banner, solid variant (spec section 4).
export function CtaBanner() {
  return (
    <section className="bg-accent">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-14 text-center">
        <h2 className="text-2xl font-bold text-primary">
          Ready to start your project?
        </h2>
        <Link
          href="/contact"
          className="rounded bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
