import type { Metadata } from "next";
import { HeroPage } from "@/components/sections/HeroPage";
import { RichText } from "@/components/sections/RichText";
import { FeatureCards } from "@/components/sections/FeatureCards";
import { CareersList } from "@/components/sections/CareersList";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Careers | Doha International Co. W.L.L.",
  description: "Open roles and what it's like to work at Doha International Co.",
};

const benefitsItems = [
  { title: "Growth", text: "Work across a full range of construction disciplines." },
  { title: "Training", text: "Ongoing skills and safety training." },
  { title: "Stability", text: "Long-term contracts across government and private sectors." },
];

// Careers page default order (spec section 5):
// hero.page -> rich.text -> feature.cards (benefits, training) -> careers.list -> contact.form (compact)
export default function CareersPage() {
  return (
    <main>
      <HeroPage
        eyebrow="Join Us"
        title="Careers"
        intro="Build your career with a full-service Qatar-based contractor."
      />
      <RichText
        heading="Working at DIC"
        body="We invest in our workforce across engineering, HSE, procurement and site operations, with training and career growth built into every role."
      />
      <FeatureCards eyebrow="Benefits" heading="Why Join Us" items={benefitsItems} />
      <CareersList />
      <ContactForm />
    </main>
  );
}
