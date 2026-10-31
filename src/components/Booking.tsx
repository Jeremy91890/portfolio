import { useEffect, useState } from "react";
import { ArrowSquareOut, CalendarCheck } from "@phosphor-icons/react";
import { legal, site } from "../data/site";
import { LEGAL_HASH } from "./Legal";

// Calendrier cal.com intégré, chargé seulement au clic : tant que le visiteur ne le demande pas,
// aucun script ni cookie tiers n'arrive sur le site (pas de bandeau cookies nécessaire).

const EMBED_SRC = "https://app.cal.com/embed/embed.js";
const NAMESPACE = "rdv";
const CONTAINER_ID = "rdv-calendrier";
const LOAD_EVENT = "nappage:rdv";
// Si cal.com ne signale pas qu'il est prêt, on retire quand même le message de chargement
const READY_FALLBACK_MS = 10000;

/** Affiche le calendrier (bouton « Réserver un appel visio » de la section Contact) */
export const openBooking = () => window.dispatchEvent(new Event(LOAD_EVENT));

/** Lien cal.com sans le domaine : cal.com/jeremy.nappage → jeremy.nappage */
const calLink = (url: string) => url.replace(/^https?:\/\/(app\.)?cal\.com\//, "");

type CalApi = ((...args: unknown[]) => void) & {
  q: unknown[];
  ns: Record<string, CalApi>;
  loaded?: boolean;
};

/** Équivalent du code d'intégration fourni par cal.com : met les appels en file le temps que embed.js arrive */
function getCal(onError: () => void): CalApi {
  const w = window as unknown as { Cal?: CalApi };
  if (w.Cal) return w.Cal;

  const queue = (api: CalApi, args: unknown[]) => api.q.push(args);
  const Cal = function (...args: unknown[]) {
    if (!Cal.loaded) {
      Cal.ns = {};
      Cal.q = Cal.q || [];
      const script = document.createElement("script");
      script.src = EMBED_SRC;
      script.async = true;
      script.onerror = onError;
      document.head.appendChild(script);
      Cal.loaded = true;
    }
    if (args[0] === "init") {
      const namespace = args[1];
      if (typeof namespace === "string") {
        const api = function (...a: unknown[]) {
          queue(api, a);
        } as CalApi;
        api.q = [];
        Cal.ns[namespace] = Cal.ns[namespace] || api;
        queue(Cal.ns[namespace], args);
        queue(Cal, ["initNamespace", namespace]);
      } else {
        queue(Cal, args);
      }
      return;
    }
    queue(Cal, args);
  } as CalApi;
  Cal.q = [];
  Cal.ns = {};
  w.Cal = Cal;
  return Cal;
}

type Status = "idle" | "loading" | "ready" | "error";

export default function Booking() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    const onOpen = () => setStatus((s) => (s === "idle" ? "loading" : s));
    window.addEventListener(LOAD_EVENT, onOpen);
    return () => window.removeEventListener(LOAD_EVENT, onOpen);
  }, []);

  useEffect(() => {
    if (status !== "loading") return;
    const fail = () => setStatus("error");
    const ready = () => setStatus((s) => (s === "loading" ? "ready" : s));
    const Cal = getCal(fail);
    Cal("init", NAMESPACE, { origin: "https://cal.com" });
    const cal = Cal.ns[NAMESPACE];
    cal("inline", {
      elementOrSelector: `#${CONTAINER_ID}`,
      calLink: calLink(site.bookingUrl),
      config: { layout: "month_view", theme: "light" },
    });
    cal("ui", {
      theme: "light",
      layout: "month_view",
      hideEventTypeDetails: false,
      cssVarsPerTheme: { light: { "cal-brand": "#14213d" } },
    });
    cal("on", { action: "linkReady", callback: ready });
    cal("on", { action: "linkFailed", callback: fail });
    const timer = window.setTimeout(ready, READY_FALLBACK_MS);
    return () => window.clearTimeout(timer);
  }, [status]);

  if (!site.bookingUrl) return null;

  const external = (
    <a href={site.bookingUrl} target="_blank" rel="noopener noreferrer">
      réserver directement sur cal.com
      <ArrowSquareOut size={14} aria-hidden="true" />
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  );

  return (
    <section id="rdv" className="booking" aria-labelledby="rdv-title">
      <div className="booking__head">
        <CalendarCheck className="booking__icon" size={36} weight="duotone" aria-hidden="true" />
        <div>
          <h3 id="rdv-title" className="booking__title">
            Réserver un appel visio
          </h3>
          <p className="booking__lead">
            Choisissez le créneau qui vous arrange : on fait connaissance et vous me parlez de votre commerce.
          </p>
        </div>
      </div>

      {status === "idle" && (
        <div className="booking__gate">
          <button className="btn" type="button" onClick={() => setStatus("loading")}>
            Voir mes disponibilités
          </button>
          <p className="booking__note">
            Le calendrier est fourni par {legal.booking.name} ({legal.booking.location}) et ne se charge que si vous
            cliquez. Vous pouvez aussi {external}. <a href={LEGAL_HASH}>Mentions légales</a>
          </p>
        </div>
      )}

      {status === "error" && (
        <p className="booking__error" role="alert">
          Le calendrier n’a pas pu s’afficher. Vous pouvez {external}, ou m’appeler au{" "}
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>.
        </p>
      )}

      {(status === "loading" || status === "ready") && (
        <>
          {status === "loading" && (
            <p className="booking__loading" role="status">
              Chargement du calendrier…
            </p>
          )}
          <div id={CONTAINER_ID} className="booking__cal" />
          <p className="booking__note">Le calendrier ne s’affiche pas bien ? Vous pouvez {external}.</p>
        </>
      )}
    </section>
  );
}
