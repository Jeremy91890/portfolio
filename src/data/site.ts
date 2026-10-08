// Informations personnelles
export const site = {
  firstName: 'Jérémy',
  name: 'Jérémy Debelleix',
  initials: 'JD',
  role: 'Développeur frontend & mobile',
  email: 'jeremy.debelleix@gmail.com',
  phone: '06 30 38 69 83',
  phoneHref: '+33630386983',
  city: 'Dammarie-lès-Lys (77190)',
  linkedin: 'https://www.linkedin.com/in/j%C3%A9r%C3%A9my-debelleix-35191811a/',
  photo: {
    webp: '/jeremy-debelleix.webp',
    jpg: '/jeremy-debelleix.jpg',
    thumb: '/jeremy-debelleix-96.webp',
    alt: 'Jérémy Debelleix, souriant, avec des lunettes et un pull bordeaux',
  },
};

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
