# DIC Website Specification — Modular Sections & Project Gallery

*Doha International Co. W.L.L. · Prepared 19 September 2026*

## 1. Purpose and principles

The DIC website is a set of self-contained section modules that any page can reorder, hide or repeat, plus a dedicated photo gallery on every project.

- **Pages are lists of sections.** A page is an ordered list of modules; changing the order changes the page, with no code changes.
- **Content lives once.** Projects, services, clients, certifications and people are stored as data collections; modules only display them. This removes the duplication in the source deck (section 2).
- **Every image is a named slot.** The first build ships with placeholders; real photos are uploaded into the slots later through the admin panel.
- **Any module works in any position.** No module depends on its neighbours for spacing, background or context.
- **Assumed stack:** Next.js (App Router) with TypeScript, static generation for SEO. Payload CMS (open source, embedded in the same app) provides the admin panel from the first build (section 9). Change this if the stack decision changes.

**Out of scope for Phase 1:** news/insights, client login.

## 2. Redundancy in the company profile and how the site removes it

The 89-page deck repeats the same facts in 12+ places; the site stores each fact once and shows it wherever needed.

| Repeated content | Where it appears in the deck | Site treatment |
|---------------------|------------------------------------|------------------------------------|
| Legal registration and ISO | Section 01f, section 02a, the compliance slide and 5 certificate-image slides | One Certifications collection; one module; certificate scans go in a document gallery |
| Company value, project value, financial strength | Capital slide and "Financial Stability" slide | One Stats collection; one stats module |
| Equipment | Equipment chart slide and "Specialized Equipment" slide; the same title is also stamped on the client-register pages | One Equipment collection; one module |
| Underground utilities | Core expertise, Underground Utility Networks, Utility Installation Expertise, Technical Capabilities, plus 7 photo-only slides with the same title | One service page with sections; the photos go to the service gallery |
| Building services | Building Works, Design & Build Capabilities, Building Construction Services, Structural Renovation | Three services: Building & Design-Build, Fit-Out, Structural Renovation |
| Health, safety, environment | "Safety & Environmental Commitment", "Health & Safety Performance", "Environmental Responsibility", ISO mentioned 5 times | One HSE page; one module per topic; ISO comes from the Certifications collection |
| Quality | Quality Control & Testing, "Quality Certification" claim, Integrated Management System mentioned inside Project Management | One Quality module |
| Training | Own slide, plus inside HSE and Project Management | One Training module |
| Leadership | Leadership slide, org chart and a second bio for Eng. Mustafa inside Project Management | One People collection; leadership module and org-chart module read from it |
| Qatar Rail | 20 register rows, clients slide, recognition slide, core expertise | Rows become projects; one client record; one Recognition module; one featured case study |
| Client and project lists | 92-row register, then "Prestigious Clients" restates it by client | Projects collection is the only source; the client list is generated from it |
| Project photos | Same project spread over 3 to 5 slides (R/C Sports Center 5, QMC 3, Avanceon 3) | One project with one gallery |
| Slogans and promises | The "leading Qatar-based contractor" line 3 times; on-time / on-budget promise 3 times | One tagline record; one value-proposition module |
| Template leftovers | "Page 4 of 50" and "Page 24 of 50" footers; slide headings numbered 27, 43 | Dropped |

## 3. Architecture: pages made of reorderable modules

Each page is a record listing its sections in order (a blocks field in the admin panel, shown below as JSON); each section names a module, a variant, and optional overrides. Modules read their data from collections.

```
Page config (ordered sections)
   → Section (module + variant)
       → Module (reusable component)
            → Collections (projects, services, clients)
            → Photo slots (image manifest)
```

A page's sections are rendered top to bottom in the order of the array; moving an entry moves the section.

```json
{
  "slug": "services/underground-utilities",
  "seo": { "title": { "en": "...", "ar": "..." }, "description": { "en": "..." } },
  "sections": [
    { "id": "intro",   "module": "hero.page",           "variant": "image-right", "enabled": true },
    { "id": "scope",   "module": "service.detail-list", "source": "service:underground-utilities" },
    { "id": "photos",  "module": "gallery.showcase",    "variant": "masonry", "source": "service:underground-utilities" },
    { "id": "work",    "module": "projects.grid",       "filter": { "service": "underground-utilities" }, "limit": 6 },
    { "id": "quote",   "module": "cta.banner" }
  ]
}
```

