import { ArrowRight } from '@phosphor-icons/react';
import PageHero from '../components/PageHero';
import GuideCards from '../components/GuideCards';
import Contact from '../components/Contact';
import { Reveal } from '../components/Reveal';
import { GUIDES_PATH, relatedGuides, type Guide } from '../data/guides';
import { bodies } from '../guides';
import { site } from '../data/site';
import pricing from '../data/pricing';

const fromPrice = Math.min(...pricing.plans.map((p) => p.price));

// Formatage manuel : identique au pré-rendu (Node) et dans le navigateur, pas d'écart à l'hydratation
const MONTHS = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
const dateFr = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${d === 1 ? '1er' : d} ${MONTHS[m - 1]} ${y}`;
};

export default function GuidePage({ guide }: { guide: Guide }) {
  const Body = bodies[guide.slug];
  const others = relatedGuides(guide);

  return (
    <>
      <article aria-labelledby="page-title">
        <PageHero
          crumbs={[{ href: '/', label: 'Accueil' }, { href: GUIDES_PATH, label: 'Guides' }, { label: guide.title }]}
          eyebrow="Guide"
          title={guide.title}
          lead={guide.description}
        >
          <p className="page-hero__meta">
            Par {site.name} · mis à jour le <time dateTime={guide.updated}>{dateFr(guide.updated)}</time>
          </p>
        </PageHero>

        <div className="section">
          <div className="container">
            <div className="prose">
              <Body />
            </div>

            <Reveal className="guide-cta on-dark">
              <div>
                <h2>Un site clé en main pour votre commerce, dès {fromPrice} €/mois</h2>
                <p>
                  Je le crée, je l’héberge et je le mets à jour. En ligne en {pricing.launchDays} jours, {pricing.setupFee}{' '}
                  € de mise en place.
                </p>
              </div>
              <div className="guide-cta__actions">
                <a className="btn" href="#rappel">
                  Être rappelé
                  <ArrowRight size={18} weight="bold" aria-hidden="true" />
                </a>
                <a className="btn btn--ghost" href="/#tarifs">
                  Voir les formules
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <section className="section section--surface" aria-labelledby="autres-guides-title">
        <div className="container">
          <h2 id="autres-guides-title" className="section-title guides__more-title">
            D’autres guides pour <span className="accent">votre commerce</span>
          </h2>
          <GuideCards items={others} />
          <p className="guides__all">
            <a href={GUIDES_PATH}>Voir tous les guides, par métier</a>
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
