import { departments } from "@/lib/data/people";
import { SectionHeading } from "@/components/ui/SectionHeading";

// org.chart, department list variant (spec section 4).
export function OrgChart() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Structure" title="Organization" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department) => (
            <div key={department.name} className="rounded-2xl border border-border bg-background p-6">
              <p className="font-semibold text-primary">{department.name}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {department.roles.map((role) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
