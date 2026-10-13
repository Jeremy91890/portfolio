// Injecte le HTML pré-rendu de l'application dans dist/index.html (après `vite build` et `vite build --ssr`)
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const indexPath = `${root}dist/index.html`;

const { render } = await import(`${root}dist-ssr/entry-server.js`);
const template = await readFile(indexPath, 'utf8');

if (!template.includes('<!--app-html-->')) throw new Error('Marqueur <!--app-html--> absent de index.html');

await writeFile(indexPath, template.replace('<!--app-html-->', render()));
await rm(`${root}dist-ssr`, { recursive: true, force: true });
console.log('Pré-rendu : dist/index.html');
