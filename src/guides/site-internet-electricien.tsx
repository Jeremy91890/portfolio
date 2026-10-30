import { Callout, GuideLink, Source, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi un électricien a-t-il besoin d’un site ?',
  demandes: 'Comment répondre à la fois aux urgences et aux demandes de devis ?',
  tarifs: 'Faut-il afficher ses tarifs de dépannage ?',
  prestations: 'Comment présenter ses prestations ?',
  confiance: 'Comment rassurer un client qui ne vous connaît pas ?',
  zone: 'Comment indiquer sa zone d’intervention ?',
  prix: 'Combien coûte le site d’un électricien ?',
});

export default function Body() {
  return (
    <>
      <p>
        Une panne de courant, un tableau qui disjoncte, une maison à rénover, une borne de recharge à installer : on cherche
        un électricien près de chez soi, et on veut être sûr de faire entrer quelqu’un de sérieux.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Celui qui cherche « électricien » dans sa ville appelle l’un des premiers qu’il trouve. Celui à qui l’on vous a
        recommandé vérifie votre nom en ligne avant d’appeler. Dans les deux cas, un site avec vos prestations, vos tarifs,
        vos qualifications et des photos de chantiers vous sert bien plus qu’un numéro dans un annuaire.
      </p>

      <Question id="demandes" />
      <p>
        Le client en panne veut un numéro et savoir si vous pouvez venir aujourd’hui ; celui qui prépare des travaux veut un
        devis et des preuves de votre sérieux. Le site doit servir les deux :
      </p>
      <ul>
        <li>votre numéro en haut de chaque page, qu’on peut toucher sur téléphone pour appeler ;</li>
        <li>vos horaires, et si vous intervenez en urgence le soir ou le week-end ;</li>
        <li>
          un formulaire de demande de devis court : le type de travaux, la commune, le type de logement, une photo si besoin.
        </li>
      </ul>

      <Question id="tarifs" />
      <p>Oui, et si vous faites du dépannage à domicile, c’est obligatoire.</p>
      <Callout tone="law" title="Obligation légale : vos prix sur votre site">
        <p>
          Comme pour les plombiers, l’<Source href="https://www.legifrance.gouv.fr/eli/arrete/2017/1/24/ECFC1701378A/jo/texte">arrêté du 24 janvier 2017</Source> demande aux professionnels qui ont un site d’y afficher leurs taux horaires
          TTC, la façon dont le temps est décompté, leurs forfaits, leurs frais de déplacement, et si le devis est payant.
        </p>
      </Callout>
      <p>Les clients qui voient vos prix avant d’appeler vous font aussi plus confiance.</p>

      <Question id="prestations" />
      <p>
        Avec les mots de vos clients, qui cherchent « électricien mise aux normes », « remplacement tableau électrique » ou
        « installation borne de recharge » bien plus que « travaux d’électricité générale ». Par exemple :
      </p>
      <ul>
        <li>dépannage et recherche de panne ;</li>
        <li>mise en sécurité et mise aux normes, rénovation électrique complète ;</li>
        <li>installation neuve, éclairage, prises, domotique ;</li>
        <li>borne de recharge pour voiture électrique, si vous avez la qualification pour l’installer ;</li>
        <li>chauffage électrique, interphone, alarme, selon ce que vous faites.</li>
      </ul>

      <Question id="confiance" />
      <ul>
        <li>votre nom, celui de l’entreprise et votre numéro SIRET, bien visibles ;</li>
        <li>votre assurance décennale, que vous indiquez déjà sur vos devis et vos factures ;</li>
        <li>vos qualifications et vos labels, avec leur nom exact ;</li>
        <li>des photos de chantiers : tableau avant et après, rénovation terminée ;</li>
        <li>vos avis Google, ou un lien vers eux.</li>
      </ul>

      <Question id="zone" />
      <p>
        Sur une seule page, avec la liste des communes où vous vous déplacez : Google comprend où vous travaillez, et le
        client voit tout de suite si vous venez chez lui.
      </p>
      <Callout tone="warning" title="À éviter : une page par commune">
        <p>Des dizaines de pages identiques où seul le nom de la ville change sont repérées par Google, et elles peuvent faire baisser tout votre site.</p>
      </Callout>
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
        Vous êtes aussi plombier ou chauffagiste ? Voyez{' '}
        <GuideLink slug="site-internet-plombier">site internet pour plombier</GuideLink>.
      </p>
    </>
  );
}
