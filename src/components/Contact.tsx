import { useEffect, useState, type FormEvent } from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ChatText,
  CheckCircle,
  EnvelopeSimple,
  InstagramLogo,
  LinkedinLogo,
  Phone,
  VideoCamera,
} from "@phosphor-icons/react";
import { Reveal } from "./Reveal";
import Booking, { openBooking } from "./Booking";
import { site } from "../data/site";
import pricing from "../data/pricing";
import { LEGAL_HASH } from "./Legal";
import { GUIDES_PATH } from "../data/guides";
import { FR_PHONE, HONEYPOT, LIMITS, MOMENTS, UNDECIDED } from "../data/callback";

const PLAN_EVENT = "nappage:formule";

/** Présélectionne la formule dans le formulaire (boutons « Choisir … » des tarifs) */
export const choosePlan = (name: string) =>
  window.dispatchEvent(new CustomEvent(PLAN_EVENT, { detail: name }));

type Status = "idle" | "sending" | "sent" | "error";

function CallbackForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [plan, setPlan] = useState("");

  useEffect(() => {
    const onPlan = (e: Event) => setPlan((e as CustomEvent<string>).detail);
    window.addEventListener(PLAN_EVENT, onPlan);
    return () => window.removeEventListener(PLAN_EVENT, onPlan);
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch("/api/rappel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setPlan("");
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div id="rappel" className="callback callback--done" role="status">
        <CheckCircle size={40} weight="duotone" aria-hidden="true" />
        <p>Merci ! Je vous rappelle sous {pricing.callbackHours} h ouvrées.</p>
      </div>
    );
  }

  return (
    <form id="rappel" className="callback" onSubmit={onSubmit} aria-labelledby="rappel-title">
      <h3 id="rappel-title" className="callback__title">
        Être rappelé
      </h3>
      <div className="callback__grid">
        <label>
          <span>
            Prénom <span aria-hidden="true">*</span>
          </span>
          <input name="prenom" required autoComplete="given-name" maxLength={LIMITS.prenom} />
        </label>
        <label>
          <span>
            Nom du commerce <span aria-hidden="true">*</span>
          </span>
          <input name="commerce" required autoComplete="organization" maxLength={LIMITS.commerce} />
        </label>
        <label>
          <span>
            Téléphone <span aria-hidden="true">*</span>
          </span>
          <input
            name="telephone"
            type="tel"
            required
            autoComplete="tel"
            inputMode="tel"
            pattern={FR_PHONE}
            maxLength={LIMITS.telephone}
            title="Un numéro français, par exemple 06 12 34 56 78"
            placeholder="06 12 34 56 78"
          />
        </label>
        <label>
          Ville
          <input name="ville" autoComplete="address-level2" maxLength={LIMITS.ville} />
        </label>
        <label>
          Formule qui vous intéresse
          <select name="formule" value={plan} onChange={(e) => setPlan(e.target.value)}>
            <option value="">Choisir…</option>
            {pricing.plans.map((p) => (
              <option key={p.id} value={p.name}>
                {p.name}
              </option>
            ))}
            <option value={UNDECIDED}>{UNDECIDED}</option>
          </select>
        </label>
        <label>
          Meilleur moment pour vous rappeler
          <select name="moment" defaultValue="">
            <option value="">Choisir…</option>
            {MOMENTS.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
        </label>
        <label className="callback__full">
          Message
          <textarea name="message" rows={3} maxLength={LIMITS.message} />
        </label>
        {/* Champ piège : invisible pour les visiteurs, rempli par les robots */}
        <div className="callback__trap" aria-hidden="true">
          <label>
            Site web
            <input name={HONEYPOT} tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </div>

      <button className="btn" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Envoi…" : "Je veux être rappelé"}
        <ArrowRight size={18} weight="bold" aria-hidden="true" />
      </button>

      {status === "error" && (
        <p className="callback__error" role="alert">
          L’envoi n’a pas fonctionné. Appelez-moi au{" "}
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a> ou écrivez-moi à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}

      <p className="callback__privacy">
        <span aria-hidden="true">* obligatoire. </span>
        Vos coordonnées servent uniquement à vous recontacter. Elles sont
        conservées 3 ans au plus. <a href={LEGAL_HASH}>Mentions légales</a>
      </p>
    </form>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="section contact on-dark"
      aria-labelledby="contact-title"
    >
      <motion.div
        className="hero__blob hero__blob--orange"
        aria-hidden="true"
        style={{ top: "auto", bottom: -260, right: "20%" }}
        initial={{ opacity: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
      />
      <div className="hero__grid" aria-hidden="true" />
      <div className="container contact__inner">
        <Reveal className="contact__intro">
          <p className="eyebrow">Contact</p>
          <h2
            className="contact__title"
            id="contact-title"
            style={{ marginTop: 12 }}
          >
            Parlons de <span className="accent">votre commerce.</span>
          </h2>
          <p className="status-pill contact__signature">
            <span className="status-pill__avatar" aria-hidden="true">
              <img
                src={site.photo.thumb}
                alt=""
                width={32}
                height={32}
                loading="lazy"
              />
              <span className="status-pill__dot" />
            </span>
            {site.firstName}, développeur web depuis 10 ans
          </p>
          <div className="contact__ctas">
            {site.bookingUrl && (
              <a className="btn btn--ghost" href="#rdv" onClick={openBooking}>
                <VideoCamera size={18} aria-hidden="true" />
                Réserver un appel visio
              </a>
            )}
            {/* Sur mobile : appel et SMS en un geste */}
            <a className="btn btn--ghost contact__mobile" href={`tel:${site.phoneHref}`}>
              <Phone size={18} aria-hidden="true" />
              Appeler
            </a>
            <a className="btn btn--ghost contact__mobile" href={`sms:${site.phoneHref}`}>
              <ChatText size={18} aria-hidden="true" />
              SMS
            </a>
          </div>
          <ul className="contact__list">
            <li>
              <Phone size={18} aria-hidden="true" />
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </li>
            <li>
              <EnvelopeSimple size={18} aria-hidden="true" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <LinkedinLogo size={18} aria-hidden="true" />
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
            <li>
              <InstagramLogo size={18} aria-hidden="true" />
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">
                Instagram<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="contact__form" as="div">
          <CallbackForm />
        </Reveal>
        <Reveal className="contact__booking" as="div">
          <Booking />
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer on-dark">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {site.brand} · {site.name}
        </p>
        <p>TVA non applicable, art. 293 B du CGI.</p>
        <p className="footer__links">
          <a href={GUIDES_PATH}>Guides</a>
          <a href={LEGAL_HASH}>Mentions légales</a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn<span className="sr-only"> (nouvel onglet)</span>
          </a>
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram<span className="sr-only"> (nouvel onglet)</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
