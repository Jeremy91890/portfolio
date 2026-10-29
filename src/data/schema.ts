// Données structurées schema.org communes à toutes les pages.
// Fichier sans JSX : lu par vite.config.ts (accueil) et src/entry-server.tsx (guides).
import { site } from './site';
import pricing from './pricing';

export const home = `${site.url}/`;
// Identifiants stables : Google relie les pages entre elles par ces @id
export const ids = {
  business: `${home}#entreprise`,
  person: `${home}#personne`,
  website: `${home}#site`,
};

const fromPrice = Math.min(...pricing.plans.map((p) => p.price));

// Fiche entreprise (zone desservie France, sans adresse affichée), auteur et site.
// Répétée sur chaque page : un guide lu seul suffit pour savoir qui l'a écrit et ce qu'il propose.
export const siteGraph = [
  {
    '@type': 'ProfessionalService',
    '@id': ids.business,
    name: site.brand,
    alternateName: `${site.brand} – ${site.name}, ${site.role.toLowerCase()}`,
    slogan: site.slogan,
    logo: `${site.url}/logo-nappage.png`,
    description: `Création, hébergement et maintenance de sites vitrines pour commerçants et artisans, avec référencement local, dès ${fromPrice} €/mois.`,
    url: home,
    image: `${site.url}${site.photo.jpg}`,
    telephone: site.phoneHref,
    email: site.email,
    priceRange: `À partir de ${fromPrice} €/mois`,
    areaServed: { '@type': 'Country', name: 'France' },
    availableLanguage: 'fr',
    // Sujets traités sur le site (formules et guides), pour situer l'entreprise
    knowsAbout: [
      'Création de site vitrine',
      'Hébergement de site web',
      'Référencement local',
      'Fiche Google Business Profile',
      'Avis Google',
      'Newsletter',
    ],
    founder: { '@id': ids.person },
    sameAs: [site.linkedin, site.instagram],
    makesOffer: pricing.plans.map((plan) => ({
      '@type': 'Offer',
      name: `Site web – formule ${plan.name}`,
      description: plan.tagline,
      itemOffered: { '@type': 'Service', name: `Site vitrine clé en main – ${plan.name}`, description: plan.tagline },
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
    '@id': ids.person,
    name: site.name,
    jobTitle: site.role,
    url: home,
    image: `${site.url}${site.photo.jpg}`,
    worksFor: { '@id': ids.business },
    sameAs: [site.linkedin],
  },
  {
    '@type': 'WebSite',
    '@id': ids.website,
    url: home,
    name: site.brand,
    inLanguage: 'fr-FR',
    publisher: { '@id': ids.business },
  },
];

export const breadcrumb = (items: { name: string; url: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({ '@type': 'ListItem', position: i + 1, name: item.name, item: item.url })),
});
