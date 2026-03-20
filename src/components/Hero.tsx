import { motion } from "framer-motion";
import { useTypewriter } from "../hooks/useTypewriter";
import "./Hero.css";

const words = ["React.js", "Next.js", "React Native", "NestJS"];

export default function Hero() {
  const typed = useTypewriter(words);

  return (
    <section id="hero" className="hero noise">
      {/* Animated orbs background */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />
      <div className="hero__orb hero__orb--3" />

      <div className="hero__content container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="hero__tag">
            <span className="hero__tag-dot" />
            Disponible pour de nouveaux projets
          </span>
        </motion.div>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          Jérémy
          <br />
          <span className="gradient-text">Debelleix</span>
        </motion.h1>

        <motion.div
          className="hero__subtitle"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
        >
          <span className="hero__subtitle-static">Lead Developer · </span>
          <span className="hero__typewriter">
            {typed}
            <span className="hero__cursor">|</span>
          </span>
        </motion.div>

        <motion.p
          className="hero__desc"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          7 ans d'expérience en développement web & mobile.
          <br />
          Je conçois des applications performantes, accessibles et scalables.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a href="#experience" className="hero__btn hero__btn--primary">
            Voir mon parcours
          </a>
          <a href="#contact" className="hero__btn hero__btn--ghost">
            Me contacter
          </a>
        </motion.div>

        {/* Decorative code snippet */}
        <motion.div
          className="hero__code"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="hero__code-dots">
            <span />
            <span />
            <span />
          </div>
          <pre>{`const stack = {
  frontend: ["React", "Next.js"],
  mobile:   ["React Native", "Swift"],
  backend:  ["Node.js", "NestJS"],
  cloud:    ["GCP", "Azure"],
};`}</pre>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
}
