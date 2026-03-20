import { experiences } from "../data/experience";
import AnimatedSection from "./ui/AnimatedSection";
import SectionTitle from "./ui/SectionTitle";
import TechTag from "./ui/TechTag";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <AnimatedSection>
          <SectionTitle label="// Expérience" title="Mon parcours" />
        </AnimatedSection>

        <div className="timeline">
          {experiences.map((exp, i) => (
            <AnimatedSection
              key={exp.id}
              delay={i * 0.1}
              direction={i % 2 === 0 ? "left" : "right"}
            >
              <div className={`timeline__item ${i % 2 === 0 ? "timeline__item--left" : "timeline__item--right"}`}>
                <div
                  className="timeline__dot"
                  style={{ background: exp.accent, boxShadow: `0 0 12px ${exp.accent}80` }}
                />
                <div className="timeline__card glass">
                  <div className="timeline__card-header">
                    <div>
                      <span className="timeline__period">{exp.period}</span>
                      <h3 className="timeline__role">{exp.role}</h3>
                      <div className="timeline__company" style={{ color: exp.accent }}>
                        {exp.company}
                        {exp.location && (
                          <span className="timeline__location"> · {exp.location}</span>
                        )}
                      </div>
                    </div>
                  </div>

                  <ul className="timeline__bullets">
                    {exp.description.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>

                  <div className="timeline__tags">
                    {exp.tags.map((t) => (
                      <TechTag key={t} label={t} color={exp.accent} />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

          {/* Education */}
          <AnimatedSection delay={0.4}>
            <div className="timeline__item timeline__item--left">
              <div
                className="timeline__dot"
                style={{ background: "var(--text-muted)", boxShadow: "0 0 10px rgba(85,85,112,0.4)" }}
              />
              <div className="timeline__card glass">
                <span className="timeline__period">2016 — 2019</span>
                <h3 className="timeline__role">Ingénieur Architecte Logiciel</h3>
                <div className="timeline__company" style={{ color: "var(--text-muted)" }}>
                  ETNA — École des Technologies Numériques Appliquées
                </div>
                <ul className="timeline__bullets">
                  <li>Formation en alternance · Architecture logicielle & développement</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
