import { motion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';
import { Stagger, fadeUp } from './Reveal';
import { guidePath, type Guide } from '../data/guides';
import { nbsp } from '../typography';

/** Liste de guides en cartes (accueil, page Guides, bas de chaque guide). `heading` : niveau du titre des cartes. */
export default function GuideCards({ items, heading: Heading = 'h3' }: { items: Guide[]; heading?: 'h3' | 'h4' }) {
  return (
    <Stagger as="ul" className="guide-cards" step={0.06}>
      {items.map((g) => (
        <motion.li key={g.slug} variants={fadeUp}>
          <a className="guide-card" href={guidePath(g.slug)}>
            <Heading>{nbsp(g.title)}</Heading>
            <p>{nbsp(g.teaser)}</p>
            <span className="guide-card__more" aria-hidden="true">
              Lire le guide
              <ArrowRight size={16} weight="bold" />
            </span>
          </a>
        </motion.li>
      ))}
    </Stagger>
  );
}
