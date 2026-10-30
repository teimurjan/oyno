import type { Age } from "@/lib/activities";
import type { LibraryCopy } from "./types";

const AGE_NOUN: Record<Age, string> = { "0-1": "baby’s", "1-3": "peuters", "3-5": "kleuters" };

const list = new Intl.ListFormat("nl");
const lowerFirst = (text: string) => text.charAt(0).toLowerCase() + text.slice(1);

export const nl: LibraryCopy = {
  ageNoun: AGE_NOUN,
  ageRange: { "0-1": "0 tot 12 maanden", "1-3": "1 tot 3 jaar", "3-5": "3 tot 5 jaar" },
  energy: { low: "Weinig energie", okay: "Gemiddelde energie", full: "Veel energie" },

  hubs: {
    age: {
      "0-1": {
        title: "Spelletjes voor baby’s van 0 tot 12 maanden",
        intro: "Schootspelletjes, kiekeboe en het eerste heen-en-weer voor het eerste jaar. Elk duurt 5 tot 15 minuten en past bij een vermoeide ouder.",
      },
      "1-3": {
        title: "Spelletjes voor peuters van 1 tot 3 jaar",
        intro: "Stilstaanspelletjes, verstoppertje en nadoespelletjes voor kinderen van een tot drie, elk 5 tot 15 minuten, ingedeeld naar de energie die je nog hebt.",
      },
      "3-5": {
        title: "Spelletjes voor kleuters van 3 tot 5 jaar",
        intro: "Spelletjes met regels, geheugenspelletjes en doe-alsofspel die zelfbeheersing opbouwen bij kinderen van drie tot vijf, elk 5 tot 15 minuten.",
      },
    },
    energy: {
      low: {
        title: "Spelletjes voor vermoeide ouders met weinig energie",
        intro: "Spelletjes voor het eind van een lange dag, veel ervan zittend of liggend. Je kind beweegt, jij praat.",
      },
      okay: {
        title: "Makkelijke spelletjes voor een gewone avond",
        intro: "Spelletjes voor als je nog wat energie hebt, maar niet veel: bijna geen voorbereiding en 5 tot 15 minuten spelen.",
      },
      full: {
        title: "Actieve spelletjes voor als je energie hebt",
        intro: "Spelletjes waarbij jullie allebei in beweging komen: achterna zitten, springen, bouwen en racen, elk 5 tot 15 minuten.",
      },
    },
    skill: {
      "working-memory": {
        title: "Spelletjes om het werkgeheugen te oefenen",
        intro: "Spelletjes waarbij je kind iets moet onthouden en gebruiken: waar het speeltje bleef, wat er nu komt, welk woord er mist.",
      },
      "inhibitory-control": {
        title: "Spelletjes om zelfbeheersing te oefenen",
        intro: "Spelletjes om te oefenen met stoppen, wachten en het tegenovergestelde doen van wat het lijf wil: stilstaanspelletjes, wachtspelletjes, Jantje zegt.",
      },
      "cognitive-flexibility": {
        title: "Spelletjes om flexibel denken te oefenen",
        intro: "Spelletjes waarbij de regel halverwege verandert: sorteer op kleur, daarna op grootte; groot betekent klein; nu leid jij, nu ik.",
      },
      attention: {
        title: "Concentratiespelletjes",
        intro: "Spelletjes die de aandacht van je kind iets langer bij één ding houden: een speeltje dat beweegt, een zacht geluid, één bladzijde van een boek.",
      },
    },
    type: {
      peekaboo: { title: "Kiekeboespelletjes", what: "Een gezicht of speeltje verdwijnt en komt terug, en je baby leert het te verwachten." },
      "hide-and-find": { title: "Verstopspelletjes", what: "Je verstopt een speeltje terwijl je kind kijkt, en je kind onthoudt waar het is." },
      "anticipation-rhyme": { title: "Kietelversjes", what: "Een versje bouwt op naar een kietel of een pauze, en je kind leert erop te wachten." },
      imitation: { title: "Nadoespelletjes", what: "Jij doet je kind na en je kind doet jou na, telkens een tel later." },
      "pretend-play": { title: "Doe-alsofspelletjes", what: "Een lege beker wordt thee en een knuffel krijgt een hele dag, zodat je kind een verhaal vasthoudt." },
      "fingerplay-song": { title: "Vingerspelletjes en bewegingsliedjes", what: "Liedjes met handgebaren en plotselinge stops, langzaam genoeg gezongen om te volgen." },
      conversation: { title: "Praatspelletjes", what: "Je benoemt waar je kind naar kijkt en wat het wil, en laat ruimte voor een antwoord." },
      "vocal-turns": { title: "Brabbelspelletjes", what: "Jij en je baby brabbelen om de beurt, als een echt gesprek." },
      "joint-attention": { title: "Kijk-en-wijsspelletjes", what: "Jij en je kind kijken naar hetzelfde, en de ogen van je kind leren de jouwe te volgen." },
      "turn-taking": { title: "Om-de-beurtspelletjes", what: "Een speeltje of een bal gaat heen en weer, en jullie wachten allebei op je beurt." },
      building: { title: "Bouwspelletjes", what: "Stapelen, omgooien en tunnels maken, stap voor stap en heel voorzichtig." },
      "stop-go": { title: "Stop-en-gaspelletjes", what: "Stilstaanspelletjes: bewegen bij ‘ga’, stokstijf stilstaan bij ‘stop’." },
      tempo: { title: "Snel-en-langzaamspelletjes", what: "Dezelfde beweging snel en dan langzaam, op jouw teken." },
      "simon-says": { title: "Spelletjes als Jantje zegt", what: "Raak je neus aan, maar alleen als de regel het zegt." },
      opposites: { title: "Spelletjes met tegenstellingen", what: "Groot betekent klein en dag betekent nacht, dus je kind zegt het tegenovergestelde van wat het ziet." },
      "sorting-switch": { title: "Sorteerspelletjes", what: "Sorteer dingen op één manier, verander dan de regel en sorteer ze anders." },
      "working-memory-list": { title: "Geheugenspelletjes", what: "Onthoud een kort rijtje, op volgorde, en zeg het terug." },
      waiting: { title: "Wachtspelletjes", what: "Een paar tellen wachten op iets leuks, met een spelletje dat het wachten makkelijker maakt." },
      "motor-control": { title: "Slowmotionspelletjes", what: "Langzame, voorzichtige bewegingen met een regel: op je tenen, over het koord, met één vinger." },
      "motor-skill": { title: "Bewegingsspelletjes", what: "Hinkelen, kruipen, gooien en vangen." },
      rhythm: { title: "Ritmespelletjes", what: "Klap of tik een ritme en doe het na." },
      storytelling: { title: "Vertelspelletjes", what: "Vertel samen een verhaal, op volgorde, met je kind als held." },
      reading: { title: "Voorleesspelletjes", what: "Een prentenboek met een opdracht: zoeken, raden of op het goede moment de bladzijde omslaan." },
      "quiet-focus": { title: "Rustige concentratiespelletjes", what: "Stil liggen, luisteren en ademen, met een klein opdrachtje om de aandacht vast te houden." },
      "rule-game": { title: "Spelletjes met regels", what: "Klassieke spelletjes met één regel om te onthouden, zoals Annemaria Koekoek." },
      planning: { title: "Planspelletjes", what: "Eerst denken, dan doen: mikken, een route plannen, het plan hardop zeggen." },
      "quiet-voice": { title: "Fluisterspelletjes", what: "Fluisteren, op je tenen lopen en je stem expres klein houden." },
    },
    tag: {
      "nothing-to-grab": "Spelletjes zonder speelgoed",
      "lying-down": "Spelletjes om liggend te spelen",
      sitting: "Spelletjes om zittend te spelen",
      standing: "Spelletjes om staand te spelen",
      "on-your-lap": "Schootspelletjes",
      quiet: "Rustige spelletjes",
      "one-room": "Spelletjes in één kamer",
      hallway: "Spelletjes in de gang",
      bedtime: "Spelletjes rond bedtijd",
      mealtime: "Spelletjes aan tafel",
      bath: "Spelletjes in bad",
      "on-a-walk": "Wandelspelletjes",
      "in-the-car": "Spelletjes in de auto",
      stairs: "Spelletjes op de trap",
      window: "Spelletjes bij het raam",
      socks: "Spelletjes met sokken",
      cushions: "Spelletjes met kussens",
      chairs: "Spelletjes met stoelen",
      "a-cup": "Spelletjes met een beker",
      "a-cloth": "Spelletjes met een doek",
      "a-book": "Spelletjes met een boekje",
      "a-mirror": "Spelletjes met een spiegel",
      "a-ball": "Balspelletjes",
      "a-toy": "Spelletjes met één speeltje",
      stacking: "Stapelspelletjes",
      crayons: "Spelletjes met waskrijtjes",
      lights: "Spelletjes met lichtjes",
      music: "Muziekspelletjes",
      singing: "Zingspelletjes",
    },
    audience: (ages) => (ages.length === 3 ? "kinderen van 0 tot 5" : list.format(ages.map((age) => AGE_NOUN[age]))),
    titleFor: (title, audience) => `${title} voor ${audience}`,
    countLine: (count, title, audience) =>
      `${count} ${lowerFirst(title)} voor ${audience}, elk 5 tot 15 minuten, met hoogstens drie stappen.`,
  },

  games: {
    crumb: "Spelletjes",
    title: "Spelletjes met baby’s, peuters en kleuters",
    intro: (count) =>
      `${count} spelletjes voor kinderen van 0 tot 5, elk 5 tot 15 minuten met hoogstens drie stappen. Achter elk spelletje staan een gepubliceerd onderzoek en een gids van het Center on the Developing Child van Harvard of de American Academy of Pediatrics.`,
    sections: {
      age: "Per leeftijd",
      energy: "Naar de energie die je nog hebt",
      skill: "Naar de vaardigheid die het traint",
      type: "Per soort spelletje",
      tag: "Naar waar je bent en wat je bij de hand hebt",
    },
    minutes: (minutes) => `${minutes} minuten`,
    minutesShort: (minutes) => `${minutes} min`,
    whyItWorks: "Waarom het werkt",
    moreOf: (typeTitle) => `Meer ${lowerFirst(typeTitle)}`,
    allOf: (typeTitle) => `Alle ${lowerFirst(typeTitle)}`,
    more: "Meer spelletjes",
    researchBehind: "Het onderzoek achter deze spelletjes",
    metaTitle: ({ title, minutes, age }) => `${title}: een spelletje van ${minutes} minuten voor ${AGE_NOUN[age]}`,
    metaDescription: ({ blurb, steps, minutes, skills }) =>
      `${blurb} ${steps} stappen, ${minutes} minuten, traint ${list.format(skills.map((skill) => skill.toLowerCase()))}.`,
  },

  research: {
    design: {
      rct: "Gerandomiseerd onderzoek",
      experiment: "Experiment",
      longitudinal: "Langlopend onderzoek",
      observational: "Observationeel onderzoek",
    },
    study: "Onderzoek",
    guide: "Gids",
  },

  pitch: {
    title: "Oyno geeft je elke avond zo’n spelletje",
    body: "Het kiest een spelletje bij de leeftijd van je kind en de energie die je nog hebt, zet de apps die jij kiest op pauze terwijl jullie spelen en laat met elk rondje de kleine planeet van je gezin groeien.",
    cta: "Aan de slag",
  },

  articles: {
    guide: {
      crumb: "Gidsen",
      title: "Gidsen voor ouders van kinderen van 0 tot 5",
      intro: "Lange stukken over hoe spelen concentratie en zelfbeheersing opbouwt, en over je telefoon wegleggen. Bij elke bewering staat een link naar het onderzoek erachter.",
    },
    post: {
      crumb: "Blog",
      title: "De blog van Oyno",
      intro: "Korte stukken voor vermoeide ouders: spelletjes voor vanavond, wat het onderzoek zegt en hoe je je avond terugpakt van je telefoon.",
    },
    tryThese: "Probeer deze spelletjes",
    sources: "Bronnen",
    byline: (name) => `${name}, maker van Oyno`,
  },

  sources: {
    "cdc-guide": {
      says: {
        "0-1": "Voor 6 tot 18 maanden: schootspelletjes met een verwachte verrassing, verstopspelletjes, nadoe- en naapspelletjes, eenvoudig rollenspel, vingerspelletjes en praten over wat de baby opmerkt.",
        "1-3": "Voor 18 tot 36 maanden: stopdans en liedjes met starten en stoppen, liedspelletjes met bewegingen, Volg de leider, lichamelijke uitdagingen, praten en vertellen met ‘wat ga je nu doen?’, praten over gevoelens, matchen en gekke sorteerspelletjes, puzzels en fantasiespel dat het kind zelf leidt.",
        "3-5": "Voor 3 tot 5 jaar: fantasiespel met een spelplan, verhalen vertellen en naspelen, voorlezen, bewegen op ritme en liedspelletjes, hindernisbanen en evenwicht, yogahoudingen met langzaam ademen, eerst snel en dan langzaam dansen, stopdans, sorteren met een omgedraaide regel, tegenstellingenbingo, stapelliedjes, koken met wachten en puzzels.",
      },
    },
    "cdc-guide-5-7": {
      says: {
        "3-5": "Voor 5 tot 7 jaar: stopdans, stoelendans, Red Light Green Light (Annemaria Koekoek), Mother May I, Wolf, hoe laat is het? (What Time Is It Mr Fox), het toverwoordspel, Jantje zegt (Simon Says) en Doe wat ik zeg, niet wat ik doe, nadoespelletjes, roep-en-antwoordspelletjes, stapelliedjes, Ik ga op reis en ik neem mee (Packing for a Picnic), memory (Concentration), klapritmes, yoga, Raad mijn regel en Ik zie, ik zie wat jij niet ziet (I Spy).",
      },
    },
    "brain-play": {
      says: {
        "0-1": "Voor 6 en 9 maanden: kiekeboe en verstopspelletjes, Trot Trot to Boston, Pat-a-Cake (Klap eens in je handjes), Dickory Dean, Baby See Baby Do, om de beurt een speeltje laten vallen met ‘Boem’, praatspelletjes en vingerspelletjes.",
        "1-3": "Voor 12 maanden tot 3 jaar: Toddler See Toddler Do, op de vloer over kussens op ontdekking, doen alsof met een telefoon en klusjes, Dump and Fill (leeggooien en vullen), eenvoudig verstoppertje, het geheugenspel met drie bekers, matchen en sorteren, bewegingsliedjes, stopdans, Volg de leider, tellen, puzzels en Be the Narrator (vertel wat er gebeurt).",
        "3-5": "Voor 4 tot 7 jaar: stopdans met houdingen, Jantje zegt (Simon Says), Red Light Green Light (Annemaria Koekoek), Duck Duck Goose (Zakdoekje leggen), Wolf, hoe laat is het? (What Time Is It Mr Fox), Ik zie, ik zie wat jij niet ziet (I Spy), tegenstellingenbingo en Vertel het verhaal verder.",
      },
    },
    "serve-return": {
      says: {
        "0-1": "Zie de ‘serve’ van het kind en deel zijn aandacht, beantwoord hem met steun (‘return’), benoem wat het kind ziet of voelt, neem om de beurt en wacht, en oefen met eindes en nieuwe beginnen, met kiekeboe als voorbeeld.",
        "1-3": "Zie de ‘serve’ van het kind en deel zijn aandacht, beantwoord hem met steun (‘return’), benoem wat het kind ziet of voelt, neem om de beurt en wacht, en oefen met eindes en nieuwe beginnen, met kiekeboe als voorbeeld.",
      },
    },
    "aap-play": {
      says: {
        "0-1": "Spel groeit van de sociale glimlach naar serve and return, kiekeboe en Klap eens in je handjes, en kinderartsen raden vanaf de geboorte voorlezen aan naast spelen.",
        "1-3": "Spelen met voorwerpen dat symbolisch wordt, motorische basisvaardigheden, om de beurt gaan, en ondersteuning wanneer een volwassene een puzzelstukje draait om te helpen.",
        "3-5": "Doe-alsofspel en sociaal spel met regels, lichamelijk spel en stoeien, en spelletjes waarvan kinderen samen de regels bepalen.",
      },
    },
    "diamond-1985": {
      studied: "Baby’s van 7½ tot 12 maanden, tot en met de eerste maand van de peuterleeftijd, die na een korte vertraging een speeltje terugpakten dat onder een van twee doeken was verstopt, de A-niet-B-taak.",
    },
    "reznick-2004": {
      studied: "Baby’s van 5½ tot 6½ maanden die na een korte vertraging een speeltje terugvonden, het vroegste werkgeheugen.",
    },
    "haith-1988": {
      studied: "Baby’s van 3½ maand die een reeks plaatjes links en rechts leerden en vooruitkeken naar waar het volgende plaatje zou verschijnen.",
    },
    "rochat-1999": {
      studied: "Baby’s van 2 tot 6 maanden die reageerden toen de timing en opbouw van kiekeboe en van heen-en-weer brabbelen werden verstoord.",
    },
    "yu-smith-2016": {
      studied: "Eenjarigen die hun aandacht langer bij een speeltje hielden als de ouder naar hetzelfde speeltje keek en het benoemde.",
    },
    "cuevas-bell-2014": {
      studied: "Gerichte aandacht op 5 maanden voorspelde de executieve functies op 24 tot 48 maanden.",
    },
    "nakata-trehub-2004": {
      studied: "Baby’s van 6 maanden letten langer op als hun moeder zong dan als ze praatte.",
    },
    "ross-lollis-1987": {
      studied: "Baby’s van 9 tot 18 maanden in om-de-beurtspelletjes zoals geven en nemen en kiekeboe, die een signaal gaven als de volwassene een beurt oversloeg.",
    },
    "landry-2006": {
      studied: "Coaching in responsief ouderschap bij baby’s van 6 tot 10 maanden verbeterde de aandacht en het zelfstandig problemen oplossen van de baby’s.",
    },
    "bernier-2010": {
      studied: "Sensitief praten met oog voor wat het kind denkt en voelt, en steun voor zelfstandigheid op 12 tot 15 maanden voorspelden de executieve functies op 18 en 26 maanden.",
    },
    "mendelsohn-2018": {
      studied: "Coaching in voorlezen en doe-alsofspel van de geboorte tot 3 jaar verminderde hyperactiviteit en aandachtsproblemen op 4½ jaar.",
    },
    "hughes-ensor-2005": {
      studied: "Tweejarigen bij Spin the Pots, onthouden welke potjes al leeg waren, en bij een Baby-Stroop, de grote beker baby noemen.",
    },
    "kochanska-2000": {
      studied: "Kinderen van 22 tot 45 maanden die wachtten op iets lekkers, langzaam over een lijn liepen, fluisterden, op een signaal stopten en startten, en om de beurt aan een toren bouwden.",
    },
    "vallotton-ayoub-2011": {
      studied: "De woordenschat en het praten van peuters van 14 tot 36 maanden voorspelden de groei van hun zelfregulatie.",
    },
    "hammond-2012": {
      studied: "Ondersteuning van ouders, net genoeg hulp en ‘wat nu?’, bij een puzzel op 2 tot 3 jaar voorspelde de executieve functies op 3 tot 4 jaar.",
    },
    "williams-2015": {
      studied: "Thuis samen zingen, dansen en muziekspelletjes doen op 2 tot 3 jaar voorspelde aandacht en zelfregulatie op 5 jaar.",
    },
    "carlson-2005": {
      studied: "Kinderen van 2 tot 6 bij taken per leeftijd: wachten op een snoepje en een cadeautje, omgekeerd sorteren, beer en draak, Simon says, fluisteren, dag en nacht, minder is meer.",
    },
    "zelazo-2006": {
      studied: "Kinderen van 3 tot 5 die kaarten op kleur sorteerden en daarna overstapten op vorm, de Dimensional Change Card Sort.",
    },
    "gerstadt-1994": {
      studied: "Kinderen van 3½ tot 7 die nacht zeiden bij een zonnekaart en dag bij een maankaart.",
    },
    "ponitz-2009": {
      studied: "Kinderen van 4 tot 6 die hun tenen aanraakten als er hoofd werd gezegd en hun hoofd als er tenen werd gezegd, wat hun resultaten in de kleuterklas voorspelde.",
    },
    "tominey-mcclelland-2011": {
      studied: "Kleuters van 3 tot 5 die de kringspelletjes van Red Light Purple Light speelden, stilstaan met omgedraaide regels, trommelritmes en dirigeren, verbeterden hun zelfregulatie.",
    },
    "schmitt-2015": {
      studied: "Kleuters in Head Start die de spelletjes van Red Light Purple Light speelden, verbeterden hun zelfregulatie en schoolrijpheid.",
    },
    "thibodeau-2016": {
      studied: "Kinderen van 3 tot 5 die vijf weken fantasierijk doe-alsofspel speelden, verbeterden hun werkgeheugen en inhibitie.",
    },
    "elias-berk-2002": {
      studied: "Complex sociodramatisch spel van kleuters voorspelde hun latere zelfregulatie.",
    },
    "bugos-demarie-2017": {
      studied: "Kinderen van 4 tot 6 in een kort muziekprogramma met zingen, ritme en instrumenten verbeterden hun executieve functies.",
    },
    "razza-2015": {
      studied: "Kleuters die mindful yoga deden, met vastgehouden houdingen en langzaam ademen, verbeterden hun zelfregulatie.",
    },
    "schmitt-2018": {
      studied: "Kleuters die halfgestructureerd met blokken speelden, bouwend naar plannen en plaatjes, verbeterden hun executieve functies.",
    },
    "mulvey-2018": {
      studied: "Kleuters in een programma voor motorische vaardigheden met hinkelen, springen, gooien en vangen verbeterden hun executieve functies.",
    },
    "thorell-2009": {
      studied: "Kinderen van 4 tot 5 die werkgeheugentaken trainden, verbeterden hun niet-getrainde werkgeheugen en aandacht.",
    },
    "lind-2017": {
      studied: "Ouders van kinderen van 6 tot 21 maanden coachen om het kind te volgen, te reageren en er plezier in te tonen, verbeterde het flexibel denken op 48 maanden.",
    },
    "garon-2014": {
      studied: "Kinderen van 18 tot 67 maanden bij een reeks taken voor werkgeheugen, inhibitie en schakelen die gevoelig was voor leeftijdsverschillen.",
    },
    "tronick-1978": {
      studied: "Baby’s van 1 tot 4 maanden van wie de moeder een stil, onbewogen gezicht trok, werden binnen enkele minuten wantrouwig en trokken zich terug, het still-face-experiment.",
    },
    "radesky-2014": {
      studied: "Onderzoekers keken naar 55 verzorgers die met jonge kinderen in fastfoodrestaurants aten; de meesten gebruikten tijdens de maaltijd een telefoon, en wie er het meest in opging, reageerde vaak laat of bot op de toenaderingen van het kind.",
    },
    "mcdaniel-radesky-2018": {
      studied: "Ouders van jonge kinderen die meer onderbrekingen door hun telefoon in de tijd met het gezin meldden, meldden ook meer gedragsproblemen bij hun kind.",
    },
    "myruski-2018": {
      studied: "Baby’s van 7 tot 24 maanden raakten van streek als hun moeder zich tijdens een still-face-taak naar haar telefoon keerde, en wie een moeder had die thuis meer schermen gebruikte, herstelde minder.",
    },
    "kushlev-dunn-2019": {
      studied: "Ouders in een wetenschapsmuseum die gevraagd werden hun telefoon veel te gebruiken, voelden zich meer afgeleid en minder verbonden met hun kinderen dan ouders die gevraagd werden hem weinig te gebruiken.",
    },
    "andrews-2015": {
      studied: "Jongvolwassenen van wie de telefoon het gebruik bijhield, pakten hem zo’n 85 keer per dag op en gebruikten hem zo’n vijf uur, ongeveer twee keer zoveel als ze schatten.",
    },
    "mcdaniel-coyne-2016": {
      studied: "143 getrouwde of samenwonende vrouwen zeiden in een enquête dat apparaten de tijd met hun partner vaak onderbraken, wat de auteurs technoference noemden, en wie daar meer van meldde, meldde meer ruzie over technologie en minder tevredenheid met de relatie.",
    },
    "chotpitayasunondh-douglas-2016": {
      studied: "Een onderzoek naar phubbing, iemand in gezelschap negeren door op je telefoon te kijken in plaats van met diegene te praten, vond dat mensen die meer phubden, en die vaker gephubd werden, het normaler vonden.",
    },
    "reed-2017": {
      studied: "38 moeders leerden hun tweejarige twee nieuwe woorden, en de kinderen leerden het woord dat zonder onderbreking werd aangeleerd, maar niet het woord dat door een telefoontje werd onderbroken, terwijl elk woord even vaak werd gezegd.",
    },
    "vanden-abeele-2020": {
      studied: "Onderzoekers keken naar 53 ouders van kinderen van 0 tot 5 in wachtkamers en speeltuinen: 23 gebruikten een telefoon, de kans dat ze op een toenadering van hun kind reageerden was vijf keer kleiner als ze erop zaten, een snelle blik maakte geen verschil, en diep opgaan in andere bezigheden deed ongeveer hetzelfde.",
    },
    "radesky-2015": {
      studied: "Bij een gefilmde labtaak met 225 moeders en hun zesjarigen gebruikte 23% van de moeders uit zichzelf een mobiel apparaat, en wie dat deed, had minder interactie met haar kind, vooral non-verbaal.",
    },
    "mcdaniel-radesky-2018b": {
      studied: "183 stellen met een kind van 0 tot 5 vulden zes maanden lang vragenlijsten in: lastiger gedrag van een kind voorspelde via opvoedstress meer verstoring door technologie, en die verstoring voorspelde vaak later meer uitagerend gedrag.",
    },
    "konrad-2021": {
      studied: "Moeders van kinderen van 20 tot 22 maanden die het spelen twee minuten onderbraken om een vragenlijst in te vullen, op een smartphone of op papier, werden minder responsief, en hun peuters zochten vaker om aandacht.",
    },
    "dwyer-2018": {
      studied: "Ruim 300 mensen die met vrienden of familie in een restaurant aten en willekeurig te horen kregen hun telefoon op tafel te laten liggen of weg te leggen, voelden zich met de telefoon erbij meer afgeleid en genoten minder van de maaltijd.",
    },
    "stothart-2015": {
      studied: "Alleen al meldingen op de telefoon, zonder dat iemand de telefoon aanraakte, verstoorden de prestaties bij een aandachtstaak ongeveer even erg als een gesprek aannemen of een bericht sturen.",
    },
    "oulasvirta-2012": {
      studied: "Drie onderzoeken onder smartphonegebruikers vonden een checkgewoonte, korte herhaalde blikken op inhoud die snel te bereiken is, die gebruikers eerder als ergernis dan als verslaving ervoeren.",
    },
    "wood-2002": {
      studied: "In twee dagboekonderzoeken met verslagen per uur dachten mensen die iets deden wat ze bijna dagelijks in dezelfde omgeving deden, vaak aan iets anders, en voelden ze minder stress dan bij nieuwe handelingen.",
    },
    "lally-2010": {
      studied: "Vrijwilligers die 12 weken lang een nieuw dagelijks gedrag in dezelfde omgeving herhaalden, hadden 18 tot 254 dagen nodig om hun hoogste punt van automatisme te bereiken, en één dag overslaan maakte daarvoor nauwelijks verschil.",
    },
    "fitz-2019": {
      studied: "237 mensen kregen willekeurig hun telefoonmeldingen zoals altijd, gebundeld drie keer per dag, of nooit: de gebundelde groep voelde zich oplettender, beter gehumeurd, meer de baas over de telefoon en minder gestrest, en de groep zonder meldingen voelde zich angstiger.",
    },
  },
};
