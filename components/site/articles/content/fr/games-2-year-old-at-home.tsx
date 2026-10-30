import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-2-year-old-at-home";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Jeux pour enfant de 2 ans à la maison",
  description:
    "Huit jeux pour un enfant de deux ans avec des gobelets, des chaussettes, des coussins ou rien du tout, de 5 à 12 minutes chacun, et ce qu’ont montré les études.",
  body: (
    <>
      <p>
        Pas besoin d’une salle de jeux pour un enfant de deux ans. Il vous faut ce qui traîne déjà par terre : deux
        gobelets, un tas de chaussettes, les coussins du canapé. Tous les jeux ci-dessous conviennent à un enfant de 2
        ans, durent de 5 à 12 minutes et ont une seule règle.
      </p>

      <h2>Ce qu’un enfant de deux ans sait faire dans un jeu</h2>
      <p>
        Des chercheurs ont joué à de vrais jeux à règles avec des enfants de deux ans. Dans une étude, des enfants de
        deux ans se rappelaient quels pots ils avaient déjà vidés, et appelaient la grande tasse « bébé » et la petite
        « maman » <Cite id="hughes-ensor-2005" />. Dans une étude au long cours, on demandait à des enfants de 22 à 45
        mois d’attendre une friandise, de marcher lentement sur une ligne, de chuchoter, et de s’arrêter et repartir à
        un signal <Cite id="kochanska-2000" />.
      </p>
      <p>
        Le guide d’activités de Harvard pour 18 à 36 mois cite la danse des statues, les chansons où l’on s’arrête et
        repart, Follow the Leader (suivre le meneur), les défis physiques, et les jeux d’association et de tri pour
        rire <Cite id="cdc-guide" />. Rien de tout cela ne s’achète.
      </p>

      <h2>Jeux avec des gobelets</h2>
      <p>
        <GameLink id="baby-cup-mummy-cup" />, c’est le jeu de gobelets de cette étude. Montrez un grand et un petit
        gobelet, et décidez que le grand s’appelle « bébé » et le petit « maman ». Levez un gobelet à la fois, et
        votre enfant dit son nom rigolo. Accélérez, et quand il se trompe, gardez les gobelets immobiles et laissez-le
        réessayer.
      </p>
      <p>
        <GameLink id="cup-trio-hide" /> cache un jouet sous l’un de trois gobelets sous les yeux de votre enfant. Pour
        un enfant de deux ans, cachez deux jouets et voyez s’il se rappelle quel gobelet est déjà vide, un peu comme
        les pots de l’étude.
      </p>
      <p>
        <GameLink id="hand-on-the-cup" /> est un jeu d’attente. Mettez un jouet sous un gobelet retourné et posez la
        main de votre enfant à plat dessus. Dites « attends, attends, attends » puis « vas-y », et il ne soulève le
        gobelet que sur « vas-y ». Allongez un peu l’attente à chaque fois, puis laissez-le tenir le gobelet pendant
        que vous attendez son « vas-y ».
      </p>

      <h2>Jeux avec des chaussettes</h2>
      <p>
        La pile de linge est un jeu. Dans <GameLink id="two-sock-piles" />, vous videz un tas de chaussettes propres
        par terre et faites deux piles : les foncées ici, les claires là. Passez-lui une chaussette à la fois et
        laissez-le choisir la pile, avec un indice seulement s’il bloque. Une fois le tas fini, mélangez tout et
        recommencez, mais cette fois les grandes ici et les petites là. Au deuxième tour, la règle change.
      </p>
      <p>
        Vous en trouverez d’autres dans les <Link href="/games/tag/socks">jeux avec des chaussettes</Link>.
      </p>

      <h2>Jeux avec des coussins</h2>
      <p>
        Dans <GameLink id="cushion-lava" />, vous éparpillez les coussins par terre et annoncez que le sol est de la
        lave, alors les pieds restent sur les coussins. Sautez de coussin en coussin ensemble jusqu’au canapé, en vous
        tenant la main pour les grands écarts. Annoncez « la lave monte » et retirez un coussin à chaque tour.
      </p>
      <p>
        <GameLink id="rescue-teddy" /> ajoute un plan. Posez Nounours sur le canapé en disant qu’il est coincé.
        Prévoyez un sauvetage en deux étapes, comme « par-dessus le coussin, puis on grimpe », dites les deux étapes
        ensemble, puis rampez et grimpez côte à côte. La fois suivante, placez Nounours ailleurs et laissez votre
        enfant vous dire les deux étapes avant que l’un de vous ne bouge.
      </p>
      <p>
        N’aidez qu’autant que votre enfant en a besoin. Dans une étude, la façon dont les parents donnaient juste
        assez d’aide pour un puzzle à 2 à 3 ans, et demandaient « et maintenant ? », prédisait les fonctions
        exécutives de leurs enfants à 3 à 4 ans <Cite id="hammond-2012" />. D’autres jeux de coussins vous attendent
        dans les <Link href="/games/tag/cushions">jeux avec des coussins</Link>.
      </p>

      <h2>Jeux sans rien du tout</h2>
      <p>
        <GameLink id="jump-jump-freeze" />, c’est pour les jambes qui frétillent. Tenez-vous par la main et sautez
        ensemble en comptant « un, deux, trois », puis dites « statue » et figez-vous. Comptez un peu plus loin à
        chaque tour. Puis laissez votre enfant compter les sauts, et figez-vous pile quand il le dit.
      </p>
      <p>
        <GameLink id="three-two-one-hug" /> ne demande que vos bras. Ouvrez-les grand et comptez lentement à rebours,
        « trois, deux, un », pendant que votre enfant attend à un pas. Dites « câlin », et il vient se faire serrer,
        puis retourne à sa place. Comptez plus lentement, ou marquez une pause avant « un ».
      </p>
      <p>
        Les jeux de statues sont les cousins de la danse des statues. Dans une étude, chanter, danser et jouer à des
        jeux musicaux ensemble à la maison à 2 à 3 ans prédisait l’attention et l’autorégulation à 5 ans{" "}
        <Cite id="williams-2015" />. Vous en trouverez d’autres dans les{" "}
        <Link href="/games/tag/one-room">jeux dans une seule pièce</Link>.
      </p>

      <h2>Quand ça part en vrille</h2>
      <p>
        Ces capacités continuent de se développer pendant toutes les années de maternelle. Les tests de mémoire de
        travail, de maîtrise de soi et de changement de règle montrent des différences d’un âge à l’autre entre 18
        mois et cinq ans et demi <Cite id="garon-2014" />. Un enfant qui attrape le gobelet avant « vas-y », c’est un
        enfant de deux ans.
      </p>
      <p>
        Arrêtez pendant que c’est encore drôle, et essayez un autre jeu demain. La liste complète se trouve dans les{" "}
        <Link href="/games/age/toddlers">jeux pour enfant de 1 à 3 ans</Link>. Si le développement de votre enfant
        vous inquiète, parlez-en à votre pédiatre.
      </p>
    </>
  ),
};
