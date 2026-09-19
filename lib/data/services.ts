export type Service = {
  slug: string;
  name: string;
  summary: string;
};

// Placeholder data standing in for the Services collection (spec section 7).
export const services: Service[] = [
  {
    slug: "underground-utilities",
    name: "Underground Utilities",
    summary:
      "Wet and dry utility networks, from DI and GRP pipelines to HDD installation.",
  },
  {
    slug: "building-design-build",
    name: "Building & Design-Build",
    summary: "Turnkey building works from design development through handover.",
  },
  {
    slug: "fit-out",
    name: "Fit-Out",
    summary: "Interior fit-out for retail, hospitality and institutional spaces.",
  },
  {
    slug: "structural-renovation",
    name: "Structural Renovation",
    summary: "Structural strengthening, FRP carbon fibre and heritage renovation.",
  },
  {
    slug: "roads-earthworks",
    name: "Roads & Earthworks",
    summary: "Road construction, grading and earthworks for public and private clients.",
  },
  {
    slug: "steel-works",
    name: "Steel Works",
    summary: "Structural steel fabrication and erection.",
  },
  {
    slug: "civil-maintenance",
    name: "Civil Maintenance",
    summary: "Ongoing civil maintenance contracts for government and semi-government clients.",
  },
];
