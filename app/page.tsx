import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ProjectsFeatured } from "@/components/sections/ProjectsFeatured";
import { WhyDicCards } from "@/components/sections/FeatureCards";
import { ClientsLogos } from "@/components/sections/ClientsLogos";
import { Certifications } from "@/components/sections/Certifications";
import { CtaBanner } from "@/components/sections/CtaBanner";

// Home page default order (spec section 5):
// hero.home -> stats.strip -> service.grid -> projects.featured
// -> feature.cards (why DIC) -> clients.logos -> certifications -> cta.banner
export default function Home() {
  return (
    <main>
      <Hero />
      <StatsStrip />
      <ServiceGrid />
      <ProjectsFeatured />
      <WhyDicCards />
      <ClientsLogos />
      <Certifications />
      <CtaBanner />
    </main>
  );
}
