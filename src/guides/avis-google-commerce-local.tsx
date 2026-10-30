import { Callout, GuideLink, Source, questions } from './shared';

const { Summary, Question } = questions(
  {
    pourquoi: 'Pourquoi les avis Google comptent autant',
    demander: 'Demander à chaque client',
    'qr-code': 'Le QR code pour vos avis Google',
    repondre: 'Répondre à tous les avis',
    interdits: 'Ce qu’il ne faut surtout pas faire',
  },
  { title: 'Au sommaire' },
);

export default function Body() {
  return (
    <>
      <p>
        Vos clients sont contents, ils vous le disent en partant. Mais sur Google, votre fiche affiche trois avis, dont un
        de 2019. Voici comment faire passer ces compliments du comptoir à votre fiche, sans y passer des heures et sans
        enfreindre les règles.
      </p>

      <Summary />


      <Question id="pourquoi" />
      <p>
        Entre deux commerces proches, on choisit souvent celui qui a le plus d’avis récents et la meilleure note. Les avis
        amènent aussi du monde sur votre site : 54 % des consommateurs visitent le site d’un commerce après avoir lu des
        avis positifs (
        <Source href="https://www.brightlocal.com/resources/local-seo-statistics/">
          BrightLocal, Local Consumer Review Survey 2026
        </Source>
        ).
      </p>
      <p>
        Google en tient compte lui aussi : le nombre et la note de vos avis font partie de ce qu’il regarde pour classer les
        commerces sur sa carte (voir <GuideLink slug="referencement-local-google-maps">le référencement local</GuideLink>
        ).
      </p>

      <Question id="demander" />
      <p>
        Un client content laisse rarement un avis de lui-même. Souvent, personne ne le lui a demandé, ou il ne sait pas où
        cliquer. Il faut donc demander à chaque fois, et lui faciliter la tâche :
      </p>
      <ul>
        <li>demandez à tous vos clients, juste après leur passage, quand l’expérience est encore fraîche ;</li>
        <li>une phrase suffit : « Si vous avez deux minutes, un avis Google m’aiderait beaucoup » ;</li>
        <li>donnez-leur un moyen d’arriver directement sur la bonne page, sans chercher.</li>
      </ul>

      <Question id="qr-code" />
      <p>
        Depuis votre fiche d’établissement Google, vous pouvez obtenir un lien court qui ouvre directement la fenêtre «
        laisser un avis ». Transformé en QR code, il se scanne en deux secondes avec un téléphone.
      </p>
      <p>Où le mettre :</p>
      <ul>
        <li>sur un petit support près de la caisse ou à l’accueil ;</li>
        <li>sur vos tickets, vos cartes de visite ou vos sacs ;</li>
        <li>sur la vitrine, pour ceux qui repassent devant ;</li>
        <li>dans vos e-mails ou votre newsletter, en version lien.</li>
      </ul>
      <p>
        Dans les formules Pro et Premium, je vous fournis ce QR code prêt à imprimer, en même temps que je mets votre fiche
        Google au propre.
      </p>

      <Question id="repondre" />
      <p>
        Un merci personnalisé sous un avis positif montre que vous êtes attentif. Pour un avis négatif, répondez calmement,
        sans vous justifier pendant trois paragraphes : remerciez, reconnaissez le problème s’il est réel, proposez une
        solution. Vos futurs clients liront votre réponse autant que l’avis.
      </p>

      <Question id="interdits" />
      <Callout tone="warning" title="Interdit par Google, et parfois par la loi">
        <ul>
        <li>
          N’achetez pas d’avis et n’en écrivez pas vous-même : Google l’interdit, et les faux avis sont sanctionnés par la
          loi.
        </li>
        <li>N’offrez pas de contrepartie (remise, cadeau) en échange d’un avis : Google l’interdit aussi.</li>
        <li>
          Ne demandez pas seulement aux clients ravis : Google interdit de choisir à qui l’on demande un avis.
          </li>
        </ul>
      </Callout>
      <p>
        Les règles complètes sont dans les{' '}
        <Source href="https://support.google.com/contributionpolicy/answer/7400114?hl=fr">
          règles relatives aux contenus de Google
        </Source>
        .
      </p>
    </>
  );
}
