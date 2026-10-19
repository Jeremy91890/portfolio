// Capture les sites de src/data/realisations.json (ordinateur + mobile) en WebP dans public/realisations/
// Usage : npm run realisations [-- <id>]   (Chrome et cwebp requis)
import { spawn, execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const { sites } = JSON.parse(readFileSync(join(root, 'src/data/realisations.json'), 'utf8'));
const only = process.argv[2];
const chrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const tmp = mkdtempSync(join(tmpdir(), 'realisations-'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

const formats = [
  { name: 'desktop', width: 1280, height: 800, dpr: 1, mobile: false },
  { name: 'mobile', width: 390, height: 860, dpr: 1.5, mobile: true },
];

// Pilote Chrome via le protocole DevTools : vraie émulation mobile et vraie attente des animations
async function capture(url, { width, height, dpr, mobile }, out) {
  const port = 9300 + Math.floor(Math.random() * 500);
  const proc = spawn(
    chrome,
    ['--headless=new', `--remote-debugging-port=${port}`, `--user-data-dir=${mkdtempSync(join(tmp, 'p-'))}`, '--hide-scrollbars', 'about:blank'],
    { stdio: 'ignore' },
  );
  try {
    let target;
    for (let i = 0; i < 50 && !target; i++) {
      try {
        target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page');
      } catch {
        await sleep(200);
      }
    }
    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise((r) => ws.addEventListener('open', r, { once: true }));
    let id = 0;
    const pending = new Map();
    ws.addEventListener('message', (e) => {
      const m = JSON.parse(e.data);
      pending.get(m.id)?.(m);
      pending.delete(m.id);
    });
    const send = (method, params = {}) =>
      new Promise((r) => {
        pending.set(++id, r);
        ws.send(JSON.stringify({ id, method, params }));
      });

    await send('Network.enable');
    // Badge d'hébergement Netlify : étranger au design du site
    await send('Network.setBlockedURLs', { urls: ['*/.netlify/scripts/hud*'] });
    await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: dpr, mobile });
    if (mobile) await send('Emulation.setTouchEmulationEnabled', { enabled: true });
    await send('Page.navigate', { url });
    await sleep(7000);
    const { result } = await send('Page.captureScreenshot', { format: 'png' });
    writeFileSync(out, Buffer.from(result.data, 'base64'));
    ws.close();
  } finally {
    proc.kill();
  }
}

for (const site of sites.filter((s) => !only || s.id === only)) {
  for (const format of formats) {
    const png = join(tmp, `${site.id}-${format.name}.png`);
    const webp = join(root, 'public/realisations', `${site.id}-${format.name}.webp`);
    await capture(site.url, format, png);
    execFileSync('cwebp', ['-quiet', '-q', '82', png, '-o', webp]);
    console.log(`Capture : public/realisations/${site.id}-${format.name}.webp`);
  }
}
