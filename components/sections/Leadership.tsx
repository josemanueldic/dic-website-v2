import { leaders } from "@/lib/data/people";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

// leadership, cards variant (spec section 4).
export function Leadership() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Leadership</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {leaders.map((leader) => (
            <div key={leader.slug}>
              <PhotoSlot slot={`people/${leader.slug}/portrait`} ratio="4/5" />
              <p className="mt-3 font-semibold text-primary">{leader.name}</p>
              <p className="text-sm text-muted-foreground">{leader.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
