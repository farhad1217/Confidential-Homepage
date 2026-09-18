import React from 'react';
export default function TourBottom() {
    return (<div className="tour-bottom">
      <p>
        {"Ready to look up your own market?"}
        <br />
        <strong>
          {"Your research workspace is free."}
        </strong>
      </p>
      <a className="button button-gold" href="https://revamp365.ai/register">
        {"Create your free account"}
        <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
          <path d="M5 12h14m-6-6 6 6-6 6"></path>
        </svg>
      </a>
    </div>);
}
