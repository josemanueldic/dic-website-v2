import type { CapabilityBlock } from "@/lib/data/services";

type ServiceDetailListProps = {
  capabilities: CapabilityBlock[];
};

// service.detail-list, stacked variant (spec section 4).
export function ServiceDetailList({ capabilities }: ServiceDetailListProps) {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Capabilities</h2>
        <div className="mt-8 space-y-6">
          {capabilities.map((block) => (
            <div key={block.title} className="rounded-lg border border-border bg-background p-6">
              <h3 className="font-semibold text-primary">{block.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{block.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
