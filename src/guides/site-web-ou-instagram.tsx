import { GuideLink, Source } from './shared';

export default function Body() {
  return (
    <>
      <p>
        « J’ai une page Instagram et une page Facebook, mes clients me suivent, pourquoi payer un site ? » La question est
        légitime. Les réseaux sociaux font certaines choses très bien, et d’autres beaucoup moins.
      </p>

      <h2>Ce que les réseaux sociaux font bien</h2>
      <ul>
        <li>montrer votre quotidien : la fournée du matin, la nouvelle collection, l’équipe ;</li>
        <li>garder le lien avec vos habitués, qui likent et commentent ;</li>
        <li>annoncer vite une nouveauté ou un événement ;</li>
        <li>donner une idée de l’ambiance de votre commerce.</li>
      </ul>
      <p>Si vous aimez publier, gardez-les : ils complètent très bien un site.</p>

      <h2>Ce qu’ils font mal</h2>
      <p>
        Ils vous font rarement trouver sur Google. Quand quelqu’un cherche « fleuriste » et sa ville, Google montre des
        fiches et des sites, rarement un compte Instagram.
      </p>
      <p>
        Les infos pratiques s’y perdent. Vos horaires, vos tarifs et votre adresse sont noyés entre les publications, et le
        client doit fouiller. Une partie de vos clients n’a d’ailleurs pas de compte, et sans compte on ne voit pas
        grand-chose.
      </p>
      <p>
        Surtout, votre page ne vous appartient pas. L’algorithme décide qui voit vos publications, les règles changent sans
        prévenir, et un compte piraté ou suspendu peut emporter des années de travail.
      </p>

      <h2>Un site, c’est votre adresse sur internet</h2>
      <p>
        Avant de pousser la porte, 76 % des Français cherchent des informations en ligne (
        <Source href="https://www.ecommerce-nation.fr/etude-shopfully-2025-priorites-achat-francais/">
          Shopfully, 2025
        </Source>
        ). Sur votre site, ils trouvent tout au même endroit et à jour : ce que vous faites, quand vous êtes ouvert,
        combien ça coûte, comment venir. Il est à votre nom, et personne ne peut le fermer à votre place.
      </p>

      <h2>La bonne combinaison pour votre présence en ligne</h2>
      <ol>
        <li>Un site comme base, avec vos infos pratiques toujours à jour.</li>
        <li>
          Votre fiche Google Maps, pour apparaître sur la carte (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>).
        </li>
        <li>
          Un réseau social, celui que vous aimez vraiment utiliser. Mieux vaut un compte vivant que trois comptes
          abandonnés.
        </li>
      </ol>
      <p>
        Les trois se renvoient la balle : votre site affiche des liens vers vos réseaux, et votre bio Instagram renvoie
        vers votre site. Si vous ne savez pas par où commencer, lisez{' '}
        <GuideLink slug="pourquoi-creer-un-site-pour-son-commerce">pourquoi créer un site pour son commerce</GuideLink>.
      </p>
    </>
  );
}