**Section fields**

| Field | Meaning |
|--------------|--------------------------------------------------|
| `id` | Unique per page; becomes the anchor link (`#work`) |
| `module` | Which component renders |
| `variant` | Layout option the module offers |
| `enabled` | Hide a section without deleting it |
| `source` / `filter` | Which record or subset of a collection to show |
| `props` | Per-section overrides of headline, intro text, button label |
| `theme` | `light`, `tint`, `dark` or `auto` (auto alternates so neighbours never share a background) |

**Rules that make reordering safe**

1. A module owns its own vertical padding and background, so any order looks intentional.
2. A module never assumes what comes before or after it.
3. The same module can appear on several pages, or twice on one page with different filters.
4. A module with no data (for example an empty gallery) renders nothing in production.
5. Header and footer are global and are not part of the reorderable list.
6. If the first section is a hero, the header switches to its transparent style automatically.

## 4. Section module library

28 modules cover every page. Each is built once and configured through variants and data.

| Module ID | Purpose | Data source | Variants |
|--------------------|-------------------------------|--------------|--------------------|
| `hero.home` | Full-bleed opening: headline, sub-line, two buttons | Manual | Image, video, slideshow |
| `hero.page` | Page title, breadcrumb, short intro | Manual | Plain, image-right, image-background |
| `rich.text` | Heading, body copy, optional image | Manual | Image left, image right, text only, two columns |
| `stats.strip` | Headline numbers (project value, workforce, years) | Stats | 3, 4 or 6 columns |
| `statement` | One pull-quote or mission line | Manual | Centered, side-bar |
| `feature.cards` | Icon + title + short text tiles (values, principles, benefits) | Manual list | 3 or 4 columns, icon or number |
| `process.steps` | Numbered stages (risk process, delivery approach) | Manual list | Horizontal, vertical |
| `timeline` | Company journey 2007 to today | Milestones | Horizontal, vertical |
| `service.grid` | Tiles linking to each service | Services | Cards, list, icon grid |
| `service.detail-list` | Capability blocks inside a service (wet utilities, dry utilities, HDD) | Service record | Tabs, accordion, stacked |
| `capability.matrix` | Materials and sizes (DI 300 to 1600 mm, GRP 1600 mm, HDPE 315 mm) | Service record | Table, chips |
| `projects.featured` | Hand-picked projects | Projects (`featured`) | Carousel, 3-up grid, large single |
| `projects.grid` | Browsable projects with filters | Projects | Filterable grid, list, compact |
| `project.header` | Name, client, status, key facts (project page only) | Project | Fixed |
| `gallery.showcase` | Curated photo strip (up to 6) | Project, service, or picked photos | Hero + thumbs, filmstrip, mosaic |
| `gallery.full` | Complete photo gallery with phase filters and lightbox | Project or service | Masonry, uniform grid, phase tabs |
| `compare.slider` | Before/after slider for two photos | Photo pair | Horizontal, vertical |
| `clients.logos` | Client logo wall grouped by sector | Clients | Grid, marquee, grouped by sector |
| `recognition` | Appreciation letters and awards (Qatar Rail) | Documents | Card, full-width |
| `certifications` | ISO badges, registrations, certificate scans | Certifications | Badges, list, document gallery |
| `leadership` | Chairman, MD, Deputy MD, Contractor Representative | People | Cards, large portraits |
| `org.chart` | Departments and roles | People | Tree, department list |
| `equipment` | Fleet counts by type | Equipment | Bar chart, table, icon grid |
| `careers.list` | Open roles with apply button | Jobs | List, cards |
| `contact.form` | Enquiry or quote form | Config | Full, compact |
| `contact.details` | Address, phone, email, hours, map | Offices | Split, stacked |
| `faq` | Questions and answers (also outputs SEO markup) | Manual list | Accordion |
| `cta.banner` | Closing call to action ("Request a quote") | Manual | Solid, image-background |

## 5. Default page compositions

These are starting orders; every list can be rearranged, trimmed or extended with any module from section 4.

