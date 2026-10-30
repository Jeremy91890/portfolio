import { GuideLink, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        Soin du visage, épilation, ongles, massage : avant de réserver dans un institut qu’on ne connaît pas, on veut voir
        les soins proposés, leur prix, leur durée, et se sentir en confiance. Voici ce que le site d’un institut de beauté,
        d’une esthéticienne ou d’un bar à ongles doit montrer.
      </p>

      <h2>Une carte des soins claire</h2>
      <p>
        C’est la page que vos clientes et vos clients consultent le plus. Elle doit répondre aux questions qu’on vous pose
        au téléphone :
      </p>
      <ul>
        <li>les soins rangés par famille : visage, corps, épilation, mains et pieds, maquillage, massages ;</li>
        <li>pour chacun, le prix et la durée ;</li>
        <li>ce que le soin comprend, en deux phrases simples, sans jargon ;</li>
        <li>les forfaits et les cures, avec ce qu’ils font économiser ;</li>
        <li>les contre-indications importantes, par exemple pendant la grossesse.</li>
      </ul>

      <h2>La réservation, visible sur chaque page</h2>
      <p>
        Le bouton de réservation doit être en haut de chaque page. Si vous utilisez un outil de réservation en ligne, il
        mène directement à votre page ; sinon, un numéro qu’on peut toucher pour appeler, avec vos horaires. Précisez aussi
        votre politique d’annulation : elle évite les malentendus.
      </p>

      <h2>Les cartes cadeaux</h2>
      <p>
        Une carte cadeau, c’est un client qui vous découvre grâce à un autre. Mettez-les en avant, surtout avant Noël, la
        Saint-Valentin et la fête des mères : comment l’acheter, sa durée de validité, et si elle peut être envoyée par
        e-mail.
      </p>

      <h2>Ce qui met en confiance</h2>
      <ul>
        <li>des photos de vos cabines et de l’accueil : on veut savoir où l’on va s’allonger ;</li>
        <li>vos diplômes et vos formations, et depuis combien de temps vous exercez ;</li>
        <li>les marques et les produits que vous utilisez ;</li>
        <li>vos règles d’hygiène : matériel désinfecté ou à usage unique, linge changé à chaque soin ;</li>
        <li>l’équipe, avec un prénom et une spécialité pour chacune ou chacun.</li>
      </ul>

      <h2>Ressortir sur Google près de chez vos clients</h2>
      <p>
        On cherche « institut de beauté », « épilation » ou « pose d’ongles » suivi de sa ville. Pour apparaître :
      </p>
      <ul>
        <li>
          une fiche Google Maps complète, avec la bonne catégorie, vos horaires, des photos et le lien de réservation (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>chaque soin que vous proposez cité par son nom courant dans les textes du site ;</li>
        <li>
          des avis récents, à demander à la fin du rendez-vous (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <h2>Le site d’un institut de beauté avec Nappage Studio</h2>
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient à la plupart des instituts : trois pages
        (accueil, carte des soins, l’institut et l’équipe), votre fiche Google remise au propre et un QR code pour vos avis.
        Le lien vers votre outil de réservation est inclus dans toutes les formules, et je mets votre carte à jour quand vos
        tarifs changent.
      </p>
      <p>
        Vous tenez aussi un salon de coiffure ? Voyez{' '}
        <GuideLink slug="site-internet-coiffeur">site internet pour salon de coiffure</GuideLink>.
      </p>
    </>
  );
}
