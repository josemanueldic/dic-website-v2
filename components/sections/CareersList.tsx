import { jobs } from "@/lib/data/jobs";

// careers.list, list variant (spec section 4).
export function CareersList() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Open Roles</h2>
        {jobs.length === 0 ? (
          <p className="mt-4 text-muted-foreground">
            No open roles right now. Check back soon, or send a general application
            using the form below.
          </p>
        ) : (
          <div className="mt-8 space-y-4">
            {jobs.map((job) => (
              <div key={job.slug} className="rounded-lg border border-border p-5">
                <p className="font-semibold text-primary">{job.title}</p>
                <p className="text-sm text-muted-foreground">
                  {job.department} · {job.location}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{job.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
