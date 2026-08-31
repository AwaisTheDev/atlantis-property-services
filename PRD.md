# Product Requirements Document

**Product:** Atlantis Property Services — public website  
**Version:** 1.0  
**Date:** 25 August 2026  
**Status:** Draft for build  
**Stack:** Astro (static-first) · GitHub · Vercel  
**Primary domain (to confirm):** `atlantisps.com.au` or `atlantispropertyservices.com.au`

---

## 1. Summary

Atlantis Property Services (branded in market as a facilities / property-services company) is a Melbourne-based, customer-facing coordinator of residential and commercial property work. Customers deal with **one company**. Fulfilment happens through an **approved service-partner network that stays off the public site**.

This website’s job is to generate **job requests, quote enquiries, bookings, and urgent/emergency requests** — not to operate as a marketplace, directory, or provider comparison tool.

Launch is a **new site** (no existing hosting). Delivery is **Astro**, source in **GitHub**, production on **Vercel**, with domain, SSL, email, analytics, and legal pages in scope for go-live.

---

## 2. Goals and success

### 2.1 Business goals

| Priority | Goal |
| --- | --- |
| P0 | Capture complete customer job / quote / booking / urgent requests |
| P0 | Feel like one managed company, not an open marketplace |
| P0 | Capture service-partner applications (separate journey) |
| P1 | Local SEO for Melbourne inner suburbs and surrounding area |
| P1 | Structure that can later support partner matching, private job distribution, quotes, scheduling, and portals **without rebuilding the public site** |

### 2.2 Launch success criteria

- A mobile user can complete a request (including photo upload where used) in a few minutes.
- Every successful customer or partner submission produces a confirmation page **and** a notification email to Atlantis.
- Phone number is tap-to-call on mobile once confirmed.
- Core pages index with titles, meta descriptions, and a sitemap submitted to Search Console.
- No public listing, ranking, or comparison of individual providers.

### 2.3 Out of scope for v1

- Payment / checkout
- Newsletter / marketing automation platform
- Embedded Google Maps
- Public social feeds (icons/links only)
- Customer or partner login / portals
- Automatic postcode rejection
- Dedicated About Us page
- Partner Terms as a public onboarding contract (terms exist as a **separate legal artefact**; signed later in the partner process)

---

## 3. Brand, positioning, and voice

### 3.1 Positioning (must)

- Locally based and focused on **Melbourne’s inner suburbs**.
- **Initial servicing:** approximately **50 km from Melbourne CBD** (see open questions — brief also cites ~15 km).
- Site copy and IA must support later geographic expansion (suburb / area landing pages).

### 3.2 Positioning (must not)

- Do not say “locally owned” or make ownership claims.
- Do not present partners as competing public providers.
- Do not use marketplace language (bid, compare providers, choose a tradie from a list).

### 3.3 Unique value

One point of contact across many property services. Atlantis takes the request, coordinates suitable approved partners, manages quote/service, and remains accountable for the customer experience.

### 3.4 How it works (customer-facing)

1. Tell us what you need.  
2. We arrange it.  
3. We get it done.

### 3.5 Why choose Atlantis

Convenience, simplicity, local focus, one point of contact, breadth of services, coordinated delivery, insured and vetted partner network.

### 3.6 Visual system

**Decision (supersedes the brief’s “use more light colours” preference):** the public site is **dark-led**. Page canvas is the logo’s near-black `#0E121B`. Accents use the logo sub-wordmark golds as a **gradient pair**, not the brief’s flat `#D4AF37`.

**UI palette (authoritative for the site):**

| Token | Value | Use |
| --- | --- | --- |
| Canvas / background | `#0E121B` | Page background, header, footer, default surfaces |
| Accent gold (deep) | `#9B7336` | Gradient start, borders, secondary buttons, icon strokes |
| Accent gold (light) | `#DEB979` | Gradient end, primary CTA, links, highlights |
| Gold gradient | `#9B7336` → `#DEB979` | Buttons, underlines, section rules, hover states |
| On-dark text | `#FBFAFC` | Body and headings on `#0E121B` (matches logo wordmark on dark) |
| Muted text | Warm gold/grey derived from `#DEB979` | Captions, placeholders — keep contrast AA |

**Suggested CSS tokens:**

