import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../red-light-green-light-self-control";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "1, 2, 3, soleil et maîtrise de soi",
  description:
    "Pourquoi les jeux de stop et go comme 1, 2, 3, soleil figurent dans les guides sur la maîtrise de soi, ce qu’ont montré deux essais en classe, et comment y jouer à la maison.",
  body: (
    <>
      <p>
        Vous connaissez le jeu. Quelqu’un dit « feu vert » et tout le monde avance. Quelqu’un dit « feu rouge » et
        tout le monde s’arrête net. Celui qui bouge encore retourne au départ.
      </p>
      <p>
        Tout le plaisir est dans l’arrêt. Les jambes de votre enfant veulent continuer, et le jeu lui demande de
        s’arrêter quand même. Ce moment, où il retient ce que son corps veut faire, c’est la maîtrise de soi.
      </p>

      <h2>S’arrêter sur un signal, ça commence tôt</h2>
      <p>
        Des chercheurs ont observé cette compétence chez les tout-petits. Dans une étude au long cours, on a demandé
        à des enfants de 22 à 45 mois d’attendre une friandise, de marcher lentement sur une ligne, de chuchoter, et
        de s’arrêter et repartir sur un signal <Cite id="kochanska-2000" />. S’arrêter et repartir sur un signal,
        c’est 1, 2, 3, soleil sans le nom.
      </p>
      <p>
        Un enfant de deux ans peut donc jouer à une version de ce jeu. Dans <GameLink id="green-means-go" />, pour
        les enfants dès 2 ans, vous vous placez côte à côte à un bout de la pièce et dites « vert » pour foncer tous
        les deux vers le mur d’en face. Annoncez « rouge » à tout moment et arrêtez-vous net. Puis annoncez chacun
        votre tour, et quand votre enfant annonce les couleurs, freinez très mal en dérapant et en vacillant.
      </p>

      <h2>Ce qu’ont montré les essais en classe</h2>
      <p>
        Deux essais ont testé directement des jeux de stop et go. Des enfants de 3 à 5 ans ont joué en cercle à des
        jeux comme Red Light, Purple Light (« feu rouge, feu violet »), à des jeux de statues aux règles inversées,
        à des battements de tambour et à la direction d’orchestre. Leur autorégulation s’est
        améliorée <Cite id="tominey-mcclelland-2011" />. Un essai plus récent, dans des classes de maternelle du
        programme Head Start, a montré que les jeux Red Light, Purple Light amélioraient l’autorégulation et la
        préparation à l’école <Cite id="schmitt-2015" />.
      </p>
      <p>
        Ces études portaient sur des enfants de maternelle qui jouaient en groupe. À la maison, vous jouez au même
        genre de jeu, sans suivre le programme. Ce n’est pas grave. Le jeu vaut la peine pour lui-même.
      </p>

      <h2>L’astuce : inverser la règle</h2>
      <p>
        Le premier essai ne s’arrêtait pas au rouge et au vert. Il utilisait des jeux de statues aux règles
        inversées <Cite id="tominey-mcclelland-2011" />. Une inversion demande à votre enfant de lâcher l’ancienne
        règle et de suivre la nouvelle.
      </p>
      <p>
        <GameLink id="purple-light" /> apporte cette astuce à la maison. Placez-vous à un bout du couloir. Votre
        enfant avance vers vous au « feu violet » et se fige au « feu rouge ». Quand il vous rejoint, inversez les
        mots : maintenant rouge veut dire avancer et violet veut dire stop. Annoncez les couleurs plus vite à chaque
        tour.
      </p>
      <p>
        <GameLink id="three-lights" /> ajoute une troisième règle. Feu vert, on court ; feu rouge, on s’arrête ; et
        feu violet veut dire sur la pointe des pieds. Criez les trois dans n’importe quel ordre, et quand votre
        enfant vous rejoint, c’est lui qui annonce les feux.
      </p>

      <h2>Ce que proposent les guides</h2>
      <p>Les guides que les chercheurs écrivent pour les parents proposent des jeux de stop et go à chaque âge :</p>
      <ul>
        <li>
          De 18 à 36 mois, le guide d’activités de Harvard propose la danse des statues et les chansons où l’on
          s’arrête et repart <Cite id="cdc-guide" />.
        </li>
        <li>
          De 4 à 7 ans, les fiches Brain-Building Through Play de Harvard proposent la danse des statues avec des
          positions, Jacques a dit et 1, 2, 3, soleil <Cite id="brain-play" />.
        </li>
        <li>
          De 5 à 7 ans, le guide d’activités de Harvard propose la danse des statues, les chaises musicales et 1, 2,
          3, soleil <Cite id="cdc-guide-5-7" />.
        </li>
      </ul>

      <h2>Comment y jouer à la maison, selon l’âge</h2>
      <h3>Les tout-petits, dès 2 ans</h3>
      <p>
        Gardez un seul signal d’arrêt. En plus de Feu vert, on court, essayez <GameLink id="hum-and-stop" /> un soir
        de fatigue : fredonnez n’importe quel air et balancez-vous ensemble, puis arrêtez de fredonner sans prévenir
        et figez-vous. Votre enfant se fige aussi jusqu’à ce que l’air reprenne. <GameLink id="red-means-clap" /> se
        joue depuis une chaise : montrez les choses de la pièce, et votre enfant tape des mains seulement quand c’est
        rouge.
      </p>
      <h3>Les enfants de maternelle</h3>
      <p>
        Ajoutez l’inversion. Commencez par Feu violet, puis passez aux Trois feux. Un soir bruyant, mettez une
        chanson pour <GameLink id="freeze-dance" />. Celui qui commande crie « Statues ! » à tout moment, tout le
        monde se fige, et celui qui vacille commande la fois suivante. Pour une version assise,{" "}
        <GameLink id="stop-the-song" /> arrête une chanson net quand vous levez la main, même au milieu d’un mot.
      </p>
      <h3>À tout âge</h3>
      <ul>
        <li>Commencez lentement, avec de longs écarts entre les signaux, pour que votre enfant puisse gagner.</li>
        <li>Essayez d’autres signaux que les mots : une main levée, un fredonnement qui s’arrête, une lumière qu’on éteint.</li>
        <li>De temps en temps, freinez mal exprès. Vous prendre en faute, c’est la moitié du plaisir pour votre enfant.</li>
        <li>Laissez-le annoncer à son tour. La plupart de ces jeux finissent par un échange des rôles.</li>
        <li>Faites court et arrêtez pendant qu’il veut encore une partie.</li>
      </ul>
      <p>
        Vous en trouverez d’autres dans les <Link href="/games/type/stop-go">jeux de stop et go</Link> et les{" "}
        <Link href="/games/skill/self-control">jeux de maîtrise de soi</Link>. Si le comportement ou le
        développement de votre enfant vous inquiète, parlez-en à votre pédiatre.
      </p>
    </>
  ),
};
