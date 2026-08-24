import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Navbar.css";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#services", label: "Offres" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter((s): s is Element => Boolean(s));

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <header className={`topbar ${scrolled ? "topbar--raised" : ""}`}>
      <div className="topbar__inner shell">
        <a href="#hero" className="topbar__identity">
          <span className="topbar__mark" aria-hidden="true">
            JD
          </span>
          <span className="topbar__name">Jérémy Debelleix</span>
        </a>

        <nav aria-label="Sections du site">
          <ul className="topbar__links">
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="topbar__link"
                    aria-current={isActive ? "true" : undefined}
                  >
                    {/* Le repère glisse d'une section à l'autre. */}
                    {isActive && (
                      <motion.span
                        className="topbar__pill"
                        layoutId={reduced ? undefined : "nav-active"}
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="topbar__label">{l.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
