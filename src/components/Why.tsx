import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowSquareOut, Plus } from '@phosphor-icons/react';
import { Reveal, SectionHead, Stagger, fadeUp } from './Reveal';
import Counter from './Counter';

// Chaque chiffre est repris tel quel de la source citée.
const stats = [
  {
    value: 76,
    title: 'Être trouvé',
    text: 'des Français cherchent des informations en ligne avant de se rendre en magasin. Sans site, c’est votre concurrent qu’ils trouvent.',
    source: 'Shopfully, The State of Shopping 2025',
    url: 'https://www.ecommerce-nation.fr/etude-shopfully-2025-priorites-achat-francais/',
  },
  {
    value: 84,
    title: 'Inspirer confiance',
    text: 'des consommateurs jugent une entreprise qui a un site plus crédible qu’une entreprise présente uniquement sur les réseaux sociaux.',
    source: 'Verisign, enquête consommateurs 2015',
    url: 'https://blog.verisign.com/getting-online/verisign-2015-online-survey-97-percent-of-smbs-would-recommend-having-a-website-to-other-smbs/',
  },
  {
    value: 54,
    title: 'Convertir le bouche-à-oreille',
    text: 'des consommateurs visitent le site d’un commerce après avoir lu des avis positifs. Votre site prend le relais de votre réputation.',
    source: 'BrightLocal, Local Consumer Review Survey 2026',
    url: 'https://www.brightlocal.com/resources/local-seo-statistics/',
  },
  {
    value: 62,
    title: 'Ne perdre aucun client',
    text: 'des consommateurs éviteraient un commerce dont les informations en ligne sont erronées. Horaires, adresse, téléphone : votre site fait foi.',
    source: 'BrightLocal, Local Business Discovery & Trust 2023',
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
          lead="Un site vitrine, c’est votre boutique ouverte 24 h/24 : il rassure, il informe et il amène des clients jusqu’à votre porte. Les études le confirment."
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

        <Reveal className="why__note" delay={0.1}>
          <p>
            Et tout se joue vite : <strong>75&nbsp;% des consommateurs choisissent un commerce en moins de 30 minutes</strong>{' '}
            (BrightLocal, 2026). Autant être en haut de la liste.
          </p>
          <a className="btn" href="#tarifs">
            Voir les formules
            <ArrowRight size={18} weight="bold" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
