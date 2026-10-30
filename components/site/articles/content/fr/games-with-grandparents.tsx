import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-grandparents";

const { Link, GameLink } = linksIn("fr");

export const article: Article = {
  ...english,
  title: "Jeux faciles pour grands-parents et petits-enfants",
  description:
    "Des jeux sans effort qu’un grand-parent peut faire depuis une chaise ou avec un bébé sur les genoux, sans rien acheter. Une sélection pour bébés, tout-petits et enfants de maternelle.",
  body: (
    <>
      <p>
        Cette page a deux lecteurs. Si vous êtes le parent, c’est quelque chose à envoyer à votre mère ou à votre père
        avant la prochaine visite. Si vous êtes le grand-parent, c’est une courte liste de jeux à faire assis, sans
        rien acheter et sans rien préparer.
      </p>
      <p>
        Chaque jeu ici dure de 5 à 10 minutes. La plupart ne demandent que des genoux, une chaise et votre voix.
      </p>

      <h2>Pour le parent : quoi transmettre</h2>
      <p>
        Choisissez deux jeux adaptés à l’âge de votre enfant et envoyez les liens à l’avance. Chaque jeu tient en trois
        étapes courtes au plus, donc il se lit très bien sur un téléphone. Deux, c’est assez pour une visite.
      </p>
      <p>
        Dites-leur la chose que votre enfant adore en ce moment, une chanson, un animal ou une blague. Tous les jeux
        ci-dessous peuvent l’intégrer.
      </p>

      <h2>Pour le grand-parent : trois habitudes</h2>
      <p>
        Le Center on the Developing Child de Harvard appelle l’aller-retour du jeu « servir et renvoyer » (serve and
        return). Remarquez ce qui capte l’enfant et partagez-le. Répondez-y. Nommez ce qu’il voit ou ressent. Puis
        jouez chacun votre tour, et attendez <Cite id="serve-return" />. Aucune de ces étapes ne demande des jambes
        rapides ni un jouet. Si le sol est dur pour vos genoux ou votre dos, tous les jeux ci-dessous marchent depuis
        une chaise ou le canapé.
      </p>
      <ul>
        <li>
          <strong>Attendez plus longtemps que ce qui vous paraît naturel.</strong> Laissez quelques secondes à un
          petit enfant pour répondre.
        </li>
        <li>
          <strong>Laissez-le mener.</strong> S’il change le jeu, jouez à sa version.
        </li>
        <li>
          <strong>Arrêtez pendant que c’est encore drôle.</strong> Refaire le même jeu à la prochaine visite, c’est
          très bien.
        </li>
      </ul>

      <h2>Avec un bébé sur les genoux</h2>
      <p>
        L’Académie américaine de pédiatrie décrit comment le jeu d’un bébé passe des sourires sociaux à l’échange, au
        coucou-caché et aux comptines où l’on tape dans les mains (pat-a-cake) <Cite id="aap-play" />. Les deux jeux ci-dessous
        tiennent sur des genoux.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> marche dès 6 mois. Demandez « Il est où, ton nez ? » et attendez le temps
        d’une lente respiration en regardant le visage du bébé. Touchez doucement son nez en disant « le nez », puis
        faites pareil pour les oreilles, les orteils et le ventre. Après quelques tours, demandez « Il est où, mon
        nez ? » et guidez sa main vers le vôtre. Dans un essai, apprendre aux parents à répondre ainsi à des bébés de
        6 à 10 mois a amélioré l’attention des bébés et leur capacité à résoudre seuls des problèmes{" "}
        <Cite id="landry-2006" />.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> marche dès 2 mois, pieds nus sur vos genoux. Récitez lentement « Celui-ci
        a vu un lièvre », un orteil par vers. Au dernier orteil, arrêtez-vous et tenez le pied immobile en comptant
        lentement jusqu’à trois. Puis faites courir vos doigts jusqu’au ventre sur « n’a rien eu du tout ! » et passez
        à l’autre pied.
      </p>

      <h2>Avec un tout-petit</h2>
      <p>
        <GameLink id="you-say-three" />, c’est un jeu de rebonds sur le genou avec un trou dedans. Faites sauter votre
        petit-enfant sur votre genou en comptant « un, deux », puis arrêtez-vous net, mains en l’air. Attendez,
        sourcils levés, qu’il dise « trois », puis faites le plus gros rebond de tous. Des bébés de 9 à 18 mois qui
        jouaient à des jeux de chacun son tour avec un adulte signalaient quand l’adulte sautait son tour{" "}
        <Cite id="ross-lollis-1987" />. Ici, vous le sautez exprès.
      </p>
      <p>
        <GameLink id="face-copy-feelings" /> demande un tout-petit sur vos genoux, nez à nez. Prenez un air bien
        exagéré, nommez-le, comme « surpris », et gardez-le jusqu’à ce qu’il l’imite. Essayez content, endormi, fâché
        et rigolo. Puis inversez : il fait une tête, vous l’imitez, et vous devinez tous les deux l’émotion.
      </p>

      <h2>Avec un enfant de maternelle</h2>
      <p>
        <GameLink id="grandma-footsteps" />, que les Anglais appellent « les pas de grand-mère », est fait pour vous.
        Asseyez-vous sur une chaise, dos à votre petit-enfant, qui part du mur d’en face. Il avance vers vous à pas de
        loup, et chaque fois que vous vous retournez, il doit être figé. Celui que vous voyez bouger retourne au mur,
        et une tape sur votre épaule fait gagner. Des enfants de maternelle qui jouaient à des jeux en cercle, comme
        les statues avec des règles inversées, ont amélioré leur autorégulation <Cite id="tominey-mcclelland-2011" />.
      </p>
      <p>
        <GameLink id="story-stones" /> ne demande qu’une voix fatiguée. Commencez chaque histoire par « Il était une
        fois un tout petit dragon » et ajoutez chacun votre tour exactement trois mots. Comptez les mots sur vos
        doigts, pour que personne n’en glisse un quatrième. Des enfants de 3 à 5 ans qui ont fait cinq semaines de
        jeux de faire-semblant fantastiques ont amélioré leur mémoire de travail et leur maîtrise de soi{" "}
        <Cite id="thibodeau-2016" />.
      </p>
      <p>
        <GameLink id="i-spy-switch" />, c’est « je vois quelque chose » avec une variante. Dites « je vois quelque
        chose de rouge », et votre petit-enfant le trouve depuis l’endroit où vous êtes assis. Après trois couleurs,
        passez aux formes, puis à ce à quoi servent les objets. Des enfants de 3 à 5 ans ont été testés sur ce même
        genre de changement : trier par couleur, puis par forme <Cite id="zelazo-2006" />.
      </p>
      <p>
        D’autres jeux à faire depuis une chaise vous attendent dans les{" "}
        <Link href="/games/tag/sitting">jeux à faire assis</Link>, les{" "}
        <Link href="/games/tag/on-your-lap">jeux sur les genoux</Link> et les{" "}
        <Link href="/games/energy/low">jeux calmes quand on est épuisé</Link>.
      </p>
    </>
  ),
};
