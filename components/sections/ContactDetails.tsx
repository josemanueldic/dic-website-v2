import { offices } from "@/lib/data/offices";
import { SectionHeading } from "@/components/ui/SectionHeading";

const rows = (office: (typeof offices)[number]) => [
  { label: "Address", value: office.address },
  { label: "Phone", value: office.phone },
  { label: "Email", value: office.email },
  { label: "Hours", value: office.hours },
];

// contact.details, stacked variant (spec section 4).
export function ContactDetails() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-2xl px-6 py-20">
        {offices.map((office) => (
          <div key={office.name} className="rounded-2xl border border-border bg-background p-8">
            <SectionHeading title={office.name} />
            <dl className="mt-6 space-y-4">
              {rows(office).map((row) => (
                <div key={row.label} className="flex flex-col gap-0.5 border-t border-border pt-4 first:border-t-0 first:pt-0">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {row.label}
                  </dt>
                  <dd className="text-primary">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
