import { Callout, GuideLink, Source, questions } from './shared';

const { Summary, Question } = questions(
  {
    criteres: 'Comment Google choisit les commerces qu’il affiche',
    fiche: 'Soigner votre fiche Google Maps',
    avis: 'Récolter des avis, et y répondre',
    site: 'Avoir un site qui confirme tout ça',
    promesses: 'Ce qu’on ne peut pas vous promettre',
    offre: 'Ce que j’inclus dans mes formules',
  },
  { title: 'Au sommaire' },
);

export default function Body() {
  return (
    <>
      <p>
        Quand quelqu’un cherche « boulangerie » ou « plombier » près de chez lui, Google affiche une carte avec trois
        commerces, au-dessus des sites web. Le référencement local consiste à faire partie de ces trois-là. Pour un commerce
        de quartier, c’est bien plus accessible que de ressortir sur toute la France.
      </p>

      <Summary />


      <Question id="criteres" />
      <p>
        Google l’explique lui-même (
        <Source href="https://support.google.com/business/answer/7091?hl=fr">
          Améliorer votre classement local sur Google
        </Source>
        ). Il tient compte de la pertinence (votre commerce correspond-il à ce que la personne cherche ?), de la distance
        (êtes-vous près d’elle, ou de la ville qu’elle a tapée ?) et de l’importance (votre commerce est-il connu, cité,
        bien noté ?).
      </p>
      <p>Vous ne pouvez rien changer à la distance. Les deux autres critères, eux, dépendent beaucoup de vous.</p>

      <Question id="fiche" />
      <p>
        La fiche d’établissement Google est gratuite, et c’est elle qui apparaît sur la carte. Si vous ne l’avez jamais
        réclamée, elle existe peut-être déjà, créée sans vous et avec des infos fausses.
      </p>
      <ul>
        <li>choisissez la bonne catégorie principale (« Boulangerie », pas « Magasin ») ;</li>
        <li>renseignez vos horaires, et pensez aux horaires exceptionnels des jours fériés et des vacances ;</li>
        <li>ajoutez de vraies photos : la devanture, l’intérieur, vos produits, votre équipe ;</li>
        <li>écrivez une description qui dit ce que vous faites et où ;</li>
        <li>mettez le lien vers votre site ;</li>
        <li>publiez de temps en temps une actualité : nouveauté, événement, offre.</li>
      </ul>

      <Question id="avis" />
      <p>
        Le nombre d’avis, leur note et leur fraîcheur comptent dans l’importance que Google vous accorde, et vos futurs
        clients les regardent aussi. Toutes les astuces sont dans le guide{' '}
        <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>.
      </p>

      <Question id="site" />
      <p>Votre site aide Google à comprendre ce que vous faites. Pour le référencement local, il doit :</p>
      <ul>
        <li>indiquer votre métier et votre ville dans le titre et les textes, avec des mots simples ;</li>
        <li>afficher les mêmes nom, adresse et téléphone que votre fiche Google, au caractère près ;</li>
        <li>donner vos horaires et votre adresse dans un format que Google sait lire (les « données structurées ») ;</li>
        <li>être rapide et lisible sur téléphone, là où se font la plupart des recherches locales.</li>
      </ul>
      <p>
        Vérifiez aussi que votre nom, votre adresse et votre téléphone sont identiques partout ailleurs : annuaires,
        réseaux sociaux, sites de réservation. Quand les infos diffèrent d’un site à l’autre, Google ne sait plus lesquelles
        croire.
      </p>

      <Question id="promesses" />
      <Callout tone="warning" title="Méfiez-vous des promesses">
        <p>
          Personne ne peut garantir la première place sur Google, et un prestataire qui vous la promet vous raconte des
          histoires.
        </p>
      </Callout>
      <p>
        On peut en revanche mettre toutes les chances de votre côté, puis entretenir votre fiche dans la durée.
      </p>

      <Question id="offre" />
      <ul>
        <li>
          Dans toutes les formules, le référencement Google de base sur votre site : titres, descriptions, données
          structurées, plan du site envoyé à Google.
        </li>
        <li>En Pro, votre fiche Google Maps mise au propre à la mise en ligne, et un QR code pour vos avis.</li>
        <li>
          En Premium, votre fiche suivie chaque mois : horaires spéciaux, photos, une publication Google par mois.
        </li>
      </ul>
      <p>
        Votre commerce n’a pas encore de site ? Commencez par{' '}
        <GuideLink slug="pourquoi-creer-un-site-pour-son-commerce">pourquoi créer un site pour son commerce</GuideLink>.
      </p>
    </>
  );
}
