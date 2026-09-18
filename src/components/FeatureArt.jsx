import React from 'react';
export default function FeatureArt({ index }) {
    const illustrations = [
        <svg fill="none" viewBox="0 0 520 176">
      <g opacity=".2" stroke="currentColor">
        <path d="M-30 80 560 30M-20 132 540 78M80-10l35 210M223-10l-20 210M356-10l50 210M474-10l-32 210"></path>
        <path d="m20 63 85-7 7 43-80 9ZM128 43l65-6-2 54-55 2ZM235 83l105-11 5 46-112 17ZM363 31l86-8-3 40-74 8ZM44 123l69-8 5 48-68 12Z"></path>
      </g>
      <path className="art-draw" d="m66 144 82-12 35-40 103-9 44-39 100-11" stroke="currentColor" strokeWidth="1.6"></path>
      <g className="art-node">
        <circle cx="183" cy="92" fill="#fffdfa" r="18"></circle>
        <circle cx="183" cy="92" r="17" stroke="currentColor"></circle>
        <path d="m176 94 7-11 7 11v7h-14Z" stroke="currentColor"></path>
      </g>
      <circle className="art-node" cx="330" cy="44" fill="currentColor" r="6"></circle>
      <circle className="art-node" cx="66" cy="144" fill="currentColor" r="4"></circle>
    </svg>,
        <svg fill="none" viewBox="0 0 400 176">
      <g stroke="currentColor">
        <rect className="art-card" height="112" opacity=".25" rx="7" width="133" x="43" y="32"></rect>
        <rect className="art-card" height="112" opacity=".25" rx="7" width="164" x="193" y="32"></rect>
        <path className="art-draw" d="m60 85 29-27 28 27v33H60Zm61 10h30m-30 16h30M214 59h121m-121 18h87m-87 29h121m-121 16h67" strokeWidth="1.4"></path>
        <circle className="art-node" cx="334" cy="36" fill="#193b32" r="9" stroke="#d6bd88"></circle>
        <path d="m330 36 3 3 4-5" stroke="#d6bd88"></path>
      </g>
    </svg>,
        <svg fill="none" viewBox="0 0 400 176">
      <g opacity=".18" stroke="currentColor">
        <path d="M34 35h333M34 71h333M34 107h333M34 143h333M50 16v144M125 16v144M200 16v144M275 16v144M350 16v144"></path>
      </g>
      <path className="art-draw" d="M50 122 125 96 200 105 275 60 350 46" stroke="currentColor" strokeWidth="2"></path>
      <g fill="currentColor">
        <circle className="art-node" cx="50" cy="122" r="4"></circle>
        <circle className="art-node" cx="125" cy="96" r="4"></circle>
        <circle className="art-node" cx="200" cy="105" r="4"></circle>
        <circle className="art-node" cx="275" cy="60" r="4"></circle>
        <circle className="art-node" cx="350" cy="46" r="4"></circle>
      </g>
    </svg>,
        <svg fill="none" viewBox="0 0 520 176">
      <g stroke="currentColor" strokeWidth="1.2">
        <rect className="art-card" height="114" opacity=".3" rx="7" width="220" x="32" y="30"></rect>
        <path d="M49 55h186M49 83h97m-97 18h73m64-18h45m-45 18h45" opacity=".25"></path>
        <path className="art-draw" d="M76 127h46m-23-13v26M174 127h38M337 81h59m-29-29v59M438 67h32m-32 22h32"></path>
        <circle className="art-node" cx="297" cy="88" fill="currentColor" r="4"></circle>
      </g>
    </svg>,
        <svg fill="none" viewBox="0 0 400 146">
      <g stroke="currentColor">
        <path className="art-draw" d="M121 125V21h127l31 31v73H121Zm127-104v33h31M142 52h79M142 71h114m-114 17h84m-84 17h58" strokeWidth="1.25"></path>
        <circle className="art-node" cx="262" cy="108" fill="#fffdfa" r="22"></circle>
        <path className="art-draw" d="m251 108 8 8 15-18" strokeWidth="2"></path>
      </g>
    </svg>,
        <svg fill="none" viewBox="0 0 400 146">
      <g stroke="currentColor" strokeLinecap="round" strokeWidth="3">
        <path className="voice-bar" d="M45 65v16"></path>
        <path className="voice-bar" d="M61 58v30"></path>
        <path className="voice-bar" d="M77 42v62"></path>
        <path className="voice-bar" d="M93 61v24"></path>
        <path className="voice-bar" d="M109 35v76"></path>
        <path className="voice-bar" d="M125 50v46"></path>
        <path className="voice-bar" d="M141 61v24"></path>
        <path className="voice-bar" d="M157 46v54"></path>
        <path className="voice-bar" d="M173 61v24"></path>
        <path className="voice-bar" d="M189 38v70"></path>
        <path className="voice-bar" d="M205 20v106"></path>
        <path className="voice-bar" d="M221 36v74"></path>
        <path className="voice-bar" d="M237 54v38"></path>
        <path className="voice-bar" d="M253 44v58"></path>
        <path className="voice-bar" d="M269 60v26"></path>
        <path className="voice-bar" d="M285 34v78"></path>
        <path className="voice-bar" d="M301 46v54"></path>
        <path className="voice-bar" d="M317 58v30"></path>
        <path className="voice-bar" d="M333 65v16"></path>
        <path className="voice-bar" d="M349 68v10"></path>
      </g>
    </svg>
    ];
    return illustrations[index] || null;
}
