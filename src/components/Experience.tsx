import { experiences, education } from "../data/experience";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="band band--surface experience">
      <div className="shell">
        <SectionHead label="Expérience" title="Mon parcours" />

        <ol className="roles">
          {experiences.map((exp, i) => {
            const current = exp.period.includes("Présent");
            return (
              <Reveal key={exp.id} delay={i * 0.06} as="li" className="role card card--lift">
                <div className="role__rail">
                  <p className="role__period">{exp.period}</p>
                  {exp.location && (
                    <p className="role__location">{exp.location}</p>
                  )}
                  {current && <p className="role__now">En cours</p>}
                </div>

                <div className="role__body">
                  <h3 className="role__title">{exp.role}</h3>
                  <p className="role__company">{exp.company}</p>

                  <ul className="role__points">
                    {exp.description.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>

                  <ul className="role__tags">
                    {exp.tags.map((tag) => (
                      <li key={tag} className="chip">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}

          <Reveal delay={0.24} as="li" className="role card role--study">
            <div className="role__rail">
              <p className="role__period">{education.period}</p>
              <p className="role__location">Formation</p>
            </div>
            <div className="role__body">
              <h3 className="role__title">{education.degree}</h3>
              <p className="role__company">{education.school}</p>
              <ul className="role__points">
                {education.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}
