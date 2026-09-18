import React from 'react';
import { useMotion } from '../hooks/MotionContext.jsx';

export default function MotionToggle() {
  const { reduced, systemReduced, toggleMotion } = useMotion();
  const label = systemReduced ? 'Reduced motion' : reduced ? 'Motion off' : 'Motion on';
  return (
    <button type="button" className="motion-toggle" onClick={toggleMotion}
      disabled={systemReduced} aria-pressed={reduced}
      aria-label={systemReduced ? 'Animations off: system reduced-motion preference' : reduced ? 'Turn on decorative animations' : 'Turn off decorative animations'}>
      <svg aria-hidden="true" className="motion-icon" fill="none" height="18" width="18" viewBox="0 0 18 18">
        <path d="M6 4v10M12 4v10" stroke="currentColor" strokeWidth="1.6" />
      </svg>
      <span data-motion-label="">{label}</span>
    </button>
  );
}
