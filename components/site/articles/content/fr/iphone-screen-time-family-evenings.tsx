import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../iphone-screen-time-family-evenings";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Comment régler Temps d’écran sur iPhone pour les soirées en famille",
  description:
    "Pas à pas : réglez Temps d’écran sur votre propre iPhone pour que la soirée avec votre enfant reste à vous, avec ce qu’il ne sait pas faire et à quoi jouer à la place.",
  body: (
    <>
      <p>
        Ce guide parle de votre téléphone, pas de celui de votre enfant. Si vous rentrez fatigué et que le téléphone
        remplit l’heure avant le coucher, Temps d’écran sur votre propre iPhone peut mettre une clôture autour de cette
        heure. C’est gratuit, c’est déjà sur votre téléphone, et vous pouvez le régler ce soir.
      </p>
      <p>
        Ça en vaut la peine. Dans une expérience, des parents dans un musée des sciences à qui l’on avait demandé
        d’utiliser beaucoup leur téléphone se sentaient plus distraits et moins proches de leurs enfants que ceux à qui
        l’on avait demandé de l’utiliser peu <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>
        Les étapes ci-dessous suivent les pages d’assistance d’Apple pour iOS 27, la version la plus récente
        documentée par Apple. Si votre iPhone tourne sous iOS 26 ou une version antérieure, les menus portent d’autres
        noms, et une partie vous attend vers la fin.
      </p>

      <h2>Ce qui a changé avec iOS 27</h2>
      <p>
        Les anciens guides parlent de Temps d’arrêt et de Limites d’app. Pour iOS 27, le guide d’Apple décrit plutôt
        deux outils. Les <strong>plannings Temps d’écran</strong> fixent à quels moments de la journée vous pouvez
        utiliser vos apps. Les <strong>limites de temps</strong> fixent combien de temps vous pouvez les utiliser
        chaque jour, par catégorie, comme Divertissement, Jeux ou Réseaux sociaux. L’exemple d’Apple est un planning
        avec des créneaux pour le travail, le dîner et la soirée (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Assistance Apple : définir des plannings et des limites de temps
        </a>
        ).
      </p>
      <p>
        Apple précise que ces fonctions nécessitent iOS 27 ou une version ultérieure sur tous vos appareils Apple. Si
        votre iPad ou votre Mac est encore sur une ancienne version, mettez-le d’abord à jour, sinon les étapes
        ci-dessous risquent de ne pas correspondre à ce que vous voyez.
      </p>

      <h2>Étape 1 : activer Temps d’écran et regarder votre semaine</h2>
      <p>
        Ouvrez l’app Réglages et touchez Temps d’écran. Touchez Gérer Temps d’écran, puis Activer Activité des apps et
        des sites web (
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Assistance Apple : configurer Temps d’écran pour vous-même
        </a>
        ).
      </p>
      <p>
        Si vous l’utilisez depuis un moment, regardez avant de changer quoi que ce soit. Touchez Moyenne quotidienne,
        puis Semaine. Faites défiler jusqu’à Prises en main pour voir combien de fois vous avez pris le téléphone.
        Notez les deux ou trois apps que vous utilisez le plus. Ce sont celles que vous allez clôturer.
      </p>
      <p>
        Le vrai chiffre peut dépasser votre estimation. Dans une étude, de jeunes adultes dont le téléphone enregistrait
        l’usage le prenaient en main environ 85 fois par jour et s’en servaient environ cinq heures, à peu près deux
        fois plus qu’ils ne le pensaient <Cite id="andrews-2015" />.
      </p>
      <p>
        Si vous utilisez aussi un iPad ou un Mac, Apple vous permet de partager ces réglages entre eux. Touchez Gérer
        Temps d’écran, puis activez Partager entre les appareils. Une fois activé, le planning que vous réglez
        ci-dessous s’applique partout, pour que la soirée ne se déplace pas sur l’iPad.
      </p>

      <h2>Étape 2 : fixer des limites pour les apps qui attirent le plus</h2>
      <p>
        Les limites de temps fonctionnent par catégorie. Vous pouvez utiliser les apps d’une catégorie jusqu’à
        atteindre la limite de cette catégorie ou votre total quotidien, selon ce qui arrive en premier.
      </p>
      <ol>
        <li>Ouvrez Réglages, touchez Temps d’écran, puis Limites de temps.</li>
        <li>
          Touchez Gérer les catégories, touchez le bouton d’ajout et choisissez une catégorie, comme Réseaux sociaux ou
          Divertissement.
        </li>
        <li>
          De retour dans Limites de temps, touchez la catégorie et faites glisser le curseur pour régler la durée
          dont vous disposez chaque jour.
        </li>
        <li>
          Pour voir quelles apps se trouvent dans une catégorie, touchez Gérer les catégories, puis la catégorie. Vous
          y voyez aussi votre usage quotidien moyen, et vous pouvez toucher une app pour voir le sien.
        </li>
      </ol>
      <p>
        Commencez par les apps de l’étape 1. Soyez honnête sur celles qui vous mangent la soirée.
      </p>
      <p>
        Un détail compte si vous faites défiler dans un navigateur. Apple indique que si une app déclare un site web
        associé, la limite de temps s’applique aux deux. Limiter une app peut donc aussi limiter son site web.
      </p>

      <h2>Étape 3 : donner à la soirée son propre créneau</h2>
      <p>
        C’est cette partie qui protège l’heure passée avec votre enfant. Vous créez un planning, puis un créneau à
        l’intérieur qui couvre votre soirée en famille.
      </p>
      <ol>
        <li>Ouvrez Réglages, touchez Temps d’écran, touchez Planning Temps d’écran, puis activez Planning.</li>
        <li>Touchez Ajouter un planning, touchez les jours voulus, par exemple du lundi au vendredi, et validez.</li>
        <li>Touchez le créneau. Touchez son nom et donnez-lui un nom simple, comme « Soirée ».</li>
        <li>Touchez les heures de début et de fin et réglez-les sur les heures où vous êtes à la maison avec votre enfant.</li>
        <li>
          Sous le créneau, touchez les catégories de limites de temps que vous voulez garder disponibles à ce
          moment-là. Laissez de côté celles que vous avez réglées à l’étape 2 pour les apps qui attirent le plus.
        </li>
      </ol>
      <p>
        Chaque créneau affiche des icônes pour les catégories qu’il autorise, ce qui vous permet de voir d’un coup
        d’œil quels types d’apps restent ouverts le soir. Si le week-end est différent, ajoutez un second planning pour
        le samedi et le dimanche, avec ses propres horaires.
      </p>
      <p>
        Dans Limites de temps, Apple propose aussi un interrupteur appelé Suivre le planning Temps d’écran. Activez-le
        si vous voulez que vos limites ne s’appliquent qu’à certains moments de votre planning.
      </p>
      <p>
        Choisissez des horaires que vous pouvez tenir, par exemple du dîner au coucher. Cela correspond à ce que
        l’Académie américaine de pédiatrie recommande aux familles : garder sans écran les chambres, les repas et les
        moments de jeu entre parent et enfant, pour les enfants comme pour les parents <Cite id="aap-media-2016" />.
      </p>

      <h2>Étape 4 : choisir ce qui reste autorisé</h2>
      <p>
        Certaines apps ne devraient jamais être clôturées. Votre partenaire doit pouvoir vous joindre. La baby-sitter
        doit pouvoir vous joindre. Vous voudrez peut-être garder Plans, l’appareil photo ou une app de santé.
      </p>
      <ol>
        <li>Ouvrez Réglages, touchez Temps d’écran, puis Toujours autorisé.</li>
        <li>Touchez Ajouter des personnes pour ajouter les contacts que vous pouvez toujours joindre et qui peuvent toujours vous joindre.</li>
        <li>Touchez Ajouter des apps pour ajouter les apps qui restent ouvertes quel que soit le planning.</li>
      </ol>
      <p>
        Apple indique que les apps et les contacts de cette liste restent disponibles quels que soient le planning ou
        les limites que vous avez réglés. Ses propres exemples sont les membres de la famille et l’app Santé, pour les
        urgences. Gardez la liste courte. Chaque app qui y figure est une porte qui reste ouverte.
      </p>

      <h2>Étape 5 : verrouiller avec un code</h2>
      <p>
        Avec un code Temps d’écran, vous devez saisir un code avant de pouvoir modifier les réglages ci-dessus (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Assistance Apple : créer, modifier ou supprimer un code Temps d’écran
        </a>
        ).
      </p>
      <ol>
        <li>
          Ouvrez Réglages, touchez Temps d’écran, touchez Gérer Temps d’écran, puis Verrouiller les réglages de Temps
          d’écran.
        </li>
        <li>Saisissez un code à quatre chiffres, puis saisissez-le à nouveau pour le confirmer.</li>
      </ol>
      <p>
        Maintenant, la partie honnête. Vous choisissez ce code vous-même, donc vous le connaissez. À 20 h, fatigué,
        avec le canapé et le téléphone juste là, un code que vous connaissez est un ralentisseur, pas un mur.
      </p>
      <p>
        C’est pourquoi certains parents demandent à leur partenaire de saisir le code, pour ne pas le connaître. Ça
        aide. Mais Apple propose aussi la récupération du code Temps d’écran, qui vous permet de réinitialiser le code
        avec votre compte Apple si vous l’oubliez. Si vous l’activez, le code de votre partenaire devient une étape de
        plus pour vous, pas un verrou. À vous de choisir ce que vous voulez.
      </p>

      <h2>Sous iOS 26 ou une version antérieure : Temps d’arrêt et Limites d’app</h2>
      <p>
        Si votre iPhone n’est pas encore passé à iOS 27, les mêmes idées portent des noms plus anciens (
        <a href="https://support.apple.com/guide/iphone/set-schedules-with-screen-time-iphb0c7313c9/26/ios/26">
          Assistance Apple : définir des plannings avec Temps d’écran, iOS 26
        </a>
        ).
      </p>
      <ul>
        <li>
          <strong>Temps d’arrêt</strong> correspond au créneau du soir. Dans Réglages, touchez Temps d’écran, puis Temps
          d’arrêt, puis Programmé. Choisissez Tous les jours ou Personnaliser les jours, et réglez les heures de début
          et de fin. Apple envoie un rappel cinq minutes avant le début.
        </li>
        <li>
          <strong>Limites d’app</strong> correspond aux limites de temps. Touchez Limites d’app, puis Ajouter une
          limite, choisissez des catégories ou des apps précises, touchez Suivant et réglez la durée.
        </li>
        <li>
          <strong>Toujours autorisé</strong> fonctionne de la même façon, pour les contacts et les apps.
        </li>
      </ul>
      <p>
        Un piège : Apple indique que, par défaut, ces limites peuvent être ignorées une fois atteintes. Si vous avez un
        code Temps d’écran, vous pouvez activer Bloquer pendant le temps d’arrêt, et les apps ne peuvent alors plus
        être ouvertes pendant le temps d’arrêt. S’il est désactivé, vous ne voyez qu’un rappel et pouvez continuer.
      </p>

      <h2>Ce que Temps d’écran ne fait pas</h2>
      <p>
        Temps d’écran est bon dans un seul rôle. Il dit non. Il ne dit pas quoi faire à la place.
      </p>
      <p>
        Je le sais par mes propres soirées. Je travaille toute la journée, je rentre, et je prends mon téléphone. J’ai
        essayé les bloqueurs. J’ai supprimé mes réseaux sociaux. L’habitude est restée. Une app bloquée laisse un vide
        dans la soirée, et Temps d’écran ne le comble pas.
      </p>
      <p>
        La déclaration de l’AAP sur les jeunes enfants et les écrans dit la même chose par l’autre bout. Elle note
        qu’un usage intensif des appareils mobiles par les parents est associé à moins d’échanges verbaux et non
        verbaux entre parents et enfants. Elle demande aux pédiatres d’aider les familles avec un plan d’usage des
        écrans en famille (Family Media Use Plan), qui prévoit des règles pour chaque enfant et chaque parent, et avec
        des idées de jeux à faire à la place des écrans <Cite id="aap-media-2016" />. Une règle sur le téléphone, c’est
        la moitié d’un plan. L’autre moitié, c’est ce que vous faites de ce temps.
      </p>
      <p>
        Préparez donc les dix minutes suivantes avant le début du créneau. Elles n’ont pas besoin d’être brillantes.
        Elles doivent marcher quand il ne vous reste plus rien. Oyno utilise Temps d’écran pour mettre en pause les
        apps de votre choix pendant le Temps en famille et vous propose un jeu court à faire à la place.
      </p>

      <h2>Votre première soirée</h2>
      <p>
        Voici un plan pour ce soir, pensé pour un parent qui préférerait s’allonger.
      </p>
      <ol>
        <li>Réglez le créneau de l’étape 3 pour qu’il commence dans dix minutes.</li>
        <li>Posez le téléphone sur une étagère hors de portée, écran vers le bas, avec le son activé au cas où on vous appelle.</li>
        <li>Choisissez un jeu dans la liste ci-dessous et jouez-y jusqu’à ce que votre enfant ne sourie plus, pas au-delà.</li>
      </ol>
      <p>
        Pour un bébé, essayez <GameLink id="hands-peekaboo" />. Vous vous allongez avec votre bébé sur la poitrine,
        cachez votre visage derrière vos deux mains et comptez lentement jusqu’à trois avant de dire « Coucou ! ».
      </p>
      <p>
        Pour un tout-petit dès 2 ans, essayez <GameLink id="still-stone-mouse">La pierre</GameLink>. Votre enfant reste
        immobile comme une pierre pendant que votre main s’approche comme une souris, et au moindre tortillement, la
        souris retourne au départ. Ou <GameLink id="touch-the-bear" /> : vous êtes un ours endormi sur le canapé, chaque
        cri vous fait ronfler plus fort, et seule une main posée sur votre patte vous réveille.
      </p>
      <p>
        Pour un enfant de maternelle, essayez <GameLink id="belly-boat" />. Vous vous allongez tous les deux sur le dos
        avec un petit jouet sur chaque ventre et respirez lentement pour que les bateaux montent et descendent.{" "}
        <GameLink id="sleepy-lion" /> et <GameLink id="day-says-night" /> se jouent aussi depuis le canapé.
      </p>
      <p>
        Vous en trouverez d’autres dans les <Link href="/games/energy/low">jeux calmes quand on est épuisé</Link>, et
        vous pouvez filtrer par âge dans les <Link href="/games/age/toddlers">jeux pour enfant de 1 à 3 ans</Link> ou
        les <Link href="/games/age/preschoolers">jeux pour enfant de 3 à 5 ans</Link>. Si vous hésitez encore entre
        Temps d’écran seul et une app en plus, lisez{" "}
        <Link href="/blog/screen-time-vs-app-blockers">Temps d’écran, bloqueurs d’apps et Oyno</Link>.
      </p>
      <p>
        Laissez une semaine à ces réglages avant de les modifier. Si le créneau commence trop tôt, décalez-le. Si une
        app revient sans cesse par Toujours autorisé, retirez-la de la liste.
      </p>
    </>
  ),
};
