import { motion } from 'motion/react';
import { ArrowUpRight, Quotes } from '@phosphor-icons/react';
import { SectionHead, Stagger, fadeUp } from './Reveal';
import realisations from '../data/realisations.json';
import socialProof from '../data/social-proof.json';

// Avis et clients : uniquement des contenus réels. Tant que les listes sont vides, les blocs ne s'affichent pas.
type Testimonial = { name: string; business: string; text: string; url?: string };
type Client = { name: string; url?: string };
const testimonials = socialProof.testimonials as Testimonial[];
const clients = socialProof.clients as Client[];

// Section masquée pour le moment : passer à true pour l'afficher (et son lien dans le menu)
export const REALISATIONS_VISIBLE = false;

export default function Realisations() {
  return (
    <section id="realisations" className="section" aria-labelledby="realisations-title">
      <div className="container">
        <SectionHead
          id="realisations-title"
          eyebrow="Réalisations"
          title={
            <>
              Des sites déjà <span className="accent">en ligne.</span>
            </>
          }
        />

        <Stagger as="ul" className="works" step={0.1}>
          {realisations.sites.map((s) => (
            <motion.li key={s.id} className="work" variants={fadeUp}>
              <a href={s.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={`/realisations/${s.id}-desktop.webp`}
                  alt={`Page d’accueil du site ${s.label}`}
                  width={1280}
                  height={800}
                  loading="lazy"
                  decoding="async"
                />
                <span className="work__label">
                  {s.label}
                  <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
                  <span className="sr-only"> (nouvel onglet)</span>
                </span>
              </a>
            </motion.li>
          ))}
        </Stagger>

        {clients.length > 0 && (
          <div className="clients">
            <h3>Ils me font confiance</h3>
            <ul>
              {clients.map((c) => (
                <li key={c.name}>
                  {c.url ? (
                    <a href={c.url} target="_blank" rel="noopener noreferrer">
                      {c.name}
                    </a>
                  ) : (
                    c.name
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}

        {testimonials.length > 0 && (
          <div className="reviews">
            <h3 className="sr-only">Avis clients</h3>
            <ul>
              {testimonials.map((t) => (
                <li key={t.name} className="review">
                  <Quotes size={24} weight="fill" aria-hidden="true" />
                  <blockquote>{t.text}</blockquote>
                  <p>
                    <strong>{t.name}</strong>, {t.business}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
