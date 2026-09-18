import React, { useLayoutEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { useMotion } from '../hooks/MotionContext.jsx';

export default function FaqItem({ faq, index }) {
  const ref = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const { reduced, engine } = useMotion();

  useLayoutEffect(() => {
    const detail = ref.current;
    const answer = detail.querySelector('.faq-answer');
    let canceled = false;
    const reset = () => { answer.style.height = ''; answer.style.overflow = ''; answer.style.opacity = ''; };
    const finish = () => {
      if (canceled) return;
      detail.open = expanded;
      reset();
      engine?.ScrollTrigger?.refresh();
    };
    if (reduced || (!expanded && !detail.open)) { finish(); return undefined; }
    const start = detail.open ? answer.getBoundingClientRect().height : 0;
    detail.open = true;
    answer.style.height = '';
    const natural = answer.getBoundingClientRect().height;
    answer.style.overflow = 'hidden';
    let cancelAnimation = () => {};
    if (engine?.gsap) {
      const tween = engine.gsap.fromTo(answer, { height: start, opacity: expanded ? 0.55 : 1 }, {
        height: expanded ? natural : 0, opacity: expanded ? 1 : 0,
        duration: 0.32, ease: 'power2.inOut', onComplete: finish,
      });
      cancelAnimation = () => tween.kill();
    } else if (answer.animate) {
      const animation = answer.animate([
        { height: `${start}px`, opacity: expanded ? 0.55 : 1 },
        { height: `${expanded ? natural : 0}px`, opacity: expanded ? 1 : 0 },
      ], { duration: 320, easing: 'ease-in-out', fill: 'both' });
      animation.finished.then(() => { if (!canceled) { animation.cancel(); finish(); } }, () => {});
      cancelAnimation = () => animation.cancel();
    } else finish();
    return () => { canceled = true; cancelAnimation(); reset(); };
  }, [expanded, reduced, engine]);

  return (
    <details ref={ref} className="faq-item" data-reveal="">
      <summary aria-expanded={expanded} onClick={(event) => { event.preventDefault(); setExpanded((value) => !value); }}>
        <span className="faq-number">{String(index + 1).padStart(2, '0')}</span>
        <span>{faq.q}</span><Icon name="plus" />
      </summary>
      <div className="faq-answer"><p>{faq.a}</p></div>
    </details>
  );
}
