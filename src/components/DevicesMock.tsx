import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type Variants,
} from 'motion/react';
import { ArrowUpRight, Check, Globe, HardDrives, LockSimple, Pause, Play, Star, Wrench } from '@phosphor-icons/react';
import realisations from '../data/realisations.json';

const ease = [0.22, 1, 0.36, 1] as const;
const ROTATION_MS = 4500;

type Real = { kind: 'real'; id: string; label: string; url: string; host: string; desktop: string; mobile: string };
type Demo = {
  kind: 'demo';
  id: string;
  label: string;
  brand: string;
  host: string;
  title: string;
  info: string;
  cta: string;
  reviews: string;
  accent: string;
};
type Example = Real | Demo;

// Sites réalisés (captures générées par `npm run realisations`), puis maquettes dessinées en HTML (étiquetées comme telles)
const examples: Example[] = [
  ...realisations.sites.map(
    (s): Real => ({
      kind: 'real',
      ...s,
      host: new URL(s.url).host,
      desktop: `/realisations/${s.id}-desktop.webp`,
      mobile: `/realisations/${s.id}-mobile.webp`,
    }),
  ),
  {
    kind: 'demo',
    id: 'boulangerie',
    label: 'Boulangerie',
    brand: 'Boulangerie Martin',
    host: 'boulangerie-martin.fr',
    title: 'Pain au levain, viennoiseries maison',
    info: 'Ouvert du mardi au dimanche · 7h – 19h30',
    cta: 'Commander en ligne',
    reviews: 'Vos avis Google',
    accent: '#f46a2e',
  },
];

const appear: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.5 } },
};

const chip = (i: number): Variants => ({
  hidden: { opacity: 0, scale: 0.6, y: 10 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 18, delay: 2.2 + i * 0.25 },
  },
});

const swap = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.35 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const accentOf = (ex: Demo) => ({ '--accent': ex.accent }) as CSSProperties;

function Stars() {
  return (
    <span className="mock__stars">
      {[0, 1, 2, 3, 4].map((k) => (
        <Star key={k} size={11} weight="fill" />
      ))}
    </span>
  );
}

function DesktopScreen({ ex }: { ex: Example }) {
  if (ex.kind === 'real') {
    return <motion.img src={ex.desktop} alt="" width={1280} height={800} {...swap} />;
  }
  return (
    <motion.div className="mock__body" style={accentOf(ex)} {...swap}>
      <div className="mock__nav">
        <span className="mock__brand">{ex.brand}</span>
        <span className="mock__links">
          <span />
          <span />
          <span />
        </span>
      </div>
      <div className="mock__hero">
        <strong>{ex.title}</strong>
        <small>{ex.info}</small>
        <span className="mock__book">{ex.cta}</span>
      </div>
      <div className="mock__cards">
        {[0, 1, 2].map((k) => (
          <div className="mock__card" key={k}>
            <i />
            <b />
            <b />
          </div>
        ))}
      </div>
      <div className="mock__reviews">
        <span>{ex.reviews}</span>
        <Stars />
      </div>
    </motion.div>
  );
}

function PhoneScreen({ ex }: { ex: Example }) {
  if (ex.kind === 'real') {
    return (
      <motion.div className="mini-phone__capture" style={{ '--shot': `url(${ex.mobile})` } as CSSProperties} {...swap}>
        <div className="mini-phone__shot">
          <img src={ex.mobile} alt="" width={585} height={1290} />
        </div>
      </motion.div>
    );
  }
  return (
    <motion.div className="mini-site" style={accentOf(ex)} {...swap}>
      <span className="mock__brand">{ex.brand}</span>
      <div className="mock__hero">
        <strong>{ex.title}</strong>
        <span className="mock__book">{ex.cta}</span>
      </div>
      <div className="mock__card">
        <i />
        <b />
        <b />
      </div>
      <div className="mock__reviews">
        <Stars />
      </div>
    </motion.div>
  );
}

export default function DevicesMock() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  // Choix explicite du visiteur ; sinon défilement auto, sauf si les animations sont réduites
  const [userPlaying, setUserPlaying] = useState<boolean | null>(null);
  const [hovering, setHovering] = useState(false);
  const playing = userPlaying ?? !reduce;

  useEffect(() => {
    if (!playing || !inView || hovering) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % examples.length), ROTATION_MS);
    return () => window.clearInterval(id);
  }, [playing, inView, hovering]);

  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 20 });

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse' || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ry.set(((e.clientX - r.left) / r.width - 0.5) * 8);
    rx.set(-((e.clientY - r.top) / r.height - 0.5) * 8);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
    setHovering(false);
  };

  const ex = examples[index];

  return (
    <motion.div className="devices-wrap" variants={appear}>
      <div
        ref={ref}
        className="devices"
        onPointerMove={onMove}
        onPointerEnter={(e) => e.pointerType === 'mouse' && setHovering(true)}
        onPointerLeave={onLeave}
        aria-hidden="true"
      >
        <motion.div className="devices__stage" style={{ rotateX, rotateY }}>
          <div className="mock">
            <div className="mock__bar">
              <div className="mock__dots">
                <span />
                <span />
                <span />
              </div>
              <div className="mock__url">
                <LockSimple size={12} weight="bold" />
                <span className="swap-stack">
                  <AnimatePresence initial={false}>
                    <motion.span key={ex.id} {...swap}>
                      {ex.host}
                    </motion.span>
                  </AnimatePresence>
                </span>
              </div>
            </div>
            <div className="swap-stack mock__screen">
              <AnimatePresence initial={false}>
                <DesktopScreen key={ex.id} ex={ex} />
              </AnimatePresence>
            </div>
          </div>

          <div className="mini-phone">
            <span className="mini-phone__island" />
            <div className="swap-stack mini-phone__screen">
              <AnimatePresence initial={false}>
                <PhoneScreen key={ex.id} ex={ex} />
              </AnimatePresence>
            </div>
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
      </div>

      <div className="devices__controls" role="group" aria-label="Exemples de sites">
        {examples.map((e, i) => (
          <button
            key={e.id}
            type="button"
            className="devices__tab"
            aria-pressed={i === index}
            onClick={() => setIndex(i)}
          >
            {e.label}
          </button>
        ))}
      </div>

      <div className="devices__caption">
        <button
          type="button"
          className="devices__pause"
          onClick={() => setUserPlaying(!playing)}
          aria-label={playing ? 'Mettre en pause le défilement des exemples' : 'Relancer le défilement des exemples'}
        >
          {playing ? <Pause size={14} weight="fill" /> : <Play size={14} weight="fill" />}
        </button>
        {/* Distingue les vrais sites (lien) des maquettes fictives */}
        {ex.kind === 'real' ? (
          <a href={ex.url} target="_blank" rel="noopener noreferrer">
            Site réalisé · voir le site
            <ArrowUpRight size={14} weight="bold" aria-hidden="true" />
            <span className="sr-only"> (nouvel onglet)</span>
          </a>
        ) : (
          <span>Exemple de maquette</span>
        )}
      </div>
    </motion.div>
  );
}
