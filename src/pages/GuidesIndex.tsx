import PageHero from '../components/PageHero';
import GuideCards from '../components/GuideCards';
import Contact from '../components/Contact';
import { guides, guidesIndex } from '../data/guides';

export default function GuidesIndex() {
  return (
    <>
      <PageHero
        crumbs={[{ href: '/', label: 'Accueil' }, { label: 'Guides' }]}
        eyebrow="Guides"
        title={guidesIndex.title}
        lead={guidesIndex.description}
      />
      <section className="section" aria-label="Tous les guides">
        <div className="container">
          <GuideCards items={guides} />
        </div>
      </section>
      <Contact />
    </>
  );
}
