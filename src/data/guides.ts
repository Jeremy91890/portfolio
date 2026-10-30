// Pages « guides » : une page par thème de recherche (mots-clés AnswerThePublic).
// Fichier sans JSX : lu aussi par vite.config.ts (sitemap) et scripts/prerender.mjs (balises <head>).
// Le contenu de chaque guide est dans src/guides/<slug>.tsx.

// Secteurs de la partie « Par métier » de la page Guides, dans l'ordre d'affichage (icônes dans GuidesIndex.tsx)
export const sectors = [
  { id: "alimentation", label: "Alimentation et restauration" },
  { id: "beaute", label: "Coiffure et beauté" },
  { id: "batiment", label: "Artisans du bâtiment" },
  { id: "boutiques", label: "Boutiques" },
  { id: "automobile", label: "Automobile" },
] as const;

export type SectorId = (typeof sectors)[number]["id"];

export type Guide = {
  slug: string;
  /** Guide d'un métier : son secteur et son nom court dans la liste par métier. Absent : guide de conseils. */
  trade?: { sector: SectorId; label: string };
  /** Titre affiché (h1) */
  title: string;
  /** Balise <title> (60 caractères environ) */
  metaTitle: string;
  /** Meta description, reprise en chapeau sous le titre */
  description: string;
  /** Texte court pour les cartes de la page d'accueil */
  teaser: string;
  /** Requêtes visées, pour mémoire */
  keywords: string[];
  published: string;
  updated: string;
};

export const GUIDES_PATH = "/guides/";
export const guidePath = (slug: string) => `${GUIDES_PATH}${slug}/`;

// Page qui liste tous les guides
export const guidesIndex = {
  title: "Guides pour créer le site de votre commerce",
  metaTitle: "Guides : créer le site de son commerce local | Nappage",
  description:
    "Un guide par métier, de la boulangerie au garage, et des conseils pour tous : prix d’un site vitrine, référencement local, avis Google, newsletter.",
};

