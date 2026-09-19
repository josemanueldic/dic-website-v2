import { leaders } from "@/lib/data/people";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";

// leadership, cards variant (spec section 4).
export function Leadership() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Leadership" title="Who Leads Us" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <div key={leader.slug} className="overflow-hidden rounded-2xl border border-border">
              <PhotoSlot slot={`people/${leader.slug}/portrait`} ratio="4/5" className="rounded-none" />
              <div className="p-4">
                <p className="font-semibold text-primary">{leader.name}</p>
                <p className="text-sm text-muted-foreground">{leader.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
