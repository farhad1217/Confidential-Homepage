import React from 'react';
export default function InvestorStories() {
    return (<section aria-labelledby="proof-heading" className="section proof-section" data-section-number="04" id="investor-stories">
      <div className="container proof-layout">
        <div data-reveal="">
          <p className="eyebrow">
            {"Built for real investors"}
          </p>
          <h2 id="proof-heading">
            {"Hear from investors"}
            <br />
            {"using Revamp365."}
          </h2>
          <p className="section-description">
            {"Their experiences with the platform,"}
            <br />
            {"in their own words."}
          </p>
        </div>
        <article className="proof-card" data-reveal="">
          <span className="placeholder-label">
            {"Customer story \u00b7 Content placeholder"}
          </span>
          <div aria-hidden="true" className="quote-mark">
            {"\u201c"}
          </div>
          <p className="placeholder-quote">
            {"Approved investor quote"}
            <br />
            {"will appear here."}
          </p>
          <div className="proof-person">
            <span className="portrait-placeholder">
              <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
                <path d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 22v-3a8 8 0 0 1 16 0v3"></path>
              </svg>
            </span>
            <div>
              <strong>
                {"Investor name \u00b7 Pending approval"}
              </strong>
              <span>
                {"Role / market \u00b7 Approved source required"}
              </span>
            </div>
          </div>
          <p className="proof-disclaimer">
            {"Layout preview only. No testimonial, identity, or result is being claimed."}
          </p>
        </article>
      </div>
    </section>);
}
