import { GuideLink, Source, plan, pricing, questions } from './shared';

const { Summary, Question } = questions(
  {
    recherche: 'Vos clients vous cherchent avant de venir',
    apports: 'Ce qu’un site apporte à un commerce local',
    contenu: 'Ce que le site d’un commerce doit contenir',
    creation: 'Comment créer le site de votre commerce',
  },
  { title: 'Au sommaire' },
);

export default function Body() {
  return (
    <>
      <p>
        Vous avez une boutique, un salon ou un atelier, des clients fidèles, et le bouche-à-oreille fonctionne. Seulement,
        quand on vous recommande à quelqu’un, il y a de bonnes chances qu’il tape votre nom sur Google avant de venir.
      </p>

      <Summary />


      <Question id="recherche" />
      <p>
        <strong>76 % des Français</strong> cherchent des informations en ligne avant de se rendre en magasin (
        <Source href="https://www.ecommerce-nation.fr/etude-shopfully-2025-priorites-achat-francais/">
          Shopfully, The State of Shopping 2025
        </Source>
        ). Ils veulent savoir si vous êtes ouvert, où se garer, ce que vous vendez et à quel prix.
      </p>
      <p>
        Pourtant, <strong>48 % des indépendants</strong> n’ont pas de site (
        <Source href="https://www.francenum.gouv.fr/files/2026-09/Barom%C3%A8tre%20France%20Num%202026%20-%20Rapport%20final.pdf">
          Baromètre France Num 2026
        </Source>
        ). Un commerce qui en a un part donc avec une longueur d’avance sur près de la moitié des indépendants.
      </p>

      <Question id="apports" />
      <p>
        D’abord, Google. Quand quelqu’un tape « fleuriste » ou « coiffeur » suivi de sa ville, Google montre les commerces
        qu’il connaît, et un site lui en apprend beaucoup plus sur vous qu’une simple fiche. J’en parle dans le guide sur{' '}
        <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>.
      </p>
      <p>
        Ensuite, les questions pratiques. Si vos horaires, vos fermetures exceptionnelles, l’accès et vos tarifs sont sur le
        site, on vous appelle moins pendant que vous servez.
      </p>
      <p>
        Un site clair et à jour rassure aussi, surtout avant un premier achat ou un premier rendez-vous. Et il est à vous :
        sur les réseaux sociaux, c’est l’algorithme qui décide qui voit vos publications (voir{' '}
        <GuideLink slug="site-web-ou-instagram">site web ou Instagram</GuideLink>).
      </p>
      <p>
        Enfin, il y a les avis. 54 % des consommateurs visitent le site d’un commerce après avoir lu des avis positifs (
        <Source href="https://www.brightlocal.com/resources/local-seo-statistics/">
          BrightLocal, Local Consumer Review Survey 2026
        </Source>
        ). Sans site, ces curieux s’arrêtent à votre fiche Google.
      </p>

      <Question id="contenu" />
      <p>Pas besoin de quinze pages. L’essentiel tient souvent sur une seule :</p>
      <ul>
        <li>ce que vous faites, en une phrase, tout en haut ;</li>
        <li>vos horaires, y compris les fermetures exceptionnelles, toujours à jour ;</li>
        <li>votre adresse avec un plan, et un numéro de téléphone qu’on peut toucher pour appeler ;</li>
        <li>vos produits ou vos prestations, avec les prix quand c’est possible ;</li>
        <li>de vraies photos de votre commerce et de votre travail ;</li>
        <li>les liens vers vos réseaux sociaux et vos avis Google.</li>
      </ul>
      <p>
        Une boulangerie ne met pas en avant les mêmes infos qu’un plombier : le détail métier par métier est dans le guide{' '}
        <GuideLink slug="site-internet-artisan-commercant">site internet pour artisan</GuideLink>.
      </p>

      <Question id="creation" />
      <p>
        Vous pouvez le faire vous-même avec un outil en ligne. C’est peu cher, mais c’est vous qui écrivez, montez les pages
        et faites les mises à jour, le soir après la fermeture. Une agence fait un travail sur mesure, pour plusieurs
        milliers d’euros et après des semaines d’attente (voir{' '}
        <GuideLink slug="agence-web-ou-freelance">agence web ou freelance</GuideLink>). Reste le site clé en main par
        abonnement : quelqu’un le crée, l’héberge et le met à jour pour vous, pour un prix fixe chaque mois.
      </p>
      <p>
        C’est ce que je propose : dès <strong>{plan('essentiel').price} €/mois</strong>, {pricing.setupFee} € de mise en
        place, et un site en ligne en {pricing.launchDays} jours. Je rédige vos textes et je m’occupe de l’hébergement, du
        nom de domaine et des mises à jour. Le détail des prix est dans le guide{' '}
        <GuideLink slug="prix-site-web-commercant">combien coûte un site web pour un commerçant</GuideLink>.
      </p>
    </>
  );
}
