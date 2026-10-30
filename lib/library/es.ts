import type { Age } from "@/lib/activities";
import type { LibraryCopy } from "./types";

const AGE_NOUN: Record<Age, string> = { "0-1": "bebés", "1-3": "niños pequeños", "3-5": "niños de 3 a 5 años" };

const AUDIENCE: Record<string, string> = {
  "0-1,1-3": "bebés y niños pequeños",
  "1-3,3-5": "niños de 1 a 5 años",
  "0-1,3-5": "bebés y niños de 3 a 5 años",
};

const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);

const isFeminine = (title: string) => /^(Rimas|Canciones)/.test(title);

const withArticle = (skill: string) => `${/(a|ad|ión)$/.test(skill.split(" ")[0]) ? "la" : "el"} ${skill}`;

export const es: LibraryCopy = {
  ageNoun: AGE_NOUN,
  ageRange: { "0-1": "0 a 12 meses", "1-3": "1 a 3 años", "3-5": "3 a 5 años" },
  energy: { low: "Poca energía", okay: "Energía media", full: "Mucha energía" },

  hubs: {
    age: {
      "0-1": {
        title: "Juegos para bebés de 0 a 12 meses",
        intro: "Juegos en el regazo, cucú-tras y las primeras charlas por turnos para el primer año. Cada uno dura de 5 a 15 minutos y encaja con una madre o un padre cansados.",
      },
      "1-3": {
        title: "Juegos para niños de 1 a 3 años",
        intro: "Juegos de estatuas, de esconder y encontrar y de imitar para peques de uno a tres años, de 5 a 15 minutos cada uno, ordenados según la energía que te queda.",
      },
      "3-5": {
        title: "Juegos para niños de 3 a 5 años",
        intro: "Juegos de reglas, de memoria y de imaginación que trabajan el autocontrol en peques de tres a cinco años, de 5 a 15 minutos cada uno.",
      },
    },
    energy: {
      low: {
        title: "Juegos de poca energía para padres cansados",
        intro: "Juegos para el final de un día largo, muchos sentados o tumbados. Tu peque se mueve y tú hablas.",
      },
      okay: {
        title: "Juegos fáciles para una tarde cualquiera",
        intro: "Juegos para cuando te queda algo de energía, pero no mucha: casi nada que preparar y de 5 a 15 minutos de juego.",
      },
      full: {
        title: "Juegos activos para cuando tienes energía",
        intro: "Juegos que os ponen en marcha a los dos: perseguirse, saltar, construir y echar carreras, de 5 a 15 minutos cada uno.",
      },
    },
    skill: {
      "working-memory": {
        title: "Juegos de memoria de trabajo",
        intro: "Juegos que piden a tu peque guardar algo en la cabeza y usarlo: dónde ha ido el juguete, qué viene después, qué palabra falta.",
      },
      "inhibitory-control": {
        title: "Juegos de autocontrol",
        intro: "Juegos para practicar parar, esperar y hacer lo contrario de lo que pide el cuerpo: las estatuas, juegos de esperar, Simón dice.",
      },
      "cognitive-flexibility": {
        title: "Juegos de flexibilidad mental",
        intro: "Juegos que cambian la regla a mitad: clasificar por color y luego por tamaño; grande significa pequeño; ahora mandas tú, ahora yo.",
      },
      attention: {
        title: "Juegos de atención",
        intro: "Juegos que mantienen la atención de tu peque en una cosa un poco más: un juguete que se mueve, un sonido suave, una página de un libro.",
      },
    },
    type: {
      peekaboo: { title: "Juegos de cucú-tras", what: "Una cara o un juguete desaparece y vuelve, y tu bebé aprende a esperarlo." },
      "hide-and-find": { title: "Juegos de esconder y encontrar", what: "Escondes un juguete mientras tu peque mira, y recuerda dónde ha ido." },
      "anticipation-rhyme": { title: "Rimas con sorpresa", what: "Una rima va subiendo hasta unas cosquillas o una pausa, y tu peque aprende a esperarla." },
      imitation: { title: "Juegos de imitar", what: "Tú imitas a tu peque y tu peque te imita a ti, un instante después." },
      "pretend-play": { title: "Juegos de imaginación", what: "Un vaso vacío se convierte en té y un osito vive un día entero, así que tu peque sostiene una historia en la cabeza." },
      "fingerplay-song": { title: "Juegos de manos y canciones con gestos", what: "Canciones con gestos de manos y paradas de golpe, cantadas lo bastante despacio para seguirlas." },
      conversation: { title: "Juegos de conversación", what: "Pones nombre a lo que tu peque mira y quiere, y le dejas hueco para responder." },
      "vocal-turns": { title: "Juegos de balbuceo por turnos", what: "Tu bebé y tú balbuceáis por turnos, como en una charla de verdad." },
      "joint-attention": { title: "Juegos de mirar y señalar", what: "Tu peque y tú miráis lo mismo, y sus ojos aprenden a seguir los tuyos." },
      "turn-taking": { title: "Juegos por turnos", what: "Un juguete o una pelota va y viene, y cada uno espera su turno." },
      building: { title: "Juegos de construcción", what: "Apilar, derribar y hacer túneles, paso a paso y con cuidado." },
      "stop-go": { title: "Juegos de parar y seguir", what: "Juegos de estatuas: te mueves con “ya” y te quedas clavado con “alto”." },
      tempo: { title: "Juegos de rápido y lento", what: "El mismo movimiento, rápido y luego lento, cuando tú das la señal." },
      "simon-says": { title: "Juegos de Simón dice", what: "Tócate la nariz, pero solo cuando la regla lo diga." },
      opposites: { title: "Juegos de contrarios", what: "Grande significa pequeño y día significa noche, así que tu peque dice lo contrario de lo que ve." },
      "sorting-switch": { title: "Juegos de clasificar", what: "Clasifica las cosas de una manera, cambia la regla y clasifícalas de otra." },
      "working-memory-list": { title: "Juegos de memoria", what: "Guarda en la cabeza una lista corta, en orden, y repítela." },
      waiting: { title: "Juegos de esperar", what: "Espera unos segundos a que llegue algo bueno, con un juego que ayuda a esperar." },
      "motor-control": { title: "Juegos a cámara lenta", what: "Movimientos lentos y cuidadosos con una regla: de puntillas, por la cuerda floja, con un solo dedo." },
      "motor-skill": { title: "Juegos de movimiento", what: "Saltar, gatear, lanzar y atrapar." },
      rhythm: { title: "Juegos de ritmo", what: "Marca un ritmo con palmas o golpecitos y repetidlo." },
      storytelling: { title: "Juegos de contar cuentos", what: "Contad un cuento juntos, en orden, con tu peque de protagonista." },
      reading: { title: "Juegos de lectura", what: "Un libro de imágenes con una misión: buscar, adivinar o pasar la página en el momento justo." },
      "quiet-focus": { title: "Juegos de calma y atención", what: "Quedarse quieto, escuchar y respirar, con una pequeña tarea para sostener la atención." },
      "rule-game": { title: "Juegos de reglas", what: "Juegos de siempre con una regla que recordar, como el escondite inglés." },
      planning: { title: "Juegos de planificar", what: "Primero pensar y luego hacer: apuntar, planear un recorrido, decir el plan en voz alta." },
      "quiet-voice": { title: "Juegos de susurros", what: "Susurrar, ir de puntillas y hablar bajito a propósito." },
    },
    tag: {
      "nothing-to-grab": "Juegos sin juguetes",
      "lying-down": "Juegos tumbados",
      sitting: "Juegos sentados",
      standing: "Juegos de pie",
      "on-your-lap": "Juegos en el regazo",
      quiet: "Juegos tranquilos",
      "one-room": "Juegos en una habitación",
      hallway: "Juegos en el pasillo",
      bedtime: "Juegos antes de dormir",
      mealtime: "Juegos a la hora de comer",
      bath: "Juegos a la hora del baño",
      "on-a-walk": "Juegos de paseo",
      "in-the-car": "Juegos en el coche",
      stairs: "Juegos en la escalera",
      window: "Juegos en la ventana",
      socks: "Juegos con calcetines",
      cushions: "Juegos con cojines",
      chairs: "Juegos con sillas",
      "a-cup": "Juegos con un vaso",
      "a-cloth": "Juegos con un pañuelo",
      "a-book": "Juegos con un libro",
      "a-mirror": "Juegos con un espejo",
      "a-ball": "Juegos con pelota",
      "a-toy": "Juegos con un solo juguete",
      stacking: "Juegos de apilar",
      crayons: "Juegos con ceras",
      lights: "Juegos con luces",
      music: "Juegos con música",
      singing: "Juegos de cantar",
    },
    audience: (ages) => {
      if (ages.length === 3) return "niños de 0 a 5 años";
      if (ages.length === 1) return AGE_NOUN[ages[0]];
      return AUDIENCE[ages.join(",")];
    },
    titleFor: (title, audience) => (title.includes(" para ") ? `${title}: ${audience}` : `${title} para ${audience}`),
    countLine: (count, title, audience) =>
      `${count} ${lowerFirst(title)} para ${audience}, de 5 a 15 minutos ${isFeminine(title) ? "cada una" : "cada uno"} y con tres pasos como máximo.`,
  },

  games: {
    crumb: "Juegos",
    title: "Juegos para bebés, niños pequeños y niños de 3 a 5 años",
    intro: (count) =>
      `${count} juegos para niños de 0 a 5 años, de 5 a 15 minutos cada uno y con tres pasos como máximo. Todos se apoyan en un estudio publicado y en una guía del Center on the Developing Child de Harvard o de la Academia Americana de Pediatría.`,
    sections: {
      age: "Por edad",
      energy: "Por la energía que te queda",
      skill: "Por la habilidad que trabaja",
      type: "Por tipo de juego",
      tag: "Por dónde estás y qué tienes a mano",
    },
    minutes: (minutes) => `${minutes} minutos`,
    minutesShort: (minutes) => `${minutes} min`,
    whyItWorks: "Por qué funciona",
    moreOf: (typeTitle) => `Más ${lowerFirst(typeTitle)}`,
    allOf: (typeTitle) => `${isFeminine(typeTitle) ? "Todas las" : "Todos los"} ${lowerFirst(typeTitle)}`,
    more: "Más juegos",
    researchBehind: "La investigación detrás de estos juegos",
    metaTitle: ({ title, minutes, age }) => `${title}: un juego de ${minutes} minutos para ${AGE_NOUN[age]}`,
    metaDescription: ({ blurb, steps, minutes, skills }) =>
      `${blurb} ${steps} ${steps === 1 ? "paso" : "pasos"}, ${minutes} minutos; trabaja ${new Intl.ListFormat("es").format(
        skills.map((skill) => withArticle(skill.toLowerCase())),
      )}.`,
  },

  research: {
    design: { rct: "Ensayo aleatorizado", experiment: "Experimento", longitudinal: "Estudio longitudinal", observational: "Estudio observacional" },
    study: "Estudio",
    guide: "Guía",
  },

  pitch: {
    title: "Oyno te reparte un juego así cada tarde",
    body: "Elige un juego para la edad de tu peque y la energía que te queda, pausa las apps que tú elijas mientras jugáis y hace crecer el pequeño planeta de tu familia con cada partida.",
    cta: "Empezar",
  },

  articles: {
    guide: {
      crumb: "Guías",
      title: "Guías para madres y padres de niños de 0 a 5 años",
      intro: "Lecturas largas sobre cómo el juego construye la atención y el autocontrol, y sobre cómo soltar el móvil. Cada afirmación enlaza al estudio que la respalda.",
    },
    post: {
      crumb: "Blog",
      title: "El blog de Oyno",
      intro: "Lecturas cortas para padres cansados: juegos para esta tarde, lo que dice la investigación y cómo recuperar la tarde que se lleva el móvil.",
    },
    tryThese: "Prueba estos juegos",
    sources: "Fuentes",
    byline: (name) => `${name}, creador de Oyno`,
  },

  sources: {
    "cdc-guide": {
      says: {
        "0-1": "De 6 a 18 meses: juegos en el regazo con una sorpresa esperada, juegos de esconder, juegos de imitar y copiar, juego de roles sencillo, juegos de dedos y conversación sobre lo que el bebé observa.",
        "1-3": "De 18 a 36 meses: bailar y quedarse como estatuas y canciones de empezar y parar, canciones con movimientos, Sigue al líder, retos físicos, conversación y cuentos con un “¿qué vas a hacer ahora?”, hablar de sentimientos, emparejar y clasificaciones disparatadas, puzles y juego de imaginación que dirige el niño.",
        "3-5": "De 3 a 5 años: juego de imaginación con plan de juego, contar cuentos y representarlos, lectura, moverse al ritmo y canciones con juego, circuitos de obstáculos y equilibrio, posturas de yoga con respiración lenta, bailar rápido y luego lento, las estatuas, clasificar cambiando la regla, bingo de contrarios, canciones que se van alargando, cocinar sabiendo esperar y puzles.",
      },
    },
    "cdc-guide-5-7": {
      says: {
        "3-5": "De 5 a 7 años: las estatuas, el juego de las sillas, Luz roja, luz verde (el escondite inglés), Mother May I, ¿Qué hora es, señor Lobo?, el juego de la palabra mágica, Simón dice y Haz lo que digo, no lo que hago, juegos de copiar, llamada y respuesta, canciones que se van alargando, Packing for a Picnic, el juego de las parejas, ritmos de palmas, yoga, Adivina mi regla y Veo, veo.",
      },
    },
    "brain-play": {
      says: {
        "0-1": "Para 6 y 9 meses: cucú-tras y juegos de esconder, Trot Trot to Boston, Palmas, palmitas, Dickory Dean, Baby See Baby Do, dejar caer un juguete por turnos con un “¡bum!”, juegos de conversación y juegos de dedos.",
        "1-3": "De 12 meses a 3 años: Toddler See Toddler Do, explorar por encima de cojines en el suelo, teléfono y tareas de casa de mentira, llenar y vaciar, un escondite sencillo, el juego de memoria de los tres vasos, emparejar y clasificar, canciones activas, las estatuas, Sigue al líder, contar, puzles y Hacer de narrador.",
        "3-5": "De 4 a 7 años: las estatuas con posturas, Simón dice, Luz roja, luz verde (el escondite inglés), el pañuelo (Duck Duck Goose), ¿Qué hora es, señor Lobo?, Veo, veo, bingo de contrarios y Sigue el cuento.",
      },
    },
    "serve-return": {
      says: {
        "0-1": "Fíjate en el saque y comparte el foco del niño, devuélvelo con apoyo, pon nombre a lo que ve o siente, turnaos y espera, y practica finales y comienzos, con el cucú-tras como ejemplo.",
        "1-3": "Fíjate en el saque y comparte el foco del niño, devuélvelo con apoyo, pon nombre a lo que ve o siente, turnaos y espera, y practica finales y comienzos, con el cucú-tras como ejemplo.",
      },
    },
    "aap-play": {
      says: {
        "0-1": "El juego crece desde la sonrisa social hasta el ida y vuelta, el cucú-tras y el palmas, palmitas, y los pediatras recomiendan leer en voz alta junto al juego desde el nacimiento.",
        "1-3": "Juego con objetos que se vuelve simbólico, habilidades motoras básicas, turnarse y andamiaje cuando un adulto gira una pieza del puzle para ayudar.",
        "3-5": "Juego social simbólico y con reglas, juego físico y de pelea en broma, y juegos cuyas reglas negocian los niños.",
      },
    },
    "diamond-1985": {
      studied: "Bebés de 7½ a 12 meses, el primer mes de la franja de niños pequeños, recuperando un juguete escondido bajo una de dos telas tras una breve espera, la tarea A-no-B.",
    },
    "reznick-2004": { studied: "Bebés de 5½ a 6½ meses encontrando un juguete tras una breve espera, la memoria de trabajo más temprana." },
    "haith-1988": {
      studied: "Bebés de 3½ meses aprendiendo una secuencia de imágenes a izquierda y derecha y mirando por adelantado dónde aparecería la siguiente.",
    },
    "rochat-1999": {
      studied: "Bebés de 2 a 6 meses reaccionando cuando se alteraban el ritmo y la estructura del cucú-tras y del balbuceo por turnos.",
    },
    "yu-smith-2016": {
      studied: "Niños de un año que mantenían la atención en un juguete durante más tiempo cuando el padre o la madre miraba y nombraba ese mismo juguete.",
    },
    "cuevas-bell-2014": { studied: "La atención focalizada a los 5 meses predecía la función ejecutiva entre los 24 y los 48 meses." },
    "nakata-trehub-2004": { studied: "Bebés de 6 meses que atendían más tiempo a su madre cuando cantaba que cuando hablaba." },
    "ross-lollis-1987": {
      studied: "Bebés de 9 a 18 meses en juegos por turnos como dar y tomar y el cucú-tras, que avisaban cuando el adulto se saltaba su turno.",
    },
    "landry-2006": {
      studied: "Enseñar a padres de bebés de 6 a 10 meses a responder con sensibilidad mejoró la atención de los bebés y su capacidad de resolver problemas por sí solos.",
    },
    "bernier-2010": {
      studied: "Una forma de hablar sensible y atenta a la mente del niño y el apoyo a su autonomía a los 12 a 15 meses predijeron la función ejecutiva a los 18 y 26 meses.",
    },
    "mendelsohn-2018": {
      studied: "Acompañar a las familias en la lectura en voz alta y el juego simbólico desde el nacimiento hasta los 3 años redujo la hiperactividad y los problemas de atención a los 4½.",
    },
    "hughes-ensor-2005": {
      studied: "Niños de dos años en Spin the Pots, recordando qué botes se habían vaciado, y en un Baby Stroop, llamando bebé al vaso grande.",
    },
    "kochanska-2000": {
      studied: "Niños de 22 a 45 meses esperando una golosina, caminando despacio por una línea, susurrando, parando y arrancando a una señal y turnándose en una torre.",
    },
    "vallotton-ayoub-2011": {
      studied: "El vocabulario y el habla de los niños pequeños entre los 14 y los 36 meses predecían el crecimiento de la autorregulación.",
    },
    "hammond-2012": {
      studied: "El andamiaje de los padres, la ayuda justa y el “¿y ahora qué?”, durante un puzle a los 2 a 3 años predijo la función ejecutiva a los 3 a 4.",
    },
    "williams-2015": {
      studied: "Cantar, bailar y jugar con música juntos en casa a los 2 a 3 años predijo la atención y la autorregulación a los 5.",
    },
    "carlson-2005": {
      studied: "Niños de 2 a 6 años en tareas graduadas por edad: esperar una golosina y un regalo, clasificar al revés, el oso y el dragón, Simón dice, susurrar, día y noche, menos es más.",
    },
    "zelazo-2006": {
      studied: "Niños de 3 a 5 años clasificando cartas por color y cambiando luego a forma, el Dimensional Change Card Sort.",
    },
    "gerstadt-1994": { studied: "Niños de 3½ a 7 años diciendo noche ante una carta con un sol y día ante una carta con una luna." },
    "ponitz-2009": {
      studied: "Niños de 4 a 6 años tocándose los pies cuando se les decía cabeza y la cabeza cuando se les decía pies, lo que predecía sus resultados en el primer curso escolar.",
    },
    "tominey-mcclelland-2011": {
      studied: "Niños de 3 a 5 años que jugaron a juegos en corro de Red Light Purple Light, estatuas con las reglas cambiadas, golpes de tambor y dirigir una orquesta mejoraron su autorregulación.",
    },
    "schmitt-2015": {
      studied: "Niños de Head Start que jugaron a los juegos de Red Light Purple Light mejoraron su autorregulación y su preparación para la escuela.",
    },
    "thibodeau-2016": {
      studied: "Niños de 3 a 5 años que pasaron cinco semanas en juego simbólico fantástico mejoraron su memoria de trabajo y su inhibición.",
    },
    "elias-berk-2002": { studied: "El juego sociodramático complejo de niños en edad preescolar predijo su autorregulación posterior." },
    "bugos-demarie-2017": {
      studied: "Niños de 4 a 6 años en un programa corto de música con canto, ritmo e instrumentos mejoraron su función ejecutiva.",
    },
    "razza-2015": {
      studied: "Niños en edad preescolar que practicaron yoga consciente, con posturas mantenidas y respiración lenta, mejoraron su autorregulación.",
    },
    "schmitt-2018": {
      studied: "Niños en edad preescolar en juego semiestructurado con bloques, construyendo a partir de planos e imágenes, mejoraron su función ejecutiva.",
    },
    "mulvey-2018": {
      studied: "Niños en edad preescolar en un programa de habilidades motoras de saltar a la pata coja, brincar, lanzar y atrapar mejoraron su función ejecutiva.",
    },
    "thorell-2009": {
      studied: "Niños de 4 a 5 años entrenados en tareas de memoria de trabajo mejoraron la memoria de trabajo no entrenada y la atención.",
    },
    "lind-2017": {
      studied: "Enseñar a padres de niños de 6 a 21 meses a seguir la iniciativa del niño, responder y disfrutar con él mejoró la flexibilidad mental a los 48 meses.",
    },
    "garon-2014": {
      studied: "Niños de 18 a 67 meses en una batería de tareas de memoria de trabajo, inhibición y cambio de foco que era sensible a las diferencias de edad.",
    },

    "tronick-1978": {
      studied: "Bebés de 1 a 4 meses cuyas madres mantenían la cara quieta, sin responder, se volvían recelosos y se retraían en cuestión de minutos, el experimento de la cara inmóvil (still face).",
    },
    "radesky-2014": {
      studied: "Los investigadores observaron a 55 adultos que comían con niños pequeños en restaurantes de comida rápida; la mayoría usó el móvil durante la comida, y los más absortos a menudo respondían a las llamadas del niño tarde o con brusquedad.",
    },
    "mcdaniel-radesky-2018": {
      studied: "Los padres de niños pequeños que decían que el móvil interrumpía más a menudo el tiempo en familia también decían que su hijo tenía más problemas de conducta.",
    },
    "myruski-2018": {
      studied: "Bebés de 7 a 24 meses se alteraban cuando su madre se volvía hacia el móvil en una tarea de cara inmóvil, y aquellos cuyas madres usaban más los dispositivos en casa se recuperaban menos.",
    },
    "kushlev-dunn-2019": {
      studied: "Los padres que, en un museo de ciencia, recibieron la indicación de usar mucho el móvil se sintieron más distraídos y menos conectados con sus hijos que los que recibieron la indicación de usarlo poco.",
    },
    "andrews-2015": {
      studied: "Jóvenes adultos cuyos móviles registraban su uso lo cogían unas 85 veces al día y lo usaban unas cinco horas, aproximadamente el doble de lo que calculaban.",
    },
    "mcdaniel-coyne-2016": {
      studied: "143 mujeres casadas o que convivían en pareja dijeron en una encuesta que los dispositivos interrumpían a menudo el tiempo con su pareja, algo que los autores llamaron tecnoferencia, y las que más lo sufrían decían tener más conflictos por la tecnología y menos satisfacción en la relación.",
    },
    "chotpitayasunondh-douglas-2016": {
      studied: "Un estudio sobre el phubbing, ignorar a alguien en una situación social por mirar el móvil en vez de hablarle, halló que quienes más lo hacían, y a quienes más se lo hacían, lo veían como algo más normal.",
    },
    "reed-2017": {
      studied: "38 madres enseñaron dos palabras nuevas a sus hijos de 2 años, y los niños aprendieron la palabra enseñada sin pausa, pero no la que interrumpió una llamada, aunque cada palabra se dijo el mismo número de veces.",
    },
    "vanden-abeele-2020": {
      studied: "Los investigadores observaron a 53 padres de niños de 0 a 5 años en salas de espera y parques: 23 usaron el móvil, la probabilidad de responder a una llamada del niño era cinco veces menor mientras lo usaban, un vistazo rápido no cambiaba nada y estar muy absorto en otras tareas tenía más o menos el mismo efecto.",
    },
    "radesky-2015": {
      studied: "En una tarea grabada en laboratorio con 225 madres y sus hijos de 6 años, el 23% de las madres usó un dispositivo móvil sin que nadie se lo pidiera, y las que lo hicieron interactuaron menos con su hijo, sobre todo de forma no verbal.",
    },
    "mcdaniel-radesky-2018b": {
      studied: "183 parejas con un hijo de 0 a 5 años respondieron encuestas durante seis meses: una conducta más difícil del niño predecía más interferencia de la tecnología a través del estrés de crianza, y esa interferencia a menudo predecía más conductas disruptivas después.",
    },
    "konrad-2021": {
      studied: "Las madres de niños de 20 a 22 meses que interrumpieron el juego durante dos minutos para rellenar un cuestionario, en el móvil o en papel, respondieron menos, y sus hijos reclamaron su atención más veces.",
    },
    "dwyer-2018": {
      studied: "Más de 300 personas que compartían una comida en un restaurante con amigos o familia, a las que se indicó al azar que dejaran el móvil sobre la mesa o lo guardaran, se sintieron más distraídas y disfrutaron menos de la comida con el móvil a la vista.",
    },
    "stothart-2015": {
      studied: "Las notificaciones del móvil por sí solas, sin que nadie lo tocara, empeoraron el rendimiento en una tarea de atención casi tanto como atender una llamada o escribir un mensaje.",
    },
    "oulasvirta-2012": {
      studied: "Tres estudios con usuarios de smartphone encontraron un hábito de comprobación, vistazos breves y repetidos a contenidos a los que se llega rápido, que los usuarios vivían más como una molestia que como una adicción.",
    },
    "wood-2002": {
      studied: "En dos estudios de diario con anotaciones cada hora, las personas que hacían algo que hacían casi a diario y en el mismo entorno solían pensar en otra cosa, y sentían menos estrés que con acciones nuevas.",
    },
    "lally-2010": {
      studied: "Voluntarios que repitieron una conducta diaria nueva en el mismo contexto durante 12 semanas tardaron entre 18 y 254 días en alcanzar su máximo de automatismo, y saltarse un día no lo afectó de forma apreciable.",
    },
    "fitz-2019": {
      studied: "237 personas recibieron al azar las notificaciones del móvil como siempre, agrupadas tres veces al día o nunca: el grupo de notificaciones agrupadas se sintió más atento, de mejor humor, con más control sobre el móvil y menos estresado, y el grupo sin notificaciones se sintió más ansioso.",
    },
  },
};
