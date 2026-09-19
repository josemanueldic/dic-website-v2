import type { Metadata } from "next";
import { HeroPage } from "@/components/sections/HeroPage";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { WhyDicCards } from "@/components/sections/FeatureCards";
import { ProjectsFeatured } from "@/components/sections/ProjectsFeatured";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Services | Doha International Co. W.L.L.",
  description:
    "Underground utilities, building and design-build, fit-out, structural renovation, roads and earthworks, steel works and civil maintenance in Qatar.",
};

// Services overview default order (spec section 5):
// hero.page -> service.grid -> feature.cards (approach) -> projects.featured -> cta.banner
export default function ServicesPage() {
  return (
    <main>
      <HeroPage
        eyebrow="What We Do"
        title="Our Services"
        intro="Full-service capability across underground utilities, building construction and civil maintenance."
      />
      <ServiceGrid />
      <WhyDicCards />
      <ProjectsFeatured />
      <CtaBanner />
    </main>
  );
}
