# AGENTS.md

This file provides guidance to Codex (Codex.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — start Vite dev server on port 3000 (auto-opens browser, host exposed for LAN).
- `pnpm build` — type-check (`tsc -b`) then produce a production bundle in `dist/`.
- `pnpm lint` — run ESLint over the project (uses flat config at `eslint.config.js`).
- `pnpm preview` — serve the built `dist/` locally to verify the production output.

Package manager is **pnpm** (lockfile committed). Node 24.x is required (`engines.node`).

## Architecture

Single-page React 19 portfolio site, bundled with Vite 8 and deployed to Vercel.

### Routing & layout
- Entry is `src/main.tsx`. `BrowserRouter` mounts a single layout route (`App`) wrapping four lazy-loaded page routes: `/` (AboutPage), `/projects`, `/driving`, `/resume`. Unknown paths redirect to `/`.
- `App.tsx` renders `Header` / `Footer` and an `<Outlet context={{ t, lang }} />`. Pages read this via `useOutletContext<LayoutContext>()` (type lives in `src/pages/AboutPage/AboutPage.tsx`).
- Vercel deploy uses SPA-style rewrites (`vercel.json`): every path serves `index.html`, and `/assets/*` gets a 1-year immutable cache header.

### State: theme + language
Two long-lived hooks own all global UI state (no Context, no store):
- `useTheme` (`src/hooks/useTheme.ts`) — persists `'dark' | 'light'` to `localStorage` under `iliyabrook.theme` and writes `document.documentElement.dataset.theme`.
- `useLanguage` (`src/hooks/useLanguage.ts`) — persists `'en' | 'ru' | 'he'` under `iliyabrook.lang`, reads `navigator.language` as a fallback, and sets `<html lang>` plus `<html dir>` (`he` is RTL).

Both hooks live in `App` and are passed down explicitly through `Header` props and the router `Outlet` context — keep this prop-drilled flow when adding new globals rather than introducing a context.

### i18n
- All copy is centralized in `src/i18n/copy.ts` as `SITE_COPY: Record<Lang, SiteCopy>`.
- `src/i18n/types.ts` is the source of truth for the `SiteCopy` shape — adding/removing fields requires updating all three language records or TS will fail the build.
- Pages never inline strings; they pull from `t = useOutletContext().t`.

### Styling system
- Global styles are imported once via `src/index.css`, which pulls in (in order) `fonts.css`, `tokens.scss`, `layout.scss`, `typography.scss`, `elements.scss`, `components.scss` from `src/styles/`.
- Design tokens (colors, motion, shadows, hero gradient) live in `src/styles/tokens.scss` as CSS variables on `:root`, with `&[data-theme='light']` overrides — that's how theme switching works (no class swap, no JS-driven styles).
- Per-component visual styles use **CSS Modules with SCSS** (`*.module.scss` next to the component). Reach for these instead of editing globals when styling a single component.

### Component conventions
- One folder per component/page in `src/components/<Name>/` and `src/pages/<Name>/`, each with an `index.ts` barrel re-exporting the named export. Import from the barrel (`@/components/Header`), not the file.
- Path alias `@/*` → `src/*` is configured in both `vite.config.ts` and `tsconfig.app.json` — use it instead of long relative paths.
- Components are function components with named exports (no default exports except `App`).

### Build pipeline
- `vite.config.ts` runs `@vitejs/plugin-react` plus `@rolldown/plugin-babel` with the React Compiler preset (`reactCompilerPreset()`) — the React Compiler is enabled, so avoid hand-written `useMemo`/`useCallback` unless profiling shows it's needed.
- TypeScript uses the bundler-mode setup in `tsconfig.app.json` with strict-ish flags (`noUnusedLocals`, `noUnusedParameters`, `verbatimModuleSyntax`, `erasableSyntaxOnly`). `verbatimModuleSyntax` means **type-only imports must use `import type { ... }`** — mixing values and types in one import will fail to build.

### External data
`ProjectsPage` (`src/pages/ProjectsPage/ProjectsPage.tsx`) fetches GitHub stars/forks for the configured repos and caches them in `localStorage` under `gh-stats:v1` with a 24h TTL. When changing the project list in `i18n/copy.ts`, items with `stats: true` need a matching `repo` field that exists under the `IliyaBrook` GitHub org.

## Working in this repo

### Verify edits with WebStorm MCP
After editing any source file, use the WebStorm MCP tools to detect and fix syntax / type errors before reporting the task as done. This step is required for code edits, not for documentation-only changes. If the WebStorm MCP server is unavailable, fall back to `pnpm build` and `pnpm lint`.
