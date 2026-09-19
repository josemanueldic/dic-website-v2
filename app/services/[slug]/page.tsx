import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { HeroPage } from "@/components/sections/HeroPage";
import { RichText } from "@/components/sections/RichText";
import { ServiceDetailList } from "@/components/sections/ServiceDetailList";
import { CapabilityMatrix } from "@/components/sections/CapabilityMatrix";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { Faq } from "@/components/sections/Faq";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PhotoSlot } from "@/components/ui/PhotoSlot";
import { services, getServiceBySlug } from "@/lib/data/services";
import { getProjectsByService } from "@/lib/data/projects";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.name} | Doha International Co. W.L.L.`,
    description: service.summary,
  };
}

// Service page default order (spec section 5), template for all 7 services:
// hero.page -> rich.text (intro) -> service.detail-list -> capability.matrix
// (where relevant) -> gallery.showcase -> projects.grid (filtered) -> faq -> cta.banner
export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedProjects = getProjectsByService(service.slug);
  const faqItems = [
    {
      question: `Which sectors does DIC deliver ${service.name.toLowerCase()} for?`,
      answer: "Government, semi-government and private clients across Qatar.",
    },
    {
      question: "How do I get a quote?",
      answer: "Use the contact form on our Contact page and our team will follow up.",
    },
  ];

  return (
    <main>
      <HeroPage title={service.name} intro={service.summary} />
      <RichText heading="Overview" body={service.intro} />
      <ServiceDetailList capabilities={service.capabilities} />
      <CapabilityMatrix materials={service.materials ?? []} />
      <section className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: 6 }, (_, index) => (
              <PhotoSlot
                key={index}
                slot={`service/${service.slug}/gallery/${index + 1}`}
                ratio="3/2"
              />
            ))}
          </div>
        </div>
      </section>
      <ProjectsGrid heading={`${service.name} Projects`} projects={relatedProjects} />
      <Faq items={faqItems} />
      <CtaBanner />
    </main>
  );
}
