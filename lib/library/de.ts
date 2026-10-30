import type { Age } from "@/lib/activities";
import type { LibraryCopy } from "./types";

const AGE_NOUN: Record<Age, string> = { "0-1": "Babys", "1-3": "Kleinkinder", "3-5": "Kindergartenkinder" };

const list = new Intl.ListFormat("de");
const plural = new Intl.PluralRules("de");
const count = (n: number, one: string, other: string) => `${n} ${plural.select(n) === "one" ? one : other}`;

/** A title or label that opens on an adjective takes a small letter inside a sentence. */
const inSentence = (text: string) => (/^(Ruhige|Einfache|Flexibles) /.test(text) ? text[0].toLowerCase() + text.slice(1) : text);

const SERVE_RETURN =
  "Den Aufschlag des Kindes bemerken und seinen Fokus teilen, ihn mit Unterstützung zurückspielen, benennen, was das Kind sieht oder fühlt, abwechseln und warten und Enden und Anfänge üben, mit Kuckuck als Beispiel.";

export const de: LibraryCopy = {
  ageNoun: AGE_NOUN,
  ageRange: { "0-1": "0 bis 12 Monate", "1-3": "1 bis 3 Jahre", "3-5": "3 bis 5 Jahre" },
  energy: { low: "Wenig Energie", okay: "Mittlere Energie", full: "Viel Energie" },

  hubs: {
    age: {
      "0-1": {
        title: "Spiele für Babys von 0 bis 12 Monaten",
        intro: "Schoßspiele, Kuckuck und das erste Hin und Her für das erste Lebensjahr. Jedes dauert 5 bis 15 Minuten und passt zu müden Eltern.",
      },
      "1-3": {
        title: "Spiele für Kleinkinder von 1 bis 3 Jahren",
        intro: "Stopp-Spiele, Versteckspiele und Nachmachspiele für Ein- bis Dreijährige, je 5 bis 15 Minuten, sortiert nach der Energie, die du noch hast.",
      },
      "3-5": {
        title: "Spiele für Kindergartenkinder von 3 bis 5 Jahren",
        intro: "Regelspiele, Gedächtnisspiele und Rollenspiele, die bei Drei- bis Fünfjährigen die Selbstkontrolle stärken, je 5 bis 15 Minuten.",
      },
    },
    energy: {
      low: {
        title: "Spiele für müde Eltern",
        intro: "Spiele für das Ende eines langen Tages, viele davon im Sitzen oder Liegen. Dein Kind bewegt sich, du redest.",
      },
      okay: {
        title: "Einfache Abendspiele",
        intro: "Spiele für Abende, an denen du noch etwas Energie hast, aber nicht viel: fast keine Vorbereitung und 5 bis 15 Minuten Spielzeit.",
      },
      full: {
        title: "Spiele zum Austoben",
        intro: "Spiele, die euch beide in Bewegung bringen: fangen, hüpfen, bauen und um die Wette laufen, je 5 bis 15 Minuten.",
      },
    },
    skill: {
      "working-memory": {
        title: "Gedächtnisspiele",
        intro: "Spiele, bei denen dein Kind etwas im Kopf behalten und nutzen muss: wo das Spielzeug hingekommen ist, was als Nächstes kommt, welches Wort fehlt.",
      },
      "inhibitory-control": {
        title: "Spiele zur Selbstkontrolle",
        intro: "Spiele, die Anhalten, Warten und das Gegenteil von dem üben, was der Körper will: Stopp-Spiele, Wartespiele, Simon sagt.",
      },
      "cognitive-flexibility": {
        title: "Spiele zum flexiblen Denken",
        intro: "Spiele, die mittendrin die Regel wechseln: erst nach Farbe sortieren, dann nach Größe; groß heißt klein; jetzt führst du, jetzt ich.",
      },
      attention: {
        title: "Konzentrationsspiele",
        intro: "Spiele, die die Aufmerksamkeit deines Kindes ein bisschen länger bei einer Sache halten: ein Spielzeug, das sich bewegt, ein leises Geräusch, eine Seite in einem Buch.",
      },
    },
    type: {
      peekaboo: { title: "Kuckuckspiele", what: "Ein Gesicht oder ein Spielzeug verschwindet und kommt wieder, und dein Baby lernt, damit zu rechnen." },
      "hide-and-find": { title: "Versteckspiele", what: "Du versteckst ein Spielzeug, während dein Kind zuschaut, und es merkt sich, wo es hingekommen ist." },
      "anticipation-rhyme": { title: "Kniereiter und Kitzelverse", what: "Ein Reim steigert sich bis zu einem Kitzeln oder einer Pause, und dein Kind lernt, darauf zu warten." },
      imitation: { title: "Nachmachspiele", what: "Du machst dein Kind nach und dein Kind dich, immer einen Moment versetzt." },
      "pretend-play": { title: "Rollenspiele", what: "Ein leerer Becher wird zu Tee und ein Teddy bekommt einen ganzen Tag, so behält dein Kind eine Geschichte im Kopf." },
      "fingerplay-song": { title: "Fingerspiele und Bewegungslieder", what: "Lieder mit Handbewegungen und plötzlichen Pausen, so langsam gesungen, dass man mitkommt." },
      conversation: { title: "Sprechspiele", what: "Du benennst, was dein Kind anschaut und haben will, und lässt ihm Raum zu antworten." },
      "vocal-turns": { title: "Brabbelspiele", what: "Du und dein Baby brabbelt abwechselnd, wie bei einem echten Gespräch." },
      "joint-attention": { title: "Schau-und-zeig-Spiele", what: "Du und dein Kind schaut auf dasselbe, und seine Augen lernen, deinen zu folgen." },
      "turn-taking": { title: "Spiele zum Abwechseln", what: "Ein Spielzeug oder ein Ball geht hin und her, und jeder von euch wartet, bis er dran ist." },
      building: { title: "Bauspiele", what: "Stapeln, umkippen und Tunnel bauen, ein vorsichtiger Schritt nach dem anderen." },
      "stop-go": { title: "Stopp-und-los-Spiele", what: "Stopp-Spiele: bei „Los“ bewegen, bei „Stopp“ sofort erstarren." },
      tempo: { title: "Schnell-langsam-Spiele", what: "Dieselbe Bewegung schnell, dann langsam, auf dein Zeichen." },
      "simon-says": { title: "Simon-sagt-Spiele", what: "Fass dir an die Nase, aber nur, wenn die Regel es sagt." },
      opposites: { title: "Gegenteil-Spiele", what: "Groß heißt klein und Tag heißt Nacht, also sagt dein Kind das Gegenteil von dem, was es sieht." },
      "sorting-switch": { title: "Sortierspiele", what: "Sortiere Dinge auf eine Art, dann wechsle die Regel und sortiere sie anders." },
      "working-memory-list": { title: "Merkspiele", what: "Eine kurze Liste der Reihe nach im Kopf behalten und wieder aufsagen." },
      waiting: { title: "Wartespiele", what: "Ein paar Sekunden auf etwas Schönes warten, mit einem Spiel, das beim Warten hilft." },
      "motor-control": { title: "Zeitlupenspiele", what: "Langsame, vorsichtige Bewegungen nach einer Regel: auf Zehenspitzen, wie auf dem Seil, nur mit einem Finger." },
      "motor-skill": { title: "Bewegungsspiele", what: "Hüpfen, krabbeln, werfen und fangen." },
      rhythm: { title: "Rhythmusspiele", what: "Einen Takt klatschen oder klopfen und nachmachen." },
      storytelling: { title: "Erzählspiele", what: "Gemeinsam eine Geschichte erzählen, der Reihe nach, mit deinem Kind als Held." },
      reading: { title: "Vorlesespiele", what: "Ein Bilderbuch mit Aufgabe: suchen, raten oder im richtigen Moment umblättern." },
      "quiet-focus": { title: "Stillespiele", what: "Still liegen, lauschen und atmen, mit einer kleinen Aufgabe, die die Aufmerksamkeit hält." },
      "rule-game": { title: "Regelspiele", what: "Klassische Spiele mit einer Regel zum Merken, wie Ochs am Berg." },
      planning: { title: "Planungsspiele", what: "Erst denken, dann handeln: zielen, einen Weg planen, den Plan laut sagen." },
      "quiet-voice": { title: "Flüsterspiele", what: "Flüstern, auf Zehenspitzen gehen und die Stimme absichtlich leise halten." },
    },
    tag: {
      "nothing-to-grab": "Spiele ohne Spielzeug",
      "lying-down": "Spiele im Liegen",
      sitting: "Spiele im Sitzen",
      standing: "Spiele im Stehen",
      "on-your-lap": "Schoßspiele",
      quiet: "Ruhige Spiele",
      "one-room": "Spiele in einem Zimmer",
      hallway: "Spiele im Flur",
      bedtime: "Spiele vor dem Schlafengehen",
      mealtime: "Spiele beim Essen",
      bath: "Badespiele",
      "on-a-walk": "Spiele beim Spaziergang",
      "in-the-car": "Spiele im Auto",
      stairs: "Spiele auf der Treppe",
      window: "Spiele am Fenster",
      socks: "Spiele mit Socken",
      cushions: "Spiele mit Kissen",
      chairs: "Spiele mit Stühlen",
      "a-cup": "Spiele mit einem Becher",
      "a-cloth": "Spiele mit einem Tuch",
      "a-book": "Spiele mit einem Buch",
      "a-mirror": "Spiele mit dem Spiegel",
      "a-ball": "Ballspiele",
      "a-toy": "Spiele mit einem Spielzeug",
      stacking: "Stapelspiele",
      crayons: "Spiele mit Wachsmalstiften",
      lights: "Spiele mit Licht",
      music: "Musikspiele",
      singing: "Singspiele",
    },
    audience: (ages) => (ages.length === 3 ? "Kinder von 0 bis 5" : list.format(ages.map((age) => AGE_NOUN[age]))),
    // "Spiele für müde Eltern" already has its "für", so the kids join the parents.
    titleFor: (title, audience) => (title.includes(" für ") ? `${title} und ${audience}` : `${title} für ${audience}`),
    countLine: (n, title, audience) => `${n} ${inSentence(title)} für ${audience}, je 5 bis 15 Minuten und mit höchstens drei Schritten.`,
  },

  games: {
    crumb: "Spiele",
    title: "Spiele für Babys, Kleinkinder und Kindergartenkinder",
    intro: (n) =>
      `${count(n, "Spiel", "Spiele")} für Kinder von 0 bis 5, jedes 5 bis 15 Minuten lang und mit höchstens drei Schritten. Jedes stützt sich auf eine veröffentlichte Studie und einen Leitfaden des Center on the Developing Child der Harvard University oder der American Academy of Pediatrics.`,
    sections: {
      age: "Nach Alter",
      energy: "Nach der Energie, die du noch hast",
      skill: "Nach der Fähigkeit, die es fördert",
      type: "Nach Spielart",
      tag: "Nach Ort und dem, was du gerade da hast",
    },
    minutes: (minutes) => count(minutes, "Minute", "Minuten"),
    minutesShort: (minutes) => `${minutes} Min.`,
    whyItWorks: "Warum es funktioniert",
    moreOf: (typeTitle) => `Mehr ${typeTitle}`,
    allOf: (typeTitle) => `Alle ${typeTitle}`,
    more: "Mehr Spiele",
    researchBehind: "Die Forschung hinter diesen Spielen",
    metaTitle: ({ title, minutes, age }) => `${title}: ein ${minutes}-Minuten-Spiel für ${AGE_NOUN[age]}`,
    metaDescription: ({ blurb, steps, minutes, skills }) =>
      `${blurb} ${count(steps, "Schritt", "Schritte")}, ${count(minutes, "Minute", "Minuten")}, trainiert ${list.format(skills.map(inSentence))}.`,
  },

  research: {
    design: { rct: "Randomisierte Studie", experiment: "Experiment", longitudinal: "Langzeitstudie", observational: "Beobachtungsstudie" },
    study: "Studie",
    guide: "Leitfaden",
  },

  pitch: {
    title: "Oyno gibt dir jeden Abend ein Spiel wie dieses",
    body: "Es wählt ein Spiel passend zum Alter deines Kindes und zu der Energie, die du noch hast, pausiert beim Spielen die Apps, die du auswählst, und lässt mit jeder Runde den kleinen Planeten deiner Familie wachsen.",
    cta: "Loslegen",
  },

  articles: {
    guide: {
      crumb: "Ratgeber",
      title: "Ratgeber für Eltern von 0- bis 5-Jährigen",
      intro: "Ausführliche Texte darüber, wie Spielen Konzentration und Selbstkontrolle stärkt, und darüber, das Handy wegzulegen. Jede Aussage verlinkt auf die Studie dahinter.",
    },
    post: {
      crumb: "Blog",
      title: "Der Oyno-Blog",
      intro: "Kurze Texte für müde Eltern: Spiele für heute Abend, was die Forschung sagt und wie du dir den Abend vom Handy zurückholst.",
    },
    tryThese: "Probier diese Spiele aus",
    sources: "Quellen",
    byline: (name) => `${name}, Entwickler von Oyno`,
  },

  sources: {
    "cdc-guide": {
      says: {
        "0-1": "Für 6 bis 18 Monate: Schoßspiele mit einer erwarteten Überraschung, Versteckspiele, Nachahm- und Nachmachspiele, einfaches Rollenspiel, Fingerspiele und Gespräche über das, was dem Baby auffällt.",
        "1-3": "Für 18 bis 36 Monate: Stopptanz und Lieder zum Anhalten und Weitermachen, Liedspiele mit Bewegungen, Follow the Leader, körperliche Herausforderungen, Gespräche und Geschichten mit „Was machst du als Nächstes?“, Reden über Gefühle, Zuordnen und lustiges Sortieren, Puzzles und Fantasiespiel, bei dem das Kind bestimmt.",
        "3-5": "Für 3 bis 5 Jahre: Fantasiespiel mit Spielplänen, Geschichten erzählen und nachspielen, Vorlesen, Bewegung zu Rhythmus und Liedspielen, Hindernisparcours und Balancieren, Yogahaltungen mit langsamem Atmen, erst schnell und dann langsam tanzen, Stopptanz, Sortieren mit gewechselter Regel, Gegenteil-Bingo, Lieder, die immer länger werden, Kochen mit Warten und Puzzles.",
      },
    },
    "cdc-guide-5-7": {
      says: {
        "3-5": "Für 5 bis 7 Jahre: Stopptanz, Reise nach Jerusalem, Red Light Green Light, Mother May I („Kaiser, wie viele Schritte darf ich gehen?“), What Time Is It Mr Fox, das Zauberwort-Spiel, Simon Says („Simon sagt“) und „Tu, was ich sage, nicht, was ich tu“, Nachmachspiele, Ruf und Antwort, Lieder, die immer länger werden, Packing for a Picnic („Ich packe meinen Koffer“), Concentration („Memory“), Klatschrhythmen, Yoga, „Errate meine Regel“ und „Ich sehe was, was du nicht siehst“.",
      },
    },
    "brain-play": {
      says: {
        "0-1": "Für 6 und 9 Monate: Kuckuck und Versteckspiele, Trot Trot to Boston („Hoppe, hoppe Reiter“), Pat-a-Cake („Backe, backe Kuchen“), Dickory Dean, Baby See Baby Do, abwechselnd ein Spielzeug fallen lassen mit „Bumm“, Gesprächsspiele und Fingerspiele.",
        "1-3": "Für 12 Monate bis 3 Jahre: Toddler See Toddler Do, auf dem Boden über Kissen krabbeln und entdecken, so tun als ob mit Telefon und Hausarbeit, Ausschütten und Einfüllen, einfaches Verstecken, das Gedächtnisspiel mit drei Bechern, Zuordnen und Sortieren, Bewegungslieder, Stopptanz, Follow the Leader, Zählen, Puzzles und Be the Narrator, bei dem du erzählst, was passiert.",
        "3-5": "Für 4 bis 7 Jahre: Stopptanz mit Posen, Simon Says („Simon sagt“), Red Light Green Light, Duck Duck Goose („Plumpsack“), What Time Is It Mr Fox, „Ich sehe was, was du nicht siehst“, Gegenteil-Bingo und „Erzähl die Geschichte weiter“.",
      },
    },
    "serve-return": { says: { "0-1": SERVE_RETURN, "1-3": SERVE_RETURN } },
    "aap-play": {
      says: {
        "0-1": "Spielen wächst vom sozialen Lächeln zu Serve and Return, Kuckuck und „Backe, backe Kuchen“, und Kinderärzte empfehlen von Geburt an neben dem Spielen auch das Vorlesen.",
        "1-3": "Spielen mit Gegenständen, das symbolisch wird, grundlegende motorische Fähigkeiten, Abwechseln und Hilfestellung, wenn ein Erwachsener ein Puzzleteil dreht, um zu helfen.",
        "3-5": "Rollenspiel und soziales Spiel mit Regeln, körperliches Spiel und Toben sowie Spiele, deren Regeln die Kinder aushandeln.",
      },
    },
    "diamond-1985": {
      studied: "Babys von 7½ bis 12 Monaten, bis in den ersten Monat der Kleinkindgruppe, holten nach einer kurzen Wartezeit ein Spielzeug hervor, das unter einer von zwei Abdeckungen versteckt war: die A-nicht-B-Aufgabe.",
    },
    "reznick-2004": { studied: "Babys von 5½ bis 6½ Monaten fanden ein Spielzeug nach einer kurzen Wartezeit wieder, das früheste Arbeitsgedächtnis." },
    "haith-1988": {
      studied: "Babys von 3½ Monaten lernten eine Bilderfolge links und rechts und schauten schon vorher dorthin, wo das nächste Bild erscheinen würde.",
    },
    "rochat-1999": { studied: "Babys von 2 bis 6 Monaten reagierten, wenn Timing und Ablauf von Kuckuck und von abwechselndem Brabbeln gestört wurden." },
    "yu-smith-2016": {
      studied: "Einjährige blieben länger bei einem Spielzeug aufmerksam, wenn der Elternteil dasselbe Spielzeug anschaute und benannte.",
    },
    "cuevas-bell-2014": { studied: "Fokussierte Aufmerksamkeit mit 5 Monaten sagte die exekutiven Funktionen mit 24 bis 48 Monaten voraus." },
    "nakata-trehub-2004": { studied: "Babys von 6 Monaten waren länger aufmerksam, wenn ihre Mutter sang, als wenn sie sprach." },
    "ross-lollis-1987": {
      studied: "Babys von 9 bis 18 Monaten zeigten in Abwechselspielen wie Geben und Nehmen und Kuckuck an, wenn der Erwachsene seinen Zug verpasste.",
    },
    "landry-2006": {
      studied: "Ein Coaching zu feinfühliger Erziehung bei Babys von 6 bis 10 Monaten verbesserte die Aufmerksamkeit und das selbstständige Problemlösen der Babys.",
    },
    "bernier-2010": {
      studied: "Feinfühliges Sprechen, das auf das Innenleben des Kindes eingeht, und Unterstützung der Selbstständigkeit mit 12 bis 15 Monaten sagten die exekutiven Funktionen mit 18 und 26 Monaten voraus.",
    },
    "mendelsohn-2018": {
      studied: "Ein Coaching zu Vorlesen und Rollenspiel von der Geburt bis 3 verringerte Hyperaktivität und Aufmerksamkeitsprobleme mit 4½.",
    },
    "hughes-ensor-2005": {
      studied: "Zweijährige bei Spin the Pots, wo sie sich merken mussten, welche Töpfe schon geleert waren, und bei einem Baby-Stroop, bei dem sie den großen Becher „Baby“ nennen sollten.",
    },
    "kochanska-2000": {
      studied: "Kinder von 22 bis 45 Monaten warteten auf eine Leckerei, gingen langsam eine Linie entlang, flüsterten, stoppten und starteten auf ein Signal und bauten abwechselnd an einem Turm.",
    },
    "vallotton-ayoub-2011": {
      studied: "Wortschatz und Sprechen von Kleinkindern zwischen 14 und 36 Monaten sagten das Wachstum ihrer Selbstregulation voraus.",
    },
    "hammond-2012": {
      studied: "Die Hilfestellung der Eltern bei einem Puzzle mit 2 bis 3 Jahren, gerade so viel Hilfe wie nötig und „Was kommt als Nächstes?“, sagte die exekutiven Funktionen mit 3 bis 4 Jahren voraus.",
    },
    "williams-2015": {
      studied: "Gemeinsames Singen, Tanzen und Musikspiele zu Hause mit 2 bis 3 Jahren sagten Aufmerksamkeit und Selbstregulation mit 5 Jahren voraus.",
    },
    "carlson-2005": {
      studied: "Kinder von 2 bis 6 Jahren bei altersgestuften Aufgaben: Warten auf einen Snack und ein Geschenk, umgekehrtes Sortieren, Bär und Drache, Simon sagt, Flüstern, Tag und Nacht, weniger ist mehr.",
    },
    "zelazo-2006": {
      studied: "Kinder von 3 bis 5 Jahren sortierten Karten erst nach Farbe und wechselten dann zur Form, der Dimensional Change Card Sort.",
    },
    "gerstadt-1994": { studied: "Kinder von 3½ bis 7 Jahren sagten „Nacht“ zu einer Sonnenkarte und „Tag“ zu einer Mondkarte." },
    "ponitz-2009": {
      studied: "Kinder von 4 bis 6 Jahren berührten ihre Zehen, wenn man „Kopf“ sagte, und ihren Kopf bei „Zehen“, was ihre Ergebnisse in der Vorschulklasse vorhersagte.",
    },
    "tominey-mcclelland-2011": {
      studied: "Kindergartenkinder von 3 bis 5 Jahren, die Kreisspiele wie Red Light Purple Light, Stopp-Spiele mit vertauschten Regeln, Trommelschläge und Dirigieren spielten, verbesserten ihre Selbstregulation.",
    },
    "schmitt-2015": {
      studied: "Head-Start-Kindergartenkinder, die die Red-Light-Purple-Light-Spiele spielten, verbesserten ihre Selbstregulation und Schulreife.",
    },
    "thibodeau-2016": {
      studied: "Kinder von 3 bis 5 Jahren verbesserten in fünf Wochen fantastischem Rollenspiel ihr Arbeitsgedächtnis und ihre Hemmungskontrolle.",
    },
    "elias-berk-2002": { studied: "Komplexes soziodramatisches Spiel von Kindergartenkindern sagte ihre spätere Selbstregulation voraus." },
    "bugos-demarie-2017": {
      studied: "Kinder von 4 bis 6 Jahren verbesserten in einem kurzen Musikprogramm mit Singen, Rhythmus und Instrumenten ihre exekutiven Funktionen.",
    },
    "razza-2015": {
      studied: "Kindergartenkinder, die achtsames Yoga mit gehaltenen Posen und langsamem Atmen machten, verbesserten ihre Selbstregulation.",
    },
    "schmitt-2018": {
      studied: "Kindergartenkinder verbesserten beim halbstrukturierten Bauen mit Bausteinen nach Plänen und Bildern ihre exekutiven Funktionen.",
    },
    "mulvey-2018": {
      studied: "Kindergartenkinder verbesserten in einem Bewegungsprogramm mit Hüpfen, Springen, Werfen und Fangen ihre exekutiven Funktionen.",
    },
    "thorell-2009": {
      studied: "Kinder von 4 bis 5 Jahren, die mit Arbeitsgedächtnisaufgaben trainierten, verbesserten ihr nicht trainiertes Arbeitsgedächtnis und ihre Aufmerksamkeit.",
    },
    "lind-2017": {
      studied: "Ein Coaching, das Eltern von 6 bis 21 Monate alten Kindern zeigte, dem Kind zu folgen, darauf einzugehen und Freude zu zeigen, verbesserte die kognitive Flexibilität mit 48 Monaten.",
    },
    "garon-2014": {
      studied: "Kinder von 18 bis 67 Monaten bei einer Reihe von Aufgaben zu Arbeitsgedächtnis, Hemmung und Umschalten, die Altersunterschiede gut erfasste.",
    },

    "tronick-1978": {
      studied: "Babys von 1 bis 4 Monaten, deren Mütter ein starres, unbewegtes Gesicht zeigten, wurden innerhalb von Minuten misstrauisch und zogen sich zurück: das Still-Face-Experiment.",
    },
    "radesky-2014": {
      studied: "Forschende beobachteten 55 Bezugspersonen beim Essen mit kleinen Kindern in Fast-Food-Restaurants; die meisten nutzten während der Mahlzeit ein Handy, und die am stärksten Vertieften reagierten oft spät oder schroff, wenn sich ihr Kind an sie wandte.",
    },
    "mcdaniel-radesky-2018": {
      studied: "Eltern kleiner Kinder, die von mehr Unterbrechungen durch ihr Handy in der gemeinsamen Zeit mit der Familie berichteten, berichteten auch von mehr Verhaltensproblemen ihres Kindes.",
    },
    "myruski-2018": {
      studied: "Babys von 7 bis 24 Monaten wurden unruhig, wenn sich ihre Mutter in einer Still-Face-Aufgabe dem Handy zuwandte, und jene, deren Mütter zu Hause mehr Geräte nutzten, erholten sich weniger.",
    },
    "kushlev-dunn-2019": {
      studied: "Eltern in einem Wissenschaftsmuseum, die ihr Handy viel benutzen sollten, fühlten sich abgelenkter und weniger mit ihren Kindern verbunden als Eltern, die es wenig benutzen sollten.",
    },
    "andrews-2015": {
      studied: "Junge Erwachsene, deren Handys ihre Nutzung aufzeichneten, griffen etwa 85-mal am Tag zum Handy und nutzten es etwa fünf Stunden, ungefähr doppelt so viel, wie sie geschätzt hatten.",
    },
    "mcdaniel-coyne-2016": {
      studied: "143 verheiratete oder mit ihrem Partner zusammenlebende Frauen gaben in einer Umfrage an, dass Geräte oft die Zeit mit dem Partner unterbrachen, was die Autoren Technoference nannten, und wer mehr davon berichtete, berichtete auch von mehr Streit über Technik und geringerer Zufriedenheit in der Beziehung.",
    },
    "chotpitayasunondh-douglas-2016": {
      studied: "Eine Studie zu Phubbing, also jemanden in Gesellschaft vor den Kopf zu stoßen, indem man aufs Handy schaut, statt mit ihm zu reden, ergab, dass Menschen, die öfter phubbten und öfter gephubbt wurden, es für normaler hielten.",
    },
    "reed-2017": {
      studied: "38 Mütter brachten ihren Zweijährigen zwei neue Wörter bei, und die Kinder lernten das Wort, das ohne Unterbrechung beigebracht wurde, aber nicht das, das durch einen Anruf unterbrochen wurde, obwohl jedes Wort gleich oft gesagt wurde.",
    },
    "vanden-abeele-2020": {
      studied: "Forschende beobachteten 53 Eltern von Kindern von 0 bis 5 Jahren in Wartezimmern und auf Spielplätzen: 23 nutzten ein Handy, die Chance, auf eine Kontaktaufnahme des Kindes einzugehen, war am Handy fünfmal geringer, ein kurzer Blick machte keinen Unterschied, und tiefes Versinken in andere Tätigkeiten wirkte etwa genauso.",
    },
    "radesky-2015": {
      studied: "In einer gefilmten Laboraufgabe mit 225 Müttern und ihren 6-Jährigen nutzten 23 % der Mütter ungefragt ein Mobilgerät, und diese hatten weniger Interaktionen mit ihrem Kind, vor allem nonverbale.",
    },
    "mcdaniel-radesky-2018b": {
      studied: "183 Paare mit einem Kind von 0 bis 5 Jahren beantworteten über sechs Monate Fragebögen: Schwierigeres Verhalten des Kindes sagte über den Erziehungsstress mehr Störungen durch Technik voraus, und diese Störungen sagten oft später mehr ausagierendes Verhalten voraus.",
    },
    "konrad-2021": {
      studied: "Mütter von 20 bis 22 Monate alten Kindern, die das Spielen für zwei Minuten unterbrachen, um einen Fragebogen auszufüllen, auf dem Smartphone oder auf Papier, reagierten weniger feinfühlig, und ihre Kleinkinder suchten öfter ihre Aufmerksamkeit.",
    },
    "dwyer-2018": {
      studied: "Über 300 Menschen, die mit Freunden oder Familie im Restaurant aßen und per Zufall ihre Handys auf dem Tisch lassen oder wegräumen sollten, fühlten sich mit Handys auf dem Tisch abgelenkter und genossen das Essen weniger.",
    },
    "stothart-2015": {
      studied: "Handybenachrichtigungen allein, ohne dass jemand das Handy berührte, störten die Leistung bei einer Aufmerksamkeitsaufgabe etwa so stark wie ein Anruf oder eine Textnachricht.",
    },
    "oulasvirta-2012": {
      studied: "Drei Studien mit Smartphone-Nutzern fanden eine Kontrollgewohnheit, kurze, wiederholte Blicke auf schnell erreichbare Inhalte, die die Nutzer eher als lästig denn als Sucht empfanden.",
    },
    "wood-2002": {
      studied: "In zwei Tagebuchstudien mit stündlichen Berichten dachten Menschen bei dem, was sie fast täglich in derselben Umgebung taten, meist an etwas anderes und fühlten sich weniger gestresst als bei neuen Tätigkeiten.",
    },
    "lally-2010": {
      studied: "Freiwillige, die 12 Wochen lang ein neues tägliches Verhalten in derselben Umgebung wiederholten, brauchten 18 bis 254 Tage bis zum Höhepunkt der Automatisierung, und ein ausgelassener Tag hatte keinen wesentlichen Einfluss darauf.",
    },
    "fitz-2019": {
      studied: "237 Menschen bekamen per Zufall Handybenachrichtigungen wie gewohnt, gebündelt dreimal am Tag oder gar nicht: Die gebündelte Gruppe fühlte sich aufmerksamer, besser gelaunt, mehr Herr über ihr Handy und weniger gestresst, und die Gruppe ohne Benachrichtigungen fühlte sich ängstlicher.",
    },
  },
};
