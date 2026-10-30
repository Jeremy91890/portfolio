import { GuideLink, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        Avant de prendre rendez-vous chez un nouveau coiffeur, on regarde trois choses : les tarifs, des photos de coupes,
        et s’il y a un créneau cette semaine. Si votre salon ne répond pas à ces questions en quelques secondes, le client
        passe au suivant. Voici ce que le site d’un salon de coiffure ou d’un barbier doit contenir.
      </p>

      <h2>La prise de rendez-vous, visible partout</h2>
      <p>
        C’est l’action que vous attendez de vos visiteurs : le bouton doit être en haut de chaque page, sans avoir à le
        chercher.
      </p>
      <ul>
        <li>
          si vous utilisez déjà un outil de réservation en ligne, le bouton mène directement à votre page, pas à
          l’accueil de la plateforme ;
        </li>
        <li>sinon, un numéro de téléphone qu’on peut toucher pour appeler suffit, avec vos horaires d’ouverture à côté ;</li>
        <li>précisez si vous prenez les clients sans rendez-vous, et à quels moments.</li>
      </ul>
      <p>
        Une plateforme de réservation ne remplace pas votre site : vous y êtes présenté au milieu des autres salons du
        quartier, avec leur mise en page et leurs règles. Votre site ne parle que de vous, et il renvoie vers la
        réservation au bon moment.
      </p>

      <h2>Vos prestations et vos tarifs, sans mauvaise surprise</h2>
      <p>
        Les clients veulent savoir combien ils vont payer avant de s’asseoir. Reprenez la grille affichée dans votre
        salon, présentée simplement :
      </p>
      <ul>
        <li>par catégorie : femme, homme, enfant, barbe, coloration, soins ;</li>
        <li>avec des prix « à partir de » quand le tarif dépend de la longueur des cheveux, et ce qui le fait varier ;</li>
        <li>avec la durée des prestations longues (balayage, lissage, mèches) ;</li>
        <li>avec vos forfaits mariage ou événement, si vous en proposez.</li>
      </ul>

      <h2>Des photos de vos réalisations et de votre salon</h2>
      <p>
        En coiffure, les photos font la décision. Montrez vos coupes, vos colorations et l’ambiance du salon : on choisit
        un coiffeur dont on aime le style. Demandez toujours l’accord de vos clients avant de publier une photo où on les
        reconnaît.
      </p>
      <p>
        Vous publiez déjà tout ça sur Instagram ? Tant mieux, le site peut en reprendre le meilleur et renvoyer vers votre
        compte. Ce que chacun fait mieux que l’autre est expliqué dans{' '}
        <GuideLink slug="site-web-ou-instagram">site web ou Instagram</GuideLink>.
      </p>

      <h2>Votre équipe et vos spécialités</h2>
      <p>
        Présentez les coiffeurs du salon avec leur prénom, une photo et leur spécialité : coloriste, coupes courtes,
        cheveux bouclés, barbier, coiffures de mariée. Un client qui cherche « coloriste » ou « coiffeur cheveux bouclés »
        dans votre ville doit trouver ces mots sur votre site, sinon Google ne peut pas vous proposer.
      </p>

      <h2>Ressortir sur Google quand on cherche un coiffeur près de chez soi</h2>
      <ul>
        <li>
          une fiche Google Maps complète, avec la bonne catégorie, vos horaires, des photos et le lien de réservation (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>
          des avis récents, que vous pouvez demander en fin de rendez-vous avec un QR code au comptoir (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>) ;
        </li>
        <li>votre métier, vos spécialités et votre ville écrits dans les titres et les textes du site ;</li>
        <li>le jour de fermeture bien indiqué : beaucoup de clients cherchent un salon ouvert le lundi.</li>
      </ul>

      <h2>Le site d’un salon de coiffure avec Nappage Studio</h2>
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient à la plupart des salons : trois pages
        (accueil, prestations et tarifs, équipe et réalisations), votre fiche Google remise au propre et un QR code pour vos
        avis. Le lien vers votre outil de réservation est inclus dans toutes les formules.
      </p>
      <p>
        J’écris les textes, je m’occupe de l’hébergement et du nom de domaine, et je mets à jour vos tarifs quand ils
        changent. Pour le détail des délais, voyez{' '}
        <GuideLink slug="creer-site-boutique-rapidement">mettre en ligne le site de sa boutique rapidement</GuideLink>.
      </p>
    </>
  );
}
