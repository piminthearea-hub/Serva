# Chadwit NYC

**Chadwit is not Opton.** This repo is the **Chadwit** product only: a curated directory of nonprofit and community organizations in New York City for volunteers, students, and newcomers.

- **Opton** (job discovery / OPT decision-support) lives in a separate project.
- **Chadwith** (this folder) = Chadwit = the NYC nonprofit directory.

## Run

```bash
npm install
npm run dev
```

Then open the URL shown (e.g. http://localhost:5173).

## What’s here

- **Directory** — Main page: filters (category, borough, status, type), Top recommended, full org list, How to use, FAQ, Contact CTA, Disclaimer, Footer.
- **Terms of Use** and **Privacy Policy** — Chadwit-branded legal pages.
- **Data** — Static seed data in `src/data/organizations.ts` (no backend).

Docs: see `docs/Chadwit 2.md`, `docs/CURATED_NYC_LIST.md`, and `docs/DIRECTORY_IMPLEMENTATION.md`.

## Tech

- React 18 + TypeScript + Vite + Tailwind CSS 4.
