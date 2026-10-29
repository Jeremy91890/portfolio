// Injecte le HTML pré-rendu de l'application dans dist/index.html (après `vite build` et `vite build --ssr`),
// puis crée une page par guide (dist/guides/<slug>/index.html) avec son propre <head>
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = `${root}dist/index.html`;
const APP = '<!--app-html-->';

const { render, faqSchema, pages } = await import(`${root}dist-ssr/entry-server.js`);
const template = await readFile(indexPath, 'utf8');

if (!template.includes(APP)) throw new Error('Marqueur <!--app-html--> absent de index.html');

// "<" échappé : un texte ne peut pas fermer la balise <script>
const ldJson = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
const attr = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Remplacement qui doit trouver sa cible : si le <head> généré change de forme, le build échoue au lieu de publier une page fausse
const replaceOnce = (html, pattern, value) => {
  if (!pattern.test(html)) throw new Error(`Pré-rendu : ${pattern} introuvable dans index.html`);
  return html.replace(pattern, () => value);
};
const setMeta = (html, attribute, name, content) =>
  replaceOnce(html, new RegExp(`<meta ${attribute}="${name}" content="[^"]*"`), `<meta ${attribute}="${name}" content="${attr(content)}"`);

await writeFile(indexPath, template.replace(APP, () => render('/')).replace('</head>', () => `${ldJson(faqSchema())}\n  </head>`));

for (const page of pages()) {
  let html = replaceOnce(template, /<title>.*?<\/title>/, `<title>${attr(page.title)}</title>`);
  html = setMeta(html, 'name', 'description', page.description);
  html = replaceOnce(html, /<link rel="canonical" href="[^"]*"/, `<link rel="canonical" href="${page.url}"`);
  html = setMeta(html, 'property', 'og:type', page.type);
  html = setMeta(html, 'property', 'og:url', page.url);
  html = setMeta(html, 'property', 'og:title', page.title);
  html = setMeta(html, 'property', 'og:description', page.description);
  // Chaque page a son propre graphe (entreprise et auteur repris de src/data/schema.ts, plus la page elle-même)
  html = replaceOnce(html, /<script type="application\/ld\+json">[\s\S]*?<\/script>/, ldJson(page.schema));
  // Guides : dates de publication et de mise à jour lues par les réseaux sociaux et les moteurs
  if (page.published) {
    html = html.replace('</head>', () =>
      `  <meta property="article:published_time" content="${page.published}">\n    <meta property="article:modified_time" content="${page.updated}">\n  </head>`,
    );
  }
  html = html.replace(APP, () => render(page.path));

  const dir = `${root}dist${page.path}`;
  await mkdir(dir, { recursive: true });
  await writeFile(`${dir}index.html`, html);
}

await rm(`${root}dist-ssr`, { recursive: true, force: true });
console.log(`Pré-rendu : dist/index.html + ${pages().length} pages`);
