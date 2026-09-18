import React, { useCallback, useRef, useState } from 'react';
import { MotionProvider } from './hooks/MotionContext.jsx';
import { useHomepageMotion } from './hooks/useHomepageMotion.js';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SectionNav from './components/SectionNav.jsx';
import ProductTour from './components/ProductTour.jsx';
import FreeWorkspace from './components/FreeWorkspace.jsx';
import Plans from './components/Plans.jsx';
import InvestorStories from './components/InvestorStories.jsx';
import FAQ from './components/FAQ.jsx';
import ClosingCTA from './components/ClosingCTA.jsx';
import Footer from './components/Footer.jsx';
import MobileMenu from './components/MobileMenu.jsx';
import ScreenshotDialog from './components/ScreenshotDialog.jsx';
import PlatformDialog from './components/PlatformDialog.jsx';

function Homepage() {
  const root = useRef(null);
  const [journeyId, setJourneyId] = useState('data');
  const [steps, setSteps] = useState({ data: 0, numbers: 0, ai: 0 });
  const [modal, setModal] = useState(null);
  useHomepageMotion(root);

  const dismiss = useCallback(() => setModal(null), []);
  const openMenu = useCallback(() => setModal({ type: 'menu' }), []);
  const openScreenshot = useCallback((screenshot) => setModal({ type: 'screenshot', ...screenshot }), []);
  const openPlatform = useCallback((title) => setModal({ type: 'platform', title }), []);
  const setStep = useCallback((id, step) => setSteps((previous) => ({ ...previous, [id]: step })), []);
  const selectTour = useCallback((id, step = 0) => { setJourneyId(id); setStep(id, step); }, [setStep]);

  return <div ref={root} className="revamp-homepage" id="revamp-app">
    <div className="reading-progress" aria-hidden="true"><span /></div>
    <a className="skip-link" href="#main">Skip to main content</a>
    <Header onMenuOpen={openMenu} menuOpen={modal?.type === 'menu'} />
    <main id="main">
      <Hero onZoom={openScreenshot} />
      <SectionNav />
      <ProductTour journeyId={journeyId} steps={steps} onJourney={setJourneyId} onStep={setStep} onZoom={openScreenshot} />
      <FreeWorkspace onTour={selectTour} />
      <Plans /><InvestorStories /><FAQ /><ClosingCTA />
    </main>
    <Footer onPlatform={openPlatform} />
    {modal?.type === 'menu' && <MobileMenu onDismiss={dismiss} />}
    {modal?.type === 'screenshot' && <ScreenshotDialog screenshot={modal} onDismiss={dismiss} />}
    {modal?.type === 'platform' && <PlatformDialog title={modal.title} onDismiss={dismiss} />}
  </div>;
}

export default function App() {
  return <MotionProvider><Homepage /></MotionProvider>;
}
