import { GuideLink, plan, pricing, questions } from "./shared";

const { Summary, Question } = questions(
  {
    boulangerie: 'Boulangerie, pâtisserie',
    coiffure: 'Salon de coiffure, institut de beauté',
    restaurant: 'Restaurant, café, traiteur',
    batiment: 'Artisan du bâtiment : plombier, électricien, menuisier…',
    boutique: 'Boutique, fleuriste, commerce de proximité',
    commun: 'Ce qui compte pour tous les métiers',
    'cle-en-main': 'Un site clé en main pour artisan, ça veut dire quoi ?',
  },
  { title: 'Au sommaire' },
);

export default function Body() {
  return (
    <>
      <p>
        Le client qui ouvre le site d’un artisan ou d’un commerçant cherche une
        info précise, et il veut la trouver en quelques secondes. Cette info
        change d’un métier à l’autre.
      </p>

      <Summary />


      <Question id="boulangerie" />
      <ul>
        <li>
          vos horaires et vos jours de fermeture, bien visibles et toujours à
          jour ;
        </li>
        <li>vos spécialités et vos pains, avec de belles photos ;</li>
        <li>
          les commandes de gâteaux et de pièces montées : comment commander,
          dans quel délai ;
        </li>
        <li>
          vos horaires spéciaux pour les fêtes, là où les clients les cherchent.
        </li>
      </ul>
      <p>
        Le détail, avec les périodes de fêtes et les commandes, est dans{" "}
        <GuideLink slug="site-internet-boulangerie">
          site internet pour boulangerie
        </GuideLink>
        .
      </p>

      <Question id="coiffure" />
      <ul>
        <li>vos prestations et vos tarifs, clairement présentés ;</li>
        <li>
          un bouton de réservation en ligne, visible dès l’arrivée sur le site ;
        </li>
        <li>des photos de vos réalisations et de votre salon ;</li>
        <li>
          votre équipe, pour que les clients sachent à qui ils auront affaire.
        </li>
      </ul>
      <p>
        Tout ce qui fait prendre rendez-vous est dans{" "}
        <GuideLink slug="site-internet-coiffeur">
          site internet pour salon de coiffure
        </GuideLink>{" "}
        et{" "}
        <GuideLink slug="site-internet-institut-beaute">
          site internet pour institut de beauté
        </GuideLink>
        .
      </p>

      <Question id="restaurant" />
      <ul>
        <li>
          votre carte et vos menus à jour, lisibles sur téléphone (pas un PDF
          qu’il faut zoomer) ;
        </li>
        <li>la réservation, par téléphone ou en ligne ;</li>
        <li>l’accès : parking, transports, accessibilité.</li>
      </ul>
      <p>
        Le détail est dans{" "}
        <GuideLink slug="site-internet-restaurant">
          site internet pour restaurant
        </GuideLink>
        .
      </p>

      <Question id="batiment" />
      <ul>
        <li>votre zone d’intervention, avec les communes que vous couvrez ;</li>
        <li>
          un numéro de téléphone qu’on peut toucher pour appeler, en haut de
          chaque page ;
        </li>
        <li>un formulaire de demande de devis simple ;</li>
        <li>des photos de chantiers avant et après ;</li>
        <li>
          vos qualifications et vos assurances, qui rassurent avant de faire
          entrer quelqu’un chez soi.
        </li>
      </ul>
      <p>
        Pour le dépannage à domicile, l’affichage de vos tarifs sur le site est
        obligatoire : voir{" "}
        <GuideLink slug="site-internet-plombier">
          site internet pour plombier
        </GuideLink>{" "}
        et{" "}
        <GuideLink slug="site-internet-electricien">
          site internet pour électricien
        </GuideLink>
        .
      </p>

      <Question id="boutique" />
      <ul>
        <li>ce que l’on trouve chez vous, avec des photos de vos produits ;</li>
        <li>la livraison ou le retrait en boutique, si vous le proposez ;</li>
        <li>
          vos événements : ventes privées, ateliers, nouvelles collections.
        </li>
      </ul>
      <p>
        Le détail par métier :{" "}
        <GuideLink slug="site-internet-fleuriste">fleuriste</GuideLink>,{" "}
        <GuideLink slug="site-internet-boutique-cadeaux">
          boutique de cadeaux et de souvenirs
        </GuideLink>
        ,{" "}
        <GuideLink slug="site-internet-boutique-jeux">
          boutique de jeux et de jouets
        </GuideLink>{" "}
        et{" "}
        <GuideLink slug="site-internet-boutique-vetements">
          boutique de vêtements
        </GuideLink>
        .
      </p>

      <Question id="commun" />
      <p>
        Le site doit être rapide et lisible sur téléphone, puisque c’est là que
        la plupart de vos clients le consultent. Votre métier et votre ville
        doivent apparaître dans les textes pour ressortir sur Google (voir{" "}
        <GuideLink slug="referencement-local-google-maps">
          le référencement local
        </GuideLink>
        ). Et les infos doivent être à jour : un site qui affiche les horaires
        de l’an dernier envoie des clients devant une porte fermée.
      </p>

      <Question id="cle-en-main" />
      <p>
        « Clé en main », c’est que vous n’avez rien à faire de technique. Chez
        Nappage Studio, je rédige vos textes, je crée le site, et je m’occupe du
        nom de domaine, de l’hébergement, de la sécurité et des mises à jour.
        Quand vos horaires changent, vous me prévenez et je les mets à jour.
      </p>
      <p>
        C’est à partir de <strong>{plan("essentiel").price} €/mois</strong>,
        avec {pricing.setupFee} € de mise en place. La formule Pro (
        <strong>{plan("pro").price} €/mois</strong>) convient à la plupart des
        artisans : 3 pages, fiche Google mise au propre et QR code pour vos
        avis. Pour la prise de rendez-vous, le click & collect ou une carte de
        fidélité, je développe l’outil sur devis, en plus de la formule.
      </p>
      <p>
        Pour les délais, tout est dans{" "}
        <GuideLink slug="creer-site-boutique-rapidement">
          mettre en ligne le site de sa boutique rapidement
        </GuideLink>
        .
      </p>
    </>
  );
}
