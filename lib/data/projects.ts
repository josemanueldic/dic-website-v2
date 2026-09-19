export type Project = {
  slug: string;
  name: string;
  client: string;
  serviceSlug: string;
  summary: string;
  featured: boolean;
};

// Placeholder data standing in for the Projects collection (spec section 6.2).
// Case-study selection is pending (spec section 11.1, open item 11).
export const projects: Project[] = [
  {
    slug: "qmc-heritage-buildings",
    name: "QMC Heritage Buildings",
    client: "Private",
    serviceSlug: "structural-renovation",
    summary: "Structural renovation and restoration of heritage buildings.",
    featured: true,
  },
  {
    slug: "rc-sports-center",
    name: "R/C Sports Center",
    client: "Government",
    serviceSlug: "building-design-build",
    summary: "Design-build delivery of a multi-facility sports center.",
    featured: true,
  },
  {
    slug: "avanceon-fit-out",
    name: "Avanceon Fit-Out",
    client: "Private",
    serviceSlug: "fit-out",
    summary: "Full interior fit-out across multiple rooms and departments.",
    featured: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}
