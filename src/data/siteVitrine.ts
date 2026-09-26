export type FeatureKey =
  | "site"
  | "domaineHebergement"
  | "reservationContact"
  | "backoffice"
  | "modifications"
  | "correctionBugs"
  | "support"
  | "ficheGoogle"
  | "bonus";

export type Plan = {
  id: string;
  name: string;
  price: number;
  period: string;
  tagline: string;
  /** Résumé en une phrase, pour choisir sans lire la grille. */
  summary: string;
  highlighted: boolean;
  badge?: string;
  /** `null` : la ligne ne fait pas partie de l'offre. */
  features: Record<FeatureKey, string | null>;
};

export const featureLabels: Record<FeatureKey, string> = {
  site: "Votre site",
  domaineHebergement: "Nom de domaine + hébergement",
  reservationContact: "Réservation & contact",
  backoffice: "Espace de gestion (back-office)",
  modifications: "Modifications faites pour vous",
  correctionBugs: "Correction de bugs (garantie)",
  support: "Support",
  ficheGoogle: "Fiche Google Maps",
  bonus: "Bonus",
};

export const featureOrder = Object.keys(featureLabels) as FeatureKey[];

export const plans: Plan[] = [
  {
    id: "essentiel",
    name: "Essentiel",
    price: 29,
    period: "mois",
    tagline: "L'essentiel pour exister sur internet",
    summary:
      "Vous voulez simplement être trouvé : une page avec l'essentiel, mise à jour par nos soins une fois par trimestre.",
    highlighted: false,
    features: {
      site: "1 page : présentation, horaires, plan, contact",
      domaineHebergement: "Inclus",
      reservationContact: "Bouton vers votre plateforme (Planity, TheFork…)",
      backoffice: "En option (+10 €/mois) : horaires, textes et images",
      modifications: "1 par trimestre",
      correctionBugs: "Inclus",
      support: "Email, réponse sous 72 h ouvrées",
      ficheGoogle: null,
      bonus: null,
    },
  },
  {
    id: "pro",
    name: "Pro",
    price: 49,
    period: "mois",
    tagline: "Pour attirer et convertir plus de clients",
    summary:
      "Vous voulez attirer de nouveaux clients : un site complet que vous modifiez vous-même, et une modification par mois faite pour vous.",
    highlighted: true,
    badge: "Le plus choisi",
    features: {
      site: "Plusieurs pages : services, carte ou tarifs, galerie photos",
      domaineHebergement: "Inclus",
      reservationContact: "Bouton de réservation + formulaire de contact",
      backoffice: "Inclus : horaires, textes, images, carte ou tarifs",
      modifications: "1 par mois",
      correctionBugs: "Inclus",
      support: "Email et SMS, réponse sous 48 h ouvrées",
      ficheGoogle: "Mise au propre lors de la mise en ligne",
      bonus: "QR code pour récolter des avis",
    },
  },
  {
    id: "premium",
    name: "Premium",
    price: 89,
    period: "mois",
    tagline: "On gère tout, vous ne pensez à rien",
    summary:
      "Vous ne voulez vous occuper de rien : on fait toutes vos modifications, on répond sous 24 h et on suit votre visibilité.",
    highlighted: false,
    features: {
      site: "Plusieurs pages + une page dédiée à chaque service",
      domaineHebergement: "Inclus",
      reservationContact:
        "Bouton, formulaire de contact + formulaire de demande sur mesure",
      backoffice: "Inclus : tout le contenu, images et nouvelles pages",
      modifications:
        "Illimitées : on intervient pour n'importe quelle modification",
      correctionBugs: "Inclus, traitée en priorité",
      support: "Email, SMS et téléphone, réponse sous 24 h ouvrées",
      ficheGoogle: "Mise au propre + mise à jour chaque mois",
      bonus:
        "QR code avis, statistiques de visites mensuelles, référencement local",
    },
  },
];

export const common = {
  setupFee: 0,
};

export const launchOffer = {
  title: "1er mois offert",
};

export const oneTimePurchase = {
  price: 490,
  hostingPerMonth: 15,
  bugWarrantyMonths: 3,
  backofficePerMonth: 10,
  modificationUnitPrice: 40,
  support: "Facturé à l'intervention",
};
