// Office contact details. To add, edit or remove an office, edit the
// `offices` array below — see docs/CONTENT_GUIDE.md.
//
// Phone, address and email are pending confirmation (spec section 11.1,
// open item 4 — incomplete phone number, placeholder address, two
// competing domains). Do not publish without correcting these.

export type Office = {
  name: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
};

export const offices: Office[] = [
  {
    name: "Doha Head Office",
    address: "Address pending confirmation, Doha, Qatar",
    phone: "Phone pending confirmation",
    email: "info@dicqa.com",
    hours: "Sunday – Thursday, 8:00 AM – 5:00 PM",
  },
];
