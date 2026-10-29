import { useId, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { Plus } from "@phosphor-icons/react";
import { Reveal, SectionHead, Stagger, fadeUp } from "./Reveal";
import pricing from "../data/pricing";
import { findGuide, guidePath } from "../data/guides";

const {
  options,
  plans,
  annualFreeMonths,
  launchDays,
  setupFee,
} = pricing;
const plan = (id: string) => plans.find((p) => p.id === id)!;

// Exporté pour les données structurées FAQPage (entry-server.tsx).
// `guide` : slug du guide qui développe la réponse, lien affiché sous la réponse (hors données structurées)
export const questions: { q: string; a: ReactNode; guide?: string }[] = [
  {
    q: "Y a-t-il un engagement ou des frais de départ ?",
    a: (
      <p>
        La mise en place est à <strong>{setupFee} €</strong>, et toutes les
        formules sont <strong>sans engagement</strong> : vous résiliez par
        simple e-mail, effectif à la fin du mois en cours. Vous pouvez changer
        de formule en cours de route.
      </p>
    ),
  },
  {
    q: "Comment se passe le paiement ?",
    a: (
      <p>
        Par prélèvement SEPA, chaque mois. Si vous payez à l’année, vous avez{" "}
        <strong>{annualFreeMonths} mois offerts</strong>.
      </p>
    ),
  },
  {
    q: "En combien de temps mon site est-il en ligne ?",
    guide: "creer-site-boutique-rapidement",
    a: (
      <p>
        En <strong>{launchDays} jours</strong> après validation de vos contenus.
        Il suffit d’une visio de 20 minutes pour démarrer : vous m’expliquez
        votre commerce, je m’occupe du reste.
      </p>
    ),
  },
  {
    q: "Vous faites aussi des sites pour les artisans ?",
    guide: "site-internet-artisan-commercant",
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
    guide: "referencement-local-google-maps",
    a: (
      <>
        <p>
          Oui. Toutes les formules comprennent le{" "}
          <strong>référencement Google de base</strong>, c’est-à-dire ce qui
          permet à Google de trouver votre site et de comprendre ce que vous
          faites : un titre et une description pour chaque page, un site rapide
          et lisible sur mobile, votre adresse et vos horaires dans un format
          que Google sait lire, et un plan du site envoyé à Google pour qu’il le
          repère vite.
        </p>
        <p>
          Pour un commerce, le plus important est le{" "}
          <strong>référencement local</strong> : apparaître quand on cherche «
          boulangerie » ou « coiffeur » près de chez soi. Il passe surtout par
          votre <strong>fiche Google Maps</strong>. En Pro et Premium, je la
          mets au propre, et en Premium je la suis chaque mois. Personne ne peut
          garantir la première place, mais c’est la base pour apparaître quand
          on cherche votre commerce.
        </p>
      </>
    ),
  },
  {
    q: "Comment avoir plus d’avis Google pour mon commerce ?",
    guide: "avis-google-commerce-local",
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
    guide: "site-web-ou-instagram",
    a: (
      <p>
        Les réseaux sociaux sont parfaits pour montrer votre quotidien, mais ils
        ne vous appartiennent pas : c’est l’algorithme qui décide qui voit vos
        publications, et une partie de vos clients n’y est pas. Un site ressort
        sur Google et donne toutes les infos d’un coup : horaires, adresse,
        tarifs. Les deux se complètent, et je mets des liens vers vos réseaux
        sur votre site.
      </p>
    ),
  },
  {
    q: "Une newsletter, ça vaut le coup pour un commerce local ?",
    guide: "newsletter-commerce-local",
    a: (
      <p>
        Oui, c’est le moyen le plus simple de faire revenir vos clients. Une
        fois par mois, j’écris et j’envoie un e-mail à vos clients : nouveautés,
        offres, horaires de fêtes. C’est en option (+
        {options.newsletterPerMonth} €/mois) en Essentiel et Pro, et inclus en
        Premium.
      </p>
    ),
  },
  {
    q: "Je ne suis pas à l’aise avec l’informatique, est-ce un problème ?",
    a: (
      <p>
        Pas du tout, j’ai pensé ces formules pour vous. Je m’occupe de toute la
        partie technique, et je vous parle sans jargon.
      </p>
    ),
  },
  {
    q: "Vous travaillez à distance, comment ça se passe ?",
    a: (
      <p>
        Tout se fait en visio, par e-mail et par SMS. Pour la visio, vous
        cliquez sur un lien depuis votre téléphone ou votre ordinateur, et c’est
        tout.
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
        Je rédige vos textes, quelle que soit la formule. Photos : les vôtres,
        ou des photos libres de droits. Le site est en ligne{" "}
        <strong>{launchDays} jours</strong> après validation de vos contenus.
      </p>
    ),
  },
  {
    q: "Que se passe-t-il si Nappage arrête ?",
    a: (
      <p>
        Vous gardez votre nom de domaine, vos textes et vos photos. Vous pouvez
        aussi racheter le site complet : {plan("essentiel").buyoutPrice} € pour
        Essentiel, {plan("pro").buyoutPrice} € pour Pro, sur devis pour Premium.
        Et si c’est moi qui arrête, je vous le remets gratuitement.
      </p>
    ),
  },
];

function FaqItem({ q, a, guide }: { q: string; a: ReactNode; guide?: string }) {
  const [open, setOpen] = useState(false);
  const more = guide ? findGuide(guide) : undefined;
  // Slug inconnu : le pré-rendu échoue au lieu de publier un lien mort
  if (guide && !more) throw new Error(`Guide inconnu : ${guide}`);
  const id = useId();
  const buttonId = `${id}-q`;
  const panelId = `${id}-a`;

  return (
    <motion.li
      className={`faq__item${open ? " is-open" : ""}`}
      variants={fadeUp}
    >
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
      <div
        id={panelId}
        className="faq__panel"
        role="region"
        aria-labelledby={buttonId}
      >
        <div className="faq__answer">
          {a}
          {more && (
            <p>
              <a href={guidePath(more.slug)}>Lire le guide : {more.title}</a>
            </p>
          )}
        </div>
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
                Ce qu’on me demande{" "}
                <span className="accent">le plus souvent.</span>
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
