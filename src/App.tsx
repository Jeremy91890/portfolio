import { motion, useScroll, useSpring } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Market from './components/Market';
import Pricing from './components/Pricing';
import Contact, { Footer } from './components/Contact';

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
        <Marquee />
        <About />
        <Process />
        <Pricing />
        <Market />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
