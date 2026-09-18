# React conversion: validation report

## What was actually tested

| Check | Result | Scope |
| --- | --- | --- |
| Dependency-free source check | 134 passed | File structure, relative imports, asset references, content counts, React entry and Vercel configuration declarations |
| JavaScript/JSX syntax transform | 28 files passed | TypeScript 5.8.3 transpileModule parsing; not full type checking or a Vite build |
| Offline browser compatibility | 171 passed, 0 failed | Local React/ReactDOM 18.2.0, real Chromium, native animation fallback and installed fallback fonts |
| JavaScript-disabled fallback | 5 passed | All nine scenes, full-image links and native FAQ disclosure; no-js-validation.json |
| Preservation comparison | All compared files identical | Original copy data, icon data, Premium v2 stylesheet and shipped visual assets; see preservation-check.json |

The offline compatibility run covered widths 320, 360, 390, 768, 1024, 1280 and 1440; the three journeys and all nine scenes; six FAQs; keyboard tab selection; modal focus, Escape and scroll restoration; motion preferences; native SVG and entrance animation; rapid FAQ reversals; and cleanup on unmount. It checked 48 data-driven text blocks plus the main headline, hero description and closing text. Reports contain the individual checks.

The modal also passed a close/reopen lifecycle-race regression check. Real-browser screenshots in compatibility-previews/ come from this same compatibility environment. They are not evidence that the declared production dependencies or downloaded webfonts were run.

## Production dependency installation and build

An actual installation was attempted:

```text
npm install --ignore-scripts --fetch-retries=0 --fetch-timeout=4000
npm error code EAI_AGAIN
npm error request to https://registry.npmjs.org/@playwright%2ftest failed
```

An actual build was then attempted:

```text
npm run build
PASS: 134 source, content-structure, import, asset and deployment checks.
sh: 1: vite: not found
```

The npm registry could not be resolved from the authoring environment. Vite was therefore not installed. No production dist folder or fabricated package-lock.json is included.

**The declared React 19.3.0 / Vite 8.3.0 / GSAP 3.13.0 production combination has NOT been executed or verified here.** The compatibility harness used an existing React 18.2.0 installation only to check the authored components and native animation path. It did not imitate GSAP, and its pass count must not be described as a production-build pass count.

No live Vercel deployment, Firefox/Safari run, physical-device run, comprehensive accessibility audit, Google Fonts network load or paid product/backend integration was performed.

## Release verification on an internet-connected machine

```sh
npm install
npm run build
npm run test:install
npm test
```

The included Playwright suite starts the real Vite production preview and explicitly checks the real GSAP/ScrollTrigger engine. Unlike the compatibility harness, it will not accept the native fallback as a successful GSAP test. This suite is supplied but was not executed here.

After the first successful installation, commit the generated package-lock.json. Review the desktop and mobile website after deployment. Confirm the owner-supplied destinations, starter-credit and coverage claims, and replace the clearly labeled testimonial/navigation placeholders before public launch.

## Confidentiality

No client assets were published as part of conversion. robots.txt, noindex headers and a private source repository are not access control. Apply deployment protection before sharing confidential previews.
