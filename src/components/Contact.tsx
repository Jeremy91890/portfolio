import Reveal from "./ui/Reveal";
import "./Contact.css";

const channels = [
  {
    label: "Email",
    value: "jeremy.debelleix@gmail.com",
    href: "mailto:jeremy.debelleix@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "jérémydebelleix",
    href: "https://www.linkedin.com/in/jérémydebelleix-35191811a",
  },
  {
    label: "Localisation",
    value: "Dammarie-les-Lys, Île-de-France",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="band band--navy contact">
      <div className="shell contact__inner">
        <div className="contact__lede">
          <p className="head__label">Contact</p>
          <h2 className="contact__title">Travaillons ensemble</h2>
          <p className="contact__intro">
            Vous avez un projet web ou mobile ? Je suis ouvert aux nouvelles
            opportunités, collaborations et défis techniques.
          </p>
          <a href="mailto:jeremy.debelleix@gmail.com" className="btn btn--primary">
            Écrire un message
          </a>
        </div>

        <ul className="contact__channels">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06} as="li">
              {c.href ? (
                <a
                  className="channel"
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <span className="channel__label">{c.label}</span>
                  <span className="channel__value">{c.value}</span>
                  <span className="channel__go" aria-hidden="true">
                    →
                  </span>
                </a>
              ) : (
                <div className="channel channel--static">
                  <span className="channel__label">{c.label}</span>
                  <span className="channel__value">{c.value}</span>
                </div>
              )}
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
