export type Certification = {
  slug: string;
  name: string;
  issuer: string;
  expiry?: string; // ISO date; omitted means no expiry tracked yet
};

// Placeholder data standing in for the Certifications collection (spec section 7).
// ISO 9001 year and the commercial registration expiry are pending confirmation
// (spec section 11.1, open items 1 and 2).
export const certifications: Certification[] = [
  { slug: "iso-9001", name: "ISO 9001", issuer: "Quality Management" },
  { slug: "iso-14001", name: "ISO 14001", issuer: "Environmental Management" },
  { slug: "iso-45001", name: "ISO 45001", issuer: "Occupational Health & Safety" },
];

// Spec section 7: "the site hides a badge automatically once the date has passed."
export function getActiveCertifications(): Certification[] {
  const now = Date.now();
  return certifications.filter(
    (cert) => !cert.expiry || new Date(cert.expiry).getTime() > now
  );
}