| Page | Default order (top to bottom) |
|------------------|--------------------------------------------------------|
| Home | `hero.home` → `stats.strip` → `service.grid` → `projects.featured` → `feature.cards` (why DIC) → `clients.logos` → `certifications` (badges) → `cta.banner` |
| About | `hero.page` → `rich.text` (story) → `timeline` → `stats.strip` → `leadership` → `org.chart` → `equipment` → `certifications` → `cta.banner` |
| Services overview | `hero.page` → `service.grid` → `feature.cards` (approach) → `projects.featured` → `cta.banner` |
| Service page (template for all 7) | `hero.page` → `rich.text` (intro) → `service.detail-list` → `capability.matrix` (where relevant) → `gallery.showcase` → `projects.grid` (filtered to this service) → `faq` → `cta.banner` |
| Projects | `hero.page` → `projects.grid` (all filters on) → `cta.banner` |
| Project page (template) | `project.header` → `gallery.showcase` → `rich.text` (narrative) → `gallery.full` → `recognition` (if any) → `projects.grid` (related, 3) → `cta.banner` |
| Clients | `hero.page` → `clients.logos` → `recognition` → `projects.featured` → `cta.banner` |
| Quality, HSE & Sustainability | `hero.page` → `rich.text` → `certifications` → `feature.cards` (quality control and testing) → `feature.cards` (HSE) → `process.steps` (risk management) → `feature.cards` (training) → `cta.banner` |
| Careers | `hero.page` → `rich.text` → `feature.cards` (benefits, training) → `careers.list` → `contact.form` (compact) |
| Contact | `hero.page` → `contact.form` → `contact.details` |

The project page is the only template with a suggested fixed start (`project.header` first) because every project needs its facts visible at the top; the rest of its sections can move.

## 6. Projects and the photo gallery

Every one of the 92 register projects is a record; the ones with photos get a full page with their own gallery.

### 6.1 Two levels of project

| Level | Projects | What the visitor gets |
|----------------|----------------------|------------------------------------------|
| Register entry | All 92 | Card in the filterable list: name, client, service, scope line, value band or hidden, cover photo or placeholder. Opens a side drawer with the facts. |
| Case study | 8 to 10 to start; any project with at least 3 photos can be promoted | Full page: header, photo showcase, narrative, full gallery, related projects |

Promotion is one switch on the record (`caseStudy: true`), not a redesign.

### 6.2 Project record

| Field | Type | Notes |
|--------------------|-----------------|------------------------------------------|
| `slug` | text | URL, for example `qmc-heritage-buildings` |
| `name` | EN / AR text | |
| `client` | reference | Ashghal, Qatar Rail, Kahramaa, private |
| `sector` | choice | Government, Semi-government, Private |
| `services` | references (many) | For example Underground Utilities + Civil Maintenance |
| `location` | text | Area, for example Mesaieed |
| `status` | choice | Completed, Ongoing |
| `years` | start, end | Optional |
| `value` | number | Kept in data; not automatically shown |
| `valueDisplay` | choice | Exact, band ("QAR 10M to 25M"), hidden. Per project, because clients may restrict disclosure |
| `summary` | EN / AR text | One or two sentences for cards |
| `narrative` | rich text | Challenge, approach, outcome (case studies) |
| `facts` | label / value pairs | Length of pipeline, pipe size, floor area, duration |
| `featured`, `caseStudy` | yes / no | Control homepage and page generation |
| `cover` | photo reference | Card and social preview image |
| `gallery` | list of photos | Section 6.3 |
| `documents` | list | Appreciation letter, certificate (optional) |
| `registerNo` | number | Row number from the company profile, for traceability |

### 6.3 Photo record (one entry per image in a project gallery)

| Field | Notes |
|--------------|----------------------------------------------|
| `file` | Original upload; the site generates sizes and formats |
| `alt` | EN / AR; required before publishing |
| `caption` | EN / AR; optional |
| `phase` | Design, Before, During, After, Aerial, Detail |
| `space` | Optional label for interiors (Reception, Main Hall, Atrium) |
| `order` | Position inside the gallery |
| `isCover` | Marks the card image |
| `showcase` | Yes places it in the curated strip at the top of the page |
| `pairId` | Links a Before and After photo for the compare slider |
| `takenOn`, `credit` | Optional |

The phase and space fields come from how the deck already groups photos: QMC "before / while execution", and Avanceon by room.

### 6.4 Project listing page

- Filters: sector, service, client, status, value band, year, plus keyword search.
- Views: grid (default), list. Sort by newest, value, or name.
- Card shows the cover photo, or a grey placeholder with the project name if no photo exists yet.
- Filter state is kept in the URL, so filtered lists can be shared and indexed.

