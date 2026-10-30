import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../working-memory-games-2-year-olds";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Jeux de mémoire simples pour enfant de 2 ans",
  description:
    "Ce qu’un enfant de deux ans peut garder en tête, sur quoi les études l’ont testé, et de petits jeux de mémoire avec des gobelets, des jouets et votre nez, pour ce soir.",
  body: (
    <>
      <p>
        La mémoire de travail, c’est garder quelque chose en tête et s’en servir. Où est passée la balle ? Qu’est-ce
        que papa m’a demandé d’apporter ? Sous quel gobelet ai-je déjà regardé ? Votre enfant de deux ans fait cela
        toute la journée, et c’est l’une des compétences que vous pouvez entraîner en un jeu de cinq minutes.
      </p>

      <h2>Ça commence avant deux ans</h2>
      <p>
        La mémoire de travail apparaît tôt. Des bébés de cinq mois et demi à six mois et demi savaient retrouver un
        jouet après un court délai <Cite id="reznick-2004" />. Des bébés de 7 mois et demi à 12 mois retrouvaient un
        jouet caché sous l’un de deux caches après un court délai <Cite id="diamond-1985" />.
      </p>
      <p>
        Les jeux pour les enfants de deux ans demandent un peu plus : deux objets cachés au lieu d’un, ou une courte
        liste au lieu d’un seul mot.
      </p>

      <h2>Sur quoi on a testé les enfants de deux ans</h2>
      <p>
        Dans une étude, des enfants de deux ans ont joué à Spin the Pots, un jeu où il fallait se souvenir des pots
        qu’ils avaient déjà vidés <Cite id="hughes-ensor-2005" />. Une autre équipe a construit une série de tâches
        de mémoire de travail, de maîtrise de soi et de changement de règle pour des enfants de 18 mois à environ
        cinq ans et demi. Ces tâches faisaient ressortir de nettes différences d’un âge à l’autre{" "}
        <Cite id="garon-2014" />.
      </p>
      <p>
        Les fiches Brain-Building Through Play de Harvard pour les 12 mois à 3 ans proposent le cache-cache simple,
        le jeu de mémoire des trois gobelets, et des jeux d’association et de tri <Cite id="brain-play" />. Ce sont
        des jeux qui se jouent par terre, avec ce qui se trouve déjà dans la pièce.
      </p>

      <h2>Les jeux de cachette</h2>
      <p>
        <GameLink id="cup-trio-hide" /> ressemble beaucoup à Spin the Pots. Retournez trois gobelets en ligne et
        glissez un jouet sous l’un d’eux sous les yeux de votre enfant. Demandez « il est où ? » et laissez-le
        soulever les gobelets jusqu’à le trouver. Dès 2 ans, cachez deux jouets et voyez s’il se rappelle quel
        gobelet est déjà vide.
      </p>
      <p>
        Vous pouvez y jouer par terre, le dos contre le canapé, et trois gobelets ou bols quelconques feront
        l’affaire.
      </p>
      <p>
        <GameLink id="who-ran-away" /> inverse le principe. Alignez trois jouets et nommez-les ensemble. Votre
        enfant se cache les yeux pendant que vous glissez un jouet dans votre dos, puis demandez « qui s’est
        sauvé ? » Quand il trouve, le jouet revient en disant bonjour. Après quelques tours, c’est lui qui cache et
        vous qui devinez.
      </p>

      <h2>Les jeux de liste</h2>
      <p>
        <GameLink id="two-things-fetch" /> transforme une demande en jeu. Asseyez-vous et demandez deux choses d’une
        traite, comme « apporte-moi la tasse et le canard ». Restez à votre place et fêtez chaque chose qui arrive,
        même s’il n’en rapporte qu’une. Quand deux, c’est facile, demandez-en trois.
      </p>
      <p>
        <GameLink id="line-them-up" /> ajoute l’ordre. Nommez deux jouets, comme « l’ours, puis la voiture », et votre
        enfant les aligne de gauche à droite comme vous l’avez dit. Vérifiez la rangée ensemble, puis nommez-en
        trois. Inversez les rôles, et trompez-vous une fois pour qu’il corrige.
      </p>

      <h2>Des jeux pour un parent fatigué</h2>
      <p>
        Les jeux de mémoire ne vous obligent pas à rester debout. Dans <GameLink id="beep-nose-buttons" />, vous êtes
        une machine allongée. Votre nez est un bouton qui fait bip, votre oreille joue une chanson et votre menton
        ronfle. Votre enfant appuie sur un bouton et vous faites exactement la chose. Ajoutez un quatrième bouton sur
        votre joue, puis demandez « quel bouton ronfle ? »
      </p>
      <p>
        <GameLink id="goodnight-room-dark" /> convient à la dernière minute avant d’éteindre. Dites bonne nuit
        ensemble à trois choses de la chambre, en les montrant. Éteignez et demandez « elle est où, la lampe ? » pour
        que votre enfant la montre dans le noir. Rallumez pour vérifier.
      </p>

      <h2>Comment viser juste</h2>
      <ul>
        <li>
          <strong>Commencez par deux.</strong> Deux gobelets, deux choses à rapporter, deux jouets en rang. Passez à
          trois seulement quand deux, c’est facile.
        </li>
        <li>
          <strong>Laissez-le gagner la première partie.</strong> Cachez le jouet lentement, bien en vue.
        </li>
        <li>
          <strong>Dédramatisez les erreurs.</strong> S’il soulève le mauvais gobelet, soulevez-le avec lui, dites
          « pas là », et essayez le suivant ensemble.
        </li>
        <li>
          <strong>Échangez les rôles.</strong> La plupart de ces jeux finissent avec votre enfant qui cache ou qui
          donne les ordres, et vous qui vous trompez un peu.
        </li>
        <li>
          <strong>Parlez de la suite.</strong> Le guide d’activités de Harvard pour les 18 à 36 mois propose les jeux
          d’association, les puzzles, et la conversation et les histoires sur ce que vous allez faire ensuite{" "}
          <Cite id="cdc-guide" />.
        </li>
      </ul>
      <p>
        Un enfant de deux ans qui oublie la deuxième chose de la liste est un enfant de deux ans. Vous n’avez rien à
        tester ni à suivre. Si le développement de votre enfant vous inquiète, parlez-en à votre pédiatre.
      </p>
      <p>
        Vous en trouverez d’autres dans les <Link href="/games/skill/working-memory">jeux de mémoire de travail</Link>,
        et la page des <Link href="/games/age/toddlers">jeux pour enfant de 1 à 3 ans</Link> les classe tous selon
        l’énergie qui vous reste.
      </p>
    </>
  ),
};
