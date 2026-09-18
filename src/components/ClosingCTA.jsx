import React from 'react';
export default function ClosingCTA() {
    return (<section aria-labelledby="closing-heading" className="closing-section">
      <div className="container closing-inner">
        <div className="closing-copy">
          <p className="eyebrow">
            {"Your next move"}
          </p>
          <h2 id="closing-heading">
            {"Start with a"}
            <br />
            {"property "}
            <em>
              {"you know."}
            </em>
          </h2>
          <p>
            {"Create your free account. Look up an address, check the comps, and see what the numbers tell you."}
          </p>
          <a className="button button-gold" href="https://revamp365.ai/register">
            {"Create your free account"}
            <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
              <path d="M5 12h14m-6-6 6 6-6 6"></path>
            </svg>
          </a>
          <span className="closing-reassurance">
            {"Free forever \u00b7 No credit card \u00b7 Upgrade only when it makes sense"}
          </span>
        </div>
        <div aria-hidden="true" className="closing-art">
          <div className="outline-house">
            <svg fill="none" height="360" viewBox="0 0 360 360" width="360">
              <path className="closing-draw" d="M45 169 180 52l135 117v140H45Z" stroke="currentColor" strokeWidth="1"></path>
              <path className="closing-draw" d="m75 172 105-91 105 91v108H75Z" stroke="currentColor" strokeWidth="1"></path>
              <path d="M150 280v-94h60v94M110 142h140M180 22v316M18 172h324M18 309h324" stroke="currentColor" strokeDasharray="3 6" strokeWidth="1"></path>
              <circle className="closing-draw" cx="180" cy="172" r="153" stroke="currentColor" strokeWidth="1"></circle>
              <circle className="closing-draw" cx="180" cy="172" opacity=".4" r="175" stroke="currentColor" strokeWidth="1"></circle>
            </svg>
          </div>
          <div className="closing-art-label">
            {"ONE ADDRESS."}
            <br />
            {"A CLEARER PICTURE."}
          </div>
        </div>
      </div>
    </section>);
}
