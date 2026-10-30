import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../activities-18-month-old";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Activités pour enfant de 18 mois",
  description:
    "Huit petits jeux pour un enfant de 18 mois : cachette, imitation, chacun son tour et faux coups de téléphone, avec ce qu’ont montré les études à cet âge.",
  body: (
    <>
      <p>
        Dix-huit mois, c’est la frontière entre les jeux de bébé et les jeux de tout-petit. Le Center on the
        Developing Child de Harvard coupe son guide d’activités juste là, avec un chapitre pour 6 à 18 mois et le
        suivant pour 18 à 36 mois <Cite id="cdc-guide" />. Le premier cite les jeux sur les genoux avec une surprise,
        les jeux de cachette et les jeux d’imitation. Le second ajoute les chansons où l’on s’arrête et repart,
        Follow the Leader (suivre le meneur), les jeux d’association et le faire-semblant mené par l’enfant.
      </p>
      <p>
        Tous les jeux ci-dessous conviennent à un enfant de 18 mois. La plupart demandent quelques gobelets, un jouet
        ou rien du tout, et chacun dure de 5 à 10 minutes.
      </p>

      <h2>Des jeux de cachette avec plus de cachettes</h2>
      <p>
        Dans une expérience classique, des bébés de 7 mois et demi à 12 mois retrouvaient un jouet caché sous l’un de
        deux caches après un court délai <Cite id="diamond-1985" />. À 18 mois, vous pouvez ajouter une troisième
        cachette. La fiche Brain-Building Through Play de Harvard pour 12 mois à 3 ans cite un jeu de mémoire à trois
        gobelets et un cache-cache simple <Cite id="brain-play" />.
      </p>
      <p>
        <GameLink id="cup-trio-hide" />, c’est ce jeu de gobelets. Retournez trois gobelets en ligne et glissez un
        jouet sous l’un d’eux sous les yeux de votre enfant. Demandez « il est où ? » et laissez-le soulever les
        gobelets jusqu’à le trouver, avec un bravo s’il trouve du premier coup.
      </p>
      <p>
        <GameLink id="terrible-hider" />, c’est le cache-cache pour un enfant qui ne sait pas encore compter. Dites-lui
        de rester sur le tapis, puis cachez-vous mal derrière une chaise, en comptant jusqu’à cinq à voix haute tout du
        long. Continuez de compter pour que votre voix vous trahisse. Puis inversez, et cherchez à deux mauvais
        endroits avant de le trouver.
      </p>
      <p>
        <GameLink id="pat-the-moo" /> est un jeu de mémoire dès 18 mois. Alignez trois jouets et choisissez un bruit
        pour chacun, comme « meuh » pour la vache et « tut-tut » pour la voiture. Faites un bruit sans regarder les
        jouets, et votre enfant tapote celui qui le fait. Les chercheurs mesurent la mémoire de travail, la maîtrise
        de soi et le changement de règle chez les enfants dès 18 mois, avec des tâches qui repèrent les différences
        d’un âge à l’autre <Cite id="garon-2014" />.
      </p>

      <h2>Chacun son tour</h2>
      <p>
        Des bébés de 9 à 18 mois qui jouaient à donner-prendre et au coucou-caché avec un adulte signalaient quand
        l’adulte sautait son tour <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        Dans <GameLink id="give-and-take" />, tendez un jouet en disant « pour toi ». Puis ouvrez la main et attendez
        que votre enfant vous le rende. Dites « merci » à chaque fois, et gardez le jouet un instant de plus avant de
        le lui redonner. Attendez qu’il tende la main ou dise « encore » avant chaque échange.
      </p>
      <p>
        L’attente, c’est votre part du jeu. Quand des parents d’enfants de 6 à 21 mois ont été accompagnés pour suivre
        l’initiative de leur enfant, lui répondre et montrer leur joie, cet accompagnement a amélioré la flexibilité
        mentale de leurs enfants à 4 ans <Cite id="lind-2017" />.
      </p>

      <h2>Imiter et faire semblant</h2>
      <p>
        La même fiche de Harvard cite Toddler See Toddler Do (l’enfant imite) et les faux coups de téléphone pour cet
        âge <Cite id="brain-play" />.
      </p>
      <p>
        <GameLink id="pat-pat-copy" /> est le jeu d’imitation. Tapotez un petit rythme sur votre genou, comme tap tap,
        et attendez que votre enfant le refasse sur votre bras. Restez à deux tapes pour l’instant. Puis inversez les
        rôles : il invente le rythme et vous le copiez, en vous trompant de temps en temps pour qu’il vous corrige.
      </p>
      <p>
        <GameLink id="ring-ring-calls" /> se joue depuis le canapé. Portez un cube à votre oreille, dites « dring
        dring », et donnez à votre enfant son propre cube. Posez une question, puis taisez-vous en gardant le
        téléphone à l’oreille jusqu’à ce qu’il réponde quelque chose. Dites « au revoir », raccrochez, et attendez
        qu’il vous appelle.
      </p>
      <p>
        Dans un essai, accompagner des parents à lire à voix haute et à jouer à faire semblant de la naissance à 3 ans
        a réduit l’hyperactivité et les problèmes d’attention à quatre ans et demi <Cite id="mendelsohn-2018" />.
      </p>

      <h2>Regarder, nommer et attendre</h2>
      <p>
        Des enfants d’un an restaient attentifs plus longtemps à un jouet quand leur parent regardait et nommait le
        même jouet <Cite id="yu-smith-2016" />. <GameLink id="look-and-name" /> en fait un jeu. Asseyez-vous près de
        votre enfant, tournez la tête pour bien fixer une chose de l’autre côté de la pièce, et nommez-la. Quand ses
        yeux s’y posent, redites le nom. Puis suivez plutôt son regard, et nommez ce qu’il regarde, aussi longtemps
        qu’il regarde.
      </p>
      <p>
        Laissez à votre enfant la place de faire les choses lui-même. Dans une étude, une parole sensible des parents
        sur ce que pensait leur enfant, et leur soutien à ses propres essais, entre 12 et 15 mois, prédisaient les
        fonctions exécutives à 18 et 26 mois <Cite id="bernier-2010" />.
      </p>
      <p>
        <GameLink id="what-next-tower" /> s’y entraîne exprès. Videz les cubes ou les gobelets, dites « on construit
        une grande tour », puis gardez les mains sur les genoux. Quand il s’arrête, demandez « et maintenant ? » au
        lieu d’ajouter un cube vous-même. Si une pièce ne tient pas, montrez où elle pourrait aller et laissez-le
        essayer.
      </p>

      <h2>Combien, c’est assez</h2>
      <p>
        Un jeu par soir, c’est largement suffisant. Jouez-y tant que votre enfant est dedans, et arrêtez quand il
        s’éloigne. Le même jeu peut revenir demain.
      </p>
      <p>
        Vous en trouverez d’autres dans les <Link href="/games/age/toddlers">jeux pour enfant de 1 à 3 ans</Link>,
        classés selon l’énergie qui vous reste, et dans les{" "}
        <Link href="/games/skill/working-memory">jeux de mémoire de travail</Link>. Si le développement de votre
        enfant vous inquiète, parlez-en à votre pédiatre.
      </p>
    </>
  ),
};
