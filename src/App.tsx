import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Why from './components/Why';
import Process from './components/Process';
import Services from './components/Services';
import Compare from './components/Compare';
import Realisations from './components/Realisations';
import Pricing from './components/Pricing';
import Faq from './components/Faq';
import Contact, { Footer } from './components/Contact';
import Legal from './components/Legal';

export default function App() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <>
      <a className="skip-link" href="#contenu">
        Aller au contenu
      </a>
      <motion.div className="scroll-progress" style={{ scaleX: progress }} aria-hidden="true" />
      <Header />
      <main id="contenu" tabIndex={-1}>
        <Hero />
        <Realisations />
        <Why />
        <Process />
        <Pricing />
        <Compare />
        <About />
        <Services />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <Legal />
    </>
  );
}
