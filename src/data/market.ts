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
const agencyTotal = agency.setup + agency.monthly * MONTHS;
export const agencySavings = agencyTotal - proTotal;

const fromPrice = Math.min(...pricing.plans.map((p) => p.price));
// 30 → « 30 », 16.8 → « 16,80 »
const price = (n: number) =>
  n.toLocaleString("fr-FR", { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 });

// Comparaison en 2 × 2 : petit prix ou prix fort, fait pour vous ou à faire vous-même.
// Seuil « petit prix » = le haut de la fourchette des outils à faire soi-même (Nappage doit rester en dessous).
export const cheapUpTo = diy.monthlyMax;

export type Choice = { name: string; price: string; mine?: boolean };

export const grid = {
  columns: [`Jusqu'à ${price(cheapUpTo)} €/mois`, `${price(turnkey.monthly)} €/mois et plus`],
  rows: [
    {
      label: "Fait pour vous",
      cells: [
        [{ name: "Nappage", price: `Dès ${price(fromPrice)} €/mois, ${euros(pricing.setupFee)} au départ`, mine: true }],
        [
          { name: "Clé en main national", price: `${price(turnkey.monthly)} € HT/mois + ${euros(turnkey.setup)} HT au départ` },
          { name: "Agence web", price: `Dès ${price(agency.monthly)} €/mois + ${euros(agency.setup)} au départ` },
        ],
      ] as Choice[][],
    },
    {
      label: "À faire vous-même",
      cells: [
        [{ name: "Faire soi-même", price: `${price(diy.monthlyMin)} à ${price(diy.monthlyMax)} € TTC/mois, et votre temps` }],
        [],
      ] as Choice[][],
    },
  ],
};

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
