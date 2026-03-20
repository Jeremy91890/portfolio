import { useState } from "react";
import { skillGroups } from "../data/skills";
import AnimatedSection from "./ui/AnimatedSection";
import SectionTitle from "./ui/SectionTitle";
import "./Skills.css";

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState<string | null>(null);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <AnimatedSection>
          <SectionTitle label="// Compétences" title="Ma stack technique" />
        </AnimatedSection>

        {/* Filter tabs */}
        <AnimatedSection delay={0.1}>
          <div className="skills__filters">
            <button
              className={`skills__filter ${activeGroup === null ? "skills__filter--active" : ""}`}
              onClick={() => setActiveGroup(null)}
            >
              Toutes
            </button>
            {skillGroups.map((g) => (
              <button
                key={g.label}
                className={`skills__filter ${activeGroup === g.label ? "skills__filter--active" : ""}`}
                style={activeGroup === g.label ? { background: `${g.color}22`, borderColor: `${g.color}60`, color: g.color } : {}}
                onClick={() => setActiveGroup(activeGroup === g.label ? null : g.label)}
              >
                {g.label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        <div className="skills__groups">
          {skillGroups
            .filter((g) => activeGroup === null || g.label === activeGroup)
            .map((group, gi) => (
              <AnimatedSection key={group.label} delay={gi * 0.08}>
                <div className="skills__group">
                  <div className="skills__group-header">
                    <span
                      className="skills__group-dot"
                      style={{ background: group.color }}
                    />
                    <h3 className="skills__group-label">{group.label}</h3>
                  </div>
                  <div className="skills__pills">
                    {group.skills.map((skill, si) => (
                      <span
                        key={skill}
                        className="skills__pill"
                        style={{
                          animationDelay: `${si * 40}ms`,
                          ["--pill-color" as string]: group.color,
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
}
