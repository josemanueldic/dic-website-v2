import type { Metadata } from "next";
import { HeroPage } from "@/components/sections/HeroPage";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactDetails } from "@/components/sections/ContactDetails";

export const metadata: Metadata = {
  title: "Contact | Doha International Co. W.L.L.",
  description: "Get in touch for quotes, tenders and enquiries.",
};

// Contact page default order (spec section 5):
// hero.page -> contact.form -> contact.details
export default function ContactPage() {
  return (
    <main>
      <HeroPage title="Contact Us" intro="Get in touch for quotes, tenders and general enquiries." />
      <ContactForm />
      <ContactDetails />
    </main>
  );
}
