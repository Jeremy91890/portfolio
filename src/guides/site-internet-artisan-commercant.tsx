import { GuideLink, plan, pricing } from "./shared";

export default function Body() {
  return (
    <>
      <p>
        Le client qui ouvre le site d’un artisan ou d’un commerçant cherche une
        info précise, et il veut la trouver en quelques secondes. Cette info
        change d’un métier à l’autre.
      </p>

      <h2>Boulangerie, pâtisserie</h2>
      <ul>
        <li>
          vos horaires et vos jours de fermeture, bien visibles et toujours à
          jour ;
        </li>
        <li>vos spécialités et vos pains, avec de belles photos ;</li>
        <li>
          les commandes de gâteaux et de pièces montées : comment commander,
          dans quel délai ;
        </li>
        <li>
          vos horaires spéciaux pour les fêtes, là où les clients les cherchent.
        </li>
      </ul>

      <h2>Salon de coiffure, institut de beauté</h2>
      <ul>
        <li>vos prestations et vos tarifs, clairement présentés ;</li>
        <li>
          un bouton de réservation en ligne, visible dès l’arrivée sur le site ;
        </li>
        <li>des photos de vos réalisations et de votre salon ;</li>
        <li>
          votre équipe, pour que les clients sachent à qui ils auront affaire.
        </li>
      </ul>

      <h2>Restaurant, café, traiteur</h2>
      <ul>
        <li>
          votre carte et vos menus à jour, lisibles sur téléphone (pas un PDF
          qu’il faut zoomer) ;
        </li>
        <li>la réservation, par téléphone ou en ligne ;</li>
        <li>l’accès : parking, transports, accessibilité.</li>
      </ul>

      <h2>Artisan du bâtiment : plombier, électricien, menuisier…</h2>
      <ul>
        <li>votre zone d’intervention, avec les communes que vous couvrez ;</li>
        <li>
          un numéro de téléphone qu’on peut toucher pour appeler, en haut de
          chaque page ;
        </li>
        <li>un formulaire de demande de devis simple ;</li>
        <li>des photos de chantiers avant et après ;</li>
        <li>
          vos qualifications et vos assurances, qui rassurent avant de faire
          entrer quelqu’un chez soi.
        </li>
      </ul>

      <h2>Boutique, fleuriste, commerce de proximité</h2>
      <ul>
        <li>ce que l’on trouve chez vous, avec des photos de vos produits ;</li>
        <li>la livraison ou le retrait en boutique, si vous le proposez ;</li>
        <li>
          vos événements : ventes privées, ateliers, nouvelles collections.
        </li>
      </ul>

      <h2>Ce qui compte pour tous les métiers</h2>
      <p>
        Le site doit être rapide et lisible sur téléphone, puisque c’est là que
        la plupart de vos clients le consultent. Votre métier et votre ville
        doivent apparaître dans les textes pour ressortir sur Google (voir{" "}
        <GuideLink slug="referencement-local-google-maps">
          le référencement local
        </GuideLink>
        ). Et les infos doivent être à jour : un site qui affiche les horaires
        de l’an dernier envoie des clients devant une porte fermée.
      </p>

      <h2>Un site clé en main pour artisan, ça veut dire quoi ?</h2>
      <p>
        « Clé en main », c’est que vous n’avez rien à faire de technique. Chez
        Nappage Studio, je rédige vos textes, je crée le site, et je m’occupe du
        nom de domaine, de l’hébergement, de la sécurité et des mises à jour.
        Quand vos horaires changent, vous me prévenez et je les mets à jour.
      </p>
      <p>
        C’est à partir de <strong>{plan("essentiel").price} €/mois</strong>,
        avec {pricing.setupFee} € de mise en place. La formule Pro (
        <strong>{plan("pro").price} €/mois</strong>) convient à la plupart des
        artisans : 3 pages, fiche Google mise au propre et QR code pour vos
        avis. Pour la prise de rendez-vous, le click & collect ou une carte de
        fidélité, je développe l’outil sur devis, en plus de la formule.
      </p>
      <p>
        Pour les délais, tout est dans{" "}
        <GuideLink slug="creer-site-boutique-rapidement">
          mettre en ligne le site de sa boutique rapidement
        </GuideLink>
        .
      </p>
    </>
  );
}
