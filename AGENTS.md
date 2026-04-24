# AGENTS.md

This document describes the project architecture for AI agents and developers working in this codebase.

## Project Overview

A personal portfolio site for Alex Rivera — a full-stack developer and designer. Built with TanStack Start and deployed on Netlify. Features a masonry image gallery with Netlify Image CDN optimization, project showcase, about page, and a Netlify Forms contact page with social links.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| Images | Netlify Image CDN |
| Forms | Netlify Forms |
| Language | TypeScript 5.7 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
content/               # Markdown content (Content Collections)
  blog/                # Blog posts (title, date, summary, tags, author)
  projects/            # Project entries (title, description, tags, github, liveUrl, image)
  jobs/                # Work experience (jobTitle, company, startDate, endDate, location, tags)
  education/           # Education entries (school, summary, startDate, endDate, tags)

public/
  headshot-on-white.jpg  # Profile photo used on About page (via Netlify Image CDN)
  contact.html           # Required static file for Netlify Forms detection in SPA mode
  favicon.ico

src/
  components/
    Nav.tsx              # Fixed top navigation; uses useRouterState() for active link detection
    ui/                  # Radix UI-based primitives (badge, card, separator, hover-card, checkbox)
  lib/
    utils.ts             # cn() helper (clsx + tailwind-merge)
  routes/
    __root.tsx           # Shell layout (shellComponent): renders <Nav /> + <main className="pt-16">
    index.tsx            # Home: hero, skills strip, featured projects teaser, CTA
    about.tsx            # About: bio with headshot, skills grid, career timeline, values
    gallery.tsx          # Gallery: masonry grid, category filters, lightbox, Netlify Image CDN
    projects.tsx         # Projects: card grid from Content Collections
    contact.tsx          # Contact: Netlify Forms + social links sidebar
    resume.tsx           # Resume: work history + education from Content Collections
    blog/$slug.tsx       # Blog post detail
  styles.css             # Tailwind CSS 4 imports + dark design tokens (oklch)
  router.tsx             # TanStack Router setup

content-collections.ts   # Zod schemas for all content types
netlify.toml             # Build config + remote image allowlist (picsum.photos, unsplash)
vite.config.ts           # Vite: TanStack Start, Tailwind, Content Collections plugins
```

## Design System

Dark editorial aesthetic ("Noir Studio"):

- **Background**: `oklch(0.08 0.01 270)` — deep navy-black
- **Primary accent**: `oklch(0.62 0.22 285)` — electric violet
- **Typography**: Inter (body), Space Grotesk (headings) via Google Fonts `@import` in `styles.css`
- **Radius**: `0.5rem` base

Custom utilities in `styles.css`:
- `.gradient-text` — violet-to-purple gradient text via `background-clip: text`
- `.gallery-grid` / `.gallery-item` — CSS `columns`-based masonry layout (no JS measurement)
- `.noise` — subtle noise texture overlay

## Key Patterns

### Image Optimization
All images route through Netlify Image CDN:
```tsx
`/.netlify/images?url=${encodeURIComponent(src)}&w=600&q=80`
```
Remote domains (picsum.photos, unsplash) are allowlisted in `netlify.toml` under `[images] remote_images`.

### Content Collections
```tsx
import { allProjects, allJobs, allEducations, allBlogs } from 'content-collections'
```
Schema changes → `content-collections.ts`.

### Netlify Forms
The contact form POSTs to `/contact.html` (a static file in `public/`). This static file is required for Netlify to detect the form during build. The React form submits with `fetch()` to avoid a page reload.

### Navigation
`Nav.tsx` uses `useRouterState()` for active link highlighting. Links: Home `/`, About `/about`, Projects `/projects`, Gallery `/gallery`, Contact `/contact`.

## Conventions

- **No comments** unless WHY is non-obvious
- TypeScript strict mode — no `any`
- Tailwind utilities for all styling; `cn()` from `@/lib/utils` for conditional classes
- Import alias: `@/` → `src/`
- Components: PascalCase; utilities/hooks: camelCase; route files: kebab-case

## Non-Obvious Decisions

- Root layout uses `shellComponent` (not a component route) — TanStack Start's pattern for the HTML document shell
- `public/contact.html` must contain the form markup for Netlify Forms to register during build; the React SPA posts to this URL
- The gallery uses CSS `columns` not Grid/Flexbox for a true masonry effect without JavaScript layout measurement
- Google Fonts loaded via `@import url(...)` in `styles.css` — works because Tailwind 4 processes CSS at build time

## Routes Summary

| Path | Description |
|------|-------------|
| `/` | Hero landing page |
| `/about` | Bio, skills, timeline |
| `/projects` | Project showcase (Content Collections) |
| `/gallery` | Image gallery with Netlify Image CDN |
| `/contact` | Contact form + social links |
| `/resume` | Work experience + education |
| `/blog/$slug` | Blog post detail |
