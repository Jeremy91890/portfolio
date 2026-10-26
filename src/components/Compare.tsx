import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { Reveal, SectionHead } from './Reveal';
import { MONTHS, agencySavings, euros, options, sources } from '../data/market';

const max = Math.max(...options.map((o) => o.total));

/** Comparaison lisible d'un coup d'œil : une ligne par option, le coût sur 3 ans en barre et une seule phrase */
export default function Compare() {
  return (
    <section id="comparer" className="section" aria-labelledby="comparer-title">
      <div className="container">
        <SectionHead
          id="comparer-title"
          center
          eyebrow="Comparer"
          title={
            <>
              Tout est fait pour vous. <span className="accent">Sans frais de départ.</span>
            </>
          }
          lead={`Ce que coûte un site sur ${MONTHS / 12} ans, et ce qu’il vous reste à faire.`}
        />

        <Reveal className="versus">
          <ul>
            {options.map((o, i) => (
              <li key={o.id} className={`versus__row${o.mine ? ' is-mine' : ''}`}>
                <div className="versus__head">
                  <span className="versus__name">{o.name}</span>
                  <span className="versus__amount">
                    {o.prefix}
                    {euros(o.total)}
                    {o.suffix}
                  </span>
                </div>
                <span className="versus__track" aria-hidden="true">
                  <motion.span
                    className="versus__bar"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: o.total / max }}
                    viewport={{ once: true, margin: '0px 0px -10% 0px' }}
                    transition={{ duration: 1, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] }}
                  />
                </span>
                <p className="versus__tag">
                  {o.mine && <CheckCircle size={18} weight="fill" aria-hidden="true" />}
                  {o.tag}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="versus__takeaway">
          Face à une agence : <strong>{euros(agencySavings)} de plus en poche</strong>. De quoi s’offrir beaucoup de
          croissants.
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
