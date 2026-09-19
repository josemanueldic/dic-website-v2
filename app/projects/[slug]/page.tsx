import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectHeader } from "@/components/sections/ProjectHeader";
import { GalleryShowcase } from "@/components/sections/GalleryShowcase";
import { RichText } from "@/components/sections/RichText";
import { GalleryFull } from "@/components/sections/GalleryFull";
import { Recognition } from "@/components/sections/Recognition";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { projects, getProjectBySlug, getRelatedProjects } from "@/lib/data/projects";
import { recognitions } from "@/lib/data/recognition";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.filter((project) => project.caseStudy).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.name} | Doha International Co. W.L.L.`,
    description: project.summary,
  };
}

// Project page default order (spec section 5), fixed start (project.header
// first), rest reorderable: project.header -> gallery.showcase -> rich.text
// (narrative) -> gallery.full -> recognition (if any) -> projects.grid
// (related, 3) -> cta.banner
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project || !project.caseStudy) notFound();

  const relatedRecognitions = project.clientSlug
    ? recognitions.filter((item) => item.clientSlug === project.clientSlug)
    : [];

  return (
    <main>
      <ProjectHeader project={project} />
      <GalleryShowcase projectSlug={project.slug} photos={project.gallery ?? []} />
      {project.narrative ? (
        <RichText eyebrow="The Project" heading="Narrative" body={project.narrative} />
      ) : null}
      <GalleryFull projectSlug={project.slug} photos={project.gallery ?? []} />
      <Recognition items={relatedRecognitions} />
      <ProjectsGrid eyebrow="Keep Exploring" heading="Related Projects" projects={getRelatedProjects(project)} />
      <CtaBanner />
    </main>
  );
}
