import { GuideLink, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        Un voyant qui s’allume, une vidange à faire, des pneus à changer : on cherche un garage près de chez soi, et on
        compare. Les questions reviennent toujours : combien ça coûte, quand pouvez-vous prendre ma voiture, et puis-je
        vous faire confiance. Voici ce que le site d’un garage indépendant doit montrer pour que le client appelle.
      </p>

      <h2>Vos prestations et vos prix « à partir de »</h2>
      <p>
        Personne n’aime laisser sa voiture sans avoir une idée du prix. Pour les interventions courantes, donnez un prix de
        départ et ce qui le fait varier :
      </p>
      <ul>
        <li>entretien et vidange, révision constructeur ;</li>
        <li>freins : plaquettes, disques ;</li>
        <li>pneus : montage, équilibrage, parallélisme ;</li>
        <li>distribution, embrayage, climatisation ;</li>
        <li>diagnostic électronique, préparation au contrôle technique ;</li>
        <li>carrosserie et pare-brise, si vous les faites.</li>
      </ul>
      <p>
        Précisez votre taux horaire et si le devis est gratuit. Un prix clair avant de venir rassure plus qu’une promesse
        de « tarifs compétitifs ».
      </p>

      <h2>La prise de rendez-vous</h2>
      <ul>
        <li>votre numéro en haut de chaque page, qu’on peut toucher sur téléphone pour appeler ;</li>
        <li>un formulaire simple : la voiture (marque, modèle, année), l’intervention souhaitée, les disponibilités ;</li>
        <li>vos horaires, et si vous prenez les urgences ;</li>
        <li>le véhicule de prêt ou le dépôt des clés en dehors des horaires, si vous les proposez.</li>
      </ul>

      <h2>Ce qui met en confiance</h2>
      <ul>
        <li>depuis combien de temps le garage existe, et qui le tient ;</li>
        <li>les marques sur lesquelles vous êtes spécialisés, ou « toutes marques » ;</li>
        <li>l’entretien qui préserve la garantie constructeur, si vous le faites selon le carnet ;</li>
        <li>des photos de l’atelier et de l’équipe, pas des photos de catalogue ;</li>
        <li>vos avis Google : dans l’automobile, ils pèsent beaucoup dans le choix.</li>
      </ul>

      <h2>Un garage indépendant face aux grandes enseignes</h2>
      <p>
        Les centres auto et les concessions ont de gros sites. Le vôtre gagne sur ce qu’ils ne peuvent pas promettre : le
        même mécanicien d’une visite à l’autre, des explications claires, des prix souvent plus doux. Dites-le, avec vos
        mots, sur la page d’accueil.
      </p>

      <h2>Ressortir sur Google près de chez vos clients</h2>
      <p>On cherche « garage », « vidange » ou « changement de pneus » suivi de sa ville. Pour apparaître :</p>
      <ul>
        <li>
          une fiche Google Maps complète, avec la bonne catégorie, vos horaires et des photos de l’atelier (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>chaque prestation citée par son nom courant dans les textes du site, avec votre ville ;</li>
        <li>
          des avis demandés à la remise des clés, avec un QR code au comptoir (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <h2>Le site d’un garage avec Nappage Studio</h2>
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, convient à la plupart des garages : trois pages
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
