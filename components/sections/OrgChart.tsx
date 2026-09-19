import { departments } from "@/lib/data/people";

// org.chart, department list variant (spec section 4).
export function OrgChart() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Organization</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {departments.map((department) => (
            <div key={department.name} className="rounded-lg border border-border bg-background p-5">
              <p className="font-semibold text-primary">{department.name}</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
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
