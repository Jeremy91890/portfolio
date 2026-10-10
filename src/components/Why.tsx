import { motion } from 'motion/react';
import { ArrowRight, ArrowSquareOut } from '@phosphor-icons/react';
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
          {stats.map((s) => (
            <motion.li key={s.title} className="why__card" variants={fadeUp}>
              <h3>{s.title}</h3>
              <p className="why__value">
                <Counter to={s.value} suffix={' %'} />
              </p>
              <p className="why__text">{s.text}</p>
              <a className="why__source" href={s.url} target="_blank" rel="noopener noreferrer">
                {s.source}
                <ArrowSquareOut size={14} aria-hidden="true" />
                <span className="sr-only">(nouvel onglet)</span>
              </a>
            </motion.li>
          ))}
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
