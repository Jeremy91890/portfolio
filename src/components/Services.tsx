import { useState } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import {
  ArrowsClockwise,
  CalendarCheck,
  DeviceMobileCamera,
  Receipt,
  Robot,
  ShoppingBag,
  Stamp,
} from "@phosphor-icons/react";
import { SectionHead, Stagger } from "./Reveal";

const services = [
  {
    icon: CalendarCheck,
    label: "Réservation",
    title: "Réservation sans commission",
    text: "Vos clients réservent en ligne, avec rappels automatiques, sans commission sur vos ventes.",
  },
  {
    icon: Receipt,
    label: "Devis et factures",
    title: "Devis et factures",
    text: "Créez et envoyez vos devis et factures en quelques clics.",
  },
  {
    icon: Stamp,
    label: "Carte de fidélité",
    title: "Carte de fidélité",
    text: "Une carte de fidélité sur le téléphone de vos clients.",
  },
  {
    icon: Robot,
    label: "Assistant clients",
    title: "Assistant pour répondre aux clients",
    text: "Il répond aux questions fréquentes : horaires, services, tarifs.",
  },
  {
    icon: ShoppingBag,
    label: "Click & collect",
    title: "Commande & click & collect",
    text: "Vos produits commandés à l’avance et retirés en boutique.",
  },
  {
    icon: DeviceMobileCamera,
    label: "Appli mobile",
    title: "Application mobile",
    text: "Une application iOS et Android pour fidéliser vos clients.",
  },
  {
    icon: ArrowsClockwise,
    label: "Reprise de votre site",
    title: "Vous avez déjà un site ?",
    text: "Je le reprends et le modernise en préservant votre référencement.",
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
              Besoin d’un outil en plus&nbsp;?{" "}
              <span className="accent">Je le développe.</span>
            </>
          }
          lead="Sur devis, en complément de n’importe quelle formule."
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
