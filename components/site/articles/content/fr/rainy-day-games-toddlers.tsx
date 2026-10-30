import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../rainy-day-games-toddlers";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Jeux pour un jour de pluie avec un tout-petit",
  description:
    "Huit jeux d’intérieur qui font bouger un tout-petit coincé à la maison : tunnels de chaises, courses dans le couloir, sol de lave et jeux de statues, avec l’âge minimum de chacun.",
  body: (
    <>
      <p>
        Une journée coincée à l’intérieur avec un tout-petit, c’est long. Ces jeux sont pour les heures où votre enfant
        a encore de l’énergie à dépenser et où sortir n’est pas possible. Ils utilisent le couloir, les coussins du
        canapé et les chaises de la cuisine, et la plupart ont un signal qui arrête la course un instant.
      </p>
      <p>
        Chaque jeu indique l’âge à partir duquel il convient. Certains marchent dès le premier anniversaire, d’autres
        dès 2 ans. Pas besoin de faire les huit dans la journée. Choisissez-en deux, jouez dix minutes à chacun, et
        gardez les autres pour le prochain jour à la maison.
      </p>

      <h2>Construisez un tunnel</h2>
      <p>
        <GameLink id="chair-tunnels" /> marche dès 1 an. Alignez deux ou trois chaises de cuisine pour faire un
        tunnel, avec un coussin au bout comme ligne d’arrivée. Passez d’abord, lentement, pour que votre enfant voie
        le chemin, puis suivez-le à son tour. Après quelques passages, ajoutez un coussin à escalader.
      </p>
      <p>
        La fiche Brain-Building Through Play de Harvard pour les 12 mois à 3 ans cite l’exploration par-dessus des
        coussins posés au sol <Cite id="brain-play" />. Quand votre enfant s’arrête dans le tunnel, demandez « et
        maintenant ? » au lieu de montrer le chemin. Vous lui laissez ainsi le plan. Dans une étude, le soutien des
        parents aux propres tentatives de leur enfant entre 12 et 15 mois a prédit ses fonctions exécutives à 18 et
        26 mois <Cite id="bernier-2010" />. Il y en a d’autres dans les{" "}
        <Link href="/games/tag/chairs">jeux avec des chaises</Link>.
      </p>

      <h2>Profitez du couloir</h2>
      <p>
        <GameLink id="silly-walk-leader" /> marche dès 1 an. Remontez le couloir d’une drôle de démarche, comme un
        pingouin qui se dandine, votre enfant derrière vous qui imite. Changez de démarche tous les quelques pas. Au
        bout, retournez-vous et dites « à toi », puis imitez exactement la démarche qu’il invente, même s’il ne fait
        que taper des pieds. Follow the Leader, suivre le meneur, figure sur la liste d’activités de Harvard pour les
        tout-petits <Cite id="cdc-guide" />.
      </p>
      <p>
        <GameLink id="roll-wait-go" />, c’est dès 2 ans. Accroupissez-vous à un bout du couloir, votre enfant à côté,
        et faites rouler une balle loin dans le couloir. Tenez-vous la main et regardez-la rouler. C’est seulement
        quand elle s’est arrêtée et que vous dites « partez » que vous foncez tous les deux. Allongez un peu l’attente
        après l’arrêt à chaque fois, puis laissez votre enfant dire « partez ».
      </p>
      <p>
        D’autres dans les <Link href="/games/tag/hallway">jeux dans le couloir</Link>.
      </p>

      <h2>Transformez le sol en lave</h2>
      <p>
        <GameLink id="cushion-lava" />, c’est dès 2 ans. Éparpillez tous les coussins de la maison par terre et
        annoncez que le sol est de la lave : les pieds restent sur les coussins. Sautez ensemble jusqu’au canapé, en
        vous tenant la main pour les grands écarts. Annoncez « la lave monte » et retirez un coussin à chaque tour.
      </p>
      <p>
        <GameLink id="run-home" />, c’est dès 2 ans aussi. Donnez à chacun un coussin-maison dans un coin différent,
        puis promenez-vous dans la pièce avec des démarches rigolotes. Criez « à la maison ! » et filez tous les deux
        vous asseoir sur votre coussin. Échangez de maison tous les deux ou trois tours, et applaudissez quand vous
        vous rappelez tous les deux lequel est le vôtre maintenant. D’autres dans les{" "}
        <Link href="/games/tag/cushions">jeux avec des coussins</Link>.
      </p>

      <h2>Ajoutez un stop au vacarme</h2>
      <p>
        S’arrêter à un signal, c’est ce que les chercheurs demandent aux tout-petits. Dans une étude au long cours, on
        a demandé à des enfants de 22 à 45 mois d’attendre, de marcher lentement sur une ligne, de chuchoter, et de
        s’arrêter et repartir à un signal <Cite id="kochanska-2000" />. Dans une autre, chanter, danser et jouer à des
        jeux musicaux ensemble à la maison à 2 à 3 ans a prédit l’attention et l’autorégulation à 5 ans{" "}
        <Cite id="williams-2015" />.
      </p>
      <p>
        <GameLink id="sock-rain" />, c’est dès 2 ans. Videz un gobelet de chaussettes roulées par terre et criez
        « pluie » : vous les lancez tous les deux le plus haut possible. Criez « soleil » et on arrête de lancer :
        toutes les chaussettes retournent dans le gobelet, le plus vite possible. Le dernier soleil laisse la pièce
        rangée.
      </p>
      <p>
        <GameLink id="cup-drum-parade" />, c’est dès 2 ans. Retournez un gobelet, tapez dessus comme sur un tambour et
        défilez dans la maison, votre enfant derrière vous. Arrêtez le tambour sans prévenir, et toute la fanfare se
        fige en plein pas jusqu’à ce qu’il reprenne. Puis donnez le tambour à votre enfant.
      </p>

      <h2>Cache-cache pour débutants</h2>
      <p>
        La fiche de Harvard sur le jeu pour les tout-petits cite aussi le cache-cache simple{" "}
        <Cite id="brain-play" />. <GameLink id="terrible-hider" /> marche dès 1 an, avant que votre enfant sache
        compter. Dites-lui de rester sur le tapis, puis cachez-vous mal derrière une chaise, en comptant jusqu’à cinq
        à voix haute tout du long. Continuez de compter depuis votre cachette pour que votre voix vous trahisse. Puis
        inversez, et cherchez à deux mauvais endroits avant de le trouver.
      </p>
      <p>
        Quand les courses sont finies, passez à quelque chose de calme. Les{" "}
        <Link href="/games/energy/low">jeux calmes quand on est épuisé</Link> se jouent assis ou allongé, et{" "}
        l’article <Link href="/blog/bedtime-wind-down-games">Jeux calmes pour le coucher</Link> en propose quelques-uns pour la
        fin de journée. La liste complète est dans les{" "}
        <Link href="/games/age/toddlers">jeux pour enfant de 1 à 3 ans</Link>.
      </p>
    </>
  ),
};
