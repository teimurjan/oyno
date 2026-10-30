import type { Age } from "@/lib/activities";
import type { LibraryCopy } from "./types";

type PluralForms = { one: string; few: string; many: string };

const PLURAL = new Intl.PluralRules("pl");

/** "1 zabawa", "3 zabawy", "12 zabaw": Polish nouns after a count. */
const counted = (count: number, forms: PluralForms) => {
  const category = PLURAL.select(count);
  return `${count} ${category === "one" ? forms.one : category === "few" ? forms.few : forms.many}`;
};

const GAMES: PluralForms = { one: "zabawa", few: "zabawy", many: "zabaw" };
const GAMES_ACCUSATIVE: PluralForms = { one: "zabawę", few: "zabawy", many: "zabaw" };
const MINUTES: PluralForms = { one: "minuta", few: "minuty", many: "minut" };
const STEPS: PluralForms = { one: "krok", few: "kroki", many: "kroków" };

const AGE_NOUN: Record<Age, string> = { "0-1": "niemowlęta", "1-3": "maluchy", "3-5": "przedszkolaki" };
/** After "dla": "dla niemowląt", "dla maluchów". */
const AGE_GENITIVE: Record<Age, string> = { "0-1": "niemowląt", "1-3": "maluchów", "3-5": "przedszkolaków" };

const LIST = new Intl.ListFormat("pl");

const lowerFirst = (text: string) => text[0].toLowerCase() + text.slice(1);

