// Informations personnelles
export const site = {
  firstName: 'Jérémy',
  name: 'Jérémy Debelleix',
  initials: 'JD',
  role: 'Développeur web & mobile',
  // Adresse publique du site (URL canonique, sitemap, partages)
  url: 'https://jeremydebelleix.fr',
  email: 'jeremy.debelleix@gmail.com',
  phone: '06 30 38 69 83',
  phoneHref: '+33630386983',
  town: 'Dammarie-lès-Lys',
  city: 'Dammarie-lès-Lys (77190)',
  linkedin: 'https://www.linkedin.com/in/j%C3%A9r%C3%A9my-debelleix-35191811a/',
  photo: {
    webp: '/jeremy-debelleix.webp',
    jpg: '/jeremy-debelleix.jpg',
    thumb: '/jeremy-debelleix-96.webp',
    alt: 'Jérémy Debelleix, souriant, avec des lunettes et un pull bordeaux',
  },
};

// Mentions légales (loi LCEN, art. 6-III) – à compléter avant la mise en ligne
export const legal = {
  status: 'Entrepreneur individuel (EI) – micro-entreprise',
  address: '29 allée Van Gogh, 77190 Dammarie-lès-Lys',
  siret: '894 500 230 00012',
  host: {
    name: 'Vercel Inc. (plateforme v0)',
    address: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
    website: 'https://vercel.com',
  },
  updated: 'octobre 2026',
};

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
