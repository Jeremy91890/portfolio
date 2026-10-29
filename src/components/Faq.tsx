import { useId, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { Reveal, SectionHead, Stagger, fadeUp } from "./Reveal";
import pricing from "../data/pricing";
import { agency, duel, euros } from "../data/market";

const { options, plans, annualFreeMonths, launchDays, minCommitmentMonths, setupFee } = pricing;
const plan = (id: string) => plans.find((p) => p.id === id)!;

// Exporté pour les données structurées FAQPage (entry-server.tsx)
export const questions: { q: string; a: ReactNode }[] = [
  {
    q: "Combien coûte un site web pour un commerçant ?",
    a: (
      <p>
        Chez moi, de <strong>{plan("essentiel").price} à {plan("premium").price} €/mois</strong>{" "}
        selon la formule, avec {setupFee} € de mise en place : hébergement, nom
        de domaine, textes et mises à jour compris. Pour comparer, un site à
        faire soi-même coûte {duel.diy.price}, et une agence demande souvent{" "}
        {euros(agency.setup)} pour la création, puis {agency.monthly} €/mois
        de maintenance.
      </p>
    ),
  },
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
        Par prélèvement SEPA, chaque mois. Si vous payez à l’année, vous
        avez <strong>{annualFreeMonths} mois offerts</strong>.
      </p>
    ),
  },
  {
    q: "En combien de temps mon site est-il en ligne ?",
    a: (
      <p>
        En <strong>{launchDays} jours</strong> après validation de vos
        contenus. Il suffit d’une visio de 20 minutes pour démarrer : vous
        m’expliquez votre commerce, je m’occupe du reste.
      </p>
    ),
  },
  {
    q: "Vous faites aussi des sites pour les artisans ?",
    a: (
      <p>
        Oui : boulangers, coiffeurs, fleuristes, restaurateurs, plombiers,
        esthéticiennes… Le site est pensé pour votre métier : vos horaires et
        votre adresse pour une boutique, vos prestations et vos tarifs pour un
        salon, votre zone d’intervention pour un artisan.
      </p>
    ),
  },
  {
    q: "Mon site sera-t-il visible sur Google ?",
    a: (
      <>
        <p>
          Oui. Toutes les formules comprennent le{" "}
          <strong>référencement Google de base</strong>, c’est-à-dire ce qui
          permet à Google de trouver votre site et de comprendre ce que vous
          faites : un titre et une description pour chaque page, un site
          rapide et lisible sur mobile, votre adresse et vos horaires dans un
          format que Google sait lire, et un plan du site envoyé à Google pour
          qu’il le repère vite.
        </p>
        <p>
          Pour un commerce, le plus important est le{" "}
          <strong>référencement local</strong> : apparaître quand on cherche
          « boulangerie » ou « coiffeur » près de chez soi. Il passe surtout
          par votre <strong>fiche Google Maps</strong>. En Pro et Premium, je
          la mets au propre, et en Premium je la suis chaque mois. Personne ne
          peut garantir la première place, mais c’est la base pour apparaître
          quand on cherche votre commerce.
        </p>
      </>
    ),
  },
  {
    q: "Comment avoir plus d’avis Google pour mon commerce ?",
    a: (
      <p>
        Le plus efficace est de les demander à tous vos clients, juste après
        leur passage, et de leur rendre ça facile. En Pro et Premium, je vous
        fournis un <strong>QR code pour vos avis Google</strong>, à poser près
        de la caisse : vos clients le scannent et arrivent directement sur la
        page pour laisser leur avis. Plus vous avez d’avis, plus votre fiche
        ressort sur Google Maps.
      </p>
    ),
  },
  {
    q: "J’ai déjà Instagram ou Facebook, ai-je besoin d’un site ?",
    a: (
      <p>
        Les réseaux sociaux sont parfaits pour montrer votre quotidien, mais
        ils ne vous appartiennent pas : c’est l’algorithme qui décide qui voit
        vos publications, et une partie de vos clients n’y est pas. Un site
        ressort sur Google et donne toutes les infos d’un coup : horaires,
        adresse, tarifs. Les deux se complètent, et je mets des liens vers vos
        réseaux sur votre site.
      </p>
    ),
  },
  {
    q: "Agence web ou développeur freelance : que choisir ?",
    a: (
      <p>
        En agence, comptez souvent {euros(agency.setup)} pour la création,{" "}
        {agency.monthly} €/mois de maintenance et {agency.weeks} semaines de
        délai. Un développeur web indépendant coûte moins cher et vous parlez
        toujours à la même personne. Le risque, c’est qu’il disparaisse :
        c’est pour ça que je m’engage à vous remettre votre site gratuitement
        si j’arrête.
      </p>
    ),
  },
  {
    q: "Et WordPress, ce n’est pas plus simple pour un commerce ?",
    a: (
      <p>
        WordPress est gratuit et très répandu, mais il faut choisir un
        hébergement, un thème, des extensions, et surtout faire les mises à
        jour régulièrement pour éviter les failles. Si vous aimez bricoler,
        c’est une bonne option. Si vous préférez vous occuper de votre
        commerce, je fais tout ça pour vous, dans l’abonnement.
      </p>
    ),
  },
  {
    q: "Une newsletter, ça vaut le coup pour un commerce local ?",
    a: (
      <p>
        Oui, c’est le moyen le plus simple de faire revenir vos clients. Une
        fois par mois, j’écris et j’envoie un e-mail à vos clients : nouveautés,
        offres, horaires de fêtes. C’est en option (+{options.newsletterPerMonth}{" "}
        €/mois) en Essentiel et Pro, et inclus en Premium.
      </p>
    ),
  },
  {
    q: "Je ne suis pas à l’aise avec l’informatique, est-ce un problème ?",
    a: (
      <p>
        Pas du tout, j’ai pensé ces formules pour vous. Je m’occupe de toute
        la partie technique, et je vous parle sans jargon.
      </p>
    ),
  },
  {
    q: "Vous travaillez à distance, comment ça se passe ?",
    a: (
      <p>
        Tout se fait en visio, par e-mail et par SMS. Pour la visio, vous
        cliquez sur un lien depuis votre téléphone ou votre ordinateur, et
        c’est tout.
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
        Je rédige vos textes, quelle que soit la formule. Photos : les vôtres, ou des
        photos libres de droits. Le site est en ligne{" "}
        <strong>{launchDays} jours</strong> après validation de vos contenus.
      </p>
    ),
  },
  {
    q: "Que se passe-t-il si j’arrête ?",
    a: (
      <p>
        Vous gardez votre nom de domaine, vos textes et vos photos. Vous
        pouvez aussi racheter le site complet :{" "}
        {plan("essentiel").buyoutPrice} € pour Essentiel,{" "}
        {plan("pro").buyoutPrice} € pour Pro, sur devis pour Premium. Et si
        c’est moi qui arrête, je vous le remets gratuitement.
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
                Ce qu’on me demande <span className="accent">le plus souvent.</span>
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
