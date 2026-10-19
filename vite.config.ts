import { defineConfig, type HtmlTagDescriptor, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { legal, site } from './src/data/site';
import pricing from './src/data/pricing';

const home = `${site.url}/`;
const fromPrice = Math.min(...pricing.plans.map((p) => p.price));
const [street, postalLine] = legal.address.split(', ');

// Fiche « entreprise locale » lue par Google (schema.org)
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${home}#entreprise`,
      name: site.brand,
      alternateName: `${site.brand} – ${site.name}, ${site.role.toLowerCase()}`,
      logo: `${site.url}/logo-nappage.png`,
      description: `Création, hébergement et maintenance de sites web pour commerçants, dès ${fromPrice} €/mois.`,
      url: home,
      image: `${site.url}${site.photo.jpg}`,
      telephone: site.phoneHref,
      email: site.email,
      priceRange: `À partir de ${fromPrice} €/mois`,
      address: {
        '@type': 'PostalAddress',
        streetAddress: street,
        postalCode: postalLine.split(' ')[0],
        addressLocality: site.town,
        addressRegion: 'Île-de-France',
        addressCountry: 'FR',
      },
      areaServed: [
        { '@type': 'City', name: site.town },
        { '@type': 'City', name: 'Melun' },
        { '@type': 'AdministrativeArea', name: 'Seine-et-Marne' },
      ],
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
  <url>
    <loc>${home}</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`,
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), seo()],
});
