import { GuideLink, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi un site face aux grandes surfaces et à la vente en ligne ?',
  conseil: 'Comment montrer votre conseil sur le site ?',
  animations: 'Faut-il parler de vos animations et de vos soirées jeux ?',
  services: 'Quels services mettre en avant ?',
  noel: 'Que faire du site avant Noël et pour les anniversaires ?',
  google: 'Comment ressortir sur Google près de chez vous ?',
  prix: 'Combien coûte le site d’une boutique de jeux ?',
});

export default function Body() {
  return (
    <>
      <p>
        Une boutique de jeux de société ou de jouets conseille ses clients, ce que ne font ni les grandes surfaces ni les
        sites de vente en ligne, et elle a souvent un espace où l’on joue ensemble.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Les grands sites gagneront sur le prix et sur le choix. Le vôtre montre ce qu’ils n’ont pas : un conseil adapté,
        des animations, un endroit où découvrir un jeu avant de l’acheter. Il vous fait aussi apparaître quand on cherche
        « jeux de société » ou « magasin de jouets » dans votre ville.
      </p>

      <Question id="conseil" />
      <p>
        Les clients hésitent souvent : un jeu pour quatre joueurs, un cadeau pour un enfant de 6 ans, un jeu rapide pour
        l’apéro. Montrez que vous savez les guider :
      </p>
      <ul>
        <li>vos univers : jeux de société, jeux de rôle, cartes à collectionner, jouets, puzzles, jeux en bois ;</li>
        <li>des sélections par âge, par nombre de joueurs ou par occasion, mises à jour de temps en temps ;</li>
        <li>vos coups de cœur du moment, avec deux phrases sur chacun ;</li>
        <li>la possibilité de tester un jeu en boutique, si vous la proposez.</li>
      </ul>

      <Question id="animations" />
      <p>
        Oui. Les soirées jeux, les tournois, les avant-premières et les après-midi pour les enfants font revenir les
        clients, et aucun site de vente en ligne ne les propose. Tenez un agenda à jour sur le site, avec le prix, le
        nombre de places et comment s’inscrire. Si vous avez un espace de jeu ou un bar à jeux, présentez-le avec ses
        horaires et ses tarifs.
      </p>

      <Question id="services" />
      <ul>
        <li>la commande de jeux que vous n’avez pas en rayon, et le délai habituel ;</li>
        <li>le paquet cadeau et la carte cadeau ;</li>
        <li>les listes d’anniversaire ou de Noël, si vous les gérez ;</li>
        <li>la carte de fidélité, et ce qu’elle rapporte.</li>
      </ul>

      <Question id="noel" />
      <p>
        Les recherches de jouets et de jeux montent fortement avant Noël. Publiez vos sélections et vos horaires de
        décembre dès novembre, sur le site et sur votre fiche Google. Le reste de l’année, les anniversaires d’enfants
        amènent régulièrement des parents qui cherchent une idée, et une page « idées par âge » leur répond.
      </p>

      <Question id="google" />
      <ul>
        <li>
          une fiche Google Maps complète, avec la bonne catégorie, vos horaires et des photos de vos rayons et de l’espace
          de jeu (voir <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>« jeux de société », « magasin de jouets », « soirée jeux » et votre ville écrits dans les textes du site ;</li>
        <li>
          des avis récents, que les joueurs laissent volontiers après une bonne soirée (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <Question id="prix" />
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient bien : trois pages (accueil, vos univers et
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
