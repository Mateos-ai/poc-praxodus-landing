# Praxodus — Landing Site

Bilingual (English / עברית) marketing site for Praxodus — Industrial AI Adoption.
Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS v4**.

## Local development

```bash
npm install
npm run dev
# open http://localhost:3000/en   (Hebrew: /he)
```

> The `/` root redirects to `/en` only in the static build. In dev, open `/en` directly.

## Design system — "Steel & Signal"

- **Palette:** navy `#0E1A2B`, teal `#0FA697`, steel `#33475B`, fog `#E7ECF1` — tokens in `app/globals.css`.
- **Type:** Rubik (display) + Assistant (body) + IBM Plex Mono (data), self-hosted via `next/font` with Hebrew subsets.
- **i18n:** `app/[locale]` routes; English is LTR-primary, Hebrew is RTL. All copy lives in `lib/dictionaries.ts`.

## Deployment — GitHub Pages

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds a static
export and publishes it to GitHub Pages.

**One-time setup:** in the repo, go to **Settings → Pages → Build and deployment →
Source** and select **GitHub Actions**.

The site is served under a base path (`/poc-praxodus-landing`), configured via the
`NEXT_PUBLIC_BASE_PATH` env in the workflow.

### Build the static export locally

```bash
npm run build:pages   # outputs to ./out with the /poc-praxodus-landing base path
npx serve out         # preview
```

## Project structure

```
app/[locale]/            home + inner pages (what-we-do, how-it-works, results, team, contact)
app/[locale]/…           legal pages (accessibility, privacy, terms)
components/               Header, Footer, PageHero, CtaBand, LanguageSwitcher, …
lib/dictionaries.ts      all EN/HE content
lib/i18n.ts, lib/config.ts   locale + base-path helpers
public/                  logo.png, favicon.ico, index.html (root redirect)
```
