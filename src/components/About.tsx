import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import {
  ArrowRight,
  ChatCircleText,
  DeviceMobile,
  Gauge,
  Handshake,
  HandWaving,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { Reveal, SectionHead, Stagger, fadeUp } from "./Reveal";
import Counter from "./Counter";
import NappageLogo from "./NappageLogo";
import { site } from "../data/site";
import { planPrice } from "../data/market";

// Points forts, en liste légère à côté de la photo
const strengths = [
  {
    icon: Handshake,
    title: "Un interlocuteur unique",
    text: "Vous parlez directement à la personne qui crée votre site.",
  },
  {
    icon: ChatCircleText,
    title: "Zéro jargon",
    text: "Chaque choix vous est expliqué avec des mots simples.",
  },
  {
    icon: DeviceMobile,
    title: "Pensé pour le mobile",
    text: "Parfait sur téléphone, là où vos clients vous cherchent.",
  },
  {
    icon: Gauge,
    title: "Rapide et visible",
    text: "Des pages qui s’affichent vite et remontent sur Google.",
  },
];

// Ce que rapporte un site, présenté comme un ticket de caisse. Chaque chiffre est repris tel quel de la source citée.
const gainSources = [
  {
    label: "Google, How Mobile Search Connects Consumers to Stores, 2016",
    url: "https://www.thinkwithgoogle.com/_qs/documents/620/mobile-search-trends-consumers-to-stores.pdf",
  },
  {
    label: "Baromètre France Num 2026 (DGE) : 52 % des indépendants ont un site",
    url: "https://www.francenum.gouv.fr/files/2026-09/Barom%C3%A8tre%20France%20Num%202026%20-%20Rapport%20final.pdf",
  },
  {
    label:
      "Verisign, 5 Reasons Every Small Business Needs a Website, enquête de septembre 2015 auprès de 456 petites entreprises américaines",
    url: "https://www.verisign.com/assets/ebook-5ReasonsSMBWebsite-Jan2016.pdf",
  },
];

// Formule Essentiel ramenée à la journée (12 mois / 365 jours)
const perDay = ((planPrice("essentiel") * 12) / 365).toLocaleString("fr-FR", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Libellé court sur une ligne (lu d'un coup d'œil), détail en petit dessous
type Gain = {
  label: string;
  detail: string;
  value?: string;
  count?: number;
  note?: number;
  highlight?: boolean;
};

const gains: Gain[] = [
  {
    label: "Vitrine ouverte",
    detail: "même quand votre boutique est fermée",
    value: "24 h/24",
  },
  {
    label: "Recherches locales",
    detail: "qui finissent par un achat",
    count: 28,
    note: 1,
    highlight: true,
  },
  {
    label: "Concurrents sans site",
    detail: "des indépendants n’en ont toujours pas",
    count: 48,
    note: 2,
    highlight: true,
  },
  {
    label: "Coût par jour",
    detail: "avec la formule Essentiel",
    value: `dès ${perDay} €`,
  },
];

function GainsTicket() {
  // On observe le ticket entier et non le papier : masqué par le clip-path de son parent, il ne serait jamais « visible »
  const ticketRef = useRef<HTMLDivElement>(null);
  const printed = useInView(ticketRef, {
    once: true,
    margin: "0px 0px -15% 0px",
  });

  return (
    <div className="gains on-dark">
      <Reveal className="gains__intro">
        <h3 className="gains__title">
          Un site ne coûte pas. <span className="accent">Il rapporte.</span>
        </h3>
        <p className="gains__lead">
          Il vend pour vous jour et nuit, et vous place devant les concurrents
          qui n’en ont pas.
        </p>
        <p className="gains__stat">
          <strong>
            <Counter to={77} suffix=" %" />
          </strong>
          <span>
            des petites entreprises jugent qu’un site est un excellent moyen de
            trouver de nouveaux clients
            <sup>
              <a href="#gain-source-3">
                3<span className="sr-only"> (voir la source)</span>
              </a>
            </sup>
            {/* Avis déclaré des entreprises, pas une mesure du chiffre d'affaires */}
            <small>Enquête Verisign auprès d’entreprises américaines, 2015.</small>
          </span>
        </p>
      </Reveal>

      <div className="ticket" ref={ticketRef}>
        <span className="ticket__slot" aria-hidden="true" />
        {/* Le ticket « sort » de la fente de la caisse au défilement */}
        <div className="ticket__clip">
          <motion.div
            className="ticket__paper"
            initial={{ y: "-100%" }}
            animate={printed ? { y: 0 } : undefined}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ticket__body">
              <p className="ticket__brand">
                <NappageLogo size={28} />
                {site.brand}
              </p>
              <p className="ticket__heading">
                Ce que votre site vous rapporte
              </p>

              <dl className="ticket__rows">
                {gains.map((g) => (
                  <div key={g.label} className="ticket__row">
                    <dt className="ticket__label">{g.label}</dt>
                    <dd
                      className={`ticket__value${g.highlight ? " ticket__value--hl" : ""}`}
                    >
                      {g.count !== undefined ? (
                        <Counter to={g.count} suffix=" %" />
                      ) : (
                        g.value
                      )}
                    </dd>
                    <dd className="ticket__detail">
                      {g.detail}
                      {g.note && (
                        <sup>
                          <a href={`#gain-source-${g.note}`}>
                            {g.note}
                            <span className="sr-only"> (voir la source)</span>
                          </a>
                        </sup>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>

              <p className="ticket__total">
                <span>Total</span>
                <strong>Rentabilisé dès 1 nouveau client par mois</strong>
              </p>
              <p className="ticket__thanks">Merci de votre visite !</p>
              <span className="ticket__barcode" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </div>

      <ol className="gains__sources">
        {gainSources.map((s, i) => (
          <li key={s.url} id={`gain-source-${i + 1}`}>
            <span aria-hidden="true">{i + 1}. </span>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Phrases affichées à tour de rôle quand on clique sur la main
type Hello = { text: string; link?: { href: string; label: string } };

const hellos: Hello[] = [
  { text: "Coucou ! Vous êtes arrivé jusqu’ici, on prend un café ?" },
  { text: "Oui, je suis aussi souriant au téléphone." },
  { text: "Psst… je vous recommande la formule Pro." },
  {
    text: "Vous cherchez le bouton devis ? Il est tout en bas de la page.",
    link: { href: "#contact", label: "Demander un devis" },
  },
  {
    text: "Mes formules vous attendent un peu plus bas.",
    link: { href: "#tarifs", label: "Voir les formules" },
  },
];
const HELLO_DURATION = 4500;
const HELLO_DURATION_LINK = 8000; // plus de temps quand la bulle contient un lien

function PhotoCard() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shapeY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [24, -24]);

  // Le dévoilement ne démarre qu'une fois l'image chargée ET visible.
  const imgRef = useRef<HTMLImageElement>(null);
  // On observe le conteneur et non le cadre : Chrome (≥ 132) tient compte du clip-path de l'élément observé,
  // un cadre masqué à 100 % n'est donc jamais « visible » et l'animation ne démarrerait jamais.
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [loaded, setLoaded] = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  const frameState = revealed ? "done" : inView && loaded ? "show" : "hidden";

  // Réaction au clic sur la main : la main s'agite, la photo rebondit, une bulle s'affiche
  const frameRef = useRef<HTMLDivElement>(null);
  const handRef = useRef<HTMLSpanElement>(null);
  const [hello, setHello] = useState<number | null>(null);
  const clicks = useRef(0);
  const hideTimer = useRef<number>();

  useEffect(() => () => window.clearTimeout(hideTimer.current), []);

  const scheduleHide = (index: number) => {
    window.clearTimeout(hideTimer.current);
    const delay = hellos[index].link ? HELLO_DURATION_LINK : HELLO_DURATION;
    hideTimer.current = window.setTimeout(() => setHello(null), delay);
  };
  // La bulle reste affichée tant qu'on la survole ou qu'elle a le focus (lien au clavier)
  const holdBubble = () => window.clearTimeout(hideTimer.current);
  const releaseBubble = () => hello !== null && scheduleHide(hello);

  const sayHello = () => {
    const index = clicks.current % hellos.length;
    setHello(index);
    clicks.current += 1;
    scheduleHide(index);

    if (reduce) return;
    if (handRef.current) {
      animate(
        handRef.current,
        { rotate: [0, 24, -12, 24, -8, 0] },
        { duration: 0.9, ease: "easeInOut" },
      );
    }
    if (frameRef.current) {
      animate(
        frameRef.current,
        { rotate: [0, -1.5, 1, 0], scale: [1, 1.03, 0.99, 1] },
        { duration: 0.6, ease: "easeOut" },
      );
    }
  };

  return (
    <div className="photo" ref={ref}>
      <motion.div
        className="photo__shape"
        style={{ y: shapeY }}
        aria-hidden="true"
      />
      <motion.div
        ref={frameRef}
        className="photo__frame"
        initial="hidden"
        animate={frameState}
        onAnimationComplete={(def) => def === "show" && setRevealed(true)}
        variants={{
          hidden: { clipPath: "inset(100% 0% 0% 0% round 28px)" },
          show: {
            clipPath: "inset(0% 0% 0% 0% round 28px)",
            transition: {
              duration: reduce ? 0 : 1.1,
              ease: [0.22, 1, 0.36, 1],
            },
          },
          // Une fois dévoilé, on retire le clip-path : Chrome ne garde plus de calque animé à repeindre
          done: { clipPath: "none", transition: { duration: 0 } },
        }}
      >
        <motion.picture
          variants={{
            hidden: { scale: 1.15 },
            show: {
              scale: 1,
              transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
            },
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
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.6 }}
      >
        <strong>10 ans</strong>
        <span>de développement en entreprise</span>
      </motion.p>
      <motion.button
        type="button"
        className="photo__wave"
        onClick={sayHello}
        aria-label={`Dire bonjour à ${site.firstName}`}
        initial={{ rotate: 0 }}
        whileInView={{ rotate: [0, 18, -8, 18, 0] }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 1.1 }}
      >
        <span ref={handRef} className="photo__wave-hand" aria-hidden="true">
          <HandWaving size={28} weight="duotone" />
        </span>
      </motion.button>

      <AnimatePresence>
        {hello !== null && (
          <motion.div
            key={hello}
            className="photo__bubble"
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{
              opacity: 0,
              scale: 0.85,
              y: 6,
              transition: { duration: 0.15 },
            }}
            transition={{ type: "spring", stiffness: 420, damping: 24 }}
            onPointerEnter={holdBubble}
            onPointerLeave={releaseBubble}
            onFocus={holdBubble}
            onBlur={releaseBubble}
          >
            {/* Le texte est annoncé par la zone role="status" ci-dessous : masqué ici pour ne pas le lire deux fois */}
            <p aria-hidden="true">{hellos[hello].text}</p>
            {hellos[hello].link && (
              <a
                className="photo__bubble-link"
                href={hellos[hello].link!.href}
                onClick={() => setHello(null)}
              >
                {hellos[hello].link!.label}
                <ArrowRight size={16} weight="bold" aria-hidden="true" />
              </a>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {/* Annonce pour les lecteurs d'écran (la bulle visuelle est masquée pour eux) */}
      <p className="sr-only" role="status">
        {hello !== null ? hellos[hello].text : ""}
      </p>
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
                Bonjour, moi c’est {site.firstName}.{" "}
                <span className="accent">10 ans de code</span> au service des
                commerçants.
              </>
            }
          />
          <Reveal className="about__text">
            <p>
              Depuis <strong>10 ans</strong>, je travaille comme{" "}
              <strong>développeur frontend et mobile en entreprise</strong>,
              expert <strong>React</strong> et <strong>React Native</strong>.
              J’y ai conçu des sites et des applications exigeants, pensés pour
              être rapides, fiables et agréables à utiliser.
            </p>
            <p>
              J’ai aussi été <strong>mentor chez OpenClassrooms</strong>, où
              j’ai accompagné des étudiants dans leur apprentissage du
              développement web. J’en garde le goût d’expliquer simplement les
              choses techniques, sans jargon.
            </p>
            <p>
              Aujourd’hui, je mets cette expertise au service des{" "}
              <strong>commerçants et indépendants</strong> : boulangers,
              coiffeurs, restaurateurs, artisans… Un site professionnel ne
              devrait pas coûter des milliers d’euros ni vous demander de
              devenir informaticien.
            </p>
            <p>
              Je vous accompagne dans{" "}
              <strong>toute votre digitalisation</strong>, du premier site
              jusqu’aux outils sur mesure adaptés à votre façon de travailler.
            </p>
          </Reveal>
          <Reveal className="about__actions" delay={0.1}>
            <a
              className="btn btn--ghost"
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinLogo
                size={20}
                weight="fill"
                color="#0A66C2"
                aria-hidden="true"
              />
              Voir mon parcours sur LinkedIn
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          </Reveal>

          <Stagger as="ul" className="strengths" step={0.08}>
            {strengths.map(({ icon: Icon, title, text }) => (
              <motion.li key={title} className="strength" variants={fadeUp}>
                <Icon
                  className="strength__icon"
                  size={24}
                  weight="duotone"
                  aria-hidden="true"
                />
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </motion.li>
            ))}
          </Stagger>
        </div>
      </div>

      <div className="container">
        <GainsTicket />
      </div>
    </section>
  );
}
