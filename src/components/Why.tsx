import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowSquareOut, Plus } from '@phosphor-icons/react';
import { SectionHead, Stagger, fadeUp } from './Reveal';
import Counter from './Counter';

// 3 chiffres récents, français ou européens de préférence, chacun repris tel quel de la source citée.
const stats = [
  {
    value: 76,
    title: 'Être trouvé',
    text: 'des Français cherchent des informations en ligne avant de se rendre en magasin.',
    source: 'Shopfully, The State of Shopping 2025',
    url: 'https://www.ecommerce-nation.fr/etude-shopfully-2025-priorites-achat-francais/',
  },
  {
    value: 48,
    title: 'Prendre de l’avance',
    text: 'des indépendants n’ont pas de site : passez devant.',
    source: 'Baromètre France Num 2026 (DGE)',
    url: 'https://www.francenum.gouv.fr/files/2026-09/Barom%C3%A8tre%20France%20Num%202026%20-%20Rapport%20final.pdf',
  },
  {
    value: 54,
    title: 'Convertir le bouche-à-oreille',
    text: 'des consommateurs visitent le site d’un commerce après avoir lu des avis positifs.',
    source: 'BrightLocal, Local Consumer Review Survey 2026',
    url: 'https://www.brightlocal.com/resources/local-seo-statistics/',
  },
];

export default function Why() {
  // Carte ouverte au clic / toucher (le survol est géré en CSS, sur les écrans qui le permettent)
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (title: string) => setOpen((o) => (o === title ? null : title));

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
        />

        <Stagger as="ul" className="why" step={0.08}>
          {stats.map((s, i) => {
            const isOpen = open === s.title;
            const panelId = `why-panel-${i}`;
            return (
              <motion.li
                key={s.title}
                className="why__card"
                data-open={isOpen}
                variants={fadeUp}
                // Toucher n'importe où sur la carte l'ouvre ou la ferme (le bouton et le lien gèrent leur propre clic)
                onClick={(e) => {
                  if (!(e.target as HTMLElement).closest('a, button')) toggle(s.title);
                }}
                onKeyDown={(e) => e.key === 'Escape' && isOpen && setOpen(null)}
              >
                <h3>
                  <button
                    type="button"
                    className="why__toggle"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggle(s.title)}
                  >
                    {s.title}
                    <Plus className="why__plus" size={18} weight="bold" aria-hidden="true" />
                  </button>
                </h3>
                <p className="why__value">
                  <Counter to={s.value} suffix={' %'} />
                </p>
                <div className="why__back" id={panelId}>
                  <div className="why__back-inner">
                    <p className="why__text">
                      {s.text}
                    </p>
                    <a className="why__source" href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.source}
                      <ArrowSquareOut size={14} aria-hidden="true" />
                      <span className="sr-only">(nouvel onglet)</span>
                    </a>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </Stagger>

      </div>
    </section>
  );
}
