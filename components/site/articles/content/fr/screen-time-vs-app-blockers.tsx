import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../screen-time-vs-app-blockers";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Temps d’écran, bloqueurs d’apps et Oyno : ce que chacun fait pour les parents",
  description:
    "Une comparaison honnête de Temps d’écran d’Apple, des apps de blocage et d’Oyno pour les parents qui veulent récupérer leur soirée, avec ce que chacun ne fait pas.",
  body: (
    <>
      <p>
        Vous voulez sortir le téléphone de l’heure que vous passez avec votre enfant. Sur iPhone, il existe trois types
        d’outils pour ça : les réglages Temps d’écran intégrés par Apple, les apps conçues pour bloquer d’autres apps, et
        Oyno, que je développe. Voici un regard honnête sur chacun, y compris les cas où Oyno n’est pas le bon choix.
      </p>
      <p>
        L’objectif mérite un outil. L’Académie américaine de pédiatrie recommande de garder sans écran les repas et les
        moments de jeu entre parent et enfant, pour les parents comme pour les enfants, et précise que les parents
        peuvent activer une option « Ne pas déranger » sur leur téléphone pendant ces moments{" "}
        <Cite id="aap-media-2016" />.
      </p>

      <h2>Temps d’écran d’Apple</h2>
      <p>
        Temps d’écran est déjà sur votre iPhone et ne coûte rien. Sur iOS 27, vous réglez un{" "}
        <strong>planning Temps d’écran</strong> avec des créneaux horaires, comme un créneau le soir, et des{" "}
        <strong>limites de temps</strong> qui plafonnent la durée d’utilisation de catégories d’apps, comme les réseaux
        sociaux ou les jeux. Une liste <strong>Toujours autorisé</strong> garde ouverts les contacts et les apps de votre
        choix, quel que soit le planning (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Assistance Apple : définir des plannings et des limites de temps
        </a>
        ). Un code Temps d’écran à quatre chiffres vous empêche de modifier ces réglages sans lui (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Assistance Apple : code Temps d’écran
        </a>
        ).
      </p>
      <p>
        Ce qu’il fait bien : il est gratuit, il est intégré, et il peut aussi couvrir votre iPad et votre Mac si vous
        activez Partager entre les appareils. Apple précise aussi qu’une limite de temps s’applique au site web d’une app
        quand l’app en déclare un.
      </p>
      <p>
        Ce qu’il ne fait pas : il dit non, et c’est tout. Quand le créneau commence, rien ne vous dit quoi faire de ce
        temps. Et si vous avez choisi le code vous-même, vous le connaissez. Notre{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">guide pas à pas de Temps d’écran</Link> couvre la
        configuration et le problème du code.
      </p>

      <h2>Les apps de blocage et de concentration</h2>
      <p>
        L’App Store regorge d’apps conçues pour bloquer ou limiter d’autres apps. Elles diffèrent beaucoup les unes des
        autres, alors cette partie vous donne des questions à poser, pas des verdicts. Avant d’en payer une, vérifiez :
      </p>
      <ul>
        <li>Est-elle faite pour votre propre téléphone, ou est-ce un contrôle parental pour l’appareil d’un enfant ?</li>
        <li>Pouvez-vous choisir les jours et les heures, ou seulement lancer une session à la main ?</li>
        <li>Que se passe-t-il quand vous ouvrez une app bloquée, et est-ce facile de passer outre ?</li>
        <li>Bloque-t-elle les sites web, les apps, ou les deux ?</li>
        <li>Vous donne-t-elle quelque chose à faire du temps qu’elle libère ?</li>
      </ul>
      <p>
        J’ai moi-même essayé les bloqueurs, et j’ai supprimé mes réseaux sociaux. L’habitude est restée. Ce n’est un
        verdict sur aucune app. C’est la raison pour laquelle la dernière question de cette liste compte pour moi.
      </p>

      <h2>Oyno</h2>
      <p>
        Oyno est une app iOS pour les parents d’enfants de 0 à 5 ans. Elle utilise Temps d’écran d’Apple sur votre
        propre iPhone. Vous réglez le Temps en famille : les jours, les heures de début et de fin, et autant de plages
        que nécessaire. Pendant le Temps en famille, les apps que vous avez choisies sont en pause. Vous choisissez
        quelles apps sont toujours autorisées et lesquelles ne le sont jamais, et il existe une pause « Pas maintenant »
        de 20 minutes.
      </p>
      <p>
        Une app en pause affiche l’écran d’Oyno. Son bouton « Ouvrir Oyno » mène à un jeu. Il y en a 500, dans trois
        tranches d’âge et pour une énergie faible, moyenne ou pleine, chacun de 5 à 15 minutes, et chacun appuyé sur
        une étude et un guide. Une plage peut débloquer vos apps pendant un moment après une partie jouée avec votre
        enfant. Chaque partie fait grandir la petite planète de votre famille. Oyno ne demande ni le nom ni la photo de
        votre enfant.
      </p>
      <p>
        L’idée, c’est que le blocage et le jeu arrivent ensemble. Dans une expérience, des parents dans un musée des
        sciences à qui l’on avait demandé d’utiliser beaucoup leur téléphone se sentaient plus distraits et moins
        proches de leurs enfants que ceux à qui l’on avait demandé de l’utiliser peu <Cite id="kushlev-dunn-2019" />.
        La réponse d’Oyno, c’est de mettre quelque chose dans l’espace que le téléphone laisse.
      </p>

      <h2>Ce qu’Oyno ne fait pas</h2>
      <ul>
        <li>
          <strong>Il est réservé à iOS.</strong> Il n’existe pas de version Android.
        </li>
        <li>
          <strong>Il est fait pour votre téléphone, pas celui de votre enfant.</strong> Ce n’est pas un contrôle
          parental pour l’appareil d’un enfant. Pour ça, Apple a son propre guide,{" "}
          <a href="https://support.apple.com/guide/child-safety/welcome-r1jy0rk9vfz8/web">
            Appareils Apple pour les enfants et les familles
          </a>
          .
        </li>
        <li>
          <strong>Il ne bloque pas les sites web.</strong> Il met des apps en pause. Si le problème est un site web,
          utilisez directement Temps d’écran.
        </li>
        <li>
          <strong>Ce n’est pas un cadenas.</strong> La pause « Pas maintenant » ouvre vos apps pendant 20 minutes.
          C’est un coup de pouce que vous vous donnez à vous-même.
        </li>
        <li>
          <strong>Il n’est pas gratuit.</strong> C’est un abonnement mensuel ou annuel, avec un essai gratuit de 3 jours
          sur l’App Store. Temps d’écran ne coûte rien.
        </li>
      </ul>

      <h2>Comment choisir</h2>
      <p>
        Commencez par Temps d’écran. Il est gratuit, et une semaine d’utilisation vous en apprendra beaucoup. Si le
        créneau du soir tient et que vous êtes satisfait, arrêtez-vous là.
      </p>
      <p>
        Regardez du côté d’une app de blocage si votre problème, c’est surtout la journée de travail, les sites web ou
        un téléphone Android, puisqu’Oyno ne couvre pas ces cas. Posez les questions ci-dessus, et vérifiez que l’app
        choisie couvre les vôtres.
      </p>
      <p>
        Regardez du côté d’Oyno si votre enfant a moins de 6 ans, si l’heure que vous voulez récupérer est celle que
        vous passez avec lui, et si le blocage seul n’a pas tenu parce que le vide qu’il laissait a été comblé par
        autre chose sur le téléphone.
      </p>
      <p>
        Quel que soit votre choix, ayez un jeu prêt pour le premier soir. Avec un bébé, essayez{" "}
        <GameLink id="babble-back" /> : attendez le moindre son et répondez-y comme si c’était une vraie phrase. Avec
        un tout-petit, essayez <GameLink id="pocket-kiss-hand" />, où un bisou se cache dans l’un de ses poings. Avec un
        enfant de maternelle, essayez <GameLink id="countdown-stop" /> ou <GameLink id="sleepy-lion" />, qui se jouent
        allongé. Vous en trouverez d’autres dans les{" "}
        <Link href="/games/energy/low">jeux calmes quand on est épuisé</Link>.
      </p>
    </>
  ),
};
