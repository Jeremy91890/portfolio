import { SectionHead } from './Reveal';
import GuideCards from './GuideCards';
import { GUIDES_PATH, guides } from '../data/guides';

// Guides affichés sur l'accueil (les premiers de la liste) ; tous sont sur la page Guides
const HOME_COUNT = 6;

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
          lead="Prix, référencement local, avis Google, réseaux sociaux : des réponses claires, sans jargon."
        />
        <GuideCards items={guides.slice(0, HOME_COUNT)} />
        <p className="guides__all">
          <a href={GUIDES_PATH}>Voir tous les guides</a>
        </p>
      </div>
    </section>
  );
}
