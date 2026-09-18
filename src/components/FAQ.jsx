import React from 'react';
import FaqItem from './FaqItem.jsx';
import content from '../data/content.json';
export default function FAQ() {
    return (<section aria-labelledby="faq-heading" className="section faq-section" data-section-number="05" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro" data-reveal="">
          <p className="eyebrow">
            {"Before you start"}
          </p>
          <h2 id="faq-heading">
            {"A few"}
            <br />
            {"practical answers."}
          </h2>
          <p>
            {"Need the full breakdown?"}
          </p>
          <a className="underlined-link" href="https://revamp365.ai/pricing">
            {"View plans and usage rates "}
            <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
              <path d="M5 12h14m-6-6 6 6-6 6"></path>
            </svg>
          </a>
        </div>
        <div className="faq-list">
          {content.faqs.map((faq, index) => <FaqItem key={faq.q} faq={faq} index={index}/>)}
        </div>
      </div>
    </section>);
}