### 6.5 Photo showcase and gallery

Every case study has two designated photo areas, both driven by the same photo records.

| | Photo showcase (`gallery.showcase`) | Full gallery (`gallery.full`) |
|---------|-------------------------------|-------------------------------|
| Purpose | Curated first impression | Complete record of the project |
| Size | Up to 6 photos flagged `showcase` | All photos, recommended 6 to 40 |
| Layouts | Hero with thumbnails, filmstrip, mosaic | Masonry, uniform grid, phase tabs |
| Filters | None | By phase and by space |
| Extras | Auto-plays only if the visitor opts in | Before/after sliders where `pairId` exists |

**Shared behaviour**

- Lightbox with keyboard arrows, swipe, pinch zoom, caption, photo counter and close on Escape.
- Each photo has a shareable link (`/projects/qmc-heritage-buildings#photo-12`).
- Responsive AVIF and WebP with a blurred preview while loading; lazy-loaded below the fold.
- Right-to-left mirroring in Arabic.
- Photo download is off by default.
- If a project has no photos, both modules render nothing in production; in development they show labelled slots (section 8).

**Gallery modules are also usable outside projects.** A service page can show a `gallery.showcase` pulled from that service's best photos, and the homepage can show one built from hand-picked photos across projects.

## 7. Content collections

Eight collections hold every fact on the site; modules read from them. Project and photo records are in section 6.

| Collection | Records from the deck | Key fields | Feeds |
|------------|--------------------|--------------------|----------------|
| Services | 7 (Underground Utilities, Building & Design-Build, Fit-Out, Structural Renovation, Roads & Earthworks, Steel Works, Civil Maintenance) | name, slug, summary, capability blocks, sizes and materials, cover photo, related services | `service.grid`, `service.detail-list`, `capability.matrix` |
| Clients | About 27 organisations across government, oil and gas, and private | name, sector, logo, public-display permission | `clients.logos`, project filters |
| Certifications | ISO 9001, ISO 14001, ISO 45001, commercial registration, Chamber membership, tax registration | name, number, issuer, issue and expiry dates, certificate scan, display order | `certifications` |
| People | 4 leaders, about 30 named staff on the org chart | name, title, department, reports-to, portrait, bio (leaders) | `leadership`, `org.chart` |
| Stats | Company value, current project value, completed value, workforce, years active | label, value, unit, note, last-verified date | `stats.strip` |
| Equipment | About 20 types with counts | type, count, category | `equipment` |
| Milestones | 2007 founding, 2015 growth, 2022 recognition, today | year, title, text | `timeline` |
| Jobs and offices | To be supplied | title, department, location, description; office address, phone, hours | `careers.list`, `contact.details` |

**Rules for data entry**

- Anything that changes over time (years in business, project counts) is calculated, not typed. "Since 2007" stays true; "17 years" does not.
- Every stat carries a last-verified date so stale numbers can be found.
- Every expiring certificate stores its expiry date; the site hides a badge automatically once the date has passed, so an out-of-date claim never stays live.
- Every client and project has a public-display flag, so anything not cleared for publication can stay in the data but out of the pages.

## 8. Photo slots and placeholders

Every image on the site is a named slot with a fixed ratio and minimum size, so the site can be built now and photos added later without touching templates.

| Slot name | Used by | Ratio | Minimum size | Count |
|------------------------|--------------------|----------|------------------|----------------|
| `home/hero` | `hero.home` | 16:9 | 2400 × 1350 px | 1 to 5 |
| `page/<slug>/hero` | `hero.page` | 16:9 | 2400 × 1350 px | 1 per page |
| `service/<slug>/cover` | Service cards, service hero | 4:3 | 1600 × 1200 px | 1 per service |
| `service/<slug>/gallery` | Service photo showcase | Free | 1800 px long edge | 6 to 12 |
| `project/<slug>/cover` | Project cards, social preview | 4:3 | 1600 × 1200 px | 1 per project |
| `project/<slug>/showcase` | `gallery.showcase` | 3:2 or 16:9 | 2400 px long edge | Up to 6 |
| `project/<slug>/gallery` | `gallery.full` | Free | 1800 px long edge | 6 to 40 |
| `people/<slug>/portrait` | `leadership`, `org.chart` | 4:5 | 800 × 1000 px | 1 per leader |
| `clients/<slug>/logo` | `clients.logos` | Free | SVG, or PNG with transparent background | 1 per client |
| `certifications/<slug>/scan` | `certifications` | A4 portrait | 1600 px long edge | 1 per certificate |

