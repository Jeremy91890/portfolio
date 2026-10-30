import { GuideLink, Source, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        Une panne de courant, un tableau qui disjoncte, une maison à rénover, une borne de recharge à installer : on cherche
        un électricien près de chez soi, et on veut être sûr de faire entrer quelqu’un de sérieux. Voici ce que le site d’un
        électricien doit montrer pour être appelé, et ce que la loi lui demande d’afficher.
      </p>

      <h2>Dépannage et travaux : deux demandes différentes</h2>
      <p>
        Le client en panne veut un numéro et savoir si vous venez aujourd’hui. Celui qui prépare des travaux veut un devis
        et des preuves de votre sérieux. Votre site doit servir les deux :
      </p>
      <ul>
        <li>votre numéro en haut de chaque page, qu’on peut toucher sur téléphone pour appeler ;</li>
        <li>vos horaires, et si vous intervenez en urgence le soir ou le week-end ;</li>
        <li>
          un formulaire de demande de devis court : le type de travaux, la commune, le type de logement, une photo si besoin.
        </li>
      </ul>

      <h2>Vos tarifs de dépannage, affichés sur le site</h2>
      <p>
        Comme pour les plombiers, l’
        <Source href="https://www.legifrance.gouv.fr/eli/arrete/2017/1/24/ECFC1701378A/jo/texte">
          arrêté du 24 janvier 2017
        </Source>{' '}
        demande aux professionnels du dépannage à domicile qui ont un site d’y afficher leurs taux horaires TTC, la façon
        dont le temps est décompté, leurs forfaits, leurs frais de déplacement, et si le devis est payant. Un client qui
        voit vos prix avant d’appeler vous fait aussi davantage confiance.
      </p>

      <h2>Vos prestations, avec les mots de vos clients</h2>
      <p>
        Les clients cherchent « électricien mise aux normes », « remplacement tableau électrique » ou « installation borne
        de recharge », pas « travaux d’électricité générale ». Listez vos prestations avec ces mots :
      </p>
      <ul>
        <li>dépannage et recherche de panne ;</li>
        <li>mise en sécurité et mise aux normes, rénovation électrique complète ;</li>
        <li>installation neuve, éclairage, prises, domotique ;</li>
        <li>borne de recharge pour voiture électrique, si vous avez la qualification pour l’installer ;</li>
        <li>chauffage électrique, interphone, alarme, selon ce que vous faites.</li>
      </ul>

      <h2>Ce qui rassure</h2>
      <ul>
        <li>votre nom, celui de l’entreprise et votre numéro SIRET, bien visibles ;</li>
        <li>votre assurance décennale, que vous indiquez déjà sur vos devis et vos factures ;</li>
        <li>vos qualifications et vos labels, avec leur nom exact ;</li>
        <li>des photos de chantiers : tableau avant et après, rénovation terminée ;</li>
        <li>vos avis Google, ou un lien vers eux.</li>
      </ul>

      <h2>Votre zone d’intervention</h2>
      <p>
        Indiquez les communes où vous vous déplacez, sur une seule page : Google comprend où vous travaillez, et le client
        sait tout de suite si vous venez chez lui. Évitez les dizaines de pages identiques où seul le nom de la ville
        change : Google les repère, et elles peuvent faire baisser tout votre site.
      </p>
      <p>
        Pour la carte Google Maps, qui s’affiche avant les sites, tout est dans le guide{' '}
        <GuideLink slug="referencement-local-google-maps">référencement local</GuideLink>.
      </p>

      <h2>Le site d’un électricien avec Nappage Studio</h2>
      <p>
        La formule Pro, à <strong>{plan('pro').price} €/mois</strong>, couvre l’essentiel : trois pages (accueil,
        prestations et tarifs, zone d’intervention et contact), votre fiche Google remise au propre et un QR code pour vos
        avis. J’écris les textes, j’affiche vos tarifs comme le demande l’arrêté, et je les mets à jour quand ils changent.
      </p>
      <p>
        Vous êtes aussi plombier ou chauffagiste ? Voyez{' '}
        <GuideLink slug="site-internet-plombier">site internet pour plombier</GuideLink>.
      </p>
    </>
  );
}
