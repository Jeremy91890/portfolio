import { GuideLink, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        On choisit un restaurant sur son téléphone, souvent dans la rue ou une heure avant de sortir. Les questions sont
        toujours les mêmes : qu’est-ce qu’on mange, combien ça coûte, est-ce ouvert ce soir, et peut-on réserver. Voici ce
        que le site d’un restaurant, d’un café ou d’un traiteur doit montrer pour remplir les tables.
      </p>

      <h2>Votre carte, lisible sur téléphone</h2>
      <p>
        C’est la page la plus consultée. Une photo floue de la carte ou un PDF qu’il faut zoomer fait fuir : on referme et
        on passe au restaurant suivant.
      </p>
      <ul>
        <li>la carte écrite en texte, avec les prix, lisible sans zoomer ;</li>
        <li>vos formules du midi et votre menu du jour, ou au moins leur prix et leur principe ;</li>
        <li>les plats végétariens, sans gluten ou adaptés aux enfants, si vous en proposez ;</li>
        <li>une carte tenue à jour : un plat qui n’existe plus déçoit dès la commande.</li>
      </ul>
      <p>
        La mention « fait maison » est encadrée par la loi : elle est réservée aux plats préparés sur place à partir de
        produits bruts. Si vos plats y ont droit, reprenez-la sur votre carte en ligne, c’est un vrai argument.
      </p>

      <h2>La réservation, en un geste</h2>
      <ul>
        <li>un bouton « Réserver » en haut de chaque page, vers votre outil de réservation ou votre téléphone ;</li>
        <li>vos jours et heures de service, midi et soir, et votre jour de fermeture ;</li>
        <li>les groupes et les privatisations : jusqu’à combien de couverts, et comment vous contacter.</li>
      </ul>

      <h2>L’ambiance, en photo</h2>
      <p>
        On réserve autant pour l’endroit que pour l’assiette. Montrez la salle, la terrasse s’il y en a une, quelques plats
        phares et l’équipe en cuisine. De vraies photos, même prises avec un bon téléphone, valent mieux que des images de
        banque d’images.
      </p>

      <h2>Les infos pratiques qu’on oublie</h2>
      <ul>
        <li>l’adresse avec un lien vers l’itinéraire, le parking le plus proche et les transports ;</li>
        <li>l’accessibilité en fauteuil roulant ;</li>
        <li>la vente à emporter ou la livraison, si vous la proposez, et comment commander ;</li>
        <li>vos congés annuels, annoncés à l’avance.</li>
      </ul>

      <h2>Ressortir sur Google quand on cherche où manger</h2>
      <p>
        « Restaurant italien », « brunch », « restaurant ouvert dimanche soir » : ces recherches se font près de chez soi,
        et Google affiche d’abord une carte avec trois établissements.
      </p>
      <ul>
        <li>
          votre fiche Google Maps doit être complète : type de cuisine, horaires, photos, lien vers votre carte et vers la
          réservation (voir <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>votre type de cuisine et votre ville doivent apparaître dans les titres et les textes du site ;</li>
        <li>
          les avis pèsent lourd dans la restauration : demandez-les en fin de repas avec un QR code sur l’addition (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <h2>Le site d’un restaurant avec Nappage Studio</h2>
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient à la plupart des restaurants : trois pages
        (accueil, carte, infos pratiques et réservation), votre fiche Google remise au propre et un QR code pour vos avis.
        Vous pouvez modifier votre carte vous-même, ou me l’envoyer et je la mets à jour.
      </p>
      <p>
        Vous publiez déjà vos plats sur Instagram ? Voyez ce que le site apporte en plus dans{' '}
        <GuideLink slug="site-web-ou-instagram">site web ou Instagram</GuideLink>.
      </p>
    </>
  );
}
