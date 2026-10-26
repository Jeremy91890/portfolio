import { useId, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Coins, Key, Sparkle, UserCircle } from '@phosphor-icons/react';
import { Reveal, SectionHead, Stagger, fadeUp } from './Reveal';
import Counter from './Counter';
import pricing from '../data/pricing';
import { agencySavings, criteria, euros, options, sources, threeYear } from '../data/market';

const advantages = [
  {
    icon: Sparkle,
    title: 'Vous n’avez rien à faire',
    text: 'Je rédige vos textes, je crée, j’héberge, je mets à jour.',
  },
  {
    icon: Coins,
    title: `${pricing.setupFee} € pour démarrer`,
    text: `Pas de frais de création, en ligne en ${pricing.launchDays} jours.`,
  },
  {
    icon: UserCircle,
    title: 'Une seule personne, de A à Z',
    text: 'Vous parlez au développeur qui fait votre site, en visio ou par SMS. Pas de standard, pas de ticket.',
  },
  {
    icon: Key,
    title: 'Vous restez libre',
    text: 'Votre nom de domaine et vos contenus vous appartiennent, et vous pouvez racheter votre site si vous partez.',
  },
];

const BADGE = 'Le plus simple';
const [mine, ...others] = options;
const max = Math.max(...threeYear.map((r) => r.total));

// Formule Essentiel ramenée à la journée (12 mois / 365 jours)
const essentiel = pricing.plans.find((p) => p.id === 'essentiel')!;
const perDay = ((essentiel.price * 12) / 365).toLocaleString('fr-FR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function Criteria({ values }: { values: string[] }) {
  return (
    <dl className="compare-card__list">
      {criteria.map((c, i) => (
        <div key={c}>
          <dt>{c}</dt>
          <dd>{values[i]}</dd>
        </div>
      ))}
    </dl>
  );
}

/** Combien de clients fidèles paient le site : valeurs par défaut 30 € × 6 visites, formule Pro */
function Payback() {
  const id = useId();
  const [basket, setBasket] = useState('30');
  const [visits, setVisits] = useState('6');
  const [planId, setPlanId] = useState(pricing.plans.find((p) => p.featured)!.id);

  const plan = pricing.plans.find((p) => p.id === planId)!;
  const perClient = Number(basket.replace(',', '.')) * Number(visits.replace(',', '.'));
  const yearly = plan.price * 12;
  const clients = perClient > 0 ? Math.ceil(yearly / perClient) : null;

  return (
    <Reveal className="panel payback">
      <h3 className="panel__title">Combien de clients pour payer votre site ?</h3>
      <div className="payback__fields">
        <label htmlFor={`${id}-basket`}>
          Panier moyen (€)
          <input
            id={`${id}-basket`}
            type="number"
            inputMode="decimal"
            min={1}
            value={basket}
            onChange={(e) => setBasket(e.target.value)}
          />
        </label>
        <label htmlFor={`${id}-visits`}>
          Visites par an d’un client fidèle
          <input
            id={`${id}-visits`}
            type="number"
            inputMode="numeric"
            min={1}
            value={visits}
            onChange={(e) => setVisits(e.target.value)}
          />
        </label>
        <label htmlFor={`${id}-plan`}>
          Formule
          <select id={`${id}-plan`} value={planId} onChange={(e) => setPlanId(e.target.value)}>
            {pricing.plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.price} €/mois)
              </option>
            ))}
          </select>
        </label>
      </div>
      <p className="payback__result" aria-live="polite">
        {clients === null ? (
          'Indiquez un panier moyen et un nombre de visites.'
        ) : (
          <>
            <strong>
              {clients} nouveau{clients > 1 ? 'x' : ''} client{clients > 1 ? 's' : ''} fidèle{clients > 1 ? 's' : ''}{' '}
              par an
            </strong>{' '}
            paient la formule {plan.name} ({euros(yearly)} par an).
          </>
        )}
      </p>
      <p className="method">
        Exemple indicatif, à adapter à votre commerce. {essentiel.name} : dès {perDay} € par jour.
      </p>
    </Reveal>
  );
}

export default function Compare() {
  return (
    <section id="comparer" className="section" aria-labelledby="comparer-title">
      <div className="container">
        <SectionHead
          id="comparer-title"
          eyebrow="Comparer"
          title={
            <>
              Tout est fait pour vous. <span className="accent">Sans frais de départ.</span>
            </>
          }
          lead="Comparez avec ce que vous auriez à faire, et à payer, ailleurs."
        />

        {/* A. Avantages */}
        <Stagger as="ul" className="advantages" step={0.08}>
          {advantages.map(({ icon: Icon, title, text }) => (
            <motion.li key={title} className="advantage" variants={fadeUp}>
              <Icon className="advantage__icon" size={28} weight="duotone" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
            </motion.li>
          ))}
        </Stagger>

        {/* B. Tableau comparatif (grand écran) */}
        <Reveal className="compare-table-wrap">
          <table className="compare-table">
            <caption className="sr-only">Nappage comparé aux autres façons d’avoir un site</caption>
            <thead>
              <tr>
                <td />
                {options.map((o) => (
                  <th key={o.id} scope="col" className={o.mine ? 'is-mine' : undefined}>
                    {o.mine && <span className="compare-badge">{BADGE}</span>}
                    {o.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((c, i) => (
                <tr key={c}>
                  <th scope="row">{c}</th>
                  {options.map((o) => (
                    <td key={o.id} className={o.mine ? 'is-mine' : undefined}>
                      {o.values[i]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* B. Mobile : Nappage en avant, les autres options repliées */}
        <div className="compare-cards">
          <article className="compare-card compare-card--mine" aria-labelledby="compare-mine">
            <span className="compare-badge">{BADGE}</span>
            <h3 id="compare-mine">{mine.name}</h3>
            <Criteria values={mine.values} />
          </article>
          {others.map((o) => (
            <details key={o.id} className="compare-card">
              <summary>{o.name}</summary>
              <Criteria values={o.values} />
            </details>
          ))}
        </div>

        <ol className="compare-sources">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                {s.label}
                <span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
          ))}
        </ol>

        <div className="market">
          {/* C. Coût sur 3 ans */}
          <Reveal className="panel">
            <h3 className="panel__title">Ce que coûte un site sur 3 ans</h3>
            <ul className="bars">
              {threeYear.map((row, i) => (
                <li key={row.label} className={`bar${row.mine ? ' bar--mine' : ''}`}>
                  <div className="bar__head">
                    <span className="bar__label">{row.label}</span>
                    <span className="bar__value">
                      {row.prefix}
                      <Counter to={row.total} suffix=" €" duration={1.4} />
                      {row.suffix}
                    </span>
                  </div>
                  {row.detail && <span className="bar__detail">{row.detail}</span>}
                  <div className="bar__track" aria-hidden="true">
                    <motion.div
                      className="bar__fill"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: row.total / max }}
                      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                      transition={{ duration: 1.2, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <p className="method">
              Face à une agence : {euros(agencySavings)} de plus en poche. De quoi s’offrir beaucoup de croissants.
            </p>
          </Reveal>

          {/* D. Rentabilité */}
          <Payback />
        </div>

        <div className="compare-cta">
          <a className="btn" href="#rappel">
            Je veux être rappelé
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
