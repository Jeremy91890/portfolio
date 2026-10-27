// Génère grille-tarifaire.pdf (A4 paysage) à partir de src/data/pricing.json et src/data/site.ts
// Usage : node scripts/grille-tarifaire.mjs
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { transform } from 'esbuild';

const root = resolve(import.meta.dirname, '..');
// Charge un module TS sans dépendance (site.ts, fill-pricing.ts)
const importTs = async (file) => {
  const { code } = await transform(readFileSync(join(root, file), 'utf8'), { loader: 'ts', format: 'esm' });
  return import('data:text/javascript,' + encodeURIComponent(code));
};
const { site, legal } = await importTs('src/data/site.ts');
const { fillPricing } = await importTs('src/data/fill-pricing.ts');
const pricing = fillPricing(JSON.parse(readFileSync(join(root, 'src/data/pricing.json'), 'utf8')));

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT = join(root, 'grille-tarifaire.pdf');

const { header, plans, features, includedInAll, oneTimePurchase: once, options } = pricing;
const { annualFreeMonths, launchDays, minCommitmentMonths, criticalResponseHours } = pricing;
const font = (w) => pathToFileURL(join(root, `node_modules/@fontsource/poppins/files/poppins-latin-${w}-normal.woff2`)).href;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const eur = (n) => `${n.toLocaleString("fr-FR")}&nbsp;€`;
const today = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

const check = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 8.5l3 3 6-7" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

function cell(c) {
  if (!c) return '<span class="dash">—</span>';
  if (c.included) {
    return `<span class="inc">${check}Inclus</span>${c.detail ? `<span class="inc-detail">${esc(c.detail)}</span>` : ''}`;
  }
  return esc(c.text);
}

const table = `
<table class="grid">
  <thead>
    <tr>
      <td class="corner">
        <div class="all">
          <h2>${esc(includedInAll.title)}</h2>
          <ul>${includedInAll.items.map((i) => `<li>${check}${esc(i)}</li>`).join('')}</ul>
        </div>
      </td>
      ${plans
        .map(
          (p) => `
      <th class="${p.featured ? 'feat' : ''}">
        ${p.ribbon ? `<span class="ribbon">${esc(p.ribbon)}</span>` : ''}
        <span class="p-name">${esc(p.name)}</span>
        <span class="p-price">${p.price}<small> ${esc(p.period)}</small></span>
        <span class="p-annual">ou ${eur(p.price * (12 - annualFreeMonths))}/an (${annualFreeMonths} mois offerts)</span>
        <span class="p-commit">${esc(p.commitment)}</span>
        <span class="p-tag">${esc(p.promise)}</span>
      </th>`,
        )
        .join('')}
    </tr>
  </thead>
  <tbody>
    ${features
      .map(
        (f) => `
    <tr>
      <th>${esc(f.label)}${f.hint ? `<span class="hint">${esc(f.hint)}</span>` : ''}</th>
      ${plans.map((p) => `<td class="${p.featured ? 'feat' : ''}">${cell(f[p.id])}</td>`).join('')}
    </tr>`,
      )
      .join('')}
  </tbody>
</table>`;

