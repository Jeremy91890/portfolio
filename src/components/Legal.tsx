import { useEffect, useRef } from "react";
import { X } from "@phosphor-icons/react";
import { legal, site } from "../data/site";

export const LEGAL_HASH = "#mentions-legales";

// Fenêtre modale ouverte via l'ancre #mentions-legales (lien du pied de page ou URL directe)
export default function Legal() {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const sync = () => {
      const el = dialog.current;
      if (!el) return;
      if (location.hash === LEGAL_HASH && !el.open) el.showModal();
      if (location.hash !== LEGAL_HASH && el.open) el.close();
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  // Fermeture (Échap, bouton, clic hors du contenu) : on retire l'ancre de l'URL
  const onClose = () => {
    if (location.hash === LEGAL_HASH) {
      history.replaceState(null, "", location.pathname + location.search);
    }
  };

  return (
    <dialog
      ref={dialog}
      className="legal"
      aria-labelledby="legal-title"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
    >
      <div className="legal__head">
        <h2 id="legal-title">Mentions légales</h2>
        <button
          type="button"
          className="legal__close"
          onClick={() => dialog.current?.close()}
        >
          <X size={22} aria-hidden="true" />
          <span className="sr-only">Fermer les mentions légales</span>
        </button>
      </div>

      <div className="legal__body">
        <h3>Éditeur du site</h3>
        <p>
          {site.name}, {legal.status}
          <br />
          {legal.address}
          <br />
          SIRET : {legal.siret}
          <br />
          Téléphone : <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          <br />
          E-mail : <a href={`mailto:${site.email}`}>{site.email}</a>
          <br />
          TVA non applicable, art. 293 B du CGI.
        </p>

        <h3>Directeur de la publication</h3>
        <p>{site.name}</p>

        <h3>Hébergement</h3>
        <p>
          {legal.host.name}
          <br />
          {legal.host.address}
          <br />
          Site web :{" "}
          <a href={legal.host.website} target="_blank" rel="noopener noreferrer">
            vercel.com<span className="sr-only"> (nouvel onglet)</span>
          </a>
        </p>

        <h3>Propriété intellectuelle</h3>
        <p>
          Les textes, photos, logos et éléments graphiques de ce site sont ma
          propriété, sauf mention contraire. Toute reproduction, même partielle,
          est interdite sans mon accord écrit.
        </p>

        <h3>Données personnelles</h3>
        <p>
          Le formulaire « Être rappelé » collecte votre prénom, le nom de votre
          commerce et votre numéro de téléphone, et, si vous les indiquez, votre
          ville, la formule qui vous intéresse, le meilleur moment pour vous
          rappeler et votre message. Ces données servent uniquement à vous
          recontacter et à assurer le suivi de votre demande (base légale : vos
          démarches précontractuelles). Il en va de même si vous me contactez
          par e-mail ou par téléphone.
        </p>
        <p>
          Elles me sont envoyées par e-mail via {legal.mailer.name} (
          {legal.mailer.location}), qui agit uniquement pour mon compte. Elles
          ne sont enregistrées dans aucune base de données du site. Je suis le
          seul destinataire, je les conserve au plus 3 ans après notre dernier
          échange et je ne les transmets à personne. Votre adresse IP est
          utilisée un court instant pour limiter les envois abusifs, sans être
          conservée.
        </p>
        {site.bookingUrl && (
          <p>
            Si vous réservez un appel visio, la réservation passe par le
            calendrier de {legal.booking.name} ({legal.booking.location}),
            affiché sur ce site ou sur le sien, qui recueille votre nom, votre
            adresse e-mail et les informations que vous choisissez d’indiquer,
            pour mon compte. Ces données servent
            uniquement à organiser et préparer notre échange, et sont
            conservées dans les mêmes conditions. Voir sa{" "}
            <a href={legal.booking.privacy} target="_blank" rel="noopener noreferrer">
              politique de confidentialité
              <span className="sr-only"> (nouvel onglet)</span>
            </a>
            .
          </p>
        )}
        <p>
          Conformément au RGPD, vous pouvez accéder à vos données, les corriger
          ou demander leur suppression en m’écrivant à{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a>. Vous pouvez aussi
          adresser une réclamation à la CNIL (
          <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer">
            cnil.fr<span className="sr-only"> (nouvel onglet)</span>
          </a>
          ).
        </p>

        <h3>Cookies</h3>
        <p>
          Ce site n’utilise aucun cookie ni outil de mesure d’audience. Les
          polices de caractères sont hébergées sur le site lui-même : aucune
          donnée n’est envoyée à un service tiers lors de votre visite.
        </p>
        {site.bookingUrl && (
          <p>
            Seule exception : le calendrier de réservation (
            {legal.booking.name}), qui ne se charge que si vous cliquez sur
            « Voir mes disponibilités ». Il peut alors utiliser les cookies et le
            stockage local nécessaires à son fonctionnement, sans mesure
            d’audience de ma part.
          </p>
        )}

        <p className="legal__updated">Dernière mise à jour : {legal.updated}</p>
      </div>
    </dialog>
  );
}
