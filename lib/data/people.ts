// Leadership and org chart. To add, edit or remove a person or
// department, edit the arrays below — see docs/CONTENT_GUIDE.md.
//
// Leadership names and titles are inconsistent across the source deck
// (spec section 11.1, open item 3) and are left as placeholders here
// pending confirmation — do not publish without correcting them.

export type Leader = {
  slug: string;
  name: string;
  title: string;
};

export type Department = {
  name: string;
  roles: string[];
};

export const leaders: Leader[] = [
  { slug: "chairman", name: "Name pending confirmation", title: "Chairman" },
  { slug: "managing-director", name: "Name pending confirmation", title: "Managing Director" },
  { slug: "deputy-managing-director", name: "Name pending confirmation", title: "Deputy Managing Director" },
  { slug: "contractor-representative", name: "Name pending confirmation", title: "Contractor Representative" },
];

export const departments: Department[] = [
  { name: "Engineering", roles: ["Project Manager", "Site Engineer", "QA/QC Engineer"] },
  { name: "HSE", roles: ["HSE Manager", "HSE Officer"] },
  { name: "Procurement", roles: ["Procurement Manager", "Buyer"] },
  { name: "Finance & Administration", roles: ["Finance Manager", "HR Officer"] },
];
