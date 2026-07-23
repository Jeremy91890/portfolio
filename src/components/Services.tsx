import { offers } from "../data/services";
import AnimatedSection from "./ui/AnimatedSection";
import SectionTitle from "./ui/SectionTitle";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <AnimatedSection>
          <SectionTitle label="// Offres" title="Offres packagées" />
        </AnimatedSection>

        <div className="services__grid">
          {offers.map((offer, i) => (
            <AnimatedSection key={offer.title} delay={i * 0.08}>
              <div
                className="services__card glass"
                style={{ ["--offer-color" as string]: offer.color }}
              >
                <div className="services__card-header">
                  <h3 className="services__card-title">{offer.title}</h3>
                  <span className="services__card-price">{offer.price}</span>
                </div>
                <p className="services__card-desc">{offer.description}</p>

                <p className="services__card-deliverable">
                  <strong>Livrable :</strong> {offer.deliverable}
                </p>
                {offer.note && (
                  <p className="services__card-note">{offer.note}</p>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
