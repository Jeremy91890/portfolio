import { motion, type Variants } from 'motion/react';
import type { ReactNode } from 'react';

const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export const stagger = (step = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: step, delayChildren: delay } },
});

const viewport = { once: true, margin: '0px 0px -12% 0px' };

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'section' | 'article';
};

/** Apparition au défilement (une seule fois). */
export function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const Tag = motion[as];
  return (
    <Tag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      variants={{
        hidden: fadeUp.hidden,
        show: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } },
      }}
    >
      {children}
    </Tag>
  );
}

/** Conteneur qui échelonne l'apparition de ses enfants `motion` utilisant `fadeUp`. */
export function Stagger({
  children,
  className,
  step,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  step?: number;
  as?: 'div' | 'ul' | 'ol';
}) {
  const Tag = motion[as];
  return (
    <Tag className={className} initial="hidden" whileInView="show" viewport={viewport} variants={stagger(step)}>
      {children}
    </Tag>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
  id,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  center?: boolean;
  id: string;
}) {
  return (
    <Stagger className={`section-head${center ? ' section-head--center' : ''}`} step={0.1}>
      <motion.p className="eyebrow" variants={fadeUp}>
        {eyebrow}
      </motion.p>
      <motion.h2 className="section-title" id={id} variants={fadeUp}>
        {title}
      </motion.h2>
      {lead && (
        <motion.p className="section-lead" variants={fadeUp}>
          {lead}
        </motion.p>
      )}
    </Stagger>
  );
}
