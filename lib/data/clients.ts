// Clients shown on the site. To add, edit or remove a client, edit the
// `clients` array below — see docs/CONTENT_GUIDE.md.

export type Client = {
  slug: string;
  name: string;
  sector: "Government" | "Semi-government" | "Private";
};

// Placeholder data standing in for the Clients collection (spec section 7).
// Name accuracy and public-display permissions are pending confirmation
// (spec section 11.1, open items 7 and 9).
export const clients: Client[] = [
  { slug: "ashghal", name: "Ashghal", sector: "Government" },
  { slug: "qatar-rail", name: "Qatar Rail", sector: "Semi-government" },
  { slug: "kahramaa", name: "Kahramaa", sector: "Semi-government" },
];
