# testsite

A minimal personal static site with a clean design system, practical how-to writing, and GitHub Pages deployment.

## What this is

- A public notebook for practical notes and reusable steps.
- A clean reference implementation of a small Astro static site.
- intentionally limited in scope.

## What this is not

- Not a productivity brand, course, or template store.
- Not a place for broad editorial content.

## Stack

- Astro
- CSS custom properties for design tokens
- TypeScript
- GitHub Pages via GitHub Actions

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run preview` — preview production build locally

## Structure

- `src/pages/` — routes
- `src/layouts/` — shared layout
- `src/styles/global.css` — design tokens and typography
- `public/` — static assets
- `.github/workflows/deploy.yml` — Pages workflow

## Design system

- Tokens live in `src/styles/global.css` using CSS custom properties.
- Layout uses simple utility classes and semantic HTML.
- Typography uses Inter for body and Merriweather for headings.

## Deploy

- Push to `main` triggers GitHub Actions.
- GitHub Pages source must be set to `GitHub Actions`.
- Published URL: `https://ismaelmmachado.github.io/testsite/`

## Editing content

- Keep copy short and practical.
- Prefer plain HTML semantics over component abstraction.
- If a section cannot be reused, remove it.

## Branching and releases

- Default branch: `main`.
- Commits to `main` are allowed by design for this project.
- For experiments, use short-lived feature branches.
