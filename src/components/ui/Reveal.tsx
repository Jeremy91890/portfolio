import { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Balise rendue, pour rester valide dans une liste ou une définition. */
  as?: "div" | "li";
};

/** Révélation au défilement : une seule fois, courte, et supprimée
 *  si la personne a demandé moins de mouvement. */
export default function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: Props) {
  const reduced = useReducedMotion();
  const { ref, inView } = useInView({ triggerOnce: true, rootMargin: "-8% 0px" });

  const Tag = as === "li" ? motion.li : motion.div;
  const Plain = as === "li" ? "li" : "div";

  if (reduced) return <Plain className={className}>{children}</Plain>;

  return (
    <Tag
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 28, scale: 0.985 }}
      animate={
        inView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 28, scale: 0.985 }
      }
      transition={{ duration: 0.55, delay, ease: [0.2, 0.7, 0.3, 1] }}
    >
      {children}
    </Tag>
  );
}
