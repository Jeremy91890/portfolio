import { Callout, GuideLink, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi un site quand on est déjà sur Google Maps et les plateformes de réservation ?',
  carte: 'Comment mettre sa carte en ligne ?',
  reservation: 'Comment faire réserver depuis le site ?',
  photos: 'Quelles photos montrer ?',
  pratique: 'Quelles infos pratiques ne pas oublier ?',
  google: 'Comment ressortir sur Google quand on cherche où manger ?',
  prix: 'Combien coûte le site d’un restaurant ?',
});

export default function Body() {
  return (
    <>
      <p>
        On choisit souvent un restaurant sur son téléphone, dans la rue ou une heure avant de sortir. On veut savoir ce
        qu’on va manger, à quel prix, si c’est ouvert ce soir et si on peut réserver.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Sur Google Maps et sur les plateformes, votre restaurant n’a qu’une fiche parmi d’autres, avec peu de place pour la
        carte et votre histoire. Sur votre site, la carte est complète et à jour, on comprend votre cuisine, et le bouton
        de réservation mène chez vous. Google s’en sert aussi pour savoir quel type de cuisine vous servez et vous proposer
        à ceux qui la cherchent.
      </p>

      <Question id="carte" />
      <p>
        En texte, lisible sur téléphone. C’est la page la plus consultée, et devant une photo floue de la carte ou un PDF
        qu’il faut zoomer, on referme et on passe au restaurant suivant.
      </p>
      <ul>
        <li>la carte écrite en texte, avec les prix, lisible sans zoomer ;</li>
        <li>vos formules du midi et votre menu du jour, ou au moins leur prix et leur principe ;</li>
        <li>les plats végétariens, sans gluten ou adaptés aux enfants, si vous en proposez ;</li>
        <li>une carte tenue à jour, parce qu’un plat qui n’existe plus déçoit dès la commande.</li>
      </ul>
      <Callout tone="law" title="Ce que dit la loi : la mention « fait maison »">
        <p>
          Elle est réservée aux plats préparés sur place à partir de produits bruts. Si vos plats y ont droit, reprenez-la
          sur votre carte en ligne.
        </p>
      </Callout>

      <Question id="reservation" />
      <ul>
        <li>un bouton « Réserver » en haut de chaque page, vers votre outil de réservation ou votre téléphone ;</li>
        <li>vos jours et heures de service, midi et soir, et votre jour de fermeture ;</li>
        <li>les groupes et les privatisations : jusqu’à combien de couverts, et comment vous contacter.</li>
      </ul>

      <Question id="photos" />
      <p>
        La salle, la terrasse s’il y en a une, quelques plats phares et l’équipe en cuisine, puisqu’on choisit un
        restaurant pour le lieu autant que pour la cuisine. Des photos prises avec un bon téléphone suffisent, et elles
        valent mieux que des images de banque d’images.
      </p>

      <Question id="pratique" />
      <ul>
        <li>l’adresse avec un lien vers l’itinéraire, le parking le plus proche et les transports ;</li>
        <li>l’accessibilité en fauteuil roulant ;</li>
        <li>la vente à emporter ou la livraison, si vous la proposez, et comment commander ;</li>
        <li>vos congés annuels, annoncés à l’avance.</li>
      </ul>

      <Question id="google" />
      <p>
        « Restaurant italien », « brunch », « restaurant ouvert dimanche soir » : ces recherches se font près de chez soi,
        et Google affiche d’abord une carte avec trois établissements.
      </p>
      <ul>
        <li>
          votre fiche Google Maps doit être complète : type de cuisine, horaires, photos, lien vers votre carte et vers la
          réservation (voir <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>votre type de cuisine et votre ville doivent apparaître dans les titres et les textes du site ;</li>
        <li>
          les avis pèsent lourd dans la restauration, alors demandez-les en fin de repas avec un QR code sur l’addition
          (voir <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <Question id="prix" />
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient à la plupart des restaurants : trois pages
        (accueil, carte, infos pratiques et réservation), votre fiche Google remise au propre et un QR code pour vos avis.
        Vous pouvez modifier votre carte vous-même, ou me l’envoyer et je la mets à jour.
      </p>
      <p>
        Vous publiez déjà vos plats sur Instagram ? Voyez ce que le site apporte en plus dans{' '}
        <GuideLink slug="site-web-ou-instagram">site web ou Instagram</GuideLink>.
      </p>
    </>
  );
}
