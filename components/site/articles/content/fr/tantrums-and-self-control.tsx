import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../tantrums-and-self-control";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Colères de mon enfant de 2 ans : un manque de maîtrise de soi ?",
  description:
    "La maîtrise de soi est encore en construction chez les tout-petits. Ce que les études ont demandé aux enfants à chaque âge, et des jeux au calme pour s’entraîner.",
  body: (
    <>
      <p>
        Votre enfant voulait le gobelet bleu. Vous lui avez donné le vert. Le voilà par terre. Vous vous êtes
        sûrement demandé si c’était une phase, son caractère, ou quelque chose que vous aviez fait.
      </p>
      <p>
        Je ne peux pas vous dire pourquoi votre enfant fait des colères. Personne ne le peut à partir d’un article
        de blog. Ce que je peux faire, c’est vous montrer ce que les chercheurs ont découvert sur la maîtrise de soi
        à cet âge, parce que cela peut changer ce que vous attendez d’un enfant de deux ans. Et je serai clair sur ce
        que la recherche ne dit pas.
      </p>

      <h2>La maîtrise de soi est une compétence encore en construction</h2>
      <p>
        Ici, la maîtrise de soi, c’est retenir une première impulsion : attendre, aller doucement, baisser la voix
        quand on a envie de crier. Les chercheurs la testent avec de petites tâches, et ces tâches changent avec
        l’âge.
      </p>
      <p>
        Dans une étude au long cours, on a demandé à des enfants de 22 à 45 mois d’attendre une friandise, de marcher
        lentement sur une ligne, de chuchoter, de s’arrêter et repartir sur un signal, et de construire une tour
        chacun son tour <Cite id="kochanska-2000" />. Une autre étude a proposé à des enfants de 2 à 6 ans une série
        de tâches adaptées à leur âge, d’attendre un goûter ou un cadeau à Simon says (Jacques a dit), en passant par
        le chuchotement et un jeu du jour et de la nuit <Cite id="carlson-2005" />. Une troisième a construit une
        série de tâches pour des enfants de 18 mois à environ cinq ans et demi, qui faisait ressortir de nettes
        différences d’un âge à l’autre <Cite id="garon-2014" />.
      </p>
      <p>
        Pour le dire simplement, les chercheurs utilisent des tâches différentes selon l’âge, et les résultats
        changent d’un âge à l’autre. Votre tout-petit est au début de ce parcours.
      </p>

      <h2>Ce que la recherche ne dit pas</h2>
      <p>
        Aucune des études de cet article ne portait sur les colères. Aucune n’a testé si un jeu rend les colères plus
        courtes ou plus rares. Cet article ne vous le promettra donc pas.
      </p>
      <p>
        Ce qu’un essai a montré est plus restreint. Des enfants de 3 à 5 ans qui jouaient en cercle à des jeux comme
        Red Light, Purple Light (« feu rouge, feu violet ») et à des jeux de statues aux règles inversées ont amélioré
        leur autorégulation <Cite id="tominey-mcclelland-2011" />. Il s’agissait d’enfants de maternelle, qui
        jouaient en groupe, et on mesurait leur autorégulation. C’est une raison de jouer à ces jeux. Ce n’est pas une
        promesse pour la prochaine crise.
      </p>

      <h2>S’entraîner au calme, pas dans la tempête</h2>
      <p>
        Un jeu est un entraînement, et il est plus facile d’y jouer quand tout le monde est calme. Le milieu d’une
        crise n’est pas le moment pour un jeu de statues. Une soirée tranquille, une bonne humeur après le dîner,
        dix minutes avant le bain : voilà les bons moments.
      </p>
      <p>
        Tous les jeux ci-dessous sont pour les enfants dès 2 ans, et chacun demande un peu d’attente ou d’arrêt, le
        même genre de choses que dans les études ci-dessus.
      </p>

      <h2>Des jeux pour une soirée calme</h2>
      <ul>
        <li>
          <GameLink id="wait-wait-go" /> : asseyez-vous face à face, la balle dans les mains de votre enfant. Dites
          lentement « attends, attends », puis « vas-y », et il vous la roule. Allongez un peu l’attente à chaque
          fois, puis laissez-le vous dire les mots.
        </li>
        <li>
          <GameLink id="spoon-bell-snack" /> : posez une bouchée qu’il adore sous un gobelet retourné sur la tablette
          de la chaise haute. Dites « attends la cloche », marquez une pause, puis tapez deux fois la cuillère sur la
          table. Au son, il soulève le gobelet et mange.
        </li>
        <li>
          <GameLink id="scarf-up-scarf-down" /> : tenez un foulard bien haut, et votre enfant gigote et danse.
          Laissez-le tomber sur vos genoux, et il se fige jusqu’à ce que le foulard remonte.
        </li>
        <li>
          <GameLink id="whisper-feet" /> : faites le tour de la pièce ensemble. Quand vous chuchotez, il marche sur la
          pointe des pieds, et quand vous parlez d’une grosse voix, il tape des pieds.
        </li>
        <li>
          <GameLink id="open-shut-them" /> : chantez « Ouvrez, fermez » avec vos mains et faites grimper vos doigts
          jusqu’à votre menton, en vous arrêtant pile là, sans les laisser entrer dans la bouche.
        </li>
        <li>
          <GameLink id="finger-candle-blow" /> : levez un doigt comme une bougie. Un petit souffle rapide la fait
          vaciller, et seul un long souffle lent la fait se coucher.
        </li>
      </ul>
      <p>
        Faites court, laissez votre enfant gagner la plupart des parties, et arrêtez tant que c’est amusant. Vous en
        trouverez d’autres dans les <Link href="/games/skill/self-control">jeux de maîtrise de soi</Link> et les{" "}
        <Link href="/games/type/waiting">jeux d’attente</Link>.
      </p>

      <h2>Des mots pour les grandes émotions</h2>
      <p>
        Le langage compte peut-être aussi. Dans une étude, le vocabulaire et la parole des tout-petits entre 14 et
        36 mois prédisaient les progrès de leur autorégulation <Cite id="vallotton-ayoub-2011" />. C’est un lien, pas
        la preuve que parler provoque quoi que ce soit. Le guide d’activités de Harvard pour les 18 à 36 mois compte
        parler des émotions parmi ses recommandations <Cite id="cdc-guide" />.
      </p>
      <p>
        Dans un moment calme, nommez ce que vous avez vu : « Tu étais vraiment fâché pour le gobelet. »
      </p>

      <h2>Quand en parler à quelqu’un</h2>
      <p>
        Si la fréquence ou la durée des colères de votre enfant vous inquiète, ou quoi que ce soit d’autre dans son
        comportement ou son développement, parlez-en à votre pédiatre. Il connaît votre enfant, et c’est exactement
        pour ce genre de question qu’il est là.
      </p>
    </>
  ),
};
