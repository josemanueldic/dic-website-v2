import type { MaterialSpec } from "@/lib/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

type CapabilityMatrixProps = {
  materials: MaterialSpec[];
};

// capability.matrix, table variant (spec section 4).
// Renders nothing if there is no material data for this service (spec section 3, rule 4).
export function CapabilityMatrix({ materials }: CapabilityMatrixProps) {
  if (materials.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Specifications" title="Materials & Sizes" />
        <div className="mt-10 overflow-hidden overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[400px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="px-5 py-3 font-medium">Material</th>
                <th className="px-5 py-3 font-medium">Size Range</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((spec) => (
                <tr key={spec.material} className="border-t border-border">
                  <td className="px-5 py-3 text-primary">{spec.material}</td>
                  <td className="px-5 py-3 text-muted-foreground">{spec.sizeRange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
