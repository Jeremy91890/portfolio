import { GuideLink, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi un site quand on a déjà une plateforme de réservation et Instagram ?',
  reservation: 'Où placer la prise de rendez-vous ?',
  tarifs: 'Faut-il afficher ses tarifs sur son site ?',
  photos: 'Quelles photos mettre sur le site d’un salon ?',
  equipe: 'Faut-il présenter son équipe et ses spécialités ?',
  google: 'Comment faire ressortir son salon sur Google ?',
  prix: 'Combien coûte le site d’un salon de coiffure ?',
});

export default function Body() {
  return (
    <>
      <p>
        Avant de prendre rendez-vous chez un coiffeur qu’on ne connaît pas, on regarde ses tarifs et des photos de ses
        coupes, puis on cherche un créneau dans la semaine.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Sur une plateforme de réservation, votre salon apparaît au milieu de ceux du quartier, avec la mise en page et les
        règles de la plateforme. Instagram montre vos coupes mais ni vos tarifs ni vos horaires, et Google le lit mal. Votre
        site ne parle que de votre salon, répond aux questions d’un nouveau client et l’envoie vers la réservation. Ce que
        chacun fait de mieux est détaillé dans <GuideLink slug="site-web-ou-instagram">site web ou Instagram</GuideLink>.
      </p>

      <Question id="reservation" />
      <p>En haut de chaque page, pour qu’on n’ait jamais à la chercher.</p>
      <ul>
        <li>
          si vous utilisez déjà un outil de réservation en ligne, le bouton mène directement à votre page, pas à
          l’accueil de la plateforme ;
        </li>
        <li>sinon, un numéro de téléphone qu’on peut toucher pour appeler suffit, avec vos horaires d’ouverture à côté ;</li>
        <li>précisez si vous prenez les clients sans rendez-vous, et à quels moments.</li>
      </ul>

      <Question id="tarifs" />
      <p>
        Oui. Un client veut savoir combien il va payer avant de s’asseoir, et un salon qui cache ses prix le fait hésiter.
        Reprenez la grille affichée au salon :
      </p>
      <ul>
        <li>par catégorie : femme, homme, enfant, barbe, coloration, soins ;</li>
        <li>avec des prix « à partir de » quand le tarif dépend de la longueur des cheveux, et ce qui le fait varier ;</li>
        <li>avec la durée des prestations longues (balayage, lissage, mèches) ;</li>
        <li>avec vos forfaits mariage ou événement, si vous en proposez.</li>
      </ul>

      <Question id="photos" />
      <p>
        Vos coupes, vos colorations et l’intérieur du salon : on choisit un coiffeur dont on aime le style. Demandez l’accord
        de vos clients avant de publier une photo où on les reconnaît. Si vous publiez déjà sur Instagram, le site peut
        reprendre vos meilleures photos et renvoyer vers votre compte.
      </p>

      <Question id="equipe" />
      <p>
        Oui, avec le prénom, une photo et la spécialité de chacun : coloriste, coupes courtes, cheveux bouclés, barbier,
        coiffures de mariée. Ces mots servent aussi à Google. Si quelqu’un cherche « coloriste » ou « coiffeur cheveux
        bouclés » dans votre ville et qu’ils ne figurent pas sur votre site, Google ne vous proposera pas.
      </p>

      <Question id="google" />
      <ul>
        <li>
          une fiche Google Maps complète, avec la bonne catégorie, vos horaires, des photos et le lien de réservation (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>
          des avis récents, que vous pouvez demander en fin de rendez-vous avec un QR code au comptoir (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>) ;
        </li>
        <li>votre métier, vos spécialités et votre ville écrits dans les titres et les textes du site ;</li>
        <li>votre jour de fermeture bien indiqué, car beaucoup de clients cherchent un salon ouvert le lundi.</li>
      </ul>

      <Question id="prix" />
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient à la plupart des salons : trois pages
        (accueil, prestations et tarifs, équipe et réalisations), votre fiche Google remise au propre et un QR code pour vos
        avis. Le lien vers votre outil de réservation est inclus dans toutes les formules.
      </p>
      <p>
        J’écris les textes, je m’occupe de l’hébergement et du nom de domaine, et je mets à jour vos tarifs quand ils
        changent. Pour les délais, voyez{' '}
        <GuideLink slug="creer-site-boutique-rapidement">mettre en ligne le site de sa boutique rapidement</GuideLink>.
      </p>
    </>
  );
}
