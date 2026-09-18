import { useEffect, useRef } from 'react';
import { useMotion } from './MotionContext.jsx';
import { initRevampMotion } from '../lib/motion.js';

/** The cleanup is required for React StrictMode, remounts and preference changes. */
export function useHomepageMotion(rootRef) {
  const { reduced, engine } = useMotion();
  const introPlayed = useRef(false);
  useEffect(() => {
    const root = rootRef.current;
    if (!root || engine === undefined) return undefined;
    const cleanup = initRevampMotion(root, {
      gsap: engine?.gsap,
      ScrollTrigger: engine?.ScrollTrigger,
      disabled: reduced,
      intro: !introPlayed.current,
    });
    if (!reduced) introPlayed.current = true;
    return cleanup;
  }, [rootRef, reduced, engine]);
}
