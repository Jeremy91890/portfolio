import AnimatedSection from "./ui/AnimatedSection";
import SectionTitle from "./ui/SectionTitle";
import "./Contact.css";

const links = [
  {
    label: "Email",
    value: "jeremy.debelleix@gmail.com",
    href: "mailto:jeremy.debelleix@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m2 7 10 7 10-7"/>
      </svg>
    ),
    color: "#6C63FF",
  },
  {
    label: "LinkedIn",
    value: "jérémydebelleix",
    href: "https://www.linkedin.com/in/jérémydebelleix-35191811a",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: "#0A66C2",
  },
  {
    label: "Localisation",
    value: "Dammarie-les-Lys, Île-de-France",
    href: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
        <circle cx="12" cy="9" r="2.5"/>
      </svg>
    ),
    color: "#00D9C0",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <AnimatedSection>
          <SectionTitle label="// Contact" title="Travaillons ensemble" align="center" />
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <p className="contact__intro">
            Vous avez un projet web ou mobile ? Je suis ouvert aux nouvelles opportunités,
            collaborations et défis techniques.
          </p>
        </AnimatedSection>

        <div className="contact__links">
          {links.map((link, i) => (
            <AnimatedSection key={link.label} delay={i * 0.1}>
              {link.href ? (
                <a
                  href={link.href}
                  className="contact__card glass"
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <span className="contact__icon" style={{ color: link.color }}>
                    {link.icon}
                  </span>
                  <div>
                    <span className="contact__card-label">{link.label}</span>
                    <span className="contact__card-value">{link.value}</span>
                  </div>
                  <span className="contact__arrow">→</span>
                </a>
              ) : (
                <div className="contact__card glass">
                  <span className="contact__icon" style={{ color: link.color }}>
                    {link.icon}
                  </span>
                  <div>
                    <span className="contact__card-label">{link.label}</span>
                    <span className="contact__card-value">{link.value}</span>
                  </div>
                </div>
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
