import { getActiveCertifications } from "@/lib/data/certifications";

// certifications, badges variant (spec section 4).
// Renders nothing if there are no active certifications (spec section 3, rule 4).
export function Certifications() {
  const active = getActiveCertifications();
  if (active.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Certifications</h2>
        <div className="mt-8 flex flex-wrap gap-4">
          {active.map((cert) => (
            <div
              key={cert.slug}
              className="rounded-full border border-border px-5 py-2 text-sm"
            >
              <span className="font-semibold text-primary">{cert.name}</span>
              <span className="ml-2 text-muted-foreground">{cert.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
