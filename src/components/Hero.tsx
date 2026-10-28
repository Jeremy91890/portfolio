import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform, type Variants } from 'motion/react';
import { ArrowRight, VideoCamera } from '@phosphor-icons/react';
import DevicesMock from './DevicesMock';
import { site } from '../data/site';
import pricing from '../data/pricing';

// Formule la moins chère, affichée comme prix d'appel
const entryPlan = pricing.plans.reduce((a, b) => (b.price < a.price ? b : a));

const ease = [0.22, 1, 0.36, 1] as const;

const titleBefore = ['Un', 'site', 'web', 'clé', 'en', 'main', 'pour', 'votre', 'commerce,'];
const titleAfter = ['le', 'prix', 'd’une', 'agence.'];

const word: Variants = {
  hidden: { y: '110%' },
  show: (i: number) => ({ y: '0%', transition: { duration: 0.8, ease, delay: 0.15 + i * 0.05 } }),
};

const appear = (delay: number): Variants => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay } },
});

function Words({ words, offset }: { words: string[]; offset: number }) {
  return (
    <>
      {words.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className="word">
            <motion.span custom={offset + i} variants={word}>
              {w}
            </motion.span>
          </span>{' '}
        </Fragment>
      ))}
    </>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const blobY1 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const blobY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);

  return (
    <section ref={ref} id="top" className="hero on-dark" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <motion.div className="hero__blob hero__blob--orange" style={{ y: blobY1 }} aria-hidden="true" />
      <motion.div className="hero__blob hero__blob--blue" style={{ y: blobY2 }} aria-hidden="true" />

      <motion.div className="container hero__inner" initial="hidden" animate="show">
        <div>
          <motion.p className="eyebrow hero__slogan" variants={appear(0)}>
            {site.slogan}
          </motion.p>

          <h1 className="hero__title" id="hero-title">
            <Words words={titleBefore} offset={0} />
            <span className="word">
              <motion.span custom={titleBefore.length} variants={word} className="highlight">
                sans
                <svg className="hero__underline" viewBox="0 0 100 12" preserveAspectRatio="none" aria-hidden="true">
                  <motion.path
                    d="M2 9 C 25 2, 60 2, 98 7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1.1, ease }}
                  />
                </svg>
              </motion.span>
            </span>{' '}
            <Words words={titleAfter} offset={titleBefore.length + 1} />
          </h1>

          <motion.p className="hero__lead" variants={appear(0.8)}>
            Je crée le site de votre commerce, je l’héberge et je le mets à jour.{' '}
            <strong>Vous n’avez rien à faire, et rien à payer pour démarrer.</strong>
          </motion.p>

          <motion.div className="hero__ctas" variants={appear(0.95)}>
            <a className="btn" href="#tarifs">
              Voir les formules
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#rappel">
              Être rappelé
            </a>
          </motion.div>
          <motion.p className="hero__remote" variants={appear(1)}>
            <VideoCamera size={18} weight="duotone" aria-hidden="true" />
            Partout en France · suivi en visio
          </motion.p>

          <motion.dl className="hero__stats" variants={appear(1.1)}>
            <div>
              <dt className="sr-only">Prix</dt>
              <dd style={{ margin: 0 }}>
                <span className="stat__value">dès {entryPlan.price} €</span>
                <span className="stat__label">par mois</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Frais d’installation</dt>
              <dd style={{ margin: 0 }}>
                <span className="stat__value">{pricing.setupFee} €</span>
                <span className="stat__label">de mise en place</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Délai de mise en ligne</dt>
              <dd style={{ margin: 0 }}>
                <span className="stat__value">{pricing.launchDays} jours</span>
                <span className="stat__label">pour être en ligne</span>
              </dd>
            </div>
          </motion.dl>
        </div>

        <DevicesMock />
      </motion.div>
    </section>
  );
}
