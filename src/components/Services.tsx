import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import {
  ArrowsClockwise,
  BookOpenText,
  CalendarCheck,
  ChartLineUp,
  DeviceMobileCamera,
  Gear,
  Robot,
  ShoppingBag,
} from "@phosphor-icons/react";
import { SectionHead, Stagger } from "./Reveal";

const services = [
  {
    icon: CalendarCheck,
    label: "Rendez-vous en ligne",
    title: "Prise de rendez-vous",
    text: "Vos clients réservent en ligne, 24 h/24, avec rappels automatiques pour éviter les absences.",
  },
  {
    icon: Robot,
    label: "IA & chatbot",
    title: "Intelligence artificielle",
    text: "Chatbot qui répond aux questions fréquentes, relances par email, rédaction assistée.",
  },
  {
    icon: ShoppingBag,
    label: "Click & collect",
    title: "Commande & click & collect",
    text: "Vos produits en ligne, commandés à l’avance et retirés en boutique.",
  },
  {
    icon: BookOpenText,
    label: "Avis clients",
    title: "Livre d’or & avis",
    text: "Recueillez et affichez les avis de vos clients, et faites remonter votre note sur Google.",
  },
  {
    icon: Gear,
    label: "Outils métier",
    title: "Outils métier sur mesure",
    text: "Devis, suivi de commandes, stocks : des outils taillés pour vos processus à vous. Adieu le tableur à 47 onglets.",
  },
  {
    icon: DeviceMobileCamera,
    label: "Appli mobile",
    title: "Application mobile",
    text: "Une application iOS et Android pour fidéliser vos clients au quotidien.",
  },
  {
    icon: ChartLineUp,
    label: "Statistiques",
    title: "Statistiques claires",
    text: "Combien de visites, d’où viennent vos clients : des chiffres simples, commentés.",
  },
  {
    icon: ArrowsClockwise,
    label: "Refonte de site",
    title: "Refonte de votre site",
    text: "Un site vieillissant ? Je le modernise en préservant votre référencement.",
  },
];

const pop: Variants = {
  hidden: { opacity: 0, scale: 0.6, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 320, damping: 18 },
  },
};

const morph = { type: "spring", stiffness: 380, damping: 32 } as const;

export default function Services() {
  const [open, setOpen] = useState<string | null>(null);

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
          center
          title={
            <>
              Besoin d’autre chose&nbsp;?{" "}
              <span className="accent">Je le développe.</span>
            </>
          }
        />

        <Stagger className="bubbles" step={0.07} as="ul">
          {services.map(({ icon: Icon, label, title, text }, i) => {
            const isOpen = open === label;
            const panelId = `service-panel-${i}`;
            return (
              <motion.li
                key={label}
                variants={pop}
                layout
                transition={morph}
                className={isOpen ? "is-open" : undefined}
              >
                <motion.div
                  layout
                  transition={morph}
                  className="bubble"
                  style={{ borderRadius: isOpen ? 20 : 999 }}
                >
                  <motion.button
                    layout="position"
                    transition={morph}
                    type="button"
                    className="bubble__toggle"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(isOpen ? null : label)}
                  >
                    <Icon size={18} weight="duotone" aria-hidden="true" />
                    {isOpen ? title : label}
                  </motion.button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.p
                        id={panelId}
                        className="bubble__text"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { delay: 0.1 } }}
                        exit={{ opacity: 0, transition: { duration: 0.08 } }}
                      >
                        {text}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.li>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