export const pl: LibraryCopy = {
  ageNoun: AGE_NOUN,
  ageRange: { "0-1": "od 0 do 12 miesięcy", "1-3": "od 1 do 3 lat", "3-5": "od 3 do 5 lat" },
  energy: { low: "Niska energia", okay: "Średnia energia", full: "Pełna energia" },

  hubs: {
    age: {
      "0-1": {
        title: "Zabawy z niemowlakiem od 0 do 12 miesięcy",
        intro: "Zabawy na kolanach, a kuku i pierwsze rozmowy na zmianę w pierwszym roku życia. Każda trwa od 5 do 15 minut i pasuje do zmęczonego rodzica.",
      },
      "1-3": {
        title: "Zabawy z maluchem od 1 do 3 lat",
        intro: "Zabawy w zamieranie, w chowanie i szukanie oraz w naśladowanie dla dzieci od roku do trzech lat, każda na 5 do 15 minut, ułożone według energii, która ci została.",
      },
      "3-5": {
        title: "Zabawy z przedszkolakiem od 3 do 5 lat",
        intro: "Zabawy z regułami, zabawy na pamięć i zabawy w udawanie, które budują samokontrolę u dzieci od trzech do pięciu lat, każda na 5 do 15 minut.",
      },
    },
    energy: {
      low: {
        title: "Leniwe zabawy na koniec dnia",
        intro: "Zabawy na koniec długiego dnia, wiele z nich na siedząco albo na leżąco. Dziecko się rusza, a ty mówisz.",
      },
      okay: {
        title: "Łatwe zabawy na zwykły wieczór",
        intro: "Zabawy na chwile, gdy masz jeszcze trochę energii, ale niewiele: prawie bez przygotowań i na 5 do 15 minut.",
      },
      full: {
        title: "Aktywne zabawy na pełną baterię",
        intro: "Zabawy, w których ruszacie się oboje: gonitwy, skakanie, budowanie i wyścigi, każda na 5 do 15 minut.",
      },
    },
    skill: {
      "working-memory": {
        title: "Zabawy na pamięć roboczą",
        intro: "Zabawy, w których dziecko musi coś zapamiętać i z tego skorzystać: gdzie zniknęła zabawka, co będzie dalej, którego słowa brakuje.",
      },
      "inhibitory-control": {
        title: "Zabawy uczące samokontroli",
        intro: "Zabawy, w których ćwiczy się zatrzymywanie, czekanie i robienie odwrotnie, niż chce ciało: zabawy w zamieranie, zabawy w czekanie, „Szymon mówi”.",
      },
      "cognitive-flexibility": {
        title: "Zabawy na elastyczne myślenie",
        intro: "Zabawy, w których reguła zmienia się w połowie: sortuj według koloru, potem według wielkości; duży znaczy mały; teraz ty prowadzisz, teraz ja.",
      },
      attention: {
        title: "Zabawy na koncentrację",
        intro: "Zabawy, które trochę dłużej utrzymują uwagę dziecka na jednej rzeczy: na ruszającej się zabawce, cichym dźwięku, jednej stronie książeczki.",
      },
    },
    type: {
      peekaboo: { title: "Zabawy w a kuku", what: "Twarz albo zabawka znika i wraca, a maluszek uczy się, że wróci." },
      "hide-and-find": { title: "Zabawy w chowanie i szukanie", what: "Chowasz zabawkę na oczach dziecka, a ono pamięta, gdzie zniknęła." },
      "anticipation-rhyme": { title: "Rymowanki z niespodzianką", what: "Rymowanka narasta aż do łaskotek albo pauzy, a dziecko uczy się na nie czekać." },
      imitation: { title: "Zabawy w naśladowanie", what: "Ty naśladujesz dziecko, a dziecko ciebie, chwilę po sobie." },
      "pretend-play": { title: "Zabawy w udawanie", what: "Pusty kubek staje się herbatą, a miś przeżywa cały dzień, więc dziecko trzyma w głowie całą historię." },
      "fingerplay-song": { title: "Zabawy paluszkowe i piosenki z ruchem", what: "Piosenki z ruchami rąk i nagłymi pauzami, śpiewane na tyle wolno, żeby dało się nadążyć." },
      conversation: { title: "Zabawy w rozmowę", what: "Nazywasz to, na co dziecko patrzy i czego chce, i zostawiasz mu miejsce na odpowiedź." },
      "vocal-turns": { title: "Zabawy w gaworzenie na zmianę", what: "Ty i maluszek gaworzycie na zmianę, jak w prawdziwej rozmowie." },
      "joint-attention": { title: "Zabawy w patrzenie i pokazywanie", what: "Ty i dziecko patrzycie na to samo, a jego wzrok uczy się podążać za twoim." },
      "turn-taking": { title: "Zabawy na zmianę", what: "Zabawka albo piłka wędruje tam i z powrotem, a każde z was czeka na swoją kolej." },
      building: { title: "Zabawy w budowanie", what: "Układanie wież, przewracanie i budowanie tuneli, ostrożnie, krok po kroku." },
      "stop-go": { title: "Zabawy w start i stop", what: "Zabawy w zamieranie: ruch na „start”, bezruch na „stop”." },
      tempo: { title: "Zabawy w szybko i wolno", what: "Ten sam ruch raz szybko, raz wolno, na twój sygnał." },
      "simon-says": { title: "Zabawy w Szymon mówi", what: "Dotknij nosa, ale tylko wtedy, gdy pozwala na to reguła." },
      opposites: { title: "Zabawy w odwrotności", what: "Duży znaczy mały, a dzień znaczy noc, więc dziecko mówi odwrotność tego, co widzi." },
      "sorting-switch": { title: "Zabawy w sortowanie", what: "Sortujecie rzeczy w jeden sposób, a potem zmieniacie regułę i sortujecie inaczej." },
      "working-memory-list": { title: "Zabawy na pamięć", what: "Zapamiętać krótką listę, po kolei, i ją powtórzyć." },
      waiting: { title: "Zabawy w czekanie", what: "Kilka sekund czekania na coś miłego, z zabawą, która pomaga przeczekać." },
      "motor-control": { title: "Zabawy w zwolnionym tempie", what: "Powolne, ostrożne ruchy według reguły: na palcach, jak po linie, tylko jednym palcem." },
      "motor-skill": { title: "Zabawy ruchowe", what: "Skakanie, raczkowanie, rzucanie i łapanie." },
      rhythm: { title: "Zabawy rytmiczne", what: "Wyklaszcz albo wystukaj rytm, a potem powtórzcie go po sobie." },
      storytelling: { title: "Zabawy w opowiadanie", what: "Opowiadacie historię razem, po kolei, a dziecko jest jej bohaterem." },
      reading: { title: "Zabawy w czytanie", what: "Książeczka obrazkowa z zadaniem: znajdź, zgadnij albo przewróć stronę w odpowiedniej chwili." },
      "quiet-focus": { title: "Ciche zabawy na skupienie", what: "Leżycie bez ruchu, słuchacie i oddychacie, a małe zadanie pomaga utrzymać uwagę." },
      "rule-game": { title: "Zabawy z regułą", what: "Klasyczne zabawy z jedną regułą do zapamiętania, jak „Raz, dwa, trzy, Baba Jaga patrzy”." },
      planning: { title: "Zabawy w planowanie", what: "Najpierw pomyśl, potem zrób: wyceluj, zaplanuj drogę, powiedz plan na głos." },
      "quiet-voice": { title: "Zabawy w szeptanie", what: "Szepczecie, chodzicie na palcach i celowo mówicie cichutko." },
    },
    tag: {
      "nothing-to-grab": "Zabawy bez zabawek",
      "lying-down": "Zabawy na leżąco",
      sitting: "Zabawy na siedząco",
      standing: "Zabawy na stojąco",
      "on-your-lap": "Zabawy na kolanach",
      quiet: "Ciche zabawy",
      "one-room": "Zabawy w jednym pokoju",
      hallway: "Zabawy na korytarzu",
      bedtime: "Zabawy przed snem",
      mealtime: "Zabawy przy jedzeniu",
      bath: "Zabawy w kąpieli",
      "on-a-walk": "Zabawy na spacerze",
      "in-the-car": "Zabawy w samochodzie",
      stairs: "Zabawy na schodach",
      window: "Zabawy przy oknie",
      socks: "Zabawy ze skarpetkami",
      cushions: "Zabawy z poduszkami",
      chairs: "Zabawy z krzesłami",
      "a-cup": "Zabawy z kubkiem",
      "a-cloth": "Zabawy z chustką",
      "a-book": "Zabawy z książeczką",
      "a-mirror": "Zabawy z lusterkiem",
      "a-ball": "Zabawy z piłką",
      "a-toy": "Zabawy z jedną zabawką",
      stacking: "Zabawy w budowanie wież",
      crayons: "Zabawy z kredkami",
      lights: "Zabawy ze światłem",
      music: "Zabawy z muzyką",
      singing: "Zabawy z piosenkami",
    },
    audience: (ages) => (ages.length === 3 ? "dzieci od 0 do 5 lat" : LIST.format(ages.map((age) => AGE_GENITIVE[age]))),
    titleFor: (title, audience) => `${title} dla ${audience}`,
    countLine: (count, _title, audience) =>
      `Tu znajdziesz ${counted(count, GAMES_ACCUSATIVE)} dla ${audience}, każda na 5 do 15 minut i najwyżej trzy kroki.`,
  },

  games: {
    crumb: "Zabawy",
    title: "Zabawy z niemowlakiem, maluchem i przedszkolakiem",
    intro: (count) =>
      `${counted(count, GAMES)} dla dzieci od 0 do 5 lat, każda na 5 do 15 minut i najwyżej trzy kroki. Każda opiera się na opublikowanym badaniu i na poradniku Center on the Developing Child Uniwersytetu Harvarda albo Amerykańskiej Akademii Pediatrii.`,
    sections: {
      age: "Według wieku",
      energy: "Według energii, która ci została",
      skill: "Według umiejętności, którą rozwija",
      type: "Według rodzaju zabawy",
      tag: "Według tego, gdzie jesteś i co masz pod ręką",
    },
    minutes: (minutes) => counted(minutes, MINUTES),
    minutesShort: (minutes) => `${minutes} min`,
    whyItWorks: "Dlaczego to działa",
    moreOf: (typeTitle) => `Inne ${lowerFirst(typeTitle)}`,
    allOf: (typeTitle) => `Wszystkie ${lowerFirst(typeTitle)}`,
    more: "Więcej zabaw",
    researchBehind: "Badania, na których opierają się te zabawy",
    metaTitle: ({ title, minutes, age }) => `${title}: ${minutes}-minutowa zabawa dla ${AGE_GENITIVE[age]}`,
    metaDescription: ({ blurb, steps, minutes, skills }) =>
      `${blurb} ${counted(steps, STEPS)}, ${counted(minutes, MINUTES)}. Ćwiczy: ${LIST.format(skills.map(lowerFirst))}.`,
  },

  research: {
    design: {
      rct: "Badanie randomizowane",
      experiment: "Eksperyment",
      longitudinal: "Badanie długoterminowe",
      observational: "Badanie obserwacyjne",
    },
    study: "Badanie",
    guide: "Poradnik",
  },

  pitch: {
    title: "Oyno podsuwa taką zabawę co wieczór",
    body: "Wybiera zabawę dopasowaną do wieku dziecka i energii, która ci została, wstrzymuje wybrane aplikacje na czas zabawy, a z każdą rundą mała planeta twojej rodziny rośnie.",
    cta: "Zacznij",
  },

  articles: {
    guide: {
      crumb: "Poradniki",
      title: "Poradniki dla rodziców dzieci od 0 do 5 lat",
      intro: "Dłuższe teksty o tym, jak zabawa rozwija skupienie i samokontrolę, i o odkładaniu telefonu. Każde twierdzenie prowadzi do badania, na którym się opiera.",
    },
    post: {
      crumb: "Blog",
      title: "Blog Oyno",
      intro: "Krótkie teksty dla zmęczonych rodziców: zabawy na dziś wieczór, co mówią badania i jak odebrać wieczór telefonowi.",
    },
    tryThese: "Wypróbuj te zabawy",
    sources: "Źródła",
    byline: (name) => `${name}, twórca Oyno`,
  },

  sources: {
    "cdc-guide": {
      says: {
        "0-1": "Dla dzieci od 6 do 18 miesięcy: zabawy na kolanach z oczekiwaną niespodzianką, zabawy w chowanie, zabawy w naśladowanie i powtarzanie, proste odgrywanie ról, zabawy paluszkowe i rozmowa o tym, co zauważa niemowlę.",
        "1-3": "Dla dzieci od 18 do 36 miesięcy: taniec z zamieraniem i piosenki „start i stop”, piosenki z ruchami, Follow the Leader („idź za przewodnikiem”), wyzwania ruchowe, rozmowa i opowiadanie z pytaniem „co zrobisz dalej?”, rozmowy o uczuciach, dopasowywanie i zabawne sortowanie, układanki oraz zabawa w udawanie, którą kieruje dziecko.",
        "3-5": "Dla dzieci od 3 do 5 lat: zabawa w udawanie z planem zabawy, opowiadanie i odgrywanie historii, czytanie, ruch do rytmu i zabawy z piosenkami, tory przeszkód i równowaga, pozycje jogi z powolnym oddychaniem, taniec raz szybki, raz wolny, taniec z zamieraniem, sortowanie ze zmienioną regułą, bingo odwrotności, piosenki z dokładanymi zwrotkami, gotowanie z czekaniem oraz układanki.",
      },
    },
    "cdc-guide-5-7": {
      says: {
        "3-5": "Dla dzieci od 5 do 7 lat: taniec z zamieraniem, zabawa w krzesełka, Red Light Green Light („Raz, dwa, trzy, Baba Jaga patrzy”), Mother May I, What Time Is It Mr Fox, zabawa w magiczne słowo, Simon Says („Szymon mówi”) i Do As I Say Not As I Do („rób, co mówię, a nie to, co robię”), zabawy w naśladowanie, zawołanie i odpowiedź, piosenki z dokładanymi zwrotkami, Packing for a Picnic („Jadę na piknik i zabieram…”), Concentration (memory), wyklaskiwanie rytmów, joga, Guess My Rule („zgadnij moją regułę”) i I Spy („Widzę coś, czego ty nie widzisz”).",
      },
    },
    "brain-play": {
      says: {
        "0-1": "Dla dzieci w wieku 6 i 9 miesięcy: a kuku i zabawy w chowanie, Trot Trot to Boston, Pat-a-Cake („Kosi, kosi łapci”), Dickory Dean, Baby See Baby Do, upuszczanie zabawki na zmianę z okrzykiem „bum!”, zabawy w rozmowę i zabawy paluszkowe.",
        "1-3": "Dla dzieci od 12 miesięcy do 3 lat: Toddler See Toddler Do, odkrywanie poduszek rozłożonych na podłodze, udawane telefonowanie i prace domowe, Dump and Fill (wysypywanie i napełnianie), prosta zabawa w chowanego, zabawa na pamięć z trzema kubkami, dopasowywanie i sortowanie, piosenki z ruchem, taniec z zamieraniem, Follow the Leader, liczenie, układanki i Be the Narrator („bądź narratorem”).",
        "3-5": "Dla dzieci od 4 do 7 lat: taniec z zamieraniem w pozach, Simon Says („Szymon mówi”), Red Light Green Light („Raz, dwa, trzy, Baba Jaga patrzy”), Duck Duck Goose, What Time Is It Mr Fox, I Spy („Widzę coś, czego ty nie widzisz”), Opposites Bingo (bingo odwrotności) i Continue the Story („opowiadaj dalej”).",
      },
    },
    "serve-return": {
      says: {
        "0-1": "Zauważ „podanie” dziecka i skup się na tym samym co ono, odbij je ze wsparciem, nazwij to, co dziecko widzi lub czuje, czekajcie na swoją kolej i ćwiczcie zakończenia i początki, a przykładem jest a kuku.",
        "1-3": "Zauważ „podanie” dziecka i skup się na tym samym co ono, odbij je ze wsparciem, nazwij to, co dziecko widzi lub czuje, czekajcie na swoją kolej i ćwiczcie zakończenia i początki, a przykładem jest a kuku.",
      },
    },
    "aap-play": {
      says: {
        "0-1": "Zabawa wyrasta z uśmiechu społecznego w wymianę „podanie i odbicie”, a kuku i „kosi, kosi łapci”, a pediatrzy od urodzenia zalecają czytanie na głos obok zabawy.",
        "1-3": "Zabawa przedmiotami, która staje się symboliczna, podstawowe umiejętności ruchowe, czekanie na swoją kolej i rusztowanie, gdy dorosły obraca element układanki, żeby pomóc.",
        "3-5": "Zabawa w udawanie i zabawa społeczna według reguł, zabawa ruchowa i siłowanki oraz gry, których reguły dzieci same negocjują.",
      },
    },
    "diamond-1985": {
      studied: "Niemowlęta w wieku od 7½ do 12 miesięcy (12. miesiąc to pierwszy miesiąc przedziału maluchów) odnajdujące zabawkę ukrytą pod jedną z dwóch osłon po krótkim opóźnieniu, czyli zadanie A-not-B.",
    },
    "reznick-2004": {
      studied: "Niemowlęta w wieku od 5½ do 6½ miesiąca odnajdujące zabawkę po krótkim opóźnieniu, czyli najwcześniejsza pamięć robocza.",
    },
    "haith-1988": {
      studied: "Niemowlęta w wieku 3½ miesiąca uczące się sekwencji obrazków po lewej i po prawej stronie i spoglądające z wyprzedzeniem tam, gdzie miał się pojawić następny obrazek.",
    },
    "rochat-1999": {
      studied: "Niemowlęta w wieku od 2 do 6 miesięcy reagujące, gdy zaburzano rytm i strukturę zabawy w a kuku oraz gaworzenia na zmianę.",
    },
    "yu-smith-2016": {
      studied: "Roczne dzieci dłużej skupiające uwagę na zabawce, gdy rodzic patrzył na tę samą zabawkę i ją nazywał.",
    },
    "cuevas-bell-2014": {
      studied: "Skupiona uwaga w wieku 5 miesięcy przewidywała funkcje wykonawcze w wieku od 24 do 48 miesięcy.",
    },
    "nakata-trehub-2004": {
      studied: "Niemowlęta w wieku 6 miesięcy dłużej skupiające uwagę na mamie, gdy śpiewała, niż gdy mówiła.",
    },
    "ross-lollis-1987": {
      studied: "Niemowlęta w wieku od 9 do 18 miesięcy w zabawach na zmianę, takich jak dawanie i branie czy a kuku, dające znać, gdy dorosły opuścił swoją kolej.",
    },
    "landry-2006": {
      studied: "Szkolenie z responsywnego rodzicielstwa dla rodziców niemowląt w wieku od 6 do 10 miesięcy poprawiło uwagę niemowląt i ich samodzielne rozwiązywanie problemów.",
    },
    "bernier-2010": {
      studied: "Wrażliwe mówienie do dziecka z uwzględnieniem jego myśli i wspieranie jego autonomii w wieku od 12 do 15 miesięcy przewidywały funkcje wykonawcze w wieku 18 i 26 miesięcy.",
    },
    "mendelsohn-2018": {
      studied: "Szkolenie z czytania na głos i zabawy w udawanie od urodzenia do 3 lat zmniejszyło nadpobudliwość i problemy z uwagą w wieku 4½ roku.",
    },
    "hughes-ensor-2005": {
      studied: "Dwulatki w zadaniu Spin the Pots, w którym trzeba zapamiętać, które garnki zostały opróżnione, oraz w zadaniu Baby Stroop, w którym duży kubek nazywa się dzidziusiem.",
    },
    "kochanska-2000": {
      studied: "Dzieci w wieku od 22 do 45 miesięcy czekające na smakołyk, powoli idące po linii, szepczące, zatrzymujące się i ruszające na sygnał oraz budujące wieżę na zmianę.",
    },
    "vallotton-ayoub-2011": {
      studied: "Słownictwo i mowa maluchów w wieku od 14 do 36 miesięcy przewidywały wzrost samoregulacji.",
    },
    "hammond-2012": {
      studied: "Rusztowanie ze strony rodziców, czyli tyle pomocy, ile trzeba, i pytanie, co dalej, podczas układania puzzli w wieku od 2 do 3 lat przewidywało funkcje wykonawcze w wieku od 3 do 4 lat.",
    },
    "williams-2015": {
      studied: "Wspólne śpiewanie, taniec i zabawy muzyczne w domu w wieku od 2 do 3 lat przewidywały uwagę i samoregulację w wieku 5 lat.",
    },
    "carlson-2005": {
      studied: "Dzieci w wieku od 2 do 6 lat w zadaniach dobranych do wieku: czekanie na przekąskę i na prezent, odwrotne sortowanie, miś i smok, Simon says, szept, dzień i noc, mniej znaczy więcej.",
    },
    "zelazo-2006": {
      studied: "Dzieci w wieku od 3 do 5 lat sortujące karty według koloru, a potem według kształtu, czyli zadanie Dimensional Change Card Sort.",
    },
    "gerstadt-1994": {
      studied: "Dzieci w wieku od 3½ do 7 lat mówiące „noc” na kartę ze słońcem i „dzień” na kartę z księżycem.",
    },
    "ponitz-2009": {
      studied: "Dzieci w wieku od 4 do 6 lat dotykające palców stóp na słowo „głowa” i głowy na słowo „palce”, co przewidywało wyniki w zerówce.",
    },
    "tominey-mcclelland-2011": {
      studied: "Przedszkolaki w wieku od 3 do 5 lat grające w zabawy w kole Red Light Purple Light, w zamieranie z zamienionymi regułami, w uderzenia bębna i w dyrygowanie poprawiły samoregulację.",
    },
    "schmitt-2015": {
      studied: "Przedszkolaki z programu Head Start grające w zabawy Red Light Purple Light poprawiły samoregulację i gotowość szkolną.",
    },
    "thibodeau-2016": {
      studied: "Dzieci w wieku od 3 do 5 lat po pięciu tygodniach fantastycznej zabawy w udawanie poprawiły pamięć roboczą i hamowanie.",
    },
    "elias-berk-2002": {
      studied: "Złożona zabawa socjodramatyczna przedszkolaków przewidywała późniejszą samoregulację.",
    },
    "bugos-demarie-2017": {
      studied: "Dzieci w wieku od 4 do 6 lat w krótkim programie muzycznym ze śpiewem, rytmem i instrumentami poprawiły funkcje wykonawcze.",
    },
    "razza-2015": {
      studied: "Przedszkolaki ćwiczące uważną jogę, z utrzymywanymi pozycjami i powolnym oddychaniem, poprawiły samoregulację.",
    },
    "schmitt-2018": {
      studied: "Przedszkolaki w półstrukturyzowanej zabawie klockami, budujące według planów i obrazków, poprawiły funkcje wykonawcze.",
    },
    "mulvey-2018": {
      studied: "Przedszkolaki w programie ruchowym ze skakaniem na jednej nodze, skokami, rzucaniem i łapaniem poprawiły funkcje wykonawcze.",
    },
    "thorell-2009": {
      studied: "Dzieci w wieku od 4 do 5 lat trenujące zadania na pamięć roboczą poprawiły pamięć roboczą w zadaniach, których nie trenowały, oraz uwagę.",
    },
    "lind-2017": {
      studied: "Szkolenie rodziców dzieci w wieku od 6 do 21 miesięcy, jak podążać za dzieckiem, odpowiadać mu i cieszyć się nim, poprawiło elastyczność poznawczą w wieku 48 miesięcy.",
    },
    "garon-2014": {
      studied: "Dzieci w wieku od 18 do 67 miesięcy w zestawie zadań na pamięć roboczą, hamowanie i przełączanie, który wychwytywał różnice wieku.",
    },

    "tronick-1978": {
      studied: "Niemowlęta w wieku od 1 do 4 miesięcy, których mamy zastygały z nieruchomą, niereagującą twarzą, w ciągu kilku minut stawały się nieufne i wycofywały się, czyli eksperyment still-face (nieruchomej twarzy).",
    },
    "radesky-2014": {
      studied: "Badacze obserwowali 55 opiekunów jedzących z małymi dziećmi w restauracjach typu fast food; większość używała telefonu podczas posiłku, a najbardziej pochłonięci często odpowiadali na sygnały dziecka z opóźnieniem lub szorstko.",
    },
    "mcdaniel-radesky-2018": {
      studied: "Rodzice małych dzieci, którzy zgłaszali więcej przerw wywołanych przez telefon w czasie z rodziną, zgłaszali też więcej problemów z zachowaniem dziecka.",
    },
    "myruski-2018": {
      studied: "Niemowlęta w wieku od 7 do 24 miesięcy denerwowały się, gdy mama w zadaniu still-face zwracała się do telefonu, a te, których mamy częściej używały urządzeń w domu, słabiej dochodziły do siebie.",
    },
    "kushlev-dunn-2019": {
      studied: "Rodzice w muzeum nauki, których poproszono, by dużo korzystali z telefonów, czuli się bardziej rozkojarzeni i mniej związani z dziećmi niż rodzice poproszeni, by korzystali z nich mało.",
    },
    "andrews-2015": {
      studied: "Młodzi dorośli, których telefony rejestrowały korzystanie, sięgali po nie około 85 razy dziennie i używali ich około pięciu godzin, mniej więcej dwa razy więcej, niż sami szacowali.",
    },
    "mcdaniel-coyne-2016": {
      studied: "143 kobiety w związkach małżeńskich lub mieszkające z partnerem podały w ankiecie, że urządzenia często przerywały im czas z partnerem, co autorzy nazwali technoferencją (technoference), a te, które zgłaszały jej więcej, zgłaszały też więcej konfliktów o technologię i mniejsze zadowolenie ze związku.",
    },
    "chotpitayasunondh-douglas-2016": {
      studied: "Badanie phubbingu, czyli lekceważenia kogoś w towarzystwie przez patrzenie w telefon zamiast rozmowy, wykazało, że osoby, które częściej phubbowały i były częściej phubbowane, uważały to za bardziej normalne.",
    },
    "reed-2017": {
      studied: "38 mam uczyło swoje dwulatki dwóch nowych słów, a dzieci nauczyły się słowa uczonego bez przerwy, ale nie tego przerwanego telefonem, choć każde słowo padło tyle samo razy.",
    },
    "vanden-abeele-2020": {
      studied: "Badacze obserwowali 53 rodziców dzieci w wieku od 0 do 5 lat w poczekalniach i na placach zabaw: 23 używało telefonu, szansa na odpowiedź na sygnał dziecka była w tym czasie pięć razy mniejsza, szybkie zerknięcie nie robiło różnicy, a głębokie pochłonięcie innymi zajęciami działało mniej więcej tak samo.",
    },
    "radesky-2015": {
      studied: "W nagrywanym zadaniu laboratoryjnym z udziałem 225 mam i ich sześciolatków 23% mam samo z siebie sięgnęło po urządzenie mobilne, a te, które to zrobiły, miały mniej interakcji z dzieckiem, przede wszystkim niewerbalnych.",
    },
    "mcdaniel-radesky-2018b": {
      studied: "183 pary z dzieckiem w wieku od 0 do 5 lat wypełniały ankiety przez sześć miesięcy: trudniejsze zachowanie dziecka przewidywało więcej zakłóceń przez technologię za pośrednictwem stresu rodzicielskiego, a te zakłócenia często przewidywały później więcej zachowań eksternalizacyjnych.",
    },
    "konrad-2021": {
      studied: "Mamy dzieci w wieku od 20 do 22 miesięcy, które przerwały zabawę na dwie minuty, by wypełnić kwestionariusz na smartfonie lub na papierze, reagowały na dziecko słabiej, a ich maluchy częściej domagały się uwagi.",
    },
    "dwyer-2018": {
      studied: "Ponad 300 osób jedzących posiłek w restauracji z przyjaciółmi lub rodziną, którym losowo kazano trzymać telefony na stole albo je schować, czuło się bardziej rozkojarzonych i mniej cieszyło się posiłkiem, gdy telefony leżały na wierzchu.",
    },
    "stothart-2015": {
      studied: "Same powiadomienia z telefonu, nawet gdy nikt go nie dotykał, zakłócały wykonanie zadania wymagającego uwagi mniej więcej tak samo jak odebranie połączenia czy pisanie wiadomości.",
    },
    "oulasvirta-2012": {
      studied: "Trzy badania użytkowników smartfonów wykazały nawyk sprawdzania, czyli krótkie, powtarzane zerknięcia na treści, do których łatwo szybko dotrzeć, odczuwany przez użytkowników bardziej jako uciążliwość niż uzależnienie.",
    },
    "wood-2002": {
      studied: "W dwóch badaniach dzienniczkowych z cogodzinnymi wpisami ludzie robiący to, co robili niemal codziennie w tym samym otoczeniu, zwykle myśleli o czymś innym i czuli mniej stresu niż przy nowych czynnościach.",
    },
    "lally-2010": {
      studied: "Ochotnicy, którzy przez 12 tygodni powtarzali nowe codzienne zachowanie w tym samym otoczeniu, potrzebowali od 18 do 254 dni, by osiągnąć szczyt automatyzmu, a opuszczenie jednego dnia nie miało na niego istotnego wpływu.",
    },
    "fitz-2019": {
      studied: "237 osób losowo przydzielono do otrzymywania powiadomień jak zwykle, zebranych w paczki trzy razy dziennie albo wcale: grupa z paczkami czuła się bardziej uważna, w lepszym nastroju, bardziej panująca nad telefonem i mniej zestresowana, a grupa bez powiadomień czuła się bardziej niespokojna.",
    },
  },
};
