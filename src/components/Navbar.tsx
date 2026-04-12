import { useEffect, useState } from "react";
import "./Navbar.css";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#experience", label: "Expérience" },
  { href: "#contact", label: "Contact" },
];

const gameLinks = [{ href: "/pizza.html", label: "🍕 Pizza" }];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links.map((l) => document.querySelector(l.href));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive("#" + e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => s && obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <a href="#hero" className="navbar__logo">
        <span className="navbar__logo-bracket">&lt;</span>
        JD
        <span className="navbar__logo-bracket">/&gt;</span>
      </a>
      <ul className="navbar__links">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={`navbar__link ${active === l.href ? "navbar__link--active" : ""}`}
            >
              {l.label}
            </a>
          </li>
        ))}
        <li className="navbar__divider" aria-hidden="true" />
        {gameLinks.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="navbar__link navbar__link--game">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
