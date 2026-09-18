# Revamp365 / Confidential Homepage

React conversion of the Premium v2 homepage. The champagne-gold, charcoal-green and warm-ivory visual system, supplied product imagery and approved-copy inventory are preserved.

**Private client work. Do not publish the reference materials or share a public preview without authorization.**

## Start locally

Use a current Node.js **22.x** release, version **22.12 or newer**. An internet connection is required for the first npm installation.

```sh
npm install
npm run dev
```

Open `http://127.0.0.1:5173`.

On Windows, `START-DEV.bat` installs missing dependencies and starts the same development server. Unlike the former static project, opening the React `index.html` directly as a file is not supported.

## Build and preview

```sh
npm run build
npm run preview
```

The production output is `dist/`. The preview server is `http://127.0.0.1:4173`.

No Python runtime, API key, environment variable or database is required for this homepage. Account links continue to point to the existing Revamp365 website; this repository does not implement its backend.

## Deploy from Git to Vercel

| Setting | Value |
| --- | --- |
| Framework / Application Preset | **Vite** |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |
| Node.js | `22.x` |
| Root Directory | The folder containing this `package.json` and `vercel.json` |
| Environment Variables | None required |

These build settings are supplied in `vercel.json`. Do not use Next.js or Create React App presets.

Upload the **contents** of this project folder to your repository root for the simplest setup. Do not upload the ZIP itself or merge the new entry files with the old static app. See `docs/VERCEL-DEPLOY.md` for the existing-repository migration steps.

There is no fabricated lockfile in this package. The build environment could not access npm, so an npm-generated `package-lock.json` could not be produced here. Your first successful `npm install` creates it; commit that new file. Do not reuse the old static project's lockfile. Vercel uses `npm install`, not `npm ci`, in the supplied configuration.

## What is React now?

The page is made from JSX components, not an iframe or a string of injected HTML. React owns product-tour selection, per-journey scene selection, menu/dialog state, full-size image state, FAQ expansion and motion preferences.

```
Confidential Homepage/
  index.html                 React entry document
  package.json               npm dependencies and commands
  vite.config.js             React/Vite development and production build
  vercel.json                Vercel preset, commands and response headers
  src/
    main.jsx                 React StrictMode mount
    App.jsx                  Page composition and shared UI state
    components/              Header, hero, tours, cards, pricing, FAQ, dialogs, footer
    hooks/                   Motion preferences, animation lifecycle, navigation
    lib/                     Animation engine loader and scoped motion implementation
    data/                    Copy inventory and SVG icon paths
    styles/homepage.css      Preserved Premium v2 design system
  public/
    assets/images/           All nine product screenshots, logo and SVG source assets
    no-js.html               Explicit non-animated fallback for disabled JavaScript
    fallback.css             Styles for that fallback page
  scripts/check-source.mjs  Dependency-free structural validation
  tests/homepage.spec.js    Playwright tests for the real Vite build
  docs/                     Migration notes, setup and validation evidence
```

## Motion and fonts

GSAP **3.13.0** and ScrollTrigger are imported from the npm package and bundled by Vite. There is no `CACHE-GSAP.bat`, vendor fetch step, or browser-side GSAP CDN dependency in the React application. A native Web Animations/IntersectionObserver fallback remains available if the optional animation chunk cannot load.

The motion system preserves the staged hero entrance, scroll reveals, restrained desktop parallax, SVG line drawing, tour transitions and progress bar. Dialog and FAQ motion are tied to component lifecycles. Reduced-motion preferences and the footer motion switch are honored; animation cleanup runs on unmount.

Manrope and Instrument Serif are still requested through the Google Fonts stylesheet. Font files are not bundled. Without font-network access, the CSS fallback stacks are used. See `docs/ASSETS-AND-LICENSING.md`.

## Edit the site

Edit repeated feature, FAQ and tour text in `src/data/content.json`. Edit the main hero in `src/components/Hero.jsx`, pricing in `Plans.jsx`, and the closing CTA in `ClosingCTA.jsx`. Color and type tokens live at the top of `src/styles/homepage.css`.

Starter-credit, coverage and pricing claims are retained from the client's supplied snapshot, not independently updated. Get owner approval before publishing. The testimonial and unapproved platform destination remain clearly marked placeholders.

## Validation

```sh
npm run check
npm run test:install
npm test
```

The source check runs without installing npm packages. Browser tests require successful dependency installation and a Playwright Chromium download. They start the real Vite production preview automatically and include a GSAP-engine assertion.

**Validation limitation:** npm installation in the authoring environment failed with `EAI_AGAIN` while resolving `registry.npmjs.org`. Therefore the declared React **19.3.0** / Vite **8.3.0** production build and its real GSAP execution have not been verified here. JSX parsing and an explicitly separate offline React **18.2.0** compatibility run passed. Read `docs/QA-REPORT.md`; those compatibility results are not presented as production-build results.

A successful `npm run build` and `npm test` on an internet-connected machine, or a successful Vercel build followed by browser review, is required before release.
