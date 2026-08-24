import { skillGroups } from "../data/skills";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="band skills">
      <div className="shell">
        <SectionHead
          label="Compétences"
          title="Ma stack technique"
          lede="Les technologies que j'utilise au quotidien, du front à la mise en production."
        />

        <dl className="skills__list">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06} className="skills__group">
              <dt className="skills__group-label">
                {group.label}
                <span className="skills__count">{group.skills.length}</span>
              </dt>
              <dd>
                <ul className="skills__items">
                  {group.skills.map((skill) => (
                    <li key={skill} className="chip">
                      {skill}
                    </li>
                  ))}
                </ul>
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
