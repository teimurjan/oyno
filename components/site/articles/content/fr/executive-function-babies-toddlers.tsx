import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../executive-function-babies-toddlers";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Fonctions exécutives chez le bébé et le tout-petit : le rôle du jeu",
  description:
    "Les compétences qui servent à votre enfant pour retenir, attendre et changer de règle naissent dès la première année. À quoi elles ressemblent à chaque âge, et les jeux qui les entraînent.",
  body: (
    <>
      <p>
        « Fonctions exécutives », ça sonne comme un mot de bureau. Ce sont les compétences qui servent à votre
        enfant pour garder une idée en tête, s’arrêter avant d’agir, et changer de plan quand les règles changent.
        Vous les voyez quand votre tout-petit attend votre « partez », se souvient où la balle a roulé, ou range les
        cubes par couleur après les avoir triés par taille.
      </p>
      <p>
        Ces compétences ne sont pas figées à la naissance. Elles se développent le plus vite pendant les cinq
        premières années, et elles grandissent à travers les échanges ordinaires avec un adulte. Les jeux sont l’un
        des moyens les plus simples de les faire travailler.
      </p>

      <h2>Les trois compétences, et celle qui les porte</h2>
      <p>
        Le Center on the Developing Child de Harvard en nomme trois principales <Cite id="cdc-guide" /> :
      </p>
      <ul>
        <li>
          <strong>La mémoire de travail</strong> : garder une information en tête et s’en servir. Où est passé le
          jouet ? Que vient-il après le prochain vers de la chanson ?
        </li>
        <li>
          <strong>Le contrôle inhibiteur</strong>, ou maîtrise de soi : retenir la première impulsion. Se figer quand
          la musique s’arrête. Attendre la cuillère.
        </li>
        <li>
          <strong>La flexibilité mentale</strong> : passer d’une règle ou d’une idée à l’autre. Trier par couleur,
          puis par forme. Dire « nuit » quand on voit le soleil.
        </li>
      </ul>
      <p>
        Sous les trois se trouve l’attention, la capacité à rester sur une seule chose. Elle compte tôt : dans une
        étude, la façon dont les bébés concentraient leur attention à 5 mois prédisait leurs fonctions exécutives
        entre 2 et 4 ans <Cite id="cuevas-bell-2014" />.
      </p>

      <h2>La première année : se souvenir de ce qui est caché</h2>
      <p>
        La mémoire de travail apparaît plus tôt que la plupart des parents ne le pensent. Des bébés de cinq mois et
        demi à six mois et demi savaient retrouver un jouet après un court délai <Cite id="reznick-2004" />. Dans une
        expérience classique, des bébés de 7 mois et demi à 12 mois retrouvaient un jouet caché sous l’un de deux
        caches après un court délai <Cite id="diamond-1985" />.
      </p>
      <p>
        Les bébés apprennent aussi la forme d’un jeu. Quand des chercheurs ont perturbé le rythme du coucou-caché
        pour des bébés de 2 à 6 mois, les bébés l’ont remarqué <Cite id="rochat-1999" />. La pause avant le
        « coucou » est une petite leçon : garder une attente en tête.
      </p>
      <p>
        À cet âge, les jeux sont simples : <GameLink id="under-the-cup" /> cache un jouet sous les yeux de votre
        bébé, et <GameLink id="hands-peekaboo" /> se joue avec votre bébé sur la poitrine et rien dans les mains. Vous
        en trouverez d’autres dans les <Link href="/games/age/babies">jeux pour bébé de 0 à 12 mois</Link>.
      </p>

      <h2>De 1 à 3 ans : attendre, s’arrêter et les premières règles</h2>
      <p>
        La maîtrise de soi devient visible pendant la deuxième et la troisième année. Dans une étude au long cours,
        on a demandé à des enfants de 22 à 45 mois d’attendre une friandise, de marcher lentement sur une ligne, de
        chuchoter, et de s’arrêter et repartir sur un signal <Cite id="kochanska-2000" />. Un tout-petit peut
        s’entraîner à tout cela en jouant.
      </p>
      <p>
        Les enfants de deux ans savent aussi suivre une règle simple qui va contre ce qu’ils voient. Dans une tâche,
        ils se souvenaient des pots qu’ils avaient déjà vidés, et dans une autre, ils appelaient le grand gobelet
        « bébé » et le petit « maman » <Cite id="hughes-ensor-2005" />.
      </p>
      <p>
        Essayez <GameLink id="still-stone-mouse" />, un jeu de statues qui se joue allongé sur le canapé, ou{" "}
        <GameLink id="baby-cup-mummy-cup">Gobelet bébé, gobelet maman</GameLink>, la même règle des noms inversés que
        dans l’étude. La page des <Link href="/games/age/toddlers">jeux pour enfant de 1 à 3 ans</Link> les classe
        selon l’énergie qui vous reste.
      </p>

      <h2>De 3 à 5 ans : changer de règle exprès</h2>
      <p>
        Les enfants de maternelle peuvent se lancer dans des jeux dont la règle change. Des enfants de 2 à 6 ans ont
        été testés sur des tâches d’attente, de tri inversé, de Simon says (Jacques a dit) et de chuchotement, chaque
        tâche étant adaptée à un âge différent <Cite id="carlson-2005" />. Dès trois ans et demi, des enfants
        disaient « nuit » devant une image de soleil et « jour » devant une image de lune{" "}
        <Cite id="gerstadt-1994" />. Des enfants de 3 à 5 ans triaient des cartes par couleur, puis passaient au tri
        par forme <Cite id="zelazo-2006" />.
      </p>
      <p>
        Ce genre de jeux peut aussi entraîner ces compétences. Des enfants de maternelle qui jouaient en cercle à des
        jeux de stop et go aux règles inversées, comme Red Light, Purple Light (« feu rouge, feu violet »), ont
        amélioré leur autorégulation dans un essai randomisé <Cite id="tominey-mcclelland-2011" />. Un second essai,
        avec des enfants de maternelle du programme Head Start, a montré que les mêmes jeux amélioraient
        l’autorégulation et la préparation à l’école <Cite id="schmitt-2015" />.
      </p>
      <p>
        À la maison, essayez <GameLink id="day-says-night" />, <GameLink id="guess-my-rule" /> ou{" "}
        <GameLink id="purple-light" />. Vous en trouverez d’autres dans les{" "}
        <Link href="/games/age/preschoolers">jeux pour enfant de 3 à 5 ans</Link> et les{" "}
        <Link href="/games/skill/flexible-thinking">jeux de flexibilité mentale</Link>.
      </p>

      <h2>Pourquoi le jeu, et pas des exercices</h2>
      <p>
        Les guides que les pédiatres et les chercheurs écrivent pour les parents recommandent le jeu, pas les fiches
        d’exercices. L’Académie américaine de pédiatrie décrit comment le jeu passe des sourires et du coucou-caché
        au faire-semblant et aux jeux à règles <Cite id="aap-play" />. Les guides d’activités de Harvard proposent des
        jeux pour chaque âge : jeux de cachette et jeux de doigts pour les bébés, danse des statues et Follow the
        Leader (suivre le meneur) pour les tout-petits, Jacques a dit et I Spy pour les plus grands{" "}
        <Cite id="brain-play" />.
      </p>
      <p>
        Les essais vont dans le même sens. Des enfants de 3 à 5 ans qui ont fait cinq semaines de jeux de
        faire-semblant fantastiques ont amélioré leur mémoire de travail et leur maîtrise de soi{" "}
        <Cite id="thibodeau-2016" />. Accompagner les parents pour lire à voix haute et jouer à faire semblant de la
        naissance à 3 ans a réduit l’hyperactivité et les problèmes d’attention à quatre ans et demi{" "}
        <Cite id="mendelsohn-2018" />.
      </p>

      <h2>La part que vous seul pouvez faire</h2>
      <p>
        Ces compétences grandissent dans une relation. Harvard appelle cela « servir et renvoyer » (serve and
        return) : votre enfant sert avec un regard, un son ou un doigt pointé, et vous lui renvoyez, vous le nommez,
        et vous attendez le tour suivant <Cite id="serve-return" />.
      </p>
      <p>
        Les détails comptent. Des enfants d’un an restaient attentifs plus longtemps à un jouet quand leur parent
        regardait et nommait le même jouet <Cite id="yu-smith-2016" />. Quand on a accompagné des parents de bébés et
        de tout-petits pour suivre l’initiative de l’enfant, lui répondre et montrer leur plaisir, leurs enfants
        avaient une meilleure flexibilité mentale à 4 ans <Cite id="lind-2017" />. Quand des parents donnaient juste
        assez d’aide pendant un puzzle à 2 à 3 ans, leurs enfants avaient de meilleures fonctions exécutives un an
        plus tard <Cite id="hammond-2012" />.
      </p>
      <p>
        Rien de tout cela ne demande un jouet ou un plan. Il suffit de regarder la même chose que votre enfant,
        quelques minutes, sans le téléphone entre vous.
      </p>

      <h2>Ce qui ne doit pas vous inquiéter</h2>
      <p>
        Ces compétences progressent régulièrement pendant les années de maternelle. Des tests conçus pour des
        enfants de 18 mois à 5 ans et demi font ressortir de nettes différences d’un âge à l’autre{" "}
        <Cite id="garon-2014" />. Un enfant de deux ans qui ne peut pas attendre un biscuit est un enfant de deux
        ans.
      </p>
      <p>
        Vous n’avez pas besoin de tester votre enfant ni de noter des scores. Choisissez un jeu qui convient à ce
        soir, jouez tant qu’il s’amuse, et arrêtez avant qu’il ne s’ennuie. Si le développement de votre enfant vous
        inquiète, parlez-en à votre pédiatre.
      </p>
    </>
  ),
};
