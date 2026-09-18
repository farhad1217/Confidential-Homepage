import React from 'react';
import Icon from './Icon.jsx';
import FeatureArt from './FeatureArt.jsx';

export default function FeatureCard({ feature, index, onTour }) {
  const [icon, eyebrow, title, description, badge, journey, step] = feature;
  const usesCredits = index === 5;
  return (
    <article className="feature-card" id={`tool-${index + 1}`} data-feature={index + 1} data-reveal="">
      <div className="feature-top">
        <span aria-hidden="true" className="feature-index">{String(index + 1).padStart(2, '0')}</span>
        <Icon name={icon} />
        <span className={`badge${usesCredits ? ' badge-credit' : ''}`}>{badge}</span>
      </div>
      <p className="eyebrow">{eyebrow}</p><h3>{title}</h3><p>{description}</p>
      <a className="feature-link" href={journey ? '#product-tour' : 'https://revamp365.ai/register'}
        aria-label={`Explore ${title}`} data-tour={journey || undefined} data-step={step ?? undefined}
        onClick={journey ? () => onTour(journey, step) : undefined}><Icon name="arrow" /></a>
      <div className="feature-illustration" aria-hidden="true"><FeatureArt index={index} /></div>
    </article>
  );
}
