import type { Age } from "@/lib/activities";
import type { LibraryCopy } from "./types";

const AGE_NOUN: Record<Age, string> = { "0-1": "bebés", "1-3": "niños pequeños", "3-5": "niños de preescolar" };

/** Every title starts with "Juegos", so it reads mid-sentence once its first letter drops. */
const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);

const list = (items: readonly string[]) => new Intl.ListFormat("es-MX").format(items);

/** A skill as the object of "trabaja": "la atención", "el autocontrol". */
const withArticle = (skill: string) => {
  const lower = skill.toLowerCase();
  return lower === "autocontrol" ? `el ${lower}` : `la ${lower}`;
};

export const esMX: LibraryCopy = {
  ageNoun: AGE_NOUN,
  ageRange: { "0-1": "0 a 12 meses", "1-3": "1 a 3 años", "3-5": "3 a 5 años" },
  energy: { low: "Energía baja", okay: "Energía media", full: "Energía alta" },

  hubs: {
    age: {
      "0-1": {
        title: "Juegos para bebés de 0 a 12 meses",
        intro: "Juegos en tus piernas, “¿dónde está? ¡aquí está!” y las primeras pláticas de ida y vuelta para el primer año. Cada uno dura de 5 a 15 minutos y va bien con una mamá o un papá cansados.",
      },
      "1-3": {
        title: "Juegos para niños de 1 a 3 años",
        intro: "Juegos de congelados, de esconder y encontrar y de imitar para niños de uno a tres años, de 5 a 15 minutos cada uno, ordenados por la energía que te queda.",
      },
      "3-5": {
        title: "Juegos para niños de 3 a 5 años",
        intro: "Juegos con reglas, juegos de memoria y juegos de imaginación que construyen el autocontrol en niños de tres a cinco años, de 5 a 15 minutos cada uno.",
      },
    },
    energy: {
      low: {
        title: "Juegos con poca energía para papás cansados",
        intro: "Juegos para el final de un día largo, muchos para jugar sentados o acostados. Tu peque se mueve y tú pones la voz.",
      },
      okay: {
        title: "Juegos fáciles para una tarde cualquiera",
        intro: "Juegos para cuando te queda algo de energía, pero no mucha: casi nada que preparar y de 5 a 15 minutos de juego.",
      },
      full: {
        title: "Juegos activos para cuando tienes energía",
        intro: "Juegos que los ponen a moverse a los dos: perseguirse, brincar, construir y echar carreras, de 5 a 15 minutos cada uno.",
      },
    },
    skill: {
      "working-memory": {
        title: "Juegos de memoria de trabajo",
        intro: "Juegos que le piden a tu peque guardar algo en la mente y usarlo: dónde quedó el juguete, qué sigue, qué palabra falta.",
      },
      "inhibitory-control": {
        title: "Juegos de autocontrol",
        intro: "Juegos para practicar detenerse, esperar y hacer lo contrario de lo que el cuerpo quiere: congelados, juegos de esperar, Simón dice.",
      },
      "cognitive-flexibility": {
        title: "Juegos de flexibilidad mental",
        intro: "Juegos que cambian la regla a la mitad: ordena por color y luego por tamaño; grande quiere decir chico; ahora diriges tú, ahora yo.",
      },
      attention: {
        title: "Juegos de concentración",
        intro: "Juegos que mantienen la atención de tu peque en una sola cosa un poquito más: un juguete que se mueve, un sonido suave, una página de un libro.",
      },
    },
    type: {
      peekaboo: { title: "Juegos de “¿dónde está? ¡aquí está!”", what: "Una cara o un juguete desaparece y vuelve, y tu bebé aprende a esperarlo." },
      "hide-and-find": { title: "Juegos de esconder y encontrar", what: "Escondes un juguete mientras tu peque te ve, y se acuerda de dónde quedó." },
      "anticipation-rhyme": { title: "Juegos de rimas con sorpresa", what: "Una rima va subiendo hasta unas cosquillas o una pausa, y tu peque aprende a esperarla." },
      imitation: { title: "Juegos de imitar", what: "Tú imitas a tu peque y tu peque te imita a ti, un momentito después." },
      "pretend-play": { title: "Juegos de imaginación", what: "Un vaso vacío se vuelve té y un osito de peluche tiene un día entero, así tu peque sostiene una historia en la mente." },
      "fingerplay-song": { title: "Juegos de manitas y canciones con mímica", what: "Canciones con movimientos de manos y paradas de golpe, cantadas lo bastante lento para seguirlas." },
      conversation: { title: "Juegos para platicar", what: "Nombras lo que tu peque mira y quiere, y le dejas espacio para contestar." },
      "vocal-turns": { title: "Juegos de balbuceo por turnos", what: "Tú y tu bebé balbucean por turnos, como en una plática de verdad." },
      "joint-attention": { title: "Juegos de mirar y señalar", what: "Tú y tu peque miran lo mismo, y sus ojos aprenden a seguir los tuyos." },
      "turn-taking": { title: "Juegos por turnos", what: "Un juguete o una pelota va y viene, y cada quien espera su turno." },
      building: { title: "Juegos de construir", what: "Apilar, tirar y hacer túneles, un paso con cuidado a la vez." },
      "stop-go": { title: "Juegos de alto y siga", what: "Juegos de congelados: muévete con “siga” y para en seco con “alto”." },
      tempo: { title: "Juegos de rápido y lento", what: "El mismo movimiento, rápido y luego lento, cuando tú das la señal." },
      "simon-says": { title: "Juegos de Simón dice", what: "Tócate la nariz, pero solo cuando la regla lo dice." },
      opposites: { title: "Juegos de opuestos", what: "Grande quiere decir chico y día quiere decir noche, así tu peque dice lo contrario de lo que ve." },
      "sorting-switch": { title: "Juegos de clasificar", what: "Ordena las cosas de una forma, luego cambia la regla y ordénalas de otra." },
      "working-memory-list": { title: "Juegos de memoria", what: "Guarda una lista cortita en la mente, en orden, y repítela." },
      waiting: { title: "Juegos de esperar", what: "Espera unos segundos algo bueno, con un juego que ayuda a aguantar." },
      "motor-control": { title: "Juegos en cámara lenta", what: "Movimientos lentos y cuidadosos con una regla: de puntitas, en la cuerda floja, con un solo dedo." },
      "motor-skill": { title: "Juegos de movimiento", what: "Brincar, gatear, lanzar y atrapar." },
      rhythm: { title: "Juegos de ritmo", what: "Aplaude o da golpecitos con un ritmo y repítanlo." },
      storytelling: { title: "Juegos de inventar cuentos", what: "Cuenten una historia juntos, en orden, con tu peque como protagonista." },
      reading: { title: "Juegos con libros", what: "Un libro ilustrado con una tarea: encontrar, adivinar o pasar la página en el momento justo." },
      "quiet-focus": { title: "Juegos tranquilos de concentración", what: "Quedarse quietos, escuchar y respirar, con una tarea pequeña que sostiene la atención." },
      "rule-game": { title: "Juegos con reglas", what: "Juegos clásicos con una regla que recordar, como Un, dos, tres, calabaza." },
      planning: { title: "Juegos de planear", what: "Primero piensa y luego hazlo: apuntar, planear una ruta, decir el plan en voz alta." },
      "quiet-voice": { title: "Juegos de susurros", what: "Susurrar, caminar de puntitas y hablar bajito a propósito." },
    },
    tag: {
      "nothing-to-grab": "Juegos sin juguetes",
      "lying-down": "Juegos para jugar acostados",
      sitting: "Juegos para jugar sentados",
      standing: "Juegos de pie",
      "on-your-lap": "Juegos en tus piernas",
      quiet: "Juegos tranquilos",
      "one-room": "Juegos para un solo cuarto",
      hallway: "Juegos para el pasillo",
      bedtime: "Juegos para antes de dormir",
      mealtime: "Juegos a la hora de comer",
      bath: "Juegos para la hora del baño",
      "on-a-walk": "Juegos para un paseo",
      "in-the-car": "Juegos para el carro",
      stairs: "Juegos en las escaleras",
      window: "Juegos en la ventana",
      socks: "Juegos con calcetines",
      cushions: "Juegos con cojines",
      chairs: "Juegos con sillas",
      "a-cup": "Juegos con un vaso",
      "a-cloth": "Juegos con un trapo",
      "a-book": "Juegos con un libro",
      "a-mirror": "Juegos con un espejo",
      "a-ball": "Juegos con pelota",
      "a-toy": "Juegos con un solo juguete",
      stacking: "Juegos de apilar",
      crayons: "Juegos con crayolas",
      lights: "Juegos con luces",
      music: "Juegos con música",
      singing: "Juegos para cantar",
    },
    audience: (ages) => {
      if (ages.length === 3) return "niños de 0 a 5 años";
      if (ages.length === 2 && !ages.includes("0-1")) return "niños de 1 a 5 años";
      return list(ages.map((age) => AGE_NOUN[age]));
    },
    titleFor: (title, audience) => `${title} para ${audience}`,
    countLine: (count, title, audience) =>
      `${count} ${lowerFirst(title)} para ${audience}, de 5 a 15 minutos cada uno y con tres pasos como máximo.`,
  },

  games: {
    crumb: "Juegos",
    title: "Juegos para jugar con bebés, niños pequeños y niños de preescolar",
    intro: (count) =>
      `${count} juegos para niños de 0 a 5 años, de 5 a 15 minutos cada uno y con tres pasos como máximo. Cada uno se basa en un estudio publicado y en una guía del Center on the Developing Child de Harvard o de la Academia Americana de Pediatría.`,
    sections: {
      age: "Por edad",
      energy: "Por la energía que te queda",
      skill: "Por la habilidad que trabaja",
      type: "Por tipo de juego",
      tag: "Por dónde estás y qué tienes a la mano",
    },
    minutes: (minutes) => `${minutes} minutos`,
    minutesShort: (minutes) => `${minutes} min`,
    whyItWorks: "Por qué funciona",
    moreOf: (typeTitle) => `Más ${lowerFirst(typeTitle)}`,
    allOf: (typeTitle) => `Todos los ${lowerFirst(typeTitle)}`,
    more: "Más juegos",
    researchBehind: "La investigación detrás de estos juegos",
    metaTitle: ({ title, minutes, age }) => `${title}: un juego de ${minutes} minutos para ${AGE_NOUN[age]}`,
    metaDescription: ({ blurb, steps, minutes, skills }) =>
      `${blurb} ${steps === 1 ? "1 paso" : `${steps} pasos`}, ${minutes} minutos; trabaja ${list(skills.map(withArticle))}.`,
  },

  research: {
    design: {
      rct: "Ensayo aleatorizado",
      experiment: "Experimento",
      longitudinal: "Estudio a largo plazo",
      observational: "Estudio observacional",
    },
    study: "Estudio",
    guide: "Guía",
  },

  pitch: {
    title: "Oyno te da un juego así cada tarde",
    body: "Elige un juego para la edad de tu peque y la energía que te queda, pausa las apps que tú escojas mientras juegan y hace crecer el pequeño planeta de tu familia con cada ronda.",
    cta: "Empezar",
  },

  articles: {
    guide: {
      crumb: "Guías",
      title: "Guías para mamás y papás de niños de 0 a 5 años",
      intro: "Lecturas largas sobre cómo el juego construye la atención y el autocontrol, y sobre cómo soltar el celular. Cada afirmación lleva al estudio que la respalda.",
    },
    post: {
      crumb: "Blog",
      title: "El blog de Oyno",
      intro: "Lecturas cortas para papás cansados: juegos para hoy en la tarde, lo que dice la investigación y cómo recuperarle la tarde al celular.",
    },
    tryThese: "Prueba estos juegos",
    sources: "Fuentes",
    byline: (name) => `${name}, creador de Oyno`,
  },

  sources: {
    "cdc-guide": {
      says: {
        "0-1": "De 6 a 18 meses: juegos en las piernas con una sorpresa esperada, juegos de esconder, juegos de imitar y copiar, juegos de roles sencillos, juegos de manitas y plática sobre lo que el bebé nota.",
        "1-3": "De 18 a 36 meses: baile de congelados y canciones de parar y seguir, canciones con movimientos, Follow the Leader (sigue al líder), retos físicos, plática y cuentos con “¿qué vas a hacer después?”, hablar de sentimientos, emparejar y clasificar de broma, rompecabezas y juego imaginario que dirige el niño.",
        "3-5": "De 3 a 5 años: juego imaginario con un plan de juego, contar y actuar cuentos, lectura, moverse al ritmo y canciones con juego, circuitos de obstáculos y equilibrio, posturas de yoga con respiración lenta, bailar rápido y luego lento, baile de congelados, clasificar con un cambio de regla, bingo de opuestos, canciones que se van alargando, cocinar esperando y rompecabezas.",
      },
    },
    "cdc-guide-5-7": {
      says: {
        "3-5": "De 5 a 7 años: baile de congelados, las sillas musicales, Red Light Green Light (luz verde, luz roja), Mother May I, What Time Is It Mr Fox, el juego de la palabra mágica, Simon Says (Simón dice) y Do As I Say Not As I Do, juegos de copiar, llamada y respuesta, canciones que se van alargando, Packing for a Picnic, Concentration (memorama), ritmos con aplausos, yoga, Guess My Rule (adivina mi regla) e I Spy (veo, veo).",
      },
    },
    "brain-play": {
      says: {
        "0-1": "A los 6 y 9 meses: “¿dónde está? ¡aquí está!” y juegos de esconder, Trot Trot to Boston (arre, caballito), Pat-a-Cake (tortillitas), Dickory Dean, Baby See Baby Do, turnarse para tirar un juguete diciendo “¡pum!”, juegos de plática y juegos de manitas.",
        "1-3": "De 12 meses a 3 años: Toddler See Toddler Do, explorar entre cojines en el piso, teléfono y quehaceres de mentiritas, Dump and Fill (vaciar y llenar), escondidillas sencillas, el juego de memoria de los tres vasos, emparejar y clasificar, canciones con movimiento, baile de congelados, Follow the Leader (sigue al líder), contar, rompecabezas y Be the Narrator (sé el narrador).",
        "3-5": "De 4 a 7 años: baile de congelados con posturas, Simon Says (Simón dice), Red Light Green Light (luz verde, luz roja), Duck Duck Goose (pato, pato, ganso), What Time Is It Mr Fox, I Spy (veo, veo), Opposites Bingo (bingo de opuestos) y Continue the Story (sigue el cuento).",
      },
    },
    "serve-return": {
      says: {
        "0-1": "Fíjate cuando el niño “sirve” y comparte su foco, devuélvele con apoyo, nombra lo que ve o siente, túrnense y espera, y practica los finales y los comienzos, con el “¿dónde está? ¡aquí está!” como ejemplo.",
        "1-3": "Fíjate cuando el niño “sirve” y comparte su foco, devuélvele con apoyo, nombra lo que ve o siente, túrnense y espera, y practica los finales y los comienzos, con el “¿dónde está? ¡aquí está!” como ejemplo.",
      },
    },
    "aap-play": {
      says: {
        "0-1": "El juego crece desde la sonrisa social hacia el servir y devolver, el “¿dónde está? ¡aquí está!” y las tortillitas, y los pediatras recomiendan leer en voz alta junto con el juego desde el nacimiento.",
        "1-3": "Juego con objetos que se vuelve simbólico, habilidades motoras básicas, turnarse y andamiaje cuando un adulto gira una pieza del rompecabezas para ayudar.",
        "3-5": "Juego simbólico y juego social con reglas, juego físico y de luchitas, y juegos cuyas reglas negocian los niños.",
      },
    },
    "diamond-1985": {
      studied: "Bebés de 7½ a 12 meses, el primer mes de la etapa de niños pequeños, que recuperaban un juguete escondido bajo una de dos tapas tras una breve espera, la tarea A-no-B.",
    },
    "reznick-2004": {
      studied: "Bebés de 5½ a 6½ meses que encontraban un juguete tras una breve espera, la memoria de trabajo más temprana.",
    },
    "haith-1988": {
      studied: "Bebés de 3½ meses que aprendían una secuencia de imágenes a izquierda y derecha y miraban por adelantado adonde aparecería la siguiente imagen.",
    },
    "rochat-1999": {
      studied: "Bebés de 2 a 6 meses que reaccionaban cuando se alteraban el ritmo y la estructura del “¿dónde está? ¡aquí está!” y del balbuceo de ida y vuelta.",
    },
    "yu-smith-2016": {
      studied: "Niños de un año que mantenían la atención en un juguete por más tiempo cuando su mamá o su papá miraba y nombraba el mismo juguete.",
    },
    "cuevas-bell-2014": {
      studied: "La atención focalizada a los 5 meses predecía las funciones ejecutivas de los 24 a los 48 meses.",
    },
    "nakata-trehub-2004": {
      studied: "Bebés de 6 meses que ponían atención por más tiempo a su mamá cuando cantaba que cuando hablaba.",
    },
    "ross-lollis-1987": {
      studied: "Bebés de 9 a 18 meses en juegos por turnos como dar y recibir y “¿dónde está? ¡aquí está!”, que hacían señas cuando el adulto se saltaba un turno.",
    },
    "landry-2006": {
      studied: "Asesorar a mamás y papás en una crianza receptiva con bebés de 6 a 10 meses mejoró la atención de los bebés y su capacidad de resolver problemas por su cuenta.",
    },
    "bernier-2010": {
      studied: "Una plática sensible que toma en cuenta la mente del bebé y el apoyo a su autonomía a los 12 a 15 meses predijeron las funciones ejecutivas a los 18 y 26 meses.",
    },
    "mendelsohn-2018": {
      studied: "Asesorar a las familias en la lectura en voz alta y el juego simbólico desde el nacimiento hasta los 3 años redujo la hiperactividad y los problemas de atención a los 4½ años.",
    },
    "hughes-ensor-2005": {
      studied: "Niños de dos años en Spin the Pots, recordando qué ollitas ya se habían vaciado, y en un Baby Stroop, llamando bebé al vaso grande.",
    },
    "kochanska-2000": {
      studied: "Niños de 22 a 45 meses que esperaban un premio, caminaban despacio sobre una línea, susurraban, paraban y arrancaban con una señal y se turnaban para armar una torre.",
    },
    "vallotton-ayoub-2011": {
      studied: "El vocabulario y el habla de niños pequeños de los 14 a los 36 meses predecían el avance de su autorregulación.",
    },
    "hammond-2012": {
      studied: "El andamiaje de mamás y papás, la ayuda justa y el “¿qué sigue?”, durante un rompecabezas a los 2 a 3 años predijo las funciones ejecutivas a los 3 a 4 años.",
    },
    "williams-2015": {
      studied: "Cantar, bailar y jugar con música juntos en casa a los 2 a 3 años predijo la atención y la autorregulación a los 5.",
    },
    "carlson-2005": {
      studied: "Niños de 2 a 6 años en tareas graduadas por edad: esperar por un antojo y por un regalo, clasificar al revés, el oso y el dragón, Simón dice, susurrar, día y noche, menos es más.",
    },
    "zelazo-2006": {
      studied: "Niños de 3 a 5 años que clasificaban tarjetas por color y luego cambiaban a forma, la Dimensional Change Card Sort.",
    },
    "gerstadt-1994": {
      studied: "Niños de 3½ a 7 años que decían noche ante una tarjeta con un sol y día ante una tarjeta con una luna.",
    },
    "ponitz-2009": {
      studied: "Niños de 4 a 6 años que se tocaban los pies cuando les decían cabeza y la cabeza cuando les decían pies, lo que predecía sus resultados en el kínder.",
    },
    "tominey-mcclelland-2011": {
      studied: "Niños de preescolar de 3 a 5 años que jugaban en círculo a Red Light Purple Light, a congelados con reglas cambiadas, a golpes de tambor y a dirigir, mejoraron su autorregulación.",
    },
    "schmitt-2015": {
      studied: "Niños de preescolar de Head Start que jugaban a los juegos de Red Light Purple Light mejoraron su autorregulación y su preparación para la escuela.",
    },
    "thibodeau-2016": {
      studied: "Niños de 3 a 5 años con cinco semanas de juego simbólico fantástico mejoraron su memoria de trabajo y su inhibición.",
    },
    "elias-berk-2002": {
      studied: "El juego sociodramático complejo de niños de preescolar predijo su autorregulación posterior.",
    },
    "bugos-demarie-2017": {
      studied: "Niños de 4 a 6 años en un programa corto de música con canto, ritmo e instrumentos mejoraron sus funciones ejecutivas.",
    },
    "razza-2015": {
      studied: "Niños de preescolar que hacían yoga con atención plena, posturas sostenidas y respiración lenta, mejoraron su autorregulación.",
    },
    "schmitt-2018": {
      studied: "Niños de preescolar en juego semiestructurado con bloques, construyendo a partir de planos e imágenes, mejoraron sus funciones ejecutivas.",
    },
    "mulvey-2018": {
      studied: "Niños de preescolar en un programa de habilidades motoras de brincar en un pie, saltar, lanzar y atrapar mejoraron sus funciones ejecutivas.",
    },
    "thorell-2009": {
      studied: "Niños de 4 a 5 años entrenados en tareas de memoria de trabajo mejoraron en memoria de trabajo y atención no entrenadas.",
    },
    "lind-2017": {
      studied: "Asesorar a mamás y papás de niños de 6 a 21 meses para seguir la iniciativa del niño, responderle y disfrutarlo mejoró la flexibilidad mental a los 48 meses.",
    },
    "garon-2014": {
      studied: "Niños de 18 a 67 meses en una batería de tareas de memoria de trabajo, inhibición y cambio de regla que era sensible a las diferencias de edad.",
    },
    "tronick-1978": {
      studied: "Bebés de 1 a 4 meses cuyas mamás mantenían la cara quieta y sin respuesta se ponían recelosos y se retraían en cuestión de minutos, el experimento de la cara inmóvil (still face).",
    },
    "radesky-2014": {
      studied: "Unos investigadores observaron a 55 cuidadores que comían con niños pequeños en restaurantes de comida rápida; la mayoría usó el celular durante la comida, y los más absortos a menudo respondían tarde o con dureza cuando el niño buscaba su atención.",
    },
    "mcdaniel-radesky-2018": {
      studied: "Las mamás y los papás de niños pequeños que reportaron más interrupciones del celular durante el tiempo en familia también reportaron más problemas de conducta en su hijo.",
    },
    "myruski-2018": {
      studied: "Bebés de 7 a 24 meses se alteraban cuando su mamá se volteaba hacia el celular en una tarea de cara inmóvil, y aquellos cuyas mamás usaban más los dispositivos en casa se recuperaban menos.",
    },
    "kushlev-dunn-2019": {
      studied: "Las mamás y los papás en un museo de ciencias a quienes se les pidió usar mucho el celular se sintieron más distraídos y menos conectados con sus hijos que aquellos a quienes se les pidió usarlo poco.",
    },
    "andrews-2015": {
      studied: "Adultos jóvenes cuyos celulares registraban su uso los agarraban unas 85 veces al día y los usaban unas cinco horas, más o menos el doble de lo que calculaban.",
    },
    "mcdaniel-coyne-2016": {
      studied: "143 mujeres casadas o en unión libre dijeron en una encuesta que los dispositivos a menudo interrumpían el tiempo con su pareja, algo que los autores llamaron tecnoferencia, y las que reportaron más tecnoferencia reportaron más conflictos por la tecnología y menos satisfacción con su relación.",
    },
    "chotpitayasunondh-douglas-2016": {
      studied: "Un estudio sobre el phubbing, ignorar a alguien en una situación social por mirar el celular en lugar de platicar con esa persona, encontró que quienes más lo hacían, y a quienes más se lo hacían, lo veían como algo más normal.",
    },
    "reed-2017": {
      studied: "38 mamás les enseñaron dos palabras nuevas a sus hijos de 2 años, y los niños aprendieron la palabra enseñada sin pausas pero no la interrumpida por una llamada al celular, aunque cada palabra se dijo el mismo número de veces.",
    },
    "vanden-abeele-2020": {
      studied: "Unos investigadores observaron a 53 mamás y papás de niños de 0 a 5 años en salas de espera y parques: 23 usaron el celular, la probabilidad de responder cuando el niño buscaba su atención era cinco veces menor mientras lo usaban, una mirada rápida no hacía diferencia, y estar muy absortos en otras tareas tenía más o menos el mismo efecto.",
    },
    "radesky-2015": {
      studied: "En una tarea de laboratorio filmada con 225 mamás y sus hijos de 6 años, el 23% de las mamás usó un dispositivo móvil sin que se lo pidieran, y las que lo hicieron tuvieron menos interacciones con su hijo, sobre todo las no verbales.",
    },
    "mcdaniel-radesky-2018b": {
      studied: "183 parejas con un hijo de 0 a 5 años contestaron encuestas durante seis meses: una conducta más difícil del niño predijo más interferencia de la tecnología a través del estrés de crianza, y esa interferencia a menudo predijo más conductas de desafío después.",
    },
    "konrad-2021": {
      studied: "Mamás de niños de 20 a 22 meses que interrumpieron el juego dos minutos para llenar un cuestionario, en un celular o en papel, se volvieron menos receptivas, y sus hijos buscaron su atención más veces.",
    },
    "dwyer-2018": {
      studied: "Más de 300 personas que compartían una comida en un restaurante con amigos o familia, a quienes se les indicó al azar dejar el celular sobre la mesa o guardarlo, se sintieron más distraídas y disfrutaron menos la comida con el celular a la vista.",
    },
    "stothart-2015": {
      studied: "Las notificaciones del celular por sí solas, sin que nadie lo tocara, afectaron el desempeño en una tarea de atención casi tanto como contestar una llamada o mandar mensajes.",
    },
    "oulasvirta-2012": {
      studied: "Tres estudios con usuarios de smartphone encontraron un hábito de revisar, miradas breves y repetidas a contenido que está a un toque, que los usuarios sentían más como una molestia que como una adicción.",
    },
    "wood-2002": {
      studied: "En dos estudios de diario con reportes cada hora, las personas que hacían algo que hacían casi a diario en el mismo lugar solían pensar en otra cosa, y sentían menos estrés que al hacer cosas nuevas.",
    },
    "lally-2010": {
      studied: "Voluntarios que repitieron una nueva conducta diaria en el mismo contexto durante 12 semanas tardaron de 18 a 254 días en alcanzar su punto máximo de automaticidad, y faltar un día no lo afectó de forma importante.",
    },
    "fitz-2019": {
      studied: "237 personas fueron asignadas al azar a recibir las notificaciones del celular como siempre, agrupadas tres veces al día o nunca: el grupo agrupado se sintió más atento, de mejor humor, con más control sobre su celular y menos estresado, y el grupo sin notificaciones se sintió más ansioso.",
    },
  },
};
