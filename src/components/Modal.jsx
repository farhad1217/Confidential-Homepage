import React, { useLayoutEffect, useRef } from 'react';
import { useMotion } from '../hooks/MotionContext.jsx';

/** Native modal: focus trap, Escape, scroll lock, backdrop close and focus restoration. */
export default function Modal({ id, className, labelledBy, onDismiss, children, ...props }) {
  const ref = useRef(null);
  const { reduced, engine } = useMotion();
  useLayoutEffect(() => {
    const dialog = ref.current;
    const opener = document.activeElement;
    if (typeof dialog.showModal === 'function') dialog.showModal();
    else dialog.setAttribute('open', '');
    document.body.classList.add('dialog-open');
    dialog.querySelector('[data-close-dialog]')?.focus();
    return () => {
      if (dialog.open && typeof dialog.close === 'function') dialog.close();
      else dialog.removeAttribute('open');
      document.body.classList.remove('dialog-open');
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, []);

  useLayoutEffect(() => {
    if (reduced) return undefined;
    const dialog = ref.current;
    if (engine?.gsap) {
      const context = engine.gsap.context(() => {
        engine.gsap.fromTo(dialog, id === 'mobile-menu' ? { x: 40, opacity: 0 } : { y: 14, scale: 0.98, opacity: 0 },
          { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.35, ease: 'power3.out', clearProps: 'transform,opacity' });
      }, dialog);
      return () => context.revert();
    }
    if (!dialog.animate) return undefined;
    const animation = dialog.animate([{ opacity: 0, transform: id === 'mobile-menu' ? 'translateX(40px)' : 'translateY(14px) scale(.98)' },
      { opacity: 1, transform: 'none' }], { duration: 350, easing: 'cubic-bezier(.22,1,.36,1)' });
    return () => animation.cancel();
  }, [id, reduced, engine]);

  function trapFocus(event) {
    if (event.key !== 'Tab') return;
    const nodes = [...ref.current.querySelectorAll('button:not([disabled]),a[href],summary,[tabindex]:not([tabindex="-1"])')]
      .filter((node) => node.getClientRects().length > 0);
    const index = nodes.indexOf(document.activeElement);
    if (event.shiftKey && index <= 0) { event.preventDefault(); nodes[nodes.length - 1]?.focus(); }
    else if (!event.shiftKey && (index === nodes.length - 1 || index === -1)) { event.preventDefault(); nodes[0]?.focus(); }
  }

  return <dialog ref={ref} id={id} className={className} aria-labelledby={labelledBy} aria-modal="true"
    onCancel={(event) => { event.preventDefault(); onDismiss(); }} onClose={(event) => { if (!event.currentTarget.open) onDismiss(); }} onKeyDown={trapFocus}
    onClick={(event) => {
      if (event.target !== event.currentTarget) return;
      const rect = event.currentTarget.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) onDismiss();
    }} {...props}>{children}</dialog>;
}
