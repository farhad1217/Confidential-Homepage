import React from 'react';
import FeatureCard from './FeatureCard.jsx';
import content from '../data/content.json';
export default function FreeWorkspace({ onTour }) {
    return (<section aria-labelledby="tools-heading" className="section tools-section" data-section-number="02" id="free-tools">
      <div className="container">
        <div className="section-heading">
          <div data-reveal="">
            <p className="eyebrow">
              {"Your free workspace"}
            </p>
            <h2 id="tools-heading">
              {"From property search"}
              <br />
              {"to a "}
              <em>
                {"clearer offer."}
              </em>
            </h2>
          </div>
          <p className="section-description" data-reveal="">
            {"Find opportunities, check comparable sales, and explore the numbers before you commit to a deal. These tools have no monthly subscription."}
          </p>
        </div>
        <div className="features-grid">
          {content.features.map((feature, index) => <FeatureCard key={feature[2]} feature={feature} index={index} onTour={onTour}/>)}
        </div>
      </div>
    </section>);
}
