import { useId, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { Reveal, SectionHead, Stagger, fadeUp } from "./Reveal";
import pricing from "../data/pricing";

const { options, plans, annualFreeMonths, launchDays, minCommitmentMonths, setupFee } = pricing;
const plan = (id: string) => plans.find((p) => p.id === id)!;

const questions: { q: string; a: ReactNode }[] = [
  {
    q: "Y a-t-il un engagement ou des frais de départ ?",
    a: (
      <p>
        La mise en place est à <strong>{setupFee} €</strong>. Toutes les formules
        demandent <strong>{minCommitmentMonths} mois minimum</strong>, puis
        vous résiliez par simple e-mail, effectif à la fin du mois en cours.
        Vous pouvez changer de formule en cours de route.
      </p>
    ),
  },
  {
    q: "Comment se passe le paiement ?",
    a: (
      <p>
        Par <strong>prélèvement SEPA</strong>, chaque mois. En payant à
        l’année, vous avez <strong>{annualFreeMonths} mois offerts</strong>.
      </p>
    ),
  },
  {
    q: "Je ne suis pas à l’aise avec l’informatique, est-ce un problème ?",
    a: (
      <p>
        Pas du tout, c’est pour vous que j’ai pensé ces formules : je
        m’occupe de toute la partie technique, sans jargon.
      </p>
    ),
  },
  {
    q: "Vous travaillez à distance, comment ça se passe ?",
    a: (
      <p>
        Tout se fait en visio, par e-mail et par SMS. Pas besoin de
        compétences techniques : un simple lien suffit pour rejoindre l’appel,
        depuis un téléphone ou un ordinateur.
      </p>
    ),
  },
  {
    q: "Est-ce que je peux modifier mon site moi-même ?",
    a: (
      <p>
        Oui, depuis un espace simple : inclus en Pro et Premium, en option (+
        {options.backofficePerMonth} €/mois) en Essentiel. Sinon, je fais les
        modifications pour vous, selon le quota de votre formule.
      </p>
    ),
  },
  {
    q: "Qui s’occupe des textes et des photos ?",
    a: (
      <p>
        Vos textes sont rédigés pour vous en Pro et Premium ; en Essentiel,
        vous me les fournissez et je les corrige. Photos : les vôtres, ou des
        photos libres de droits. Le site est en ligne{" "}
        <strong>{launchDays} jours</strong> après validation de vos contenus.
      </p>
    ),
  },
  {
    q: "Que se passe-t-il si j’arrête ?",
    a: (
      <p>
        Vous gardez votre <strong>nom de domaine</strong>, vos textes et vos
        photos. Vous pouvez aussi racheter le site complet :{" "}
        {plan("essentiel").buyoutPrice} € pour Essentiel,{" "}
        {plan("pro").buyoutPrice} € pour Pro, sur devis pour Premium. Et si
        c’est moi qui arrête, je vous le remets <strong>gratuitement</strong>.
      </p>
    ),
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: (
      <p>
        Oui : vos pages sont rapides et déclarées à Google. En Pro et
        Premium, je mets aussi votre fiche Google Maps au propre, et en
        Premium je la suis chaque mois.
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
          />
          <Reveal className="faq__help" delay={0.1}>
            <p>Une autre question ?</p>
            <a className="btn btn--ghost" href="#rappel">
              Être rappelé
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
