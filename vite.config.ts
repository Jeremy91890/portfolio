import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { site } from './src/data/site';
import pricing from './src/data/pricing';
import { GUIDES_PATH, guidePath, guides } from './src/data/guides';

const home = `${site.url}/`;
const fromPrice = Math.min(...pricing.plans.map((p) => p.price));

// Fiche entreprise lue par Google (schema.org) : zone desservie France, sans adresse affichée
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${home}#entreprise`,
      name: site.brand,
      alternateName: `${site.brand} – ${site.name}, ${site.role.toLowerCase()}`,
      logo: `${site.url}/logo-nappage.png`,
      description: `Création, hébergement et maintenance de sites vitrines pour commerçants et artisans, avec référencement local, dès ${fromPrice} €/mois.`,
      url: home,
      image: `${site.url}${site.photo.jpg}`,
      telephone: site.phoneHref,
      email: site.email,
      priceRange: `À partir de ${fromPrice} €/mois`,
      areaServed: { '@type': 'Country', name: 'France' },
      founder: { '@id': `${home}#personne` },
      sameAs: [site.linkedin],
      makesOffer: pricing.plans.map((plan) => ({
        '@type': 'Offer',
        name: `Site web – formule ${plan.name}`,
        description: plan.tagline,
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: plan.price,
          priceCurrency: 'EUR',
          unitText: 'mois',
        },
      })),
    },
    {
      '@type': 'Person',
      '@id': `${home}#personne`,
      name: site.name,
      jobTitle: site.role,
      url: home,
      image: `${site.url}${site.photo.jpg}`,
      sameAs: [site.linkedin],
    },
    {
      '@type': 'WebSite',
      '@id': `${home}#site`,
      url: home,
      name: site.brand,
      inLanguage: 'fr-FR',
      publisher: { '@id': `${home}#entreprise` },
    },
  ],
};

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
          og('og:type', 'website'),
          og('og:locale', 'fr_FR'),
          og('og:site_name', site.brand),
          og('og:url', home),
          og('og:title', title),
          og('og:description', description),
          og('og:image', `${site.url}${site.photo.jpg}`),
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
    // robots.txt et sitemap.xml, avec le domaine défini dans site.ts
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
        source: `User-agent: *\nAllow: /\n\nSitemap: ${site.url}/sitemap.xml\n`,
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
    },
  };
}

export default defineConfig({
  plugins: [react(), seo()],
});
