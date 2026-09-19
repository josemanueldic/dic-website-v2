import type { Metadata } from "next";
import { HeroPage } from "@/components/sections/HeroPage";
import { RichText } from "@/components/sections/RichText";
import { Timeline } from "@/components/sections/Timeline";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Leadership } from "@/components/sections/Leadership";
import { OrgChart } from "@/components/sections/OrgChart";
import { Equipment } from "@/components/sections/Equipment";
import { Certifications } from "@/components/sections/Certifications";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { foundingYear } from "@/lib/data/stats";

export const metadata: Metadata = {
  title: "About Us | Doha International Co. W.L.L.",
  description: "Our story, leadership and capabilities since " + foundingYear + ".",
};

// About page default order (spec section 5):
// hero.page -> rich.text (story) -> timeline -> stats.strip -> leadership
// -> org.chart -> equipment -> certifications -> cta.banner
export default function AboutPage() {
  return (
    <main>
      <HeroPage
        title="About Us"
        intro="A Qatar-based contractor delivering underground utilities, building and civil construction since 2007."
      />
      <RichText
        heading="Our Story"
        body="Since 2007, Doha International Co. has grown from a founding team into a full-service contractor across underground utilities, building construction and civil maintenance for government, semi-government and private clients in Qatar."
        imageSlot="page/about/hero"
      />
      <Timeline />
      <StatsStrip />
      <Leadership />
      <OrgChart />
      <Equipment />
      <Certifications />
      <CtaBanner />
    </main>
  );
}
