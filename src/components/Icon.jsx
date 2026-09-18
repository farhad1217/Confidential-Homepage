import React from 'react';
import paths from '../data/icons.json';
/** Small, decorative icons. Accessible labels belong to the surrounding control. */
export default function Icon({ name = 'arrow', className = '', ...props }) {
    return (<svg aria-hidden="true" className={`icon ${className}`.trim()} fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.65" {...props}>
      <path d={paths[name] || paths.arrow}/>
    </svg>);
}
