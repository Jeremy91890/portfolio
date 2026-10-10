import { useId, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { Phone, Plus } from "@phosphor-icons/react";
import { Reveal, SectionHead, Stagger, fadeUp } from "./Reveal";
import pricing from "../data/pricing.json";
import { site } from "../data/site";

const { oneTimePurchase: once } = pricing;

const questions: { q: string; a: ReactNode }[] = [
  {
    q: "Y a-t-il un engagement ou des frais de départ ?",
    a: (
      <p>
        Non. La mise en place est à <strong>0 €</strong> et l’abonnement est{" "}
        <strong>sans engagement</strong> : vous pouvez le résilier à tout
        moment.
      </p>
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
        {once.backofficePerMonth} €/mois) avec Essentiel. Sinon, je fais les
        modifications pour vous, selon le quota de votre formule.
      </p>
    ),
  },
  {
    q: "Quelle différence entre un bug et une modification ?",
    a: (
      <p>
        Un <strong>bug</strong>, c’est quelque chose qui ne fonctionne plus
        comme prévu : il est corrigé gratuitement. Une{" "}
        <strong>modification</strong>, c’est un changement que vous demandez
        (un nouveau texte, une photo…) : elle est décomptée de votre quota.
      </p>
    ),
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: (
      <p>
        Vos pages sont conçues pour s’afficher vite et bien remonter dans les
        recherches. Avec les formules Pro et Premium, je mets aussi votre fiche
        Google Maps au propre pour que les clients de votre quartier vous
        trouvent.
      </p>
    ),
  },
  {
    q: "Je préfère payer une seule fois, c’est possible ?",
    a: (
      <>
        <p>
          Oui : <strong>{once.price} €</strong> pour le site, puis{" "}
          {once.hostingPerMonth} €/mois pour l’hébergement et le nom de domaine.
          Les bugs sont garantis {once.bugWarrantyMonths} mois et chaque
          modification est facturée {once.modificationUnitPrice} €.
        </p>
        <p>
          Vous ne souhaitez pas payer ces {once.hostingPerMonth} €/mois ? Vous
          pouvez aussi <strong>gérer vous-même</strong> l’hébergement, le nom de
          domaine et le certificat de sécurité : je vous livre le site et vous
          explique comment le mettre en ligne.
        </p>
      </>
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
        Les formules ne sont qu’indicatives. Prise de rendez-vous, click &
        collect, application mobile, outil métier : je vous fais un{" "}
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
