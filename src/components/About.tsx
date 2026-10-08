import { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react';
import {
  Atom,
  DeviceMobile,
  Gauge,
  GraduationCap,
  Handshake,
  HandWaving,
  LinkedinLogo,
  MagicWand,
  MapPin,
  Sparkle,
} from '@phosphor-icons/react';
import { Reveal, SectionHead, Stagger, fadeUp } from './Reveal';
import { site } from '../data/site';

const skills = [
  {
    icon: Atom,
    title: 'React & React Native',
    text: 'Mon terrain de jeu depuis des années : des interfaces rapides, solides et faciles à faire évoluer.',
    tags: ['React', 'Next.js', 'TypeScript', 'React Native'],
    wide: true,
    dark: true,
  },
  {
    icon: Handshake,
    title: 'Un interlocuteur unique',
    text: 'Pas de jargon ni d’intermédiaire : vous parlez directement à la personne qui crée votre site.',
  },
  {
    icon: DeviceMobile,
    title: 'Web & mobile',
    text: 'Votre site est parfait sur téléphone, là où vos clients vous cherchent. Applications iOS et Android possibles.',
  },
  {
    icon: Gauge,
    title: 'Performance & référencement',
    text: 'Des pages qui s’affichent vite et qui remontent sur Google et Google Maps, dans votre quartier.',
  },
  {
    icon: MagicWand,
    title: 'IA & automatisation',
    text: 'Chatbot, prise de rendez-vous, relances : l’IA au service de votre quotidien, pas l’inverse.',
  },
];

function PhotoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const shapeY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  // Le dévoilement ne démarre qu'une fois l'image chargée ET visible.
  const imgRef = useRef<HTMLImageElement>(null);
  // On observe le conteneur et non le cadre : Chrome (≥ 132) tient compte du clip-path de l'élément observé,
  // un cadre masqué à 100 % n'est donc jamais « visible » et l'animation ne démarrerait jamais.
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  const frameState = revealed ? 'done' : inView && loaded ? 'show' : 'hidden';

  return (
    <div className="photo" ref={ref}>
      <motion.div className="photo__shape" style={{ y: shapeY }} aria-hidden="true" />
      <motion.div
        className="photo__frame"
        initial="hidden"
        animate={frameState}
        onAnimationComplete={(def) => def === 'show' && setRevealed(true)}
        variants={{
          hidden: { clipPath: 'inset(100% 0% 0% 0% round 28px)' },
          show: {
            clipPath: 'inset(0% 0% 0% 0% round 28px)',
            transition: { duration: reduce ? 0 : 1.1, ease: [0.22, 1, 0.36, 1] },
          },
          // Une fois dévoilé, on retire le clip-path : Chrome ne garde plus de calque animé à repeindre
          done: { clipPath: 'none', transition: { duration: 0 } },
        }}
      >
        <motion.picture
          variants={{
            hidden: { scale: 1.15 },
            show: { scale: 1, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } },
            done: { scale: 1 },
          }}
        >
          <source srcSet={site.photo.webp} type="image/webp" />
          {/* Pas de loading="lazy" ni de décodage asynchrone : le dévoilement attend que l'image soit prête */}
          <img
            ref={imgRef}
            src={site.photo.jpg}
            alt={site.photo.alt}
            width={720}
            height={720}
            onLoad={() => setLoaded(true)}
            onError={() => setLoaded(true)}
          />
        </motion.picture>
      </motion.div>

      <motion.p
        className="photo__badge photo__badge--xp"
        style={{ y: badgeY }}
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.6 }}
      >
        <strong>10 ans</strong>
        <span>de développement en entreprise</span>
      </motion.p>
      <motion.p
        className="photo__badge photo__badge--place"
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.8 }}
      >
        <MapPin size={18} weight="fill" aria-hidden="true" />
        {site.city}
      </motion.p>
      <motion.span
        className="photo__wave"
        aria-hidden="true"
        initial={{ rotate: 0 }}
        whileInView={{ rotate: [0, 18, -8, 18, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.1 }}
      >
        <HandWaving size={28} weight="duotone" />
      </motion.span>
    </div>
  );
}

export default function About() {
  return (
    <section id="a-propos" className="section" aria-labelledby="a-propos-title">
      <div className="container about">
        <div className="about__media">
          <PhotoCard />
        </div>

        <div className="about__content">
          <SectionHead
            id="a-propos-title"
            eyebrow="En quelques mots"
            title={
              <>
                Bonjour, moi c’est {site.firstName}. <span className="accent">10 ans de code</span> au service des
                commerçants.
              </>
            }
          />
          <Reveal className="about__text">
            <p>
              Depuis <strong>10 ans</strong>, je travaille comme <strong>développeur frontend et mobile en
              entreprise</strong>, expert <strong>React</strong> et <strong>React Native</strong>. J’y ai conçu des
              sites et des applications exigeants, pensés pour être rapides, fiables et agréables à utiliser.
            </p>
            <p>
              J’ai aussi été <strong>mentor chez OpenClassrooms</strong>, où j’ai accompagné des étudiants dans leur
              apprentissage du développement web. J’en garde le goût d’expliquer simplement les choses techniques,
              sans jargon.
            </p>
            <p>
              Aujourd’hui, je mets cette expertise au service des <strong>commerçants et indépendants</strong> :
              boulangers, coiffeurs, restaurateurs, artisans… Un site professionnel ne devrait pas coûter des milliers
              d’euros ni vous demander de devenir informaticien.
            </p>
            <p>
              Basé à <strong>{site.city}</strong>, je vous accompagne dans <strong>toute votre digitalisation</strong>,
              du premier site jusqu’aux outils sur mesure adaptés à votre façon de travailler.
            </p>
          </Reveal>
          <Reveal className="about__actions" delay={0.1}>
            <a className="btn btn--ghost" href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedinLogo size={20} weight="fill" color="#0A66C2" aria-hidden="true" />
              Voir mon parcours sur LinkedIn
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          </Reveal>

        <Stagger className="bento" step={0.1}>
          {skills.map(({ icon: Icon, title, text, tags, wide, dark }) => (
            <motion.article
              key={title}
              className={`card${dark ? ' card--dark on-dark' : ''}${wide ? ' bento__item--wide' : ''}`}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              {dark && <span className="card__glow" aria-hidden="true" />}
              <span className="card__icon" aria-hidden="true">
                <Icon size={26} weight="duotone" />
              </span>
              <h3>{title}</h3>
              <p>{text}</p>
              {tags && (
                <ul className="tags" aria-label="Technologies">
                  {tags.map((t) => (
                    <li className="tag" key={t}>
                      {t}
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
          <motion.article className="card" variants={fadeUp} whileHover={{ y: -6 }}>
            <span className="card__icon" aria-hidden="true">
              <GraduationCap size={26} weight="duotone" />
            </span>
            <h3>Mentor OpenClassrooms</h3>
            <p>J’ai accompagné des étudiants dans leur apprentissage du développement web.</p>
          </motion.article>
          <motion.article className="card" variants={fadeUp} whileHover={{ y: -6 }}>
            <span className="card__icon" aria-hidden="true">
              <Sparkle size={26} weight="duotone" />
            </span>
            <h3>Design & animations</h3>
            <p>Des interfaces modernes et vivantes, comme ce site, sans sacrifier la vitesse.</p>
          </motion.article>
        </Stagger>
        </div>
      </div>
    </section>
  );
}
