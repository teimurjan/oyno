import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../toddler-games-by-energy";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Jeux pour enfant de 1 à 3 ans : 40 idées classées selon votre énergie",
  description:
    "Quarante petits jeux pour les 1 à 3 ans, classés selon l’énergie qui vous reste ce soir. Chacun dure de 5 à 15 minutes et ne demande presque rien.",
  body: (
    <>
      <p>
        Certains soirs, vous avez l’énergie de courir après votre enfant dans le salon. Beaucoup d’autres soirs, vous
        en avez juste assez pour vous allonger sur le tapis. Je connais bien ce soir-là : je travaille toute la
        journée, je rentre et je prends mon téléphone.
      </p>
      <p>
        Cette liste part donc de votre état. Choisissez la partie qui correspond à ce soir, prenez un jeu, et jouez-y
        de 5 à 15 minutes. Tous les jeux ici sont pour les enfants de 1 à 3 ans, et la plupart ne demandent que ce
        que vous avez déjà chez vous : un gobelet, une chaussette, un coussin, un livre.
      </p>

      <h2>Comment utiliser cette liste</h2>
      <p>
        Les jeux marqués <strong>2+</strong> sont écrits pour les enfants à partir de 2 ans environ. Les autres
        marchent dès le premier anniversaire. Chacun est court, et beaucoup finissent par un échange des rôles, où
        votre enfant prend votre place.
      </p>
      <p>
        Lisez la ligne, jouez une partie, et voyez si votre enfant en veut une autre. S’il s’en va, le jeu est fini,
        et ce n’est pas grave. Chaque jeu a sa propre page avec ses étapes.
      </p>

      <h2>Énergie faible : 14 jeux depuis le canapé ou le sol</h2>
      <p>
        Pour les soirs où vous pouvez vous asseoir ou vous allonger, et guère plus. Votre enfant bouge, vous parlez.
        Vous en trouverez d’autres dans les <Link href="/games/energy/low">jeux calmes quand on est épuisé</Link>.
      </p>
      <ol>
        <li>
          <GameLink id="cup-trio-hide" /> : retournez trois gobelets, glissez un jouet sous l’un d’eux sous les yeux de
          votre enfant, et laissez-le soulever les gobelets jusqu’à le trouver.
        </li>
        <li>
          <GameLink id="pat-pat-copy" /> : tapotez deux coups sur votre genou et attendez que votre enfant les refasse
          sur votre bras, puis copiez un rythme qu’il invente.
        </li>
        <li>
          <GameLink id="piggy-pause-toes" /> : récitez « Celui-ci a vu un lièvre » un peu plus lentement sur chaque
          orteil, et arrêtez-vous avant le dernier jusqu’à ce que votre enfant lève les yeux vers vous.
        </li>
        <li>
          <GameLink id="two-in-the-picture" /> : avant d’ouvrir une page chargée, annoncez deux choses à trouver, et
          laissez votre enfant chercher les deux sans bouger le doigt.
        </li>
        <li>
          <GameLink id="give-and-take" /> : tendez un jouet en disant « pour toi », puis ouvrez la main et attendez
          qu’il revienne pour un « merci ».
        </li>
        <li>
          <GameLink id="peekaboo-faces-cloth" /> : baissez un torchon devant votre visage pour montrer une tête
          joyeuse, triste ou endormie, et nommez chacune.
        </li>
        <li>
          <GameLink id="fill-the-rhyme" /> : taisez-vous juste avant le dernier mot d’un vers, dans une comptine que
          votre enfant connaît, et attendez qu’il le dise.
        </li>
        <li>
          <GameLink id="doctor-kid-patient" /> : allongez-vous en patient avec deux endroits qui font mal, et laissez
          votre enfant examiner les deux et vous soigner.
        </li>
        <li>
          <GameLink id="still-stone-mouse" /> (2+) : votre enfant reste immobile comme une pierre pendant que votre
          main s’approche comme une souris, et au moindre tortillement, la souris retourne au départ.
        </li>
        <li>
          <GameLink id="hand-on-the-cup" /> (2+) : cachez un jouet sous un gobelet, posez la main de votre enfant
          dessus, et il ne soulève le gobelet que quand vous dites « vas-y ».
        </li>
        <li>
          <GameLink id="whisper-tent-rule" /> (2+) : posez une couverture sur vos genoux pliés pour faire une tente où
          l’on ne fait que chuchoter, et parlez normalement dehors.
        </li>
        <li>
          <GameLink id="tummy-drum-soft-loud" /> (2+) : votre ventre est le tambour, « souris » veut dire de toutes
          petites tapes douces, « éléphant » de grandes tapes lentes, et « stop » fait s’envoler ses mains.
        </li>
        <li>
          <GameLink id="baby-cup-mummy-cup">Gobelet bébé, gobelet maman</GameLink> (2+) : appelez le grand gobelet
          « bébé » et le petit « maman », puis levez-en un à la fois pour que votre enfant le nomme.
        </li>
        <li>
          <GameLink id="hum-and-stop" /> (2+) : fredonnez et balancez-vous ensemble, et quand le fredonnement
          s’arrête, figez-vous tous les deux jusqu’à ce qu’il reprenne.
        </li>
      </ol>

      <h2>Énergie moyenne : 13 jeux pour un soir ordinaire</h2>
      <p>
        Pour les soirs où vous pouvez vous asseoir par terre et peut-être rester debout une minute. Peu de
        préparation, quelques accessoires. Vous en trouverez d’autres dans les{" "}
        <Link href="/games/energy/medium">jeux faciles des soirs ordinaires</Link>.
      </p>
      <ol>
        <li>
          <GameLink id="look-and-name" /> : pour un enfant qui vient d’avoir 1 an, fixez une chose de l’autre côté de
          la pièce et nommez-la, puis suivez son regard et nommez ce qu’il regarde.
        </li>
        <li>
          <GameLink id="show-and-name" /> : prenez tout ce que votre enfant vous tend, nommez-le en disant une chose à
          son sujet, et rendez-le.
        </li>
        <li>
          <GameLink id="ring-ring-calls" /> : portez un cube à votre oreille, dites « dring dring », posez une
          question, et attendez que votre enfant réponde sur son propre cube.
        </li>
        <li>
          <GameLink id="cup-drum-turns" /> : tapez un petit rythme sur votre gobelet retourné, puis gardez les mains
          immobiles pendant que votre enfant répond sur le sien.
        </li>
        <li>
          <GameLink id="page-patrol" /> : choisissez une chose présente à chaque page d’un livre que vous connaissez,
          et à chaque page, attendez que votre enfant la trouve et la montre.
        </li>
        <li>
          <GameLink id="cup-hat-pretend" /> : un gobelet devient un chapeau, la tasse d’un géant, une voiture et un
          bateau, puis c’est votre enfant qui décide ce qu’il devient.
        </li>
        <li>
          <GameLink id="what-next-tower" /> : videz les cubes, gardez les mains sur les genoux, et demandez « et
          maintenant ? » au lieu d’ajouter un cube vous-même.
        </li>
        <li>
          <GameLink id="wait-wait-go" /> (2+) : asseyez-vous face à face, la balle dans les mains de votre enfant, et
          il ne vous la roule que sur « vas-y ».
        </li>
        <li>
          <GameLink id="two-sock-piles" /> (2+) : triez des chaussettes propres en une pile foncée et une pile claire,
          puis mélangez tout et triez-les en grandes et petites.
        </li>
        <li>
          <GameLink id="cat-bear-switch" /> (2+) : marchez sur la pointe des pieds sans un bruit sur « chat », tapez
          des pieds en grognant sur « ours », et changez de mot de plus en plus souvent.
        </li>
        <li>
          <GameLink id="who-ran-away" /> (2+) : alignez trois jouets, cachez-en un pendant que votre enfant se cache
          les yeux, et demandez « qui s’est sauvé ? »
        </li>
        <li>
          <GameLink id="loud-soft-singing" /> (2+) : chantez fort ensemble quand votre main est en l’air, et en
          chuchotant quand elle descend jusqu’au genou.
        </li>
        <li>
          <GameLink id="red-light-whisper" /> (2+) : quand vous êtes passager, tout le monde chuchote au feu rouge et
          reprend sa voix normale au vert.
        </li>
      </ol>

      <h2>Pleine énergie : 13 jeux pour bouger tous les deux</h2>
      <p>
        Pour les soirs où vous pouvez encore faire le tour du salon en courant. Dégagez d’abord un peu de sol. Vous
        en trouverez d’autres dans les <Link href="/games/energy/high">jeux actifs quand on a de l’énergie</Link>.
      </p>
      <ol>
        <li>
          <GameLink id="terrible-hider" /> : cachez-vous mal derrière une chaise et continuez de compter à voix haute,
          pour que votre voix vous trahisse.
        </li>
        <li>
          <GameLink id="airplane-landing" /> : faites voler votre enfant dans la pièce, posez-le sur le canapé sur
          « trois, deux, un », et attendez qu’il dise « en l’air » avant le vol suivant.
        </li>
        <li>
          <GameLink id="silly-walk-leader" /> : remontez le couloir en vous dandinant comme un pingouin, votre enfant
          derrière vous qui imite, puis imitez la démarche qu’il invente.
        </li>
        <li>
          <GameLink id="chair-tunnels" /> : alignez deux ou trois chaises de cuisine pour faire un tunnel, passez
          d’abord, et demandez « et maintenant ? » quand votre enfant s’arrête.
        </li>
        <li>
          <GameLink id="blanket-parachute" /> : levez une couverture bien haut ensemble et laissez-la retomber, et au
          quatrième « en haut », plongez tous les deux dessous.
        </li>
        <li>
          <GameLink id="bridge-falls-down" /> : faites un pont avec vos bras contre le mur pendant que votre enfant
          passe dessous au son de « Passe, passe, passera », et baissez-le sur le dernier mot.
        </li>
        <li>
          <GameLink id="green-means-go" /> (2+) : foncez vers le mur d’en face sur « vert », arrêtez-vous net sur
          « rouge », et annoncez chacun votre tour.
        </li>
        <li>
          <GameLink id="jump-jump-freeze" /> (2+) : tenez-vous par la main et sautez en comptant jusqu’à trois, puis
          dites « statue » et figez-vous.
        </li>
        <li>
          <GameLink id="snail-and-rocket" /> (2+) : traversez la pièce aussi lentement qu’un escargot, puis foncez
          comme une fusée, et changez de mot de plus en plus tôt.
        </li>
        <li>
          <GameLink id="dance-till-it-stops" /> (2+) : dansez en grand sur une chanson, et quand vous la mettez en
          pause, figez-vous tous les deux jusqu’à ce qu’elle reprenne.
        </li>
        <li>
          <GameLink id="cushion-lava" /> (2+) : éparpillez les coussins, annoncez que le sol est de la lave, et sautez
          de coussin en coussin jusqu’au canapé.
        </li>
        <li>
          <GameLink id="roll-wait-go" /> (2+) : faites rouler une balle dans le couloir, tenez-vous la main pendant
          qu’elle roule, et ne foncez qu’une fois qu’elle s’est arrêtée et que vous dites « partez ».
        </li>
        <li>
          <GameLink id="sock-rain" /> (2+) : lancez des chaussettes roulées bien haut sur « pluie », et sur « soleil »,
          on arrête de lancer et toutes les chaussettes retournent dans le gobelet.
        </li>
      </ol>

      <h2>Pourquoi autant de jeux de statues et d’attente</h2>
      <p>
        Beaucoup des jeux ci-dessus demandent à votre enfant de s’arrêter, d’attendre ou de chuchoter sur un signal.
        C’est voulu. Dans une étude au long cours, on a demandé à des enfants de 22 à 45 mois d’attendre une
        friandise, de marcher lentement sur une ligne, de chuchoter, et de s’arrêter et repartir sur un signal{" "}
        <Cite id="kochanska-2000" />. Ce sont les mêmes gestes que dans La pierre et la souris, Attends, attends…
        vas-y ! et La tente à chuchotis.
      </p>
      <p>
        Les jeux musicaux ont aussi leur place ici. Chanter, danser et jouer à des jeux musicaux ensemble à la
        maison à 2 à 3 ans a prédit l’attention et l’autorégulation à 5 ans <Cite id="williams-2015" />. C’est un
        lien, pas la preuve que les chansons en sont la cause, mais c’est une bonne raison de chanter.
      </p>
      <p>
        Pour les 18 à 36 mois, le Center on the Developing Child de Harvard propose la danse des statues et les
        chansons où l’on s’arrête et repart, les chansons à gestes, Follow the Leader (suivre le meneur) et des défis
        physiques <Cite id="cdc-guide" />. Vous en trouverez d’autres dans les{" "}
        <Link href="/games/skill/self-control">jeux de maîtrise de soi</Link> et les{" "}
        <Link href="/games/type/stop-go">jeux de stop et go</Link>.
      </p>

      <h2>Pourquoi des jeux de cachette, d’imitation et de faire-semblant</h2>
      <p>
        Les enfants de deux ans peuvent déjà garder quelques choses en tête. Dans une étude, des enfants de deux ans
        se souvenaient des pots qu’ils avaient déjà vidés, et ils appelaient un grand gobelet « bébé » et un petit
        gobelet « maman » <Cite id="hughes-ensor-2005" />. Les trois gobelets, Qui s’est sauvé ? et Gobelet bébé,
        gobelet maman demandent la même chose.
      </p>
      <p>
        Les fiches de jeu de Harvard pour les 12 mois à 3 ans proposent Toddler See Toddler Do (imiter le
        tout-petit), le cache-cache simple, un jeu de mémoire avec trois gobelets, des jeux d’association et de tri,
        faire semblant de téléphoner et de faire le ménage, des chansons actives, la danse des statues et Follow the
        Leader <Cite id="brain-play" />. Vous retrouverez la plupart d’entre eux dans la liste ci-dessus.
      </p>
      <p>
        La façon de jouer compte aussi. Des enfants d’un an restaient attentifs plus longtemps à un jouet quand leur
        parent regardait et nommait le même jouet <Cite id="yu-smith-2016" />. L’aide juste suffisante des parents
        pendant un puzzle à 2 à 3 ans, y compris demander ce qui vient ensuite, a prédit les fonctions exécutives de
        leurs enfants à 3 à 4 ans <Cite id="hammond-2012" />. C’est pourquoi certaines étapes vous disent de demander
        « et maintenant ? » au lieu de montrer.
      </p>
      <p>
        Le faire-semblant compte aussi. Accompagner les parents pour lire à voix haute et jouer à faire semblant de
        la naissance à 3 ans a réduit l’hyperactivité et les problèmes d’attention à quatre ans et demi{" "}
        <Cite id="mendelsohn-2018" />. Vous en trouverez d’autres dans les{" "}
        <Link href="/games/type/pretend-play">jeux de faire-semblant</Link> et les{" "}
        <Link href="/games/type/hide-and-find">jeux de cachette</Link>.
      </p>

      <h2>Restez simple</h2>
      <p>
        L’Académie américaine de pédiatrie décrit le jeu à cet âge comme un jeu avec les objets qui devient
        faire-semblant, de la motricité, du chacun son tour, et un adulte qui aide un peu, par exemple en tournant une
        pièce de puzzle <Cite id="aap-play" />. Rien de tout cela ne demande un plan ou des courses.
      </p>
      <p>
        Un seul jeu suffit pour une soirée. Jouez-y tant que votre enfant rit, laissez-le prendre votre place le temps
        d’une partie, et arrêtez avant que ça devienne une corvée. S’il veut le même jeu tous les soirs, c’est très
        bien aussi. La liste complète des <Link href="/games/age/toddlers">jeux pour enfant de 1 à 3 ans</Link> est
        classée selon l’énergie, comme celle-ci.
      </p>
      <p>
        Si le développement ou le comportement de votre tout-petit vous inquiète, parlez-en à votre pédiatre.
      </p>
    </>
  ),
};
