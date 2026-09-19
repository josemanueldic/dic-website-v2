import { offices } from "@/lib/data/offices";

// contact.details, stacked variant (spec section 4).
export function ContactDetails() {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-2xl px-6 py-16">
        {offices.map((office) => (
          <div key={office.name} className="space-y-1">
            <h2 className="text-xl font-bold text-primary">{office.name}</h2>
            <p className="text-muted-foreground">{office.address}</p>
            <p className="text-muted-foreground">{office.phone}</p>
            <p className="text-muted-foreground">{office.email}</p>
            <p className="text-muted-foreground">{office.hours}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