```css
:root {
  --color-bg: #0e121b;
  --color-gold-deep: #9b7336;
  --color-gold-light: #deb979;
  --color-text: #fbfafc;
  --gradient-gold: linear-gradient(135deg, #9b7336 0%, #deb979 100%);
}
```

**Logo mark palette (do not flatten the “A” mark):**

| Token | Value | Where it appears |
| --- | --- | --- |
| Gold gradient light stop | `#F9D493` | “A” mark gradient start |
| Gold gradient dark stop | `#9C7437` | “A” mark gradient end |
| Gold overlay stops | `#C59C59` → `#956F32` | 20% overlay on lower mark facets |
| Wordmark on light | `#0E121B` | Only if a light surface is introduced later |
| Wordmark on dark | `#FBFAFC` | Default — matches the site canvas |
| Sub-wordmark on light | `#9B7336` | Light-surface lockup only |
| Sub-wordmark on dark | `#DEB979` | Default lockup on `#0E121B` |

The logo **A** stays on its own gradient (`#9C7437` → `#F9D493`). UI accents use `#9B7336` → `#DEB979`. Close, but not the same — do not recolour the SVG mark to the UI stops.

**Look:** Dark, calm, professional. Gold used as light, directional gradients rather than large flat gold blocks.

**Contrast:** `#9B7336` on `#0E121B` is likely **too dark for small text**. Use `#DEB979` (or the light end of the gradient) for links and body-sized labels; reserve `#9B7336` for larger fills, borders, and gradient starts.

### 3.6.1 Typography

| Role | Face | Notes |
| --- | --- | --- |
| Body, UI, forms, nav | **Montserrat** | Required. Load via Fontsource or Google Fonts (`latin` subset). Weights 400 / 500 for body and controls; 600 / 700 for buttons and nav. |
| Headings | Montserrat | Same family unless a separate display face is supplied later. Use 600–700. |
| Fallback | `system-ui, sans-serif` | Until the webfont loads. |

Do not add a second decorative font at launch. Line length ~60–75 characters; body size at least 16px on mobile.

### 3.7 Logo assets

| File | Wordmark | Use on |
| --- | --- | --- |
| `brand/logo-on-dark.svg` | Near-white `#FBFAFC` | **Primary.** Site canvas `#0E121B` — header, footer, all default pages |
| `brand/logo-on-light.svg` | Near-black `#0E121B` | Keep in the repo for email, print, or a later light surface — not the default web header |

Both are the same lockup: gold gradient “A” mark, “ATLANTIS” wordmark, “PROPERTY SERVICES” beneath. Only the wordmark and sub-wordmark colours differ; the gold mark is identical in both. Because the site is dark-led, `logo-on-dark.svg` is the primary asset.

**Implementation notes:**

- Files were supplied as `Group 4.svg` (light-background) and `Group 3.svg` (dark-background) and have been renamed by usage.
- Text in the wordmark is **outlined paths, not live text** — safe to ship, but it cannot be edited without new artwork, and the logo needs an accessible name (`aria-label` or `alt`) wherever it is used.
- Gradient IDs are already unique per file (`paint0_linear_27_41` vs `paint0_linear_27_20`), so both can be inlined on the same page without ID collisions.
- Drop the hard-coded `width`/`height` on inline use and size with CSS off the `viewBox` (~493×341 light, ~493×346 dark).
- Each file contains a stray ~10px speck path filled `#423A30` near the sub-wordmark (`M301.813 324.213…`). Confirm it is intentional; if not, remove it before launch.
- Still required from brand: **favicon / app icons**, a **social share image** (Open Graph, 1200×630), and a **mark-only version** for small spaces such as favicons and a sticky mobile header.

**Avoid:** Clutter, complex nav, excessive pop-ups, flashy motion, large flat gold slabs, public provider comparison. The canvas is dark by design; do not force a light theme at launch.

**Accessibility:** WCAG 2.2 AA as the target (contrast, focus, labels, keyboard, tap targets, form errors).

**Mobile-first:** Primary. CTAs, forms, file upload, and tap-to-call must work well on phones.

---

## 4. Audiences

| Audience | Intent on the site |
| --- | --- |
| Residential owners | Quote / book / urgent help |
| Tenants | Cleaning, end-of-lease, maintenance |
| Landlords / investors | Turnover, presentation, maintenance |
| Property managers | Recurring and one-off coordination |
| Commercial / business | Facilities-style requests |
| Trades / service businesses | Apply to become an approved partner |

