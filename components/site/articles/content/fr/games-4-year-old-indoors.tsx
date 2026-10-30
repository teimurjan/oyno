import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-4-year-old-indoors";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Jeux d’intérieur pour enfant de 4 ans",
  description:
    "Huit jeux d’intérieur pour un enfant de quatre ans : règles inversées, tours de gobelets, restaurant pour de faux et parcours d’obstacles au salon, avec les études derrière chacun.",
  body: (
    <>
      <p>
        Les jeux ci-dessous ont tous une seule règle, et la plupart l’inversent en cours de route. Chacun convient à
        un enfant de quatre ans, ne demande qu’une pièce et ce qu’elle contient, et dure environ 10 minutes.
        Quelques-uns vous laissent même rester sur votre chaise.
      </p>

      <h2>Des jeux à règles qui s’inversent</h2>
      <p>
        Dans une étude, des enfants de 4 à 6 ans touchaient leurs orteils quand on disait « tête » et leur tête quand
        on disait « orteils », et leurs résultats prédisaient leur réussite en grande section{" "}
        <Cite id="ponitz-2009" />.
      </p>
      <p>
        <GameLink id="heads-mean-toes" />, c’est cette tâche transformée en jeu, et vous pouvez l’animer depuis une
        chaise. Expliquez à votre enfant que quand vous dites « tête », il touche ses pieds, et quand vous dites
        « pieds », il touche sa tête. Dites les deux mots dans le désordre, lentement d’abord, puis plus vite. Quand
        c’est facile, ajoutez une deuxième paire inversée : genoux et épaules.
      </p>
      <p>
        <GameLink id="purple-light" /> demande un couloir. Placez-vous à un bout. Votre enfant avance vers vous au
        « feu violet » et se fige au « feu rouge ». Quand il vous rejoint, inversez les mots : rouge veut dire avancer
        et violet veut dire stop. Annoncez les couleurs plus vite à chaque tour. Des enfants de maternelle qui
        jouaient en cercle à des jeux comme Red Light, Purple Light ont amélioré leur autorégulation{" "}
        <Cite id="tominey-mcclelland-2011" />, et un second essai dans des classes du programme Head Start a montré
        que les mêmes jeux amélioraient l’autorégulation et la préparation à l’école <Cite id="schmitt-2015" />.
      </p>

      <h2>Des jeux de mémoire à table</h2>
      <p>
        <GameLink id="cup-shuffle" /> demande trois gobelets et une chaussette roulée en boule. Cachez la chaussette
        sous un gobelet sous les yeux de votre enfant. Faites glisser lentement deux gobelets l’un devant l’autre, puis
        échangez-en deux autres, et demandez sous lequel est la chaussette. Ajoutez un échange à chaque tour, puis
        passez-lui les gobelets : il mélange et vous devinez.
      </p>
      <p>
        Dans un essai, des enfants de quatre et cinq ans entraînés sur des tâches de mémoire de travail ont amélioré
        leur mémoire de travail et leur attention sur des tâches qu’ils n’avaient pas travaillées{" "}
        <Cite id="thorell-2009" />.
      </p>
      <p>
        <GameLink id="build-my-plan" /> fait de la construction un jeu de mémoire. Décrivez d’abord une tour avec des
        mots, comme trois gobelets, puis le livre, puis deux gobelets dessus. Votre enfant la construit de mémoire
        pendant que vous gardez les mains sur les genoux. Comparez-la ensemble au plan, puis votre enfant en décrit une
        et c’est vous qui construisez. Des enfants de maternelle qui jouaient aux cubes en construisant d’après des
        plans et des images ont amélioré leurs fonctions exécutives <Cite id="schmitt-2018" />.
      </p>

      <h2>Faire semblant, avec un plan</h2>
      <p>
        Dans <GameLink id="pretend-restaurant" />, vous vous asseyez en client et commandez trois plats, comme une
        soupe, une pizza et une banane. Votre enfant, le serveur, répète la commande, la cuisine avec des coussins et
        des gobelets, et sert les plats dans l’ordre demandé. Au tour suivant, ajoutez une boisson.
      </p>
      <p>
        Des enfants de 3 à 5 ans qui ont passé cinq semaines à des jeux de faire-semblant fantastiques ont amélioré
        leur mémoire de travail et leur maîtrise de soi <Cite id="thibodeau-2016" />. Dans une autre étude, les jeux
        de faire-semblant complexes des enfants de maternelle avec d’autres enfants prédisaient leur autorégulation
        plus tard <Cite id="elias-berk-2002" />.
      </p>

      <h2>Un parcours d’obstacles au salon</h2>
      <p>
        <GameLink id="obstacle" /> est celui qui demande le plus de préparation ici, et il dure 15 minutes.
        Construisez un parcours qui passe sous une chaise, par-dessus un coussin et autour de la table. Chronométrez
        votre enfant en comptant lentement à voix haute. Puis il change un obstacle et c’est lui qui vous chronomètre.
      </p>
      <p>
        Le guide d’activités de Harvard pour les 3 à 5 ans cite les parcours d’obstacles et l’équilibre{" "}
        <Cite id="cdc-guide" />. Des enfants de maternelle qui ont suivi un programme où l’on saute à cloche-pied,
        saute, lance et attrape ont amélioré leurs fonctions exécutives <Cite id="mulvey-2018" />.
      </p>

      <h2>Changer de règle, et chanter</h2>
      <p>
        <GameLink id="guess-my-rule" /> est un jeu de détective avec une pile de chaussettes. Triez les chaussettes en
        deux tas selon une règle secrète, comme rayées et unies. Votre enfant observe et annonce la règle dès qu’il
        l’a trouvée. Puis il trie selon sa propre règle secrète et vous devinez, et aucune règle ne peut servir deux
        fois. Des enfants de 3 à 5 ans ont été testés sur ce même genre de changement : trier des cartes par couleur,
        puis passer à la forme <Cite id="zelazo-2006" />.
      </p>
      <p>
        <GameLink id="missing-word-song" /> est pour un enfant de quatre ans qui connaît toutes les paroles. Chantez
        une chanson que vous connaissez tous les deux, comme « Une souris verte ». Choisissez un mot, comme « souris »,
        et à chaque fois qu’il arrive, tapez tous les deux dans vos mains au lieu de le chanter. À chaque tour,
        ajoutez un mot muet de plus. Des enfants de 4 à 6 ans qui ont suivi un court programme musical de chant, de
        rythme et d’instruments ont amélioré leurs fonctions exécutives <Cite id="bugos-demarie-2017" />.
      </p>

      <h2>En choisir un ce soir</h2>
      <p>
        Choisissez le jeu selon l’énergie qui vous reste. S’il vous en reste un peu, montez le parcours d’obstacles ou
        jouez à Feu violet dans le couloir. Si vous êtes sur le canapé, La tête et les pieds et Devine ma règle se
        jouent tous les deux de là. Si l’heure du coucher approche, La chanson à trous se chante allongé.
      </p>
      <p>
        Vous en trouverez d’autres dans les <Link href="/games/age/preschoolers">jeux pour enfant de 3 à 5 ans</Link>,
        et les <Link href="/games/skill/self-control">jeux de maîtrise de soi</Link> réunissent les jeux de statues et
        les jeux des contraires au même endroit.
      </p>
    </>
  ),
};
