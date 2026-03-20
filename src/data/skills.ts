export type SkillGroup = {
  label: string;
  color: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    color: "#6C63FF",
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
    color: "#00D9C0",
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
    color: "#FF6B6B",
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
    color: "#FFB347",
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
    color: "#C084FC",
    skills: ["GitHub Copilot", "Speckit", "Claude", "Prompt Engineering"],
  },
];
