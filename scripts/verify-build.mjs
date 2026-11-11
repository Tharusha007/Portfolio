import assert from 'node:assert/strict';
import { readFile, stat, readdir } from 'node:fs/promises';
import { join, extname } from 'node:path';

const paths = ['/', '/projects/flash-stock/', '/projects/fake-job-detection/', '/projects/home-gas-delivery/', '/404.html'];
const fileFor = pathname => join('dist', pathname.endsWith('/') ? `${pathname}index.html` : pathname);
const htmlByPath = new Map(await Promise.all(paths.map(async p => [p, await readFile(fileFor(p), 'utf8')])));
let checked = 0;
for (const [path, html] of htmlByPath) {
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `${path}: one h1 required`);
  assert.match(html, /<title>[^<]+<\/title>/, `${path}: title`);
  assert.match(html, /name="description" content="[^"]+"/, `${path}: description`);
  assert.match(html, /property="og:image"/, `${path}: share image`);
  assert(!html.includes('<!--app-html-->') && !html.includes('<!--seo-->'), `${path}: unrendered HTML`);
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(m => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${path}: duplicate IDs`);
  for (const [, ref] of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    if (!ref.startsWith('/') && !ref.startsWith('#')) continue;
    const url = new URL(ref, `https://portfolio.example${path}`);
    const target = fileFor(url.pathname);
    assert((await stat(target)).isFile(), `${path}: missing ${ref}`);
    if (url.hash) {
      const targetHtml = htmlByPath.get(url.pathname) || await readFile(target, 'utf8');
      assert(targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), `${path}: broken fragment ${ref}`);
    }
    checked++;
  }
  for (const [, set] of html.matchAll(/src[Ss]et="([^"]+)"/g)) {
    for (const item of set.split(',')) { assert((await stat(fileFor(item.trim().split(/\s/)[0]))).isFile()); checked++; }
  }
  if (path !== '/404.html') {
    assert(html.includes('mailto:tharushahanwella4@gmail.com'), `${path}: contact link`);
    assert(html.includes('https://github.com/Tharusha007'), `${path}: GitHub`);
    assert(html.includes('https://www.linkedin.com/in/tharusha-hanwella-3553422a0'), `${path}: LinkedIn`);
  }
}
for (const id of ['home','about','experience','projects','skills','education','contact']) assert(htmlByPath.get('/').includes(`id="${id}"`), `Missing homepage section ${id}`);
assert.match(htmlByPath.get('/404.html'), /noindex, follow/);
assert.equal((await readFile('dist/documents/Tharusha-Hanwella-Resume.pdf')).subarray(0, 5).toString(), '%PDF-');
const assets = await readdir('dist/assets');
for (const asset of assets.filter(a => extname(a) === '.css')) {
  const css = await readFile(join('dist/assets', asset), 'utf8');
  for (const [, reference] of css.matchAll(/url\(["']?(\/[^)"']+)["']?\)/g)) { assert((await stat(fileFor(reference))).isFile(), `Missing CSS asset ${reference}`); checked++; }
}
console.log(`Build verified: ${paths.length} HTML pages, ${checked} local links/assets, ${assets.length} compiled assets; résumé PDF present.`);
