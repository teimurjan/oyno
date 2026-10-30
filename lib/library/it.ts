import { AGES, type Age } from "@/lib/activities";
import type { LibraryCopy } from "./types";

const AGE_NOUN: Record<Age, string> = {
  "0-1": "neonati",
  "1-3": "bambini piccoli",
  "3-5": "bambini in età prescolare",
};

const YEARS: Record<Age, [number, number]> = { "0-1": [0, 1], "1-3": [1, 3], "3-5": [3, 5] };

const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);
const list = (items: readonly string[]) => new Intl.ListFormat("it").format(items);

/** One band reads as its noun, neighbouring bands as one span of years. */
const audience = (ages: readonly Age[]) => {
  if (ages.length === 1 && ages[0] === "0-1") return AGE_NOUN["0-1"];
  const contiguous = ages.every((age, index) => index === 0 || AGES.indexOf(age) === AGES.indexOf(ages[index - 1]) + 1);
  if (!contiguous) return list(ages.map((age) => AGE_NOUN[age]));
  return `bambini da ${YEARS[ages[0]][0]} a ${YEARS[ages[ages.length - 1]][1]} anni`;
};

/** "la memoria di lavoro", "l’autocontrollo". */
const withArticle = (skill: string) => {
  const word = skill.toLowerCase();
  return /^[aeiou]/.test(word) ? `l’${word}` : `la ${word}`;
};

