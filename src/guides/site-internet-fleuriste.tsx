import { GuideLink, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi un site quand les plateformes de livraison de fleurs existent ?',
  occasions: 'Comment organiser le site d’un fleuriste ?',
  deuil: 'Comment présenter les fleurs de deuil ?',
  livraison: 'Que dire de la livraison et de la commande ?',
  fetes: 'Que faire du site avant la Saint-Valentin ou la fête des mères ?',
  photos: 'Quelles photos montrer ?',
  google: 'Comment ressortir sur Google près de chez vos clients ?',
  prix: 'Combien coûte le site d’un fleuriste ?',
});

export default function Body() {
  return (
    <>
      <p>
        On va chez un fleuriste pour un anniversaire, une naissance, un mariage ou un deuil. Et on le cherche souvent la
        veille, sur son téléphone, en espérant qu’il livre.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Quand un client commande sur une plateforme nationale, elle transmet la commande à un fleuriste du coin et garde une
        partie du prix. Commander chez vous directement est souvent plus simple pour le client et plus rentable pour vous,
        à condition qu’il vous trouve. Votre site montre votre style, les occasions que vous couvrez et votre zone de
        livraison, et vous fait apparaître quand on cherche un fleuriste dans votre ville.
      </p>

      <Question id="occasions" />
      <p>
        Par occasion, parce que c’est ainsi que vos clients cherchent : ils pensent « anniversaire » ou « mariage » avant de
        penser roses ou pivoines. Pour chaque occasion, quelques exemples et une idée des prix :
      </p>
      <ul>
        <li>les bouquets du quotidien et les cadeaux ;</li>
        <li>les mariages et les événements : décoration, bouquet de mariée, rendez-vous pour en parler ;</li>
        <li>le deuil : gerbes, couronnes, raquettes, et la livraison aux pompes funèbres ou au cimetière ;</li>
        <li>les entreprises : compositions pour l’accueil, abonnements floraux, événements.</li>
      </ul>

      <Question id="deuil" />
      <p>
        On passe cette commande dans l’urgence et dans l’émotion. Dites simplement jusqu’à quand on peut commander pour une
        cérémonie, où vous livrez (funérarium, église, cimetière), quelles sont les gammes de prix et comment rédiger le
        message du ruban. Les clients que vous avez bien guidés à ce moment-là reviennent souvent.
      </p>

      <Question id="livraison" />
      <ul>
        <li>les communes où vous livrez, et le prix de la livraison ;</li>
        <li>l’heure limite pour être livré le jour même ou le lendemain ;</li>
        <li>comment commander : par téléphone, en boutique, avec un formulaire simple, ou en ligne si vous le souhaitez ;</li>
        <li>le retrait en boutique, pour ceux qui passent récupérer leur bouquet.</li>
      </ul>

      <Question id="fetes" />
      <p>
        Pour la Saint-Valentin, la fête des grands-mères, la fête des mères ou la Toussaint, les recherches commencent une à
        deux semaines avant. Annoncez vos créations, vos prix et la date limite de commande à temps, sur le site et sur
        votre fiche Google.
      </p>

      <Question id="photos" />
      <p>
        Celles de vos vraies compositions, de la boutique et de la vitrine, pas des photos de catalogue : on choisit un
        fleuriste pour son style. Si vous travaillez des fleurs de saison ou de producteurs locaux, dites-le, c’est ce qui
        vous distingue.
      </p>

      <Question id="google" />
      <ul>
        <li>
          une fiche Google Maps complète, avec vos horaires, des photos et le lien vers votre site (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>« fleuriste », « livraison de fleurs » et vos communes de livraison écrits dans les textes du site ;</li>
        <li>
          des avis récents, à demander avec un QR code glissé avec le bouquet ou posé près de la caisse (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <Question id="prix" />
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, permet une page par grand type d’occasion : accueil,
        mariage et événements, deuil. Elle comprend aussi votre fiche Google remise au propre et un QR code pour vos avis.
        Avec la formule Premium (<strong>{plan('premium').price} €/mois</strong>), votre fiche Google est suivie chaque
        mois, avec une publication par mois, ce qui permet d’annoncer chaque fête à temps.
      </p>
      <p>
        Pour faire revenir vos clients à chaque fête, voyez{' '}
        <GuideLink slug="newsletter-commerce-local">la newsletter pour commerce local</GuideLink>.
      </p>
    </>
  );
}
