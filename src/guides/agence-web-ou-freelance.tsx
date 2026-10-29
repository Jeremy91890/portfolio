import { GuideLink, Source, plan } from './shared';
import { agency, euros, sources } from '../data/market';
import { site } from '../data/site';

// Sources agence (création, maintenance, délai), reprises de market.ts
const agencySources = sources.filter((s) => s.label.startsWith('Agence'));

export default function Body() {
  return (
    <>
      <p>
        Pour le site de votre commerce, vous hésitez entre une agence web et un développeur indépendant. Les deux peuvent
        faire du bon travail. Ils diffèrent sur le prix, le délai, la personne à qui vous parlez, et ce qui se passe en cas
        de problème.
      </p>

      <h2>L’agence web</h2>
      <p>
        Une agence, c’est une équipe : un chef de projet, un graphiste, un développeur, parfois un rédacteur. C’est
        rassurant, et adapté aux gros projets. Vous passez par le chef de projet, qui transmet à l’équipe, et il peut
        changer en cours de route.
      </p>

      <h2>Le développeur web indépendant</h2>
      <p>
        Un freelance travaille seul et fait tout ou presque. Vous parlez toujours à la personne qui fait le travail, sans
        intermédiaire, ce qui raccourcit souvent les délais. Sans les frais de structure d’une agence, ses prix sont en
        général plus bas.
      </p>
      <p>
        Le risque, c’est qu’il soit indisponible ou qu’il arrête son activité. C’est la question à lui poser avant de
        signer.
      </p>

      <h2>Les chiffres côte à côte</h2>
      <div className="prose__table">
        <table>
          <thead>
            <tr>
              <td />
              <th scope="col">Agence web</th>
              <th scope="col">Développeur indépendant</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Prix</th>
              <td>
                Souvent {euros(agency.setup)} pour la création, puis {agency.monthly} €/mois de maintenance
              </td>
              <td>Généralement plus bas</td>
            </tr>
            <tr>
              <th scope="row">Délai</th>
              <td>{agency.weeks} semaines en moyenne</td>
              <td>Souvent plus court</td>
            </tr>
            <tr>
              <th scope="row">Interlocuteur</th>
              <td>Un chef de projet</td>
              <td>Celui qui fait le travail</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Pour un commerce, que choisir ?</h2>
      <p>
        Pour un site vitrine de commerce ou d’artisan, une agence est souvent surdimensionnée : vous payez une équipe pour
        un projet qu’une personne expérimentée mène très bien seule. L’agence a du sens pour un projet complexe, comme une
        grosse boutique en ligne, plusieurs établissements ou une application sur mesure.
      </p>

      <h2>Les questions à poser à n’importe quel prestataire</h2>
      <ul>
        <li>Le nom de domaine sera-t-il à mon nom ? (Il doit l’être.)</li>
        <li>Que comprend le prix mensuel : hébergement, mises à jour, combien de modifications par mois ?</li>
        <li>Que se passe-t-il si j’arrête, ou si vous arrêtez ? Pouvez-vous me remettre le site ?</li>
        <li>Qui écrit les textes ? C’est souvent ce qui fait traîner un projet.</li>
        <li>Avez-vous un numéro SIRET et des réalisations à montrer ?</li>
      </ul>

      <h2>Ce que je propose</h2>
      <p>
        Je suis {site.name}, développeur web depuis 10 ans, aujourd’hui indépendant. Je crée les sites des commerçants et
        des artisans partout en France, avec un suivi en visio. Pour lever le « risque freelance », je m’engage par écrit :
      </p>
      <ul>
        <li>le nom de domaine, vos textes et vos photos restent à vous ;</li>
        <li>
          vous pouvez racheter le site complet ({plan('essentiel').buyoutPrice} € pour Essentiel,{' '}
          {plan('pro').buyoutPrice} € pour Pro) ;
        </li>
        <li>si c’est moi qui arrête, je vous remets votre site gratuitement.</li>
      </ul>
      <p>
        Côté budget, la formule Pro coûte {plan('pro').price} €/mois, tout compris. Le comparatif complet est dans{' '}
        <GuideLink slug="prix-site-web-commercant">combien coûte un site web pour un commerçant</GuideLink>.
      </p>

      <h3>Sources des chiffres agence</h3>
      <ul className="prose__sources">
        {agencySources.map((s) => (
          <li key={s.url}>
            <Source href={s.url}>{s.label}</Source>
          </li>
        ))}
      </ul>
    </>
  );
}
