import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../phone-down-with-your-kid";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Poser le téléphone avec votre enfant : le guide des parents qui scrollent",
  description:
    "Ce que veut dire technoférence, ce que les études ont trouvé quand les parents prennent leur téléphone devant les enfants, et des étapes pour le laisser de côté le soir.",
  body: (
    <>
      <p>
        J’ai une fille. Je travaille toute la journée, je rentre, et je prends mon téléphone. J’ai essayé les
        bloqueurs. J’ai supprimé mes réseaux sociaux. L’habitude est restée.
      </p>
      <p>
        Si cela ressemble à vos soirées, ce guide est pour vous. Il présente les mots que les chercheurs emploient pour
        en parler, ce que leurs études ont trouvé, et pourquoi ce geste est une habitude et non un défaut chez vous.
        Ensuite, il vous donne des étapes à essayer dès ce soir.
      </p>

      <h2>Deux mots pour la même soirée</h2>
      <p>
        La <strong>technoférence</strong> est le nom que les chercheurs ont donné aux interruptions quotidiennes que
        les écrans introduisent dans le temps passé ensemble. Dans l’étude qui l’a nommée, la plupart des femmes
        disaient que les écrans interrompaient souvent leurs moments avec leur partenaire, et celles qui en signalaient
        le plus signalaient aussi plus de conflits autour de la technologie et moins de satisfaction dans leur couple{" "}
        <Cite id="mcdaniel-coyne-2016" />. Le même mot sert aujourd’hui pour les téléphones qui interrompent le temps
        en famille avec de jeunes enfants <Cite id="mcdaniel-radesky-2018" />.
      </p>
      <p>
        Le <strong>phubbing</strong> associe les mots anglais « phone » (téléphone) et « snubbing » (snober). Il désigne
        le fait de snober quelqu’un en regardant son téléphone au lieu de lui parler. Une étude a montré que les
        personnes qui phubbaient le plus, et qui étaient le plus phubbées, le trouvaient plus normal{" "}
        <Cite id="chotpitayasunondh-douglas-2016" />. C’est peut-être en partie pour cela qu’on le remarque si peu à la
        maison.
      </p>

      <h2>Ce que montrent les expériences du visage impassible</h2>
      <p>
        L’expérience la plus connue dans ce domaine est plus ancienne que le smartphone. Des chercheurs ont demandé à
        des mères de bébés de 1 à 4 mois de garder un visage figé, sans réaction. En quelques minutes, les bébés
        devenaient méfiants et se repliaient <Cite id="tronick-1978" />.
      </p>
      <p>
        Une version plus récente a utilisé un téléphone. Quand les mères se tournaient vers leur téléphone au milieu
        d’une tâche de visage impassible (still-face), les bébés de 7 à 24 mois s’agitaient <Cite id="myruski-2018" />.
        Dans une étude similaire, des mères d’enfants de 20 à 22 mois interrompaient le jeu deux minutes pour remplir
        un questionnaire, sur smartphone ou sur papier. Les deux groupes devenaient moins réactifs, et leurs
        tout-petits sollicitaient davantage leur attention <Cite id="konrad-2021" />. Le téléphone n’est qu’un type
        d’interruption. Le papier faisait la même chose.
      </p>
      <p>
        Les interruptions peuvent aussi coûter en apprentissage. Des mères ont appris deux nouveaux mots à leur enfant
        de 2 ans. Les enfants ont appris le mot enseigné sans interruption, mais pas celui coupé par un appel
        téléphonique, alors que les deux mots avaient été dits aussi souvent <Cite id="reed-2017" />.
      </p>

      <h2>Ce qu’ont trouvé les études du quotidien</h2>
      <p>
        Hors du laboratoire, les chercheurs observent les familles ou interrogent les parents sur leurs journées. Ces
        études montrent des liens, pas des causes.
      </p>
      <ul>
        <li>
          Dans des fast-foods, la plupart des 55 adultes qui mangeaient avec de jeunes enfants ont utilisé un téléphone
          pendant le repas. Les plus absorbés répondaient souvent à leur enfant avec retard ou durement{" "}
          <Cite id="radesky-2014" />.
        </li>
        <li>
          Dans des salles d’attente et des aires de jeux, les chances qu’un parent réponde à une sollicitation de son
          enfant étaient cinq fois plus faibles quand il était sur son téléphone. Un rapide coup d’œil ne changeait
          rien, et une absorption profonde dans d’autres tâches avait à peu près le même coût{" "}
          <Cite id="vanden-abeele-2020" />.
        </li>
        <li>
          Les parents qui signalaient plus d’interruptions par le téléphone pendant les moments en famille signalaient
          aussi plus de problèmes de comportement chez leur enfant <Cite id="mcdaniel-radesky-2018" />.
        </li>
        <li>
          Dans une tâche filmée en laboratoire avec 225 mères et leur enfant de 6 ans, 23 % des mères ont utilisé un
          appareil mobile sans qu’on le leur demande. Celles qui l’ont fait ont eu moins d’interactions avec leur
          enfant, surtout non verbales <Cite id="radesky-2015" />.
        </li>
      </ul>
      <p>
        L’Académie américaine de pédiatrie lit ces études de la même façon : un usage intensif des appareils mobiles par
        les parents est associé à moins d’interactions verbales et non verbales entre parents et enfants{" "}
        <Cite id="aap-media-2016" />. « Associé » est le mot prudent. Ces études ne peuvent pas dire ce qui est venu en
        premier.
      </p>
      <p>
        Une expérience s’est intéressée au côté du parent. Dans un musée des sciences, les parents à qui l’on avait
        demandé d’utiliser beaucoup leur téléphone se sentaient plus distraits et moins proches de leurs enfants que
        ceux à qui l’on avait demandé de l’utiliser peu <Cite id="kushlev-dunn-2019" />. Le téléphone vous prend aussi
        quelque chose.
      </p>

      <h2>Une habitude, pas un défaut</h2>
      <p>
        Rien de tout cela ne fait de vous un mauvais parent. Des chercheurs qui ont étudié des utilisateurs de
        smartphones ont mis au jour une « habitude de vérification » : de brefs coups d’œil répétés à des contenus
        rapides d’accès. Les utilisateurs la vivaient plus comme une gêne que comme une addiction{" "}
        <Cite id="oulasvirta-2012" />.
      </p>
      <p>
        Les habitudes tournent pendant que votre esprit est ailleurs. Dans des études par journal de bord, les
        personnes qui faisaient ce qu’elles faisaient presque chaque jour au même endroit avaient tendance à penser à
        autre chose <Cite id="wood-2002" />. Il est aussi difficile de voir sa propre habitude. De jeunes adultes dont
        le téléphone enregistrait l’usage le prenaient en main environ 85 fois par jour et s’en servaient environ cinq
        heures, à peu près deux fois plus qu’ils ne le pensaient <Cite id="andrews-2015" />.
      </p>
      <p>
        Le stress y est pour quelque chose. Dans une étude de six mois auprès de couples avec un enfant de 0 à 5 ans, un
        comportement plus difficile de l’enfant prédisait plus d’interférence de la technologie par le biais du stress
        parental, et cette interférence prédisait souvent plus de comportements d’opposition par la suite{" "}
        <Cite id="mcdaniel-radesky-2018b" />. Les soirées difficiles et le téléphone allaient de pair, dans les deux
        sens.
      </p>
      <p>
        Supprimer mes apps n’a pas supprimé le geste. Les étapes ci-dessous ne demandent donc pas plus de volonté. Elles
        changent le cadre autour de l’habitude et donnent à ce geste un autre endroit où aller.
      </p>

      <h2>Choisir un créneau sans téléphone</h2>
      <p>
        L’Académie américaine de pédiatrie conseille de garder sans écran les chambres, les repas et les moments de jeu
        entre parent et enfant, pour les parents comme pour les enfants, et suggère d’activer le mode Ne pas déranger
        pendant ces moments <Cite id="aap-media-2016" />.
      </p>
      <p>
        Commencez par un créneau, pas par toute la soirée. Gardez-le à la même heure et au même endroit chaque jour.
        Dans une étude sur les nouvelles habitudes, des personnes répétaient un comportement chaque jour au même
        endroit. Il leur a fallu de 18 à 254 jours pour atteindre leur pic d’automaticité, et manquer un jour ne
        changeait pas grand-chose <Cite id="lally-2010" />.
      </p>
      <ul>
        <li>Les 15 premières minutes après avoir passé la porte.</li>
        <li>Le dîner, de la première à la dernière bouchée.</li>
        <li>Du bain au lit.</li>
      </ul>
      <p>Choisissez-en un, puis organisez-le pour qu’il tourne sans décision à prendre chaque soir :</p>
      <ul>
        <li>
          <strong>Associez-le à un signal.</strong> La porte d’entrée, la première assiette sur la table, le robinet du
          bain. Le signal, c’est le moment où le téléphone se pose.
        </li>
        <li>
          <strong>Dites-le à voix haute.</strong> Dites-le à votre partenaire ou à votre enfant, pour que quelqu’un
          d’autre connaisse aussi la règle.
        </li>
        <li>
          <strong>Nommez les exceptions dès maintenant.</strong> Un appel de la baby-sitter ou une urgence au travail
          peut passer. Tout le reste attend la fin du créneau.
        </li>
        <li>
          <strong>Faites court au début.</strong> Quinze minutes tenues valent mieux qu’une heure abandonnée. Allongez
          le créneau une fois que le court vous semble normal.
        </li>
      </ul>

      <h2>Mettre le téléphone hors de portée</h2>
      <p>
        Déplacez le téléphone, pas seulement votre attention. Dans une expérience, des personnes qui partageaient un
        repas au restaurant avec des amis ou de la famille devaient soit garder leur téléphone sur la table, soit le
        ranger. Avec les téléphones sur la table, elles se sentaient plus distraites et appréciaient moins le repas{" "}
        <Cite id="dwyer-2018" />.
      </p>
      <p>
        Les vibrations ont aussi un coût. Les seules notifications, sans que personne ne touche le téléphone,
        perturbaient une tâche d’attention presque autant que prendre un appel ou écrire un message{" "}
        <Cite id="stothart-2015" />.
      </p>
      <ul>
        <li>Pendant votre créneau, rechargez le téléphone dans une autre pièce, écran vers le bas, en silencieux.</li>
        <li>Activez Ne pas déranger avant de rentrer, pour que la première vibration n’arrive jamais.</li>
        <li>Si vous devez rester joignable, laissez passer les appels de quelques personnes et mettez le reste en silencieux.</li>
      </ul>
      <p>
        Inutile de couper les notifications pour de bon. Dans un essai, des personnes ont été réparties au hasard pour
        recevoir leurs notifications comme d’habitude, groupées trois fois par jour, ou jamais. Le groupe aux
        notifications groupées se sentait plus attentif, de meilleure humeur, plus maître de son téléphone et moins
        stressé, et le groupe sans notifications se sentait plus anxieux <Cite id="fitz-2019" />. Votre iPhone peut les
        regrouper pour vous avec le{" "}
        <a href="https://support.apple.com/guide/iphone/change-notification-settings-iph7c3d96bab/ios">
          Résumé programmé
        </a>
        . Programmez un résumé pour quand votre enfant dort.
      </p>

      <h2>Donner un autre endroit où aller à ce geste</h2>
      <p>
        L’envie reviendra quand même. Ayez quelque chose de prêt pour vos mains et vos yeux. L’idée du « servir et
        renvoyer » (serve and return) de Harvard est un bon réflexe avec les bébés et les tout-petits : remarquez ce que
        regarde votre enfant, nommez-le, jouez chacun votre tour et attendez <Cite id="serve-return" />.
      </p>
      <p>
        Ce type d’attention porte ses fruits dans les essais. Quand des parents de bébés de 6 à 10 mois ont été
        accompagnés vers des réponses plus attentives, l’attention de leurs bébés et leur capacité à résoudre seuls des
        problèmes se sont améliorées <Cite id="landry-2006" />. Quand des parents d’enfants de 6 à 21 mois ont été
        accompagnés pour suivre l’initiative de l’enfant, lui répondre et montrer leur joie, leurs enfants avaient une
        meilleure flexibilité mentale à 4 ans <Cite id="lind-2017" />.
      </p>
      <p>
        Les jeux rendent cela plus facile un soir de fatigue. Chacun dure de 5 à 12 minutes et ne demande presque pas
        d’énergie :
      </p>
      <ul>
        <li>
          Avec un bébé, essayez <GameLink id="babble-back" /> : répondez à chaque son comme si c’était une vraie
          phrase, puis laissez un long silence pour qu’il réponde à son tour. Ou <GameLink id="follow-their-gaze" />,
          où vous regardez ce qu’il regarde et le nommez.
        </li>
        <li>
          Avec un tout-petit, essayez <GameLink id="animal-sound-swap" />, où vous échangez les rôles pour nommer des
          animaux et faire leurs cris, ou <GameLink id="lumpy-blanket-hide" />, où vous cherchez à voix haute votre
          enfant caché sous une couverture.
        </li>
        <li>
          Avec un enfant de maternelle, essayez <GameLink id="pretend-phone" />, où votre main devient le téléphone et
          où Mamie ou un loup affamé appelle, ou <GameLink id="story-stones" />, une histoire racontée trois mots à la
          fois.
        </li>
      </ul>
      <p>
        Choisissez le jeu avant le début du créneau. Quand le signal arrive, vous savez déjà ce que vos mains vont
        faire. Si vous avez plus d’énergie que prévu, piochez dans les{" "}
        <Link href="/games/energy/medium">jeux faciles des soirs ordinaires</Link>. Un soir sans ressort, vous en
        trouverez d’autres dans les <Link href="/games/energy/low">jeux calmes quand on est épuisé</Link>, dont beaucoup
        se jouent allongé.
      </p>

      <h2>Laisser l’iPhone tenir la ligne</h2>
      <p>
        Vous n’avez pas à garder le créneau à la main chaque soir. Votre iPhone peut{" "}
        <a href="https://support.apple.com/guide/iphone/set-up-a-focus-iphd6288a67f/ios">
          couper les notifications avec un mode Concentration
        </a>{" "}
        et l’activer à heure fixe. Temps d’écran peut{" "}
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          programmer les moments où les apps sont disponibles
        </a>
        . Le guide{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">Temps d’écran pour les soirées en famille</Link>{" "}
        détaille les réglages pas à pas.
      </p>
      <p>
        Avant de changer quoi que ce soit, regardez votre propre chiffre.{" "}
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Le rapport de Temps d’écran
        </a>{" "}
        montre combien de fois vous avez pris votre téléphone chaque jour. Regardez-le de nouveau après deux semaines de
        créneau.
      </p>
      <p>
        Oyno utilise ce même Temps d’écran pour mettre en pause les apps de votre choix pendant le Temps en famille, et
        une app en pause affiche un bouton qui mène à un jeu.
      </p>

      <h2>Quand ça dérape</h2>
      <p>
        Certains soirs, vous scrollerez pendant tout le dîner. Ce n’est pas grave. Dans l’étude sur les habitudes,
        manquer un jour ne changeait pas grand-chose à l’habitude <Cite id="lally-2010" />. Reprenez au créneau de
        demain.
      </p>
      <p>
        Votre enfant n’a pas non plus besoin d’un parent qui ne regarde jamais son téléphone. Dans l’étude des aires de
        jeux, un rapide coup d’œil ne changeait rien au fait qu’un parent réponde ou non à son enfant{" "}
        <Cite id="vanden-abeele-2020" />. Visez le long scroll où l’on est absorbé, et laissez filer le rapide coup
        d’œil à l’heure.
      </p>
    </>
  ),
};
