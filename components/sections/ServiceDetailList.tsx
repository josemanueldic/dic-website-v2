import type { CapabilityBlock } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

type ServiceDetailListProps = {
  capabilities: CapabilityBlock[];
};

// service.detail-list, stacked variant (spec section 4).
export function ServiceDetailList({ capabilities }: ServiceDetailListProps) {
  return (
    <section className="bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Scope" title="Capabilities" />
        <div className="mt-10 space-y-4">
          {capabilities.map((block, index) => (
            <div
              key={block.title}
              className="flex gap-5 rounded-2xl border border-border bg-background p-6"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/5 text-sm font-bold text-primary">
                {index + 1}
              </span>
              <div>
                <h3 className="font-semibold text-primary">{block.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{block.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
