import React from 'react';
export default function TourHeading() {
    return (<div className="section-heading">
      <div data-reveal="">
        <p className="eyebrow">
          {"Explore before you sign up"}
        </p>
        <h2 id="tour-heading">
          {"See your next "}
          <em>
            {"workflow."}
          </em>
        </h2>
      </div>
      <p className="section-description" data-reveal="">
        {"Choose a guided screenshot tour. Start with free research and analysis, then explore optional AI outreach."}
      </p>
    </div>);
}
