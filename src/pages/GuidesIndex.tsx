import { motion } from 'motion/react';
import { ArrowRight } from '@phosphor-icons/react';
import PageHero from '../components/PageHero';
import GuideCards from '../components/GuideCards';
import Contact from '../components/Contact';
import { Reveal, SectionHead, Stagger, fadeUp } from '../components/Reveal';
import { sectorIcons } from '../components/sectorIcons';
import { adviceGuides, guidePath, guidesIndex, sectorGuides, sectors } from '../data/guides';


// Guide général, pour les métiers qui n'ont pas encore leur page
const GENERAL = 'site-internet-artisan-commercant';

export default function GuidesIndex() {
  return (
    <>
      <PageHero
        crumbs={[{ href: '/', label: 'Accueil' }, { label: 'Guides' }]}
        eyebrow="Guides"
        title={guidesIndex.title}
        lead={guidesIndex.description}
      >
        <nav className="guides-jump" aria-label="Sections de la page">
          <a href="#par-metier">Par métier</a>
          <a href="#conseils">Conseils pour tous</a>
        </nav>
      </PageHero>

      <section id="par-metier" className="section" aria-labelledby="par-metier-title">
        <div className="container">
          <SectionHead
            id="par-metier-title"
            eyebrow="Par métier"
            title={
              <>
                Le guide de <span className="accent">votre métier</span>
              </>
            }
            lead="Ce que le site de votre commerce doit montrer, métier par métier."
          />

          <Stagger as="ul" className="trades" step={0.06}>
            {sectors.map((s) => {
              const SectorIcon = sectorIcons[s.id];
              const items = sectorGuides(s.id);
              if (items.length === 0) return null;
              return (
                <motion.li key={s.id} className="trades__group" variants={fadeUp}>
                  <h3 className="trades__title">
                    <span className="trades__icon" aria-hidden="true">
                      <SectorIcon size={22} weight="duotone" />
                    </span>
                    {s.label}
                  </h3>
                  <ul className="trades__list">
                    {items.map((g) => (
                      <li key={g.slug}>
                        <a href={guidePath(g.slug)}>
                          {g.trade!.label}
                          <ArrowRight size={16} weight="bold" aria-hidden="true" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              );
            })}
          </Stagger>

          <Reveal className="trades__other">
            <p>
              Votre métier n’est pas dans la liste ? Le guide <a href={guidePath(GENERAL)}>site internet pour artisan et
              commerçant</a> fait le tour des principaux métiers, ou <a href="#rappel">demandez à être rappelé</a>.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="conseils" className="section section--surface" aria-labelledby="conseils-title">
        <div className="container">
          <SectionHead
            id="conseils-title"
            eyebrow="Conseils pour tous"
            title={
              <>
                Les bonnes questions <span className="accent">avant de créer votre site</span>
              </>
            }
            lead="Prix, référencement local, avis Google, réseaux sociaux : valable pour tous les commerces."
          />
          <GuideCards items={adviceGuides} />
        </div>
      </section>

      <Contact />
    </>
  );
}
