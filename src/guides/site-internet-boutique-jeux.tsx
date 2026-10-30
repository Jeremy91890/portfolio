import { GuideLink, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        Face aux grandes surfaces et aux sites de vente en ligne, une boutique de jeux de société ou de jouets a un atout
        qu’ils n’ont pas : le conseil, et souvent un lieu où l’on joue ensemble. Votre site doit le faire savoir. Voici ce
        qu’il doit montrer pour que les familles et les joueurs passent la porte.
      </p>

      <h2>Le conseil, au cœur du site</h2>
      <p>
        Les clients ne savent souvent pas quoi choisir : un jeu pour quatre joueurs, un cadeau pour un enfant de 6 ans, un
        jeu rapide pour l’apéro. Montrez que vous savez les guider :
      </p>
      <ul>
        <li>vos univers : jeux de société, jeux de rôle, cartes à collectionner, jouets, puzzles, jeux en bois ;</li>
        <li>des sélections par âge, par nombre de joueurs ou par occasion, mises à jour de temps en temps ;</li>
        <li>vos coups de cœur du moment, avec deux phrases sur chacun ;</li>
        <li>la possibilité de tester un jeu en boutique, si vous la proposez.</li>
      </ul>

      <h2>Vos animations et vos événements</h2>
      <p>
        Soirées jeux, tournois, avant-premières, après-midi pour les enfants : c’est ce qui fait revenir les clients et ce
        que les sites de vente en ligne ne peuvent pas copier. Tenez un agenda à jour sur le site, avec le prix, le nombre de
        places et comment s’inscrire. Si vous avez un espace de jeu ou un bar à jeux, présentez-le avec ses horaires et
        ses tarifs.
      </p>

      <h2>Les services qui font la différence</h2>
      <ul>
        <li>la commande de jeux que vous n’avez pas en rayon, et le délai habituel ;</li>
        <li>le paquet cadeau et la carte cadeau ;</li>
        <li>les listes d’anniversaire ou de Noël, si vous les gérez ;</li>
        <li>la carte de fidélité, et ce qu’elle rapporte.</li>
      </ul>

      <h2>Noël et les anniversaires</h2>
      <p>
        Les recherches de jouets et de jeux montent fortement avant Noël. Publiez vos sélections et vos horaires de
        décembre dès novembre, sur le site et sur votre fiche Google. Le reste de l’année, les anniversaires d’enfants
        amènent un flux régulier de parents qui cherchent une idée : une page « idées par âge » leur répond.
      </p>

      <h2>Ressortir sur Google près de chez vous</h2>
      <ul>
        <li>
          une fiche Google Maps complète, avec la bonne catégorie, vos horaires et des photos de vos rayons et de l’espace
          de jeu (voir <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>
          « jeux de société », « magasin de jouets », « soirée jeux » et votre ville écrits dans les textes du site ;
        </li>
        <li>
          des avis récents : les joueurs en laissent volontiers après une bonne soirée (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <h2>Le site d’une boutique de jeux avec Nappage Studio</h2>
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient bien : trois pages (accueil, vos univers et
        coups de cœur, animations et agenda), votre fiche Google remise au propre et un QR code pour vos avis. Vous pouvez
        mettre à jour l’agenda vous-même, ou me l’envoyer.
      </p>
      <p>
        Pour annoncer vos soirées et vos nouveautés chaque mois, voyez{' '}
        <GuideLink slug="newsletter-commerce-local">la newsletter pour commerce local</GuideLink>.
      </p>
    </>
  );
}
