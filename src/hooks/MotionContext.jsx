import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { loadAnimationEngine } from '../lib/animationEngine.js';

const MotionContext = createContext(null);
const preferenceKey = 'revamp-motion';
const query = '(prefers-reduced-motion: reduce)';

export function MotionProvider({ children }) {
  const [manualOff, setManualOff] = useState(() => {
    try { return sessionStorage.getItem(preferenceKey) === 'off'; } catch { return false; }
  });
  const [systemReduced, setSystemReduced] = useState(() => window.matchMedia(query).matches);
  const [engine, setEngine] = useState(undefined);

  useEffect(() => {
    const media = window.matchMedia(query);
    const update = () => setSystemReduced(media.matches);
    media.addEventListener('change', update);
    update();
    return () => media.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    let mounted = true;
    loadAnimationEngine().then(
      (value) => { if (mounted) setEngine(value); },
      () => { if (mounted) setEngine(null); },
    );
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    try { sessionStorage.setItem(preferenceKey, manualOff ? 'off' : 'on'); } catch { /* Storage may be restricted. */ }
  }, [manualOff]);

  const reduced = manualOff || systemReduced;
  useEffect(() => {
    document.documentElement.toggleAttribute('data-user-reduced-motion', reduced);
    return () => document.documentElement.removeAttribute('data-user-reduced-motion');
  }, [reduced]);

  const value = useMemo(() => ({
    manualOff, systemReduced, reduced, engine,
    toggleMotion: () => setManualOff((previous) => !previous),
  }), [manualOff, systemReduced, reduced, engine]);

  return <MotionContext.Provider value={value}>{children}</MotionContext.Provider>;
}

export function useMotion() {
  const value = useContext(MotionContext);
  if (!value) throw new Error('MotionProvider is required.');
  return value;
}
