import { Callout, GuideLink, pricing, questions } from './shared';

const { Summary, Question } = questions(
  {
    pourquoi: 'Pourquoi une newsletter marche pour un commerce local',
    contenu: 'Quoi mettre dans votre newsletter',
    rythme: 'À quel rythme l’envoyer ?',
    adresses: 'Collecter les adresses, dans les règles',
    offre: 'Ce que je propose',
  },
  { title: 'Au sommaire' },
);

export default function Body() {
  return (
    <>
      <p>
        Faire revenir un client qui vous connaît demande moins d’efforts que d’en trouver un nouveau. Une newsletter est un
        moyen simple et peu cher d’y arriver.
      </p>

      <Summary />


      <Question id="pourquoi" />
      <p>
        Elle arrive directement dans la boîte mail de vos clients, sans algorithme qui décide qui la verra, comme sur les
        réseaux sociaux. Elle s’adresse à des gens qui vous connaissent déjà et ont choisi de recevoir de vos nouvelles. Et
        elle tombe au moment que vous choisissez : avant les fêtes, au début des soldes, à l’arrivée de la nouvelle saison.
      </p>

      <Question id="contenu" />
      <ul>
        <li>vos nouveautés : produits, prestations, carte de saison ;</li>
        <li>une offre réservée aux abonnés, de temps en temps ;</li>
        <li>vos événements : dégustation, atelier, vente privée ;</li>
        <li>vos horaires de fêtes ou de vacances ;</li>
        <li>un peu de coulisses : un nouveau collègue, un fournisseur, une recette.</li>
      </ul>
      <p>
        Gardez-la courte : un sujet principal, une belle photo, un lien vers votre site. Vos clients doivent pouvoir la lire
        en trente secondes.
      </p>

      <Question id="rythme" />
      <p>
        Une fois par mois suffit largement pour un commerce de proximité : on pense à vous sans se lasser. Comptez surtout
        sur la régularité. Une newsletter tous les mois vaut mieux que trois en janvier, puis plus rien.
      </p>

      <Question id="adresses" />
      <p>Où récolter les adresses e-mail :</p>
      <ul>
        <li>un formulaire d’inscription sur votre site ;</li>
        <li>en caisse, au moment du passage, avec une phrase simple ;</li>
        <li>un QR code près du comptoir qui mène au formulaire ;</li>
        <li>avec votre carte de fidélité.</li>
      </ul>
      <Callout tone="law" title="Ce que dit la CNIL">
        <p>
          Vos clients doivent avoir accepté de recevoir vos e-mails, ou, pour un client qui vous a
        déjà acheté quelque chose, avoir été informé et avoir pu refuser au moment où il vous a donné son adresse. Chaque
        e-mail doit contenir un lien pour se désinscrire facilement. Et n’achetez jamais de fichiers d’adresses.
        </p>
      </Callout>

      <Question id="offre" />
      <p>
        Une fois par mois, j’écris et j’envoie un e-mail à vos clients pour les faire revenir : nouveautés, offres,
        horaires. Vous me dites simplement ce que vous voulez mettre en avant. C’est en option à{' '}
        <strong>{pricing.options.newsletterPerMonth} €/mois</strong> en Essentiel et Pro, et inclus en Premium.
      </p>
      <p>
        Pensez aussi à glisser dans votre newsletter le lien vers vos avis Google : c’est un bon moment pour en demander
        (voir <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
      </p>
    </>
  );
}
