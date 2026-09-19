import Link from "next/link";
import { services } from "@/lib/data/services";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";

// service.grid, cards variant (spec section 4).
export function ServiceGrid() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="What We Do" title="Our Services" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-2xl border border-border bg-background transition hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <PhotoSlot slot={`service/${service.slug}/cover`} ratio="4/3" className="rounded-none" />
              <div className="p-6">
                <h3 className="font-semibold text-primary transition group-hover:text-accent">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Learn more
                  <span className="transition group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
