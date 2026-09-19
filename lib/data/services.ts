// Services shown across the site. To add, edit, remove or reorder a
// service, edit the `services` array below — see docs/CONTENT_GUIDE.md.

export type CapabilityBlock = {
  title: string;
  text: string;
};

export type MaterialSpec = {
  material: string;
  sizeRange: string;
};

export type Service = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  capabilities: CapabilityBlock[];
  materials?: MaterialSpec[];
};

// Placeholder data standing in for the Services collection (spec section 7).
export const services: Service[] = [
  {
    slug: "underground-utilities",
    name: "Underground Utilities",
    summary:
      "Wet and dry utility networks, from DI and GRP pipelines to HDD installation.",
    intro:
      "Underground utility networks for water, drainage, irrigation and dry services, delivered from design coordination through commissioning.",
    capabilities: [
      { title: "Wet utilities", text: "Water, sewerage and drainage networks including pump stations." },
      { title: "Dry utilities", text: "Ducting and cabling for power, telecoms and low-current systems." },
      { title: "Horizontal directional drilling", text: "Trenchless installation under roads, rail and existing services." },
    ],
    materials: [
      { material: "DI (Ductile Iron)", sizeRange: "300 mm – 1600 mm" },
      { material: "GRP (Glass Reinforced Plastic)", sizeRange: "up to 1600 mm" },
      { material: "HDPE", sizeRange: "up to 315 mm" },
    ],
  },
  {
    slug: "building-design-build",
    name: "Building & Design-Build",
    summary: "Turnkey building works from design development through handover.",
    intro:
      "Turnkey delivery for government, semi-government and private buildings, from design development through construction and handover.",
    capabilities: [
      { title: "Design development", text: "Coordinating design consultants against buildable, cost-controlled solutions." },
      { title: "Construction", text: "Structural, architectural and MEP works delivered as a single contract." },
      { title: "Handover", text: "Testing, commissioning and as-built documentation." },
    ],
  },
  {
    slug: "fit-out",
    name: "Fit-Out",
    summary: "Interior fit-out for retail, hospitality and institutional spaces.",
    intro:
      "Interior fit-out for retail, hospitality and institutional spaces, coordinated room by room against a fixed programme.",
    capabilities: [
      { title: "Retail & mall fit-out", text: "Tenant and common-area fit-out to brand and landlord standards." },
      { title: "Institutional interiors", text: "Fit-out for offices, mosques and public buildings." },
    ],
  },
  {
    slug: "structural-renovation",
    name: "Structural Renovation",
    summary: "Structural strengthening, FRP carbon fibre and heritage renovation.",
    intro:
      "Structural strengthening and renovation, including FRP carbon fibre reinforcement and heritage building restoration.",
    capabilities: [
      { title: "Structural strengthening", text: "FRP carbon fibre and steel reinforcement for existing structures." },
      { title: "Heritage renovation", text: "Restoration of heritage buildings to current safety standards." },
    ],
  },
  {
    slug: "roads-earthworks",
    name: "Roads & Earthworks",
    summary: "Road construction, grading and earthworks for public and private clients.",
    intro:
      "Road construction, grading and earthworks for government and private-sector infrastructure projects.",
    capabilities: [
      { title: "Roadworks", text: "Sub-base, base and surfacing for new and rehabilitated roads." },
      { title: "Earthworks", text: "Cut, fill and grading works for site development." },
    ],
  },
  {
    slug: "steel-works",
    name: "Steel Works",
    summary: "Structural steel fabrication and erection.",
    intro: "Structural steel fabrication and erection for buildings and infrastructure.",
    capabilities: [
      { title: "Fabrication", text: "Shop fabrication of structural steel members." },
      { title: "Erection", text: "Site erection and connection of steel structures." },
    ],
  },
  {
    slug: "civil-maintenance",
    name: "Civil Maintenance",
    summary: "Ongoing civil maintenance contracts for government and semi-government clients.",
    intro:
      "Ongoing civil maintenance contracts for government and semi-government clients, covering roads, utilities and buildings.",
    capabilities: [
      { title: "Reactive maintenance", text: "Rapid-response repair of civil and utility assets." },
      { title: "Planned maintenance", text: "Scheduled maintenance programmes under term contracts." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
