import { stats } from "@/lib/data/stats";

// stats.strip, 4-column variant (spec section 4).
export function StatsStrip() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-2 divide-y divide-border rounded-2xl border border-border sm:grid-cols-4 sm:divide-x sm:divide-y-0">
          {stats.map((stat) => (
            <div key={stat.label} className="p-6 text-center sm:p-8">
              <p className="text-3xl font-bold tracking-tight text-primary lg:text-4xl">
                {stat.value}
                {stat.unit ? (
                  <span className="ml-1 text-lg font-semibold text-accent">{stat.unit}</span>
                ) : null}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
