import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { ChatsCircle, Check, Lifebuoy, PencilRuler, RocketLaunch } from '@phosphor-icons/react';
import { SectionHead, Reveal } from './Reveal';

const steps = [
  {
    icon: ChatsCircle,
    title: 'On fait connaissance',
    text: 'Vous me parlez de votre commerce, de vos clients et de vos envies. Je vous conseille la formule adaptée, ou un devis sur mesure.',
    meta: 'Échange sans engagement',
  },
  {
    icon: PencilRuler,
    title: 'Je conçois votre site',
    text: 'Textes, photos, couleurs : je construis un site à votre image. Vous validez, je l’ajuste jusqu’à ce qu’il vous plaise, même au dixième « un peu plus de bleu ».',
    meta: 'Vous validez chaque étape',
  },
  {
    icon: RocketLaunch,
    title: 'Mise en ligne',
    text: 'Je réserve le nom de domaine, j’héberge le site, je le sécurise et je mets votre fiche Google Maps au propre.',
    meta: '0 € de frais de mise en place',
  },
  {
    icon: Lifebuoy,
    title: 'Je reste à vos côtés',
    text: 'Modifications, corrections de bugs, support : votre site vit et évolue avec votre activité, sans surprise sur la facture.',
    meta: 'Un abonnement mensuel, tout compris',
  },
];

const notYourJob = ['Hébergement', 'Nom de domaine', 'Certificat de sécurité', 'Mises à jour', 'Sauvegardes'];

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
          lead="Un abonnement simple qui comprend tout : la création, l’hébergement, le nom de domaine et le suivi. Aucune partie technique n’est à votre charge."
        />

        <div className="process" ref={listRef}>
          <div className="process__rail" aria-hidden="true">
            <motion.div className="process__rail-fill" style={{ scaleY: fill }} />
          </div>
          <ol className="process__list">
          {steps.map(({ icon: Icon, title, text, meta }, i) => (
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
                <p className="step__meta">{meta}</p>
              </div>
            </Reveal>
          ))}
          </ol>
        </div>

        <Reveal className="nothing">
          <h3>Ce que vous n’avez plus à gérer</h3>
          <ul>
            {notYourJob.map((t) => (
              <li key={t}>
                <Check size={18} weight="bold" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
          <p className="nothing__aside">
            Et vous n’aurez jamais à me demander ce qu’est un « DNS ». Promis.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
