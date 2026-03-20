export type Experience = {
  id: string;
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
  tags: string[];
  accent: string;
};

export const experiences: Experience[] = [
  {
    id: "akkodis",
    company: "Akkodis",
    role: "Lead Développeur Full Stack",
    period: "Novembre 2018 — Présent",
    location: "Paris La Défense",
    description: [
      "Développement d'applications web et mobiles grand public en React / Next.js et React Native",
      "Développement d'APIs Node.js (SailsJS, NestJS) et bases de données MongoDB",
      "Déploiement sur serveurs, stores Google et Apple, monitoring via Google Cloud Platform",
      "Analyse des besoins clients, chiffrage de projets et participation aux soutenances",
      "Management d'une équipe agile et gestion de la maintenance adaptative",
    ],
    tags: ["React", "Next.js", "React Native", "Node.js", "NestJS", "MongoDB", "Azure", "GCP", "Agile"],
    accent: "#6C63FF",
  },
  {
    id: "openclassrooms",
    company: "OpenClassrooms",
    role: "Mentor en développement WEB",
    period: "Mars 2021 — Présent",
    description: [
      "Accompagnement d'étudiants sur les parcours développeur web et développeur front-end React",
      "Mentorat de 1 à 5 étudiants par semaine (1h par étudiant)",
      "Évaluation lors de soutenances avec grilles d'évaluation",
    ],
    tags: ["Pédagogie", "React.js", "JavaScript", "Communication", "Évaluation"],
    accent: "#00D9C0",
  },
  {
    id: "leka",
    company: "We Are Leka !",
    role: "Développeur iOS",
    period: "Janvier 2017 — Novembre 2018",
    location: "Paris",
    description: [
      "Développement d'une application iOS pour contrôler un robot éducatif en Bluetooth",
      "Création de contenus ludo-éducatifs à destination d'enfants autistes",
      "Mise en place d'une base de données Firebase en temps réel",
    ],
    tags: ["Swift", "iOS", "Bluetooth", "Firebase", "Xcode"],
    accent: "#FF6B6B",
  },
  {
    id: "wittyfit",
    company: "Wittyfit",
    role: "Développeur Back-End",
    period: "Janvier 2016 — Août 2016",
    description: [
      "Création d'outils d'administration de comptes clients",
      "Mise en place d'un back-office pour les administrateurs",
      "Développement avec le framework PHP Zend et création d'une app Android",
    ],
    tags: ["PHP Zend", "Bootstrap", "SQL", "Android"],
    accent: "#FFB347",
  },
];
