import { Callout, GuideLink, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi un site quand on a déjà Instagram ?',
  photos: 'Quelles photos mettre sur le site d’une boutique de vêtements ?',
  infos: 'Quelles informations décident de la visite ?',
  marques: 'Faut-il citer les marques que vous vendez ?',
  collections: 'Comment annoncer les nouvelles collections ?',
  vente: 'Faut-il vendre en ligne ?',
  google: 'Comment ressortir sur Google près de chez vos clients ?',
  prix: 'Combien coûte le site d’une boutique de vêtements ?',
});

export default function Body() {
  return (
    <>
      <p>
        On choisit une boutique de vêtements pour son style. Avant de se déplacer, on veut savoir ce que vous vendez, pour
        qui, à quels prix, et si vous avez la marque qu’on aime.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Instagram montre vos nouveautés à ceux qui vous suivent déjà. Le site répond à ceux qui ne vous connaissent pas
        encore, avec vos prix, vos horaires et votre adresse. Google le lit aussi pour vous proposer quand on cherche une
        boutique ou une marque dans votre ville. Le détail est dans{' '}
        <GuideLink slug="site-web-ou-instagram">site web ou Instagram</GuideLink>.
      </p>

      <Question id="photos" />
      <p>
        Les vôtres : vos pièces portées, la vitrine et l’intérieur de la boutique, plutôt que les photos des catalogues des
        marques.
      </p>

      <Question id="infos" />
      <ul>
        <li>pour qui vous habillez : femme, homme, enfant, grandes tailles, mariage, sport ;</li>
        <li>votre gamme de prix, même approximative ;</li>
        <li>les tailles que vous proposez ;</li>
        <li>vos services : retouches, conseil, carte cadeau, mise de côté.</li>
      </ul>

      <Question id="marques" />
      <p>
        Oui. Beaucoup de clients cherchent une marque avant de chercher une boutique, en tapant son nom suivi de leur
        ville. Si vos marques sont citées sur votre site, Google peut vous proposer à ces personnes. Listez-les, et
        signalez celles que vous êtes seul à proposer dans le secteur.
      </p>

      <Question id="collections" />
      <p>
        Arrivages de la saison, ventes privées, soldes, défilés ou soirées en boutique : annoncez-les sur le site et sur
        votre fiche Google, et renvoyez vers votre compte Instagram pour le quotidien.
      </p>

      <Question id="vente" />
      <p>
        Pas forcément. Pour la plupart des boutiques de quartier, un site vitrine suffit à faire venir en boutique, où l’on
        essaie et où vous conseillez. Une boutique en ligne demande de photographier chaque article, de gérer les stocks, les envois et les retours.
      </p>
      <Callout tone="law" title="Ce que dit la loi : 14 jours pour se rétracter">
        <p>Le client qui achète à distance dispose de 14 jours pour se rétracter.</p>
      </Callout>
      <p>
        Pour commencer plus simplement, vous pouvez proposer de réserver un article pour l’essayer en boutique.
      </p>

      <Question id="google" />
      <ul>
        <li>
          une fiche Google Maps complète, avec la bonne catégorie (« Boutique de vêtements pour femmes », par exemple), vos
          horaires et des photos (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>votre type de mode, vos marques et votre ville écrits dans les textes du site ;</li>
        <li>
          des avis récents, à demander en caisse avec un QR code (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <Question id="prix" />
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient à la plupart des boutiques : trois pages
        (accueil, collections et marques, la boutique et ses services), votre fiche Google remise au propre et un QR code
        pour vos avis. Pour la réservation d’articles ou le click & collect, je développe l’outil sur devis.
      </p>
      <p>
        Pour faire revenir vos clientes et vos clients à chaque collection, voyez{' '}
        <GuideLink slug="newsletter-commerce-local">la newsletter pour commerce local</GuideLink>.
      </p>
    </>
  );
}