---

## 5. Product principles

1. **Atlantis is the brand the customer sees.** Partners are operational, not a shopfront.
2. **Request flow over contact form.** Fast, modern, conditional, one job at a time.
3. **Quote-led pricing.** Display “quote only” except where emergency call-out is relevant.
4. **Capture, don’t auto-reject.** Postcode is collected; Atlantis reviews out-of-area enquiries manually.
5. **Simple navigation.** Few top-level items; CTAs always obvious.
6. **Data now, platform later.** Content and submissions should be structured (collections / typed payloads) so a future backend can consume them.

---

## 6. Information architecture

### 6.1 Primary navigation

- Home  
- Services  
- FAQs  
- Become a Service Partner  
- Contact (or Contact as footer + header phone/CTA; page still required)

**Primary CTA (header + home hero):** “Tell Us What You Need”  
**Supporting:** “Request a Quote”  
**Always accessible:** Book a Service, Emergency / Urgent Service (header, home, and/or sticky mobile bar — keep nav uncluttered).

No About Us at launch.

### 6.2 Pages (v1)

| Route (proposed) | Purpose |
| --- | --- |
| `/` | Home: value, how it works, services snapshot, why Atlantis, gallery teaser, testimonials slider, CTAs |
| `/services` | All services on **one page**, grouped by category |
| `/request` | Customer job / quote / booking flow (query params for service, urgent, book vs quote) |
| `/emergency` | Urgent pathway (can be `/request?urgent=1` plus dedicated landing copy) |
| `/faqs` | 6–8 FAQs |
| `/partners` | Become a Service Partner + application |
| `/contact` | Phone, email (when confirmed), service area, CTAs |
| `/thank-you` | Customer submission confirmation + path home |
| `/partners/thank-you` | Partner application confirmation |
| `/privacy` | Privacy Policy |
| `/terms` | Website Terms |
| `/cookies` | Cookie / privacy notice (or combined with privacy if legal prefers) |

Social: header/footer icon links to LinkedIn, Facebook, Instagram (accounts created as part of launch ops). No social API.

Gallery: dedicated section on Home and/or Services; architecture must support a later `/gallery` page without a rebuild.

Testimonials: **sliding tiles** on Home (and reusable component). Empty/placeholder state if none at launch.

### 6.3 Tagline

Required on home (and optionally header). Exact wording TBD from brand/concept assets.

---

## 7. Services catalogue (content model)

Public copy should present **one coordinated offering**. Grouping for the Services page:

### Cleaning & hygiene

- Residential cleaning  
- Commercial cleaning  
- Apartment & common area cleaning  
- End-of-lease cleaning  
- Deep cleaning  
- Builders site clean  

### Property & exterior care

- Window cleaning  
- Pressure washing  
- Exterior cleaning  
- Common area maintenance  
- Property maintenance (incl. fence repairs, painting, handyman as maintenance-adjacent where it fits IA)

### Waste & removal

- Rubbish removal  
- Furniture removal  
- Property clean-outs  
- Hard waste removal  

### Move-in / move-out

- Move-in / move-out services  
- Property presentation (and related items below as presentation, not a design studio shopfront)

### Property presentation (quote-led)

- Property staging  
- Interior styling  
- Interior design  
- Furniture supply & placement  
- Property preparation  

### Building & facilities

- Facility management  
- Building support services  
- Preventative maintenance  
- Apartment turnover services  
- Strata & common property services  

**Also in the brief’s shorter list (must appear in IA / form categories):** gardening / landscaping, painting, fence repairs, handyman, pest control.

**Implementation:** Astro content collection (e.g. `src/content/services/`) with fields: `id`, `name`, `group`, `shortDescription`, `seoTitle`, `seoDescription`, `featuredOnHome`, `formCategory`. One Services page renders all groups. Future suburb/service landing pages can reuse the same collection.

**Pricing:** Quote only, except emergency call-out messaging where relevant.

---

## 8. Customer request product

### 8.1 Intent

A **job-posting style** flow: mobile-first, short screens, **conditional questions**, not one long generic form.

### 8.2 Entry points

