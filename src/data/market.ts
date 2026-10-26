import pricing from "./pricing";

export const planPrice = (id: string) => pricing.plans.find((p) => p.id === id)!.price;

export const MONTHS = 36;
// Espace insécable classique : l'espace fine (U+202F) de toLocaleString n'existe pas dans Poppins
export const euros = (n: number) => `${Math.round(n).toLocaleString("fr-FR").replace(/\u202f/g, "\u00a0")}\u00a0€`;

// Chiffres des autres options, repris tels quels des sources ci-dessous (bas des fourchettes).
// Aucune marque citée dans le texte affiché : seulement des catégories.
const diy = { monthlyMin: 16.8, monthlyMax: 30 }; // independant.io (outil à faire soi-même), TTC
const turnkey = { setup: 400, monthly: 60 }; // independant.io (service clé en main pour TPE), HT
const agency = { setup: 2000, monthly: 150 }; // Fenxi (création) + Kolonell (maintenance)

const proTotal = planPrice("pro") * MONTHS;
const essentielTotal = planPrice("essentiel") * MONTHS;
const turnkeyTotal = turnkey.setup + turnkey.monthly * MONTHS;
const agencyTotal = agency.setup + agency.monthly * MONTHS;

export type Option = {
  id: string;
  name: string;
  mine?: boolean;
  /** Valeurs dans l'ordre de `criteria` */
  values: string[];
};

export const criteria = [
  "Frais de départ",
  `Coût sur ${MONTHS / 12} ans`,
  "Qui crée le site",
  "Rédaction des textes",
  "Fiche Google Maps",
  "Votre interlocuteur",
  "En ligne en",
  "Vos modifications",
];

export const options: Option[] = [
  {
    id: "nappage",
    name: "Nappage (Pro)",
    mine: true,
    values: [
      euros(pricing.setupFee),
      `${euros(proTotal)} (${euros(essentielTotal)} en Essentiel)`,
      "Moi",
      "Incluse",
      "Mise au propre (suivie chaque mois en Premium)",
      "Le développeur, en direct, en visio",
      `${pricing.launchDays} jours`,
      "Faites pour vous, ou par vous",
    ],
  },
  {
    id: "diy",
    name: "Faire soi-même (outil en ligne)",
    values: [
      "0 €",
      `≈ ${euros(diy.monthlyMin * MONTHS)} à ${euros(diy.monthlyMax * MONTHS)}, plus votre temps`,
      "Vous",
      "Vous",
      "Vous",
      "Un support en ligne",
      "Selon votre temps",
      "Par vous",
    ],
  },
  {
    id: "turnkey",
    name: "Service clé en main national",
    values: [
      `≈ ${euros(turnkey.setup)} HT`,
      `≈ ${euros(turnkeyTotal)} HT`,
      "Une équipe à distance",
      "Vous",
      "Selon la formule",
      "Un conseiller",
      "Quelques semaines",
      "Selon la formule",
    ],
  },
  {
    id: "agency",
    name: "Agence web",
    values: [
      `≈ ${euros(agency.setup)} et plus`,
      `≈ ${euros(agencyTotal)}`,
      "L'agence",
      "Souvent en supplément",
      "En supplément",
      "Un chef de projet",
      "5 à 8 semaines",
      "Facturées à l'heure",
    ],
  },
];

// Coût sur 3 ans, en barres (fourchette haute pour l'outil à faire soi-même)
export const threeYear: { label: string; total: number; prefix?: string; suffix?: string; detail?: string; mine?: boolean }[] = [
  { label: "Nappage, formule Pro", total: proTotal, mine: true },
  { label: "Faire soi-même", total: diy.monthlyMax * MONTHS, prefix: "jusqu'à ", detail: "plus votre temps" },
  { label: "Service clé en main", total: turnkeyTotal, prefix: "≈ ", suffix: " HT" },
  { label: "Agence web", total: agencyTotal, prefix: "≈ " },
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
