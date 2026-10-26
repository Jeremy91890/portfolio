import pricing from "./pricing";

export const planPrice = (id: string) => pricing.plans.find((p) => p.id === id)!.price;

export const MONTHS = 36;
// Espace insécable classique : l'espace fine (U+202F) de toLocaleString n'existe pas dans Poppins
export const euros = (n: number) => `${Math.round(n).toLocaleString("fr-FR").replace(/ /g, " ")} €`;

// Chiffres des autres options, repris tels quels des sources ci-dessous (bas des fourchettes).
// Aucune marque citée dans le texte affiché : seulement des catégories.
const diy = { monthlyMin: 16.8, monthlyMax: 30 }; // independant.io (outil à faire soi-même), TTC
const turnkey = { setup: 400, monthly: 60 }; // independant.io (service clé en main pour TPE), HT
const agency = { setup: 2000, monthly: 150 }; // Fenxi (création) + Kolonell (maintenance)

const proTotal = planPrice("pro") * MONTHS;
const agencyTotal = agency.setup + agency.monthly * MONTHS;

export type Option = {
  id: string;
  /** Nom court, lisible dans une colonne étroite sur téléphone */
  name: string;
  mine?: boolean;
  /** Coût sur 3 ans : montant affiché et longueur de la barre */
  total: number;
  prefix?: string;
  note?: string;
};

export const options: Option[] = [
  { id: "nappage", name: "Nappage", mine: true, total: proTotal, note: "formule Pro" },
  { id: "diy", name: "Faire soi-même", total: diy.monthlyMax * MONTHS, prefix: "jusqu'à ", note: "+ votre temps" },
  { id: "turnkey", name: "Clé en main national", total: turnkey.setup + turnkey.monthly * MONTHS, prefix: "≈ ", note: "HT" },
  { id: "agency", name: "Agence web", total: agencyTotal, prefix: "≈ " },
];

// oui : fait pour vous / inclus · partiel : selon la formule ou en supplément · non : à votre charge ou absent
export type Mark = "yes" | "partial" | "no";

/** Une ligne par critère, une valeur par option (dans l'ordre de `options`) */
export const rows: { label: string; marks: Mark[] }[] = [
  { label: `${euros(pricing.setupFee)} pour démarrer`, marks: ["yes", "yes", "no", "no"] },
  { label: "Site créé pour vous", marks: ["yes", "no", "yes", "yes"] },
  { label: "Textes rédigés", marks: ["yes", "no", "no", "partial"] },
  { label: "Fiche Google soignée", marks: ["yes", "no", "partial", "partial"] },
  { label: "Le développeur en direct", marks: ["yes", "no", "no", "no"] },
  { label: `En ligne en ${pricing.launchDays} jours`, marks: ["yes", "partial", "no", "no"] },
  { label: "Modifications faites", marks: ["yes", "no", "partial", "partial"] },
];

export const agencySavings = agencyTotal - proTotal;

export type Source = { label: string; url: string };

export const sources: Source[] = [
  {
    label: "Faire soi-même : 16,80 à 30 € TTC/mois (independant.io)",
    url: "https://independant.io/avis/avis-wix",
  },
  {
    label: "Clé en main : 400 € HT + 60 € HT/mois, textes fournis par le client (independant.io)",
    url: "https://independant.io/avis/simplebo/",
  },
  {
    label: "Agence : création dès 2 000 € (Fenxi, 2026)",
    url: "https://fenxi.fr/blog/combien-coute-site-internet-2026-prix-delais/",
  },
  {
    label: "Agence : maintenance dès 150 €/mois (Kolonell, 2026)",
    url: "https://kolonell.com/fr/blog/agence-web-vs-freelance-site-vitrine-comparatif-prix-2026",
  },
  {
    label: "Agence : 5 à 8 semaines de délai (Kolonell, 2026)",
    url: "https://kolonell.com/fr/blog/cout-creation-site-cabinet-expertise-comptable-nantes-2026",
  },
];
