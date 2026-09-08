import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import "./About.css";

const statements = [
  {
    title: "Lead Full Stack",
    text: "De l'architecture backend à l'interface mobile, je couvre l'ensemble du cycle de développement d'une application.",
  },
  {
    title: "Mentor actif",
    text: "Je transmets mes connaissances à la prochaine génération de développeurs via OpenClassrooms depuis 2021.",
  },
  {
    title: "Mobile-first",
    text: "Passionné de développement mobile : React Native pour le cross-platform, Swift pour les apps iOS natives.",
  },
];

const stats = [
  { value: "10+", label: "ans d'expérience" },
  { value: "40+", label: "projets réalisés" },
  { value: "20+", label: "étudiants mentorés" },
  { value: "∞", label: "cafés par sprint" },
];

export default function About() {
  return (
    <section id="about" className="band band--surface about">
      <div className="shell">
        <SectionHead label="À propos" title="Qui suis-je ?" />

        <div className="about__statements">
          {statements.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 0.08}
              className="about__statement card card--lift"
            >
              <h3 className="about__statement-title">{s.title}</h3>
              <p className="about__statement-text">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <dl className="about__stats card">
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <dt className="about__stat-value">{s.value}</dt>
                <dd className="about__stat-label">{s.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
