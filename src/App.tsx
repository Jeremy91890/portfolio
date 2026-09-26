import "./styles/globals.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Services from "./components/Services";
import SiteVitrine from "./components/SiteVitrine";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Aller au contenu
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Services />
        <SiteVitrine />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
