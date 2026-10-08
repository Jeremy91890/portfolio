// Prix du marché : chaque chiffre est repris tel quel de la source citée.
export type Source = {
  publisher: string;
  title: string;
  date: string;
  url: string;
  quote: string;
};

export const sources: Source[] = [
  {
    publisher: "Fenxi",
    title:
      "Combien coûte un site internet en 2026 ? Prix vitrine, e-commerce et web app",
    date: "Mis à jour le 3 septembre 2026",
    url: "https://fenxi.fr/blog/combien-coute-site-internet-2026-prix-delais/",
    quote:
      "Agence : souvent 2 000 à 6 000 €. Freelance : 800 à 3 000 € pour un vitrine « classique », plus si design travaillé / animations / intégrations.",
  },
  {
    publisher: "Kolonell",
    title:
      "Agence web ou freelance pour un site vitrine : comparatif de prix 2026",
    date: "12 septembre 2026",
    url: "https://kolonell.com/fr/blog/agence-web-vs-freelance-site-vitrine-comparatif-prix-2026",
    quote:
      "Site vitrine de 5 à 8 pages : 6 000 à 18 000 € HT en agence. Maintenance : 150 à 500 €/mois en agence, 80 à 200 €/mois en freelance.",
  },
  {
    publisher: "Hellopro",
    title: "Combien coûte la création d’un site internet ?",
    date: "Chiffres constatés en octobre 2026",
    url: "https://conseils.hellopro.fr/combien-coute-la-creation-d-un-site-internet-3823.html",
    quote:
      "Un site vitrine simple coûte entre 2 000 et 5 000 €. Les formules d’abonnement peuvent s’étendre de 50 à 300 € par mois. Hébergement et nom de domaine sont rarement inclus.",
  },
];

// Coût sur 3 ans (36 mois), hypothèse basse de chaque fourchette.
export const threeYearComparison = [
  {
    label: "Agence web",
    detail: "2 000 € de création + 150 €/mois de maintenance",
    total: 2000 + 150 * 36,
  },
  {
    label: "Freelance classique",
    detail: "800 € de création + 80 €/mois de maintenance",
    total: 800 + 80 * 36,
  },
  {
    label: "Mon offre Essentiel",
    detail: "29 €/mois, tout compris, 0 € de mise en place",
    total: 29 * 36,
    mine: true,
  },
];

export const aiPrompt =
  "Combien coûte en moyenne la création et la maintenance d’un site vitrine pour un petit commerce en France, hébergement et nom de domaine compris ?";
