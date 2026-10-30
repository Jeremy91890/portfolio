import { Callout, GuideLink, Source, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi un plombier a-t-il besoin d’un site ?',
  appel: 'Que mettre en haut du site pour être appelé ?',
  tarifs: 'Faut-il afficher ses tarifs sur son site ?',
  confiance: 'Comment rassurer avant de faire entrer quelqu’un chez soi ?',
  zone: 'Comment indiquer sa zone d’intervention ?',
  prestations: 'Comment présenter ses prestations ?',
  prix: 'Combien coûte le site d’un plombier ?',
});

export default function Body() {
  return (
    <>
      <p>
        Une fuite sous l’évier, un chauffe-eau qui lâche, une salle de bains à refaire : on cherche un plombier sur son
        téléphone, souvent dans l’urgence. Ce guide vaut aussi pour les chauffagistes et les serruriers ; les électriciens
        ont le leur, <GuideLink slug="site-internet-electricien">site internet pour électricien</GuideLink>.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Les arnaques au dépannage sont connues, et avant de faire entrer quelqu’un chez soi, on vérifie. Même le client à
        qui l’on vous a recommandé tape votre nom sur Google avant d’appeler. S’il trouve un site avec votre nom, vos
        tarifs, vos assurances et des photos de vrais chantiers, il est rassuré. Le site vous fait aussi trouver par ceux
        qui cherchent « plombier » dans votre ville.
      </p>

      <Question id="appel" />
      <ul>
        <li>votre numéro en haut de chaque page, qu’on peut toucher sur téléphone pour appeler directement ;</li>
        <li>vos horaires, et si vous intervenez en urgence le soir ou le week-end ;</li>
        <li>
          un formulaire de demande de devis court : le type de travaux, la commune, un numéro de rappel, et la possibilité
          d’ajouter une photo du problème.
        </li>
      </ul>

      <Question id="tarifs" />
      <p>Oui, et pour le dépannage, la réparation et l’entretien à domicile, c’est obligatoire.</p>
      <Callout tone="law" title="Obligation légale : vos prix sur votre site">
        <p>
          L’<Source href="https://www.legifrance.gouv.fr/eli/arrete/2017/1/24/ECFC1701378A/jo/texte">arrêté du 24 janvier 2017</Source> impose d’informer le client des prix avant toute intervention, et de les afficher sur votre site si
          vous en avez un. Il faut y indiquer :
        </p>
        <ul>
        <li>votre ou vos taux horaires de main-d’œuvre, TTC ;</li>
        <li>la façon dont le temps est décompté ;</li>
        <li>le prix TTC de vos prestations au forfait, si vous en avez ;</li>
        <li>vos frais de déplacement, s’il y en a ;</li>
        <li>si le devis est gratuit ou payant, et son prix.</li>
        </ul>
      </Callout>
      <p>
        Un client qui voit vos prix écrits vous fait aussi plus confiance qu’à un numéro d’urgence sans nom ni adresse.
      </p>

      <Question id="confiance" />
      <ul>
        <li>votre nom, celui de votre entreprise et votre numéro SIRET, bien visibles ;</li>
        <li>votre assurance décennale, que vous indiquez déjà sur vos devis et vos factures ;</li>
        <li>
          vos qualifications : un label comme RGE compte pour les clients qui veulent une aide de l’État pour changer leur
          chaudière ou leur chauffe-eau ;
        </li>
        <li>des photos de vrais chantiers, avant et après ;</li>
        <li>vos avis Google, ou un lien vers eux.</li>
      </ul>

      <Question id="zone" />
      <p>
        On cherche « plombier » suivi du nom de sa ville. Listez sur votre site les communes où vous intervenez : Google
        comprend où vous travaillez, et le client voit tout de suite si vous vous déplacez chez lui.
      </p>
      <Callout tone="warning" title="À éviter : une page par commune">
        <p>Des pages au texte identique où seul le nom de la ville change sont repérées par Google, et elles peuvent faire baisser tout votre site.</p>
      </Callout>

      <Question id="prestations" />
      <p>
        Vos clients tapent « évier bouché » ou « débouchage canalisation », rarement « intervention sur réseau
        d’évacuation ». Reprenez leurs mots : recherche de fuite, débouchage, remplacement de chauffe-eau, rénovation de
        salle de bains, entretien de chaudière. Chaque prestation citée est une recherche de plus sur laquelle vous pouvez
        apparaître.
      </p>
      <p>
        Pour la carte Google Maps, qui s’affiche avant les sites, tout est dans le guide{' '}
        <GuideLink slug="referencement-local-google-maps">référencement local</GuideLink>.
      </p>

      <Question id="prix" />
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, couvre l’essentiel : trois pages (accueil,
        prestations et tarifs, zone d’intervention et contact), votre fiche Google remise au propre et un QR code pour vos
        avis. J’écris les textes, j’affiche vos tarifs comme le demande l’arrêté, et je les mets à jour quand ils changent.
      </p>
      <p>
        Vous hésitez entre une agence et un indépendant ? Les différences sont dans{' '}
        <GuideLink slug="agence-web-ou-freelance">agence web ou freelance</GuideLink>.
      </p>
    </>
  );
}
