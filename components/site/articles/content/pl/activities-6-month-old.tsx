import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../activities-6-month-old";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Zabawy z 6-miesięcznym niemowlakiem",
  description:
    "Osiem pięciominutowych zabaw z sześciomiesięcznym maluszkiem, na leżąco albo z dzieckiem na kolanach, i co mówią badania o każdym ich rodzaju.",
  body: (
    <>
      <p>
        Sześciomiesięczny maluszek nie potrzebuje planu zajęć. Potrzebuje ciebie blisko, twojej twarzy tam, gdzie
        może ją widzieć, i kilku minut wymiany na zmianę. Większość zabaw poniżej działa, gdy leżysz na podłodze albo
        na kanapie, i żadna nie wymaga niczego więcej niż kubek, skarpetka albo książeczka.
      </p>
      <p>
        Każda zabawa tutaj pasuje do maluszka w wieku sześciu miesięcy lub młodszego. Każda trwa około pięciu minut.
        Kończ, póki maluszek nadal ma frajdę.
      </p>

      <h2>Na co twój maluszek jest gotowy</h2>
      <p>
        Niemowlęta w wieku od pięciu i pół do sześciu i pół miesiąca odnajdowały zabawkę po krótkim opóźnieniu, co
        badacze uznają za najwcześniejszą pamięć roboczą <Cite id="reznick-2004" />. Pamięć robocza to umiejętność
        trzymania czegoś w głowie i korzystania z tego.
      </p>
      <p>
        Niemowlęta wyczuwają też rytm zabawy. Kiedy badacze zaburzali rytm zabawy w a kuku i gaworzenia na zmianę u
        niemowląt w wieku od 2 do 6 miesięcy, maluchy reagowały <Cite id="rochat-1999" />. A sześciomiesięczne
        niemowlęta dłużej skupiały uwagę, gdy mama im śpiewała, niż gdy do nich mówiła{" "}
        <Cite id="nakata-trehub-2004" />.
      </p>
      <p>
        Center on the Developing Child Uniwersytetu Harvarda proponuje krótką listę dla dzieci od 6 do 18 miesięcy:
        zabawy na kolanach z oczekiwaną niespodzianką, zabawy w chowanie, zabawy w naśladowanie, zabawy paluszkowe i
        rozmowę o tym, co zauważa maluszek <Cite id="cdc-guide" />. Zabawy poniżej trzymają się tej listy.
      </p>

      <h2>Zabawy w chowanie</h2>
      <p>
        <GameLink id="under-the-cup" /> to najprostsza z nich. Przykryj zabawkę odwróconym kubkiem, tak żeby maluszek
        widział, jak znika. Zapytaj „Gdzie się schowała?”, weź jeden spokojny wdech, a potem podnieś kubek z głośnym
        „Ooo!”. Po kilku rundach przykryj zabawkę jeszcze raz i pozwól maluszkowi samemu podnieść kubek.
      </p>
      <p>
        <GameLink id="slow-fist-open" /> wymaga tylko jednej ręki. Zaciśnij pięść na zabawce za dużej do połknięcia,
        tak żeby kawałek wystawał, i zapytaj „Co tu jest?”. Otwieraj palce po jednym, najwolniej jak umiesz. Jeśli
        maluszek rozgina ci palce, pozwól mu, a potem zaciśnij pięść jeszcze raz.
      </p>

      <h2>A kuku i pauza</h2>
      <p>
        Harwardzki materiał Brain-Building Through Play dla dzieci w wieku 6 i 9 miesięcy zaczyna od a kuku i zabaw w
        chowanie, a do tego dodaje rymowanki na kolanach i zabawy paluszkowe <Cite id="brain-play" />. W każdej z
        nich cała frajda kryje się w pauzie przed niespodzianką.
      </p>
      <p>
        W zabawie <GameLink id="hands-peekaboo" /> kładziesz się na plecach z maluszkiem na piersi i zakrywasz twarz
        obiema dłońmi. Nieruchomiejesz na powolne „raz, dwa, trzy”, a potem mówisz „A kuku!” i szeroko otwierasz
        dłonie. Za każdym razem przeciągaj odliczanie trochę dłużej.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> wymaga bosych stópek na twoich kolanach. Mów powoli „Sroczka kaszkę
        warzyła”, dotykając po kolei paluszków u stópki. Przy ostatnim paluszku zatrzymaj się i przytrzymaj stópkę
        nieruchomo na długie „raz, dwa, trzy”. Potem na „frr, poleciała!” przebiegnij palcami do brzuszka i zacznij
        na drugiej stópce.
      </p>

      <h2>Rozmowa i naśladowanie</h2>
      <p>
        Maluszek potrafi mówić na zmianę na długo przed pierwszymi słowami. W zabawie{" "}
        <GameLink id="babble-back" /> czekasz na jakikolwiek dźwięk, a potem odpowiadasz na niego, jakby to było
        prawdziwe zdanie. Przerwij, popatrz na maluszka i daj mu długą chwilę na jego kolej. Pozwól mu zakończyć
        rozmowę, gdy odwróci wzrok.
      </p>
      <p>
        W zabawie <GameLink id="copy-cat-faces" /> powtarzasz minę albo dźwięk maluszka chwilę po nim: wystawiony
        język, pisk, zmarszczone czoło. Po kilku rundach pokaż powoli jedną własną, nową minę, przytrzymaj ją i
        poczekaj, aż maluszek spróbuje ją powtórzyć.
      </p>
      <p>
        Harvard nazywa to „podaniem i odbiciem”. Zauważ, na czym skupia się maluszek, odpowiedz na to, nazwij to, co
        widzi lub czuje, a potem mówcie na zmianę i czekaj <Cite id="serve-return" />. W badaniu randomizowanym
        szkolenie rodziców niemowląt w wieku od 6 do 10 miesięcy z takiego reagowania poprawiło uwagę maluszków i ich
        samodzielne rozwiązywanie problemów <Cite id="landry-2006" />.
      </p>

      <h2>Piosenki i książeczki</h2>
      <p>
        <GameLink id="big-tiny-voice" /> korzysta z piosenki, którą maluszek słyszał już sto razy. Zaśpiewaj jeden
        wers najgłośniej, jak umiesz, z szeroko rozłożonymi rękami. Następny wers zaśpiewaj szeptem, nachylając się
        blisko, żeby patrzył na twoje usta. Zmieniaj tak na zmianę, a zmieniaj wcześniej, gdy tylko jego oczy spotkają
        twoje.
      </p>
      <p>
        Do książeczek wypróbuj <GameLink id="flat-out-story" />. Połóżcie się obok siebie na łóżku i trzymaj otwartą
        książeczkę obrazkową nad wami. Wskaż jeden obrazek, nazwij go i poczekaj, aż maluszek na niego spojrzy. Jeśli
        patrzy na coś innego na stronie, nazwij to i zostańcie przy tym.
      </p>
      <p>
        Wspólne patrzenie na jedną rzecz to trening uwagi. W jednym badaniu to, jak dobrze niemowlęta skupiały uwagę
        w wieku 5 miesięcy, przewidywało ich funkcje wykonawcze w wieku od 2 do 4 lat{" "}
        <Cite id="cuevas-bell-2014" />. Amerykańska Akademia Pediatrii zaznacza, że pediatrzy od urodzenia zalecają
        czytanie na głos obok zabawy <Cite id="aap-play" />. W badaniu randomizowanym szkolenie rodziców z czytania na
        głos i zabawy w udawanie od urodzenia do 3 lat zmniejszyło nadpobudliwość i problemy z uwagą w wieku czterech i
        pół roku <Cite id="mendelsohn-2018" />.
      </p>

      <h2>Jak wpleść to w zmęczony wieczór</h2>
      <p>
        Nie potrzebujesz wszystkich ośmiu. Wybierz tę, która pasuje do miejsca, w którym już jesteś: na plecach, na
        kanapie albo na podłodze. Pięć minut to pełna runda. Jeśli zabawa się dziś sprawdziła, pobawcie się w nią
        jutro jeszcze raz.
      </p>
      <p>
        Więcej znajdziesz w <Link href="/games/age/babies">zabawach z niemowlakiem</Link>, a{" "}
        <Link href="/games/energy/low">leniwe zabawy</Link> to te, w które bawisz się bez wstawania. Jeśli masz
        pytania o rozwój swojego maluszka, porozmawiaj z pediatrą.
      </p>
    </>
  ),
};
