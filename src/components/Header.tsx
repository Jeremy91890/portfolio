import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, List, X } from '@phosphor-icons/react';
import { site } from '../data/site';

const links = [
  { id: 'a-propos', label: 'À propos' },
  { id: 'methode', label: 'Clé en main' },
  { id: 'tarifs', label: 'Tarifs' },
  { id: 'prix-du-marche', label: 'Prix du marché' },
  { id: 'services', label: 'Sur mesure' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const menuBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Section courante mise en évidence dans la navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    links.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`header on-dark${scrolled || open ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a className="logo" href="#top" aria-label={`${site.name}, retour en haut de page`}>
          <span className="logo__mark" aria-hidden="true">
            {site.initials}
          </span>
          <span className="logo__text" aria-hidden="true">
            {site.name}
            <small>{site.role}</small>
          </span>
        </a>

        <nav className="nav" aria-label="Navigation principale">
          <ul className="nav__list">
            {links.map(({ id, label }) => (
              <li key={id}>
                <a className="nav__link" href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
                  {active === id && (
                    <motion.span
                      className="nav__pill"
                      layoutId="nav-pill"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn header__cta" href="#contact">
          Demander un devis
        </a>

        <button
          ref={menuBtn}
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} aria-hidden="true" /> : <List size={24} aria-hidden="true" />}
          <span className="sr-only">{open ? 'Fermer le menu' : 'Ouvrir le menu'}</span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-mobile"
            className="mobile-menu on-dark"
            aria-label="Navigation principale"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8, transition: { duration: 0.18 } }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul>
              {links.map(({ id, label }, i) => (
                <motion.li
                  key={id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04 }}
                >
                  <a href={`#${id}`} onClick={() => setOpen(false)}>
                    {label}
                    <ArrowRight size={22} aria-hidden="true" />
                  </a>
                </motion.li>
              ))}
            </ul>
            <a className="btn" href="#contact" onClick={() => setOpen(false)}>
              Demander un devis
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
