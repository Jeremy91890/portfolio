import { GuideLink, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi une boutique de cadeaux a-t-elle besoin d’un site ?',
  produits: 'Que montrer de ses produits ? Faut-il mettre tout son stock en ligne ?',
  idees: 'Comment aider les clients qui cherchent une idée cadeau ?',
  visiteurs: 'Que dire aux visiteurs de passage ?',
  saisons: 'Que faire du site avant Noël et la saison touristique ?',
  google: 'Comment ressortir sur Google quand on cherche une idée cadeau ?',
  prix: 'Combien coûte le site d’une boutique de cadeaux ?',
});

export default function Body() {
  return (
    <>
      <p>
        Une boutique de cadeaux ou de souvenirs a deux clientèles : les habitants qui cherchent une idée pour un
        anniversaire, et les visiteurs de passage qui veulent rapporter quelque chose de la région.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Les deux vous cherchent sur leur téléphone avant de venir, souvent sur Google Maps. Le visiteur veut savoir si vous
        êtes ouvert et ce qu’il trouvera chez vous ; l’habitant cherche un cadeau dans son budget. Le site répond aux deux,
        et il aide Google à vous proposer quand on cherche « cadeaux » ou « souvenirs » dans votre ville.
      </p>

      <Question id="produits" />
      <p>Vos grandes familles de produits, avec de vraies photos :</p>
      <ul>
        <li>déco, vaisselle, papeterie, bijoux, savons, épicerie fine : ce qui fait le cœur de votre boutique ;</li>
        <li>les créateurs et les artisans locaux que vous mettez en avant, avec leur nom ;</li>
        <li>les produits de la région et les souvenirs qu’on ne trouve que chez vous ;</li>
        <li>une idée des prix, par exemple « petits cadeaux dès 5 € ».</li>
      </ul>
      <p>Inutile de mettre tout votre stock en ligne : le site sert à donner envie de venir.</p>

      <Question id="idees" />
      <p>
        Beaucoup de clients savent pour quelle occasion ils cherchent, pas quoi acheter. Une page ou un encart « idées
        cadeaux » les aide : naissance, anniversaire, fête des mères et des pères, Noël, cadeau pour la maîtresse en fin
        d’année. Ajoutez-y vos services : paquet cadeau, carte cadeau, coffrets composés à la demande.
      </p>

      <Question id="visiteurs" />
      <ul>
        <li>vos horaires selon la saison, et vos ouvertures le dimanche et les jours fériés ;</li>
        <li>l’adresse avec un lien vers l’itinéraire, et le parking ou l’arrêt le plus proche ;</li>
        <li>ce qui fait la particularité de la région dans vos rayons : produits, artisans, spécialités ;</li>
        <li>si votre clientèle est très touristique, quelques lignes en anglais peuvent aider.</li>
      </ul>

      <Question id="saisons" />
      <p>
        Noël représente souvent une grosse part du chiffre d’une boutique de cadeaux, et la saison touristique celle d’une
        boutique de souvenirs. Annoncez vos nouveautés, vos horaires élargis et vos marchés de créateurs quelques semaines
        avant, sur le site et sur votre fiche Google.
      </p>

      <Question id="google" />
      <ul>
        <li>
          une fiche Google Maps complète, avec des photos de la vitrine et des rayons, et vos horaires de saison (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>
          les mots que les clients tapent, écrits dans vos textes avec votre ville : « boutique de cadeaux », « souvenirs »,
          « créateurs locaux », « produits régionaux » ;
        </li>
        <li>
          des avis récents, à demander avec un QR code près de la caisse (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <Question id="prix" />
      <p>
        Une page claire suffit souvent pour commencer : c’est la formule Essentiel, à{' '}
        <strong>{plan('essentiel').price} €/mois</strong>. La formule Pro (<strong>{plan('pro').price} €/mois</strong>)
        ajoute deux pages, par exemple les créateurs et les idées cadeaux, votre fiche Google remise au propre et un QR code
        pour vos avis. Pour la réservation d’articles ou le click & collect, je développe l’outil sur devis.
      </p>
      <p>
        Pour faire revenir vos clients à chaque fête, voyez{' '}
        <GuideLink slug="newsletter-commerce-local">la newsletter pour commerce local</GuideLink>.
      </p>
    </>
  );
}