| Entry | Pre-fill / mode |
| --- | --- |
| Tell Us What You Need | Default job request |
| Request a Quote | Quote intent |
| Book a Service | Booking intent |
| Emergency / Urgent | Urgent flag + priority copy; fewer optional steps if needed |

Service tiles and CTAs on Services should deep-link with `?service=<id>`.

### 8.3 Fields

| Field | Required | Notes |
| --- | --- | --- |
| Name | Yes | |
| Mobile | Yes | |
| Email | Yes | |
| Postcode | Yes | Captured only; no auto-reject |
| Property type | Yes | Residential or Commercial |
| Customer type | Yes | Owner, Tenant, Landlord/Investor, Property Manager, Business Representative |
| Service category/categories | Yes | Multi-select from catalogue |
| One-off or recurring | Yes | |
| Recurring frequency | If recurring | Weekly, Fortnightly, Monthly |
| Preferred date/time | Preferred | |
| Description | Yes | What they need |
| Photo / file upload | Optional | Multiple files; types/size limits documented in UX |
| Preferred contact method | Yes | Phone / SMS / email |
| Urgent / emergency | Contextual | Required path from Emergency CTA |

**Not required:** mandatory Privacy/Terms checkbox on customer forms (per brief). Still link Privacy in footer and on confirmation.

### 8.4 Flow (recommended)

1. **Need** — services (pre-selected if deep-linked), urgency, one-off vs recurring (+ frequency).  
2. **Details** — description, photos, preferred timing.  
3. **You & property** — name, mobile, email, postcode, residential/commercial, customer type, contact method.  
4. **Review & send.**

Show progress. Save-in-browser (session) if they go back. Validate per step.

### 8.5 After submit

- Redirect to `/thank-you` (simple confirmation).  
- Provide a control to return home (auto-redirect home after a short delay is acceptable if accessible and not jarring).  
- Email notification to Atlantis ops inbox with all fields + file links or attachments.  
- Store payload for ops (Vercel + email at minimum; structured JSON suitable for a future CRM/job system).

### 8.6 Service area

Copy: Melbourne inner suburbs / ~50 km of CBD (pending confirmation). Form never blocks submit solely on postcode.

---

## 9. Become a Service Partner

### 9.1 Placement

Main nav item: **Become a Service Partner**. Separate page and form from customer request.

### 9.2 Page content (must)

- Opportunity to receive **suitable** work and build an ongoing relationship.  
- **No promised volumes.**  
- Applications reviewed and approved.  
- Approval ≠ guaranteed work.  
- Approved partners must accept **separate Atlantis Service Partner Terms** before onboarding is final.  
- Future: private system for jobs, availability, and pricing — **not** a public marketplace.

### 9.3 Application fields

- Contact name  
- Business name  
- Business structure  
- ABN  
- Mobile  
- Email  
- Services / trades offered  
- General geographic service area  
- Years in business / operating experience  
- Availability for one-off and recurring work  
- Urgent / emergency availability  
- Typical response time  
- General days and usual working hours  
- Whether relevant licences are held  
- Whether appropriate insurance is held  
- **File upload:** applicable licences / certificates of currency / insurance documents (**required**)

### 9.4 Declarations (required)

Applicant agrees Atlantis may verify ABN, licences, and insurance; declares information and documents current and accurate; consents to contact about the application and future opportunities.

Atlantis may request further information. Client references not required at apply; may be requested later.

### 9.5 After submit

Partner thank-you page + email to Atlantis. No public “approved partner” directory.

---

## 10. Content requirements (non-form)

### 10.1 FAQs (~6–8)

Cover at least:

1. What services does Atlantis provide?  
2. Where do you service?  
3. How do requests and quotes work?  
4. How is a booking confirmed?  
5. Can I set up recurring services?  
6. How does Atlantis work (customer vs partners)?  
7. Optional: urgent / emergency, insurance/vetting, commercial vs residential.

### 10.2 Legal (v1)

- Privacy Policy  
- Website Terms  
- Cookie / privacy notice  
- Partner Terms: **separate document** (not the same as site T&Cs); may be PDF or a non-indexed page used in onboarding, not a customer checkbox

Lawyer/client to supply or approve final legal copy. Site ships with structure and placeholders only if legal is late — **do not invent binding legal text**.

