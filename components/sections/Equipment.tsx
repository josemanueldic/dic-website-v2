import { equipment } from "@/lib/data/equipment";

// equipment, table variant (spec section 4).
export function Equipment() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-bold text-primary">Equipment</h2>
        <div className="mt-8 overflow-x-auto">
          <table className="w-full min-w-[400px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border text-muted-foreground">
                <th className="py-2 pr-4 font-medium">Type</th>
                <th className="py-2 pr-4 font-medium">Category</th>
                <th className="py-2 font-medium">Count</th>
              </tr>
            </thead>
            <tbody>
              {equipment.map((item) => (
                <tr key={item.type} className="border-b border-border">
                  <td className="py-2 pr-4 text-primary">{item.type}</td>
                  <td className="py-2 pr-4 text-muted-foreground">{item.category}</td>
                  <td className="py-2 text-muted-foreground">{item.count ?? "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
