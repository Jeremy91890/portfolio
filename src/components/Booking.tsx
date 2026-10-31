import { useState, type MouseEvent } from "react";
import { VideoCamera } from "@phosphor-icons/react";
import { site } from "../data/site";

// Bouton « Réserver un appel visio » : ouvre le calendrier cal.com en fenêtre par-dessus la page.
// Le script cal.com n'est chargé qu'au clic : avant, aucun script ni cookie tiers (pas de bandeau cookies).
// Sans JavaScript, le bouton reste un lien vers cal.com (nouvel onglet).

const EMBED_SRC = "https://app.cal.com/embed/embed.js";
const NAMESPACE = "rdv";

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

export default function BookingButton({ className = "btn btn--ghost" }: { className?: string }) {
  const [failed, setFailed] = useState(false);
  if (!site.bookingUrl) return null;

  const open = (e: MouseEvent<HTMLAnchorElement>) => {
    // Le script cal.com n'a pas pu se charger : on laisse le lien ouvrir cal.com normalement
    if (failed) return;
    e.preventDefault();
    const Cal = getCal(() => setFailed(true));
    const firstOpen = !Cal.ns[NAMESPACE];
    if (firstOpen) Cal("init", NAMESPACE, { origin: "https://cal.com" });
    const cal = Cal.ns[NAMESPACE];
    if (firstOpen) {
      cal("ui", {
        theme: "light",
        layout: "month_view",
        hideEventTypeDetails: false,
        cssVarsPerTheme: { light: { "cal-brand": "#14213d" } },
      });
    }
    cal("modal", {
      calLink: calLink(site.bookingUrl),
      config: { layout: "month_view", theme: "light" },
    });
  };

  return (
    <>
      <a className={className} href={site.bookingUrl} target="_blank" rel="noopener noreferrer" onClick={open}>
        <VideoCamera size={18} aria-hidden="true" />
        Réserver un appel visio
        <span className="sr-only"> (calendrier de réservation)</span>
      </a>
      {failed && (
        <p className="booking__error" role="alert">
          Le calendrier n’a pas pu s’ouvrir. Cliquez à nouveau sur le bouton pour réserver sur cal.com.
        </p>
      )}
    </>
  );
}
