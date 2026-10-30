import { GuideLink, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi un site quand on a déjà un outil de réservation ?',
  soins: 'Comment présenter sa carte des soins ?',
  reservation: 'Où placer la réservation ?',
  cadeaux: 'Faut-il mettre en avant les cartes cadeaux ?',
  confiance: 'Comment mettre en confiance avant le premier rendez-vous ?',
  google: 'Comment ressortir sur Google près de chez vos clients ?',
  prix: 'Combien coûte le site d’un institut de beauté ?',
});

export default function Body() {
  return (
    <>
      <p>
        Avant de réserver un soin dans un institut qu’on ne connaît pas, on veut voir ce qui est proposé, à quel prix et
        pour combien de temps, et savoir à qui on aura affaire.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Votre outil de réservation affiche vos créneaux, et sur une plateforme vous apparaissez au milieu des instituts du
        quartier. Le site présente votre institut, détaille vos soins et vos produits, met en avant vos cartes cadeaux, puis
        renvoie vers la réservation. Google s’appuie aussi sur lui pour vous proposer quand on cherche un soin précis dans
        votre ville.
      </p>

      <Question id="soins" />
      <p>C’est la page la plus consultée. Elle doit répondre aux questions qu’on vous pose au téléphone :</p>
      <ul>
        <li>les soins rangés par famille : visage, corps, épilation, mains et pieds, maquillage, massages ;</li>
        <li>pour chacun, le prix et la durée ;</li>
        <li>ce que le soin comprend, en deux phrases simples, sans jargon ;</li>
        <li>les forfaits et les cures, avec ce qu’ils font économiser ;</li>
        <li>les contre-indications importantes, par exemple pendant la grossesse.</li>
      </ul>

      <Question id="reservation" />
      <p>
        En haut de chaque page. Avec un outil de réservation en ligne, le bouton mène directement à votre page ; sans, un
        numéro qu’on peut toucher pour appeler, avec vos horaires à côté. Indiquez aussi votre politique d’annulation pour
        éviter les malentendus.
      </p>

      <Question id="cadeaux" />
      <p>
        Oui, une carte cadeau vous amène quelqu’un qui ne vous connaissait pas. Mettez-les en avant avant Noël, la
        Saint-Valentin et la fête des mères, en disant comment l’acheter, combien de temps elle est valable et si elle peut
        être envoyée par e-mail.
      </p>

      <Question id="confiance" />
      <ul>
        <li>des photos de vos cabines et de l’accueil, pour qu’on sache où l’on va s’allonger ;</li>
        <li>vos diplômes et vos formations, et depuis combien de temps vous exercez ;</li>
        <li>les marques et les produits que vous utilisez ;</li>
        <li>vos règles d’hygiène : matériel désinfecté ou à usage unique, linge changé à chaque soin ;</li>
        <li>l’équipe, avec un prénom et une spécialité pour chacune ou chacun.</li>
      </ul>

      <Question id="google" />
      <p>On cherche « institut de beauté », « épilation » ou « pose d’ongles » suivi de sa ville. Pour apparaître :</p>
      <ul>
        <li>
          une fiche Google Maps complète, avec la bonne catégorie, vos horaires, des photos et le lien de réservation (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>chaque soin que vous proposez cité par son nom courant dans les textes du site ;</li>
        <li>
          des avis récents, à demander à la fin du rendez-vous (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <Question id="prix" />
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient à la plupart des instituts : trois pages
        (accueil, carte des soins, l’institut et l’équipe), votre fiche Google remise au propre et un QR code pour vos avis.
        Le lien vers votre outil de réservation est inclus dans toutes les formules, et je mets votre carte à jour quand vos
        tarifs changent.
      </p>
      <p>
        Vous tenez aussi un salon de coiffure ? Voyez{' '}
        <GuideLink slug="site-internet-coiffeur">site internet pour salon de coiffure</GuideLink>.
      </p>
    </>
  );
}
