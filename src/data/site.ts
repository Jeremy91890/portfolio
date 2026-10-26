// Informations personnelles
export const site = {
  firstName: "Jérémy",
  brand: "Nappage Studio",
  baseline: "Sites web pour commerçants",
  slogan: "La touche finale de votre commerce",
  name: "Jérémy Debelleix",
  initials: "JD",
  role: "Développeur web & mobile",
  // Adresse publique du site (URL canonique, sitemap, partages)
  url: "https://www.nappage.fr",
  email: "contact@nappage.fr",
  phone: "06 30 38 69 83",
  phoneHref: "+33630386983",
  // Lien vers l'outil de prise de rendez-vous visio (à choisir, sans cookie si possible). Vide : bouton masqué.
  bookingUrl: "",
  linkedin: "https://www.linkedin.com/in/j%C3%A9r%C3%A9my-debelleix-35191811a/",
  photo: {
    webp: "/jeremy-debelleix.webp",
    jpg: "/jeremy-debelleix.jpg",
    thumb: "/jeremy-debelleix-96.webp",
    alt: "Jérémy Debelleix, souriant, avec des lunettes et un pull bordeaux",
  },
};

// Mentions légales (loi LCEN, art. 6-III). L'adresse n'apparaît que dans les mentions légales.
export const legal = {
  status: "Entrepreneur individuel (EI) – micro-entreprise",
  address: "29 allée Van Gogh, 77190 Dammarie-lès-Lys",
  siret: "894 500 230 00012",
  host: {
    name: "Vercel Inc.",
    address: "440 N Barranca Ave #4133, Covina, CA 91723, États-Unis",
    website: "https://vercel.com",
  },
  // Prestataire d'envoi des e-mails du formulaire de rappel (api/rappel.ts)
  mailer: {
    name: "Brevo (Sendinblue SAS)",
    location: "France, données hébergées dans l'Union européenne",
  },
  updated: "octobre 2026",
};

export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
