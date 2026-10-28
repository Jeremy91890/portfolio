import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ChatsCircle, Lifebuoy, PencilRuler, RocketLaunch } from '@phosphor-icons/react';
import { SectionHead, Reveal } from './Reveal';
import pricing from '../data/pricing';

const steps = [
  {
    icon: ChatsCircle,
    title: 'On fait connaissance en visio',
    text: '20 min, sans engagement, pour choisir la bonne formule.',
  },
  {
    icon: PencilRuler,
    title: 'Je conçois votre site',
    text: 'Vous validez chaque étape, même au dixième « un peu plus de bleu ».',
  },
  {
    icon: RocketLaunch,
    title: 'Mise en ligne',
    text: `Votre site est en ligne en ${pricing.launchDays} jours. Mise en place : ${pricing.setupFee} €.`,
  },
  {
    icon: Lifebuoy,
    title: 'Et ensuite ?',
    text: 'Je m’occupe des mises à jour, des modifications et du suivi en visio, selon votre formule.',
  },
];

export default function Process() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 70%', 'end 60%'] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="methode" className="section section--dark on-dark" aria-labelledby="methode-title">
      <div className="container">
        <SectionHead
          id="methode-title"
          center
          eyebrow="Clé en main"
          title={
            <>
              Vous gérez vos clients, <span className="accent">je m’occupe du reste.</span>
            </>
          }
        />

        <div className="process" ref={listRef}>
          <div className="process__rail" aria-hidden="true">
            <motion.div className="process__rail-fill" style={{ scaleY: fill }} />
          </div>
          <ol className="process__list">
          {steps.map(({ icon: Icon, title, text }, i) => (
            <Reveal as="li" className="step" key={title} delay={i * 0.05}>
              <motion.span
                className="step__num"
                aria-hidden="true"
                initial={{ scale: 0.6 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: '0px 0px -20% 0px' }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                {i + 1}
              </motion.span>
              <div className="step__body">
                <h3>
                  <span className="sr-only">Étape {i + 1} : </span>
                  <Icon size={24} weight="duotone" color="var(--orange)" aria-hidden="true" />
                  {title}
                </h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
          </ol>
        </div>

      </div>
    </section>
  );
}
