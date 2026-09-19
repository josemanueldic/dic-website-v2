import { getActiveCertifications } from "@/lib/data/certifications";
import { SectionHeading } from "@/components/ui/SectionHeading";

// certifications, badges variant (spec section 4).
// Renders nothing if there are no active certifications (spec section 3, rule 4).
export function Certifications() {
  const active = getActiveCertifications();
  if (active.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Accredited" title="Certifications" align="center" />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {active.map((cert) => (
            <div
              key={cert.slug}
              className="flex items-center gap-3 rounded-full border border-border px-5 py-3 text-sm"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor">
                  <path d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.7a1 1 0 1 1 1.4-1.4L8 11.6l6.8-6.8a1 1 0 0 1 1.4 0Z" />
                </svg>
              </span>
              <span className="font-semibold text-primary">{cert.name}</span>
              <span className="text-muted-foreground">{cert.issuer}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
