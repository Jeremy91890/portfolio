export type SkillGroup = {
  label: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Sass",
      "Tailwind CSS",
      "Material UI",
      "Bootstrap",
      "Accessibilité",
    ],
  },
  {
    label: "Mobile",
    skills: [
      "React Native",
      "Swift",
      "iOS",
      "Xcode",
      "Android Studio",
      "Bluetooth",
    ],
  },
  {
    label: "Backend",
    skills: [
      "Node.js",
      "NestJS",
      "Strapi",
      "SailsJS",
      "API REST",
      "MongoDB",
      "SQL",
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      "Google Cloud Platform",
      "Microsoft Azure",
      "Google Firebase",
      "Git",
      "SEO",
      "Agile",
    ],
  },
  {
    label: "Intelligence Artificielle",
    skills: ["GitHub Copilot", "Speckit", "Claude", "Prompt Engineering"],
  },
];
