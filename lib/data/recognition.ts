// Appreciation letters and awards. To add, edit or remove one, edit the
// `recognitions` array below — see docs/CONTENT_GUIDE.md.
//
// Naming Qatar Rail here is pending permission confirmation (spec
// section 11.1, open item 9).

export type Recognition = {
  slug: string;
  clientSlug: string;
  title: string;
};

export const recognitions: Recognition[] = [
  { slug: "qatar-rail-appreciation", clientSlug: "qatar-rail", title: "Appreciation letter — Qatar Rail" },
];
