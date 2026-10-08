import { motion } from "motion/react";
import {
  ArrowRight,
  EnvelopeSimple,
  LinkedinLogo,
  MapPin,
  Phone,
} from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import { mailto, site } from "../data/site";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section contact on-dark"
      aria-labelledby="contact-title"
    >
      <motion.div
        className="hero__blob hero__blob--orange"
        aria-hidden="true"
        style={{ top: "auto", bottom: -260, right: "20%" }}
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      />
      <div className="hero__grid" aria-hidden="true" />
      <div className="container contact__inner">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2
            className="contact__title"
            id="contact-title"
            style={{ marginTop: 12 }}
          >
            Parlons de <span className="accent">votre commerce.</span>
          </h2>
          <p className="contact__lead">
            Une formule, un devis sur mesure ou simplement une question : je
            vous réponds personnellement.
          </p>
        </Reveal>
        <Reveal className="contact__ctas" delay={0.15}>
          <a className="btn" href={mailto("Demande de devis – site web")}>
            Demander un devis
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
          <a className="btn btn--ghost" href={`tel:${site.phoneHref}`}>
            <Phone size={18} aria-hidden="true" />
            M’appeler
          </a>
        </Reveal>
        <Reveal as="div" delay={0.25}>
          <ul className="contact__list">
            <li>
              <EnvelopeSimple size={18} aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </li>
            <li>
              <LinkedinLogo size={18} aria-hidden="true" />
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
            <li>
              <MapPin size={18} aria-hidden="true" />
              {site.city}
            </li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {site.name} · Fabriqué à
          Dammarie-lès-Lys, carburé au café
        </p>
        <p>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn<span className="sr-only"> (nouvel onglet)</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
