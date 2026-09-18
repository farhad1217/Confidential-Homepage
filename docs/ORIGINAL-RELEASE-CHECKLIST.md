# Release checklist - client approval required

This local frontend is not authorization to publish confidential material.

| Item | Status / required action |
| --- | --- |
| Homepage frontend and responsive states | Included and locally tested |
| Supplied nine product screenshots | Included; sample/public-data labeling retained |
| Native Figma desktop, tablet, mobile layouts | Not completed - connector tool-call limit |
| Native Figma components, prototype and `.fig` backup | Not completed; do not submit a blank draft |
| Approved investor quote, identity, portrait and attribution | Not supplied; clearly marked layout placeholder |
| Original vector logo | Not supplied; preview uses a crop from the provided brand capture |
| Free-forever entitlement wording | Preserved from client copy; commercial owner to approve |
| $5 phone-verification credit and nonexpiring credits | Preserved from client copy; confirm current eligibility and terms |
| Free proof-of-funds behavior | Confirm eligibility, issuer wording and any conditions in the actual product |
| Outbound calls, AI testing, exports and CRM restrictions | Preserve separation of subscription and usage in final implementation |
| MLS coverage and record-detail qualifications | Retained; recheck against current coverage |
| Contact details | Supplied number retained; resolve the public-page discrepancy |
| Deal Marketplace destination | Awaiting confirmed route; preview displays an explicit note |
| State-market destinations | Some labels route to the known coverage landing page; confirm exact production paths |
| AI Transparency destination | Current retrieved link resolved to the privacy page; confirm intended section/route |
| External login/registration/pricing links | Destination URLs reviewed; actual account, payment and routing flows are not tested |
| Laravel/Vue integration | Adapters supplied; integrate and test with the existing application |
| Cross-browser and assistive-technology checks | Real Windows/macOS/mobile Safari, Firefox, screen readers and 200% zoom to be checked by release team |
| Privacy / analytics / consent / security headers | No analytics added; v2 requests Google Fonts and jsDelivr scripts. Review those origins, consent requirements and the application's approved CSP |
| Publication | Use approved private staging first; never upload the entire confidential ZIP to public hosting |

Do not replace pending testimonials with invented quotes, names, ratings or performance numbers. Do not add paid plan amounts merely to make the pricing cards look more complete.


## v2 connected-staging gates

- [ ] Load the actual GSAP 3.15.0 and ScrollTrigger scripts successfully; verify `RevampApp.engine` is `gsap-scrolltrigger`.
- [ ] Verify primary Manrope / Instrument Serif font rendering, line wrapping and load-shift behavior on all target widths. The build-environment screenshots use fallback fonts.
- [ ] Exercise hero, SVG, scroll, tabs, dialogs and FAQ animations with the real GSAP engine. The shipped automated runtime checks cover the native fallback, not the inaccessible provider engine.
- [ ] Test blocked CDN, offline mode, system reduced motion, manual motion off/on and framework unmount/remount.
- [ ] For local GSAP hosting, run `npm run vendor` and rebuild; preserve provider license headers. No font binaries are included in this handoff.
- [ ] Inspect Windows/Android Chrome and Edge plus Safari/Firefox; validate readability/contrast, 200% zoom and screen-reader behavior on the actual host page.
- [ ] Re-run the provided checks after client copy, host integration or dependency changes.
