import React from 'react';
export default function Hero({ onZoom }) {
    return (<section aria-labelledby="hero-heading" className="hero" id="top">
      <div aria-hidden="true" className="hero-atmosphere">
        <div className="hero-gridlines"></div>
        <svg className="hero-blueprint" fill="none" viewBox="0 0 920 780" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="hero-line-gradient" x1="0" x2="900" y1="0" y2="700">
              <stop stopColor="#d6bd88" stopOpacity="0"></stop>
              <stop offset=".5" stopColor="#d6bd88" stopOpacity=".45"></stop>
              <stop offset="1" stopColor="#72a396" stopOpacity=".08"></stop>
            </linearGradient>
          </defs>
          <g stroke="url(#hero-line-gradient)" strokeWidth="1">
            <path className="blueprint-path" d="M50 670V274Q50 250 74 250H500Q524 250 524 226V60"></path>
            <path className="blueprint-path" d="M100 740V330Q100 305 125 305H705Q735 305 735 275V25"></path>
            <path className="blueprint-path" d="M240 760V545Q240 525 260 525H816Q836 525 836 505V86"></path>
            <circle cx="570" cy="360" r="269"></circle>
            <circle cx="570" cy="360" r="336"></circle>
            <path d="M165 120h28m-14-14v28M806 650h28m-14-14v28M476 45h28m-14-14v28"></path>
          </g>
          <g fill="#d6bd88">
            <circle className="blueprint-node" cx="524" cy="145" r="3"></circle>
            <circle className="blueprint-node" cx="735" cy="217" r="3"></circle>
            <circle className="blueprint-node" cx="240" cy="637" r="3"></circle>
          </g>
        </svg>
      </div>
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="small-diamond"></span>
            {"Real estate investor tools "}
            <span className="eyebrow-divider">
              {"/"}
            </span>
            {" Free forever"}
          </p>
          <h1 id="hero-heading">
            <span className="hero-line">
              <span className="line-inner">
                {"Better data."}
              </span>
            </span>
            <span className="hero-line">
              <span className="line-inner">
                {"Smarter comps."}
              </span>
            </span>
            <span className="hero-line hero-line-accent">
              <span className="line-inner">
                {"Free forever."}
              </span>
            </span>
          </h1>
          <p className="hero-description">
            {"Search nationwide property records and on-market listings, stack seller-motivation filters, and analyze your next deal\u2014all in one free workspace."}
          </p>
          <div className="hero-ctas">
            <a className="button button-gold" href="https://revamp365.ai/register">
              {"Create your free account"}
              <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                <path d="M5 12h14m-6-6 6 6-6 6"></path>
              </svg>
            </a>
            <a className="button button-text" href="#product-tour">
              <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                <path d="m9 5 11 7-11 7Z"></path>
              </svg>
              {"Explore the product"}
            </a>
          </div>
          <div className="reassurance">
            <span>
              <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                <path d="m5 12 4 4L19 6"></path>
              </svg>
              {"Free forever"}
            </span>
            <span>
              <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                <path d="M3 5h18v14H3ZM3 9h18m-14 6h3"></path>
              </svg>
              {"No credit card"}
            </span>
            <span>
              <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                <path d="M12 7v5l3 2M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0"></path>
              </svg>
              {"No trial deadline"}
            </span>
          </div>
          <p className="hero-upgrade">
            {"When you\u2019re ready, upgrade to our "}
            <a href="#plans">
              {"Agentic OS"}
            </a>
            {" to handle outreach and follow-up."}
          </p>
        </div>
        <div className="hero-visual">
          <div className="visual-overline">
            <span>
              <i className="status-dot"></i>
              {" Nationwide intelligence engine"}
            </span>
            <span className="visual-index">
              {"RESEARCH / 01"}
            </span>
          </div>
          <div className="product-composition">
            <div className="product-label">
              <span aria-hidden="true" className="tiny-cross">
                {"+"}
              </span>
              {" Opportunity, decoded."}
            </div>
            <div className="hero-browser">
              <div className="browser-bar">
                <div aria-hidden="true" className="browser-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <span>
                  <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                    <path d="M6 10h12v11H6Zm3 0V6a3 3 0 0 1 6 0v4"></path>
                  </svg>
                  {"revamp365.ai"}
                </span>
                <span className="browser-free">
                  {"Free workspace"}
                </span>
              </div>
              <button aria-label="Enlarge Revamp365 property search screenshot" className="hero-screen" data-title="Property + on-market search" data-zoom="/assets/images/search.webp" type="button" onClick={() => onZoom({ src: "/assets/images/search.webp", title: "Property + on-market search" })}>
                <img alt="Actual Revamp365 property search, with a map and on-market listing cards" fetchPriority="high" height="720" src="/assets/images/search.webp" width="1280"/>
                <span className="hero-zoom">
                  <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                    <path d="M9 3H3v6m12-6h6v6M3 15v6h6m12-6v6h-6"></path>
                  </svg>
                  {"Explore the interface"}
                </span>
              </button>
              <div className="browser-bottom">
                <span>
                  <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                    <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM2 12h20M12 2c6 6 6 14 0 20-6-6-6-14 0-20"></path>
                  </svg>
                  {"Nationwide data"}
                </span>
                <span>
                  {"Sample / public data"}
                </span>
              </div>
            </div>
            <div className="free-note">
              <svg aria-hidden="true" className="access-mark" fill="none" height="24" viewBox="0 0 24 24" width="24">
                <path className="access-path" d="M9 7H6a5 5 0 0 0 0 10c4 0 8-10 12-10a5 5 0 0 1 0 10h-3" stroke="currentColor" strokeLinecap="round" strokeWidth="1.6"></path>
              </svg>
              <span>
                {"ALWAYS-ON ACCESS"}
              </span>
              <strong>
                {"$0"}
                <span>
                  {"/mo"}
                </span>
              </strong>
              <small>
                {"No monthly subscription."}
              </small>
            </div>
            <div aria-hidden="true" className="intelligence-rail">
              <svg fill="none" viewBox="0 0 470 34">
                <path className="rail-path" d="M13 17H457" stroke="currentColor" strokeWidth="1"></path>
                <circle className="rail-node" cx="13" cy="17" r="4"></circle>
                <circle className="rail-node" cx="235" cy="17" r="4"></circle>
                <circle className="rail-node" cx="457" cy="17" r="4"></circle>
              </svg>
              <span>
                {"PROPERTY + OWNER"}
              </span>
              <span>
                {"SMARTER COMPS"}
              </span>
              <span>
                {"DEAL INTELLIGENCE"}
              </span>
            </div>
          </div>
          <div className="visual-workflow">
            <a data-tour="data" href="#product-tour" onClick={() => onTour("data", 0)}>
              <span>
                {"01"}
              </span>
              <strong>
                {"Explore the data"}
              </strong>
              <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                <path d="M5 12h14m-6-6 6 6-6 6"></path>
              </svg>
            </a>
            <a data-tour="numbers" href="#product-tour" onClick={() => onTour("numbers", 0)}>
              <span>
                {"02"}
              </span>
              <strong>
                {"Run the numbers"}
              </strong>
              <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                <path d="M5 12h14m-6-6 6 6-6 6"></path>
              </svg>
            </a>
            <a href="#plans">
              <span>
                {"03"}
              </span>
              <strong>
                {"Choose what\u2019s next"}
              </strong>
              <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                <path d="M5 12h14m-6-6 6 6-6 6"></path>
              </svg>
            </a>
          </div>
          <p className="visual-footnote">
            {"Real Revamp365 interface. Your research starts here."}
          </p>
        </div>
      </div>
      <div className="container hero-base">
        <p>
          {"Built for your next move."}
        </p>
        <div className="audience-list">
          <span>
            {"Wholesalers"}
          </span>
          <span>
            {"Fix & flip"}
          </span>
          <span>
            {"Rental investors"}
          </span>
          <span>
            {"Acquisition teams"}
          </span>
        </div>
        <a aria-label="Scroll to the product tour" className="scroll-cue" href="#product-tour">
          <span>
            {"Explore"}
          </span>
          <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 24 24" width="18">
            <path d="M12 4v16m-6-6 6 6 6-6" stroke="currentColor" strokeWidth="1.5"></path>
          </svg>
        </a>
      </div>
    </section>);
}
