import { GuideLink, Source, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        Une fuite sous l’évier, un chauffe-eau qui lâche, une salle de bains à refaire : on cherche un plombier sur son
        téléphone, souvent dans l’urgence, et en se méfiant des dépanneurs malhonnêtes. Le site d’un plombier a donc deux
        rôles : être appelé vite, et inspirer confiance avant même le premier appel. Ce qui suit vaut aussi pour les
        chauffagistes et les serruriers ; pour les électriciens, voyez{' '}
        <GuideLink slug="site-internet-electricien">site internet pour électricien</GuideLink>.
      </p>

      <h2>Un numéro qu’on peut appeler d’un geste</h2>
      <ul>
        <li>votre numéro en haut de chaque page, qu’on peut toucher sur téléphone pour appeler directement ;</li>
        <li>vos horaires, et si vous intervenez en urgence le soir ou le week-end ;</li>
        <li>
          un formulaire de demande de devis court : le type de travaux, la commune, un numéro de rappel, et la possibilité
          d’ajouter une photo du problème.
        </li>
      </ul>

      <h2>Vos tarifs de dépannage : une obligation si vous avez un site</h2>
      <p>
        Pour le dépannage, la réparation et l’entretien à domicile, un arrêté impose d’informer le client des prix avant
        toute intervention, et de les afficher sur votre site si vous en avez un (
        <Source href="https://www.legifrance.gouv.fr/eli/arrete/2017/1/24/ECFC1701378A/jo/texte">
          arrêté du 24 janvier 2017
        </Source>
        ). Cela concerne :
      </p>
      <ul>
        <li>votre ou vos taux horaires de main-d’œuvre, TTC ;</li>
        <li>la façon dont le temps est décompté ;</li>
        <li>le prix TTC de vos prestations au forfait, si vous en avez ;</li>
        <li>vos frais de déplacement, s’il y en a ;</li>
        <li>si le devis est gratuit ou payant, et son prix.</li>
      </ul>
      <p>
        C’est aussi un argument : un client qui voit vos prix noir sur blanc vous fait davantage confiance qu’à un numéro
        d’urgence sans nom ni adresse.
      </p>

      <h2>Ce qui rassure avant de faire entrer quelqu’un chez soi</h2>
      <ul>
        <li>votre nom, celui de votre entreprise et votre numéro SIRET, bien visibles ;</li>
        <li>votre assurance décennale, que vous indiquez déjà sur vos devis et vos factures ;</li>
        <li>
          vos qualifications : un label comme RGE compte pour les clients qui veulent une aide de l’État pour changer leur
          chaudière ou leur chauffe-eau ;
        </li>
        <li>des photos de vrais chantiers, avant et après ;</li>
        <li>vos avis Google, ou un lien vers eux.</li>
      </ul>

      <h2>Votre zone d’intervention, commune par commune</h2>
      <p>
        On cherche « plombier » suivi du nom de sa ville. Listez sur votre site les communes où vous intervenez : Google
        comprend où vous travaillez, et le client sait tout de suite si vous vous déplacez chez lui. Inutile de créer une
        page par commune avec le même texte : Google les repère, et elles peuvent faire baisser tout votre site.
      </p>

      <h2>Vos prestations, avec les mots de vos clients</h2>
      <p>
        Les clients ne tapent pas « intervention sur réseau d’évacuation » mais « évier bouché » ou « débouchage
        canalisation ». Présentez vos prestations avec ces mots-là : recherche de fuite, débouchage, remplacement de
        chauffe-eau, rénovation de salle de bains, entretien de chaudière. Chaque prestation citée est une recherche de
        plus sur laquelle vous pouvez ressortir.
      </p>
      <p>
        Pour la carte Google Maps, qui s’affiche avant les sites, tout est dans le guide{' '}
        <GuideLink slug="referencement-local-google-maps">référencement local</GuideLink>.
      </p>

      <h2>Le site d’un plombier avec Nappage Studio</h2>
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, couvre l’essentiel : trois pages (accueil,
        prestations et tarifs, zone d’intervention et contact), votre fiche Google remise au propre et un QR code pour vos
        avis. J’écris les textes, j’affiche vos tarifs comme le demande l’arrêté, et je les mets à jour quand ils changent.
      </p>
      <p>
        Vous hésitez entre une agence et un indépendant ? Les différences sont dans{' '}
        <GuideLink slug="agence-web-ou-freelance">agence web ou freelance</GuideLink>.
      </p>
    </>
  );
}
