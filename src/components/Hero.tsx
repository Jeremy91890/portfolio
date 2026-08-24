import { motion, useReducedMotion } from "framer-motion";
import PageAudit from "./PageAudit";
import "./Hero.css";

const stack = ["React.js", "Next.js", "React Native", "NestJS"];

export default function Hero() {
  const reduced = useReducedMotion();

  const rise = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.4, 0, 0.2, 1] as const },
        };

  return (
    <section id="hero" className="hero">
      <div className="hero__inner shell">
        <div className="hero__lede">
          <motion.p className="hero__status" {...rise(0)}>
            <span className="hero__status-dot" aria-hidden="true" />
            Disponible pour de nouveaux projets
          </motion.p>

          <motion.h1 className="hero__title" {...rise(0.06)}>
            Jérémy Debelleix,
            <br />
            <span className="hero__title-accent">Lead Developer</span>
            <br />
            full stack.
          </motion.h1>

          <motion.p className="hero__desc" {...rise(0.12)}>
            7 ans d'expérience en développement web &amp; mobile. Je conçois des
            applications performantes, accessibles et scalables.
          </motion.p>

          <motion.ul className="hero__stack" {...rise(0.18)}>
            {stack.map((tech) => (
              <li key={tech} className="chip">
                {tech}
              </li>
            ))}
          </motion.ul>

          <motion.div className="hero__actions" {...rise(0.24)}>
            <a href="#services" className="btn btn--primary">
              Voir mes offres
            </a>
            <a href="#experience" className="btn btn--secondary">
              Voir mon parcours
            </a>
            <a href="#contact" className="btn btn--secondary">
              Me contacter
            </a>
          </motion.div>
        </div>

        <motion.div className="hero__panel" {...rise(0.2)}>
          <PageAudit />
        </motion.div>
      </div>
    </section>
  );
}
