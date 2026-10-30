import { GuideLink, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi un garage indépendant a-t-il besoin d’un site ?',
  tarifs: 'Faut-il afficher ses prix sur le site d’un garage ?',
  rdv: 'Comment faciliter la prise de rendez-vous ?',
  confiance: 'Comment donner confiance à un nouveau client ?',
  google: 'Comment ressortir sur Google près de chez vos clients ?',
  prix: 'Combien coûte le site d’un garage ?',
});

export default function Body() {
  return (
    <>
      <p>
        Un voyant qui s’allume, une vidange à faire, des pneus à changer : on cherche un garage près de chez soi, et on
        compare avant d’y laisser sa voiture.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Les centres auto et les concessions ont un site, et les clients comparent. Le vôtre peut mettre en avant ce que ces
        enseignes promettent difficilement : le même mécanicien d’une visite à l’autre, des explications claires, des prix
        souvent plus doux. Écrivez-le avec vos mots sur la page d’accueil. Le site vous fait aussi trouver quand on cherche
        « garage » ou « vidange » dans votre ville.
      </p>

      <Question id="tarifs" />
      <p>
        Oui, au moins des prix « à partir de », car personne n’aime laisser sa voiture sans avoir une idée du prix. Pour les
        interventions courantes, donnez un prix de départ et ce qui le fait varier :
      </p>
      <ul>
        <li>entretien et vidange, révision constructeur ;</li>
        <li>freins : plaquettes, disques ;</li>
        <li>pneus : montage, équilibrage, parallélisme ;</li>
        <li>distribution, embrayage, climatisation ;</li>
        <li>diagnostic électronique, préparation au contrôle technique ;</li>
        <li>carrosserie et pare-brise, si vous les faites.</li>
      </ul>
      <p>
        Précisez votre taux horaire et si le devis est gratuit. Un prix écrit rassure davantage qu’une promesse de « tarifs
        compétitifs ».
      </p>

      <Question id="rdv" />
      <ul>
        <li>votre numéro en haut de chaque page, qu’on peut toucher sur téléphone pour appeler ;</li>
        <li>un formulaire simple : la voiture (marque, modèle, année), l’intervention souhaitée, les disponibilités ;</li>
        <li>vos horaires, et si vous prenez les urgences ;</li>
        <li>le véhicule de prêt ou le dépôt des clés en dehors des horaires, si vous les proposez.</li>
      </ul>

      <Question id="confiance" />
      <ul>
        <li>depuis combien de temps le garage existe, et qui le tient ;</li>
        <li>les marques sur lesquelles vous êtes spécialisés, ou « toutes marques » ;</li>
        <li>l’entretien qui préserve la garantie constructeur, si vous le faites selon le carnet ;</li>
        <li>des photos de l’atelier et de l’équipe, pas des photos de catalogue ;</li>
        <li>vos avis Google, qui pèsent beaucoup dans le choix d’un garage.</li>
      </ul>

      <Question id="google" />
      <p>On cherche « garage », « vidange » ou « changement de pneus » suivi de sa ville. Pour apparaître :</p>
      <ul>
        <li>
          une fiche Google Maps complète, avec la bonne catégorie, vos horaires et des photos de l’atelier (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>chaque prestation citée par son nom courant dans les textes du site, avec votre ville ;</li>
        <li>
          des avis demandés à la remise des clés, avec un QR code au comptoir (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <Question id="prix" />
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient à la plupart des garages : trois pages
        (accueil, prestations et prix, rendez-vous et accès), votre fiche Google remise au propre et un QR code pour vos
        avis. J’écris les textes, et je mets vos prix à jour quand ils changent.
      </p>
      <p>
        Pour comparer avec les autres solutions, voyez{' '}
        <GuideLink slug="prix-site-web-commercant">combien coûte un site web pour un commerçant</GuideLink>.
      </p>
    </>
  );
}
