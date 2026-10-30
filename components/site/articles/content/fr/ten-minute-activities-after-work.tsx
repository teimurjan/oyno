import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../ten-minute-activities-after-work";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Activités de 10 minutes avec son enfant après le travail",
  description:
    "Vous venez de rentrer et il vous reste à peu près dix minutes d’énergie. Voici des jeux courts pour bébés, tout-petits et enfants de maternelle, presque sans préparation.",
  body: (
    <>
      <p>
        Vous rentrez, vous posez votre sac, et votre enfant est déjà accroché à vos jambes. Le dîner vous attend
        bientôt, et il ne vous reste pas grand-chose. Vous avez à peu près dix minutes. C’est assez pour un bon jeu.
      </p>
      <p>
        Moi aussi, je travaille toute la journée, et quand je rentre, ma main va vers mon téléphone avant même que
        j’aie enlevé mon manteau. Ces premières minutes filent facilement. Dans une expérience, des parents dans un
        musée des sciences à qui l’on avait demandé d’utiliser beaucoup leur téléphone se sont sentis plus distraits
        et moins proches de leurs enfants que ceux à qui l’on avait demandé de l’utiliser peu{" "}
        <Cite id="kushlev-dunn-2019" />. Les jeux ci-dessous sont une façon de passer ces mêmes minutes par terre,
        avec lui.
      </p>

      <h2>Pourquoi dix minutes suffisent</h2>
      <p>
        Un jeu court reste un vrai moment ensemble. La fiche de Harvard sur le « servir et renvoyer » (serve and
        return) décrit l’aller-retour qui compte : remarquer ce qui capte votre enfant, le partager, le nommer, jouer
        chacun son tour et attendre <Cite id="serve-return" />. Rien de tout cela ne demande une heure.
      </p>
      <p>
        Chaque jeu ici dure 10 minutes ou moins et tient en trois étapes au plus. Choisissez-en un, jouez jusqu’à ce
        que votre enfant s’en lasse, puis attaquez le dîner.
      </p>

      <h2>Bébés : un jeu par terre</h2>
      <p>
        Pour un bébé qui tient bien assis, essayez <GameLink id="ball-back" />. Asseyez-vous face à lui, jambes
        écartées pour former un enclos, et roulez une balle lentement jusqu’à lui. Tendez les mains et attendez en
        silence qu’il vous la renvoie. Dites « à moi », roulez-la de nouveau, et laissez les attentes s’allonger.
      </p>
      <p>
        L’attente, c’est votre part du travail. Dans un essai, apprendre à des parents de bébés de 6 à 10 mois à
        répondre à leur bébé a amélioré l’attention des bébés et leur capacité à résoudre seuls des problèmes{" "}
        <Cite id="landry-2006" />.
      </p>
      <p>
        Vers 9 mois, quand les bébés commencent à suivre du regard ce qu’on leur montre, essayez{" "}
        <GameLink id="point-and-name" />. Votre bébé sur les genoux, montrez une chose de l’autre côté de la pièce et
        gardez le bras tendu jusqu’à ce que ses yeux s’y posent. Nommez-la une fois, lentement. Puis suivez plutôt son
        regard à lui, et nommez ce qu’il fixe. Des enfants d’un an restaient attentifs plus longtemps à un jouet quand
        leur parent regardait et nommait le même jouet <Cite id="yu-smith-2016" />.
      </p>

      <h2>Tout-petits : des règles courtes, des tours rapides</h2>
      <p>
        Ces trois jeux sont pour les enfants dès 2 ans, et tous se jouent assis.
      </p>
      <ul>
        <li>
          <GameLink id="wait-wait-go" /> : asseyez-vous face à face, la balle dans les mains de votre enfant. Dites
          lentement « attends, attends », puis « vas-y », et il vous la roule. Allongez un peu l’attente à chaque fois.
        </li>
        <li>
          <GameLink id="loud-soft-singing">Fort et doux</GameLink> : chantez une chanson ensemble. Main en haut, on
          chante fort ; main sur le genou, on chuchote. Puis c’est la main de votre enfant qui décide.
        </li>
        <li>
          <GameLink id="tell-teddy" /> : asseyez Nounours de l’autre côté de la pièce et chuchotez un petit message à
          votre enfant, comme « Nounours, à table ». Il va le dire à Nounours, et vous répondez avec la voix de
          Nounours.
        </li>
      </ul>
      <p>
        Attendre et chuchoter sont deux tâches que les chercheurs ont utilisées pour étudier la maîtrise de soi chez
        des enfants de 22 à 45 mois <Cite id="kochanska-2000" />. Les jeux musicaux comptent aussi. Dans une étude,
        chanter, danser et jouer à des jeux musicaux ensemble à la maison à 2 à 3 ans a prédit l’attention et
        l’autorégulation à 5 ans <Cite id="williams-2015" />.
      </p>

      <h2>Enfants de maternelle : une règle à enfreindre</h2>
      <p>
        Les enfants de maternelle adorent une règle qui met tout sens dessus dessous. Pour un enfant dès quatre ans,
        essayez <GameLink id="heads-mean-toes" />. Quand vous dites « tête », il touche ses pieds, et quand vous dites
        « pieds », il touche sa tête. Commencez lentement, puis accélérez. Vous pouvez l’annoncer depuis une chaise.
        C’est proche d’une tâche d’une étude où des enfants de 4 à 6 ans faisaient le même échange, et leur réussite
        prédisait leurs résultats en grande section <Cite id="ponitz-2009" />.
      </p>
      <p>
        Si votre enfant revient tout excité de la crèche, <GameLink id="closed-hands" /> ralentit le rythme. Il ferme
        les yeux et tend ses deux mains fermées. Comptez lentement jusqu’à vingt ensemble, et si ses yeux ou ses mains
        s’ouvrent, vous recommencez. À vingt, un petit jouet atterrit dans ses mains.
      </p>
      <p>
        S’il a besoin de bouger, <GameLink id="pillow-island" /> tient en dix minutes. Disposez des coussins sur le sol
        comme des îles. Votre enfant traverse sans toucher « l’eau », et chaque fois qu’il réussit, vous retirez une
        île.
      </p>

      <h2>Un plan pour la porte d’entrée</h2>
      <ol>
        <li>Laissez votre téléphone dans votre sac ou sur le chargeur près de la porte.</li>
        <li>Proposez deux jeux et laissez votre enfant choisir.</li>
        <li>Asseyez-vous par terre avant de vous asseoir sur le canapé. C’est plus facile de lancer un jeu de là.</li>
        <li>Jouez jusqu’à ce que votre enfant parte faire autre chose, puis attaquez le dîner sans culpabiliser.</li>
      </ol>
      <p>
        Pour d’autres jeux de ce genre, voyez les{" "}
        <Link href="/games/energy/medium">jeux faciles des soirs ordinaires</Link>. Les soirs où il vous reste moins,
        essayez les <Link href="/games/energy/low">jeux calmes quand on est épuisé</Link>.
      </p>
    </>
  ),
};
