export type Stat = {
  label: string;
  value: string;
  unit?: string;
};

// Founding year, per spec section 7: "years in business" is calculated, not typed.
export const foundingYear = 2007;

// Placeholder data standing in for the Stats collection (spec section 7).
// Real figures are pending confirmation (spec section 11.1, open item 5).
export const stats: Stat[] = [
  { label: "Company value", value: "—", unit: "QAR" },
  { label: "Current project value", value: "—", unit: "QAR" },
  { label: "Completed project value", value: "—", unit: "QAR" },
  { label: "Workforce", value: "—" },
];
