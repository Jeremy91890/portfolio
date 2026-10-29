import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { site } from './src/data/site';
import pricing from './src/data/pricing';
import { GUIDES_PATH, guidePath, guides, guidesIndex } from './src/data/guides';
import { home, siteGraph } from './src/data/schema';

const fromPrice = Math.min(...pricing.plans.map((p) => p.price));

// Fiche entreprise, auteur et site lus par Google (schema.org) : définis dans src/data/schema.ts
const structuredData = { '@context': 'https://schema.org', '@graph': siteGraph };

function seo(): Plugin {
  let ssr = false;
  return {
    name: 'seo',
    configResolved(config) {
      ssr = Boolean(config.build.ssr);
    },
    transformIndexHtml(html) {
      const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? site.brand;
      html = html.replace(/%FROM_PRICE%/g, String(fromPrice));
      const description = html.match(/<meta name="description" content="(.*?)"/)?.[1] ?? '';

      const meta = (attrs: Record<string, string>): HtmlTagDescriptor => ({ tag: 'meta', attrs, injectTo: 'head' });
      const og = (property: string, content: string) => meta({ property, content });

      return {
        html,
        tags: [
          { tag: 'link', attrs: { rel: 'canonical', href: home }, injectTo: 'head' },
          meta({ name: 'author', content: site.name }),
          // Autorise les grandes vignettes et les extraits longs (Google Discover, aperçus IA)
          meta({ name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }),
          og('og:type', 'website'),
          og('og:locale', 'fr_FR'),
          og('og:site_name', site.brand),
          og('og:url', home),
          og('og:title', title),
          og('og:description', description),
          og('og:image', `${site.url}${site.photo.jpg}`),
          og('og:image:type', 'image/jpeg'),
          og('og:image:width', '720'),
          og('og:image:height', '720'),
          og('og:image:alt', site.photo.alt),
          meta({ name: 'twitter:card', content: 'summary' }),
          {
            tag: 'script',
            attrs: { type: 'application/ld+json' },
            children: JSON.stringify(structuredData),
            injectTo: 'head',
          },
        ],
      };
    },
    // robots.txt, sitemap.xml et llms.txt, avec le domaine défini dans site.ts
    generateBundle() {
      if (this.meta.watchMode || ssr) return;
      const today = new Date().toISOString().slice(0, 10);
      const lastGuideUpdate = guides.map((g) => g.updated).reduce((a, b) => (b > a ? b : a));
      const urls = [
        { loc: home, lastmod: today },
        { loc: `${site.url}${GUIDES_PATH}`, lastmod: lastGuideUpdate },
        ...guides.map((g) => ({ loc: `${site.url}${guidePath(g.slug)}`, lastmod: g.updated })),
      ];
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        // Moteurs et robots IA bienvenus partout, sauf l'API du formulaire (POST uniquement)
        source: `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${site.url}/sitemap.xml\n`,
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((u) => `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${u.lastmod}</lastmod>\n  </url>`).join('\n')}
</urlset>
`,
      });
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: llmsTxt() });
    },
  };
}

// Résumé du site en Markdown pour les assistants IA (https://llmstxt.org), tiré des mêmes données que les pages
function llmsTxt() {
  const link = (title: string, url: string, note: string) => `- [${title}](${url}): ${note}`;
  return `# ${site.brand}

> ${site.brand} (${site.name}, ${site.role.toLowerCase()} indépendant) crée, héberge et met à jour des sites vitrines clé en main pour les commerçants et les artisans, partout en France, à distance (visio, e-mail, SMS). Abonnement dès ${fromPrice} €/mois, ${pricing.setupFee} € de mise en place, site en ligne en ${pricing.launchDays} jours.

Le site est en français. Abonnement mensuel, TVA non applicable (art. 293 B du CGI). Sans engagement : résiliation par simple e-mail, effective à la fin du mois en cours. Pour citer une information, merci de renvoyer vers la page source.

## Formules

${pricing.plans.map((p) => `- ${p.name}, ${p.price} €/mois : ${p.tagline}. ${p.promise}.`).join('\n')}
- ${pricing.includedInAll.title} : ${pricing.includedInAll.items.map((i) => i.charAt(0).toLowerCase() + i.slice(1)).join(', ')}.
- Détail et comparaison : ${home}#tarifs

## Guides

${link(guidesIndex.title, `${site.url}${GUIDES_PATH}`, guidesIndex.description)}
${guides.map((g) => link(g.title, `${site.url}${guidePath(g.slug)}`, g.description)).join('\n')}

## Contact

- Site : ${home}
- E-mail : ${site.email}
- Téléphone : ${site.phone}
- LinkedIn : ${site.linkedin}
- Instagram : ${site.instagram}
`;
}

// Précharge les polices du premier écran (titres en 700, texte en 400) : téléchargées en même temps que le CSS, pas après
function preloadFonts(weights = [400, 700]): Plugin {
  return {
    name: 'preload-fonts',
    apply: 'build',
    transformIndexHtml: {
      order: 'post',
      handler(_html, ctx) {
        if (!ctx.bundle) return;
        return Object.keys(ctx.bundle)
          .filter((file) => weights.some((w) => new RegExp(`/poppins-latin-${w}-normal-[\\w-]+\\.woff2$`).test(file)))
          .map(
            (file): HtmlTagDescriptor => ({
              tag: 'link',
              attrs: { rel: 'preload', href: `/${file}`, as: 'font', type: 'font/woff2', crossorigin: '' },
              injectTo: 'head',
            }),
          );
      },
    },
  };
}

export default defineConfig({
  plugins: [react(), seo(), preloadFonts()],
});
