import AnimatedSection from "./ui/AnimatedSection";
import SectionTitle from "./ui/SectionTitle";
import "./About.css";

const stats = [
  { value: "7+", label: "ans d'expérience" },
  { value: "40+", label: "projets réalisés" },
  { value: "20+", label: "étudiants mentorés" },
  { value: "∞", label: "cafés par sprint" },
];

const cards = [
  {
    icon: "⚡",
    title: "Lead Full Stack",
    text: "De l'architecture backend à l'interface mobile, je couvre l'ensemble du cycle de développement d'une application.",
  },
  {
    icon: "🎓",
    title: "Mentor actif",
    text: "Je transmets mes connaissances à la prochaine génération de développeurs via OpenClassrooms depuis 2021.",
  },
  {
    icon: "📱",
    title: "Mobile-first",
    text: "Passionné de développement mobile : React Native pour le cross-platform, Swift pour les apps iOS natives.",
  },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <AnimatedSection>
          <SectionTitle label="// À propos" title="Qui suis-je ?" />
        </AnimatedSection>

        <div className="about__grid">
          {cards.map((card, i) => (
            <AnimatedSection key={card.title} delay={i * 0.1}>
              <div className="about__card glass">
                <span className="about__card-icon">{card.icon}</span>
                <h3 className="about__card-title">{card.title}</h3>
                <p className="about__card-text">{card.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <div className="about__stats glass">
            {stats.map((s) => (
              <div key={s.label} className="about__stat">
                <span className="about__stat-value gradient-text">
                  {s.value}
                </span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
