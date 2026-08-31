# Atlantis Property Services

Public website for Atlantis Property Services. Astro static site, deployed on Vercel from GitHub.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321).

## GitHub + Vercel (first-time setup)

Git is initialized on `main`. To create the remote repo and deploy:

```bash
# 1. Authenticate (one-time)
gh auth login
npx vercel login

# 2. Create GitHub repo and push
gh repo create atlantis-property-services --private --source=. --remote=origin --push \
  --description "Atlantis Property Services — Melbourne property services site"

# 3. Deploy to Vercel (creates a new project)
npx vercel link    # follow prompts — link to your Vercel account/team
npx vercel --prod  # production deploy

# 4. Optional: auto-deploy on every push to main
npx vercel git connect
```

After `vercel git connect`, every push to `main` triggers a production deploy on Vercel.

## Placeholders until launch ops

- Phone number (`src/data/site.ts`)
- Legal copy on `/privacy`, `/terms`, `/cookies`
- Form email notifications (forms currently confirm in-browser only)
- Social profile URLs
- Gallery photos and testimonials
- Google Analytics / Search Console

See `PRD.md` for full requirements.