// Page 2 : les questions qu'un client se pose avant de signer (reprend la FAQ du site)
const faq = [
  {
    t: 'Prix et paiement',
    b: `<p>Les prix indiqués sont <strong>ceux que vous payez</strong> : aucune TVA ne s’ajoute. Mise en place : <strong>0 €</strong>.</p>
        <p>Paiement par <strong>prélèvement SEPA</strong>, chaque mois.</p>
        <p class="small">TVA non applicable, art. 293 B du CGI (micro-entreprise).</p>`,
  },
  {
    t: 'Paiement mensuel ou annuel',
    b: `<table class="mini">
          <tr><th></th><th>Par mois</th><th>Par an</th></tr>
          ${plans
            .map((p) => `<tr><td>${esc(p.name)}</td><td>${eur(p.price)}</td><td><strong>${eur(p.price * (12 - annualFreeMonths))}</strong></td></tr>`)
            .join('')}
        </table>
        <p class="small">À l’année, ${annualFreeMonths} mois offerts. Si vous arrêtez en cours d’année, les mois écoulés sont recalculés au tarif mensuel et le reste vous est remboursé.</p>`,
  },
  {
    t: 'Engagement et changement de formule',
    b: `<p>Toutes les formules : <strong>${minCommitmentMonths} mois minimum</strong>, puis résiliation par simple e-mail, effective à la fin du mois en cours.</p>
        <p>Changer de formule est possible en cours de route.</p>`,
  },
  {
    t: 'Options',
    b: `<ul>
          <li>Modifier votre site vous-même (Essentiel) : <strong>+${options.backofficePerMonth}&nbsp;€/mois</strong></li>
          <li>Adresse e-mail pro (Essentiel) : <strong>+${options.emailPerMonth}&nbsp;€/mois</strong></li>
          <li>Newsletter (Essentiel, Pro) : <strong>+${options.newsletterPerMonth}&nbsp;€/mois</strong> — incluse en Premium</li>
          <li>Outil sur mesure (réservation sans commission, devis et factures, carte de fidélité, assistant clients) : <strong>sur devis</strong>, avec n’importe quelle formule</li>
          <li>Modification au-delà du quota : <strong>${eur(options.extraModification)}</strong></li>
        </ul>`,
  },
  {
    t: `Mise en ligne en ${launchDays} jours`,
    b: `<p>Textes rédigés pour vous en Pro et Premium ; en Essentiel, vous les fournissez et je les corrige. Photos : les vôtres, ou des photos libres de droits (séance photo non incluse).</p>
        <p>Votre site est en ligne <strong>${launchDays} jours</strong> après la validation de vos contenus.</p>`,
  },
  {
    t: 'Bug ou modification ?',
    b: `<p>Un <strong>bug</strong> est corrigé gratuitement ; site inaccessible : pris en charge sous ${criticalResponseHours}&nbsp;h ouvrées.</p>
        <p>Une <strong>modification</strong> (un élément, ou une liste envoyée en une fois) est décomptée de votre quota. Les modifications non utilisées ne sont pas reportées.</p>`,
  },
  {
    t: 'Si vous arrêtez',
    b: `<p>Je vous transfère votre <strong>nom de domaine</strong> et vous remets vos textes et photos.</p>
        <p>Rachat du site complet : ${plans
          .map((p) => `${esc(p.name)} ${p.buyoutPrice ? eur(p.buyoutPrice) : 'sur devis'}`)
          .join(', ')}.</p>`,
  },
  {
    t: 'Si j’arrête mon activité',
    b: `<p>Je vous remets <strong>gratuitement</strong> votre site complet, prêt à être repris par un autre prestataire.</p>`,
  },
  {
    t: 'Payer une seule fois ?',
    b: `<p>C’est possible, sur devis.</p>
        <p>Décrivez-moi votre projet : je vous fais un <strong>devis sur mesure en ${once.quoteMaxDays}&nbsp;jours maximum</strong>.</p>`,
  },
];

