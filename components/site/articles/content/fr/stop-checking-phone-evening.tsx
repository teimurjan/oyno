import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../stop-checking-phone-evening";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Comment arrêter de regarder son téléphone le soir",
  description:
    "Pourquoi le coup d’œil du soir est une habitude, et des étapes pour ce soir : moins de vibrations, le téléphone dans une autre pièce, un créneau fixe et un jeu à la place.",
  body: (
    <>
      <p>
        Je travaille toute la journée, je rentre, et je prends mon téléphone. J’ai essayé les bloqueurs, j’ai supprimé
        mes réseaux sociaux, et l’habitude est restée. Si vos soirées ressemblent aux miennes, la plupart des étapes
        ci-dessous s’appuient sur une étude. Aucune ne demande plus de volonté.
      </p>

      <h2>Pourquoi vous le regardez sans cesse</h2>
      <p>
        Des chercheurs qui ont étudié des utilisateurs de smartphones ont mis au jour une « habitude de vérification » :
        de brefs coups d’œil répétés à des contenus rapides d’accès. Les utilisateurs la vivaient plus comme une gêne
        que comme une addiction <Cite id="oulasvirta-2012" />. Si le coup d’œil du soir vous agace plus qu’il ne vous
        fait plaisir, vous êtes en bonne compagnie.
      </p>
      <p>
        Les habitudes tournent pendant que votre esprit est ailleurs. Dans des études par journal de bord, les
        personnes qui faisaient ce qu’elles faisaient presque chaque jour au même endroit avaient tendance à penser à
        autre chose <Cite id="wood-2002" />. Le canapé après le travail, tous les jours, est exactement ce genre
        d’endroit.
      </p>
      <p>
        Vous le regardez sans doute plus que vous ne le croyez. De jeunes adultes dont le téléphone enregistrait l’usage
        le prenaient en main environ 85 fois par jour et s’en servaient environ cinq heures, à peu près deux fois plus
        qu’ils ne le pensaient <Cite id="andrews-2015" />. Votre iPhone tient le même compte.{" "}
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Le rapport de Temps d’écran
        </a>{" "}
        montre combien de fois vous l’avez pris en main chaque jour. Regardez-le une fois, sans vous juger, pour savoir
        d’où vous partez.
      </p>

      <h2>Réduire les vibrations, sans les couper</h2>
      <p>
        Chaque vibration est une invitation. Les seules notifications, sans que personne ne touche le téléphone,
        perturbaient une tâche d’attention presque autant que prendre un appel ou écrire un message{" "}
        <Cite id="stothart-2015" />.
      </p>
      <p>
        Tout couper n’est pas non plus la solution. Dans un essai, des personnes ont été réparties au hasard pour
        recevoir leurs notifications comme d’habitude, groupées trois fois par jour, ou jamais. Le groupe aux
        notifications groupées se sentait plus attentif, de meilleure humeur, plus maître de son téléphone et moins
        stressé. Le groupe sans notifications se sentait plus anxieux <Cite id="fitz-2019" />.
      </p>
      <ul>
        <li>
          Activez le{" "}
          <a href="https://support.apple.com/guide/iphone/change-notification-settings-iph7c3d96bab/ios">
            Résumé programmé
          </a>{" "}
          et placez-y vos apps les plus bavardes. Programmez un résumé pour après le coucher.
        </li>
        <li>
          Créez un mode{" "}
          <a href="https://support.apple.com/guide/iphone/set-up-a-focus-iphd6288a67f/ios">Concentration</a> pour le
          soir, qui laisse passer les appels de quelques personnes et met le reste en attente.
        </li>
      </ul>

      <h2>Déplacer le téléphone</h2>
      <p>
        Dans une expérience, des personnes qui partageaient un repas au restaurant avec des amis ou de la famille
        devaient soit garder leur téléphone sur la table, soit le ranger. Avec les téléphones sur la table, elles se
        sentaient plus distraites et appréciaient moins le repas <Cite id="dwyer-2018" />.
      </p>
      <p>
        Donnez au téléphone une place pour la soirée qui ne soit ni votre poche ni l’accoudoir du canapé. Un chargeur
        dans l’entrée ou dans la cuisine fait l’affaire. Posez-le là en rentrant, écran contre la table et en silencieux,
        et allez jusqu’à lui si vous en avez besoin.
      </p>

      <h2>Même heure, même endroit</h2>
      <p>
        Les nouvelles habitudes se forment par la répétition dans un cadre stable. Des volontaires qui répétaient un
        nouveau comportement quotidien au même endroit ont mis de 18 à 254 jours à atteindre leur pic d’automaticité, et
        manquer un jour ne changeait pas grand-chose <Cite id="lally-2010" />. Choisissez donc un créneau et gardez-le
        fixe. Ne vous attendez pas à ce que ce soit facile la première semaine, et n’abandonnez pas après une mauvaise
        soirée.
      </p>
      <p>
        L’Académie américaine de pédiatrie conseille de garder sans écran les repas et les moments de jeu entre parent et
        enfant, pour les parents comme pour les enfants, et suggère d’activer le mode Ne pas déranger pendant ces moments{" "}
        <Cite id="aap-media-2016" />. Le dîner est un bon premier créneau. Les 15 premières minutes après votre retour
        aussi.
      </p>
      <p>
        Si vous voulez que le téléphone tienne la ligne à votre place, Temps d’écran peut{" "}
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          programmer les moments où les apps sont disponibles
        </a>
        . Le guide{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">Temps d’écran pour les soirées en famille</Link> vous
        explique comment faire.
      </p>

      <h2>Avoir un jeu prêt</h2>
      <p>
        L’envie reviendra quand même. Donnez-lui un endroit où aller. Dans une expérience menée dans un musée des
        sciences, les parents à qui l’on avait demandé d’utiliser beaucoup leur téléphone se sentaient plus distraits et
        moins proches de leurs enfants que ceux à qui l’on avait demandé de l’utiliser peu <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>Choisissez un jeu avant le début de la soirée, pour ne pas avoir à réfléchir le moment venu :</p>
      <ul>
        <li>
          Avec un bébé, <GameLink id="sock-puppet-chat" /> demande juste une chaussette orpheline et une petite voix
          aiguë.
        </li>
        <li>
          Avec un tout-petit, <GameLink id="what-can-you-hear" /> vous fait rester allongés tous les deux sans bouger et
          nommer les bruits de la maison. <GameLink id="give-and-take" />, c’est un jouet qui passe de main en main.
        </li>
        <li>
          Avec un enfant de maternelle, <GameLink id="sleepy-lion" /> vous laisse ronfler sur le canapé pendant que
          votre enfant s’approche en douce. <GameLink id="rewind-the-day" /> remonte la journée à l’envers, de
          maintenant jusqu’au petit-déjeuner, et <GameLink id="story-stones" /> construit une histoire trois mots à la
          fois.
        </li>
      </ul>
      <p>
        Vous en trouverez d’autres dans les <Link href="/games/energy/low">jeux calmes quand on est épuisé</Link>, pour
        les soirs où vous tenez à peine assis.
      </p>
    </>
  ),
};
