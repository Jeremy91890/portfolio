import type { PointerEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowsClockwise,
  BookOpenText,
  CalendarCheck,
  ChartLineUp,
  DeviceMobileCamera,
  Gear,
  Robot,
  ShoppingBag,
} from "@phosphor-icons/react";
import { Reveal, SectionHead, Stagger, fadeUp } from "./Reveal";

const services = [
  {
    icon: CalendarCheck,
    title: "Prise de rendez-vous",
    text: "Vos clients réservent en ligne, 24 h/24, avec rappels automatiques pour éviter les absences.",
  },
  {
    icon: BookOpenText,
    title: "Livre d’or & avis",
    text: "Recueillez et affichez les avis de vos clients, et faites remonter votre note sur Google.",
  },
  {
    icon: Robot,
    title: "Intelligence artificielle",
    text: "Chatbot qui répond aux questions fréquentes, relances par email, rédaction assistée.",
  },
  {
    icon: ShoppingBag,
    title: "Commande & click & collect",
    text: "Vos produits en ligne, commandés à l’avance et retirés en boutique.",
  },
  {
    icon: Gear,
    title: "Outils métier sur mesure",
    text: "Devis, suivi de commandes, stocks : des outils taillés pour vos processus à vous. Adieu le tableur à 47 onglets.",
  },
  {
    icon: DeviceMobileCamera,
    title: "Application mobile",
    text: "Une application iOS et Android pour fidéliser vos clients au quotidien.",
  },
  {
    icon: ChartLineUp,
    title: "Statistiques claires",
    text: "Combien de visites, d’où viennent vos clients : des chiffres simples, commentés.",
  },
  {
    icon: ArrowsClockwise,
    title: "Refonte de votre site",
    text: "Un site vieillissant ? Je le modernise en préservant votre référencement.",
  },
];

const track = (e: PointerEvent<HTMLElement>) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
};

export default function Services() {
  return (
    <section
      id="services"
      className="section section--surface"
      aria-labelledby="services-title"
    >
      <div className="container">
        <SectionHead
          id="services-title"
          eyebrow="Sur mesure"
          title={
            <>
              Votre digitalisation,{" "}
              <span className="accent">quelle qu’elle soit.</span>
            </>
          }
          lead="Les formules couvrent la majorité des besoins, mais chaque commerce est unique. Je développe aussi des fonctionnalités adaptées à vos processus."
        />

        <Stagger className="services" step={0.06} as="ul">
          {services.map(({ icon: Icon, title, text }) => (
            <motion.li
              key={title}
              className="spot"
              variants={fadeUp}
              onPointerMove={track}
            >
              <span className="card__icon" aria-hidden="true">
                <Icon size={24} weight="duotone" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.li>
          ))}
        </Stagger>

        <Reveal className="quote-banner on-dark">
          <div>
            <h3>Les formules ne sont qu’indicatives.</h3>
            <p>
              Besoin d’autre chose ? Je vous fais un devis personnalisé, en
              dehors des formules, adapté à votre budget et à votre façon de
              travailler.
            </p>
          </div>
          <a className="btn" href="#contact">
            Demander un devis
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
