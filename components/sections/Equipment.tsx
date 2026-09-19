import { equipment } from "@/lib/data/equipment";
import { SectionHeading } from "@/components/ui/SectionHeading";

// equipment, table variant (spec section 4).
export function Equipment() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading eyebrow="Fleet" title="Equipment" />
        <div className="mt-10 overflow-hidden overflow-x-auto rounded-2xl border border-border">
          <table className="w-full min-w-[400px] border-collapse text-left text-sm">
            <thead>
              <tr className="bg-muted text-muted-foreground">
                <th className="px-5 py-3 font-medium">Type</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Count</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item) => (
                <tr key={item.type} className="border-t border-border">
                  <td className="px-5 py-3 text-primary">{item.type}</td>
                  <td className="px-5 py-3 text-muted-foreground">{item.category}</td>
                  <td className="px-5 py-3 text-muted-foreground">{item.count ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
