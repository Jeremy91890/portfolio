import { useId, useRef, useState, type CSSProperties, type KeyboardEvent } from 'react';
import { useInView } from 'motion/react';
import { ArrowRight, ArrowSquareOut, Clock, Storefront } from '@phosphor-icons/react';
import { Reveal, SectionHead } from './Reveal';
import Counter from './Counter';

// Chaque chiffre est repris tel quel de la source citée.
const stats = [
  {
    value: 76,
    tab: 'Vous cherchent',
    text: 'vous cherchent sur internet avant de pousser votre porte.',
    source: 'Shopfully, The State of Shopping 2025',
    url: 'https://www.ecommerce-nation.fr/etude-shopfully-2025-priorites-achat-francais/',
  },
  {
    value: 84,
    tab: 'Vous font confiance',
    text: 'font davantage confiance à un commerce qui a son propre site qu’à une simple page sur les réseaux.',
    source: 'Verisign, enquête consommateurs 2015',
    url: 'https://blog.verisign.com/getting-online/verisign-2015-online-survey-97-percent-of-smbs-would-recommend-having-a-website-to-other-smbs/',
  },
  {
    value: 54,
    tab: 'Visitent votre site',
    text: 'filent sur votre site après avoir lu de bons avis sur vous.',
    source: 'BrightLocal, Local Consumer Review Survey 2026',
    url: 'https://www.brightlocal.com/resources/local-seo-statistics/',
  },
  {
    value: 62,
    tab: 'Partent ailleurs',
    text: 'vont chez un concurrent si vos horaires ou votre adresse en ligne sont faux.',
    source: 'BrightLocal, Local Business Discovery & Trust 2023',
    url: 'https://www.brightlocal.com/resources/local-seo-statistics/',
    loss: true,
  },
];


export default function Why() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const crowd = useRef<HTMLDivElement>(null);
  // Les silhouettes ne s'allument qu'une fois visibles : le HTML pré-rendu reste identique à l'hydratation
  const inView = useInView(crowd, { once: true, margin: '0px 0px -15% 0px' });
  const uid = useId();
  const stat = stats[active];
  const filled = inView ? stat.value : 0;

  const onKey = (e: KeyboardEvent) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const next = (active + step + stats.length) % stats.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="pourquoi" className="section section--surface" aria-labelledby="pourquoi-title">
      <div className="container">
        <SectionHead
          id="pourquoi-title"
          eyebrow="Pourquoi un site ?"
          title={
            <>
              Vos clients vous cherchent en ligne. <span className="accent">Soyez là quand ils le font.</span>
            </>
          }
          lead="Imaginez 10 clients potentiels. Voici ce qu’ils font, d’après les études."
        />

        <Reveal className="crowd">
          <div className="crowd__tabs" role="tablist" aria-label="Ce que font vos clients potentiels" onKeyDown={onKey}>
            {stats.map((s, i) => (
              <button
                key={s.tab}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`${uid}-tab-${i}`}
                aria-selected={i === active}
                aria-controls={`${uid}-panel`}
                tabIndex={i === active ? 0 : -1}
                className={`crowd__tab${s.loss ? ' crowd__tab--loss' : ''}`}
                onClick={() => setActive(i)}
              >
                <span className="crowd__tab-value">
                  {s.value}
                  <small>%</small>
                </span>
                <span className="crowd__tab-label">{s.tab}</span>
              </button>
            ))}
          </div>

          <div
            className={`crowd__stage${stat.loss ? ' crowd__stage--loss' : ''}`}
            role="tabpanel"
            id={`${uid}-panel`}
            aria-labelledby={`${uid}-tab-${active}`}
          >
            <div ref={crowd} className="crowd__grid" aria-hidden="true">
              <svg width="0" height="0" className="crowd__defs">
                <symbol id={`${uid}-person`} viewBox="0 0 16 22">
                  <circle cx="8" cy="5" r="4.2" />
                  <path d="M0.8 22v-4.6C0.8 13.4 4 11 8 11s7.2 2.4 7.2 6.4V22z" />
                </symbol>
              </svg>
              {Array.from({ length: 10 }, (_, i) => (
                // Une silhouette = 10 % ; la dernière se remplit en partie (76 % → 7,6 silhouettes)
                <span
                  key={i}
                  className="crowd__person"
                  style={
                    {
                      '--f': Math.min(1, Math.max(0, filled / 10 - i)),
                      transitionDelay: `${i * 50}ms`,
                    } as CSSProperties
                  }
                >
                  <svg className="crowd__person-base">
                    <use href={`#${uid}-person`} />
                  </svg>
                  <svg className="crowd__person-fill">
                    <use href={`#${uid}-person`} />
                  </svg>
                </span>
              ))}
            </div>

            <p className="crowd__caption" aria-live="polite">
              <strong>{stat.value} % des clients</strong>{' '}
              {stat.text}
            </p>
            <a className="why__source" href={stat.url} target="_blank" rel="noopener noreferrer">
              {stat.source}
              <ArrowSquareOut size={14} aria-hidden="true" />
              <span className="sr-only">(nouvel onglet)</span>
            </a>
          </div>
        </Reveal>

        <Gains />
      </div>
    </section>
  );
}

// Hypothèse affichée : un client de plus par semaine, panier moyen de 30 €
const BASKET = 30;

function Gains() {
  return (
    <div className="gains">
      <Reveal className="gains__calc">
        <h3 className="gains__title">Ce que votre site peut vous rapporter</h3>
        <p className="gains__amount">
          +<Counter to={BASKET * 52} suffix=" €" />
          <small>/an</small>
        </p>
        <p className="gains__sub">
          de chiffre d’affaires avec un seul nouveau client par semaine, pour un panier moyen de {BASKET}&nbsp;€.
        </p>
        <a
          className="why__source"
          href="https://www.francenum.gouv.fr/magazine-du-numerique/presence-en-ligne-des-tpe-pme-une-progression-qui-marque-legerement-le-pas"
          target="_blank"
          rel="noopener noreferrer"
        >
          1 petite entreprise sur 4 réalise plus de 30&nbsp;% de son CA grâce au web (Afnic 2025)
          <ArrowSquareOut size={14} aria-hidden="true" />
          <span className="sr-only">(nouvel onglet)</span>
        </a>
      </Reveal>

      <ul className="gains__facts">
        <Reveal as="li" className="gains__fact" delay={0.08}>
          <Clock size={28} weight="duotone" aria-hidden="true" />
          <p className="gains__fact-value">
            <Counter to={168} suffix=" h" />
          </p>
          <p>d’ouverture par semaine. Votre site renseigne vos clients même le dimanche à minuit.</p>
        </Reveal>
        <Reveal as="li" className="gains__fact" delay={0.16}>
          <Storefront size={28} weight="duotone" aria-hidden="true" />
          <p className="gains__fact-value">
            <Counter to={60} suffix=" %" />
          </p>
          <p>des petites entreprises n’ont pas de vrai site. Le vôtre vous fait sortir du lot.</p>
          <a
            className="why__source"
            href="https://www.brightlocal.com/research/smb-marketing-2025/"
            target="_blank"
            rel="noopener noreferrer"
          >
            BrightLocal, SMB Marketing Report 2025
            <ArrowSquareOut size={14} aria-hidden="true" />
            <span className="sr-only">(nouvel onglet)</span>
          </a>
        </Reveal>
        <li className="gains__cta">
          <a className="btn" href="#tarifs">
            Voir les formules
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  );
}
