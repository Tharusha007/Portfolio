import { readFile, writeFile, mkdir, rm } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { loadEnv } from 'vite';
import { pages, render, profile } from '../.ssr/entry-server.js';

// Real HTML for every route: share previews and page titles work without JavaScript.
const env = { ...loadEnv('production', process.cwd(), ''), ...process.env };
const candidate = env.SITE_URL || (env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${env.VERCEL_PROJECT_PRODUCTION_URL}` : '');
let origin = '';
if (candidate) {
  const url = new URL(candidate);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error('SITE_URL must be an http(s) URL.');
  origin = url.origin;
}
const escape = value => String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const template = await readFile('dist/index.html', 'utf8');
for (const page of pages) {
  const missing = page.path === '/404.html';
  const canonical = origin && !missing ? `${origin}${page.path}` : '';
  const image = `${origin}/images/social-card.png`;
  const metadata = [
    `<meta name="description" content="${escape(page.description)}">`,
    `<meta name="robots" content="${missing ? 'noindex, follow' : 'index, follow'}">`,
    '<meta property="og:type" content="website">',
    `<meta property="og:site_name" content="${escape(profile.name)}">`,
    `<meta property="og:title" content="${escape(page.title)}">`,
    `<meta property="og:description" content="${escape(page.description)}">`,
    `<meta property="og:image" content="${escape(image)}">`,
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    '<meta property="og:image:alt" content="Tharusha Hanwella — Business Analyst and IT Professional">',
    '<meta name="twitter:card" content="summary_large_image">',
    `<meta name="twitter:title" content="${escape(page.title)}">`,
    `<meta name="twitter:description" content="${escape(page.description)}">`,
    `<meta name="twitter:image" content="${escape(image)}">`,
    ...(canonical ? [`<link rel="canonical" href="${escape(canonical)}">`, `<meta property="og:url" content="${escape(canonical)}">`] : []),
  ];
  if (page.path === '/') {
    const person = { '@context': 'https://schema.org', '@type': 'Person', name: profile.name, jobTitle: 'Intern Business Analyst', sameAs: [profile.linkedin, profile.github], worksFor: { '@type': 'Organization', name: 'Softwatch InfoSys (Pvt) Ltd' }, ...(origin ? { url: `${origin}/`, image: `${origin}${profile.portraitFallback}` } : {}) };
    metadata.push(`<script type="application/ld+json">${JSON.stringify(person).replace(/</g, '\\u003c')}</script>`);
  }
  const html = template.replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`).replace('<!--seo-->', metadata.join('\n    ')).replace('<!--app-html-->', render(page.path));
  const target = missing ? 'dist/404.html' : join('dist', page.path, 'index.html');
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, html);
}
await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n${origin ? `Sitemap: ${origin}/sitemap.xml\n` : ''}`);
if (origin) {
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.filter(p => p.path !== '/404.html').map(p => `<url><loc>${escape(origin + p.path)}</loc></url>`).join('')}</urlset>\n`);
} else console.log('SEO note: set SITE_URL to the NEW deployment URL for absolute share images, canonical URLs and a sitemap.');
await rm('.ssr', { recursive: true, force: true });
console.log(`Prerendered ${pages.length} pages.`);