### 10.3 Contact

Display once confirmed:

- Dedicated business phone (tap-to-call)  
- `info@atlantisps.com.au` (developer to register mailbox as part of domain setup)

Handover / training contact (ops, not public): `info@atlanticmediagroup.com.au`

### 10.4 Google Business Profile

Set up as part of launch ops (not a site feature). Align NAP with the site.

---

## 11. SEO and analytics

### 11.1 Launch SEO

- Unique title + meta description per page  
- Semantic headings, sensible URLs  
- `robots.txt`, XML sitemap, canonical URLs  
- Local keywords: Brunswick East, Melbourne inner suburbs, surrounding service area  
- Service keywords from the catalogue  
- Open Graph / social share basics  
- Fast Core Web Vitals (Astro static output)

### 11.2 Later (structure now)

Suburb and service landing pages should be addable from content collections without a new architecture.

### 11.3 Analytics

- Google Analytics (GA4)  
- Google Search Console  
- No Maps, no newsletter, no ads pixels unless added later

---

## 12. Technical architecture

### 12.1 Why Astro

- Marketing site is mostly static content → excellent performance and SEO.  
- Islands for testimonials slider, multi-step forms, file upload UI.  
- Content collections for services, FAQs, testimonials, gallery — same data later feeds a CMS or app.

### 12.2 Recommended stack

| Layer | Choice |
| --- | --- |
| Framework | Astro (latest stable) |
| UI | Astro components + small amount of client JS (or one island framework if needed, e.g. React) for forms/slider |
| Styling | Global CSS or Tailwind — tokens: canvas `#0E121B`, gold gradient `#9B7336` → `#DEB979`, Montserrat |
| Content | Markdown/MDX or JSON collections |
| Forms | Serverless API routes on Vercel **or** a form backend (e.g. Resend + upload to S3/R2/Vercel Blob) |
| Email | Transactional: Resend, Postmark, or similar → ops inbox |
| Files | Object storage with size/type limits and virus-scan strategy if budget allows |
| Repo | GitHub (private) |
| Hosting | Vercel |
| DNS | Domains already purchased; point to Vercel; SSL automatic |

### 12.3 Environments

| Env | URL | Deploy |
| --- | --- | --- |
| Preview | Vercel preview per PR | Automatic |
| Production | Chosen `.com.au` | Merge to `main` |

### 12.4 GitHub → Vercel launch path

1. Create GitHub repo; push Astro app.  
2. Import project in Vercel; link GitHub.  
3. Production branch: `main`. Preview: all other branches/PRs.  
4. Set env vars in Vercel (email API keys, GA ID, inbox addresses, upload credentials). **Never commit secrets.**  
5. Attach domain(s) in Vercel; update DNS (A/ALIAS/CNAME as Vercel specifies).  
6. Configure redirects: apex ↔ www (pick one canonical).  
7. Optional: both purchased domains — primary + 301 from the other.  
8. Enable Vercel Analytics only if desired; GA4 remains the required analytics.  
9. After DNS: Search Console property, sitemap submit, SSL check, form end-to-end test.

### 12.5 Email and domain

- Developer registers/configures **one general company mailbox** (target: `info@atlantisps.com.au`).  
- SPF, DKIM, DMARC for the sending domain (transactional + mailbox).  
- Website notification mail must not land in spam for the ops inbox.

### 12.6 Hosting / maintenance (ongoing)

Vercel covers SSL and CDN. Maintenance agreement should still cover: dependency/security updates, backups of form/file data (not only git), uptime monitoring, and issue resolution.

### 12.7 Scalability (do not paint into a corner)

Public site remains a **presentation + capture** layer.

Use:

- Stable `service` IDs  
- Typed submission payloads (customer job vs partner application)  
- Postcode as data, not hard-coded suburb lists only  
- No UI that assumes public partner profiles  

Later systems (not v1): partner profiles, service-area matching, private job distribution, partner quotes, recurring scheduling, customer/partner portals. These should consume the same IDs and payload shapes.

### 12.8 Security and privacy (v1)

- HTTPS only  
- Rate-limit form endpoints  
- File type/size allowlists  
- No PII in client-side analytics events beyond what GA policy allows  
- Privacy Policy describes collection of request and partner-application data  
- Cookie notice for GA if cookies are used  

---

