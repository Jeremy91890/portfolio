import type { CSSProperties } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, MinusCircle, XCircle } from '@phosphor-icons/react';
import { Reveal, SectionHead } from './Reveal';
import pricing from '../data/pricing';
import { MONTHS, agencySavings, euros, options, rows, sources, type Mark } from '../data/market';

const max = Math.max(...options.map((o) => o.total));

// Formule Essentiel ramenée à la journée (12 mois / 365 jours)
const essentiel = pricing.plans.find((p) => p.id === 'essentiel')!;
const perDay = ((essentiel.price * 12) / 365).toLocaleString('fr-FR', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const marks: Record<Mark, { Icon: typeof CheckCircle; label: string }> = {
  yes: { Icon: CheckCircle, label: 'Oui' },
  partial: { Icon: MinusCircle, label: 'Selon la formule ou en supplément' },
  no: { Icon: XCircle, label: 'Non, à votre charge' },
};

function MarkIcon({ mark }: { mark: Mark }) {
  const { Icon, label } = marks[mark];
  return (
    <>
      <Icon className={`mark mark--${mark}`} size={26} weight="fill" aria-hidden="true" />
      <span className="sr-only">{label}</span>
    </>
  );
}

/** Un seul tableau, lisible d'un coup d'œil : le coût sur 3 ans en barres, puis des pictos oui / en partie / non */
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

        <Reveal className="versus-wrap">
          <table className="versus">
            <caption className="sr-only">Nappage comparé aux autres façons d’avoir un site</caption>
            <thead>
              <tr>
                <td />
                {options.map((o) => (
                  <th key={o.id} scope="col" className={o.mine ? 'is-mine' : undefined}>
                    {o.mine && <span className="versus__badge">Le plus simple</span>}
                    {o.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="versus__cost">
                <th scope="row">Coût sur {MONTHS / 12} ans</th>
                {options.map((o, i) => (
                  <td key={o.id} className={o.mine ? 'is-mine' : undefined}>
                    {/* Montant posé sur sa barre, comme un histogramme */}
                    <span className="versus__stack">
                      <span className="versus__amount">
                        {o.prefix && <small>{o.prefix}</small>}
                        {euros(o.total)}
                      </span>
                      {o.note && <small className="versus__note">{o.note}</small>}
                      <motion.span
                        className="versus__bar"
                        aria-hidden="true"
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                        transition={{ duration: 1, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
                        style={{ '--ratio': o.total / max } as CSSProperties}
                      />
                    </span>
                  </td>
                ))}
              </tr>
              {rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {r.marks.map((m, i) => (
                    <td key={options[i].id} className={options[i].mine ? 'is-mine' : undefined}>
                      <MarkIcon mark={m} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p className="versus__legend" aria-hidden="true">
            <span>
              <MarkIcon mark="yes" /> Fait pour vous
            </span>
            <span>
              <MarkIcon mark="partial" /> Selon la formule ou en supplément
            </span>
            <span>
              <MarkIcon mark="no" /> À votre charge
            </span>
          </p>
        </Reveal>

        <p className="versus__takeaway">
          Face à une agence : <strong>{euros(agencySavings)} de plus en poche</strong> sur {MONTHS / 12} ans. De quoi
          s’offrir beaucoup de croissants. Et la formule {essentiel.name} revient à {perDay} € par jour.
        </p>

        <div className="compare-cta">
          <a className="btn" href="#rappel">
            Je veux être rappelé
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
        </div>

        <details className="versus__sources">
          <summary>Sources des chiffres</summary>
          <ol>
            {sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noopener noreferrer">
                  {s.label}
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ol>
        </details>
      </div>
    </section>
  );
}
