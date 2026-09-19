import { clients } from "@/lib/data/clients";
import { PhotoSlot } from "@/components/ui/PhotoSlot";

// clients.logos, grid variant (spec section 4).
// Renders nothing if there are no clients to show (spec section 3, rule 4).
export function ClientsLogos() {
  if (clients.length === 0) return null;

  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Our Clients</h2>
        <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {clients.map((client) => (
            <PhotoSlot
              key={client.slug}
              slot={`clients/${client.slug}/logo`}
              ratio="3/2"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
