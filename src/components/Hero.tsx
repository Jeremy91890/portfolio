import { Fragment, useRef, type PointerEvent } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform, type Variants } from 'motion/react';
import { ArrowRight, Check, Globe, HardDrives, LockSimple, Star, Wrench } from '@phosphor-icons/react';
import Counter from './Counter';
import { site } from '../data/site';

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

function BrowserMock() {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 20 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 10);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 10);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  // Le site « se construit » bloc par bloc
  const block = (i: number): Variants => ({
    hidden: { opacity: 0, y: 16, scale: 0.97 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease, delay: 1.3 + i * 0.22 } },
  });
  const chip = (i: number): Variants => ({
    hidden: { opacity: 0, scale: 0.6, y: 10 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 260, damping: 18, delay: 2.6 + i * 0.25 },
    },
  });

  return (
    <motion.div
      ref={ref}
      className="mock-wrap"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      variants={appear(0.5)}
      aria-hidden="true"
    >
      <motion.div className="mock" style={{ rotateX, rotateY }}>
        <div className="mock__bar">
          <div className="mock__dots">
            <span />
            <span />
            <span />
          </div>
          <div className="mock__url">
            <LockSimple size={12} weight="bold" />
            <motion.span
              initial={{ clipPath: 'inset(0 100% 0 0)' }}
              animate={{ clipPath: 'inset(0 0% 0 0)' }}
              transition={{ duration: 0.9, delay: 0.9, ease: 'linear' }}
            >
              boulangerie-martin.fr
            </motion.span>
            <span className="mock__caret" />
          </div>
        </div>
        <div className="mock__body">
          <motion.div className="mock__nav" variants={block(0)}>
            <span className="mock__brand">Boulangerie Martin</span>
            <span className="mock__links">
              <span />
              <span />
              <span />
            </span>
          </motion.div>
          <motion.div className="mock__hero" variants={block(1)}>
            <strong>Pain au levain, viennoiseries maison</strong>
            <small>Ouvert du mardi au dimanche · 7h – 19h30</small>
            <span className="mock__book">Commander en ligne</span>
          </motion.div>
          <motion.div className="mock__cards" variants={block(2)}>
            {[0, 1, 2].map((k) => (
              <div className="mock__card" key={k}>
                <i />
                <b />
                <b />
              </div>
            ))}
          </motion.div>
          <motion.div className="mock__reviews" variants={block(3)}>
            <span>Livre d’or · 128 avis</span>
            <span className="mock__stars">
              {[0, 1, 2, 3, 4].map((k) => (
                <Star key={k} size={12} weight="fill" />
              ))}
            </span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="chip chip--1" variants={chip(0)}>
        <span className="chip__icon">
          <Globe size={16} weight="bold" />
        </span>
        Nom de domaine
        <Check size={14} weight="bold" color="#16a34a" />
      </motion.div>
      <motion.div className="chip chip--2" variants={chip(1)}>
        <span className="chip__icon">
          <HardDrives size={16} weight="bold" />
        </span>
        Hébergement
        <Check size={14} weight="bold" color="#16a34a" />
      </motion.div>
      <motion.div className="chip chip--3" variants={chip(2)}>
        <span className="chip__icon">
          <Wrench size={16} weight="bold" />
        </span>
        Mises à jour
        <Check size={14} weight="bold" color="#16a34a" />
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const blobY1 = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const blobY2 = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);

  return (
    <section ref={ref} id="top" className="hero on-dark" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <motion.div className="hero__blob hero__blob--orange" style={{ y: blobY1 }} aria-hidden="true" />
      <motion.div className="hero__blob hero__blob--blue" style={{ y: blobY2 }} aria-hidden="true" />

      <motion.div className="container hero__inner" initial="hidden" animate="show" style={{ y: contentY }}>
        <div>
          <motion.p className="status-pill" variants={appear(0)}>
            <span className="status-pill__avatar" aria-hidden="true">
              <img src={site.photo.thumb} alt="" width={32} height={32} />
              <span className="status-pill__dot" />
            </span>
            {site.name} · Développeur frontend & mobile depuis 10 ans
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
            Expert <strong>React</strong> et <strong>React Native</strong>,
            je crée, héberge et fais vivre le site de votre commerce. Vous n’avez rien de technique à gérer, et ça vous
            coûte <strong>beaucoup moins cher que le marché</strong>.
          </motion.p>

          <motion.div className="hero__ctas" variants={appear(0.95)}>
            <a className="btn" href="#tarifs">
              Voir les formules
              <ArrowRight size={18} weight="bold" aria-hidden="true" />
            </a>
            <a className="btn btn--ghost" href="#contact">
              Parler de mon projet
            </a>
          </motion.div>

          <motion.dl className="hero__stats" variants={appear(1.1)}>
            <div>
              <dt className="sr-only">Expérience</dt>
              <dd style={{ margin: 0 }}>
                <span className="stat__value">
                  <Counter to={10} suffix=" ans" />
                </span>
                <span className="stat__label">d’expérience</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Prix</dt>
              <dd style={{ margin: 0 }}>
                <span className="stat__value">
                  <Counter to={29} suffix=" €" />
                </span>
                <span className="stat__label">par mois, dès</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Frais d’installation</dt>
              <dd style={{ margin: 0 }}>
                <span className="stat__value">0 €</span>
                <span className="stat__label">de mise en place</span>
              </dd>
            </div>
            <div>
              <dt className="sr-only">Engagement</dt>
              <dd style={{ margin: 0 }}>
                <span className="stat__value">0 mois</span>
                <span className="stat__label">d’engagement</span>
              </dd>
            </div>
          </motion.dl>
        </div>

        <BrowserMock />
      </motion.div>
    </section>
  );
}
