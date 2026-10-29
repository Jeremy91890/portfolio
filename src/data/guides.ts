// Pages « guides » : une page par thème de recherche (mots-clés AnswerThePublic).
// Fichier sans JSX : lu aussi par vite.config.ts (sitemap) et scripts/prerender.mjs (balises <head>).
// Le contenu de chaque guide est dans src/guides/<slug>.tsx.

export type Guide = {
  slug: string;
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
    "Prix d’un site vitrine, référencement local, avis Google, newsletter, WordPress ou freelance : des guides clairs pour les commerçants et les artisans.",
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
    updated: "2026-10-29",
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
