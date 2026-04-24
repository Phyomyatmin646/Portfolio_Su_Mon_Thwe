# Alex Rivera — Portfolio

A personal portfolio site built with TanStack Start, React 19, and Tailwind CSS 4. Deployed on Netlify with image optimization via Netlify Image CDN.

## Features

- **Home** — Hero landing page with skills overview and featured projects
- **About** — Bio, skills grid, career timeline, and working philosophy
- **Gallery** — Masonry image gallery with filterable categories, lightbox viewer, and Netlify Image CDN optimization
- **Projects** — Project showcase driven by Content Collections markdown files
- **Contact** — Contact form (Netlify Forms) with social links sidebar
- **Resume** — Work experience and education driven by Content Collections

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start v1 |
| Frontend | React 19 |
| Routing | TanStack Router v1 (file-based) |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom components |
| Content | Content Collections (type-safe markdown) |
| Images | Netlify Image CDN |
| Forms | Netlify Forms |
| Deployment | Netlify |
| Language | TypeScript 5.7 (strict mode) |

## Running Locally

```bash
npm install
npm run dev
```

The dev server starts at `http://localhost:3000`. Use the Netlify CLI for full feature parity (forms, image CDN):

```bash
npx netlify dev
```

This starts at `http://localhost:8888` with Netlify feature emulation.

## Content

Content is managed via markdown files in the `content/` directory:

- `content/blog/` — Blog posts
- `content/projects/` — Project entries
- `content/jobs/` — Work experience (resume)
- `content/education/` — Education entries (resume)

Each collection has a schema defined in `content-collections.ts`.

## Image Optimization

Images are served through Netlify Image CDN at `/.netlify/images`. Remote images from `picsum.photos` and `images.unsplash.com` are allowlisted in `netlify.toml`.
