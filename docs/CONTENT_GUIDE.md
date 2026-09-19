# Editing site content (no admin panel, yet)

The site doesn't have a CMS or admin panel right now (see the spec's Payload
CMS plan for that, later). Until then, all content lives in plain TypeScript
files under `lib/data/`, and pages are built from it automatically. Editing
the site means editing these files directly, then committing the change.

## How it fits together

```
lib/data/*.ts        <- the actual content (projects, services, clients, ...)
components/sections/ <- components that display that content
app/**/page.tsx       <- pages, which pick which sections to show
```

You almost never need to touch `components/` or `app/` to change content —
just edit the relevant file in `lib/data/`.

## Adding, editing or removing an item

Every file in `lib/data/` exports an array of plain objects (one object per
project, service, client, etc.), with a comment block at the top explaining
its fields. To:

- **Add an item** — copy an existing object in the array, paste it as a new
  entry, and change its fields. Give it a unique `slug` (lowercase, hyphens,
  no spaces — it becomes part of the URL, e.g. `qmc-heritage-buildings`).
- **Edit an item** — change the fields on its object directly.
- **Remove an item** — delete its object from the array.
- **Reorder items** — reorder the objects in the array; most lists display
  in array order.

After saving, run `npm run dev` and check the page — TypeScript will error
if a required field is missing.

## Adding real photos

Every image on the site is currently a labelled grey placeholder ("Photo
slot: project/qmc-heritage-buildings/cover, 4:3") rendered by
`components/ui/PhotoSlot.tsx`, per the spec's placeholder convention
(section 8). To replace one with a real photo:

1. Add the image file under `public/images/...` (create folders as needed —
   for example `public/images/projects/qmc-heritage-buildings/cover.jpg`).
2. In the section component that renders that slot (e.g.
   `components/sections/ProjectsFeatured.tsx`), replace the `<PhotoSlot ... />`
   for that item with a Next.js `<Image>`:

   ```tsx
   import Image from "next/image";

   <Image
     src="/images/projects/qmc-heritage-buildings/cover.jpg"
     alt="Descriptive text for screen readers and SEO"
     width={1600}
     height={1200}
     className="h-full w-full object-cover"
   />
   ```

3. Keep the same aspect ratio as the slot it replaces (see the slot table in
   the spec, section 8) so the layout doesn't shift.

Until photos arrive, leave the `PhotoSlot` in place — it's meant to be
visible in development so missing photos are easy to track, and the spec
calls for it to disappear in production once nothing is placeholder-only.

## Where each collection is used

| File | Used by |
|------|---------|
| `services.ts` | Home, Services overview, Service detail pages |
| `projects.ts` | Home, Projects listing, Project detail pages |
| `clients.ts` | Home, Clients page |
| `certifications.ts` | Home, About, Quality/HSE page |
| `stats.ts` | Home, About |
| `milestones.ts` | About (timeline) |
| `people.ts` | About (leadership, org chart) |
| `equipment.ts` | About |
| `jobs.ts` | Careers |
| `offices.ts` | Contact |
