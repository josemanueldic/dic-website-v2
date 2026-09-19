// Company timeline. To add, edit or remove a milestone, edit the
// `milestones` array below — see docs/CONTENT_GUIDE.md.

export type Milestone = {
  year: number;
  title: string;
  text: string;
};

export const milestones: Milestone[] = [
  { year: 2007, title: "Founded", text: "Doha International Co. established in Qatar." },
  { year: 2015, title: "Growth", text: "Expanded service lines and workforce to meet demand across sectors." },
  { year: 2022, title: "Recognition", text: "Recognized for delivery on major infrastructure contracts." },
];