**Placeholder behaviour**

- Development and preview: an empty slot shows a labelled grey tile ("Photo slot: project/qmc-heritage-buildings/cover, 4:3") so the team can see what is missing.
- Production: empty slots never show a placeholder to visitors. A card without a photo uses a neutral branded tile; a gallery with no photos disappears.
- A build report lists every empty slot, grouped by page, so photo collection can be tracked.

**File handling**

- Originals are uploaded once; the build creates 400, 800, 1200, 1600 and 2400 px widths in AVIF and WebP, plus a small blur preview.
- File names follow `<project-slug>/<phase>-<nn>.jpg` (for example `qmc-heritage-buildings/during-03.jpg`).
- Photos are uploaded through the admin panel's media library; each photo's slot, alt text, phase and order are saved as database fields, and the files sit in file storage. Until original photos arrive, seed images go in through the same library.
- The deck contains usable project photos (R/C Sports Center, QMC, Avanceon, mosque, mall fit-outs, utility works). They can seed the slots as temporary content until original files arrive from the site teams.

## 9. Admin panel and rearranging sections

Editors manage all content, photos and section order in an admin panel built into the site with Payload CMS from the first build; nothing goes live until it is published.

| Task | How it works in the admin panel |
|------------------------|--------------------------------------------|
| Reorder sections on a page | Drag a section by its handle in the page's Sections list |
| Hide or show a section | Toggle `enabled` on the section |
| Add a section | Add a block and pick a module from the list in section 4 |
| Change a section's layout | Choose a variant from a dropdown |
| Edit text | Forms with English and Arabic tabs; a missing Arabic value falls back to English |
| Add, replace or remove photos | Upload to the media library, attach to a project, service or slot; set cover, showcase, phase, alt text and order |
| Add, edit or remove projects | Projects list: create a record with the fields in section 6.2, save as draft or publish |
| Add, edit or remove clients, services, certifications, people, jobs | Same, one list per collection in section 7 |
| Reorder items inside a module | Drag handle or `order` field in the list |
| Preview | Live preview shows the real page with unpublished changes |
| Restore an earlier version | Version history per record, one-click restore |

**Publishing rule:** no edit goes live silently. Every change is saved as a draft, previewed, and published by a person with publishing rights; version history records who changed what and when.

**Deleting:** a client or service that projects still use cannot be deleted until those projects are reassigned, so no page is left with a broken reference.

**What can and cannot move**

| Element | Reorderable | Notes |
|------------------------------|------------|------------------------------|
| Sections inside a page | Yes | Any order, any repeat |
| Header, footer | No | Global, edited once |
| Order of items inside a module (services in the grid, logos in a group) | Yes | Set by an `order` field in the collection |
| Fields inside a project page | Partly | Header stays at the top; every section below it moves |
| Menu items | Yes | Separate navigation config, same mechanism |

**Roles**

| Role | Can do |
|--------------------|----------------------------------------------|
| Administrator | Everything, including users, roles and site settings |
| Editor | Create, edit, reorder and publish content and photos |
| Contributor | Edit drafts and upload photos; cannot publish |

**Hosting and upkeep**

