import { motion } from 'motion/react';
import { Gift, Info } from '@phosphor-icons/react';
import pricing from '../data/pricing.json';
import { Reveal, Stagger, fadeUp } from './Reveal';
import { mailto, site } from '../data/site';

type Cell = { text?: string; included?: boolean; detail?: string } | null;
type PlanId = 'essentiel' | 'pro' | 'premium';
type Feature = { label: string; isNew?: boolean } & Record<PlanId, Cell>;

const { header, plans, launchOffer, oneTimePurchase: once, footnote } = pricing;
const features = pricing.features as Feature[];

function CellContent({ cell }: { cell: Cell }) {
  if (!cell) {
    return (
      <>
        <span className="dash" aria-hidden="true">
          —
        </span>
        <span className="sr-only">Non inclus</span>
      </>
    );
  }
  if (cell.included) {
    return (
      <>
        <span className="included">Inclus</span>
        {cell.detail && <span className="included-detail">{cell.detail}</span>}
      </>
    );
  }
  return <>{cell.text}</>;
}

function NewTag() {
  return <span className="new-tag">NOUVEAU</span>;
}

function PlanHeader({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <>
      <span className="plan-name">{plan.name}</span>
      <span className="plan-price">
        {plan.price}
        <small>{plan.period}</small>
      </span>
      <span className="plan-tagline">{plan.tagline}</span>
    </>
  );
}

function PlanCta({ plan }: { plan: (typeof plans)[number] }) {
  return (
    <a
      className={`plan-cta${plan.featured ? ' plan-cta--featured' : ''}`}
      href={mailto(`Formule ${plan.name} – demande d’informations`)}
    >
      Choisir {plan.name}
    </a>
  );
}

export default function Pricing() {
  // Sur mobile, l'offre mise en avant passe en premier
  const mobilePlans = [...plans].sort((a, b) => Number(b.featured) - Number(a.featured));

  return (
    <section id="tarifs" className="section section--surface" aria-labelledby="tarifs-title">
      <div className="container">
        <Reveal className="pricing-head on-dark">
          <div>
            <p className="eyebrow">{header.eyebrow}</p>
            <h2 id="tarifs-title">{header.title}</h2>
            <p>{header.subtitle}</p>
          </div>
          <ul className="badges">
            {header.badges.map((b, i) => (
              <motion.li
                key={b.label}
                className="badge"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.3 + i * 0.12 }}
              >
                <strong>{b.value}</strong>
                <span>{b.label}</span>
              </motion.li>
            ))}
          </ul>
        </Reveal>

        {/* Grand écran : tableau comparatif */}
        <div className="pricing-table-wrap">
          <table className="pricing-table">
            <caption className="sr-only">Comparatif des formules Essentiel, Pro et Premium</caption>
            <thead>
              <tr>
                <td />
                {plans.map((plan) => (
                  <th key={plan.id} scope="col" className={plan.featured ? 'col-pro' : undefined}>
                    {plan.ribbon && <span className="ribbon">{plan.ribbon}</span>}
                    <PlanHeader plan={plan} />
                    <span style={{ display: 'block', marginTop: 16 }}>
                      <PlanCta plan={plan} />
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <motion.tbody initial="hidden" whileInView="show" viewport={{ once: true, margin: '0px 0px -10% 0px' }} variants={{ show: { transition: { staggerChildren: 0.05 } } }}>
              {features.map((f) => (
                <motion.tr
                  key={f.label}
                  variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                >
                  <th scope="row">
                    {f.label}
                    {f.isNew && <NewTag />}
                  </th>
                  {plans.map((plan) => (
                    <td key={plan.id} className={plan.featured ? 'col-pro' : undefined}>
                      <CellContent cell={f[plan.id as PlanId]} />
                    </td>
                  ))}
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>

        {/* Mobile : une carte par offre */}
        <Stagger className="plan-cards" step={0.12}>
          {mobilePlans.map((plan) => (
            <motion.article
              key={plan.id}
              className={`plan-card${plan.featured ? ' plan-card--featured' : ''}`}
              variants={fadeUp}
              aria-labelledby={`plan-${plan.id}`}
            >
              {plan.ribbon && <span className="ribbon">{plan.ribbon}</span>}
              <h3 id={`plan-${plan.id}`} className="sr-only">
                Formule {plan.name}
              </h3>
              <PlanHeader plan={plan} />
              <dl>
                {features
                  .filter((f) => f[plan.id as PlanId] !== null)
                  .map((f) => (
                    <div key={f.label}>
                      <dt>
                        {f.label}
                        {f.isNew && <NewTag />}
                      </dt>
                      <dd>
                        <CellContent cell={f[plan.id as PlanId]} />
                      </dd>
                    </div>
                  ))}
              </dl>
              <PlanCta plan={plan} />
            </motion.article>
          ))}
        </Stagger>

        <div className="extras">
          <Reveal className="extra extra--launch">
            <p className="extra__eyebrow">{launchOffer.eyebrow}</p>
            <h3>
              <Gift size={28} weight="duotone" aria-hidden="true" style={{ display: 'inline', verticalAlign: '-4px', marginRight: 8 }} />
              {launchOffer.title}
            </h3>
            <p>{launchOffer.text}</p>
          </Reveal>
          <Reveal className="extra extra--once" delay={0.1}>
            <p className="extra__eyebrow">{once.eyebrow}</p>
            <p className="extra__price">
              <strong>{once.price} €</strong>
              <span>
                pour le site, puis {once.hostingPerMonth} €/mois pour l’hébergement et le nom de domaine.
              </span>
            </p>
            <ul className="extra__details">
              <li>Garantie bugs {once.bugWarrantyMonths} mois</li>
              <li>Back-office +{once.backofficePerMonth} €/mois</li>
              <li>Modification {once.modificationUnitPrice} € l’unité</li>
              <li>Support {once.support.charAt(0).toLowerCase() + once.support.slice(1)}</li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="pricing-note">
          <Info size={22} weight="bold" aria-hidden="true" />
          <p>
            <strong>Ces formules sont indicatives.</strong> Un besoin particulier (outil métier, IA, application
            mobile…) ? Je vous propose un devis sur mesure, en dehors des formules.
          </p>
        </Reveal>

        <div className="pricing-foot">
          <p>{footnote}</p>
          <p className="pricing-foot__contact">
            {site.name} · {site.phone} · {site.email}
          </p>
        </div>
      </div>
    </section>
  );
}
