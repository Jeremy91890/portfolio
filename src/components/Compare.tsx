import { motion } from 'motion/react';
import { ArrowRight, CheckCircle } from '@phosphor-icons/react';
import { Reveal, SectionHead } from './Reveal';
import { MONTHS, agencySavings, euros, grid, sources, type Choice } from '../data/market';

function ChoiceCard({ choice }: { choice: Choice }) {
  return (
    <motion.li
      className={`quad__choice${choice.mine ? ' is-mine' : ''}`}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: choice.mine ? 0.3 : 0 }}
    >
      {choice.mine && <span className="quad__badge">Le seul ici</span>}
      <strong>
        {choice.mine && <CheckCircle size={20} weight="fill" aria-hidden="true" />}
        {choice.name}
      </strong>
      <span>{choice.price}</span>
    </motion.li>
  );
}

/** 2 × 2 : petit prix ou prix fort, fait pour vous ou à faire vous-même. Nappage est seul dans la bonne case. */
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
          lead="Le prix d’un site à faire soi-même, sans rien avoir à faire."
        />

        <Reveal className="quad">
          <table>
            <caption className="sr-only">Les façons d’avoir un site, selon le prix et qui fait le travail</caption>
            <thead>
              <tr>
                <td />
                {grid.columns.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {grid.rows.map((row, r) => (
                <tr key={row.label}>
                  <th scope="row">
                    <span>{row.label}</span>
                  </th>
                  {row.cells.map((cell, c) => (
                    <td key={c} className={r === 0 && c === 0 ? 'is-best' : undefined}>
                      {cell.length > 0 ? (
                        <ul>
                          {cell.map((choice) => (
                            <ChoiceCard key={choice.name} choice={choice} />
                          ))}
                        </ul>
                      ) : (
                        // Case « prix fort + à faire soi-même » : aucune offre ne s'y trouve, on le dit simplement
                        <p className="quad__empty">Aucune offre ne vous fait payer cher pour tout faire vous-même.</p>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <p className="versus__takeaway">
          Face à une agence : <strong>{euros(agencySavings)} de plus en poche</strong> sur {MONTHS / 12} ans, avec la
          formule Pro. De quoi s’offrir beaucoup de croissants.
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
