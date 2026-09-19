import type { MaterialSpec } from "@/lib/data/services";

type CapabilityMatrixProps = {
  materials: MaterialSpec[];
};

// capability.matrix, table variant (spec section 4).
// Renders nothing if there is no material data for this service (spec section 3, rule 4).
export function CapabilityMatrix({ materials }: CapabilityMatrixProps) {
  if (materials.length === 0) return null;

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Materials & Sizes</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[400px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Material</th>
                <th className="py-2 font-medium">Size Range</th>
              </tr>
            </thead>
            <tbody>
              {materials.map((spec) => (
                <tr key={spec.material} className="border-b border-border">
                  <td className="py-2 pr-4 text-primary">{spec.material}</td>
                  <td className="py-2 text-muted-foreground">{spec.sizeRange}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
