import { useEffect, useRef } from 'react';

/** Native disclosures keep their standard keyboard semantics. */
export function useDropdowns() {
  const ref = useRef(null);
  useEffect(() => {
    if (!ref.current) return undefined;
    const lifecycle = new AbortController();
    const dropdowns = [...ref.current.querySelectorAll('.desktop-nav details')];
    const close = () => dropdowns.forEach((item) => { item.open = false; });
    for (const item of dropdowns) {
      item.addEventListener('toggle', () => {
        if (item.open) dropdowns.forEach((other) => { if (other !== item) other.open = false; });
      }, { signal: lifecycle.signal });
    }
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.desktop-nav')) close();
      else if (event.target.closest('a')) close();
    }, { signal: lifecycle.signal });
    document.addEventListener('keydown', (event) => {
      if (event.key !== 'Escape') return;
      const current = dropdowns.find((item) => item.open);
      close();
      current?.querySelector('summary')?.focus();
    }, { signal: lifecycle.signal });
    return () => lifecycle.abort();
  }, []);
  return ref;
}
