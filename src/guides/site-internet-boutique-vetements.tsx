import { GuideLink, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        Une boutique de vêtements se choisit sur son style. Avant de se déplacer, on veut savoir ce que vous vendez, pour
        qui, à quels prix, et si la marque qu’on aime est chez vous. Voici ce que le site d’une boutique de prêt-à-porter
        doit montrer pour donner envie de venir.
      </p>

      <h2>Votre style, en photo</h2>
      <p>
        C’est ce qui fait venir ou passer son chemin. Montrez vos pièces portées, votre vitrine et l’intérieur de la
        boutique, avec de vraies photos plutôt que celles des catalogues des marques. Une silhouette bien choisie en dit
        plus qu’un long texte.
      </p>

      <h2>Les informations qui décident de la visite</h2>
      <ul>
        <li>pour qui vous habillez : femme, homme, enfant, grandes tailles, mariage, sport ;</li>
        <li>votre gamme de prix, même approximative ;</li>
        <li>les tailles que vous proposez ;</li>
        <li>vos services : retouches, conseil, carte cadeau, mise de côté.</li>
      </ul>

      <h2>Les marques que vous distribuez</h2>
      <p>
        Beaucoup de clients cherchent une marque avant de chercher une boutique : « [marque] » suivi de leur ville. Si vos
        marques sont citées sur votre site, Google peut vous proposer à ces personnes-là. Listez-les, et indiquez celles que
        vous êtes seul à proposer dans le secteur.
      </p>

      <h2>Les nouvelles collections et les temps forts</h2>
      <p>
        Arrivages de la saison, ventes privées, soldes, défilés ou soirées en boutique : annoncez-les sur le site et sur
        votre fiche Google. Si vous publiez déjà vos nouveautés sur Instagram, le site peut renvoyer vers votre compte ;
        voyez ce que chacun fait de mieux dans{' '}
        <GuideLink slug="site-web-ou-instagram">site web ou Instagram</GuideLink>.
      </p>

      <h2>Et la vente en ligne ?</h2>
      <p>
        Pour la plupart des boutiques de quartier, un site vitrine suffit : il fait venir en boutique, là où l’on essaie et
        où vous conseillez. Une boutique en ligne demande de photographier chaque article, de gérer les stocks, les envois
        et les retours (le client qui achète à distance dispose de 14 jours pour se rétracter). Si vous voulez commencer
        plus simplement, la réservation d’un article à essayer en boutique est un bon compromis.
      </p>

      <h2>Ressortir sur Google près de chez vos clients</h2>
      <ul>
        <li>
          une fiche Google Maps complète, avec la bonne catégorie (« Boutique de vêtements pour femmes », par exemple), vos
          horaires et des photos (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>votre type de mode, vos marques et votre ville écrits dans les textes du site ;</li>
        <li>
          des avis récents, à demander en caisse avec un QR code (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <h2>Le site d’une boutique de vêtements avec Nappage Studio</h2>
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient à la plupart des boutiques : trois pages
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
