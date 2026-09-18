/**
 * Revamp365 / Atelier motion system.
 * GSAP + ScrollTrigger are the preferred engine. A native WAAPI/IntersectionObserver
 * fallback keeps the same interactions usable when a CDN, CSP, or network blocks them.
 * No scroll hijacking, no infinite loops, no hidden essential content in the CSS.
 */


export function initRevampMotion(root, options = {}) {
    const global = window;
    if (!(root instanceof HTMLElement)) throw new TypeError('A mounted homepage root is required.');
    const gsap = options.gsap || global.gsap;
    const ST = options.ScrollTrigger || global.ScrollTrigger;
    const hasGSAP = Boolean(gsap && ST);
    const $ = selector => root.querySelector(selector);
    const $$ = selector => Array.from(root.querySelectorAll(selector));
    const lifecycle = new AbortController();
    const on = (el, type, fn, opts = {}) => el && el.addEventListener(type, fn, { ...opts, signal: lifecycle.signal });
    const media = global.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = global.matchMedia('(min-width: 1021px) and (hover: hover) and (pointer: fine)');
    const seen = new WeakSet();
    const manualOff = Boolean(options.disabled);
    let stopped = false;
    let introPlayed = options.intro === false;
    let context = null;
    let matchMedia = null;
    let nativeObserver = null;
    let progressFrame = 0;
    let engineLifecycle = null;
    let revealTweens = new Map();
    let nativeAnimations = new Set();
    const enabled = () => !media.matches && !manualOff && !stopped;
    const boxVisible = el => {
      const r = el.getBoundingClientRect();
      return r.height > 0 && r.top < innerHeight && r.bottom > 0;
    };

    function animateNative(el, frames, config = {}) {
      if (!el || !enabled() || typeof el.animate !== 'function') return null;
      const animation = el.animate(frames, { duration:650, easing:'cubic-bezier(.22,1,.36,1)', ...config });
      nativeAnimations.add(animation);
      animation.finished.then(() => nativeAnimations.delete(animation), () => nativeAnimations.delete(animation));
      return animation;
    }
    function inContext(fn) {
      if (context) context.add(fn);
      else fn();
    }
    function reveal(el, delay = 0) {
      if (seen.has(el)) return;
      seen.add(el);
      if (hasGSAP) {
        const tween = gsap.fromTo(el, { y:24, opacity:0 }, {
          y:0, opacity:1, duration:.72, delay, ease:'power3.out',
          clearProps:'transform,opacity', onComplete:() => revealTweens.delete(el)
        });
        revealTweens.set(el, tween);
      } else animateNative(el, [{ transform:'translateY(24px)', opacity:0 }, { transform:'translateY(0)', opacity:1 }], { delay:delay * 1000 });
    }
    function drawSVG(svg, immediate = false) {
      const paths = Array.from(svg.querySelectorAll('.art-draw, .closing-draw, .blueprint-path, .rail-path, .access-path'));
      const nodes = Array.from(svg.querySelectorAll('.art-node, .blueprint-node, .rail-node'));
      paths.forEach((path, i) => {
        if (typeof path.getTotalLength !== 'function') return;
        const length = Math.ceil(path.getTotalLength());
        if (hasGSAP) {
          gsap.fromTo(path, { strokeDasharray:`${length} ${length}`, strokeDashoffset:length }, {
            strokeDashoffset:0, duration:immediate ? 1.25 : 1.4, delay:i*.09, ease:'power2.inOut',
            clearProps:'strokeDasharray,strokeDashoffset'
          });
        } else animateNative(path, [
          { strokeDasharray:`${length} ${length}`, strokeDashoffset:String(length) },
          { strokeDasharray:`${length} ${length}`, strokeDashoffset:'0' }
        ], { duration:1400, delay:i*80 });
      });
      nodes.forEach((node, i) => {
        if (hasGSAP) gsap.fromTo(node, { opacity:0 }, { opacity:1, duration:.6, delay:.3+i*.11, clearProps:'opacity' });
        else animateNative(node, [{ opacity:0 }, { opacity:1 }], { duration:650, delay:300+i*110 });
      });
      const bars = Array.from(svg.querySelectorAll('.voice-bar'));
      bars.forEach((bar,i) => {
        if (hasGSAP) gsap.fromTo(bar, { scaleY:.28, transformOrigin:'50% 50%' }, {
          scaleY:1, duration:.42, delay:i*.018, repeat:2, yoyo:true, ease:'sine.inOut', clearProps:'transform,transformOrigin'
        });
        else animateNative(bar, [{ transform:'scaleY(.28)' }, { transform:'scaleY(1)' }], {
          duration:480, delay:i*17, iterations:3, direction:'alternate', easing:'ease-in-out'
        });
      });
    }
    function playIntro() {
      if (introPlayed || scrollY > 100) return;
      introPlayed = true;
      const lines = $$('.hero-line .line-inner');
      const pieces = $$('.hero-eyebrow, .hero-description, .hero-ctas, .reassurance, .hero-upgrade');
      if (hasGSAP) {
        const tl = gsap.timeline({ defaults:{ ease:'power3.out' } });
        tl.fromTo(lines, { yPercent:105, opacity:0 }, { yPercent:0, opacity:1, duration:1, stagger:.11, clearProps:'transform,opacity' }, .04)
          .fromTo(pieces, { y:14, opacity:0 }, { y:0, opacity:1, duration:.75, stagger:.05, clearProps:'transform,opacity' }, .17)
          .fromTo($('.hero-browser'), { y:25, opacity:0 }, { y:0, opacity:1, duration:1, clearProps:'transform,opacity' }, .23)
          .fromTo($('.free-note'), { y:12, scale:.97, opacity:0 }, { y:0, scale:1, opacity:1, duration:.8, clearProps:'transform,opacity' }, .55);
      } else {
        lines.forEach((el,i) => animateNative(el, [{ transform:'translateY(105%)', opacity:0 }, { transform:'translateY(0)', opacity:1 }], { duration:1000, delay:40+i*110 }));
        pieces.forEach((el,i) => animateNative(el, [{ transform:'translateY(14px)', opacity:0 }, { transform:'translateY(0)', opacity:1 }], { duration:750, delay:170+i*50 }));
        animateNative($('.hero-browser'), [{ transform:'translateY(25px)', opacity:0 }, { transform:'translateY(0)', opacity:1 }], { duration:1000, delay:230 });
        animateNative($('.free-note'), [{ transform:'translateY(12px) scale(.97)', opacity:0 }, { transform:'none', opacity:1 }], { duration:800, delay:550 });
      }
      $$('.hero-atmosphere svg, .intelligence-rail svg, .free-note svg').forEach(svg => drawSVG(svg, true));
    }
    function alignTab(animate = true) {
      if (!hasGSAP || !enabled()) return;
      const active = $('.journey-tab.is-active');
      const indicator = $('.journey-indicator');
      if (!active || !indicator) return;
      gsap.to(indicator, {
        x:active.offsetLeft, width:active.offsetWidth, duration:animate ? .38 : 0,
        ease:'power3.out', overwrite:true
      });
    }
    function updateProgress() {
      progressFrame = 0;
      const bar = $('.reading-progress span');
      if (!bar) return;
      const max = document.documentElement.scrollHeight - innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, scrollY/max)) : 0;
      bar.style.transform = `scaleX(${progress})`;
    }
    function refresh() {
      if (hasGSAP && enabled()) ST.refresh();
      updateProgress();
    }
    function stopEngine() {
      if (matchMedia) { matchMedia.revert(); matchMedia=null; }
      if (context) { context.revert(); context=null; }
      if (nativeObserver) { nativeObserver.disconnect(); nativeObserver=null; }
      if (engineLifecycle) { engineLifecycle.abort(); engineLifecycle=null; }
      nativeAnimations.forEach(animation => animation.cancel());
      nativeAnimations.clear();
      revealTweens.clear();
      cancelAnimationFrame(progressFrame);
      progressFrame=0;
    }
    function setup() {
      stopEngine();
      if (stopped) return;
      const reduced = !enabled();
      root.dataset.motion = reduced ? 'reduced' : (hasGSAP ? 'full' : 'native');
      root.dataset.motionEngine = hasGSAP ? 'gsap-scrolltrigger' : 'native-fallback';
      updateProgress();
      if (reduced) return;
      engineLifecycle = new AbortController();
      const engineOn = (el,type,fn,opts={}) => el.addEventListener(type,fn,{...opts,signal:engineLifecycle.signal});
      if (hasGSAP) {
        gsap.registerPlugin(ST);
        context = gsap.context(() => {
          playIntro();
          $$('[data-reveal]').forEach(el => {
            if (seen.has(el) || el.getBoundingClientRect().bottom < 0) return;
            if (boxVisible(el)) { seen.add(el); return; }
            ST.create({ trigger:el, start:'top 92%', once:true,
              onEnter:() => inContext(() => reveal(el)) });
          });
          $$('.feature-illustration svg, .closing-art svg').forEach(svg => {
            ST.create({ trigger:svg, start:'top 88%', once:true,
              onEnter:() => inContext(() => drawSVG(svg)) });
          });
          gsap.fromTo($('.reading-progress span'), {scaleX:0}, { scaleX:1, ease:'none',
            scrollTrigger:{ start:0, end:() => Math.max(1,document.documentElement.scrollHeight-innerHeight), scrub:.15, invalidateOnRefresh:true }
          });
          alignTab(false);
        }, root);
        matchMedia=gsap.matchMedia();
        matchMedia.add('(min-width: 1021px) and (hover: hover) and (pointer: fine)', () => {
          gsap.to($('.hero-visual'), { y:-22, ease:'none', scrollTrigger:{ trigger:$('.hero'), start:'top top', end:'bottom top', scrub:.7 } });
          gsap.to($('.hero-blueprint'), { y:48, ease:'none', scrollTrigger:{ trigger:$('.hero'), start:'top top', end:'bottom top', scrub:1 } });
        }, root);
      } else {
        playIntro();
        if ('IntersectionObserver' in global) {
          nativeObserver=new IntersectionObserver(entries => entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            const el=entry.target;
            if (el.matches('svg')) drawSVG(el);
            else reveal(el);
            nativeObserver.unobserve(el);
          }), { rootMargin:'0px 0px -5% 0px', threshold:.05 });
          $$('[data-reveal], .feature-illustration svg, .closing-art svg').forEach(el => {
            if (!el.matches('svg') && boxVisible(el)) seen.add(el);
            else nativeObserver.observe(el);
          });
        }

      }
      engineOn(global,'resize',() => { inContext(() => alignTab(false)); updateProgress(); },{passive:true});
      // Arrow/outline feedback only. Pointer movement never displaces a CTA hit target.
      if (finePointer.matches) {
        $$('.feature-card').forEach(card => engineOn(card,'pointerenter',() => {
          if (hasGSAP) inContext(() => {
            const icon = card.querySelector('.feature-top>.icon');
            if (icon) gsap.fromTo(icon,{y:2},{y:0,duration:.35,ease:'power2.out',clearProps:'transform'});
          });
        }, {passive:true}));
      }
      $$('img[loading="lazy"]').forEach(img => engineOn(img,'load',refresh,{once:true}));
    }
    // Disclosure animations are managed by the FaqItem React component.
    on(root,'revamp:scenechange',event => {
      if (!enabled()) return;
      const scene=event.detail.scene;
      if (hasGSAP) inContext(() => {
        gsap.fromTo(scene,{opacity:.3,y:7},{opacity:1,y:0,duration:.38,ease:'power2.out',overwrite:true,clearProps:'opacity,transform'});
        ST.refresh();
      });
      else animateNative(scene,[{opacity:.3,transform:'translateY(7px)'},{opacity:1,transform:'none'}],{duration:380});
    });
    on(root,'revamp:journeychange',event => {
      if (!enabled()) return;
      if (hasGSAP) inContext(() => {
        alignTab();
        gsap.fromTo(event.detail.panel,{opacity:.55,y:8},{opacity:1,y:0,duration:.42,ease:'power2.out',overwrite:true,clearProps:'opacity,transform'});
        ST.refresh();
      });
      else animateNative(event.detail.panel,[{opacity:.55,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:420});
    });
    on(root,'revamp:dialogopen',event => {
      if (!enabled()) return;
      const dialog=event.detail.dialog;
      if (hasGSAP) inContext(() => gsap.fromTo(dialog,
        dialog.id==='mobile-menu'?{x:40,opacity:0}:{y:14,scale:.98,opacity:0},
        {x:0,y:0,scale:1,opacity:1,duration:.35,ease:'power3.out',clearProps:'opacity,transform',overwrite:true}
      ));
      else animateNative(dialog,[{opacity:0,transform:dialog.id==='mobile-menu'?'translateX(40px)':'translateY(14px) scale(.98)'},{opacity:1,transform:'none'}],{duration:350});
    });
    // Keyboard focus takes priority over an unfinished entrance animation.
    on(root,'focusin',event => {
      const el=event.target.closest('[data-reveal]');
      if (el && revealTweens.has(el)) revealTweens.get(el).progress(1);
    });
    on(global,'scroll',() => { if ((!hasGSAP || !enabled()) && !progressFrame) progressFrame=requestAnimationFrame(updateProgress); },{passive:true});
    setup();
    if (document.fonts) document.fonts.ready.then(() => { if (!stopped) refresh(); });
    return function cleanupMotion() {
      stopped=true;
      stopEngine();
      lifecycle.abort();
      root.dataset.motion='static';
      delete root.dataset.motionEngine;
      const bar=$('.reading-progress span');
      if (bar) bar.style.transform='';
    };
  }

