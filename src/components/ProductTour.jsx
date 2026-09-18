import React, { useLayoutEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import TourHeading from './TourHeading.jsx';
import TourBottom from './TourBottom.jsx';
import content from '../data/content.json';

function TourScene({ scene, index, active, onZoom }) {
  const src = `/assets/images/${scene.image}.webp`;
  return (
    <section className="tour-scene" data-scene={index} hidden={!active}>
      <div className="screen-bar"><span><i className="status-dot" /> REAL REVAMP365 INTERFACE</span><span className="sample-label">Sample / public data</span></div>
      <button type="button" className="screen-image" data-title={scene.title} data-zoom={src}
        aria-label={`Enlarge screenshot: ${scene.title}`} onClick={() => onZoom({ src, title: scene.title })}>
        <img alt={`${scene.short} in the Revamp365 workspace`} width="1280" height="720" src={src} loading="lazy" />
        <span className="zoom-affordance"><Icon name="expand" /><span>Enlarge screenshot</span></span>
      </button>
      <div className="scene-caption"><div><p className="eyebrow">{scene.short}</p><h4>{scene.title}</h4><p>{scene.caption}</p></div>
        <span className="scene-count">{String(index + 1).padStart(2, '0')}<span> / 03</span></span>
      </div>
    </section>
  );
}

function TourPanel({ journey, visible, index, onStep, onZoom }) {
  const touch = useRef(null);
  const swiped = useRef(false);
  const move = (next) => onStep(journey.id, (next + journey.scenes.length) % journey.scenes.length);
  function touchEnd(event) {
    if (!touch.current || !event.changedTouches[0]) return;
    const dx = event.changedTouches[0].clientX - touch.current.x;
    const dy = event.changedTouches[0].clientY - touch.current.y;
    if (Math.abs(dx) > 65 && Math.abs(dx) > Math.abs(dy) * 1.5) {
      move(index + (dx < 0 ? 1 : -1));
      swiped.current = true;
    }
    touch.current = null;
  }
  return (
    <div className="journey-panel" id={`journey-${journey.id}`} role="tabpanel" tabIndex={0}
      aria-labelledby={`tab-${journey.id}`} hidden={!visible}>
      <div className="tour-intro"><h3>{journey.headline}</h3><p>{journey.description}</p></div>
      <div className="tour-workspace">
        <div className="tour-steps" aria-label="Tour steps">
          {journey.scenes.map((scene, i) => <button key={scene.image} type="button" data-step={i}
            className={`step-button${i === index ? ' is-active' : ''}`} aria-pressed={i === index}
            onClick={() => move(i)}><span>{String(i + 1).padStart(2, '0')}</span>{scene.short}</button>)}
        </div>
        <div className="tour-screens" onTouchStart={(event) => {
          const finger = event.touches.length === 1 ? event.touches[0] : null;
          touch.current = finger ? { x: finger.clientX, y: finger.clientY } : null;
          swiped.current = false;
        }} onTouchEnd={touchEnd} onTouchCancel={() => { touch.current = null; }}
          onClickCapture={(event) => {
            if (swiped.current) { event.stopPropagation(); event.preventDefault(); swiped.current = false; }
          }}>
          {journey.scenes.map((scene, i) => <TourScene key={scene.image} scene={scene} index={i} active={index === i} onZoom={onZoom} />)}
        </div>
      </div>
      <div className="tour-controls"><p className="tour-status" aria-live="polite">Step {index + 1} of 3 <span>{'\u00b7'} Explore at your own pace</span></p>
        <div><button type="button" aria-label="Previous screenshot" className="icon-button previous-step" onClick={() => move(index - 1)}><Icon name="arrow" className="flip" /></button>
          <button type="button" aria-label="Next screenshot" className="icon-button next-step" onClick={() => move(index + 1)}><Icon name="arrow" /></button></div>
      </div>
    </div>
  );
}

export default function ProductTour({ journeyId, steps, onJourney, onStep, onZoom }) {
  const ref = useRef(null);
  const previous = useRef({ journeyId, step: steps[journeyId] });
  useLayoutEffect(() => {
    const panel = ref.current.querySelector(`#journey-${journeyId}`);
    const emit = (type, detail) => panel.dispatchEvent(new CustomEvent(`revamp:${type}`, { bubbles: true, detail }));
    if (previous.current.journeyId !== journeyId) emit('journeychange', { panel, id: journeyId });
    if (previous.current.step !== steps[journeyId] || previous.current.journeyId !== journeyId) {
      emit('scenechange', { panel, scene: panel.querySelectorAll('.tour-scene')[steps[journeyId]], index: steps[journeyId] });
    }
    previous.current = { journeyId, step: steps[journeyId] };
  }, [journeyId, steps]);

  function handleTabKey(event, index) {
    const length = content.journeys.length;
    const next = { ArrowRight: (index + 1) % length, ArrowLeft: (index - 1 + length) % length, Home: 0, End: length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const id = content.journeys[next].id;
    onJourney(id);
    ref.current.querySelector(`#tab-${id}`).focus();
  }

  return (
    <section ref={ref} id="product-tour" data-section-number="01" className="section tour-section" aria-labelledby="tour-heading">
      <div className="container"><TourHeading />
        <div className="journey-tabs" role="tablist" aria-label="Product journeys">
          {content.journeys.map((journey, index) => <button key={journey.id} type="button" role="tab"
            id={`tab-${journey.id}`} aria-controls={`journey-${journey.id}`} data-journey={journey.id}
            className={`journey-tab${journeyId === journey.id ? ' is-active' : ''}`} aria-selected={journeyId === journey.id}
            tabIndex={journeyId === journey.id ? 0 : -1} onClick={() => onJourney(journey.id)} onKeyDown={(event) => handleTabKey(event, index)}>
            <span className="tab-icon"><Icon name={journey.icon} /></span><span><strong>{journey.label}</strong><small>{journey.badge}</small></span>
            <span className="tab-number">{String(index + 1).padStart(2, '0')}</span>
          </button>)}<span className="journey-indicator" aria-hidden="true" />
        </div>
        {content.journeys.map((journey) => <TourPanel key={journey.id} journey={journey} visible={journeyId === journey.id}
          index={steps[journey.id]} onStep={onStep} onZoom={onZoom} />)}
        <TourBottom />
      </div>
    </section>
  );
}
