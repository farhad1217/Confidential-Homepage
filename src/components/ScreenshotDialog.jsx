import React, { useState } from 'react';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';

export default function ScreenshotDialog({ screenshot, onDismiss }) {
  const [fullSize, setFullSize] = useState(false);
  return <Modal id="image-dialog" className="image-dialog" labelledBy="image-title" onDismiss={onDismiss}>
    <div className="image-dialog-top"><div><span className="eyebrow">Real Revamp365 interface {'\u00b7'} Sample / public data</span><h2 id="image-title">{screenshot.title}</h2></div>
      <div className="dialog-actions"><button type="button" className="icon-button" id="image-fit" aria-pressed={fullSize}
        aria-label="Toggle full-size screenshot" onClick={() => setFullSize((value) => !value)}><Icon name="expand" /></button>
        <button type="button" className="icon-button" data-close-dialog="" aria-label="Close screenshot" onClick={onDismiss}><Icon name="close" /></button></div>
    </div>
    <div className={`image-dialog-body${fullSize ? ' is-full-size' : ''}`}><img id="zoom-image" src={screenshot.src}
      alt={`${screenshot.title} - supplied Revamp365 sample interface`} width="1280" height="720" /></div>
    <p className="image-dialog-caption">Use the expand control to inspect at full size. Press Escape to close.</p>
  </Modal>;
}
