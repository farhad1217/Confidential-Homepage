import { readFile, access, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = (name) => readFile(path.join(root, name), 'utf8');
const pkg = JSON.parse(await read('package.json'));
const config = JSON.parse(await read('vercel.json'));
const content = JSON.parse(await read('src/data/content.json'));
let checks = 0;
const verify = (condition, message) => { assert.ok(condition, message); checks += 1; };

verify(pkg.type === 'module', 'Use ESM modules.');
verify(Boolean(pkg.dependencies.react && pkg.dependencies['react-dom']), 'React dependencies are required.');
verify(Boolean(pkg.devDependencies.vite), 'Vite is required.');
verify(config.framework === 'vite', 'The Vercel preset must be Vite.');
verify(config.outputDirectory === 'dist', 'The build output must be dist.');
verify(config.installCommand === 'npm install', 'Use npm install for the supplied source package.');
verify(pkg.engines.node === '22.x', 'Node must be pinned to the supported 22.x major.');
verify(content.journeys.length === 3, 'Keep all three product journeys.');
verify(content.features.length === 6, 'Keep all six free-workspace cards.');
verify(content.faqs.length === 6, 'Keep all six supplied FAQs.');
for (const journey of content.journeys) {
  verify(journey.scenes.length === 3, `Keep all three ${journey.id} scenes.`);
  for (const scene of journey.scenes) {
    await access(path.join(root, 'public/assets/images', `${scene.image}.webp`));
    verify(Boolean(scene.title && scene.caption), `Complete copy for ${scene.image}.`);
  }
}
const sourceFiles = [];
async function walk(folder) {
  for (const entry of await readdir(path.join(root, folder), { withFileTypes: true })) {
    const relative = path.join(folder, entry.name);
    if (entry.isDirectory()) await walk(relative);
    else if (/\.(jsx?|json|css)$/.test(entry.name)) sourceFiles.push(relative);
  }
}
await walk('src');
for (const file of sourceFiles) {
  const source = await read(file);
  verify(!source.includes('dangerouslySetInnerHTML'), `No raw HTML injection in ${file}.`);
  verify(!/<iframe\b/i.test(source), `No iframe conversion in ${file}.`);
  for (const match of source.matchAll(/(?:from\s*|import\s*)['"](\.[^'"]+)['"]/g)) {
    const target = path.resolve(root, path.dirname(file), match[1]);
    await access(target);
    checks += 1;
  }
  for (const match of source.matchAll(/['"](\/assets\/images\/[^'"$]+)['"]/g)) {
    await access(path.join(root, 'public', match[1]));
    checks += 1;
  }
}
const html = await read('index.html');
verify(html.includes('/src/main.jsx'), 'The HTML entry must mount React.');
verify(!html.includes('assets/js/app.js'), 'Do not mount the legacy controller.');
verify(!Object.values(pkg.scripts).some((command) => /\b(python|pip|uv)\b/.test(command)), 'The deployment must be Node-only.');
console.log(`PASS: ${checks} source, content-structure, import, asset and deployment checks.`);
console.log('This check does not replace vite build or browser testing.');
