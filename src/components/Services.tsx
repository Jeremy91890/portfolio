import type { CSSProperties } from "react";
import { motion } from "motion/react";
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
import { SectionHead, Stagger, fadeUp } from "./Reveal";

const services = [
  { icon: CalendarCheck, label: "Rendez-vous en ligne" },
  { icon: Robot, label: "IA & chatbot" },
  { icon: ShoppingBag, label: "Click & collect" },
  { icon: BookOpenText, label: "Avis clients" },
  { icon: Gear, label: "Outils métier" },
  { icon: DeviceMobileCamera, label: "Appli mobile" },
  { icon: ChartLineUp, label: "Statistiques" },
  { icon: ArrowsClockwise, label: "Refonte de site" },
];

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
          center
          title={
            <>
              Besoin d’autre chose&nbsp;?{" "}
              <span className="accent">Je le développe.</span>
            </>
          }
        />

        <Stagger className="bubbles" step={0.05} as="ul">
          {services.map(({ icon: Icon, label }, i) => (
            <motion.li key={label} variants={fadeUp}>
              <span
                className="bubble"
                style={{ "--i": i } as CSSProperties}
              >
                <Icon size={18} weight="duotone" aria-hidden="true" />
                {label}
              </span>
            </motion.li>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
