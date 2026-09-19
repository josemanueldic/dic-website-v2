import { jobs } from "@/lib/data/jobs";
import { SectionHeading } from "@/components/ui/SectionHeading";

// careers.list, list variant (spec section 4).
export function CareersList() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Join Us" title="Open Roles" />
        {jobs.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-background p-8 text-center">
            <p className="text-muted-foreground">
              No open roles right now. Check back soon, or send a general application
              using the form below.
            </p>
          </div>
        ) : (
          <div className="mt-10 space-y-4">
            {jobs.map((job) => (
              <div key={job.slug} className="rounded-2xl border border-border bg-background p-6">
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
