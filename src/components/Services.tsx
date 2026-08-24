import { offers } from "../data/services";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="band services">
      <div className="shell">
        <SectionHead
          label="Offres"
          title="Offres packagées"
          lede="Des périmètres courts, un prix annoncé, un livrable défini à l'avance."
        />

        <ul className="offers">
          {offers.map((offer, i) => (
            <Reveal key={offer.title} delay={i * 0.05} as="li" className="offer card card--lift">
              <div className="offer__head">
                <h3 className="offer__title">{offer.title}</h3>
                <p className="offer__price">{offer.price}</p>
              </div>

              <p className="offer__desc">{offer.description}</p>

              <dl className="offer__details">
                <div className="offer__detail">
                  <dt>Livrable</dt>
                  <dd>{offer.deliverable}</dd>
                </div>
                {offer.note && (
                  <div className="offer__detail">
                    <dt>Pour qui</dt>
                    <dd>{offer.note}</dd>
                  </div>
                )}
              </dl>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.2}>
          <p className="offers__foot">
            Un besoin qui ne rentre pas dans une case ?
            {" "}
            <a href="#contact" className="offers__foot-link">
              Décrivez-le-moi
            </a>
            , je vous réponds avec un périmètre et un prix.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