export const guides: Guide[] = [
  {
    slug: "pourquoi-creer-un-site-pour-son-commerce",
    title: "Pourquoi créer un site web pour son commerce local ?",
    metaTitle: "Pourquoi créer un site pour son commerce local ? | Nappage",
    description:
      "Vos clients vous cherchent en ligne avant de venir. Ce qu’un site apporte à un commerce local, ce qu’il doit contenir et comment le créer sans y passer vos soirées.",
    teaser:
      "Ce qu’un site apporte à un commerce de quartier, et ce qu’il doit contenir.",
    keywords: [
      "site web commerce local",
      "création site commerçant",
      "présence en ligne commerçant",
    ],
    published: "2026-10-29",
    updated: "2026-10-29",
  },
  {
    slug: "newsletter-commerce-local",
    title:
      "Newsletter et e-mail marketing pour boutique : faire revenir vos clients",
    metaTitle: "Newsletter pour commerce local et boutique | Nappage",
    description:
      "Pourquoi une newsletter fait revenir les clients d’un commerce local, quoi y mettre, à quel rythme l’envoyer, et les règles à respecter pour collecter les adresses.",
    teaser:
      "Quoi envoyer, à quel rythme, et les règles pour collecter les adresses.",
    keywords: ["newsletter commerce local", "email marketing boutique"],
    published: "2026-10-29",
    updated: "2026-10-29",
  },
  {
    slug: "prix-site-web-commercant",
    title: "Combien coûte un site web pour un commerçant ?",
    metaTitle:
      "Prix d’un site web pour commerçant : les vrais tarifs | Nappage",
    description:
      "Nom de domaine, hébergement, création, mises à jour : ce que vous payez pour un site vitrine, et les tarifs du faire-soi-même, du clé en main et de l’agence.",
    teaser:
      "Ce que vous payez poste par poste, et les tarifs des différentes solutions.",
    keywords: [
      "prix site web commerçant",
      "tarif site vitrine",
      "combien coûte un site web",
    ],
    published: "2026-10-29",
    updated: "2026-10-29",
  },
  {
    slug: "referencement-local-google-maps",
    title:
      "Référencement local : apparaître sur Google Maps quand on cherche votre commerce",
    metaTitle:
      "Référencement local et fiche Google Maps pour commerce | Nappage",
    description:
      "Fiche Google, avis, site web : comment un commerce apparaît sur Google Maps quand on cherche son métier près de chez soi.",
    teaser:
      "Fiche Google, avis et site : comment ressortir sur Google Maps près de chez vous.",
    keywords: ["référencement local france", "fiche google maps commerce"],
    published: "2026-10-29",
    updated: "2026-10-29",
  },
  {
    slug: "avis-google-commerce-local",
    title: "Avis Google : comment en obtenir plus pour votre commerce",
    metaTitle:
      "Avis Google pour commerce local : QR code et bonnes pratiques | Nappage",
    description:
      "Pourquoi les avis Google comptent pour un commerce local, comment créer un QR code qui mène vos clients à la bonne page, et ce qu’il ne faut surtout pas faire.",
    teaser:
      "Le QR code près de la caisse, le bon moment pour demander, et ce qui est interdit.",
    keywords: ["qr code avis google", "avis google commerce local"],
    published: "2026-10-29",
    updated: "2026-10-29",
  },
  {
    slug: "site-web-ou-instagram",
    title: "Site web ou Instagram : de quoi votre commerce a-t-il besoin ?",
    metaTitle: "Site web ou Instagram pour son commerce ? | Nappage",
    description:
      "Instagram et Facebook suffisent-ils à un commerce ? Ce que les réseaux sociaux font bien, ce qu’ils font mal, et la place d’un site dans votre présence en ligne.",
    teaser: "Ce que les réseaux sociaux font bien, et ce qu’ils font mal.",
    keywords: [
      "site web ou instagram commerce",
      "présence en ligne commerçant",
    ],
    published: "2026-10-29",
    updated: "2026-10-29",
  },
  {
    slug: "site-internet-artisan-commercant",
    title: "Site internet pour artisan : boulanger, coiffeur, plombier…",
    metaTitle: "Site internet clé en main pour artisan et commerçant | Nappage",
    description:
      "Boulangerie, salon de coiffure, artisan du bâtiment : ce que le site de chaque métier doit montrer, et comment avoir un site clé en main sans vous en occuper.",
    teaser:
      "Ce que le site d’une boulangerie, d’un salon ou d’un artisan doit montrer.",
    keywords: ["site clé en main artisan", "site internet boulanger coiffeur"],
    published: "2026-10-29",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-boulangerie",
    trade: { sector: "alimentation", label: "Boulangerie, pâtisserie" },
    title: "Site internet pour boulangerie : ce qu’il doit montrer à vos clients",
    metaTitle: "Site internet pour boulangerie et pâtisserie | Nappage",
    description:
      "Horaires, commandes de gâteaux, fêtes, spécialités : ce que le site d’une boulangerie-pâtisserie doit contenir, et comment ressortir sur Google près de chez vous.",
    teaser:
      "Horaires, commandes, périodes de fêtes : ce que vos clients viennent chercher.",
    keywords: [
      "site internet boulangerie",
      "site web boulangerie pâtisserie",
      "création site boulangerie",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-coiffeur",
    trade: { sector: "beaute", label: "Salon de coiffure, barbier" },
    title: "Site internet pour salon de coiffure : réservation, tarifs, photos",
    metaTitle: "Site internet pour salon de coiffure et barbier | Nappage",
    description:
      "Prise de rendez-vous, grille de tarifs, photos de réalisations, équipe : ce que le site d’un salon de coiffure doit montrer pour remplir l’agenda.",
    teaser:
      "Bouton de réservation, tarifs clairs et photos : ce qui fait prendre rendez-vous.",
    keywords: [
      "site internet coiffeur",
      "site web salon de coiffure",
      "création site salon de coiffure",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-plombier",
    trade: { sector: "batiment", label: "Plombier, chauffagiste" },
    title: "Site internet pour plombier : être appelé et inspirer confiance",
    metaTitle: "Site internet pour plombier et chauffagiste | Nappage",
    description:
      "Numéro d’urgence, tarifs de dépannage obligatoires, assurance, zone d’intervention : ce que le site d’un plombier doit afficher pour être appelé.",
    teaser:
      "Urgences, tarifs obligatoires, zone d’intervention : ce qui fait décrocher le téléphone.",
    keywords: [
      "site internet plombier",
      "site web artisan plombier",
      "création site plombier chauffagiste",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-restaurant",
    trade: { sector: "alimentation", label: "Restaurant, café, traiteur" },
    title: "Site internet pour restaurant : carte, réservation, infos pratiques",
    metaTitle: "Site internet pour restaurant, café et traiteur | Nappage",
    description:
      "Carte lisible sur téléphone, bouton de réservation, photos, accès : ce que le site d’un restaurant doit montrer pour remplir les tables.",
    teaser:
      "Une carte lisible sur téléphone et une réservation en un geste.",
    keywords: [
      "site internet restaurant",
      "site web restaurant",
      "création site restaurant",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-fleuriste",
    trade: { sector: "boutiques", label: "Fleuriste" },
    title: "Site internet pour fleuriste : occasions, deuil, livraison",
    metaTitle: "Site internet pour fleuriste | Nappage",
    description:
      "Bouquets, mariages, deuil, livraison, fêtes : ce que le site d’un fleuriste doit montrer pour recevoir les commandes en direct.",
    teaser:
      "Occasions, deuil, livraison : recevoir les commandes en direct.",
    keywords: [
      "site internet fleuriste",
      "site web fleuriste",
      "création site fleuriste",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-institut-beaute",
    trade: { sector: "beaute", label: "Institut de beauté, esthéticienne" },
    title: "Site internet pour institut de beauté : soins, tarifs, réservation",
    metaTitle: "Site internet pour institut de beauté et esthéticienne | Nappage",
    description:
      "Carte des soins, prix et durées, réservation, cartes cadeaux, hygiène : ce que le site d’un institut de beauté doit montrer pour donner envie de réserver.",
    teaser:
      "Carte des soins, cartes cadeaux et ce qui met en confiance.",
    keywords: [
      "site internet institut de beauté",
      "site web esthéticienne",
      "création site institut de beauté",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-electricien",
    trade: { sector: "batiment", label: "Électricien" },
    title: "Site internet pour électricien : dépannage, devis, confiance",
    metaTitle: "Site internet pour électricien | Nappage",
    description:
      "Numéro d’urgence, tarifs de dépannage obligatoires, prestations, assurance, zone d’intervention : ce que le site d’un électricien doit afficher.",
    teaser:
      "Dépannage, devis et tarifs obligatoires : ce qui fait appeler.",
    keywords: [
      "site internet électricien",
      "site web électricien",
      "création site électricien",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-garage-automobile",
    trade: { sector: "automobile", label: "Garage automobile" },
    title: "Site internet pour garage automobile : prix, rendez-vous, confiance",
    metaTitle: "Site internet pour garage automobile indépendant | Nappage",
    description:
      "Prestations et prix de départ, prise de rendez-vous, avis : ce que le site d’un garage indépendant doit montrer pour que le client appelle.",
    teaser:
      "Des prix clairs et un rendez-vous facile face aux grandes enseignes.",
    keywords: [
      "site internet garage automobile",
      "site web garagiste",
      "création site garage",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-boutique-cadeaux",
    trade: { sector: "boutiques", label: "Cadeaux et souvenirs" },
    title: "Site internet pour boutique de cadeaux et de souvenirs",
    metaTitle: "Site internet pour boutique de cadeaux et souvenirs | Nappage",
    description:
      "Produits, créateurs locaux, idées cadeaux, horaires de saison : ce que le site d’une boutique de cadeaux ou de souvenirs doit montrer aux habitants comme aux visiteurs.",
    teaser:
      "Idées cadeaux, créateurs locaux et visiteurs de passage.",
    keywords: [
      "site internet boutique cadeaux",
      "site web boutique souvenirs",
      "création site boutique de cadeaux",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-boutique-jeux",
    trade: { sector: "boutiques", label: "Jeux de société et jouets" },
    title: "Site internet pour boutique de jeux de société et de jouets",
    metaTitle: "Site internet pour boutique de jeux et jouets | Nappage",
    description:
      "Conseil, sélections par âge, soirées jeux, services : ce que le site d’une boutique de jeux de société ou de jouets doit montrer face aux grandes surfaces.",
    teaser:
      "Le conseil et les soirées jeux, ce que la vente en ligne ne copie pas.",
    keywords: [
      "site internet boutique jeux de société",
      "site web magasin de jouets",
      "création site boutique de jeux",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "site-internet-boutique-vetements",
    trade: { sector: "boutiques", label: "Vêtements, prêt-à-porter" },
    title: "Site internet pour boutique de vêtements : style, marques, collections",
    metaTitle: "Site internet pour boutique de vêtements | Nappage",
    description:
      "Photos, marques distribuées, tailles, prix, nouvelles collections : ce que le site d’une boutique de prêt-à-porter doit montrer pour faire venir en boutique.",
    teaser:
      "Votre style, vos marques et vos collections, pour faire venir en boutique.",
    keywords: [
      "site internet boutique vêtements",
      "site web boutique prêt-à-porter",
      "création site boutique de vêtements",
    ],
    published: "2026-10-30",
    updated: "2026-10-30",
  },
  {
    slug: "creer-site-boutique-rapidement",
    title: "Mettre en ligne le site de sa boutique rapidement",
    metaTitle: "Créer le site de sa boutique rapidement | Nappage",
    description:
      "Ce qu’il faut préparer, les étapes et les délais pour mettre en ligne le site de votre commerce en une semaine.",
    teaser:
      "Ce qu’il faut préparer et les étapes pour être en ligne en une semaine.",
    keywords: [
      "création site rapide boutique",
      "site en ligne rapidement commerce",
    ],
    published: "2026-10-29",
    updated: "2026-10-29",
  },
  {
    slug: "agence-web-ou-freelance",
    title:
      "Agence web ou développeur freelance : que choisir pour votre commerce ?",
    metaTitle:
      "Agence web ou freelance pour le site de son commerce ? | Nappage",
    description:
      "Prix, délais, interlocuteur, risques : ce qui change entre une agence web et un développeur web indépendant pour le site d’un commerce ou d’un artisan.",
    teaser: "Prix, délais, interlocuteur et risques : ce qui les distingue.",
    keywords: ["agence web ou freelance", "développeur web indépendant france"],
    published: "2026-10-29",
    updated: "2026-10-29",
  },
  {
    slug: "wordpress-commerce-local",
    title: "WordPress pour un commerce local : bonne ou mauvaise idée ?",
    metaTitle:
      "WordPress pour un commerce local : avantages et limites | Nappage",
    description:
      "WordPress est gratuit, mais il faut l’entretenir. Ce qu’il implique pour un commerçant (hébergement, extensions, mises à jour, sécurité) et les autres solutions.",
    teaser:
      "Gratuit, mais à entretenir : ce que WordPress implique pour un commerçant.",
    keywords: ["wordpress pour commerce local", "nappage vs wordpress"],
    published: "2026-10-29",
    updated: "2026-10-29",
  },
];

export const findGuide = (slug: string) => guides.find((g) => g.slug === slug);

/** Guides de conseils, valables pour tous les métiers */
export const adviceGuides = guides.filter((g) => !g.trade);

/** Guides des métiers d'un secteur */
export const sectorGuides = (sector: SectorId) => guides.filter((g) => g.trade?.sector === sector);

/** Guides proposés en bas d'un guide : ceux du même secteur d'abord, puis des conseils */
export function relatedGuides(guide: Guide, count = 6) {
  const sameSector = guide.trade ? sectorGuides(guide.trade.sector) : [];
  return [...sameSector, ...adviceGuides].filter((g) => g.slug !== guide.slug).slice(0, count);
}
