import {
  common,
  featureLabels,
  featureOrder,
  launchOffer,
  oneTimePurchase,
  plans,
} from "../data/siteVitrine";
import Reveal from "./ui/Reveal";
import SectionHead from "./ui/SectionHead";
import "./SiteVitrine.css";

/** Mots mis en avant quand une cellule commence par eux. */
const emphasized = ["Inclus", "Illimitées"];

/** Cellule de la grille : « Inclus » et « Illimitées » ressortent, une
 *  ligne absente se lit « Non inclus » au lecteur d'écran. */
function Value({ value }: { value: string | null }) {
  if (value === null) {
    return (
      <>
        <span className="sv-none" aria-hidden="true">
          —
        </span>
        <span className="sr-only">Non inclus</span>
      </>
    );
  }
  const lead = emphasized.find((word) => value.startsWith(word));
  if (lead) {
    return (
      <>
        <strong className="sv-yes">{lead}</strong>
        {value.slice(lead.length)}
      </>
    );
  }
  return <>{value}</>;
}

function Price({ price, period }: { price: number; period: string }) {
  return (
    <>
      <p className="sv-price">
        <span className="sv-price__amount">{price}</span>
        <span className="sv-price__period"> €/{period}</span>
      </p>
      <p className="sv-price__offer">{launchOffer.title}</p>
    </>
  );
}

/** Sur mobile, l'offre mise en avant passe en tête. */
const stackedPlans = [...plans].sort(
  (a, b) => Number(b.highlighted) - Number(a.highlighted),
);

export default function SiteVitrine() {
  return (
    <section
      id="site-vitrine"
      className="band band--surface site-vitrine"
    >
      <div className="shell">
        <SectionHead
          label="Pour les commerçants"
          title="Création de site vitrine"
          lede="Une offre à part, pour les commerces et indépendants qui n'ont pas encore de site : on le crée, on l'héberge, on le fait vivre."
        />

        <Reveal>
          <header className="sv-hero">
            <div className="sv-hero__text">
              <p className="sv-hero__label">Site web vitrine clé en main</p>
              <p className="sv-hero__title">
                Votre commerce, enfin visible en ligne
              </p>
              <p className="sv-hero__lede">
                Un site à votre image, hébergé et mis à jour pour vous. Vous
                gérez vos clients, on s'occupe du reste.
              </p>
            </div>

            <div className="sv-hero__aside">
              <p className="sv-launch">
                <span className="sv-overline">Offre de lancement</span>
                <span className="sv-launch__title">{launchOffer.title}</span>
              </p>
              <ul className="sv-hero__badges">
                <li className="sv-stat">
                  <span className="sv-stat__value">{common.setupFee} €</span>
                  <span className="sv-stat__label">de mise en place</span>
                </li>
                <li className="sv-stat">
                  <span className="sv-stat__value">Sans engagement</span>
                  <span className="sv-stat__label">résiliable à tout moment</span>
                </li>
              </ul>
            </div>
          </header>
        </Reveal>

        <Reveal delay={0.05} className="sv-summary">
          <h3 className="sv-summary__title">En bref, quelle formule pour vous ?</h3>
          <ul className="sv-summary__list">
            {plans.map((p) => (
              <li
                key={p.id}
                className={`sv-summary__item${p.highlighted ? " is-pro" : ""}`}
              >
                <p className="sv-summary__name">
                  {p.name}
                  <span className="sv-summary__price">
                    {" "}
                    · {p.price} €/{p.period}
                  </span>
                </p>
                <p className="sv-summary__text">{p.summary}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Grand écran : tableau comparatif */}
        <Reveal delay={0.05} className="sv-grid">
          <table className="sv-table">
            <caption className="sr-only">
              Comparatif des offres de site vitrine : Essentiel, Pro et Premium
            </caption>
            <thead>
              <tr>
                <td />
                {plans.map((p) => (
                  <th
                    key={p.id}
                    scope="col"
                    className={p.highlighted ? "is-pro" : undefined}
                  >
                    <span className="sv-table__name">{p.name}</span>
                    {p.badge && <span className="sv-badge">{p.badge}</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="sv-table__pricing">
                <th scope="row">
                  <span className="sr-only">Tarif</span>
                </th>
                {plans.map((p) => (
                  <td
                    key={p.id}
                    className={p.highlighted ? "is-pro" : undefined}
                  >
                    <Price price={p.price} period={p.period} />
                    <p className="sv-tagline">{p.tagline}</p>
                  </td>
                ))}
              </tr>
              {featureOrder.map((key) => (
                <tr key={key}>
                  <th scope="row">{featureLabels[key]}</th>
                  {plans.map((p) => (
                    <td
                      key={p.id}
                      className={p.highlighted ? "is-pro" : undefined}
                    >
                      <Value value={p.features[key]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        {/* Mobile : une carte par offre */}
        <ul className="sv-cards">
          {stackedPlans.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 0.05}
              as="li"
              className={`sv-card card${p.highlighted ? " is-pro" : ""}`}
            >
              {p.badge && <span className="sv-badge">{p.badge}</span>}
              <h3 className="sv-card__name">{p.name}</h3>
              <Price price={p.price} period={p.period} />
              <p className="sv-tagline">{p.tagline}</p>
              <dl className="sv-card__features">
                {featureOrder.map((key) => (
                  <div key={key} className="sv-card__feature">
                    <dt>{featureLabels[key]}</dt>
                    <dd>
                      <Value value={p.features[key]} />
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}
        </ul>

        <div className="sv-extras">
          <Reveal delay={0.05} className="sv-once">
            <h3 className="sv-overline">
              Vous préférez payer une seule fois ?
            </h3>
            <p className="sv-once__text">
              <span className="sv-once__price">{oneTimePurchase.price} €</span>{" "}
              pour le site, puis {oneTimePurchase.hostingPerMonth} €/mois pour
              l'hébergement et le nom de domaine.
            </p>
            <ul className="sv-once__details">
              <li>Garantie bugs {oneTimePurchase.bugWarrantyMonths} mois</li>
              <li>Back-office +{oneTimePurchase.backofficePerMonth} €/mois</li>
              <li>Modification sur devis</li>
              <li>Support {oneTimePurchase.support.toLowerCase()}</li>
            </ul>
          </Reveal>
        </div>

        <footer className="sv-foot">
          <p className="sv-foot__contact">
            Jérémy Debelleix ·{" "}
            <a href="mailto:jeremy.debelleix@gmail.com">
              jeremy.debelleix@gmail.com
            </a>
          </p>
        </footer>
      </div>
    </section>
  );
}
