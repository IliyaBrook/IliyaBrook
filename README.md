# iliyabrook.com

Personal portfolio site — Iliya Brook, Frontend / full-stack developer.

Trilingual (EN / RU / HE with RTL), light & dark themes, custom Geist + Heebo fonts.

## Stack

- Vite 8 + React 19 + TypeScript
- React Compiler enabled
- `react-router-dom` v7 for client-side routing
- Self-hosted webfonts (Geist, Geist Mono, Heebo)

## Local development

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # tsc -b + vite build → dist/
pnpm preview   # serve the production build
pnpm lint
```

Requires Node 22+.

## Deploying to Vercel

The project is preconfigured for Vercel. Vercel auto-detects:

- **Framework preset**: Vite
- **Install command**: `pnpm install` (from `pnpm-lock.yaml`)
- **Build command**: `pnpm build`
- **Output directory**: `dist`

[`vercel.json`](./vercel.json) adds:

- SPA rewrites — every path falls back to `/index.html` so deep links (`/projects`, `/resume`, …) work after hard reload.
- Long-term immutable `Cache-Control` for hashed `/assets/*` (fonts, JS, CSS).

### Option 1 — Git import (recommended)

1. `git init && git add . && git commit -m "initial commit"`
2. Push to GitHub / GitLab / Bitbucket.
3. On Vercel: **Add New… → Project → Import Git Repository**, pick the repo, click **Deploy**. No further configuration required.

### Option 2 — Vercel CLI

```bash
pnpm dlx vercel        # first run links the project
pnpm dlx vercel --prod # production deploy
```

`.vercelignore` excludes `node_modules`, `dist`, `.vscode` (the design reference folder), and `.claude`.
