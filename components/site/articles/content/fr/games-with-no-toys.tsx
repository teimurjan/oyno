import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-no-toys";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Jeux sans jouets à faire avec son enfant",
  description:
    "Pas de jouets à portée de main, ou pas le courage d’aller les chercher ? Ces jeux pour les 0 à 5 ans ne demandent que vos mains, votre voix et la pièce où vous êtes.",
  body: (
    <>
      <p>
        Les jouets sont dans l’autre pièce, rangés dans un carton ou éparpillés sous le canapé. Vous n’en avez pas
        besoin. Beaucoup des plus vieux jeux pour les petits n’utilisent rien d’autre qu’un visage, deux mains et une
        voix.
      </p>
      <p>
        L’Académie américaine de pédiatrie décrit comment le jeu passe du sourire social à l’échange, au coucou-caché
        et aux comptines où l’on tape dans les mains (pat-a-cake) <Cite id="aap-play" />. Les fiches Brain-Building
        Through Play de Harvard citent Pat-a-Cake et Baby See Baby Do pour les bébés, Follow the Leader (suivre le
        meneur) pour les tout-petits, et Simon Says (Jacques a dit) et What Time Is It Mr Fox (Quelle heure est-il,
        Monsieur le Loup ?) pour les plus grands <Cite id="brain-play" />. Aucun ne demande de jouet.
      </p>

      <h2>Bébés : votre visage est le jouet</h2>
      <p>
        Vers 6 mois, essayez <GameLink id="copy-cat-faces" />. Imitez la tête ou le son de votre bébé juste après
        lui : langue tirée, petit cri, sourcils froncés. Faites-le quelques fois, puis faites lentement une nouvelle
        grimace bien à vous et gardez-la. Attendez, sans changer de tête, qu’il essaie de vous imiter à son tour.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> se joue avec votre bébé sur les genoux. Demandez « Il est où, ton nez ? »
        et attendez le temps d’une lente respiration en regardant son visage. Touchez doucement son nez en disant
        « le nez », puis passez aux oreilles, aux orteils et au ventre.
      </p>
      <p>
        Les deux jeux suivent l’initiative de votre bébé. Dans un essai, apprendre à des parents d’enfants de 6 à
        21 mois à suivre l’initiative de l’enfant, à lui répondre et à montrer leur joie a amélioré la flexibilité
        mentale des enfants à 4 ans <Cite id="lind-2017" />.
      </p>

      <h2>Tout-petits : votre corps est le plateau de jeu</h2>
      <p>
        <GameLink id="nose-knees-toes" />, c’est pour un tout-petit dès 2 ans qui sait où est son nez. Demandez « il
        est où, ton nez ? » en touchant le vôtre, et votre enfant touche le sien. Puis les genoux, les orteils, les
        oreilles. Quand il est rapide, dites « touche tes orteils » en touchant votre nez : il doit suivre vos mots,
        pas votre main.
      </p>
      <p>
        <GameLink id="rug-tightrope-walk" /> ne demande que le bord d’un tapis ou une ligne du parquet. C’est une
        corde de funambule qui mène jusqu’à vous sur le canapé. Votre enfant y marche un pas lent après l’autre, bras
        écartés, pendant que vous commentez chaque pas à voix basse. Un pied hors de la corde, c’est retour au départ,
        et s’il arrive jusqu’à vous, il gagne un câlin sur le canapé. Vous n’avez pas à vous lever une seule fois.
      </p>
      <p>
        Ces jeux ressemblent aux tâches d’une étude au long cours, où l’on demandait à des enfants de 22 à 45 mois de
        marcher lentement sur une ligne, de chuchoter, et de s’arrêter et repartir à un signal{" "}
        <Cite id="kochanska-2000" />.
      </p>

      <h2>Enfants de maternelle : des jeux faits de mots</h2>
      <p>
        Dès 3 ans, un jeu peut n’être fait que de règles et de paroles. <GameLink id="simon-says" /> est le grand
        classique. Annoncez des mouvements, et votre enfant ne fait que ceux qui commencent par « Jacques a dit ».
        Glissez des ordres tout simples et prenez-le en faute s’il bouge. Après trois pièges réussis, c’est lui qui
        devient Jacques. Simon says, la version anglaise du jeu, faisait partie des tâches d’une étude auprès
        d’enfants de 2 à 6 ans <Cite id="carlson-2005" />.
      </p>
      <p>
        <GameLink id="wolf-time" />, c’est le classique du loup, version couloir. Vous êtes face au mur, tout au bout.
        Votre enfant demande « quelle heure est-il, Monsieur le Loup ? », et vous répondez un nombre jusqu’à dix : il
        fait exactement autant de pas vers vous, en comptant à voix haute. Quand il est tout près, répondez « l’heure
        du dîner ! » et poursuivez-le jusqu’au départ.
      </p>
      <p>
        <GameLink id="whisper-telephone" /> marche quand un frère ou une sœur dort. Chuchotez un court message à
        l’oreille de votre enfant, comme « le chat a mangé une chaussette », et il vous le rechuchote, mot pour mot.
        Ajoutez un mot à chaque tour.
      </p>

      <h2>Quand vous êtes hors de chez vous</h2>
      <p>
        Les jeux sans jouets prennent tout leur sens dans une salle d’attente, une file ou un long trajet. Dans{" "}
        <GameLink id="zoo-list">J’ai vu un zèbre</GameLink>, vous dites « au zoo, j’ai vu un zèbre ». Votre enfant
        répète toute la liste et ajoute un animal, puis vous faites pareil, jusqu’à ce que quelqu’un oublie un animal.
        Partez alors pour un nouveau voyage dans un nouvel endroit. La plage, la ferme et le magasin marchent tous, et
        votre enfant peut choisir où vous allez.
      </p>
      <p>
        Il y en a d’autres pour la route dans les <Link href="/games/tag/in-the-car">jeux en voiture</Link>.
      </p>

      <h2>Comment en lancer un ce soir</h2>
      <ul>
        <li>Choisissez un jeu adapté à l’âge de votre enfant et donnez la règle en une phrase.</li>
        <li>Avec un bébé, tenez-vous-en aux visages et aux sons. Imitez ce qu’il fait, puis attendez qu’il réponde.</li>
        <li>Jouez le premier tour lentement, pour qu’il puisse le gagner.</li>
        <li>Passez-lui la main. La plupart de ces jeux finissent par un échange des rôles, et votre enfant mène à son tour.</li>
      </ul>
      <p>
        Tous les <Link href="/games/tag/nothing-to-grab">jeux sans jouets</Link> se jouent les mains vides. Vous pouvez
        aussi parcourir les jeux par âge, en commençant par les{" "}
        <Link href="/games/age/toddlers">jeux pour enfant de 1 à 3 ans</Link>.
      </p>
    </>
  ),
};
