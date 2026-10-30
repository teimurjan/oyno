import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../does-my-phone-affect-my-baby";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Mon téléphone a-t-il un effet sur mon bébé ?",
  description:
    "Ce que montrent les expériences du visage impassible, ce que les études du quotidien ne font que relier, et les petites habitudes qui entretiennent l’échange avec votre bébé.",
  body: (
    <>
      <p>
        Si vous vous posez la question, c’est que vous êtes déjà attentif. Votre téléphone vous sert aussi à regarder
        l’heure, à écrire au pédiatre et à tenir pendant une tétée de nuit. Il ne va pas disparaître.
      </p>
      <p>
        La recherche est plus rassurante que vous ne le craignez peut-être. Elle ne vise pas le coup d’œil rapide. Dans
        une étude menée auprès de parents d’enfants jusqu’à 5 ans, un rapide coup d’œil au téléphone ne changeait rien
        au fait qu’un parent réponde ou non à son enfant <Cite id="vanden-abeele-2020" />. Ce qu’elle vise, c’est le
        long moment où l’on est absorbé. Voici ce que montrent les études, et avec quel degré de certitude.
      </p>

      <h2>Ce que montrent les expériences</h2>
      <p>
        Dans une expérience, les chercheurs changent une seule chose exprès et observent ce qui suit. Cela leur permet
        d’en dire davantage sur la cause.
      </p>
      <p>
        Le grand classique, c’est l’expérience du visage impassible (still-face). Des mères de bébés de 1 à 4 mois
        gardaient un visage figé, sans réaction. En quelques minutes, les bébés devenaient méfiants et se repliaient{" "}
        <Cite id="tronick-1978" />. Les bébés remarquent quand l’échange s’arrête.
      </p>
      <p>
        Une version plus récente a utilisé un téléphone. Quand les mères se tournaient vers leur téléphone au milieu
        d’une tâche de visage impassible, les bébés de 7 à 24 mois s’agitaient <Cite id="myruski-2018" />.
      </p>
      <p>
        Les tout-petits essaient de vous récupérer. Des mères d’enfants de 20 à 22 mois interrompaient le jeu deux
        minutes pour remplir un questionnaire, sur téléphone ou sur papier. Les deux groupes devenaient moins réactifs,
        et leurs tout-petits sollicitaient davantage leur attention <Cite id="konrad-2021" />. Le papier faisait le même
        effet que le téléphone. C’est la pause dans l’attention qui comptait, pas l’écran.
      </p>
      <p>
        Les interruptions peuvent aussi coûter en apprentissage. Des mères ont appris deux nouveaux mots à leur enfant
        de 2 ans. Les enfants ont appris le mot enseigné sans interruption, mais pas celui coupé par un appel
        téléphonique <Cite id="reed-2017" />.
      </p>

      <h2>Ce que les études du quotidien ne font que relier</h2>
      <p>
        D’autres études observent les familles ou interrogent les parents sur leurs journées. Elles peuvent trouver
        des choses qui vont ensemble. Elles ne peuvent pas dire laquelle a causé l’autre.
      </p>
      <ul>
        <li>
          Dans l’étude du visage impassible avec téléphone, les bébés dont la mère utilisait davantage ses écrans à la
          maison récupéraient moins bien <Cite id="myruski-2018" />. Cette partie-là est un lien.
        </li>
        <li>
          Les parents qui signalaient plus d’interruptions par le téléphone pendant les moments en famille signalaient
          aussi plus de problèmes de comportement chez leur enfant <Cite id="mcdaniel-radesky-2018" />.
        </li>
        <li>
          Quand des familles avec un enfant de 0 à 5 ans ont été suivies pendant six mois, le lien allait dans les deux
          sens. Un comportement plus difficile de l’enfant prédisait plus d’interférence de la technologie par le biais
          du stress parental, et cette interférence prédisait souvent plus de comportements d’opposition par la suite{" "}
          <Cite id="mcdaniel-radesky-2018b" />.
        </li>
      </ul>
      <p>
        Un parent stressé qui attrape son téléphone n’est donc pas le méchant de l’histoire. Dans cette étude, le
        stress et l’usage du téléphone allaient de pair.
      </p>

      <h2>Pourquoi un coup d’œil n’est pas le problème</h2>
      <p>
        L’étude des aires de jeux a montré qu’un rapide coup d’œil ne changeait rien, alors qu’une absorption profonde
        dans d’autres tâches avait à peu près le même coût que le téléphone <Cite id="vanden-abeele-2020" />. Le
        téléphone n’est qu’une des nombreuses choses qui peuvent vous accaparer.
      </p>
      <p>
        Les pauses font aussi partie du jeu. Le guide de Harvard sur le « servir et renvoyer » (serve and return) pour
        les bébés comprend le chacun son tour, l’attente, et l’entraînement aux fins et aux débuts, avec le coucou-caché
        comme exemple <Cite id="serve-return" />. Une pause suivie du retour de votre visage, c’est exactement ça, le
        coucou-caché.
      </p>

      <h2>Ce qui aide dès ce soir</h2>
      <p>
        La bonne nouvelle existe aussi. Quand des parents de bébés de 6 à 10 mois ont été accompagnés vers des réponses
        plus attentives, l’attention de leurs bébés et leur capacité à résoudre seuls des problèmes se sont améliorées{" "}
        <Cite id="landry-2006" />. Quand des parents d’enfants de 6 à 21 mois ont été accompagnés pour suivre
        l’initiative de l’enfant, lui répondre et montrer leur joie, leurs enfants avaient une meilleure flexibilité
        mentale à 4 ans <Cite id="lind-2017" />.
      </p>
      <p>
        L’Académie américaine de pédiatrie conseille de garder sans écran les moments de jeu entre parent et enfant,
        pour les parents comme pour les enfants, et suggère d’activer le mode Ne pas déranger pendant ces moments{" "}
        <Cite id="aap-media-2016" />. Un seul jeu court suffit pour commencer :
      </p>
      <ul>
        <li>
          <GameLink id="babble-back" /> : répondez à chaque son de votre bébé comme si c’était une phrase, puis attendez
          son tour.
        </li>
        <li>
          <GameLink id="follow-their-gaze" /> : regardez ce que regarde votre bébé, et nommez-le en quelques mots doux.
        </li>
        <li>
          <GameLink id="hands-peekaboo" /> : allongez-vous avec votre bébé sur la poitrine et cachez-vous derrière vos
          mains le temps de compter lentement jusqu’à trois.
        </li>
        <li>
          <GameLink id="copy-cat-faces" /> : imitez la tête ou le son de votre bébé juste après lui.
        </li>
      </ul>
      <p>
        Pour une soirée grognon, <GameLink id="baby-mind-reader" /> vous invite à dire à voix haute ce que votre bébé
        semble vouloir, puis à marquer une pause pour sa réponse. <GameLink id="house-sounds" /> laisse la bouilloire et
        la porte faire le travail. Vous en trouverez d’autres dans les{" "}
        <Link href="/games/age/babies">jeux pour bébé</Link>, et le guide{" "}
        <Link href="/guides/phone-down-with-your-kid">Poser le téléphone avec votre enfant</Link> donne des étapes pour
        le téléphone lui-même.
      </p>
      <p>Si le développement de votre bébé vous inquiète, parlez-en à votre pédiatre.</p>
    </>
  ),
};
