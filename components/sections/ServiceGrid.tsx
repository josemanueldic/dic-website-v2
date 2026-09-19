import Link from "next/link";
import { services } from "@/lib/data/services";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

// service.grid, cards variant (spec section 4).
export function ServiceGrid() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Our Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group overflow-hidden rounded-lg border border-border bg-background transition hover:shadow-md"
            >
              <PhotoSlot slot={`service/${service.slug}/cover`} ratio="4/3" />
              <div className="p-5">
                <h3 className="font-semibold text-primary group-hover:underline">
                  {service.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {service.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
