import React from 'react';
import MotionToggle from './MotionToggle.jsx';
export default function Footer({ onPlatform }) {
    return (<footer className="site-footer" id="about">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a aria-label="Back to Revamp365 homepage" className="brand" href="#top">
              <img alt="Revamp365.ai" height="29" src="/assets/images/revamp-logo.png" width="206"/>
            </a>
            <p>
              {"Revamp365.ai is a software platform for real estate investors."}
            </p>
            <a href="mailto:team@revamp365.ai">
              {"team@revamp365.ai "}
              <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                <path d="M14 3h7v7m-1-6L10 14M9 3H3v18h18v-6"></path>
              </svg>
            </a>
            <a href="tel:+16105954790">
              {"610 595-4790"}
            </a>
            <address>
              {"1309 MacDade Blvd"}
              <br />
              {"Woodlyn PA 19094"}
            </address>
          </div>
          <div className="footer-column">
            <h3>
              {"Research"}
            </h3>
            <a className="" href="#tool-4">
              {"Free Calculators"}
            </a>
            <a className="" href="#tool-2">
              {"MLS Deal Finder"}
            </a>
            <a className="" href="#tool-1">
              {"Nationwide Data"}
            </a>
            <a className="" href="https://revamp365.ai/property_ai">
              {"Property AI"}
            </a>
            <a className="" href="#tool-3">
              {"Instant Comp"}
            </a>
            <a className="" href="https://revamp365.ai/property/search">
              {"Search"}
            </a>
          </div>
          <div className="footer-column">
            <h3>
              {"Platform"}
            </h3>
            <a className="" href="https://revamp365.ai/skip_tracing">
              {"Skip Tracing"}
            </a>
            <a className="" href="https://revamp365.ai/smart_crm">
              {"Investor CRM"}
            </a>
            <a className="" href="https://revamp365.ai/ai_voice_agents">
              {"AI Voice Agents"}
            </a>
            <a className="" href="https://revamp365.ai/automated_offers">
              {"Automated Offers"}
            </a>
            <a className="" data-platform="Deal Marketplace" href="#platform-detail" onClick={(event) => { event.preventDefault(); onPlatform("Deal Marketplace"); }}>
              {"Deal Marketplace"}
            </a>
            <a className="" href="https://revamp365.ai/pricing">
              {"Deal Guarantee"}
            </a>
          </div>
          <div className="footer-column">
            <h3>
              {"Explore"}
            </h3>
            <a className="" href="#about">
              {"About"}
            </a>
            <a className="" href="#tool-4">
              {"Fix & Flip"}
            </a>
            <a className="" href="#tool-4">
              {"Buy & Hold"}
            </a>
            <a className="" href="https://revamp365.ai/market_coverage">
              {"MLS Coverage"}
            </a>
            <a className="" href="https://revamp365.ai/pricing">
              {"Pricing"}
            </a>
          </div>
          <div className="footer-column">
            <h3>
              {"Featured markets"}
            </h3>
            <a className="" href="https://revamp365.ai/coverage/state/pennsylvania">
              {"Pennsylvania"}
            </a>
            <a className="" href="https://revamp365.ai/market_coverage">
              {"New Jersey"}
            </a>
            <a className="" href="https://revamp365.ai/market_coverage">
              {"Maryland"}
            </a>
            <a className="" href="https://revamp365.ai/market_coverage">
              {"Delaware"}
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            {"Copyright 2026. All rights reserved."}
          </span>
          <nav aria-label="Legal navigation">
            <a href="https://revamp365.ai/terms-of-use">
              {"Terms of Use"}
            </a>
            <a href="https://revamp365.ai/privacy">
              {"Privacy Policy"}
            </a>
            <a href="https://revamp365.ai/privacy">
              {"AI Transparency"}
            </a>
            <a href="https://revamp365.ai/subprocessors">
              {"Subprocessors"}
            </a>
          </nav>
        </div>
        <div className="motion-preferences">
          <MotionToggle />
          <a className="back-to-top" href="#top">
            {"Back to top "}
            <span aria-hidden="true">
              {"\u2191"}
            </span>
          </a>
        </div>
      </div>
    </footer>);
}