## 13. Design and UX requirements

- Dark canvas `#0E121B`; gold accents as `#9B7336` → `#DEB979` gradients.  
- Montserrat for body, UI, and headings.  
- Simple header: dark-background logo, nav, phone, primary gold-gradient CTA.  
- Mobile: sticky or clearly persistent **Tell Us What You Need** + **Urgent**.  
- Testimonials as **sliding tiles**.  
- Gallery: grid or simple lightbox; no heavy animation.  
- Forms: dark fields with gold focus rings; large tap targets; clear errors; file-upload progress.  
- No provider comparison screens.

Concept and logo: follow attached brand assets from the brief.

---

## 14. Non-functional requirements

| Area | Requirement |
| --- | --- |
| Performance | Fast LCP on mobile (static Astro + compressed images) |
| Devices | Phone-first; tablet and desktop complete |
| Browser | Last two versions of Chrome, Safari, Firefox, Edge |
| Uptime | Vercel production SLA; monitor 5xx and form failures |
| Backups | Git for site; separate backup for submissions and uploads |
| A11y | WCAG 2.2 AA target |

---

## 15. Roles and handover

| Role | Responsibility |
| --- | --- |
| Business owner | Phone number, legal copy approval, testimonials/photos, social profiles, GBP, mark-only logo variant if not already available |
| Developer | Astro site, domain DNS, mailbox, Vercel, GA/GSC, forms, SEO basics |
| Handover | Training to `info@atlanticmediagroup.com.au` (content edits, Vercel, forms, DNS notes) |

**Launch date:** ASAP.

---

## 16. Open questions (resolve before or during build)

1. **Canonical domain:** `atlantisps.com.au` vs `atlantispropertyservices.com.au` (other domain 301s).  
2. **Service radius copy:** 15 km vs 50 km from CBD — site will use **one** figure.  
3. **Legal name vs trading names:** “Atlantis Property Services” vs “Atlantis Facilities Management” in the brief — which appears in header, titles, and legal pages.  
4. **Phone number** for public display.  
5. **Tagline** final wording.  
6. **Mailbox provider** (Google Workspace vs Microsoft 365 vs registrar email).  
7. **Form backend** preference (fully custom on Vercel vs form SaaS).  
8. **Testimonials and gallery** assets at launch vs placeholders.  
9. **Emergency call-out:** any public fee language or “call us” only.  
10. **Cookie approach:** GA consent banner vs essential-only until legal sign-off.  
11. **Heading face:** Montserrat for body is confirmed; confirm whether headings stay Montserrat or a second display font is supplied.  
12. **Logo artwork:** is the `#423A30` speck intentional, and is a mark-only variant available for favicon and sticky mobile header?

---

## 17. Acceptance checklist (v1)

- [ ] All IA pages live; no About Us  
- [ ] Home: how it works, why Atlantis, services snapshot, gallery, testimonial slider, CTAs  
- [ ] Services: all groups on one page; deep-link into request form  
- [ ] Multi-step customer request with all specified fields and uploads  
- [ ] Urgent pathway distinct and fast  
- [ ] Partner page + full application + document upload + declarations  
- [ ] Thank-you pages + email notifications  
- [ ] Privacy, Terms, cookie notice  
- [ ] Tap-to-call; email displayed when mailbox is live  
- [ ] Social icon links  
- [ ] Correct logo variant per background; favicon and Open Graph image in place  
- [ ] GA4 + Search Console + sitemap  
- [ ] Domain on Vercel via GitHub; HTTPS; preview deploys  
- [ ] Mobile form and upload verified on a real phone  
- [ ] No marketplace / provider comparison UI  
- [ ] Dark canvas `#0E121B`; gold gradient accents; Montserrat body; dark-background logo in the header  

---

## 18. Suggested delivery slices

1. **Foundation** — Astro app, tokens, layout, GitHub + Vercel preview.  
2. **Content pages** — Home, Services, FAQs, Contact, legal shells.  
3. **Customer request** — multi-step form, uploads, thank-you, email.  
4. **Partner** — page + application + thank-you + email.  
5. **Launch ops** — domain, mailbox, GA/GSC, GBP, social links, SEO pass, handover.

---

*This PRD is derived from `brief.md`. Brand concept and logo remain source-of-truth for visual execution.*
