import React from 'react';
import Modal from './Modal.jsx';
export default function PlatformDialog({ title, onDismiss }) {
    return <Modal id="platform-detail" className="platform-dialog" labelledBy="platform-title" onDismiss={onDismiss}>
      <button aria-label="Close platform details" className="icon-button" data-close-dialog="" onClick={onDismiss}>
        <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
          <path d="m6 6 12 12M6 18 18 6"></path>
        </svg>
      </button>
      <p className="eyebrow">
        {"Platform navigation"}
      </p>
      <h2 id="platform-title">
        {title}
      </h2>
      <p>
        {"The client supplied this navigation label, but not an approved destination or detailed copy. This link needs to be connected to the existing platform before launch."}
      </p>
      <a className="button button-gold" href="https://revamp365.ai/">
        {"Visit current Revamp365 site "}
        <svg aria-hidden="true" className="icon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" viewBox="0 0 24 24" width="24">
          <path d="M14 3h7v7m-1-6L10 14M9 3H3v18h18v-6"></path>
        </svg>
      </a>
    </Modal>;
}
