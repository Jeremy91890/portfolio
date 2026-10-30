import { GuideLink, plan } from './shared';

export default function Body() {
  return (
    <>
      <p>
        Une boutique de cadeaux ou de souvenirs vit de deux clientèles : les gens du coin qui cherchent une idée pour un
        anniversaire, et les visiteurs de passage qui veulent rapporter quelque chose de la région. Les deux vous cherchent
        sur leur téléphone, souvent sur Google Maps. Voici ce que le site de votre boutique doit leur montrer.
      </p>

      <h2>Ce que l’on trouve chez vous, en un coup d’œil</h2>
      <p>
        On ne pousse pas la porte d’une boutique de cadeaux sans savoir à quoi s’attendre. Présentez vos grandes familles de
        produits avec de vraies photos :
      </p>
      <ul>
        <li>déco, vaisselle, papeterie, bijoux, savons, épicerie fine : ce qui fait le cœur de votre boutique ;</li>
        <li>les créateurs et les artisans locaux que vous mettez en avant, avec leur nom ;</li>
        <li>les produits de la région et les souvenirs qu’on ne trouve que chez vous ;</li>
        <li>une idée des prix, par exemple « petits cadeaux dès 5 € ».</li>
      </ul>
      <p>
        Inutile de mettre tout votre stock en ligne : le site donne envie de venir, la boutique fait le reste.
      </p>

      <h2>Les idées cadeaux, par occasion</h2>
      <p>
        Beaucoup de clients arrivent avec une occasion, pas avec un produit en tête. Une page ou un encart « idées cadeaux »
        les aide : naissance, anniversaire, fête des mères et des pères, Noël, cadeau pour la maîtresse en fin d’année.
        Ajoutez-y vos services : paquet cadeau, carte cadeau, coffrets composés à la demande.
      </p>

      <h2>Pour les visiteurs de passage</h2>
      <ul>
        <li>vos horaires selon la saison, et vos ouvertures le dimanche et les jours fériés ;</li>
        <li>l’adresse avec un lien vers l’itinéraire, et le parking ou l’arrêt le plus proche ;</li>
        <li>ce qui fait la particularité de la région dans vos rayons : produits, artisans, spécialités ;</li>
        <li>si votre clientèle est très touristique, quelques lignes en anglais peuvent aider.</li>
      </ul>

      <h2>Les temps forts de l’année</h2>
      <p>
        Noël représente souvent une grosse part du chiffre d’une boutique de cadeaux, et la saison touristique celle d’une
        boutique de souvenirs. Annoncez vos nouveautés, vos horaires élargis et vos marchés de créateurs quelques semaines
        avant, sur le site et sur votre fiche Google.
      </p>

      <h2>Ressortir sur Google quand on cherche une idée cadeau</h2>
      <ul>
        <li>
          une fiche Google Maps complète, avec des photos de la vitrine et des rayons, et vos horaires de saison (voir{' '}
          <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>) ;
        </li>
        <li>
          les mots que les clients tapent, écrits dans vos textes avec votre ville : « boutique de cadeaux », « souvenirs »,
          « créateurs locaux », « produits régionaux » ;
        </li>
        <li>
          des avis récents, à demander avec un QR code près de la caisse (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <h2>Le site d’une boutique de cadeaux avec Nappage Studio</h2>
      <p>
        Une page claire suffit souvent pour commencer : c’est la formule Essentiel, à{' '}
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
