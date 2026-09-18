# Asset sources and rights

| Delivered asset | Source | Use / status |
| --- | --- | --- |
| `assets/images/search.webp` | Reference-pack image 15 | Property and on-market search scene; hero and tour |
| `property-record.webp` | Reference-pack image 16 | Connected property record |
| `filters.webp` | Reference-pack image 17 | Search/list filtering |
| `comps.webp` | Reference-pack image 18 | Comparable-sales controls |
| `valuation.webp` | Reference-pack image 19 | Valuation workspace |
| `calculator.webp` | Reference-pack image 20 | Deal analysis |
| `agent-builder.webp` | Reference-pack image 21 | Voice agent builder |
| `campaigns.webp` | Reference-pack image 22 | Outbound campaign workspace |
| `workflows.webp` | Reference-pack image 23 | CRM workflows |
| `revamp-logo.png` | Header crop of supplied green-desktop screenshot, image 03 | Recognized brand artwork; replace with the client's vector original for production |
| `favicon.svg` | Original simple letterform treatment for this prototype | No third-party icon file |
| Inline interface icons | Original SVG path definitions in the source and `docs/icons.json` | No external icon package |
| Closing architectural motif | Original SVG in `index.html` | Decorative; not a product capability claim |
| Preview PNGs | Renders of this project's own source | Confidential handoff previews |

The nine original product captures retain their supplied 1280x720 dimensions and WebP format. No competitor screenshot is used as a page asset. Competitor captures remain only in the original confidential reference pack.

The client supplied the brand and product captures. Their redistribution/publication rights have not been independently verified; confirm them before public release. No stock-image subscription or paid asset was purchased. No font files are distributed. The page now requests Google Fonts CSS and fonts when online; installed fallback fonts render offline.

The project is marked private / unlicensed in package metadata to prevent accidental public package publication. That marker is not a legal determination of the client's ownership or licensing rights.


## v2 additions and third-party dependencies

| Asset / dependency | Source and use |
| --- | --- |
| `feature-1.svg` through `feature-6.svg` | Original editable vector diagrams created for this homepage; inline copies are animated in the page. Diagrams are decorative, not live product data. |
| Hero blueprint / intelligence rail / free-access mark | Original SVG markup in `index.html`; no remote image library. |
| Manrope, weights 400-800 | Requested from Google Fonts: https://fonts.google.com/specimen/Manrope. Primary UI/body font. No binary font files are in the package. |
| Instrument Serif, regular/italic 400 | Requested from Google Fonts: https://fonts.google.com/specimen/Instrument+Serif. Display accents only. No binary font files are in the package. |
| GSAP 3.15.0 and ScrollTrigger 3.15.0 | Official GSAP package through a pinned jsDelivr URL. Provider scripts are not bundled; `scripts/vendor.mjs` optionally downloads them and preserves the headers. |
| Native motion fallback | Original source in `assets/js/motion.js`; browser Web Animations API and IntersectionObserver, not a replacement library branded as GSAP. |

GSAP source/documentation: https://github.com/greensock/GSAP and https://gsap.com/docs/v3/Installation/.
Provider license: https://gsap.com/community/standard-license/. Review the applicable terms for the client's deployment; this handoff does not grant third-party rights or make a legal eligibility determination. Nothing was purchased and no new paid asset subscription was created.

Preview screenshots and the motion recording use installed fallback fonts and the native motion route because provider resources could not be downloaded in this environment. Font names in the CSS are selected webfonts, not a claim that their binaries are included.

Version reference: the official npm package page reports GSAP 3.15.0: https://www.npmjs.com/package/gsap. This version lookup does not establish that provider bytes were downloaded or executed locally.
