import type { Metadata } from "next";
import { HeroPage } from "@/components/sections/HeroPage";
import { ClientsLogos } from "@/components/sections/ClientsLogos";
import { Recognition } from "@/components/sections/Recognition";
import { ProjectsFeatured } from "@/components/sections/ProjectsFeatured";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { recognitions } from "@/lib/data/recognition";

export const metadata: Metadata = {
  title: "Clients | Doha International Co. W.L.L.",
  description: "Government, semi-government and private clients across Qatar.",
};

// Clients page default order (spec section 5):
// hero.page -> clients.logos -> recognition -> projects.featured -> cta.banner
export default function ClientsPage() {
  return (
    <main>
      <HeroPage title="Our Clients" intro="Trusted across government, semi-government and private sectors." />
      <ClientsLogos />
      <Recognition items={recognitions} />
      <ProjectsFeatured />
      <CtaBanner />
    </main>
  );
}
