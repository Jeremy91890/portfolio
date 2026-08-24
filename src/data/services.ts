export type Offer = {
  title: string;
  price: string;
  description: string;
  deliverable: string;
  note?: string;
};

export const offers: Offer[] = [
  {
    title: "Correction de bug express",
    price: "150 €",
    description:
      "Correction d'un bug ciblé en moins de 48h, sur une base de code existante.",
    deliverable: "Correctif appliqué + bref résumé de ce qui a été fait.",
    note: "Périmètre conseillé : 1 bug principal, hors refonte.",
  },

  {
    title: "Audit d'accessibilité RGAA",
    price: "100 € / page environ",
    description:
      "Audit rapide d'une page ou d'un gabarit, avec identification des principaux écarts et priorisation des corrections.",
    deliverable:
      "Rapport synthétique avec points bloquants, risques et recommandations.",
    note: "Très adapté pour les sites déjà en production qui veulent avancer vite sur la conformité.",
  },
  {
    title: "Maintenance applicative mensuelle",
    price: "500 € / mois",
    description:
      "2 jours de maintenance applicative par mois, dédiés aux corrections, petites améliorations et suivi technique.",
    deliverable:
      "En fin de mois, un fichier récapitulatif détaille les dates et tâches réalisées. Si 2 jours de travail ne sont pas atteints, la facturation est ajustée au prorata du temps passé.",
    note: "Une bonne formule pour les clients qui veulent de la continuité sans recruter.",
  },
  {
    title: "Atelier de sensibilisation à l'accessibilité numérique",
    price: "500 € / demi-journée",
    description:
      "Atelier à destination des développeurs, designers, CP ou PO, uniquement sur l'accessibilité numérique : bonnes pratiques, erreurs fréquentes, impact produit et collaboration entre métiers.",
    deliverable: "Session animée + supports remis aux participants.",
    note: "Adapté pour sensibiliser une équipe et lancer une dynamique d'amélioration durable.",
  },
  {
    title: "Packaging et déploiement d'app mobile",
    price: "Sur devis",
    description:
      "Mise en production d'une application mobile sur les stores, avec préparation technique, packaging, création des fiches sur Google Play et l'App Store, et déploiement final.",
    deliverable:
      "Build prêt à publier, fiches stores créées ou optimisées, accompagnement du process de mise en ligne et vérification finale.",
    note: "Le périmètre est ajusté selon l'état du projet, la stack et les accès aux comptes développeur.",
  },
  {
    title: "Évolution / nouvelle feature",
    price: "Sur devis",
    description:
      "Ajout d'une fonctionnalité ou évolution sur un projet existant, avec cadrage court en amont.",
    deliverable: "Fonctionnalité livrée, intégrée proprement dans l'existant.",
    note: "Idéal pour les besoins ponctuels ou les petites roadmaps.",
  },
];
