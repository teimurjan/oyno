import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../activities-6-month-old";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Activités pour bébé de 6 mois",
  description:
    "Huit jeux de cinq minutes pour un bébé de six mois, à faire allongé ou avec bébé sur les genoux, et ce que dit la recherche sur chaque type de jeu.",
  body: (
    <>
      <p>
        Un bébé de six mois n’a pas besoin d’un programme d’activités. Il a besoin de vous tout près, de votre visage
        là où il peut le voir, et de quelques minutes d’échange. La plupart des jeux ci-dessous se jouent allongé par
        terre ou sur le canapé, et aucun ne demande plus qu’un gobelet, une chaussette ou un livre.
      </p>
      <p>
        Tous les jeux de cette page conviennent à un bébé de six mois ou moins. Chacun dure environ cinq minutes.
        Arrêtez pendant que votre bébé y prend encore plaisir.
      </p>

      <h2>Ce à quoi votre bébé est prêt</h2>
      <p>
        Des bébés de cinq mois et demi à six mois et demi savaient retrouver un jouet après un court délai, ce que les
        chercheurs considèrent comme la toute première mémoire de travail <Cite id="reznick-2004" />. La mémoire de
        travail, c’est la capacité de garder quelque chose en tête et de s’en servir.
      </p>
      <p>
        Les bébés saisissent aussi le rythme d’un jeu. Quand des chercheurs ont cassé le rythme du coucou-caché et des
        babillages échangés avec des bébés de 2 à 6 mois, les bébés ont réagi <Cite id="rochat-1999" />. Et les bébés
        de six mois restaient attentifs plus longtemps quand leur mère leur chantait une chanson que quand elle leur
        parlait <Cite id="nakata-trehub-2004" />.
      </p>
      <p>
        Le Center on the Developing Child de Harvard propose une courte liste pour les bébés de 6 à 18 mois : jeux
        sur les genoux avec une surprise attendue, jeux de cachette, jeux d’imitation, jeux de doigts, et conversation
        sur ce que le bébé remarque <Cite id="cdc-guide" />. Les jeux ci-dessous suivent cette liste.
      </p>

      <h2>Les jeux de cachette</h2>
      <p>
        <GameLink id="under-the-cup" /> est le plus simple. Retournez un gobelet sur un jouet pendant que votre bébé
        le regarde disparaître. Demandez « Où il est passé ? », attendez le temps d’une lente respiration, puis
        soulevez le gobelet avec un « oh ! » de surprise. Après quelques tours, remettez-le et laissez votre bébé le
        soulever à son tour.
      </p>
      <p>
        <GameLink id="slow-fist-open" /> ne demande qu’une main. Refermez le poing sur un jouet trop gros pour être
        avalé, un bout qui dépasse, et demandez « Qu’est-ce qu’il y a là-dedans ? ». Ouvrez un doigt à la fois, le
        plus lentement possible. Si votre bébé écarte vos doigts, laissez-le faire, puis refermez la main pour un
        nouveau tour.
      </p>

      <h2>Le coucou-caché et la pause</h2>
      <p>
        La fiche Brain-Building Through Play de Harvard pour 6 et 9 mois commence par le coucou-caché et les jeux de
        cachette, et ajoute les comptines sur les genoux et les jeux de doigts <Cite id="brain-play" />. Dans chacun,
        le plaisir se loge dans la pause avant la surprise.
      </p>
      <p>
        Dans <GameLink id="hands-peekaboo" />, vous vous allongez avec votre bébé sur la poitrine et cachez votre
        visage derrière vos deux mains. Restez immobile le temps de compter lentement jusqu’à trois, puis dites
        « Coucou ! » en ouvrant grand les mains. Faites durer le compte un peu plus à chaque fois.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> demande des pieds nus sur vos genoux. Récitez lentement « Celui-ci a vu
        un lièvre », un orteil par vers. Au dernier orteil, arrêtez-vous et tenez son pied immobile en comptant
        lentement jusqu’à trois. Puis faites courir vos doigts jusqu’à son ventre sur « n’a rien eu du tout ! » et
        passez à l’autre pied.
      </p>

      <h2>Parler et imiter</h2>
      <p>
        Votre bébé sait jouer chacun son tour bien avant d’avoir des mots. Dans <GameLink id="babble-back" />, vous
        attendez n’importe quel son, puis vous y répondez comme si c’était une vraie phrase. Arrêtez-vous,
        regardez-le, et laissez-lui un long silence pour son tour. Laissez-le clore la conversation quand il détourne
        les yeux.
      </p>
      <p>
        Dans <GameLink id="copy-cat-faces" />, vous imitez la tête ou le son de votre bébé juste après lui : langue
        tirée, petit cri, sourcils froncés. Après quelques tours, faites lentement une nouvelle grimace bien à vous,
        gardez-la, et attendez qu’il essaie de vous imiter.
      </p>
      <p>
        Harvard appelle cela « servir et renvoyer » (serve and return). Remarquez ce sur quoi votre bébé est
        concentré, répondez-y, nommez ce qu’il voit ou ressent, puis jouez chacun son tour et attendez{" "}
        <Cite id="serve-return" />. Dans un essai, accompagner des parents pour qu’ils répondent ainsi à des bébés de
        6 à 10 mois a amélioré l’attention des bébés et leur capacité à résoudre seuls des problèmes{" "}
        <Cite id="landry-2006" />.
      </p>

      <h2>Chansons et livres</h2>
      <p>
        <GameLink id="big-tiny-voice" /> se joue avec une chanson que votre bébé a entendue cent fois. Chantez un vers
        avec votre plus grosse voix, bras grands ouverts. Chantez le vers suivant en chuchotant, tout près de lui pour
        qu’il regarde votre bouche. Continuez d’alterner, et changez plus tôt dès que ses yeux remontent vers les
        vôtres.
      </p>
      <p>
        Pour les livres, essayez <GameLink id="flat-out-story" />. Allongez-vous côte à côte sur le lit et tenez un
        imagier ouvert au-dessus de vous deux. Montrez une image, nommez-la, et attendez que les yeux de votre bébé
        s’y posent. S’il regarde autre chose sur la page, nommez plutôt cette chose-là et attardez-vous dessus.
      </p>
      <p>
        Regarder une même chose ensemble, c’est s’entraîner à l’attention. Dans une étude, la capacité des bébés à
        concentrer leur attention à 5 mois prédisait leurs fonctions exécutives entre 2 et 4 ans{" "}
        <Cite id="cuevas-bell-2014" />. L’Académie américaine de pédiatrie note que les pédiatres encouragent la
        lecture à voix haute dès la naissance, en plus du jeu <Cite id="aap-play" />. Dans un essai, accompagner des
        parents à lire à voix haute et à jouer à faire semblant de la naissance à 3 ans a réduit l’hyperactivité et
        les problèmes d’attention à quatre ans et demi <Cite id="mendelsohn-2018" />.
      </p>

      <h2>Le caser dans une soirée fatiguée</h2>
      <p>
        Inutile de faire les huit. Choisissez celui qui va avec l’endroit où vous êtes déjà : sur le dos, sur le
        canapé ou par terre. Cinq minutes, c’est une partie complète. Rejouez le même jeu demain s’il a marché
        aujourd’hui.
      </p>
      <p>
        Vous en trouverez d’autres dans les <Link href="/games/age/babies">jeux pour bébé</Link>, et les{" "}
        <Link href="/games/energy/low">jeux calmes</Link> sont ceux qu’on peut faire sans se lever. Si vous avez des
        questions sur le développement de votre bébé, parlez-en à votre pédiatre.
      </p>
    </>
  ),
};
