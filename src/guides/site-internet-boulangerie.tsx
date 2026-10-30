import { GuideLink, plan, questions } from './shared';

const { Summary, Question } = questions({
  pourquoi: 'Pourquoi une boulangerie a-t-elle besoin d’un site ?',
  horaires: 'Que mettre en premier sur le site d’une boulangerie ?',
  commandes: 'Comment présenter les commandes de gâteaux et de pièces montées ?',
  fetes: 'Que faire du site à l’approche des fêtes ?',
  photos: 'Quelles photos et quels textes pour vos spécialités ?',
  google: 'Comment faire ressortir sa boulangerie sur Google ?',
  prix: 'Combien coûte le site d’une boulangerie ?',
});

export default function Body() {
  return (
    <>
      <p>
        « Boulangerie ouverte dimanche », « commander une bûche », « galette des rois près de chez moi » : vos clients
        cherchent une boulangerie sur leur téléphone, souvent au dernier moment. Ils veulent savoir si vous êtes ouvert, ce
        que vous faites et comment commander.
      </p>
      <Summary />

      <Question id="pourquoi" />
      <p>
        Le bouche-à-oreille et votre fiche Google vous amènent déjà des clients. Le site a la place de détailler vos
        commandes et vos fêtes, et de répondre aux questions qu’on vous pose sans arrêt au téléphone. Il vous appartient :
        aucun algorithme ne décide qui voit ce que vous publiez. Google s’en sert aussi pour comprendre ce que vous vendez
        et vous proposer aux bonnes personnes. D’autres raisons dans{' '}
        <GuideLink slug="pourquoi-creer-un-site-pour-son-commerce">pourquoi créer un site pour son commerce</GuideLink>.
      </p>

      <Question id="horaires" />
      <p>
        Les horaires, parce que c’est ce qu’on cherche en premier. S’ils sont faux, le client qui trouve porte close le
        dimanche ne reviendra peut-être pas.
      </p>
      <ul>
        <li>vos horaires de la semaine, visibles dès l’ouverture du site, sans avoir à chercher ;</li>
        <li>votre jour de fermeture hebdomadaire, écrit clairement ;</li>
        <li>vos congés annuels, annoncés quelques semaines avant ;</li>
        <li>vos horaires des jours fériés et des fêtes, mis à jour sur le site et sur votre fiche Google en même temps.</li>
      </ul>

      <Question id="commandes" />
      <p>
        Les commandes rapportent souvent le plus, et un site bien fait vous évite de tout réexpliquer au comptoir. Pour
        chaque type de commande, indiquez :
      </p>
      <ul>
        <li>
          ce que vous proposez (entremets, pièces montées, gâteaux d’anniversaire, plateaux, viennoiseries pour les
          entreprises) ;
        </li>
        <li>le délai pour commander, par exemple 48 heures avant, ou une semaine pour une pièce montée ;</li>
        <li>comment passer commande : en boutique, par téléphone ou avec un formulaire simple ;</li>
        <li>s’il faut verser un acompte.</li>
      </ul>
      <p>
        Pour les allergènes, le plus simple est d’écrire que la liste est disponible en boutique et sur demande, et de la
        mettre en ligne si vous prenez des commandes à distance.
      </p>

      <Question id="fetes" />
      <p>
        Les recherches de bûches, de galettes ou de chocolats commencent quelques semaines avant Noël, l’Épiphanie, Pâques
        ou la fête des mères. Mettez à jour une page ou un encart sur l’accueil avant ce moment, avec les parfums, les
        tailles et la date limite de commande : on vous appellera moins pour poser la même question.
      </p>

      <Question id="photos" />
      <p>
        Le pain, la vitrine de pâtisseries ou les viennoiseries qui sortent du four se vendent à l’œil. Mettez quelques
        vraies photos de vos spécialités, de la boutique et de l’équipe : les clients repèrent tout de suite les photos de
        banque d’images.
      </p>
      <p>
        La loi réserve le nom « boulangerie » aux professionnels qui pétrissent, façonnent et cuisent leur pain sur place.
        Si c’est votre cas, dites-le avec vos mots : pain au levain, farines d’un moulin de la région, cuisson dans la
        journée. C’est ce qui vous distingue des points chauds et des terminaux de cuisson.
      </p>

      <Question id="google" />
      <p>
        Presque toutes les recherches de boulangerie sont locales. Google affiche d’abord une carte avec trois commerces,
        puis les sites. Pour être dans ces trois-là :
      </p>
      <ul>
        <li>
          votre fiche Google Maps doit être complète : catégorie « Boulangerie », horaires, photos, lien vers votre site
          (tout est dans le guide <GuideLink slug="referencement-local-google-maps">référencement local</GuideLink>) ;
        </li>
        <li>
          votre site doit dire « boulangerie » et le nom de votre ville ou de votre quartier dans son titre et ses textes ;
        </li>
        <li>
          vos avis Google comptent beaucoup, et un QR code près de la caisse suffit souvent à en recevoir régulièrement (voir{' '}
          <GuideLink slug="avis-google-commerce-local">avis Google pour commerce local</GuideLink>).
        </li>
      </ul>

      <Question id="prix" />
      <p>
        Une seule page claire suffit à beaucoup de boulangeries : horaires, spécialités, commandes, adresse. C’est la
        formule Essentiel, à <strong>{plan('essentiel').price} €/mois</strong>. Si vous voulez une page à part pour les
        commandes et les fêtes, et votre fiche Google remise au propre, prenez plutôt la formule Pro (
        <strong>{plan('pro').price} €/mois</strong>).
      </p>
      <p>
        Dans les deux cas, j’écris les textes, je m’occupe de l’hébergement et du nom de domaine, et je change vos horaires
        quand vous me les envoyez. Pour comparer avec les autres solutions, voyez{' '}
        <GuideLink slug="prix-site-web-commercant">combien coûte un site web pour un commerçant</GuideLink>.
      </p>
    </>
  );
}
