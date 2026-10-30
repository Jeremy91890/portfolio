import { GuideLink, pricing, questions } from './shared';

const { Summary, Question } = questions(
  {
    preparer: 'Ce qu’il faut préparer',
    etapes: 'Les étapes, jour après jour',
    verifier: 'Ce qu’il faut vérifier, même pressé',
    presence: 'Et si je veux juste être présent tout de suite ?',
  },
  { title: 'Au sommaire' },
);

export default function Body() {
  return (
    <>
      <p>
        Vous ouvrez dans quinze jours, ou vous venez de réaliser que votre commerce n’existe pas sur internet. Un site
        vitrine peut être en ligne en une semaine. Le délai dépend surtout de vos contenus, car la partie technique va
        vite.
      </p>

      <Summary />


      <Question id="preparer" />
      <p>Plus ces éléments sont prêts, plus tout va vite :</p>
      <ul>
        <li>votre logo, si vous en avez un (sinon, votre nom bien écrit suffit pour commencer) ;</li>
        <li>une dizaine de photos : la devanture, l’intérieur, vos produits ou votre travail ;</li>
        <li>vos horaires, votre adresse, votre téléphone et votre e-mail ;</li>
        <li>la liste de vos produits ou prestations, avec les prix si vous souhaitez les afficher ;</li>
        <li>le nom de domaine que vous aimeriez (votre-commerce.fr), avec une ou deux idées de secours ;</li>
        <li>les liens vers vos réseaux sociaux et votre fiche Google ;</li>
        <li>deux ou trois sites que vous aimez, même d’autres métiers, pour donner le ton.</li>
      </ul>
      <p>
        Pas de photos ? Celles prises en plein jour avec un téléphone récent font très bien l’affaire. Pour les textes, je
        les rédige à partir d’un simple échange avec vous.
      </p>

      <Question id="etapes" />
      <ol>
        <li>On fait connaissance en visio (20 minutes) : vous me parlez de votre commerce, on choisit la formule.</li>
        <li>
          Je rédige vos textes et je conçois le site. Vous validez chaque étape, et vous demandez autant d’ajustements que
          nécessaire.
        </li>
        <li>
          Votre site est en ligne <strong>{pricing.launchDays} jours</strong> après la validation de vos contenus, avec{' '}
          {pricing.setupFee} € de mise en place.
        </li>
        <li>Ensuite, je m’occupe des mises à jour et des modifications selon votre formule.</li>
      </ol>

      <Question id="verifier" />
      <ul>
        <li>
          un vrai nom de domaine à votre nom, plutôt qu’une adresse du type votre-commerce.outil-gratuit.com qui fait
          amateur et que vous ne pourrez pas emporter ;
        </li>
        <li>un site lisible sur téléphone (testez-le vous-même avant de l’annoncer) ;</li>
        <li>des mentions légales, obligatoires pour un site professionnel ;</li>
        <li>des photos dont vous avez les droits : les vôtres, ou des photos libres de droits ;</li>
        <li>un titre et une description qui disent à Google ce que vous faites et où.</li>
      </ul>
      <p>
        Tout ça est inclus dans mes formules. Le jour de la mise en ligne, ajoutez aussi le lien du site sur votre fiche
        Google et vos réseaux (voir <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>
        ).
      </p>

      <Question id="presence" />
      <p>
        Une seule page claire suffit pour démarrer : c’est la formule Essentiel. Vous pourrez passer à une formule plus
        complète plus tard, sans tout refaire. Pour comparer, lisez{' '}
        <GuideLink slug="prix-site-web-commercant">combien coûte un site web pour un commerçant</GuideLink>.
      </p>
    </>
  );
}
