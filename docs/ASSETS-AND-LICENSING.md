# Assets and dependencies

## Client assets and copy

The logo, all nine WebP product screenshots and the six SVG feature illustrations are retained from the supplied Premium v2 ZIP. The screenshots are the client's reference/sample interface images, not newly captured live account data. Reuse is restricted to this confidential project; do not publish the client's screenshots or reference material elsewhere.

The client copy snapshot remains the source of feature, pricing, coverage and starter-credit statements. No testimonials, ratings, customer names or product results were invented during conversion.

## Fonts

The CSS requests Manrope for the interface and Instrument Serif for editorial accents, with the original fallback stacks. They load through the existing Google Fonts stylesheet. No font binaries are included or redistributed. Offline/browser-blocked previews use fallback fonts; their measurements can differ from the named webfonts.

## Third-party JavaScript

React, ReactDOM, Vite, the React Vite plugin, GSAP and Playwright are declared npm dependencies. Their package files and license notices are obtained through npm install. node_modules is not included in this ZIP.

GSAP is governed by its own license; do not relabel it as MIT or assume every possible resale/hosting use is covered without checking the current license. See https://gsap.com/standard-license/ and the license included in the installed package.

## What the browser requests

After a successful Vite build, application JavaScript, GSAP/ScrollTrigger chunks, CSS, screenshots and icons are served from the same deployment. Only the font stylesheet/font delivery uses the external Google Fonts endpoints. Signup, login, pricing and other platform links navigate to the existing website when selected.

No analytics script, tracking SDK, API secret or third-party form handler has been added.
