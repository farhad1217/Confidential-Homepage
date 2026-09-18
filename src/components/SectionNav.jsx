import React, { useEffect, useState } from 'react';
import Icon from './Icon.jsx';

const items = [['product-tour', 'Product tour'], ['free-tools', 'Free tools'], ['plans', 'What costs extra'], ['faq', 'FAQs']];
export default function SectionNav() {
  const [active, setActive] = useState('product-tour');
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
    }, { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    for (const [id] of items) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    return () => observer.disconnect();
  }, []);
  return (
    <nav className="section-nav" aria-label="On this page">
      <div className="container section-nav-inner">
        <span className="section-nav-title">A clearer path to your next deal</span>
        <div>{items.map(([id, title]) => <a key={id} href={`#${id}`} className={active === id ? 'is-current' : ''}
          aria-current={active === id ? 'location' : undefined}>{title}</a>)}</div>
        <a className="section-nav-end" href="https://revamp365.ai/register">Start free <Icon name="arrow" /></a>
      </div>
    </nav>
  );
}
