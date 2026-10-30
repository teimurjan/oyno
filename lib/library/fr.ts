import type { Age } from "@/lib/activities";
import type { LibraryCopy } from "./types";

const AGE_NOUN: Record<Age, string> = { "0-1": "bébés", "1-3": "tout-petits", "3-5": "enfants de maternelle" };

const list = new Intl.ListFormat("fr");

/** Lowercases the first letter only, so "Jacques a dit" keeps its capital. */
const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);

/** "la mémoire de travail", "l’attention": every skill label is feminine. */
const withArticle = (label: string) => {
  const lowered = lowerFirst(label);
  return /^[aeiouhéèê]/i.test(lowered) ? `l’${lowered}` : `la ${lowered}`;
};

export const fr: LibraryCopy = {
  ageNoun: AGE_NOUN,
  ageRange: { "0-1": "0 à 12 mois", "1-3": "1 à 3 ans", "3-5": "3 à 5 ans" },
  energy: { low: "Énergie faible", okay: "Énergie moyenne", full: "Pleine énergie" },

  hubs: {
    age: {
      "0-1": {
        title: "Jeux pour bébé de 0 à 12 mois",
        intro: "Jeux sur les genoux, coucou-caché et premiers échanges pour la première année. Chacun dure de 5 à 15 minutes et convient à un parent fatigué.",
      },
      "1-3": {
        title: "Jeux pour enfant de 1 à 3 ans",
        intro: "Jeux de statues, de cachette et d’imitation pour les enfants de un à trois ans, de 5 à 15 minutes chacun, classés selon l’énergie qui vous reste.",
      },
      "3-5": {
        title: "Jeux pour enfant de 3 à 5 ans",
        intro: "Jeux à règles, jeux de mémoire et jeux de faire-semblant qui développent la maîtrise de soi chez les enfants de trois à cinq ans, de 5 à 15 minutes chacun.",
      },
    },
    energy: {
      low: {
        title: "Jeux calmes quand on est épuisé",
        intro: "Des jeux pour la fin d’une longue journée, souvent assis ou allongé. Votre enfant bouge, vous parlez.",
      },
      okay: {
        title: "Jeux faciles des soirs ordinaires",
        intro: "Des jeux pour quand il vous reste un peu d’énergie, mais pas beaucoup : presque rien à préparer et 5 à 15 minutes de jeu.",
      },
      full: {
        title: "Jeux actifs quand on a de l’énergie",
        intro: "Des jeux qui vous font bouger tous les deux : courir après, sauter, construire et faire la course, de 5 à 15 minutes chacun.",
      },
    },
    skill: {
      "working-memory": {
        title: "Jeux de mémoire de travail",
        intro: "Des jeux où votre enfant doit garder quelque chose en tête et s’en servir : où est passé le jouet, ce qui vient ensuite, quel mot manque.",
      },
      "inhibitory-control": {
        title: "Jeux de maîtrise de soi",
        intro: "Des jeux pour s’entraîner à s’arrêter, à attendre et à faire le contraire de ce que le corps veut : jeux de statues, jeux d’attente, Jacques a dit.",
      },
      "cognitive-flexibility": {
        title: "Jeux de flexibilité mentale",
        intro: "Des jeux où la règle change en cours de route : trier par couleur, puis par taille ; grand veut dire petit ; tu mènes, puis c’est moi.",
      },
      attention: {
        title: "Jeux de concentration",
        intro: "Des jeux qui gardent l’attention de votre enfant sur une seule chose un peu plus longtemps : un jouet qui bouge, un son doux, une page de livre.",
      },
    },
    type: {
      peekaboo: { title: "Jeux de coucou-caché", what: "Un visage ou un jouet disparaît puis revient, et votre bébé apprend à l’attendre." },
      "hide-and-find": { title: "Jeux de cachette", what: "Vous cachez un jouet sous les yeux de votre enfant, et il se souvient où il est passé." },
      "anticipation-rhyme": { title: "Jeux de comptines à suspense", what: "Une comptine monte jusqu’à une chatouille ou une pause, et votre enfant apprend à l’attendre." },
      imitation: { title: "Jeux d’imitation", what: "Vous imitez votre enfant et votre enfant vous imite, à un temps d’écart." },
      "pretend-play": { title: "Jeux de faire-semblant", what: "Une tasse vide devient du thé et un nounours vit toute une journée, alors votre enfant garde une histoire en tête." },
      "fingerplay-song": { title: "Jeux de doigts et chansons à gestes", what: "Des chansons avec des gestes des mains et des arrêts soudains, chantées assez lentement pour suivre." },
      conversation: { title: "Jeux de conversation", what: "Vous nommez ce que votre enfant regarde et ce qu’il veut, et vous lui laissez le temps de répondre." },
      "vocal-turns": { title: "Jeux de babillage à deux", what: "Votre bébé et vous babillez chacun votre tour, comme une vraie discussion." },
      "joint-attention": { title: "Jeux de regard et de pointage", what: "Votre enfant et vous regardez la même chose, et ses yeux apprennent à suivre les vôtres." },
      "turn-taking": { title: "Jeux de chacun son tour", what: "Un jouet ou un ballon fait l’aller-retour, et chacun attend son tour." },
      building: { title: "Jeux de construction", what: "Empiler, faire tomber et creuser des tunnels, une étape soigneuse à la fois." },
      "stop-go": { title: "Jeux de stop et go", what: "Des jeux de statues : on bouge au signal, on s’arrête net au stop." },
      tempo: { title: "Jeux de vite et lentement", what: "Le même geste, vite puis lentement, à votre signal." },
      "simon-says": { title: "Jeux de Jacques a dit", what: "Touche ton nez, mais seulement quand la règle le dit." },
      opposites: { title: "Jeux des contraires", what: "Grand veut dire petit et jour veut dire nuit : votre enfant dit le contraire de ce qu’il voit." },
      "sorting-switch": { title: "Jeux de tri", what: "Trier des objets d’une façon, puis changer la règle et les trier autrement." },
      "working-memory-list": { title: "Jeux de mémoire", what: "Garder une courte liste en tête, dans l’ordre, et la redire." },
      waiting: { title: "Jeux d’attente", what: "Attendre quelques secondes quelque chose de bien, avec un jeu pour aider à patienter." },
      "motor-control": { title: "Jeux au ralenti", what: "Des gestes lents et soigneux sous une règle : sur la pointe des pieds, en funambule, un seul doigt." },
      "motor-skill": { title: "Jeux de motricité", what: "Sauter à cloche-pied, ramper, lancer et attraper." },
      rhythm: { title: "Jeux de rythme", what: "Taper un rythme dans les mains ou du bout des doigts, et le reproduire." },
      storytelling: { title: "Jeux d’histoires", what: "Raconter une histoire ensemble, dans l’ordre, avec votre enfant en héros." },
      reading: { title: "Jeux de lecture", what: "Un album avec une mission : trouver, deviner ou tourner la page au bon moment." },
      "quiet-focus": { title: "Jeux de calme et de concentration", what: "Rester immobile, écouter et respirer, avec une petite tâche pour garder l’attention." },
      "rule-game": { title: "Jeux à règles", what: "Des jeux classiques avec une règle à retenir, comme Pas de loup." },
      planning: { title: "Jeux de planification", what: "D’abord réfléchir, puis agir : viser, prévoir un trajet, dire son plan à voix haute." },
      "quiet-voice": { title: "Jeux de chuchotement", what: "Chuchoter, marcher sur la pointe des pieds et garder exprès une toute petite voix." },
    },
    tag: {
      "nothing-to-grab": "Jeux sans jouets",
      "lying-down": "Jeux à faire allongé",
      sitting: "Jeux à faire assis",
      standing: "Jeux debout",
      "on-your-lap": "Jeux sur les genoux",
      quiet: "Jeux calmes",
      "one-room": "Jeux dans une seule pièce",
      hallway: "Jeux dans le couloir",
      bedtime: "Jeux du coucher",
      mealtime: "Jeux à table",
      bath: "Jeux pour le bain",
      "on-a-walk": "Jeux en promenade",
      "in-the-car": "Jeux en voiture",
      stairs: "Jeux dans l’escalier",
      window: "Jeux à la fenêtre",
      socks: "Jeux avec des chaussettes",
      cushions: "Jeux avec des coussins",
      chairs: "Jeux avec des chaises",
      "a-cup": "Jeux avec un gobelet",
      "a-cloth": "Jeux avec un tissu",
      "a-book": "Jeux avec un livre",
      "a-mirror": "Jeux avec un miroir",
      "a-ball": "Jeux de ballon",
      "a-toy": "Jeux avec un seul jouet",
      stacking: "Jeux d’empilage",
      crayons: "Jeux avec des crayons",
      lights: "Jeux de lumière",
      music: "Jeux musicaux",
      singing: "Jeux chantés",
    },
    audience: (ages) =>
      ages.length === 3 ? "les enfants de 0 à 5 ans" : list.format(ages.map((age) => `les ${AGE_NOUN[age]}`)),
    titleFor: (title, audience) => `${title} pour ${audience}`,
    countLine: (count, title, audience) =>
      `${count} ${lowerFirst(title)} pour ${audience}, de 5 à 15 minutes chacun, en trois étapes au plus.`,
  },

  games: {
    crumb: "Jeux",
    title: "Jeux à faire avec bébé, les tout-petits et les enfants de maternelle",
    intro: (count) =>
      `${count} jeux pour les enfants de 0 à 5 ans, de 5 à 15 minutes chacun, en trois étapes au plus. Chacun s’appuie sur une étude publiée et sur un guide du Center on the Developing Child de Harvard ou de l’Académie américaine de pédiatrie.`,
    sections: {
      age: "Par âge",
      energy: "Selon l’énergie qui vous reste",
      skill: "Selon la compétence travaillée",
      type: "Par type de jeu",
      tag: "Selon l’endroit et ce que vous avez sous la main",
    },
    minutes: (minutes) => `${minutes} minutes`,
    minutesShort: (minutes) => `${minutes} min`,
    whyItWorks: "Pourquoi ça marche",
    moreOf: (typeTitle) => `D’autres ${lowerFirst(typeTitle)}`,
    allOf: (typeTitle) => `Tous les ${lowerFirst(typeTitle)}`,
    more: "D’autres jeux",
    researchBehind: "La recherche derrière ces jeux",
    metaTitle: ({ title, minutes, age }) => `${title} : un jeu de ${minutes} minutes pour les ${AGE_NOUN[age]}`,
    metaDescription: ({ blurb, steps, minutes, skills }) =>
      `${blurb} ${steps} ${steps > 1 ? "étapes" : "étape"}, ${minutes} minutes, pour travailler ${list.format(skills.map(withArticle))}.`,
  },

  research: {
    design: { rct: "Essai randomisé", experiment: "Expérience", longitudinal: "Étude longitudinale", observational: "Étude observationnelle" },
    study: "Étude",
    guide: "Guide",
  },

  pitch: {
    title: "Oyno vous propose un jeu comme celui-ci chaque soir",
    body: "Il choisit un jeu selon l’âge de votre enfant et l’énergie qui vous reste, met en pause les apps de votre choix pendant que vous jouez, et fait grandir la petite planète de votre famille à chaque partie.",
    cta: "Commencer",
  },

  articles: {
    guide: {
      crumb: "Guides",
      title: "Guides pour les parents d’enfants de 0 à 5 ans",
      intro: "Des lectures de fond sur la façon dont le jeu développe la concentration et la maîtrise de soi, et sur l’art de poser le téléphone. Chaque affirmation renvoie à l’étude qui la fonde.",
    },
    post: {
      crumb: "Blog",
      title: "Le blog d’Oyno",
      intro: "Des lectures courtes pour parents fatigués : des jeux pour ce soir, ce que dit la recherche, et comment reprendre la soirée au téléphone.",
    },
    tryThese: "Essayez ces jeux",
    sources: "Sources",
    byline: (name) => `${name}, créateur d’Oyno`,
  },

  sources: {
    "cdc-guide": {
      says: {
        "0-1": "De 6 à 18 mois : jeux sur les genoux avec une surprise attendue, jeux de cachette, jeux d’imitation et de copie, petits jeux de rôle simples, jeux de doigts, et conversation sur ce que le bébé remarque.",
        "1-3": "De 18 à 36 mois : danse des statues et chansons où l’on s’arrête et repart, chansons à gestes, Follow the Leader (suivre le meneur), défis physiques, conversation et histoires avec « qu’est-ce que tu vas faire ensuite ? », parler des émotions, associer et trier pour rire, puzzles, et jeu imaginaire mené par l’enfant.",
        "3-5": "De 3 à 5 ans : jeu imaginaire avec un plan de jeu, raconter et jouer des histoires, lecture, mouvement en rythme et jeux chantés, parcours d’obstacles et équilibre, postures de yoga avec respiration lente, danser vite puis lentement, danse des statues, tri avec changement de règle, loto des contraires, chansons qui s’allongent, cuisine avec attente, et puzzles.",
      },
    },
    "cdc-guide-5-7": {
      says: {
        "3-5": "De 5 à 7 ans : danse des statues, chaises musicales, Red Light Green Light (1, 2, 3, soleil), Mother May I, What Time Is It Mr Fox, le jeu du mot magique, Simon Says (Jacques a dit) et Do As I Say Not As I Do, jeux d’imitation, appel et réponse, chansons qui s’allongent, Packing for a Picnic, Concentration (memory), rythmes frappés dans les mains, yoga, Guess My Rule et I Spy.",
      },
    },
    "brain-play": {
      says: {
        "0-1": "À 6 et 9 mois : coucou-caché et jeux de cachette, Trot Trot to Boston, Pat-a-Cake, Dickory Dean, Baby See Baby Do, lâcher un jouet chacun son tour avec un « Boum », jeux de conversation et jeux de doigts.",
        "1-3": "De 12 mois à 3 ans : Toddler See Toddler Do, explorer par-dessus des coussins au sol, faire semblant de téléphoner et de faire le ménage, Dump and Fill (vider et remplir), cache-cache simple, le jeu de mémoire des trois gobelets, associer et trier, chansons actives, danse des statues, Follow the Leader (suivre le meneur), compter, puzzles et Be the Narrator (être le narrateur).",
        "3-5": "De 4 à 7 ans : danse des statues avec des positions, Simon Says (Jacques a dit), Red Light Green Light (1, 2, 3, soleil), Duck Duck Goose, What Time Is It Mr Fox, I Spy, Opposites Bingo (loto des contraires) et Continue the Story (continuer l’histoire).",
      },
    },
    "serve-return": {
      says: {
        "0-1": "Remarquer le « service » et partager ce qui capte l’enfant, le lui renvoyer en l’accompagnant, nommer ce qu’il voit ou ressent, jouer chacun son tour en attendant, et s’exercer aux fins et aux débuts, avec le coucou-caché comme exemple.",
        "1-3": "Remarquer le « service » et partager ce qui capte l’enfant, le lui renvoyer en l’accompagnant, nommer ce qu’il voit ou ressent, jouer chacun son tour en attendant, et s’exercer aux fins et aux débuts, avec le coucou-caché comme exemple.",
      },
    },
    "aap-play": {
      says: {
        "0-1": "Le jeu naît du sourire social et devient échange, coucou-caché et Pat-a-Cake, et les pédiatres encouragent la lecture à voix haute dès la naissance, en plus du jeu.",
        "1-3": "Le jeu avec les objets qui devient symbolique, la motricité de base, le chacun son tour, et l’étayage quand un adulte tourne une pièce de puzzle pour aider.",
        "3-5": "Le faire-semblant et le jeu social à règles, le jeu physique et les jeux de bagarre pour rire, et les jeux dont les enfants négocient les règles.",
      },
    },
    "diamond-1985": {
      studied: "Des bébés de 7 mois et demi à 12 mois, le premier mois de la tranche des tout-petits, qui retrouvent un jouet caché sous l’un de deux caches après un court délai, la tâche A-non-B.",
    },
    "reznick-2004": {
      studied: "Des bébés de 5 mois et demi à 6 mois et demi qui retrouvent un jouet après un court délai, la toute première mémoire de travail.",
    },
    "haith-1988": {
      studied: "Des bébés de 3 mois et demi qui apprennent une suite d’images à gauche et à droite et regardent d’avance là où la prochaine image va apparaître.",
    },
    "rochat-1999": {
      studied: "Des bébés de 2 à 6 mois qui réagissent quand on perturbe le rythme et la structure du coucou-caché et des babillages échangés.",
    },
    "yu-smith-2016": {
      studied: "Des enfants d’un an qui restent attentifs plus longtemps à un jouet quand le parent regarde et nomme le même jouet.",
    },
    "cuevas-bell-2014": {
      studied: "L’attention focalisée à 5 mois prédit les fonctions exécutives entre 24 et 48 mois.",
    },
    "nakata-trehub-2004": {
      studied: "Des bébés de 6 mois qui restent attentifs plus longtemps quand leur mère chante que quand elle parle.",
    },
    "ross-lollis-1987": {
      studied: "Des bébés de 9 à 18 mois, dans des jeux de chacun son tour comme donner-prendre et le coucou-caché, qui signalent quand l’adulte a sauté son tour.",
    },
    "landry-2006": {
      studied: "Un accompagnement des parents vers des réponses attentives, avec des bébés de 6 à 10 mois, a amélioré l’attention des nourrissons et leur capacité à résoudre seuls des problèmes.",
    },
    "bernier-2010": {
      studied: "Une parole sensible et attentive à l’esprit de l’enfant, et un soutien à son autonomie entre 12 et 15 mois, ont prédit les fonctions exécutives à 18 et 26 mois.",
    },
    "mendelsohn-2018": {
      studied: "Un accompagnement à la lecture à voix haute et au faire-semblant de la naissance à 3 ans a réduit l’hyperactivité et les problèmes d’attention à 4 ans et demi.",
    },
    "hughes-ensor-2005": {
      studied: "Des enfants de deux ans au Spin the Pots, où il faut retenir quels pots ont été vidés, et à un Stroop pour bébé, où l’on appelle la grande tasse « bébé ».",
    },
    "kochanska-2000": {
      studied: "Des enfants de 22 à 45 mois qui attendent une friandise, marchent lentement sur une ligne, chuchotent, s’arrêtent et repartent à un signal, et construisent une tour chacun son tour.",
    },
    "vallotton-ayoub-2011": {
      studied: "Le vocabulaire et la parole des tout-petits entre 14 et 36 mois prédisent les progrès de l’autorégulation.",
    },
    "hammond-2012": {
      studied: "L’étayage des parents, juste assez d’aide et « et maintenant ? », pendant un puzzle à 2 à 3 ans, a prédit les fonctions exécutives à 3 à 4 ans.",
    },
    "williams-2015": {
      studied: "Chanter, danser et jouer à des jeux musicaux ensemble à la maison à 2 à 3 ans a prédit l’attention et l’autorégulation à 5 ans.",
    },
    "carlson-2005": {
      studied: "Des enfants de 2 à 6 ans à des tâches adaptées à leur âge : attendre un goûter ou un cadeau, tri inversé, l’ours et le dragon, Simon says, chuchoter, jour et nuit, moins c’est plus.",
    },
    "zelazo-2006": {
      studied: "Des enfants de 3 à 5 ans qui trient des cartes par couleur puis passent à la forme, le Dimensional Change Card Sort.",
    },
    "gerstadt-1994": {
      studied: "Des enfants de 3 ans et demi à 7 ans qui disent « nuit » devant une carte soleil et « jour » devant une carte lune.",
    },
    "ponitz-2009": {
      studied: "Des enfants de 4 à 6 ans qui touchent leurs orteils quand on dit tête et leur tête quand on dit orteils, ce qui prédit leurs résultats en grande section.",
    },
    "tominey-mcclelland-2011": {
      studied: "Des enfants de 3 à 5 ans qui jouent en cercle à Red Light Purple Light, aux statues avec des règles inversées, aux battements de tambour et à la direction d’orchestre ont amélioré leur autorégulation.",
    },
    "schmitt-2015": {
      studied: "Des enfants de maternelle du programme Head Start qui jouent aux jeux Red Light Purple Light ont amélioré leur autorégulation et leur préparation à l’école.",
    },
    "thibodeau-2016": {
      studied: "Des enfants de 3 à 5 ans qui ont fait cinq semaines de jeux de faire-semblant fantastiques ont amélioré leur mémoire de travail et leur inhibition.",
    },
    "elias-berk-2002": {
      studied: "Les jeux de rôle sociaux complexes des enfants de maternelle ont prédit leur autorégulation plus tard.",
    },
    "bugos-demarie-2017": {
      studied: "Des enfants de 4 à 6 ans qui ont suivi un court programme musical de chant, de rythme et d’instruments ont amélioré leurs fonctions exécutives.",
    },
    "razza-2015": {
      studied: "Des enfants de maternelle qui ont pratiqué un yoga en pleine conscience, postures tenues et respiration lente, ont amélioré leur autorégulation.",
    },
    "schmitt-2018": {
      studied: "Des enfants de maternelle qui ont joué aux cubes de façon semi-dirigée, en construisant d’après des plans et des images, ont amélioré leurs fonctions exécutives.",
    },
    "mulvey-2018": {
      studied: "Des enfants de maternelle qui ont suivi un programme de motricité, sauter à cloche-pied, sauter, lancer et attraper, ont amélioré leurs fonctions exécutives.",
    },
    "thorell-2009": {
      studied: "Des enfants de 4 à 5 ans entraînés sur des tâches de mémoire de travail ont amélioré leur mémoire de travail et leur attention sur des tâches non entraînées.",
    },
    "lind-2017": {
      studied: "Accompagner des parents d’enfants de 6 à 21 mois pour suivre l’initiative de l’enfant, lui répondre et s’en réjouir a amélioré la flexibilité mentale à 48 mois.",
    },
    "garon-2014": {
      studied: "Des enfants de 18 à 67 mois soumis à une batterie de tâches de mémoire de travail, d’inhibition et de flexibilité, sensible aux différences d’âge.",
    },
    "tronick-1978": {
      studied: "Des bébés de 1 à 4 mois dont la mère gardait un visage figé, sans réaction, sont devenus méfiants et se sont repliés en quelques minutes : c’est l’expérience du visage impassible (still-face).",
    },
    "radesky-2014": {
      studied: "Des chercheurs ont observé 55 adultes qui mangeaient avec de jeunes enfants dans des fast-foods ; la plupart ont utilisé un téléphone pendant le repas, et les plus absorbés répondaient souvent aux sollicitations de l’enfant avec retard ou durement.",
    },
    "mcdaniel-radesky-2018": {
      studied: "Les parents de jeunes enfants qui disaient être plus souvent interrompus par leur téléphone pendant les moments en famille signalaient aussi plus de problèmes de comportement chez leur enfant.",
    },
    "myruski-2018": {
      studied: "Des bébés de 7 à 24 mois se sont agités quand leur mère se tournait vers son téléphone dans une tâche de visage impassible, et ceux dont la mère utilisait davantage ses écrans à la maison récupéraient moins bien.",
    },
    "kushlev-dunn-2019": {
      studied: "Des parents dans un musée des sciences à qui l’on avait demandé d’utiliser beaucoup leur téléphone se sont sentis plus distraits et moins proches de leurs enfants que ceux à qui l’on avait demandé de l’utiliser peu.",
    },
    "andrews-2015": {
      studied: "De jeunes adultes dont le téléphone enregistrait l’usage le prenaient en main environ 85 fois par jour et s’en servaient environ cinq heures, à peu près deux fois plus qu’ils ne le pensaient.",
    },
    "mcdaniel-coyne-2016": {
      studied: "143 femmes mariées ou en couple ont déclaré dans une enquête que les écrans interrompaient souvent leurs moments avec leur partenaire, ce que les auteurs ont appelé technoférence, et celles qui en signalaient le plus signalaient aussi plus de conflits autour de la technologie et moins de satisfaction dans leur couple.",
    },
    "chotpitayasunondh-douglas-2016": {
      studied: "Une étude du phubbing, le fait de snober quelqu’un en regardant son téléphone au lieu de lui parler, a montré que les personnes qui phubbaient le plus, et qui étaient le plus phubbées, le trouvaient plus normal.",
    },
    "reed-2017": {
      studied: "38 mères ont appris deux nouveaux mots à leur enfant de 2 ans, et les enfants ont appris le mot enseigné sans interruption mais pas celui interrompu par un appel téléphonique, alors que chaque mot avait été dit aussi souvent.",
    },
    "vanden-abeele-2020": {
      studied: "Des chercheurs ont observé 53 parents d’enfants de 0 à 5 ans dans des salles d’attente et des aires de jeux : 23 utilisaient un téléphone, les chances qu’ils répondent à une sollicitation de l’enfant étaient cinq fois plus faibles pendant ce temps, un rapide coup d’œil ne changeait rien, et une absorption profonde dans d’autres tâches avait à peu près le même effet.",
    },
    "radesky-2015": {
      studied: "Dans une tâche filmée en laboratoire avec 225 mères et leur enfant de 6 ans, 23 % des mères ont utilisé un appareil mobile sans qu’on le leur demande, et celles qui l’ont fait ont eu moins d’interactions avec leur enfant, surtout non verbales.",
    },
    "mcdaniel-radesky-2018b": {
      studied: "183 couples avec un enfant de 0 à 5 ans ont répondu à des questionnaires pendant six mois : un comportement plus difficile de l’enfant prédisait plus d’interférence de la technologie par le biais du stress parental, et cette interférence prédisait souvent plus de comportements d’opposition par la suite.",
    },
    "konrad-2021": {
      studied: "Des mères d’enfants de 20 à 22 mois qui interrompaient le jeu deux minutes pour remplir un questionnaire, sur smartphone ou sur papier, devenaient moins réactives, et leurs tout-petits sollicitaient davantage leur attention.",
    },
    "dwyer-2018": {
      studied: "Plus de 300 personnes partageant un repas au restaurant avec des amis ou de la famille, à qui l’on avait dit au hasard de garder leur téléphone sur la table ou de le ranger, se sentaient plus distraites et appréciaient moins le repas avec les téléphones sortis.",
    },
    "stothart-2015": {
      studied: "Les seules notifications du téléphone, sans que personne n’y touche, perturbaient les performances à une tâche d’attention presque autant que prendre un appel ou écrire un message.",
    },
    "oulasvirta-2012": {
      studied: "Trois études auprès d’utilisateurs de smartphones ont mis au jour une habitude de vérification, de brefs coups d’œil répétés à des contenus rapides d’accès, que les utilisateurs vivaient plus comme une gêne que comme une addiction.",
    },
    "wood-2002": {
      studied: "Dans deux études par journal de bord avec des relevés toutes les heures, les personnes qui faisaient ce qu’elles faisaient presque chaque jour au même endroit avaient tendance à penser à autre chose, et ressentaient moins de stress que pendant des actions nouvelles.",
    },
    "lally-2010": {
      studied: "Des volontaires qui répétaient un nouveau comportement quotidien au même endroit pendant 12 semaines ont mis de 18 à 254 jours à atteindre leur pic d’automaticité, et manquer un jour ne changeait pas grand-chose.",
    },
    "fitz-2019": {
      studied: "237 personnes ont été réparties au hasard pour recevoir leurs notifications comme d’habitude, groupées trois fois par jour, ou jamais : le groupe groupé se sentait plus attentif, de meilleure humeur, plus maître de son téléphone et moins stressé, et le groupe sans notifications se sentait plus anxieux.",
    },
  },
};
