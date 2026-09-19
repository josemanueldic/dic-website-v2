// Fleet and equipment counts. To add, edit or remove an entry, edit the
// `equipment` array below — see docs/CONTENT_GUIDE.md.

export type EquipmentItem = {
  type: string;
  count?: number; // omit until the real fleet count is confirmed
  category: string;
};

export const equipment: EquipmentItem[] = [
  { type: "Excavators", category: "Earthworks" },
  { type: "Dump trucks", category: "Earthworks" },
  { type: "Cranes", category: "Lifting" },
  { type: "Generators", category: "Support" },
];
