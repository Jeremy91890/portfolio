import { GuideLink, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        « Boulangerie ouverte dimanche », « commander une bûche », « galette des rois près de chez moi » : vos clients
        cherchent une boulangerie sur leur téléphone, souvent au dernier moment. Ce qu’ils veulent savoir tient en trois
        questions : êtes-vous ouvert, qu’est-ce que vous faites de bon, et comment commander. Voici ce que le site d’une
        boulangerie-pâtisserie doit montrer, et comment le faire ressortir sur Google.
      </p>

      <h2>Vos horaires, en premier et toujours à jour</h2>
      <p>
        C’est la première chose que l’on cherche, et celle qui coûte le plus cher quand elle est fausse : un client qui
        trouve porte close le dimanche ne revient pas forcément.
      </p>
      <ul>
        <li>vos horaires de la semaine, visibles dès l’ouverture du site, sans avoir à chercher ;</li>
        <li>votre jour de fermeture hebdomadaire, écrit clairement ;</li>
        <li>vos congés annuels, annoncés quelques semaines avant ;</li>
        <li>vos horaires des jours fériés et des fêtes, mis à jour sur le site et sur votre fiche Google en même temps.</li>
      </ul>

      <h2>Les commandes : gâteaux, pièces montées, fêtes</h2>
      <p>
        Les commandes sont souvent ce qui rapporte le plus, et c’est là qu’un site fait gagner du temps au comptoir. Pour
        chaque type de commande, indiquez :
      </p>
      <ul>
        <li>ce que vous proposez (entremets, pièces montées, gâteaux d’anniversaire, plateaux, viennoiseries pour les
          entreprises) ;</li>
        <li>le délai pour commander, par exemple 48 heures avant, ou une semaine pour une pièce montée ;</li>
        <li>comment passer commande : en boutique, par téléphone ou avec un formulaire simple ;</li>
        <li>s’il faut verser un acompte.</li>
      </ul>
      <p>
        Pour les allergènes, le plus simple est de dire sur le site que la liste est disponible en boutique et sur
        demande, et de la mettre en ligne si vous prenez des commandes à distance.
      </p>

      <h2>Les périodes qui font votre chiffre</h2>
      <p>
        Noël, l’Épiphanie, Pâques, la fête des mères : les recherches de bûches, de galettes ou de chocolats commencent
        quelques semaines avant. Une page (ou un encart sur l’accueil) mise à jour à temps, avec les parfums, les tailles
        et la date limite de commande, vous évite de répondre cent fois à la même question au téléphone.
      </p>

      <h2>Vos spécialités, en photo</h2>
      <p>
        Un beau pain, une vitrine de pâtisseries, une viennoiserie qui sort du four : vos produits se vendent par l’œil.
        Quelques vraies photos de vos spécialités, de la boutique et de l’équipe valent mieux que des photos de banque
        d’images, que les clients repèrent tout de suite.
      </p>
      <p>
        Le nom « boulangerie » est réservé par la loi aux professionnels qui pétrissent, façonnent et cuisent leur pain
        sur place. Si c’est votre cas, dites-le, avec vos mots : pain au levain, farines d’un moulin de la région, cuisson
        dans la journée. C’est ce qui vous distingue des points chauds et des terminaux de cuisson.
      </p>

      <h2>Être trouvé quand on cherche une boulangerie près de chez soi</h2>
      <p>
        Pour une boulangerie, presque toutes les recherches sont locales. Google affiche d’abord une carte avec trois
        commerces, puis les sites. Pour faire partie de ces trois-là :
      </p>
      <ul>
        <li>
          votre fiche Google Maps doit être complète : catégorie « Boulangerie », horaires, photos, lien vers votre site
          (tout est dans le guide <GuideLink slug="referencement-local-google-maps">référencement local</GuideLink>) ;
        </li>
        <li>votre site doit dire « boulangerie » et le nom de votre ville ou de votre quartier dans son titre et ses
          textes ;</li>
        <li>
          vos avis Google comptent beaucoup : un QR code près de la caisse suffit souvent à en recevoir régulièrement (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <h2>Le site d’une boulangerie avec Nappage Studio</h2>
      <p>
        Pour beaucoup de boulangeries, une seule page claire suffit : horaires, spécialités, commandes, adresse. C’est la
        formule Essentiel, à <strong>{plan('essentiel').price} €/mois</strong>. Si vous voulez une page dédiée aux
        commandes et aux fêtes, et votre fiche Google remise au propre, la formule Pro (
        <strong>{plan('pro').price} €/mois</strong>) est plus adaptée.
      </p>
      <p>
        Dans les deux cas, j’écris les textes, je prends en charge l’hébergement et le nom de domaine, et je mets à jour vos
        horaires quand vous me les envoyez. Pour comparer avec les autres solutions, voyez{' '}
        <GuideLink slug="prix-site-web-commercant">combien coûte un site web pour un commerçant</GuideLink>.
      </p>
    </>
  );
}
