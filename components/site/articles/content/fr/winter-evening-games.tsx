import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../winter-evening-games";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Jeux pour les soirées d’hiver, quand il fait nuit tôt",
  description:
    "Des jeux qui se servent du noir : une lampe, la lampe du téléphone et une pièce calme. Une sélection pour bébés, tout-petits et enfants de maternelle, et une façon de jouer avec deux âges à la fois.",
  body: (
    <>
      <p>
        Quand il fait nuit avant le dîner, toute la soirée se passe à l’intérieur. Je travaille toute la journée, je
        rentre et j’attrape mon téléphone. Les jeux ci-dessous donnent au téléphone un autre travail : faire lampe de
        poche.
      </p>
      <p>
        Ils se servent du noir lui-même. Une lampe qu’on éteint et qu’on rallume, un rond de lumière sur le mur, une
        pièce calme où écouter. Ils sont classés par âge, avec une partie à la fin pour deux enfants d’âges différents.
      </p>

      <h2>Pour un bébé : la lampe et le rond de lumière</h2>
      <p>
        <GameLink id="lamp-off-lamp-on" /> marche dès 2 mois. Installez-vous près d’une lampe à portée de main, votre
        bébé sur les genoux. Dites lentement « éteint » et éteignez, attendez qu’il cherche la lumière, puis dites
        « allumé » et rallumez. Allongez un peu le moment dans le noir à chaque fois, et gardez une voix douce.
      </p>
      <p>
        C’est du coucou-caché avec une lampe. Quand des chercheurs ont cassé le rythme du coucou-caché chez des bébés
        de 2 à 6 mois, les bébés ont réagi <Cite id="rochat-1999" />.
      </p>
      <p>
        <GameLink id="light-spot-hunt" /> marche dès 5 mois, dans une chambre tamisée, votre bébé sur les genoux.
        Éclairez le mur avec la lampe du téléphone et attendez que votre bébé trouve le rond de lumière. Faites-le
        glisser lentement le long du mur, puis éteignez et demandez « il est où ? » Rallumez ailleurs, et laissez-le le
        trouver avant de le déplacer de nouveau. Des bébés de cinq mois et demi à six mois et demi savaient retrouver
        un jouet après un court délai <Cite id="reznick-2004" />.
      </p>

      <h2>Pour un tout-petit : une étoile au plafond</h2>
      <p>
        <GameLink id="ceiling-star-spot" /> marche dès 1 an. Allongez-vous côte à côte dans une chambre sombre,
        dirigez la lampe vers le plafond et faites glisser lentement le rond lumineux. Votre enfant suit l’étoile des
        yeux, et quand elle s’arrête, il la montre du doigt. Éteignez, demandez « elle était où ? », et laissez-le
        montrer avant de rallumer pour vérifier.
      </p>
      <p>
        Harvard appelle ce genre de jeu « servir et renvoyer » (serve and return) : partager ce qui capte votre
        enfant, nommer ce qu’il voit, jouer chacun son tour et attendre <Cite id="serve-return" />.
      </p>
      <p>
        <GameLink id="goodnight-room-dark" />, c’est dès 2 ans. Dites bonne nuit ensemble à trois choses de la chambre,
        comme la lampe, la chaise et Nounours, en les montrant. Éteignez et demandez « elle est où, la lampe ? » pour
        que votre enfant la montre dans le noir. Rallumez pour vérifier, puis demandez les deux autres. Dans une étude,
        des enfants de deux ans se souvenaient des pots qu’ils avaient déjà vidés <Cite id="hughes-ensor-2005" />.
      </p>

      <h2>Dès 2 ans : on se fige dans le noir</h2>
      <p>
        <GameLink id="spot-chase" />, c’est celui pour l’énergie qui reste. Baissez la lumière, éclairez le sol avec la
        lampe du téléphone, et laissez votre enfant piétiner le rond lumineux. Faites glisser le rond quand il le
        poursuit. Quand vous éteignez, tout le monde se fige jusqu’à son retour. Puis passez-lui la lampe et chassez le
        rond à votre tour.
      </p>
      <p>
        Dans une étude au long cours, on a demandé à des enfants de 22 à 45 mois de s’arrêter et repartir à un signal,
        en plus d’attendre et de chuchoter <Cite id="kochanska-2000" />. Ici, le signal, c’est le noir.
      </p>

      <h2>Pour un enfant de maternelle : rayons et interrupteurs</h2>
      <p>
        <GameLink id="torch-trail" /> se joue allongé. Baissez la lumière et éclairez trois choses avec la lampe, l’une
        après l’autre. Éteignez, et votre enfant nomme les trois choses dans le même ordre. Ajoutez-en une quatrième,
        puis passez-lui la lampe pour qu’il vous teste.
      </p>
      <p>
        <GameLink id="sun-moon-switch" /> vous demande de rester debout près de l’interrupteur. Lumière allumée, votre
        enfant dit « nuit » et se roule en boule. Lumière éteinte, il dit « jour » et s’étire pour se réveiller.
        Actionnez l’interrupteur à des moments imprévus, lentement d’abord, puis vite. Puis inversez, et trompez-vous
        exprès. Dire jour pour nuit fait partie des tâches que des chercheurs ont données à des enfants de 2 à 6 ans{" "}
        <Cite id="carlson-2005" />.
      </p>
      <p>
        Pour la fin de soirée la plus calme, <GameLink id="five-sounds" /> n’a besoin d’aucune lumière.
        Allongez-vous ensemble sans bouger, les yeux fermés. Chaque fois que l’un de vous entend un bruit, chuchotez ce
        que c’était et levez un doigt. Arrêtez-vous à cinq, et décidez ensemble quel bruit était le plus discret.
      </p>

      <h2>Deux enfants, une lampe</h2>
      <p>
        « Le rond de lumière » se termine avec la lampe dans les mains de votre enfant. Un aîné peut garder ce rôle
        pendant tout le jeu, pendant qu’un bébé ou un tout-petit cherche le rond, comme dans « Où est la lumière ? » ou
        « L’étoile au plafond ». Vous restez par terre entre les deux et vous nommez les choses.
      </p>
      <p>
        Gardez le faisceau sur les murs, les plafonds et le sol, loin des visages. N’utilisez le téléphone que comme
        lampe, et retournez-le écran vers le bas quand le jeu est fini.
      </p>
      <p>
        Il y en a d’autres dans les <Link href="/games/tag/lights">jeux de lumière</Link>, les{" "}
        <Link href="/games/tag/quiet">jeux calmes</Link> et les <Link href="/games/tag/bedtime">jeux du coucher</Link>.
      </p>
    </>
  ),
};
