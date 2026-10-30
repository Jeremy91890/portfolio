import { motion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';
import { SectionHead, Stagger, fadeUp } from './Reveal';
import GuideCards from './GuideCards';
import { sectorIcons } from './sectorIcons';
import { GUIDES_PATH, adviceGuides, guidePath, sectorGuides, sectors } from '../data/guides';

// Guides de conseils affichés sur l'accueil (les premiers de la liste) ; tous sont sur la page Guides
const HOME_COUNT = 6;

// Tous les guides métier, dans l'ordre des secteurs
const tradeGuides = sectors.flatMap((s) => sectorGuides(s.id));

export default function Guides() {
  return (
    <section id="guides" className="section section--surface" aria-labelledby="guides-title">
      <div className="container">
        <SectionHead
          id="guides-title"
          eyebrow="Guides"
          title={
            <>
              Les bonnes questions <span className="accent">avant de créer votre site.</span>
            </>
          }
          lead="Un guide pour votre métier, et des réponses claires sur le prix, le référencement local ou les avis Google."
        />

        <div className="guides-home">
          <div className="guides-home__block">
            <h3 className="guides-home__label">Par métier</h3>
            <Stagger as="ul" className="trade-pills" step={0.03}>
              {tradeGuides.map((g) => {
                const SectorIcon = sectorIcons[g.trade!.sector];
                return (
                  <motion.li key={g.slug} variants={fadeUp}>
                    <a className="trade-pill" href={guidePath(g.slug)}>
                      <SectorIcon size={18} weight="duotone" aria-hidden="true" />
                      {g.trade!.label}
                    </a>
                  </motion.li>
                );
              })}
            </Stagger>
          </div>

          <div className="guides-home__block">
            <h3 className="guides-home__label">Pour tous les commerces</h3>
            <GuideCards items={adviceGuides.slice(0, HOME_COUNT)} heading="h4" />
          </div>
        </div>

        <p className="guides__all">
          <a href={GUIDES_PATH}>
            Voir tous les guides
            <ArrowRight size={16} weight="bold" aria-hidden="true" />
          </a>
        </p>
      </div>
    </section>
  );
}
