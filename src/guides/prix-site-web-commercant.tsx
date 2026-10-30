import { GuideLink, Source, lcFirst, plan, pricing, questions } from './shared';
import { agency, duel, euros, solocal, sources } from '../data/market';

const { Summary, Question } = questions(
  {
    postes: 'Ce que vous payez, poste par poste',
    vitrine: 'Site vitrine ou boutique en ligne ?',
    solutions: 'Le tarif d’un site vitrine selon la solution',
    formules: 'Mes formules',
    'couts-caches': 'Les coûts cachés à vérifier avant de signer',
  },
  { title: 'Au sommaire' },
);

export default function Body() {
  return (
    <>
      <p>
        « Combien ça coûte, un site ? » La réponse va de presque rien à plusieurs milliers d’euros, selon qui fait le
        travail. Voici ce que vous payez, poste par poste, et ce qu’il faut vérifier avant de signer.
      </p>

      <Summary />


      <Question id="postes" />
      <ul>
        <li>Le nom de domaine (votre-commerce.fr), à renouveler chaque année. Il doit être à votre nom.</li>
        <li>L’hébergement, c’est-à-dire le serveur qui fait tourner votre site, payé au mois ou à l’année.</li>
        <li>La création : la conception, la mise en page, l’adaptation au téléphone.</li>
        <li>
          Les textes et les photos, souvent absents des devis alors que c’est ce qui demande le plus de temps à préparer.
        </li>
        <li>
          La maintenance : mises à jour de sécurité, sauvegardes, petites modifications (horaires, tarifs, nouveaux
          produits).
        </li>
        <li>Le référencement, pour que Google vous trouve et vous montre aux bonnes personnes.</li>
      </ul>

      <Question id="vitrine" />
      <p>
        Un <strong>site vitrine</strong> présente votre commerce : qui vous êtes, ce que vous proposez, où et quand vous
        trouver. C’est ce dont la plupart des commerces de proximité ont besoin. Une boutique en ligne, avec paiement et
        gestion du stock, coûte nettement plus cher à créer et à faire vivre. Si vous voulez simplement que vos clients
        commandent avant de passer, un click & collect suffit souvent.
      </p>

      <Question id="solutions" />
      <div className="prose__table">
        <table>
          <thead>
            <tr>
              <th scope="col">Solution</th>
              <th scope="col">Prix</th>
              <th scope="col">Qui fait le travail</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">{duel.diy.name}</th>
              <td>{duel.diy.price}</td>
              <td>Vous : création, textes, mises à jour</td>
            </tr>
            <tr>
              <th scope="row">Clé en main ({duel.elsewhere.brand})</th>
              <td>{duel.elsewhere.price}</td>
              <td>{duel.elsewhere.brand}, mais vos textes sont à fournir</td>
            </tr>
            <tr>
              <th scope="row">Agence web</th>
              <td>
                Création dès {euros(agency.setup)}, puis maintenance dès {agency.monthly} €/mois
              </td>
              <td>L’agence, en {agency.weeks} semaines</td>
            </tr>
            <tr>
              <th scope="row">Nappage</th>
              <td>{duel.mine.price}</td>
              <td>Moi : création, textes et mises à jour</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Sur le papier, le faire soi-même coûte le moins cher. Il faut pourtant y ajouter le temps passé à apprendre
        l’outil, écrire, choisir les photos et revenir faire les mises à jour, en général le soir après la fermeture.
      </p>

      <Question id="formules" />
      <ul>
        <li>
          <strong>Essentiel, {plan('essentiel').price} €/mois</strong> : {lcFirst(plan('essentiel').tagline)}.
        </li>
        <li>
          <strong>Pro, {plan('pro').price} €/mois</strong> : {lcFirst(plan('pro').tagline)}, plus le QR code pour vos avis
          Google.
        </li>
        <li>
          <strong>Premium, {plan('premium').price} €/mois</strong> : {lcFirst(plan('premium').tagline)}, newsletter
          incluse.
        </li>
      </ul>
      <p>
        Les trois comprennent {pricing.setupFee} € de mise en place, le nom de domaine et l’hébergement, la sécurité, les
        sauvegardes et les mises à jour, le référencement Google de base, et des textes rédigés pour vous. C’est sans
        engagement : vous arrêtez quand vous voulez. Tout le détail est dans le{' '}
        <a href="/#tarifs">tableau des formules</a>.
      </p>

      <Question id="couts-caches" />
      <ul>
        <li>Le nom de domaine est-il à votre nom ? Sinon, vous perdez votre adresse en changeant de prestataire.</li>
        <li>Les modifications sont-elles comprises ? Changer des horaires ne devrait pas demander un devis.</li>
        <li>
          Combien de temps êtes-vous engagé ? Méfiez-vous des contrats sur plusieurs années : chez {solocal.brand}, par
          exemple, l’engagement est de {solocal.commitment}, puis se renouvelle par périodes de {solocal.renewalMonths}{' '}
          mois.
        </li>
        <li>Que se passe-t-il si vous arrêtez ? Vous devez pouvoir récupérer votre site, ou au moins vos textes et vos photos.</li>
      </ul>
      <p>
        Ces questions valent pour une agence comme pour un indépendant. J’y reviens dans{' '}
        <GuideLink slug="agence-web-ou-freelance">agence web ou freelance</GuideLink>.
      </p>

      <h3>Sources des prix</h3>
      <ul className="prose__sources">
        {sources.map((s) => (
          <li key={s.url}>
            <Source href={s.url}>{s.label}</Source>
          </li>
        ))}
      </ul>
    </>
  );
}
