import { GuideLink, plan, pricing, questions } from './shared';

const { Summary, Question } = questions(
  {
    definition: 'WordPress, c’est quoi ?',
    cout: 'Ce que WordPress coûte vraiment',
    'mises-a-jour': 'Les mises à jour et la sécurité',
    'bon-choix': 'Quand WordPress est un bon choix',
    'mauvais-choix': 'Quand ce n’est pas le cas',
    comparaison: 'WordPress ou Nappage ?',
  },
  { title: 'Au sommaire' },
);

export default function Body() {
  return (
    <>
      <p>
        WordPress fait tourner une grande partie des sites du monde, et on vous l’a sûrement conseillé : « c’est gratuit,
        tu le fais toi-même ». C’est vrai, et c’est un bon outil. Il y a pourtant des frais à côté, et surtout du travail.
      </p>

      <Summary />


      <Question id="definition" />
      <p>
        Un logiciel libre qui permet de créer et de gérer un site. On l’installe sur un hébergement, on choisit un thème
        (l’apparence), et on ajoute des extensions pour les fonctions en plus : formulaire de contact, réservation, galerie
        photo, référencement…
      </p>

      <Question id="cout" />
      <ul>
        <li>un hébergement et un nom de domaine, à payer chaque année ;</li>
        <li>un thème : il en existe des gratuits, mais les plus aboutis sont souvent payants ;</li>
        <li>des extensions, dont beaucoup ont une version gratuite limitée et une version complète par abonnement ;</li>
        <li>
          votre temps, pour apprendre l’outil, construire les pages et écrire les textes. Pour un commerçant, c’est le poste
          le plus lourd.
        </li>
      </ul>

      <Question id="mises-a-jour" />
      <p>
        WordPress, le thème et chaque extension reçoivent régulièrement des mises à jour, souvent pour corriger des failles
        de sécurité. Un site WordPress qu’on ne met pas à jour devient une cible, et une mise à jour peut parfois casser une
        extension ou la mise en page.
      </p>
      <p>Concrètement, il faut :</p>
      <ul>
        <li>faire les mises à jour régulièrement ;</li>
        <li>vérifier ensuite que tout fonctionne encore ;</li>
        <li>avoir des sauvegardes, et savoir les restaurer ;</li>
        <li>savoir quoi faire si le site affiche une page blanche un dimanche soir.</li>
      </ul>

      <Question id="bon-choix" />
      <ul>
        <li>vous aimez bricoler et vous avez du temps ;</li>
        <li>vous publiez souvent des articles, comme un blog ;</li>
        <li>vous avez besoin d’une extension bien précise ;</li>
        <li>un prestataire s’occupe de la maintenance pour vous.</li>
      </ul>

      <Question id="mauvais-choix" />
      <p>
        Un site vitrine de commerce doit surtout être exact, à jour et visible sur Google. Pour ça, WordPress demande
        souvent plus d’entretien que nécessaire, à moins que quelqu’un s’en charge pour vous.
      </p>

      <Question id="comparaison" />
      <p>
        Avec Nappage, vous n’installez rien et vous ne mettez rien à jour. Hébergement, nom de domaine, sécurité,
        sauvegardes et mises à jour sont inclus dans toutes les formules, et je rédige vos textes. Si vous voulez quand même
        modifier votre site vous-même, un espace simple est inclus en Pro et Premium (en option à{' '}
        {pricing.options.backofficePerMonth} €/mois en Essentiel).
      </p>
      <p>
        Le tout dès <strong>{plan('essentiel').price} €/mois</strong>, avec {pricing.setupFee} € de mise en place. Pour
        comparer avec les autres solutions, lisez{' '}
        <GuideLink slug="prix-site-web-commercant">combien coûte un site web pour un commerçant</GuideLink>.
      </p>
    </>
  );
}
