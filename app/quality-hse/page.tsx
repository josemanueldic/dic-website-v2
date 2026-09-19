import type { Metadata } from "next";
import { HeroPage } from "@/components/sections/HeroPage";
import { RichText } from "@/components/sections/RichText";
import { Certifications } from "@/components/sections/Certifications";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Quality, HSE & Sustainability | Doha International Co. W.L.L.",
  description: "Quality control, health, safety, environment and training commitments.",
};

const riskManagementSteps = [
  "Identify hazards specific to each site and activity.",
  "Assess and rank risks before work begins.",
  "Apply controls and communicate them to the workforce.",
  "Monitor, audit and close out corrective actions.",
];

const qualityItems = [
  { title: "Quality Control", text: "Inspection and testing at every stage of the works." },
  { title: "Integrated Management System", text: "Quality procedures aligned with ISO 9001." },
];

const hseItems = [
  { title: "Safety Commitment", text: "Site safety plans and toolbox talks on every project." },
  { title: "Environmental Responsibility", text: "Environmental controls aligned with ISO 14001." },
];

const trainingItems = [
  { title: "Workforce Training", text: "Ongoing training on safety, quality and technical skills." },
  { title: "Certification", text: "Trade certifications maintained and tracked per employee." },
];

// Quality, HSE & Sustainability page default order (spec section 5):
// hero.page -> rich.text -> certifications -> feature.cards (quality) ->
// feature.cards (HSE) -> process.steps (risk management) -> feature.cards
// (training) -> cta.banner
export default function QualityHsePage() {
  return (
    <main>
      <HeroPage
        eyebrow="Our Standards"
        title="Quality, HSE & Sustainability"
        intro="Certified quality, safety and environmental management across every project."
      />
      <RichText
        heading="Our Commitment"
        body="Quality, health, safety and environmental management are built into how every project is planned and delivered, backed by ISO-certified management systems."
      />
      <Certifications />
      <FeatureCards eyebrow="Quality" heading="Quality Control & Testing" items={qualityItems} />
      <FeatureCards eyebrow="HSE" heading="Health, Safety & Environment" items={hseItems} />
      <ProcessSteps eyebrow="Process" heading="Risk Management Process" steps={riskManagementSteps} />
      <FeatureCards eyebrow="People" heading="Training" items={trainingItems} />
      <CtaBanner />
    </main>
  );
}
