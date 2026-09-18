import React from 'react';
import { useDropdowns } from '../hooks/useDropdowns.js';
export default function Header({ onMenuOpen, menuOpen }) {
    const headerRef = useDropdowns();
    return (<header ref={headerRef} className="site-header">
      <div className="container header-inner">
        <a aria-label="Revamp365 homepage" className="brand" href="#top">
          <img alt="Revamp365.ai" height="29" src="/assets/images/revamp-logo.png" width="206"/>
        </a>
        <nav aria-label="Main navigation" className="desktop-nav">
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
          <a className="nav-pricing" href="https://revamp365.ai/pricing">
            {"Pricing"}
          </a>
        </nav>
        <div className="header-actions">
          <a className="login-link" href="https://revamp365.ai/login">
            {"Login"}
          </a>
          <a className="button button-gold button-small header-signup" href="https://revamp365.ai/register">
            {"Sign Up "}
            <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
              <path d="M5 12h14m-6-6 6 6-6 6"></path>
            </svg>
          </a>
          <button aria-controls={menuOpen ? "mobile-menu" : undefined} aria-expanded={menuOpen} aria-label="Open navigation menu" className="icon-button menu-toggle" id="menu-open" type="button" onClick={onMenuOpen}>
            <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
              <path d="M4 7h16M4 12h16M4 17h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>);
}
