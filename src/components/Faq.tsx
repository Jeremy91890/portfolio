import { useId, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { Phone, Plus } from "@phosphor-icons/react";
import { Reveal, SectionHead, Stagger, fadeUp } from "./Reveal";
import pricing from "../data/pricing";
import { site } from "../data/site";

const {
  oneTimePurchase: once,
  options,
  plans,
  annualFreeMonths,
  launchDays,
  premiumCommitmentMonths,
} = pricing;
const plan = (id: string) => plans.find((p) => p.id === id)!;

const questions: { q: string; a: ReactNode }[] = [
  {
    q: "Y a-t-il un engagement ou des frais de départ ?",
    a: (
      <p>
        La mise en place est à <strong>0 €</strong>. Les formules Essentiel et
        Pro sont <strong>sans engagement</strong> : vous résiliez par simple
        e-mail, effectif à la fin du mois en cours. La formule Premium, qui
        inclut un outil développé sur mesure, demande un engagement de{" "}
        {premiumCommitmentMonths} mois.
      </p>
    ),
  },
  {
    q: "Comment se passe le paiement ?",
    a: (
      <>
        <p>
          Par <strong>prélèvement SEPA</strong>, chaque mois. En payant à
          l’année, vous profitez de{" "}
          <strong>{annualFreeMonths} mois offerts</strong> : vous payez{" "}
          {12 - annualFreeMonths} mois au lieu de 12.
        </p>
        <p>
          Si vous arrêtez en cours d’année, les mois écoulés sont recalculés
          au tarif mensuel et le reste vous est remboursé.
        </p>
      </>
    ),
  },
  {
    q: "Je ne suis pas à l’aise avec l’informatique, est-ce un problème ?",
    a: (
      <p>
        Pas du tout, c’est même pour vous que j’ai pensé ces formules.
        Hébergement, nom de domaine, sécurité, mises à jour, sauvegardes : je
        m’occupe de toute la partie technique et je vous explique chaque choix
        sans jargon.
      </p>
    ),
  },
  {
    q: "Est-ce que je peux modifier mon site moi-même ?",
    a: (
      <p>
        Oui, avec l’espace de gestion : horaires, textes, images… Il est inclus
        dans les formules Pro et Premium, et disponible en option (+
        {options.backofficePerMonth} €/mois) avec Essentiel. Sinon, je fais les
        modifications pour vous, selon le quota de votre formule.
      </p>
    ),
  },
  {
    q: "Qui s’occupe des textes et des photos ?",
    a: (
      <>
        <p>
          Je rédige vos textes après un échange avec vous, ou j’utilise les
          vôtres. Pour les photos : les vôtres, ou des photos libres de droits
          que je sélectionne. La séance photo n’est pas incluse.
        </p>
        <p>
          Votre site est en ligne <strong>{launchDays} jours</strong> après la
          validation de tous vos textes et images.
        </p>
      </>
    ),
  },
  {
    q: "Quel outil sur mesure avec la formule Premium ?",
    a: (
      <p>
        Vous en choisissez un : réservation en ligne sans commission, devis et
        factures, carte de fidélité numérique, ou assistant qui répond aux
        questions de vos clients (horaires, services, tarifs). Votre site est
        en ligne en {launchDays} jours ; le délai de livraison de l’outil est
        fixé ensemble. Pour un autre besoin, je vous fais un devis.
      </p>
    ),
  },
  {
    q: "Que se passe-t-il si j’arrête ?",
    a: (
      <>
        <p>
          Je vous transfère votre <strong>nom de domaine</strong> et vous remets
          vos textes et vos photos : vous gardez votre adresse et vos contenus.
        </p>
        <p>
          Vous pouvez aussi racheter le site complet, prêt à être repris :{" "}
          {plan("essentiel").buyoutPrice} € pour Essentiel,{" "}
          {plan("pro").buyoutPrice} € pour Pro, sur devis pour Premium.
        </p>
        <p>
          Et si c’est moi qui arrête mon activité, je vous remets{" "}
          <strong>gratuitement</strong> votre site complet.
        </p>
      </>
    ),
  },
  {
    q: "Je peux changer de formule ?",
    a: (
      <p>
        Oui, en cours d’abonnement, pour suivre l’évolution de votre activité.
        Depuis la formule Premium, le passage à une formule inférieure est
        possible à l’issue des {premiumCommitmentMonths} mois d’engagement.
      </p>
    ),
  },
  {
    q: "Quelle différence entre un bug et une modification ?",
    a: (
      <>
        <p>
          Un <strong>bug</strong>, c’est quelque chose qui ne fonctionne plus
          comme prévu : il est corrigé gratuitement. Si votre site est
          inaccessible, je le prends en charge sous{" "}
          {pricing.criticalResponseHours} h ouvrées, quelle que soit votre
          formule.
        </p>
        <p>
          Une <strong>modification</strong>, c’est un changement que vous
          demandez : un élément, ou une liste d’éléments envoyée en une seule
          fois. Elle est décomptée de votre quota ; au-delà, chaque
          modification est facturée {options.extraModification} €. Les
          modifications non utilisées ne sont pas reportées.
        </p>
      </>
    ),
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: (
      <p>
        Oui : avec toutes les formules, vos pages sont conçues pour s’afficher
        vite et bien remonter dans les recherches, et je déclare votre site
        auprès de Google. Avec Pro et Premium, je mets aussi votre fiche Google
        Maps au propre pour que les clients de votre quartier vous trouvent.
      </p>
    ),
  },
  {
    q: "Je préfère payer une seule fois, c’est possible ?",
    a: (
      <p>
        Oui, sur devis. Décrivez-moi votre projet : je vous envoie un{" "}
        <a href="#contact">devis sur mesure</a> en {once.quoteMaxDays} jours
        maximum.
      </p>
    ),
  },
  {
    q: "J’ai déjà un site, vous pouvez le reprendre ?",
    a: (
      <p>
        Oui. Je modernise votre site en préservant votre référencement, pour
        ne pas perdre la place que vous avez déjà gagnée sur Google.
      </p>
    ),
  },
  {
    q: "Mon besoin ne rentre dans aucune formule…",
    a: (
      <p>
        Les formules couvrent les besoins les plus courants. Click & collect,
        application mobile, outil métier : je vous fais un{" "}
        <a href="#contact">devis personnalisé</a>, adapté à votre budget.
      </p>
    ),
  },
];

function FaqItem({ q, a }: { q: string; a: ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const buttonId = `${id}-q`;
  const panelId = `${id}-a`;

  return (
    <motion.li className={`faq__item${open ? " is-open" : ""}`} variants={fadeUp}>
      <h3>
        <button
          id={buttonId}
          type="button"
          className="faq__question"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
        >
          {q}
          <span className="faq__icon" aria-hidden="true">
            <Plus size={18} weight="bold" />
          </span>
        </button>
      </h3>
      {/* Panneau fermé : visibility: hidden le retire du clavier et des lecteurs d'écran */}
      <div id={panelId} className="faq__panel" role="region" aria-labelledby={buttonId}>
        <div className="faq__answer">{a}</div>
      </div>
    </motion.li>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="section" aria-labelledby="faq-title">
      <div className="container faq">
        <div className="faq__intro">
          <SectionHead
            id="faq-title"
            eyebrow="Questions fréquentes"
            title={
              <>
                Vous vous posez <span className="accent">sûrement la question.</span>
              </>
            }
            lead="Les réponses aux questions que l’on me pose le plus souvent."
          />
          <Reveal className="faq__help" delay={0.1}>
            <p>Une autre question ? Je vous réponds personnellement.</p>
            <a className="btn btn--ghost" href={`tel:${site.phoneHref}`}>
              <Phone size={18} aria-hidden="true" />
              {site.phone}
            </a>
          </Reveal>
        </div>

        <Stagger as="ul" className="faq__list" step={0.06}>
          {questions.map((item) => (
            <FaqItem key={item.q} {...item} />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
