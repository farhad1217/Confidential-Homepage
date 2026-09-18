# Migration: Premium v2 static homepage -> React / Vite

## Previous stack, verified from the original ZIP

The previous homepage used HTML, a plain CSS stylesheet, vanilla browser JavaScript, SVG assets and a motion controller. Small Node.js scripts served the files and copied them into a dist folder. GSAP/ScrollTrigger were optional external/vendor loads with a native fallback. Python scripts were QA and asset/integration utilities, not a Python web backend. Laravel Blade and Vue files in that package were integration starters; the standalone homepage was not a running Vue application.

Inspected source: `Confidential-Homepage-Premium-v2.zip`, including index.html, package.json, assets/js/interactions.js, assets/js/motion.js and tests/.

## New structure

The app now mounts with React createRoot and is composed from JSX sections and reusable components. It is not an iframe and does not use dangerouslySetInnerHTML.

| Concern | Implementation |
| --- | --- |
| Page composition | App.jsx |
| Product tours | Controlled journey and per-journey scene state |
| Modals | React state plus native dialog behavior and focus restoration |
| FAQ | React expansion state with cancellable animation |
| Navigation | Reusable sections, native disclosures, mobile dialog |
| Motion preferences | React context and operating-system preference listener |
| Scroll/SVG motion | Scoped GSAP/ScrollTrigger, with native fallback |
| Motion lifetime | Effect cleanup for animations, observers and event listeners |
| CSS and fonts | Original Premium v2 CSS and font stacks preserved |
| Deployment | Vite, Node 22.x, explicit vercel.json |
| Automated browser suite | Playwright JavaScript tests, no Python dependency |

All nine screenshot scenes, six feature cards and six FAQs remain. The source copy inventory is unchanged from the original package. Hero, pricing, closing CTA and navigation content are retained.

The legacy CDN loader, vendor caching command and vanilla UI controller are not part of the React runtime. GSAP and ScrollTrigger resolve from the installed npm package during the Vite build.

## What is intentionally not migrated

The client's Laravel/Vue application, database, authentication, billing, CRM and property-search backend are outside this homepage conversion. Links continue to point to existing destinations. The original raw reference pack, duplicate dist files and Python QA tooling are not in the new deployment package. No new Figma file is provided.

A separate static `public/no-js.html` page is explicitly available when JavaScript is disabled. It is a fallback, not the React rendering mechanism.

## Installation and verification status

The original zero-dependency package-lock is not reusable. No guessed transitive dependency lock was produced. Run npm install on a connected machine and commit its actual lockfile.

Declared release versions: React/ReactDOM 19.3.0, Vite 8.3.0, @vitejs/plugin-react 6.0.2, GSAP 3.13.0. Version declarations are not a claim of successful installation here. See QA-REPORT.md for the exact checks and unverified production-build steps.
