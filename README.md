# Atlantis Property Services

Public website for Atlantis Property Services. Astro static site, deployed on Vercel from GitHub.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## Integrations

Set in `.env` locally or in the Vercel project settings (see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (`G-…`) |
| `PUBLIC_GSC_VERIFICATION` | Google Search Console HTML tag content |

Forms email `info@atlantisps.com.au` via FormSubmit. Confirm the first delivery in that inbox when going live.

Social profile URLs: set `linkedin` / `facebook` / `instagram` in `src/data/site.ts` when accounts exist.

Sitemap is generated at build to `/sitemap-index.xml` (linked from `robots.txt`).

## GitHub + Vercel

Push to `main` (or connect the repo in Vercel) for production deploys.

See `PRD.md` for full product requirements.
