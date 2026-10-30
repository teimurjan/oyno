import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../baby-activities-by-month";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Activités pour bébé de 0 à 12 mois, mois par mois",
  description:
    "Des jeux simples pour chaque étape de la première année de bébé, du coucou-caché sur votre poitrine au chacun son tour, avec ce qu’ont montré les études à chaque âge.",
  body: (
    <>
      <p>
        Un jeu qui faisait rire votre bébé un mois peut l’ennuyer quelques semaines plus tard. Ce guide classe des jeux
        simples par étape, des premières semaines au premier anniversaire. Chacun dure de 5 à 15 minutes, et la
        plupart ne demandent rien d’autre que votre visage, votre voix et parfois un gobelet ou un tissu.
      </p>
      <p>
        Les mois viennent des études ci-dessous, qui ont testé des bébés à ces âges. Prenez-les comme une carte
        approximative, pas comme une liste à cocher. Si un jeu d’une étape précédente fait encore sourire votre bébé,
        continuez d’y jouer.
      </p>
      <p>
        Ce soir, trouvez l’étape de votre bébé ci-dessous, choisissez un jeu et lisez ses étapes une fois. Laissez le
        téléphone dans une autre pièce, jouez jusqu’à ce que votre bébé détourne le regard, et arrêtez-vous là.
      </p>

      <h2>À quoi ressemble le jeu la première année</h2>
      <p>
        L’Académie américaine de pédiatrie décrit le jeu de la première année comme partant du sourire social pour
        devenir échange, coucou-caché et pat-a-cake. Ses pédiatres encouragent aussi la lecture à voix haute dès la
        naissance, en plus du jeu <Cite id="aap-play" />.
      </p>
      <p>
        Pour les bébés de 6 à 18 mois, le Center on the Developing Child de Harvard recommande les jeux sur les genoux
        avec une surprise attendue, les jeux de cachette, les jeux d’imitation, les petits jeux de rôle simples, les
        jeux de doigts, et la conversation sur ce que votre bébé remarque <Cite id="cdc-guide" />. Presque tous les
        jeux ci-dessous en font partie. Ce qui change d’une étape à l’autre, c’est ce que votre bébé y apporte.
      </p>

      <h2>0 à 3 mois : votre visage et votre voix</h2>
      <p>
        Les premières semaines, le jouet, c’est vous. Le jeu, c’est votre visage, votre voix et les pauses entre les
        deux.
      </p>
      <p>
        Les bébés remarquent quand ce visage se fige. Dans une expérience classique, des bébés de 1 à 4 mois dont la
        mère gardait un visage figé, sans réaction, devenaient méfiants et se repliaient en quelques minutes{" "}
        <Cite id="tronick-1978" />. Les bébés remarquent aussi la forme d’un jeu. Quand des chercheurs ont perturbé le
        rythme et la structure du coucou-caché, et des babillages échangés, des bébés de 2 à 6 mois ont réagi au
        changement <Cite id="rochat-1999" />.
      </p>
      <p>Deux jeux conviennent à cette étape, et tous les deux se jouent allongé :</p>
      <ul>
        <li>
          <GameLink id="hands-peekaboo" /> : allongez-vous avec votre bébé sur la poitrine et cachez votre visage
          derrière vos deux mains. Restez immobile le temps de compter lentement jusqu’à trois, puis dites « Coucou ! »
          en ouvrant grand les mains. Faites durer le compte un peu plus à chaque fois, et arrêtez-vous pendant que
          votre bébé sourit encore.
        </li>
        <li>
          <GameLink id="missing-last-word" /> : chantez lentement une chanson que votre bébé a entendue cent fois, en
          regardant son visage. Arrêtez-vous juste avant le dernier mot d’un vers et laissez planer le silence,
          sourcils levés. Attendez un tortillement, un coup de pied ou un regard, puis lâchez le mot avec un grand
          sourire.
        </li>
      </ul>
      <p>
        Les livres comptent aussi, dès le début. Dans un essai qui accompagnait les parents à lire à voix haute et à
        jouer à faire semblant avec leur enfant de la naissance à 3 ans, cet accompagnement a réduit l’hyperactivité et
        les problèmes d’attention à quatre ans et demi <Cite id="mendelsohn-2018" />. D’autres jeux sur les genoux vous
        attendent dans les <Link href="/games/type/anticipation-rhyme">jeux de comptines à suspense</Link> et les{" "}
        <Link href="/games/type/peekaboo">jeux de coucou-caché</Link>.
      </p>

      <h2>3 à 6 mois : regarder et anticiper</h2>
      <p>
        Votre bébé commence à anticiper. Dans une expérience, des bébés de 3 mois et demi apprenaient une suite
        d’images à gauche et à droite et regardaient d’avance là où la prochaine image allait apparaître{" "}
        <Cite id="haith-1988" />.
      </p>
      <p>
        L’attention fait aussi partie de cette étape. La capacité des bébés à concentrer leur attention à 5 mois
        prédisait leurs fonctions exécutives entre 2 et 4 ans <Cite id="cuevas-bell-2014" />. Les fonctions
        exécutives, ce sont les capacités qu’un enfant utilise pour garder une idée en tête, s’arrêter avant d’agir et
        changer de plan. Notre{" "}
        <Link href="/guides/executive-function-babies-toddlers">guide des fonctions exécutives</Link> les explique
        plus en détail.
      </p>
      <p>
        Les premiers signes de mémoire de travail apparaissent vers la fin de cette étape. Des bébés de cinq mois et
        demi à six mois et demi savaient retrouver un jouet après un court délai <Cite id="reznick-2004" />.
      </p>
      <ul>
        <li>
          <GameLink id="toy-comet" /> : allongés sur le dos, tenez un jouet à une longueur d’avant-bras du visage de
          votre bébé jusqu’à ce que son regard s’y pose. Faites-le glisser lentement sur le côté, arrêtez-vous et
          attendez que ses yeux le rattrapent avant de repartir. Arrêtez quand il détourne le regard.
        </li>
        <li>
          <GameLink id="peeking-tail" /> : pour un bébé d’environ 5 mois qui attrape mais ne sait pas encore trouver un
          jouet entièrement caché. Posez un tissu sur un jouet en laissant dépasser un coin. Demandez « Où il est
          passé ? », tapotez le bout qui dépasse, et attendez sans y toucher. Quand il tire le tissu, applaudissez
          doucement, et cachez un peu plus le jouet la fois suivante.
        </li>
      </ul>
      <p>
        Pour aller plus loin, voyez les <Link href="/games/type/joint-attention">jeux de regard et de pointage</Link>{" "}
        et les <Link href="/games/type/hide-and-find">jeux de cachette</Link>.
      </p>

      <h2>6 à 9 mois : chansons, imitation et cachette</h2>
      <p>
        C’est le moment de chanter. Des bébés de 6 mois restaient attentifs plus longtemps quand leur mère chantait que
        quand elle parlait <Cite id="nakata-trehub-2004" />. Pas besoin d’une belle voix, seulement d’une chanson que
        votre bébé connaît.
      </p>
      <p>
        Pour les bébés de 6 et 9 mois, les fiches Brain-Building Through Play de Harvard citent le coucou-caché et les
        jeux de cachette, Trot Trot to Boston, Pat-a-Cake, Dickory Dean, Baby See Baby Do, lâcher un jouet chacun son
        tour avec un « Boum », les jeux de conversation et les jeux de doigts <Cite id="brain-play" />.
      </p>
      <p>
        À cet âge, votre façon de répondre compte. Dans un essai, accompagner des parents à répondre à leurs bébés de 6
        à 10 mois a amélioré l’attention des bébés et leur capacité à résoudre seuls des problèmes{" "}
        <Cite id="landry-2006" />. Dès 7 mois et demi environ, des bébés, dans une expérience classique, savaient
        retrouver un jouet caché sous l’un de deux caches après un court délai <Cite id="diamond-1985" />.
      </p>
      <ul>
        <li>
          <GameLink id="copy-cat-faces" /> : imitez la tête ou le son de votre bébé juste après lui, langue tirée,
          petit cri, sourcils froncés. Après quelques-unes, faites lentement une nouvelle grimace bien à vous et
          gardez-la. Attendez, sans changer de tête, qu’il essaie de vous imiter.
        </li>
        <li>
          <GameLink id="two-cup-switch" /> : pour la tablette de la chaise haute et un bébé dès 8 mois environ.
          Retournez deux gobelets et glissez un jouet sous l’un d’eux sous les yeux de votre bébé. Comptez lentement
          « un, deux, trois », puis laissez-le soulever un gobelet. Après quelques réussites, déplacez le jouet sous
          l’autre gobelet bien en vue, recomptez, et regardez où il cherche.
        </li>
      </ul>
      <p>
        Pour aller plus loin, voyez les{" "}
        <Link href="/games/type/fingerplay-song">jeux de doigts et chansons à gestes</Link> et les{" "}
        <Link href="/games/type/imitation">jeux d’imitation</Link>.
      </p>

      <h2>9 à 12 mois : tours de rôle, pointage et premier faire-semblant</h2>
      <p>
        Les jeux deviennent un vrai échange. Des bébés de 9 à 18 mois, dans des jeux de chacun son tour comme
        donner-prendre et le coucou-caché, signalaient quand l’adulte sautait son tour <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        Autour du premier anniversaire, l’endroit où vous regardez compte. Des enfants d’un an restaient attentifs plus
        longtemps à un jouet quand leur parent regardait et nommait le même jouet <Cite id="yu-smith-2016" />. La
        parole compte aussi. Une parole sensible des parents sur ce que leur bébé pouvait penser, et leur soutien
        quand le bébé faisait les choses seul, entre 12 et 15 mois, prédisaient les fonctions exécutives à 18 et 26
        mois <Cite id="bernier-2010" />. À la maison, cela peut être aussi simple que de dire ce que votre bébé veut,
        selon vous, « tu veux la cuillère », et de le laisser essayer avant de l’aider.
      </p>
      <ul>
        <li>
          <GameLink id="toy-give-back" /> : pour un bébé dès 9 mois environ, sur vos genoux. Donnez-lui un jouet en
          disant « tiens ». Puis tendez la main ouverte, dites « à moi », et attendez sans l’attraper, même si ça prend
          une minute. Quand le jouet arrive dans votre main, dites « merci » et rendez-le aussitôt avec un « à toi ».
        </li>
        <li>
          <GameLink id="look-where-i-look" /> : pour un bébé d’environ 9 mois qui tient assis. Posez deux jouets par
          terre devant vous deux. Tournez la tête vers l’un, fixez-le bien et dites son nom une fois. Attendez que ses
          yeux suivent les vôtres, puis redites le nom et donnez-lui le jouet.
        </li>
      </ul>
      <p>
        Les petits jeux de rôle simples, de la liste de Harvard plus haut, ont aussi leur place ici : un gobelet vide
        dans lequel vous faites semblant de boire bruyamment, ou un faux coup de téléphone à Mamie. Vous en trouverez
        d’autres dans les <Link href="/games/type/turn-taking">jeux de chacun son tour</Link> et les{" "}
        <Link href="/games/type/pretend-play">jeux de faire-semblant</Link>, ou parcourez tous les{" "}
        <Link href="/games/age/babies">jeux pour bébé</Link>.
      </p>

      <h2>Ce qui ne change pas de l’année</h2>
      <p>
        La méthode ne change pas avec les mois. La fiche de Harvard sur le « servir et renvoyer » (serve and return) la
        résume en cinq étapes : remarquer ce sur quoi votre bébé est concentré et le partager, le lui renvoyer en
        l’accompagnant, nommer ce qu’il voit ou ressent, jouer chacun son tour en attendant, et s’exercer aux fins et
        aux débuts. Son exemple, c’est le coucou-caché <Cite id="serve-return" />.
      </p>
      <p>
        Suivre l’initiative de votre bébé, c’est ce qu’il faut travailler. Quand des parents d’enfants de 6 à 21 mois
        ont été accompagnés pour suivre l’initiative de l’enfant, lui répondre et montrer leur joie, cela a amélioré la
        flexibilité mentale de leurs enfants à 4 ans <Cite id="lind-2017" />.
      </p>
      <p>Quelques habitudes tirées des étapes de jeu ci-dessus valent à tous les âges :</p>
      <ul>
        <li>Arrêtez pendant que votre bébé sourit encore, pas quand il en a assez.</li>
        <li>Quand il détourne le regard, considérez que la partie est finie.</li>
        <li>Allongez un peu la pause à chaque fois, et laissez-le la remplir.</li>
        <li>Nommez ce qu’il regarde, en quelques mots chaleureux.</li>
      </ul>
      <p>
        Les bébés remarquent aussi le téléphone. Des bébés de 7 à 24 mois s’agitaient quand leur mère se tournait vers
        son téléphone pendant une tâche de visage impassible, et ceux dont la mère utilisait davantage ses écrans à la
        maison récupéraient moins bien <Cite id="myruski-2018" />. Je sais combien c’est dur de le poser. Je travaille
        toute la journée, je rentre et je prends mon téléphone. Pour dix minutes de jeu, laissez-le dans une autre
        pièce.
      </p>

      <h2>Si votre bébé ne le fait pas encore</h2>
      <p>
        Les mois de ce guide sont les âges testés par les études, pas des échéances. Si un jeu est trop difficile ce
        soir, revenez à un jeu de l’étape d’avant. La plupart de ces jeux ont un début plus facile intégré : un coin
        qui dépasse avant un jouet entièrement caché, une courte pause avant une longue.
      </p>
      <p>
        Inutile de suivre quoi que ce soit ou de tester votre bébé. Choisissez un jeu qui convient à ce soir et jouez-y
        tant qu’il lui plaît. Si le développement de votre bébé vous inquiète, parlez-en à votre pédiatre.
      </p>
    </>
  ),
};
