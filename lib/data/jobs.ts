// Open roles for the Careers page. To add, edit or remove a job, edit
// the `jobs` array below — see docs/CONTENT_GUIDE.md. Real openings are
// still to be supplied (spec section 7) — this list is empty until then.

export type Job = {
  slug: string;
  title: string;
  department: string;
  location: string;
  description: string;
};

export const jobs: Job[] = [];
