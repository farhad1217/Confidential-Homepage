let enginePromise;

/** Vite bundles these npm imports. No third-party CDN scripts are injected. */
export function loadAnimationEngine() {
  if (!enginePromise) {
    enginePromise = Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
      .then(([core, plugin]) => {
        const gsap = core.gsap || core.default;
        const ScrollTrigger = plugin.ScrollTrigger || plugin.default;
        gsap.registerPlugin(ScrollTrigger);
        return { gsap, ScrollTrigger };
      });
  }
  return enginePromise;
}
