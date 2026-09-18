import React, { useEffect } from 'react';
import Modal from './Modal.jsx';
export default function MobileMenu({ onDismiss }) {
    useEffect(() => { const check = () => { if (innerWidth > 1020)
        onDismiss(); }; window.addEventListener('resize', check); return () => window.removeEventListener('resize', check); }, [onDismiss]);
    return <Modal id="mobile-menu" className="mobile-menu" labelledBy="mobile-menu-title" onDismiss={onDismiss}>
      <div className="mobile-menu-top">
        <h2 id="mobile-menu-title">
          {"Explore Revamp365"}
        </h2>
        <button aria-label="Close navigation menu" className="icon-button" data-close-dialog="" onClick={onDismiss} type="button">
          <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
            <path d="m6 6 12 12M6 18 18 6"></path>
          </svg>
        </button>
      </div>
      <nav onClick={(event) => { if (event.target.closest("a"))
        onDismiss(); }} aria-label="Mobile navigation">
        <details className="nav-dropdown">
          <summary>
            {"Features"}
            <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div className="nav-dropdown-panel">
            <a className="" href="#free-tools">
              {"Free workspace"}
            </a>
            <a className="" href="#product-tour">
              {"Product tour"}
            </a>
            <a className="" href="#plans">
              {"Optional data & AI"}
            </a>
          </div>
        </details>
        <details className="nav-dropdown">
          <summary>
            {"Solutions"}
            <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div className="nav-dropdown-panel">
            <a className="" href="#tool-4">
              {"Fix & flip"}
            </a>
            <a className="" href="#tool-4">
              {"Buy & hold"}
            </a>
            <a className="" href="#plans">
              {"Acquisition teams"}
            </a>
          </div>
        </details>
        <details className="nav-dropdown">
          <summary>
            {"Company"}
            <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div className="nav-dropdown-panel">
            <a className="" href="#about">
              {"About Revamp365"}
            </a>
            <a className="" href="#investor-stories">
              {"Investor stories"}
            </a>
            <a className="" href="mailto:team@revamp365.ai">
              {"Contact"}
            </a>
          </div>
        </details>
        <details className="nav-dropdown">
          <summary>
            {"Resources"}
            <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
              <path d="m6 9 6 6 6-6"></path>
            </svg>
          </summary>
          <div className="nav-dropdown-panel">
            <a className="" href="#product-tour">
              {"How it works"}
            </a>
            <a className="" href="#faq">
              {"Practical answers"}
            </a>
            <a className="" href="https://revamp365.ai/market_coverage">
              {"MLS coverage"}
            </a>
          </div>
        </details>
        <a className="mobile-pricing" href="https://revamp365.ai/pricing">
          {"Pricing "}
          <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
            <path d="M5 12h14m-6-6 6 6-6 6"></path>
          </svg>
        </a>
      </nav>
      <div className="mobile-menu-actions">
        <a className="button button-gold" href="https://revamp365.ai/register">
          {"Create your free account"}
          <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
            <path d="M5 12h14m-6-6 6 6-6 6"></path>
          </svg>
        </a>
        <a className="button button-outline" href="https://revamp365.ai/login">
          {"Login"}
        </a>
        <p>
          {"Free forever \u00b7 No credit card"}
        </p>
      </div>
    </Modal>;
}
