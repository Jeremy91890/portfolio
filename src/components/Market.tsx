import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowSquareOut, Copy, Check, PiggyBank, Sparkle } from '@phosphor-icons/react';
import { Reveal, SectionHead, Stagger, fadeUp } from './Reveal';
import Counter from './Counter';
import { aiPrompt, sources, threeYearComparison } from '../data/market';

const max = Math.max(...threeYearComparison.map((r) => r.total));
const agency = threeYearComparison[0].total;
const mine = threeYearComparison.find((r) => r.mine)!.total;
const euros = (n: number) => `${n.toLocaleString('fr-FR')} €`;

const aiLinks = [
  { label: 'ChatGPT', href: `https://chatgpt.com/?q=${encodeURIComponent(aiPrompt)}` },
  { label: 'Claude', href: `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}` },
  { label: 'Perplexity', href: `https://www.perplexity.ai/search?q=${encodeURIComponent(aiPrompt)}` },
];

function CopyPrompt() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(aiPrompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };
  return (
    <>
      <button type="button" className="copy-btn" onClick={copy}>
        {copied ? <Check size={18} weight="bold" aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
        {copied ? 'Copié' : 'Copier la question'}
      </button>
      <span className="sr-only" role="status">
        {copied ? 'Question copiée dans le presse-papiers' : ''}
      </span>
    </>
  );
}

export default function Market() {
  return (
    <section id="prix-du-marche" className="section" aria-labelledby="marche-title">
      <div className="container">
        <SectionHead
          id="marche-title"
          eyebrow="Prix du marché"
          title={
            <>
              Beaucoup moins cher que le marché, <span className="accent">sans rogner sur la qualité.</span>
            </>
          }
          lead="Un site vitrine coûte en moyenne plusieurs milliers d’euros, auxquels s’ajoutent la maintenance, l’hébergement et le nom de domaine. Ne me croyez pas sur parole : voici ce qu’en disent les guides de prix publiés en 2026."
        />

        <div className="market">
          <Reveal className="panel">
            <h3 className="panel__title">Ce que coûte un site vitrine sur 3 ans</h3>
            <p className="panel__sub">Création + suivi pendant 36 mois, en prenant le bas des fourchettes publiées.</p>

            <ul className="bars">
              {threeYearComparison.map((row, i) => (
                <li key={row.label} className={`bar${row.mine ? ' bar--mine' : ''}`}>
                  <div className="bar__head">
                    <span className="bar__label">{row.label}</span>
                    <span className="bar__value">
                      <Counter to={row.total} suffix=" €" duration={1.4} />
                    </span>
                  </div>
                  <span className="bar__detail">{row.detail}</span>
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

            <div className="savings">
              <PiggyBank size={36} weight="duotone" color="var(--orange-text)" aria-hidden="true" />
              <p>
                <strong>
                  <Counter to={agency - mine} suffix=" € économisés" />
                </strong>
                <span>
                  par rapport à une agence, soit environ {Math.round(agency / mine)} fois moins cher. Même la formule
                  Pro ({euros(49 * 36)} sur 3 ans) reste {Math.round(agency / (49 * 36))} fois moins chère. De quoi
                  changer de caisse enregistreuse… ou s’offrir beaucoup de croissants.
                </span>
              </p>
            </div>
            <p className="method">
              Calcul : création et maintenance minimales citées par Fenxi (agence 2 000 €, freelance 800 €) et Kolonell
              (maintenance 150 €/mois en agence, 80 €/mois en freelance). Hors hébergement et nom de domaine,
              souvent facturés en plus (Hellopro).
            </p>
          </Reveal>

          <Stagger className="sources" step={0.12}>
            {sources.map((s) => (
              <motion.a
                key={s.publisher}
                className="source"
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <span className="source__head">
                  <span className="source__pub">{s.publisher}</span>
                  <span className="source__date">{s.date}</span>
                </span>
                <blockquote>« {s.quote} »</blockquote>
                <span className="source__title">
                  {s.title}
                  <ArrowSquareOut size={14} aria-hidden="true" />
                  <span className="sr-only">(nouvel onglet)</span>
                </span>
              </motion.a>
            ))}
          </Stagger>
        </div>

        <Reveal className="ai-box on-dark">
          <h3>
            <Sparkle size={26} weight="fill" color="var(--orange)" aria-hidden="true" />
            Faites le test : demandez à une IA
          </h3>
          <p>
            Posez la question à l’assistant de votre choix et comparez sa réponse avec mes tarifs : dès 29 €/mois,
            hébergement, nom de domaine et suivi compris.
          </p>
          <div className="prompt">
            <span>{aiPrompt}</span>
            <CopyPrompt />
          </div>
          <ul className="ai-links">
            {aiLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} target="_blank" rel="noopener noreferrer">
                  Demander à {l.label}
                  <ArrowSquareOut size={16} aria-hidden="true" />
                  <span className="sr-only">(nouvel onglet)</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
