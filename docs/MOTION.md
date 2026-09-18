# React motion handoff

The artwork, colors, layout and motion vocabulary remain from Premium v2.

## Animation entrypoints

`MotionContext.jsx` owns the user/system preferences and loads the npm animation engine. `useHomepageMotion.js` creates and tears down the scoped motion implementation. `lib/motion.js` implements hero, scroll, progress, card and SVG effects. `FaqItem.jsx` and `Modal.jsx` own their local transitions.

The product-tour component emits scoped revamp:journeychange and revamp:scenechange events only after React has committed the relevant DOM state. Motion never determines which content is active.

## Timings

- Hero lines: 1.0 seconds, 0.11 second stagger.
- Supporting hero items: 0.75 seconds, 0.05 second stagger.
- Scroll reveal: approximately 0.72 seconds; entered content is not hidden permanently.
- SVG line drawing: approximately 1.4 seconds, 0.09 second per-path stagger.
- Journey / scene transition: 0.42 / 0.38 seconds.
- FAQ expansion / collapse: 0.32 seconds, interruptible.
- Dialog entrance: 0.35 seconds.

Native fallback timings closely follow the same rhythm, without pretending to be the GSAP engine.

## Interaction and accessibility

Native scrolling and hash anchors remain intact; there is no scroll hijacking. Pointer-only parallax is limited to desktop-like devices. Touch swipes are horizontal-only enhancements and never cancel vertical page scrolling. All journey/scene choices also have visible controls.

System reduced-motion settings take priority over manual preference. The footer control stores its manual choice in sessionStorage when available. Content, buttons and focus remain usable without decorative animation. Modals close with Escape or the close button, trap focus and restore it to their trigger.

## Lifecycle and QA

Effect cleanups revert GSAP contexts, abort event listeners, disconnect observers, cancel native animations and release body scroll locks. The dialog close handler ignores stale close events from an immediately reopened modal, avoiding the React StrictMode effect-replay close/open race.

The actual npm GSAP branch still needs to be run after dependency installation in a network-enabled environment. See QA-REPORT.md; the offline compatibility runner deliberately exercised the real native fallback, not a simulated GSAP object.