- Payload CMS is open source under the MIT licence with no per-user or usage fees; the costs are hosting, a database and file storage for photos ([overview and pricing](https://focusreactive.com/payload-cms-overview/)).
- It is self-hosted: its managed cloud service no longer accepts new projects, so the hosting choice is made at the start (open item 12).
- Daily database and photo backups, with a tested restore.
- Everyday editing needs no developer. Adding a new field type or a new module does, because the structure is defined in code.

## 10. SEO, languages, performance and accessibility

**SEO**

- Statically generated pages with unique title, description and social preview image per page, set in the page config.
- Structured data: Organization, Service, BreadcrumbList and ImageObject on project and service pages.
- Clean URLs (`/services/underground-utilities`, `/projects/qmc-heritage-buildings`), XML sitemap, robots file, canonical tags.
- Service pages target one theme each, for example underground utilities contractor in Qatar, fit-out contractor in Doha, structural strengthening and FRP carbon fibre in Qatar.
- Every photo has descriptive alt text; galleries are crawlable, not script-only.

**Languages**

- English default and Arabic with right-to-left layout, under `/en` and `/ar`.
- Every text field in the collections has EN and AR values. A missing Arabic value falls back to English and is flagged in the build report.
- Layouts use logical spacing so modules mirror correctly with no separate design.

**Performance**

- Targets: Largest Contentful Paint under 2.5 seconds on mobile, layout shift under 0.1.
- Only the hero image loads eagerly; gallery images load as they approach the screen.
- Filtering on the project list runs in the browser over a prebuilt index, with no server wait.

**Accessibility**

- WCAG 2.2 AA: keyboard navigation, visible focus, colour contrast, reduced-motion respected.
- Lightbox traps focus, announces photo number and caption, and closes with Escape.
- Forms have labels, error messages, and spam protection that does not rely on image puzzles.

**Forms and analytics**

- Quote and tender enquiries go to a configured mailbox and are stored; fields: name, company, phone, email, project type, scope, estimated budget band, attachment.
- Analytics load only after cookie consent.

## 11. Open items and build order

Twelve items need confirming before content entry; the build then runs in eight steps, each signed off before the next starts.

### 11.1 Open items

| \# | Item | Why it matters |
|----|--------------------------------------|--------------------------------------|
| 1 | Commercial registration shows expiry 24 Oct 2025 | Certificate badge hides itself once expired; need the renewed date |
| 2 | ISO 9001 shown as "2026" (likely 2015) | Published certification claim must be exact |
| 3 | Leadership names and titles differ between slides (Nada Ibrahim vs Nada Mustafa Khalil; Mohamed Mustafa vs Mohamed Mustafa Khalil; Founder & MD vs Managing Partner vs General Manager) | Feeds the People collection |
| 4 | Phone number is incomplete; address is a placeholder; two domains (dicqa.com and dohainternational.qa) | Contact page and email addresses |
| 5 | Register totals about QAR 461M across 92 projects, against "450M completed" plus "100M current"; contract range stated as QAR 825,000 to 69,955,140 while the register goes down to 62,394 | Stats strip and value display |
| 6 | Which register projects are ongoing | Status filter and the completed-value stat |
| 7 | QAFAC described as "Qatar Aviation Group" | Client name accuracy |
| 8 | Branches in the USA, Egypt and Saudi Arabia alongside Qatar | Offices collection and the "Qatar-based" wording |
| 9 | Permission to name Qatar Armed Forces and US Army Corps of Engineers; Qatar Olympic Committee has no project in the register | Public-display flags |
| 10 | Mall fit-outs described as "supervision" under a "Design & Execution" heading | Service and scope wording |
| 11 | Which 8 to 10 projects become case studies, and which have photos | Determines first gallery content |
| 12 | Hosting for the site and admin panel (platform, database, photo storage, backups) and who holds administrator accounts | Payload CMS is self-hosted; this sets running cost and access control |

### 11.2 Build order

1. **Approve this spec.** Confirm the module list, page compositions, project model, Payload CMS and the hosting choice.
2. **Foundation.** Set up the Next.js and Payload project with database, photo storage, user roles and English and Arabic; deploy it to a preview address.
3. **Data.** Create the collections in the admin panel and import the 92-row register, cleaned and flagged per items 5 to 9 above.
4. **Module library.** Build the modules one at a time as blocks on a preview page with placeholder data; review each.
5. **Page assembly.** Compose all pages from the Sections list; check that reordering works from the admin panel on each.
6. **Project pages and galleries.** Listing, filters, drawer, case-study template, showcase, full gallery, lightbox.
7. **Content and photos.** Enter copy, seed slots with deck photos, produce the empty-slot report, and train the editors on roles, drafts and publishing.
8. **SEO, Arabic, performance and launch.** Final pass, backups switched on and restore tested, then go live.

## Change log

**19 Sep 2026:** the admin dashboard moved from Phase 2 into the first build, using Payload CMS.

- Section 1: stack line names Payload CMS; admin dashboard removed from the out-of-scope list; photo wording updated.
- Section 3: pages described as records with a blocks field.
- Section 8: photo storage now runs through the admin panel's media library.
- Section 9: rewritten as "Admin panel and rearranging sections", with roles, publishing rule and hosting notes.
- Section 11: open item 12 (hosting) added; build order rewritten, still eight steps.

Earlier versions stay available in the document history.