export const it: LibraryCopy = {
  ageNoun: AGE_NOUN,
  ageRange: { "0-1": "da 0 a 12 mesi", "1-3": "da 1 a 3 anni", "3-5": "da 3 a 5 anni" },
  energy: { low: "Batteria bassa", okay: "Batteria media", full: "Batteria carica" },

  hubs: {
    age: {
      "0-1": {
        title: "Giochi per neonati da 0 a 12 mesi",
        intro: "Giochi in braccio, cucù e i primi botta e risposta per il primo anno. Ognuno dura da 5 a 15 minuti e va bene anche per un genitore stanco.",
      },
      "1-3": {
        title: "Giochi per bambini da 1 a 3 anni",
        intro: "Statuine, nascondi e trova e giochi di imitazione per bambini da uno a tre anni, da 5 a 15 minuti l’uno, divisi per l’energia che ti resta.",
      },
      "3-5": {
        title: "Giochi per bambini da 3 a 5 anni",
        intro: "Giochi con le regole, giochi di memoria e giochi del far finta che allenano l’autocontrollo nei bambini da tre a cinque anni, da 5 a 15 minuti l’uno.",
      },
    },
    energy: {
      low: {
        title: "Giochi a batteria bassa",
        intro: "Giochi per la fine di una lunga giornata, molti da fare seduti o sdraiati. Il tuo bambino si muove, tu parli.",
      },
      okay: {
        title: "Giochi a batteria media",
        intro: "Giochi per quando ti resta un po’ di energia, ma non molta: quasi niente da preparare e da 5 a 15 minuti di gioco.",
      },
      full: {
        title: "Giochi a batteria carica",
        intro: "Giochi che fanno muovere tutti e due: rincorrersi, saltare, costruire e fare gare, da 5 a 15 minuti l’uno.",
      },
    },
    skill: {
      "working-memory": {
        title: "Giochi di memoria di lavoro",
        intro: "Giochi in cui il tuo bambino deve tenere a mente qualcosa e usarlo: dov’è finito il giocattolo, cosa viene dopo, quale parola manca.",
      },
      "inhibitory-control": {
        title: "Giochi di autocontrollo",
        intro: "Giochi per allenarsi a fermarsi, aspettare e fare il contrario di quello che il corpo vorrebbe: statuine, giochi di attesa, Simon dice.",
      },
      "cognitive-flexibility": {
        title: "Giochi di flessibilità mentale",
        intro: "Giochi che cambiano regola a metà: dividi per colore, poi per grandezza; grande vuol dire piccolo; ora guidi tu, ora guido io.",
      },
      attention: {
        title: "Giochi di concentrazione",
        intro: "Giochi che tengono l’attenzione del tuo bambino su una cosa sola un po’ più a lungo: un giocattolo che si muove, un suono leggero, una pagina di un libro.",
      },
    },
    type: {
      peekaboo: { title: "Giochi del cucù", what: "Un viso o un giocattolo sparisce e ricompare, e il tuo bambino impara ad aspettarselo." },
      "hide-and-find": { title: "Giochi di nascondi e trova", what: "Nascondi un giocattolo mentre il tuo bambino guarda, e lui si ricorda dov’è finito." },
      "anticipation-rhyme": { title: "Giochi con filastrocche a sorpresa", what: "Una filastrocca porta a un solletico o a una pausa, e il tuo bambino impara ad aspettarla." },
      imitation: { title: "Giochi di imitazione", what: "Tu imiti il tuo bambino e lui imita te, un attimo dopo." },
      "pretend-play": { title: "Giochi del far finta", what: "Una tazza vuota diventa tè e un orsetto vive un’intera giornata, così il tuo bambino tiene a mente una storia." },
      "fingerplay-song": { title: "Giochi con le dita e canzoni mimate", what: "Canzoni con gesti delle mani e stop improvvisi, cantate abbastanza piano da poterle seguire." },
      conversation: { title: "Giochi di conversazione", what: "Dai un nome a ciò che il tuo bambino guarda e vuole, e gli lasci spazio per rispondere." },
      "vocal-turns": { title: "Giochi di versetti a turno", what: "Tu e il tuo bambino fate a turno con i versetti, come in una vera chiacchierata." },
      "joint-attention": { title: "Giochi di guarda e indica", what: "Tu e il tuo bambino guardate la stessa cosa, e i suoi occhi imparano a seguire i tuoi." },
      "turn-taking": { title: "Giochi a turno", what: "Un giocattolo o una palla passa avanti e indietro, e ognuno aspetta il suo turno." },
      building: { title: "Giochi di costruzioni", what: "Impilare, far cadere e costruire gallerie, un passo attento alla volta." },
      "stop-go": { title: "Giochi di via e stop", what: "Giochi delle statuine: ci si muove al via e ci si blocca allo stop." },
      tempo: { title: "Giochi veloce e lento", what: "Lo stesso movimento, prima veloce e poi lento, al tuo segnale." },
      "simon-says": { title: "Giochi di Simon dice", what: "Toccati il naso, ma solo quando lo dice la regola." },
      opposites: { title: "Giochi dei contrari", what: "Grande vuol dire piccolo e giorno vuol dire notte, così il tuo bambino dice il contrario di ciò che vede." },
      "sorting-switch": { title: "Giochi di classificazione", what: "Dividi le cose in un modo, poi cambia regola e dividile in un altro." },
      "working-memory-list": { title: "Giochi di memoria", what: "Tenere a mente una breve lista, in ordine, e ripeterla." },
      waiting: { title: "Giochi di attesa", what: "Aspettare qualche secondo qualcosa di bello, con un gioco che aiuta ad aspettare." },
      "motor-control": { title: "Giochi al rallentatore", what: "Movimenti lenti e attenti con una regola: in punta di piedi, sul filo, con un dito solo." },
      "motor-skill": { title: "Giochi di movimento", what: "Saltare, gattonare, lanciare e prendere." },
      rhythm: { title: "Giochi di ritmo", what: "Battere un ritmo con le mani o con le dita e ripeterlo." },
      storytelling: { title: "Giochi di storie", what: "Raccontare una storia insieme, in ordine, con il tuo bambino come protagonista." },
      reading: { title: "Giochi con i libri", what: "Un albo illustrato con un compito: trovare, indovinare o girare pagina al momento giusto." },
      "quiet-focus": { title: "Giochi di calma e concentrazione", what: "Stare fermi, ascoltare e respirare, con un piccolo compito che tiene viva l’attenzione." },
      "rule-game": { title: "Giochi con le regole", what: "Giochi classici con una regola da ricordare, come Un, due, tre, stella!" },
      planning: { title: "Giochi di pianificazione", what: "Prima pensi, poi fai: mirare, scegliere un percorso, dire il piano ad alta voce." },
      "quiet-voice": { title: "Giochi sottovoce", what: "Sussurrare, camminare in punta di piedi e tenere la voce piccola apposta." },
    },
    tag: {
      "nothing-to-grab": "Giochi senza giocattoli",
      "lying-down": "Giochi da fare sdraiati",
      sitting: "Giochi da fare seduti",
      standing: "Giochi da fare in piedi",
      "on-your-lap": "Giochi in braccio",
      quiet: "Giochi tranquilli",
      "one-room": "Giochi in una sola stanza",
      hallway: "Giochi in corridoio",
      bedtime: "Giochi prima della nanna",
      mealtime: "Giochi a tavola",
      bath: "Giochi nel bagnetto",
      "on-a-walk": "Giochi da fare a passeggio",
      "in-the-car": "Giochi in macchina",
      stairs: "Giochi sulle scale",
      window: "Giochi alla finestra",
      socks: "Giochi con i calzini",
      cushions: "Giochi con i cuscini",
      chairs: "Giochi con le sedie",
      "a-cup": "Giochi con una tazza",
      "a-cloth": "Giochi con un panno",
      "a-book": "Giochi con un libro",
      "a-mirror": "Giochi con lo specchio",
      "a-ball": "Giochi con la palla",
      "a-toy": "Giochi con un giocattolo",
      stacking: "Giochi di impilare",
      crayons: "Giochi con i pastelli",
      lights: "Giochi con le luci",
      music: "Giochi con la musica",
      singing: "Giochi cantati",
    },
    audience,
    titleFor: (title, audience) => `${title} per ${audience}`,
    countLine: (count, title, audience) =>
      `${count} ${lowerFirst(title)} per ${audience}: da 5 a 15 minuti e al massimo tre passi.`,
  },

  games: {
    crumb: "Giochi",
    title: "Giochi da fare con neonati e bambini da 1 a 5 anni",
    intro: (count) =>
      `${count} giochi per bambini da 0 a 5 anni, ognuno da 5 a 15 minuti con al massimo tre passi. Ognuno si basa su uno studio pubblicato e su una guida del Center on the Developing Child di Harvard o dell’American Academy of Pediatrics.`,
    sections: {
      age: "Per età",
      energy: "Per l’energia che ti resta",
      skill: "Per l’abilità che allena",
      type: "Per tipo di gioco",
      tag: "Per dove sei e cosa hai",
    },
    minutes: (minutes) => `${minutes} minuti`,
    minutesShort: (minutes) => `${minutes} min`,
    whyItWorks: "Perché funziona",
    moreOf: (typeTitle) => `Altri ${lowerFirst(typeTitle)}`,
    allOf: (typeTitle) => `Tutti i ${lowerFirst(typeTitle)}`,
    more: "Altri giochi",
    researchBehind: "La ricerca dietro questi giochi",
    metaTitle: ({ title, minutes, age }) => `${title}: un gioco di ${minutes} minuti per ${AGE_NOUN[age]}`,
    metaDescription: ({ blurb, steps, minutes, skills }) =>
      `${blurb} ${steps === 1 ? "1 passo" : `${steps} passi`}, ${minutes} minuti, allena ${list(skills.map(withArticle))}.`,
  },

  research: {
    design: { rct: "Studio randomizzato", experiment: "Esperimento", longitudinal: "Studio longitudinale", observational: "Studio osservazionale" },
    study: "Studio",
    guide: "Guida",
  },

  pitch: {
    title: "Oyno ti propone un gioco così ogni sera",
    body: "Sceglie un gioco adatto all’età del tuo bambino e all’energia che ti resta, mette in pausa le app che scegli mentre giocate e fa crescere il piccolo pianeta della tua famiglia a ogni partita.",
    cta: "Inizia",
  },

  articles: {
    guide: {
      crumb: "Guide",
      title: "Guide per genitori di bambini da 0 a 5 anni",
      intro: "Letture lunghe su come il gioco allena la concentrazione e l’autocontrollo, e su come mettere giù il telefono. Ogni affermazione rimanda allo studio su cui si basa.",
    },
    post: {
      crumb: "Blog",
      title: "Il blog di Oyno",
      intro: "Letture brevi per genitori stanchi: giochi per stasera, cosa dice la ricerca e come riprendersi la serata dal telefono.",
    },
    tryThese: "Prova questi giochi",
    sources: "Fonti",
    byline: (name) => `${name}, creatore di Oyno`,
  },

  sources: {
    "cdc-guide": {
      says: {
        "0-1": "Dai 6 ai 18 mesi: giochi in braccio con una sorpresa attesa, giochi del nascondere, giochi di imitazione e di copia, semplici giochi di ruolo, giochi con le dita e conversazione su ciò che il bambino nota.",
        "1-3": "Dai 18 ai 36 mesi: ballo delle statuine e canzoni da fermare e riprendere, canzoni con i movimenti, Follow the Leader (segui il capo), sfide fisiche, conversazione e racconti con un “e adesso cosa fai?”, parlare delle emozioni, abbinamenti e classificazioni buffe, puzzle e giochi di fantasia guidati dal bambino.",
        "3-5": "Dai 3 ai 5 anni: giochi di fantasia con un piano di gioco, racconti e storie recitate, lettura, movimento a ritmo e canzoni gioco, percorsi a ostacoli ed equilibrio, posizioni di yoga con respiro lento, ballare veloce e poi lento, ballo delle statuine, classificazione con cambio di regola, tombola dei contrari, canzoni cumulative, cucinare imparando ad aspettare e puzzle.",
      },
    },
    "cdc-guide-5-7": {
      says: {
        "3-5": "Dai 5 ai 7 anni: ballo delle statuine, gioco della sedia, Red Light Green Light (Un, due, tre, stella!), Mother May I (Regina reginella), What Time Is It Mr Fox (Lupo, che ore sono?), il gioco della parola magica, Simon dice e Do As I Say Not As I Do, giochi di imitazione, botta e risposta, canzoni cumulative, Packing for a Picnic, Concentration (Memory), ritmi battuti con le mani, yoga, Guess My Rule e I Spy (Vedo vedo).",
      },
    },
    "brain-play": {
      says: {
        "0-1": "A 6 e a 9 mesi: cucù e giochi del nascondere, Trot Trot to Boston (arri arri cavallino), Pat-a-Cake (batti batti le manine), Dickory Dean, Baby See Baby Do, far cadere a turno un giocattolo con un “bum”, giochi di conversazione e giochi con le dita.",
        "1-3": "Dai 12 mesi ai 3 anni: Toddler See Toddler Do, esplorare sopra i cuscini sul pavimento, telefono e faccende per finta, Dump and Fill (svuota e riempi), un semplice nascondino, il gioco di memoria dei tre bicchieri, abbinare e classificare, canzoni di movimento, ballo delle statuine, Follow the Leader, contare, puzzle e Be the Narrator (fai il narratore).",
        "3-5": "Dai 4 ai 7 anni: ballo delle statuine con le posizioni, Simon dice, Red Light Green Light (Un, due, tre, stella!), Duck Duck Goose, What Time Is It Mr Fox (Lupo, che ore sono?), I Spy (Vedo vedo), Opposites Bingo (tombola dei contrari) e Continue the Story (continua la storia).",
      },
    },
    "serve-return": {
      says: {
        "0-1": "Nota il “servizio” e condividi l’attenzione del bambino, rispondi dandogli sostegno, dai un nome a ciò che vede o sente, fate a turno e aspetta, ed esercitatevi con le fini e gli inizi, con il cucù come esempio.",
        "1-3": "Nota il “servizio” e condividi l’attenzione del bambino, rispondi dandogli sostegno, dai un nome a ciò che vede o sente, fate a turno e aspetta, ed esercitatevi con le fini e gli inizi, con il cucù come esempio.",
      },
    },
    "aap-play": {
      says: {
        "0-1": "Il gioco cresce dal sorriso sociale fino al botta e risposta, al cucù e a batti batti le manine, e i pediatri incoraggiano la lettura ad alta voce accanto al gioco fin dalla nascita.",
        "1-3": "Gioco con gli oggetti che diventa simbolico, abilità motorie di base, fare a turno e il sostegno di un adulto che gira un pezzo del puzzle per aiutare.",
        "3-5": "Gioco sociale di finzione e con le regole, gioco fisico e lotta per gioco, e giochi le cui regole i bambini negoziano tra loro.",
      },
    },
    "diamond-1985": {
      studied: "Bambini da 7 mesi e mezzo a 12 mesi, il primo mese della fascia dei bambini piccoli, che ritrovano un giocattolo nascosto sotto una di due coperture dopo una breve attesa, il compito A-non-B.",
    },
    "reznick-2004": {
      studied: "Bambini da 5 mesi e mezzo a 6 mesi e mezzo che ritrovano un giocattolo dopo una breve attesa, la prima memoria di lavoro.",
    },
    "haith-1988": {
      studied: "Bambini di 3 mesi e mezzo che imparano una sequenza di immagini a sinistra e a destra e guardano in anticipo dove apparirà l’immagine successiva.",
    },
    "rochat-1999": {
      studied: "Bambini da 2 a 6 mesi che reagiscono quando il ritmo e la struttura del cucù e dei versetti a turno vengono interrotti.",
    },
    "yu-smith-2016": {
      studied: "Bambini di un anno che mantengono più a lungo l’attenzione su un giocattolo quando il genitore guarda e nomina lo stesso giocattolo.",
    },
    "cuevas-bell-2014": {
      studied: "L’attenzione focalizzata a 5 mesi predice le funzioni esecutive tra i 24 e i 48 mesi.",
    },
    "nakata-trehub-2004": {
      studied: "Bambini di 6 mesi che prestano attenzione più a lungo alla mamma che canta che alla mamma che parla.",
    },
    "ross-lollis-1987": {
      studied: "Bambini da 9 a 18 mesi in giochi a turno come dare e prendere e il cucù, che segnalano quando l’adulto salta il proprio turno.",
    },
    "landry-2006": {
      studied: "Un percorso di sostegno a una genitorialità responsiva con bambini da 6 a 10 mesi ha migliorato l’attenzione dei piccoli e la loro capacità di risolvere problemi da soli.",
    },
    "bernier-2010": {
      studied: "Un modo di parlare sensibile e attento alla mente del bambino e il sostegno alla sua autonomia tra i 12 e i 15 mesi hanno predetto le funzioni esecutive a 18 e a 26 mesi.",
    },
    "mendelsohn-2018": {
      studied: "Un percorso di sostegno alla lettura ad alta voce e al gioco del far finta dalla nascita ai 3 anni ha ridotto iperattività e problemi di attenzione a 4 anni e mezzo.",
    },
    "hughes-ensor-2005": {
      studied: "Bambini di due anni alle prese con Spin the Pots, ricordando quali vasetti erano stati svuotati, e con un Baby Stroop, chiamando bebè il bicchiere grande.",
    },
    "kochanska-2000": {
      studied: "Bambini da 22 a 45 mesi che aspettano un dolcetto, camminano piano su una linea, sussurrano, si fermano e ripartono a un segnale e fanno a turno su una torre.",
    },
    "vallotton-ayoub-2011": {
      studied: "Il vocabolario e il linguaggio dei bambini tra i 14 e i 36 mesi predicono la crescita dell’autoregolazione.",
    },
    "hammond-2012": {
      studied: "Il sostegno dei genitori durante un puzzle a 2-3 anni, quanto basta per aiutare e un “e adesso?”, ha predetto le funzioni esecutive a 3-4 anni.",
    },
    "williams-2015": {
      studied: "Cantare, ballare e fare giochi musicali insieme a casa a 2-3 anni ha predetto l’attenzione e l’autoregolazione a 5 anni.",
    },
    "carlson-2005": {
      studied: "Bambini da 2 a 6 anni in compiti graduati per età: attesa per lo spuntino e per il regalo, classificazione inversa, orso e drago, Simon dice, sussurro, giorno e notte, meno è più.",
    },
    "zelazo-2006": {
      studied: "Bambini da 3 a 5 anni che dividono le carte per colore e poi passano alla forma, il Dimensional Change Card Sort.",
    },
    "gerstadt-1994": {
      studied: "Bambini da 3 anni e mezzo a 7 anni che dicono notte davanti a una carta con il sole e giorno davanti a una carta con la luna.",
    },
    "ponitz-2009": {
      studied: "Bambini da 4 a 6 anni che si toccano i piedi quando sentono testa e la testa quando sentono piedi, un compito che predice i risultati alla scuola dell’infanzia.",
    },
    "tominey-mcclelland-2011": {
      studied: "Bambini in età prescolare da 3 a 5 anni che giocano a Red Light Purple Light in cerchio, alle statuine con le regole scambiate, al ritmo del tamburo e a fare il direttore d’orchestra hanno migliorato l’autoregolazione.",
    },
    "schmitt-2015": {
      studied: "Bambini in età prescolare di Head Start che giocano ai giochi di Red Light Purple Light hanno migliorato l’autoregolazione e la preparazione alla scuola.",
    },
    "thibodeau-2016": {
      studied: "Bambini da 3 a 5 anni che hanno fatto cinque settimane di gioco del far finta fantastico hanno migliorato la memoria di lavoro e l’inibizione.",
    },
    "elias-berk-2002": {
      studied: "Il gioco sociodrammatico complesso dei bambini in età prescolare ha predetto la loro autoregolazione più avanti.",
    },
    "bugos-demarie-2017": {
      studied: "Bambini da 4 a 6 anni in un breve programma musicale di canto, ritmo e strumenti hanno migliorato le funzioni esecutive.",
    },
    "razza-2015": {
      studied: "Bambini in età prescolare che fanno yoga consapevole, con posizioni mantenute e respiro lento, hanno migliorato l’autoregolazione.",
    },
    "schmitt-2018": {
      studied: "Bambini in età prescolare in un gioco con i blocchi semi-strutturato, costruendo da progetti e immagini, hanno migliorato le funzioni esecutive.",
    },
    "mulvey-2018": {
      studied: "Bambini in età prescolare in un programma di abilità motorie fatto di saltelli, salti, lanci e prese hanno migliorato le funzioni esecutive.",
    },
    "thorell-2009": {
      studied: "Bambini da 4 a 5 anni allenati con compiti di memoria di lavoro hanno migliorato la memoria di lavoro non allenata e l’attenzione.",
    },
    "lind-2017": {
      studied: "Insegnare ai genitori di bambini da 6 a 21 mesi a seguire il bambino, a rispondergli e a godersi il momento ha migliorato la flessibilità mentale a 48 mesi.",
    },
    "garon-2014": {
      studied: "Bambini da 18 a 67 mesi in una serie di compiti di memoria di lavoro, inibizione e cambio di regola che coglieva le differenze di età.",
    },
    "tronick-1978": {
      studied: "Bambini da 1 a 4 mesi le cui mamme tenevano un viso immobile e senza reazioni diventavano diffidenti e si chiudevano nel giro di pochi minuti, l’esperimento dello still face.",
    },
    "radesky-2014": {
      studied: "I ricercatori hanno osservato 55 adulti che mangiavano con bambini piccoli in fast food; la maggior parte usava il telefono durante il pasto, e i più assorbiti spesso rispondevano ai richiami del bambino in ritardo o con durezza.",
    },
    "mcdaniel-radesky-2018": {
      studied: "I genitori di bambini piccoli che riferivano più interruzioni dovute al telefono durante il tempo in famiglia riferivano anche più problemi di comportamento nel loro bambino.",
    },
    "myruski-2018": {
      studied: "Bambini da 7 a 24 mesi si agitavano quando la mamma si girava verso il telefono in un compito di still face, e quelli le cui mamme usavano di più i dispositivi a casa si riprendevano meno.",
    },
    "kushlev-dunn-2019": {
      studied: "I genitori in un museo della scienza a cui era stato chiesto di usare molto il telefono si sentivano più distratti e meno in sintonia con i figli rispetto a quelli a cui era stato chiesto di usarlo poco.",
    },
    "andrews-2015": {
      studied: "Giovani adulti il cui telefono registrava l’uso lo prendevano in mano circa 85 volte al giorno e lo usavano per circa cinque ore, più o meno il doppio di quanto stimavano.",
    },
    "mcdaniel-coyne-2016": {
      studied: "143 donne sposate o conviventi hanno riferito in un sondaggio che i dispositivi interrompevano spesso il tempo con il partner, cosa che gli autori hanno chiamato technoference, e quelle che ne riferivano di più riferivano più conflitti sulla tecnologia e una minore soddisfazione di coppia.",
    },
    "chotpitayasunondh-douglas-2016": {
      studied: "Uno studio sul phubbing, ignorare qualcuno in compagnia guardando il telefono invece di parlargli, ha trovato che chi faceva più phubbing, e chi ne subiva di più, lo considerava più normale.",
    },
    "reed-2017": {
      studied: "38 mamme hanno insegnato due parole nuove ai loro bambini di 2 anni, e i bambini hanno imparato la parola insegnata senza pause ma non quella interrotta da una telefonata, anche se ogni parola era stata detta lo stesso numero di volte.",
    },
    "vanden-abeele-2020": {
      studied: "I ricercatori hanno osservato 53 genitori di bambini da 0 a 5 anni in sale d’attesa e parchi giochi: 23 usavano il telefono, mentre lo usavano la probabilità di rispondere a un richiamo del bambino era cinque volte più bassa, un’occhiata veloce non faceva differenza, e l’essere molto assorbiti in altre attività aveva più o meno lo stesso effetto.",
    },
    "radesky-2015": {
      studied: "In un compito filmato in laboratorio con 225 mamme e i loro bambini di 6 anni, il 23% delle mamme ha usato un dispositivo mobile senza che fosse loro chiesto, e chi lo ha fatto ha avuto meno interazioni con il bambino, soprattutto non verbali.",
    },
    "mcdaniel-radesky-2018b": {
      studied: "183 coppie con un figlio da 0 a 5 anni hanno risposto a questionari per sei mesi: un comportamento più difficile del bambino prediceva più interferenze della tecnologia attraverso lo stress dei genitori, e quelle interferenze spesso predicevano più comportamenti oppositivi in seguito.",
    },
    "konrad-2021": {
      studied: "Mamme di bambini da 20 a 22 mesi che interrompevano il gioco per due minuti per compilare un questionario, sullo smartphone o su carta, diventavano meno reattive, e i loro bambini cercavano di più la loro attenzione.",
    },
    "dwyer-2018": {
      studied: "Più di 300 persone a cena al ristorante con amici o familiari, a cui era stato detto a caso di tenere il telefono sul tavolo o di metterlo via, si sentivano più distratte e si godevano meno il pasto con il telefono in vista.",
    },
    "stothart-2015": {
      studied: "Le sole notifiche del telefono, senza che nessuno lo toccasse, disturbavano la prestazione in un compito di attenzione più o meno quanto rispondere a una chiamata o scrivere un messaggio.",
    },
    "oulasvirta-2012": {
      studied: "Tre studi su utenti di smartphone hanno trovato un’abitudine al controllo, brevi occhiate ripetute a contenuti rapidi da raggiungere, che gli utenti vivevano più come un fastidio che come una dipendenza.",
    },
    "wood-2002": {
      studied: "In due studi con diari compilati ogni ora, le persone che facevano qualcosa che facevano quasi ogni giorno nello stesso contesto tendevano a pensare ad altro, e sentivano meno stress che durante azioni nuove.",
    },
    "lally-2010": {
      studied: "Volontari che hanno ripetuto un nuovo comportamento quotidiano nello stesso contesto per 12 settimane hanno impiegato da 18 a 254 giorni per raggiungere il massimo dell’automatismo, e saltare un giorno non lo ha compromesso in modo rilevante.",
    },
    "fitz-2019": {
      studied: "237 persone sono state assegnate a caso a ricevere le notifiche come al solito, raggruppate tre volte al giorno o mai: il gruppo con le notifiche raggruppate si sentiva più attento, di umore migliore, più padrone del telefono e meno stressato, e il gruppo senza notifiche si sentiva più ansioso.",
    },
  },
};
