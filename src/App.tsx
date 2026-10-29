import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Why from './components/Why';
import Process from './components/Process';
import Services from './components/Services';
import Compare from './components/Compare';
import Realisations, { REALISATIONS_VISIBLE } from './components/Realisations';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Guides from './components/Guides';
import Contact, { Footer } from './components/Contact';
import Legal from './components/Legal';
import GuidePage from './pages/GuidePage';
import GuidesIndex from './pages/GuidesIndex';
import { GUIDES_PATH, guidePath, guides } from './data/guides';

function Home() {
  return (
    <>
      <Hero />
      {REALISATIONS_VISIBLE && <Realisations />}
      <Why />
      <Process />
      <Pricing />
      <Compare />
      <About />
      <Services />
      <Faq />
      <Guides />
      <Contact />
    </>
  );
}

// Page à afficher selon l'URL (« /guides/x » et « /guides/x/ » sont équivalents) ; inconnue : accueil
function route(path: string) {
  const p = path.endsWith('/') ? path : `${path}/`;
  if (p === GUIDES_PATH) return <GuidesIndex />;
  const guide = guides.find((g) => guidePath(g.slug) === p);
  if (guide) return <GuidePage guide={guide} />;
  return null;
}

export default function App({ path }: { path: string }) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const page = route(path);

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <Header home={!page} />
      <main id="contenu" tabIndex={-1}>
        {page ?? <Home />}
      </main>
      <Footer />
      <Legal />
    </>
  );
}
