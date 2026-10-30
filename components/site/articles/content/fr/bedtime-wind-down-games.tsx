import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../bedtime-wind-down-games";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Jeux calmes pour le coucher",
  description:
    "Des jeux calmes pour les dernières minutes avant d’éteindre : chansons en pause, chuchotements, ralenti, respiration et histoires, pour bébés, tout-petits et enfants de maternelle.",
  body: (
    <>
      <p>
        Les dernières minutes avant d’éteindre la lumière ne sont pas le moment des jeux de poursuite. Les jeux
        ci-dessous sont calmes, se jouent surtout allongé, et chacun se termine sur un moment immobile. Ils
        n’endormiront pas votre enfant. Ils vous offrent dix minutes calmes ensemble, à la fin de la journée.
      </p>

      <h2>Ce qui rend un jeu calme</h2>
      <p>
        Chaque jeu ci-dessous a les trois mêmes ingrédients : une voix basse, un rythme lent, et quelque chose pour
        lequel rester immobile. Chuchoter et aller lentement exprès, ce sont justement les tâches que les chercheurs
        donnent aux tout-petits. Dans une étude au long cours, on a demandé à des enfants de 22 à 45 mois de
        chuchoter, de marcher lentement sur une ligne, et de s’arrêter et repartir à un signal{" "}
        <Cite id="kochanska-2000" />.
      </p>
      <p>
        Un jeu du coucher peut donc rester un vrai jeu. Il a une règle. Simplement, cette règle est calme.
      </p>

      <h2>Pour les bébés : une chanson qui s’arrête</h2>
      <p>
        <GameLink id="lullaby-stop-start" /> marche dès 6 mois. Allongez-vous avec votre bébé sur la poitrine et
        fredonnez ou chantez une berceuse qu’il connaît. Arrêtez-vous au milieu d’un vers et restez parfaitement
        immobile, en respirant lentement. Dès qu’il gigote, gazouille ou lève les yeux, reprenez là où vous vous étiez
        arrêté. Les bébés de six mois restaient attentifs plus longtemps quand leur mère leur chantait une chanson que
        quand elle leur parlait <Cite id="nakata-trehub-2004" />.
      </p>
      <p>
        <GameLink id="missing-last-word" /> marche dès 2 mois, lumière tamisée. Chantez lentement une chanson que
        votre bébé connaît bien, en regardant son visage. Arrêtez-vous juste avant le dernier mot d’un vers et laissez
        planer le silence, sourcils levés. Attendez un tortillement, un coup de pied ou un regard, puis lâchez le mot
        avec un sourire. Les bébés de 2 à 6 mois réagissaient quand des chercheurs cassaient le rythme de jeux comme
        le coucou-caché <Cite id="rochat-1999" />.
      </p>

      <h2>Pour les tout-petits : chuchotements et ralenti</h2>
      <p>
        <GameLink id="whisper-chat" />, c’est dès 2 ans. Couchez un jouet entre vous et convenez que seuls les
        chuchotements sont permis pendant qu’il dort. Chuchotez une question, comme « qu’est-ce que tu as mangé ? »,
        et votre enfant vous chuchote la réponse. Si quelqu’un parle fort, le jouet se redresse, fâché, et vous le
        rendormez tous les deux en chuchotant.
      </p>
      <p>
        <GameLink id="sleepy-mirror-slow" />, c’est dès 2 ans. Allongez-vous côte à côte et faites tout au ralenti,
        si bien qu’un bâillement prend une respiration entière. Votre enfant imite chaque geste lent, un étirement,
        une roulade, un frottement d’yeux, à votre vitesse d’escargot. Laissez-le mener un ou deux gestes lents, puis
        finissez en fermant les yeux, le plus lentement du monde.
      </p>
      <p>
        Chuchoter fait partie des tâches que les chercheurs ont données à des enfants de 2 à 6 ans, avec l’attente et Simon says
        (Jacques a dit) <Cite id="carlson-2005" />. Vous en trouverez d’autres dans les{" "}
        <Link href="/games/type/quiet-voice">jeux de chuchotement</Link>.
      </p>

      <h2>Pour les enfants de maternelle : respirer et écouter</h2>
      <p>
        Le guide d’activités de Harvard pour les 3 à 5 ans cite des postures de yoga avec une respiration lente{" "}
        <Cite id="cdc-guide" />. Des enfants de maternelle qui ont pratiqué un yoga en pleine conscience, avec des
        postures tenues et une respiration lente, ont amélioré leur autorégulation <Cite id="razza-2015" />.
      </p>
      <p>
        <GameLink id="belly-boat" /> demande un petit jouet chacun. Allongez-vous sur le dos avec un jouet posé sur
        chaque ventre. Inspirez lentement pour que le bateau monte, puis expirez lentement pour qu’il descende.
        Comptez ensemble cinq tours de bateau, puis regardez-en un de plus sans un mot.
      </p>
      <p>
        <GameLink id="melting-snowman" />, c’est pour un enfant encore tout remonté. Votre enfant s’allonge comme un
        bonhomme de neige gelé, raide des orteils jusqu’au nez. Nommez une partie du corps à la fois, et le soleil la
        fait fondre toute molle dans le sol. Quand tout le bonhomme n’est plus qu’une flaque, soufflez ensemble.
      </p>
      <p>
        <GameLink id="five-sounds" /> ne demande rien du tout. Allongez-vous ensemble sans bouger, les yeux fermés,
        et écoutez. Chaque fois que l’un de vous entend un bruit, chuchotez ce que c’était et levez un doigt.
        Arrêtez-vous à cinq, puis décidez ensemble quel bruit était le plus discret. Il y en a d’autres dans les{" "}
        <Link href="/games/type/quiet-focus">jeux de calme et de concentration</Link>.
      </p>

      <h2>Des histoires dans le noir</h2>
      <p>
        <GameLink id="rewind-the-day" />, c’est pour l’extinction des feux et un enfant qui aime parler. Partez de
        maintenant et demandez « et avant ? » pour remonter la journée à l’envers. Ne donnez un indice que si votre
        enfant bloque, et continuez jusqu’au petit-déjeuner. La fois suivante, rembobinez une histoire que vous
        connaissez tous les deux, de la fin jusqu’au début. Raconter des histoires figure sur la même liste de Harvard
        pour les 3 à 5 ans <Cite id="cdc-guide" />.
      </p>
      <p>
        Si l’histoire s’éternise, laissez faire. Le but, c’est dix minutes ensemble, pas un jeu terminé.
      </p>

      <h2>Si le coucher est une bataille</h2>
      <p>
        Un jeu ne réglera pas tous les couchers, et rien ici n’est un conseil sur le sommeil. Si s’endormir ou rester
        endormi est difficile la plupart des soirs, parlez-en à votre pédiatre.
      </p>
      <p>
        Pour aller plus loin, voyez les <Link href="/games/tag/bedtime">jeux du coucher</Link> et les{" "}
        <Link href="/games/energy/low">jeux calmes quand on est épuisé</Link>.
      </p>
    </>
  ),
};
