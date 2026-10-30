import { GuideLink, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        On pousse rarement la porte d’un fleuriste par hasard : on a un anniversaire, une naissance, un mariage, un deuil.
        Et on cherche souvent la veille, sur son téléphone, un fleuriste qui livre. Voici ce que le site d’un fleuriste doit
        montrer pour recevoir ces commandes plutôt que de les laisser aux grandes plateformes.
      </p>

      <h2>Les occasions, chacune à sa place</h2>
      <p>
        Vos clients pensent par occasion, pas par variété de fleurs. Organisez le site de la même façon, avec quelques
        exemples et une idée des prix pour chacune :
      </p>
      <ul>
        <li>les bouquets du quotidien et les cadeaux ;</li>
        <li>les mariages et les événements : décoration, bouquet de mariée, rendez-vous pour en parler ;</li>
        <li>le deuil : gerbes, couronnes, raquettes, et la livraison aux pompes funèbres ou au cimetière ;</li>
        <li>les entreprises : compositions pour l’accueil, abonnements floraux, événements.</li>
      </ul>

      <h2>Le deuil : être clair et rassurant</h2>
      <p>
        C’est une commande que l’on passe dans l’urgence et dans l’émotion. Dites simplement jusqu’à quand on peut
        commander pour une cérémonie, où vous livrez (funérarium, église, cimetière), quelles sont les gammes de prix et
        comment écrire le message du ruban. Un client bien guidé à ce moment-là revient souvent.
      </p>

      <h2>La livraison et la commande</h2>
      <ul>
        <li>les communes où vous livrez, et le prix de la livraison ;</li>
        <li>l’heure limite pour être livré le jour même ou le lendemain ;</li>
        <li>comment commander : par téléphone, en boutique, avec un formulaire simple, ou en ligne si vous le souhaitez ;</li>
        <li>le retrait en boutique, pour ceux qui passent récupérer leur bouquet.</li>
      </ul>
      <p>
        Commander directement chez vous, plutôt que sur une plateforme nationale qui transmet la commande à un fleuriste du
        coin, c’est souvent plus simple pour le client et plus rentable pour vous. Encore faut-il que le client vous trouve.
      </p>

      <h2>Les temps forts de l’année</h2>
      <p>
        Saint-Valentin, fête des grands-mères, fête des mères, Toussaint : les recherches commencent une à deux semaines
        avant. Annoncez vos créations, vos prix et la date limite de commande à temps, sur le site et sur votre fiche
        Google.
      </p>

      <h2>Vos créations, en photo</h2>
      <p>
        Un fleuriste se choisit sur son style. Montrez vos vraies compositions, la boutique et la vitrine, pas des photos de
        catalogue. Si vous travaillez des fleurs de saison ou de producteurs locaux, dites-le : c’est ce qui vous
        distingue.
      </p>

      <h2>Ressortir sur Google près de chez vos clients</h2>
      <ul>
        <li>
          une fiche Google Maps complète, avec vos horaires, des photos et le lien vers votre site (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>« fleuriste », « livraison de fleurs » et vos communes de livraison écrits dans les textes du site ;</li>
        <li>
          des avis récents, à demander avec un QR code glissé avec le bouquet ou posé près de la caisse (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <h2>Le site d’un fleuriste avec Nappage Studio</h2>
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, permet une page par grand type d’occasion : accueil,
        mariage et événements, deuil. Elle comprend aussi votre fiche Google remise au propre et un QR code pour vos avis.
        Avec la formule Premium (<strong>{plan('premium').price} €/mois</strong>), votre fiche Google est suivie chaque
        mois, avec une publication par mois : de quoi annoncer chaque temps fort de l’année.
      </p>
      <p>
        Vous voulez faire revenir vos clients à chaque fête ? Voyez{' '}
        <GuideLink slug="newsletter-commerce-local">la newsletter pour commerce local</GuideLink>.
      </p>
    </>
  );
}
