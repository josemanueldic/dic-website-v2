// Projects shown across the site. To add, edit, remove or reorder a
// project, edit the `projects` array below — see docs/CONTENT_GUIDE.md.
//
// Set `caseStudy: true` to give a project its own full page with a photo
// gallery and narrative (spec section 6.1) — otherwise it only appears as
// a card in the projects listing. `gallery` entries become PhotoSlot
// placeholders; see docs/CONTENT_GUIDE.md for how to replace them with
// real photos once available.

export type ProjectFact = {
  label: string;
  value: string;
};

export type ProjectPhoto = {
  slot: string; // e.g. "during-01" — combined with the project slug for the PhotoSlot name
  phase: "Design" | "Before" | "During" | "After" | "Aerial" | "Detail";
  alt: string;
};

export type Project = {
  slug: string;
  name: string;
  client: string; // display label; set clientSlug too when the client has its own record in clients.ts
  clientSlug?: string; // references a slug in lib/data/clients.ts, for recognition and client-page linking
  sector: "Government" | "Semi-government" | "Private";
  serviceSlugs: string[];
  location: string;
  status: "Completed" | "Ongoing";
  summary: string;
  narrative?: string;
  facts?: ProjectFact[];
  featured: boolean;
  caseStudy: boolean;
  gallery?: ProjectPhoto[];
};

// Case-study selection (which 8–10 projects) is pending confirmation
// (spec section 11.1, open item 11); these three are placeholders.
export const projects: Project[] = [
  {
    slug: "qmc-heritage-buildings",
    name: "QMC Heritage Buildings",
    client: "Private",
    sector: "Private",
    serviceSlugs: ["structural-renovation"],
    location: "Doha",
    status: "Completed",
    summary: "Structural renovation and restoration of heritage buildings.",
    narrative:
      "Restoration of a heritage building complex, combining structural strengthening with careful preservation of original architectural features.",
    facts: [
      { label: "Scope", value: "Structural renovation" },
      { label: "Status", value: "Completed" },
    ],
    featured: true,
    caseStudy: true,
    gallery: [
      { slot: "before-01", phase: "Before", alt: "Heritage building before renovation" },
      { slot: "during-01", phase: "During", alt: "Structural strengthening works in progress" },
      { slot: "after-01", phase: "After", alt: "Restored heritage building facade" },
    ],
  },
  {
    slug: "rc-sports-center",
    name: "R/C Sports Center",
    client: "Qatar Rail",
    clientSlug: "qatar-rail",
    sector: "Semi-government",
    serviceSlugs: ["building-design-build"],
    location: "Qatar",
    status: "Completed",
    summary: "Design-build delivery of a multi-facility sports center.",
    narrative:
      "Design-build delivery of a multi-facility sports center, coordinating structural, architectural and MEP works under a single contract.",
    facts: [
      { label: "Scope", value: "Design-build" },
      { label: "Status", value: "Completed" },
    ],
    featured: true,
    caseStudy: true,
    gallery: [
      { slot: "aerial-01", phase: "Aerial", alt: "Aerial view of the sports center" },
      { slot: "detail-01", phase: "Detail", alt: "Interior sports facility detail" },
    ],
  },
  {
    slug: "avanceon-fit-out",
    name: "Avanceon Fit-Out",
    client: "Private",
    sector: "Private",
    serviceSlugs: ["fit-out"],
    location: "Doha",
    status: "Completed",
    summary: "Full interior fit-out across multiple rooms and departments.",
    narrative:
      "Full interior fit-out delivered room by room across multiple departments, coordinated against a fixed handover programme.",
    facts: [
      { label: "Scope", value: "Interior fit-out" },
      { label: "Status", value: "Completed" },
    ],
    featured: true,
    caseStudy: true,
    gallery: [
      { slot: "reception-01", phase: "After", alt: "Reception area after fit-out" },
      { slot: "atrium-01", phase: "After", alt: "Main atrium after fit-out" },
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectsByService(serviceSlug: string): Project[] {
  return projects.filter((project) => project.serviceSlugs.includes(serviceSlug));
}

export function getRelatedProjects(project: Project, limit = 3): Project[] {
  return projects
    .filter(
      (candidate) =>
        candidate.slug !== project.slug &&
        candidate.serviceSlugs.some((slug) => project.serviceSlugs.includes(slug))
    )
    .slice(0, limit);
}