const html = `<!doctype html>
<html lang="fr">
<head>
<meta charset="utf-8">
<title>Grille tarifaire – ${esc(site.name)}</title>
<style>
  @font-face { font-family: Poppins; font-weight: 400; src: url(${font(400)}) format('woff2'); }
  @font-face { font-family: Poppins; font-weight: 500; src: url(${font(500)}) format('woff2'); }
  @font-face { font-family: Poppins; font-weight: 600; src: url(${font(600)}) format('woff2'); }
  @font-face { font-family: Poppins; font-weight: 700; src: url(${font(700)}) format('woff2'); }

  @page { size: A4 landscape; margin: 0; }
  :root {
    --navy: #14213d; --navy-2: #22335a; --orange: #f46a2e; --orange-text: #c2410c;
    --orange-soft: #fff1e8; --gray: #5b6475; --gray-on-dark: #c9d1e3;
    --surface: #f6f7fa; --border: #e3e6ec; --dash: #b4bac6;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; }
  body {
    font-family: Poppins, system-ui, sans-serif; color: var(--navy); font-size: 8.4pt; line-height: 1.4;
    -webkit-print-color-adjust: exact; print-color-adjust: exact;
  }
  h1, h2, h3, p { margin: 0; }
  ul { margin: 0; padding: 0; list-style: none; }
  strong { font-weight: 600; }

  .page { width: 297mm; height: 210mm; overflow: hidden; display: flex; flex-direction: column; break-after: page; }
  .page:last-child { break-after: auto; }

  /* Bandeau */
  .top { background: var(--navy); color: #fff; padding: 6.5mm 12mm 6mm; display: flex; justify-content: space-between; align-items: center; gap: 10mm; }
  .eyebrow { color: var(--orange); font-size: 7.5pt; font-weight: 600; letter-spacing: .12em; }
  .top h1 { font-size: 19pt; line-height: 1.15; letter-spacing: -.02em; margin-top: 1.5mm; }
  .top .sub { color: var(--gray-on-dark); max-width: 120mm; margin-top: 2mm; font-size: 9pt; }
  .who { text-align: right; font-size: 8pt; color: var(--gray-on-dark); white-space: nowrap; }
  .who strong { color: #fff; font-size: 10pt; display: block; }
  .badges { display: grid; grid-template-columns: repeat(2, 54mm); gap: 2mm; flex: none; }
  .badge { background: var(--navy-2); border-radius: 6px; padding: 1.6mm 3mm; }
  .badge b { display: block; color: #fff; font-size: 9.5pt; font-weight: 700; line-height: 1.25; }
  .badge span { color: var(--gray-on-dark); font-size: 7pt; line-height: 1.3; display: block; }

  .body { flex: 1; padding: 4mm 12mm 0; display: flex; flex-direction: column; min-height: 0; }

  .grid thead td.corner { padding: 0 3mm 2.2mm 0; vertical-align: bottom; }
  .all { background: var(--orange-soft); border-radius: 6px; padding: 2.2mm 3mm; }
  .all h2 { font-size: 8pt; font-weight: 700; color: var(--orange-text); margin-bottom: .8mm; }
  .all li { display: flex; align-items: flex-start; gap: 1.2mm; font-size: 7.3pt; line-height: 1.3; padding: .3mm 0; }
  .all li svg { margin-top: .3mm; }
  .all svg, .inc svg { width: 3mm; height: 3mm; color: var(--orange-text); flex: none; }

  /* Comparatif */
  .grid { width: 100%; border-collapse: separate; border-spacing: 0; table-layout: fixed; }
  .grid th, .grid td { text-align: left; vertical-align: top; padding: 1.1mm 3mm; border-bottom: 1px solid var(--border); font-size: 8pt; line-height: 1.35; }
  .grid col.lab { width: 58mm; }
  .grid thead th { border-bottom: 0; padding-top: 3.2mm; padding-bottom: 2.2mm; position: relative; background: var(--surface); }
  .grid thead th:first-of-type { border-top-left-radius: 8px; }
  .grid thead th:last-child { border-top-right-radius: 8px; }
  .grid thead th.feat { background: var(--navy); color: #fff; }
  .grid td.feat { background: #fbf4ef; }
  .grid tbody tr:last-child > * { border-bottom: 0; }
  .grid tbody th { font-weight: 600; font-size: 8pt; }
  .hint { display: block; font-weight: 400; color: var(--gray); font-size: 7pt; }
  .ribbon { position: absolute; top: -2.2mm; right: 3mm; background: var(--orange); color: var(--navy); font-size: 6.5pt; font-weight: 700; letter-spacing: .08em; padding: .6mm 2.2mm; border-radius: 99px; }
  .p-name { display: block; font-size: 11pt; font-weight: 700; }
  .feat .p-name { color: var(--orange); }
  .p-price { display: block; font-size: 20pt; font-weight: 700; line-height: 1.1; letter-spacing: -.02em; }
  .p-price small { font-size: 9pt; font-weight: 500; letter-spacing: 0; }
  .p-annual { display: block; font-size: 7.4pt; color: var(--gray); }
  .feat .p-annual, .feat .p-tag { color: var(--gray-on-dark); }
  .p-commit { display: inline-block; margin: 1mm 0 .8mm; font-size: 7.2pt; font-weight: 600; padding: .4mm 2mm; border-radius: 99px; background: #fff; border: 1px solid var(--border); }
  .feat .p-commit { background: var(--navy-2); border-color: var(--navy-2); }
  .p-tag { display: block; font-weight: 400; font-size: 7.6pt; color: var(--gray); }
  .dash { color: var(--dash); }
  .inc { display: inline-flex; align-items: center; gap: 1mm; font-weight: 600; color: var(--orange-text); }
  .inc-detail { display: block; color: var(--gray); font-size: 7.4pt; }

  .note { font-size: 7pt; color: var(--gray); margin-top: 2mm; }

  .foot { padding: 2.5mm 12mm 4.5mm; display: flex; justify-content: space-between; font-size: 7pt; color: var(--gray); border-top: 1px solid var(--border); margin: 0 12mm; padding-left: 0; padding-right: 0; }

  /* Page 2 */
  .top--slim { padding-top: 7mm; padding-bottom: 6mm; align-items: flex-end; }
  .top--slim h1 { font-size: 17pt; }
  .cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3.5mm; }
  .card { border: 1px solid var(--border); border-radius: 8px; padding: 3mm 4mm; }
  .card h3 { font-size: 9.4pt; font-weight: 700; margin-bottom: 1.4mm; display: flex; align-items: center; gap: 2mm; }
  .card h3::before { content: ''; width: 1.6mm; height: 3.6mm; border-radius: 2px; background: var(--orange); }
  .card p + p, .card p + ul, .card ul + p, .card table + p { margin-top: 1.2mm; }
  .card li { padding-left: 3mm; position: relative; }
  .card li::before { content: '•'; position: absolute; left: 0; color: var(--orange-text); }
  .small { font-size: 7.2pt; color: var(--gray); }
  .mini { border-collapse: collapse; width: 100%; font-size: 8pt; }
  .mini th { font-weight: 500; color: var(--gray); font-size: 7.2pt; text-align: right; padding: 0 0 .8mm; }
  .mini td { padding: .5mm 0; border-top: 1px solid var(--border); text-align: right; }
  .mini td:first-child { text-align: left; font-weight: 600; }

  .cta { margin-top: 4mm; display: flex; gap: 4mm; align-items: stretch; }
  .cta > div { border-radius: 8px; padding: 3.5mm 5mm; }
  .cta .quote { flex: 1.3; background: var(--orange-soft); }
  .cta .contact { flex: 1; background: var(--navy); color: #fff; }
  .cta h3 { font-size: 10pt; font-weight: 700; margin-bottom: 1mm; }
  .cta .contact p { color: var(--gray-on-dark); }
  .cta .contact strong { color: #fff; }
</style>
</head>
<body>

<section class="page">
  <header class="top">
    <div>
      <p class="eyebrow">${esc(header.eyebrow)} · GRILLE TARIFAIRE</p>
      <h1>${esc(header.title)}</h1>
      <p class="sub">${esc(header.subtitle)}</p>
    </div>
    <ul class="badges">
      ${header.badges.map((b) => `<li class="badge"><b>${esc(b.value)}</b><span>${esc(b.label)}</span></li>`).join('')}
    </ul>
  </header>

  <div class="body">
    ${table.replace('<table class="grid">', '<table class="grid"><colgroup><col class="lab"><col><col><col></colgroup>')}
    <p class="note">Bug, modification, paiement, résiliation : tous les détails en page 2.</p>
  </div>

  <footer class="foot">
    <span><strong>${esc(site.name)}</strong> · ${esc(site.role)} · ${esc(site.phone)} · ${esc(site.email)}</span>
    <span>Prix nets, TVA non applicable, art. 293 B du CGI · Tarifs en vigueur au ${today}</span>
    <span>1 / 2</span>
  </footer>
</section>

<section class="page">
  <header class="top top--slim">
    <div>
      <p class="eyebrow">BON À SAVOIR</p>
      <h1>Tout ce que vous vous demandez avant de vous lancer</h1>
    </div>
    <div class="who">
      <strong>${esc(site.name)}</strong>
      ${esc(site.phone)} · ${esc(site.email)}
    </div>
  </header>

  <div class="body">
    <div class="cards">
      ${faq.map((c) => `<article class="card"><h3>${esc(c.t)}</h3>${c.b}</article>`).join('')}
    </div>

    <div class="cta">
      <div class="quote">
        <h3>Votre besoin ne rentre dans aucune formule ?</h3>
        <p>Click &amp; collect, application mobile, outil métier… Je vous fais un
        <strong>devis personnalisé</strong>, adapté à votre budget et à votre façon de travailler.
        Vous avez déjà un site ? Je le modernise en préservant votre place sur Google.</p>
      </div>
      <div class="contact">
        <h3>Une question ? Je vous réponds personnellement.</h3>
        <p><strong>${esc(site.phone)}</strong> · <strong>${esc(site.email)}</strong></p>
        <p>${esc(site.name)}</p>
      </div>
    </div>
  </div>

  <footer class="foot">
    <span>${esc(site.name)} · ${esc(legal.status)} · SIRET ${esc(legal.siret)} · ${esc(legal.address)} · TVA non applicable, art. 293 B du CGI</span>
    <span>2 / 2</span>
  </footer>
</section>

</body>
</html>`;

const dir = mkdtempSync(join(tmpdir(), 'grille-'));
const htmlPath = join(dir, 'grille-tarifaire.html');
writeFileSync(htmlPath, html);
execFileSync(CHROME, [
  '--headless',
  '--disable-gpu',
  '--no-pdf-header-footer',
  '--allow-file-access-from-files',
  `--print-to-pdf=${OUT}`,
  pathToFileURL(htmlPath).href,
], { stdio: 'ignore' });
console.log(`PDF généré : ${OUT}\nHTML source : ${htmlPath}`);
