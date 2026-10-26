import { motion } from 'motion/react';
import { ArrowRight, CheckCircle, UserCircle } from '@phosphor-icons/react';
import { Reveal, SectionHead } from './Reveal';
import { MONTHS, agencySavings, duel, euros, sources } from '../data/market';

const ease = [0.22, 1, 0.36, 1] as const;

/** Face-à-face : même prix qu'un site à faire soi-même, mais c'est moi qui fais tout */
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

        <Reveal className="duel">
          <div className="duel__card">
            <h3 className="duel__name">{duel.diy.name}</h3>
            <p className="duel__price">{duel.diy.price}</p>
            <ul>
              {duel.diy.tasks.map((t) => (
                <li key={t}>
                  <UserCircle size={22} weight="fill" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <span className="duel__vs" aria-hidden="true">
            vs
          </span>

          <motion.div
            className="duel__card is-mine"
            initial={{ scale: 0.94 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.6, delay: 0.25, ease }}
          >
            <span className="duel__badge">Tout est fait pour vous</span>
            <h3 className="duel__name">{duel.mine.name}</h3>
            <p className="duel__price">{duel.mine.price}</p>
            <ul>
              {duel.mine.tasks.map((t) => (
                <li key={t}>
                  <CheckCircle size={22} weight="fill" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </Reveal>

        <p className="duel__elsewhere">
          Ailleurs, quand tout est fait pour vous : <strong>{duel.elsewhere}</strong>.
        </p>

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
