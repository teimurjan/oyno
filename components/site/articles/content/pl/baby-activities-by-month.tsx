import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../baby-activities-by-month";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Zabawy z niemowlakiem od 0 do 12 miesięcy, miesiąc po miesiącu",
  description:
    "Proste zabawy na każdy etap pierwszego roku życia maluszka, od a kuku na twojej piersi po zabawy na zmianę, z tym, co wykazały badania w każdym wieku.",
  body: (
    <>
      <p>
        Zabawa, która w jednym miesiącu rozśmieszała maluszka, kilka tygodni później może go nudzić. Ten poradnik
        układa proste zabawy według etapów, od pierwszych tygodni do pierwszych urodzin. Każda trwa od 5 do 15 minut,
        a większość wymaga tylko twojej twarzy, twojego głosu i może kubka albo chustki.
      </p>
      <p>
        Miesiące pochodzą z badań opisanych niżej, w których badano niemowlęta w tym wieku. Traktuj je jak przybliżoną
        mapę, a nie listę kontrolną. Jeśli zabawa z wcześniejszego etapu nadal wywołuje uśmiech, bawcie się w nią dalej.
      </p>
      <p>
        Dziś wieczorem znajdź poniżej etap swojego maluszka, wybierz jedną zabawę i przeczytaj raz jej kroki. Zostaw
        telefon w innym pokoju, bawcie się, aż maluszek odwróci wzrok, i na tym skończ.
      </p>

      <h2>Jak wygląda zabawa w pierwszym roku</h2>
      <p>
        Amerykańska Akademia Pediatrii opisuje, jak zabawa w pierwszym roku wyrasta z uśmiechu społecznego w wymianę
        „podanie i odbicie”, a kuku i „kosi, kosi łapci”. Jej pediatrzy zalecają też od urodzenia czytanie na głos obok
        zabawy <Cite id="aap-play" />.
      </p>
      <p>
        Dla dzieci od 6 do 18 miesięcy Center on the Developing Child Uniwersytetu Harvarda poleca zabawy na kolanach z
        oczekiwaną niespodzianką, zabawy w chowanie, zabawy w naśladowanie, proste odgrywanie ról, zabawy paluszkowe i
        rozmowę o tym, co zauważa maluszek <Cite id="cdc-guide" />. Prawie każda zabawa poniżej należy do tej listy. Z
        etapu na etap zmienia się to, co wnosi do niej maluszek.
      </p>

      <h2>Od 0 do 3 miesięcy: twoja twarz i twój głos</h2>
      <p>
        W pierwszych tygodniach to ty jesteś zabawką. Zabawą jest twoja twarz, twój głos i pauzy między nimi.
      </p>
      <p>
        Niemowlęta zauważają, gdy ta twarz zastyga. W klasycznym eksperymencie niemowlęta w wieku od 1 do 4 miesięcy,
        których mamy zastygały z nieruchomą, niereagującą twarzą, w ciągu kilku minut stawały się nieufne i wycofywały
        się <Cite id="tronick-1978" />. Niemowlęta wyczuwają też kształt zabawy. Kiedy badacze zaburzali rytm i
        strukturę zabawy w a kuku oraz gaworzenia na zmianę, niemowlęta w wieku od 2 do 6 miesięcy reagowały na zmianę{" "}
        <Cite id="rochat-1999" />.
      </p>
      <p>Do tego etapu pasują dwie zabawy i w obie bawisz się na leżąco:</p>
      <ul>
        <li>
          <GameLink id="hands-peekaboo" />: połóż się na plecach z maluszkiem na piersi i zakryj twarz obiema dłońmi.
          Znieruchomiej na powolne „raz, dwa, trzy”, a potem powiedz „A kuku!” i szeroko otwórz dłonie. Za każdym
          razem przeciągaj odliczanie trochę dłużej i skończ, póki maluszek jeszcze się uśmiecha.
        </li>
        <li>
          <GameLink id="missing-last-word" />: zaśpiewaj powoli piosenkę, którą maluszek słyszał już sto razy,
          patrząc mu w twarz. Zatrzymaj się tuż przed ostatnim słowem wersu i zawieś głos, unosząc brwi. Poczekaj na
          wiercenie, kopnięcie albo spojrzenie, a potem zaśpiewaj brakujące słowo z wielkim uśmiechem.
        </li>
      </ul>
      <p>
        Książeczki też się liczą, od samego początku. W badaniu randomizowanym, w którym szkolono rodziców z czytania na
        głos i zabawy w udawanie z dzieckiem od urodzenia do 3 lat, szkolenie zmniejszyło nadpobudliwość i problemy z
        uwagą w wieku czterech i pół roku <Cite id="mendelsohn-2018" />. Więcej zabaw na kolanach znajdziesz w{" "}
        <Link href="/games/type/anticipation-rhyme">rymowankach z niespodzianką</Link> i w{" "}
        <Link href="/games/type/peekaboo">zabawach w a kuku</Link>.
      </p>

      <h2>Od 3 do 6 miesięcy: patrzenie i oczekiwanie</h2>
      <p>
        Maluszek zaczyna patrzeć z wyprzedzeniem. W jednym eksperymencie niemowlęta w wieku 3 i pół miesiąca uczyły się
        sekwencji obrazków po lewej i po prawej stronie i spoglądały z wyprzedzeniem tam, gdzie miał się pojawić
        następny obrazek <Cite id="haith-1988" />.
      </p>
      <p>
        Uwaga też należy do tego etapu. To, jak dobrze niemowlęta skupiały uwagę w wieku 5 miesięcy, przewidywało ich
        funkcje wykonawcze w wieku od 2 do 4 lat <Cite id="cuevas-bell-2014" />. Funkcje wykonawcze to zestaw
        umiejętności, dzięki którym dziecko trzyma myśl w głowie, zatrzymuje się, zanim coś zrobi, i zmienia plan. Nasz{" "}
        <Link href="/guides/executive-function-babies-toddlers">poradnik o funkcjach wykonawczych</Link> wyjaśnia to
        dokładniej.
      </p>
      <p>
        Pod koniec tego etapu pojawiają się pierwsze oznaki pamięci roboczej. Niemowlęta w wieku od pięciu i pół do
        sześciu i pół miesiąca odnajdowały zabawkę po krótkim opóźnieniu <Cite id="reznick-2004" />.
      </p>
      <ul>
        <li>
          <GameLink id="toy-comet" />: połóżcie się na plecach i trzymaj zabawkę mniej więcej na długość przedramienia
          od twarzy maluszka, aż jego wzrok się na niej zatrzyma. Przesuwaj ją powoli w bok, zatrzymaj i poczekaj, aż
          oczy ją dogonią, zanim ruszysz dalej. Skończ, gdy maluszek odwróci wzrok.
        </li>
        <li>
          <GameLink id="peeking-tail" />: dla maluszka około 5 miesięcy, który chwyta, ale jeszcze nie znajduje
          zabawki schowanej w całości. Przykryj zabawkę chustką tak, żeby róg wystawał. Zapytaj „Gdzie się
          schowała?”, stuknij w wystający kawałek i czekaj z rękami przy sobie. Gdy ściągnie chustkę, pochwal go
          cichutko, a następnym razem zakryj trochę więcej zabawki.
        </li>
      </ul>
      <p>
        Więcej znajdziesz w <Link href="/games/type/joint-attention">zabawach w patrzenie i pokazywanie</Link> oraz w{" "}
        <Link href="/games/type/hide-and-find">zabawach w chowanie i szukanie</Link>.
      </p>

      <h2>Od 6 do 9 miesięcy: piosenki, naśladowanie i chowanie</h2>
      <p>
        Teraz śpiewanie zasługuje na swoje miejsce. Niemowlęta w wieku 6 miesięcy dłużej skupiały uwagę na mamie, gdy
        śpiewała, niż gdy mówiła <Cite id="nakata-trehub-2004" />. Nie potrzebujesz dobrego głosu, tylko piosenki,
        którą maluszek zna.
      </p>
      <p>
        Dla niemowląt w wieku 6 i 9 miesięcy harwardzkie materiały Brain-Building Through Play wymieniają a kuku i
        zabawy w chowanie, Trot Trot to Boston, Pat-a-Cake („Kosi, kosi łapci”), Dickory Dean, Baby See Baby Do,
        upuszczanie zabawki na zmianę z okrzykiem „bum!”, zabawy w rozmowę i zabawy paluszkowe{" "}
        <Cite id="brain-play" />.
      </p>
      <p>
        W tym wieku liczy się to, jak reagujesz. W badaniu randomizowanym szkolenie rodziców z reagowania na niemowlęta
        w wieku od 6 do 10 miesięcy poprawiło uwagę maluszków i ich samodzielne rozwiązywanie problemów{" "}
        <Cite id="landry-2006" />. Od około 7 i pół miesiąca niemowlęta w klasycznym eksperymencie potrafiły odnaleźć
        zabawkę ukrytą pod jedną z dwóch osłon po krótkim opóźnieniu <Cite id="diamond-1985" />.
      </p>
      <ul>
        <li>
          <GameLink id="copy-cat-faces" />: powtórz minę albo dźwięk maluszka chwilę po nim: wystawiony język, pisk,
          zmarszczone czoło. Po kilku razach pokaż powoli własną, nową minę i ją przytrzymaj. Czekaj z tą miną, aż
          maluszek spróbuje ją powtórzyć.
        </li>
        <li>
          <GameLink id="two-cup-switch" />: na tackę krzesełka do karmienia i dla maluszka od około 8 miesięcy. Odwróć
          dwa kubki do góry dnem i wsuń zabawkę pod jeden, gdy maluszek patrzy. Policz powoli „raz, dwa, trzy”, a potem
          pozwól mu podnieść kubek. Po kilku udanych próbach przełóż zabawkę pod drugi kubek na jego oczach, policz
          znowu i patrz, gdzie sięgnie.
        </li>
      </ul>
      <p>
        Więcej znajdziesz w{" "}
        <Link href="/games/type/fingerplay-song">zabawach paluszkowych i piosenkach z ruchem</Link> oraz w{" "}
        <Link href="/games/type/imitation">zabawach w naśladowanie</Link>.
      </p>

      <h2>Od 9 do 12 miesięcy: kolejki, pokazywanie i pierwsze udawanie</h2>
      <p>
        Zabawy stają się prawdziwą wymianą. Niemowlęta w wieku od 9 do 18 miesięcy w zabawach na zmianę, takich jak
        dawanie i branie czy a kuku, dawały znać, gdy dorosły opuścił swoją kolej <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        Około pierwszych urodzin liczy się to, gdzie patrzysz. Roczne dzieci dłużej skupiały uwagę na zabawce, gdy
        rodzic patrzył na tę samą zabawkę i ją nazywał <Cite id="yu-smith-2016" />. Mówienie też się liczy. Wrażliwe
        mówienie rodziców o tym, co maluszek może myśleć, i wspieranie go, gdy robi coś sam, w wieku od 12 do 15
        miesięcy przewidywały funkcje wykonawcze w wieku 18 i 26 miesięcy <Cite id="bernier-2010" />. W domu może to
        być coś tak drobnego jak powiedzenie, czego według ciebie maluszek chce, „chcesz łyżeczkę”, i pozwolenie mu
        spróbować, zanim pomożesz.
      </p>
      <ul>
        <li>
          <GameLink id="toy-give-back" />: dla maluszka od około 9 miesięcy na twoich kolanach. Podaj mu zabawkę i
          powiedz „proszę”. Potem wyciągnij otwartą dłoń, powiedz „teraz ja” i czekaj bez zabierania, nawet jeśli to
          potrwa minutę. Gdy zabawka wyląduje na twojej dłoni, powiedz „dziękuję” i od razu ją oddaj ze słowami „teraz
          ty”.
        </li>
        <li>
          <GameLink id="look-where-i-look" />: dla maluszka około 9 miesięcy, który już siedzi. Połóż przed wami na
          podłodze dwie zabawki. Odwróć głowę do jednej z nich, wpatrz się w nią i raz powiedz, co to. Poczekaj, aż
          jego wzrok podąży za twoim, a potem nazwij ją jeszcze raz i daj mu ją.
        </li>
      </ul>
      <p>
        Proste odgrywanie ról z harwardzkiej listy powyżej też tu pasuje: pusty kubek, z którego głośno siorbiesz, albo
        udawany telefon do babci. Więcej znajdziesz w <Link href="/games/type/turn-taking">zabawach na zmianę</Link>{" "}
        i w <Link href="/games/type/pretend-play">zabawach w udawanie</Link>, a wszystkie są w{" "}
        <Link href="/games/age/babies">zabawach z niemowlakiem</Link>.
      </p>

      <h2>Co się nie zmienia przez cały rok</h2>
      <p>
        Metoda nie zmienia się z miesiącami. Harwardzki materiał o „podaniu i odbiciu” ujmuje ją w pięciu krokach:
        zauważ, na czym skupia się maluszek, i skup się na tym razem z nim, odpowiedz ze wsparciem, nazwij to, co widzi
        lub czuje, czekajcie na swoją kolej i ćwicz zakończenia i początki. Jego przykładem jest a kuku{" "}
        <Cite id="serve-return" />.
      </p>
      <p>
        Podążanie za maluszkiem to umiejętność do ćwiczenia. Gdy rodziców dzieci w wieku od 6 do 21 miesięcy szkolono,
        jak podążać za dzieckiem, odpowiadać mu i cieszyć się nim, poprawiło to elastyczność poznawczą ich dzieci w
        wieku 4 lat <Cite id="lind-2017" />.
      </p>
      <p>Kilka nawyków z kroków powyższych zabaw pasuje do każdego etapu:</p>
      <ul>
        <li>Kończ, póki maluszek jeszcze się uśmiecha, a nie wtedy, gdy ma już dość.</li>
        <li>Gdy odwraca wzrok, potraktuj to jako koniec rundy.</li>
        <li>Za każdym razem przeciągaj pauzę trochę dłużej i pozwól mu ją wypełnić.</li>
        <li>Nazywaj to, na co patrzy, kilkoma ciepłymi słowami.</li>
      </ul>
      <p>
        Niemowlęta zauważają też telefon. Niemowlęta w wieku od 7 do 24 miesięcy denerwowały się, gdy mama w zadaniu
        still-face zwracała się do telefonu, a te, których mamy częściej używały urządzeń w domu, słabiej dochodziły do
        siebie <Cite id="myruski-2018" />. Wiem, jak trudno go odłożyć. Pracuję cały dzień, wracam do domu i sięgam po
        telefon. Na dziesięć minut zabawy zostaw go w innym pokoju.
      </p>

      <h2>Jeśli maluszek jeszcze tego nie robi</h2>
      <p>
        Miesiące w tym poradniku to wiek, w którym badano dzieci, a nie terminy. Jeśli dziś zabawa okaże się za trudna,
        wróć do jednej z poprzedniego etapu. Większość tych zabaw ma wbudowany łatwiejszy początek: wystający róg przed
        zabawką schowaną w całości, krótka pauza przed długą.
      </p>
      <p>
        Nie musisz niczego śledzić ani sprawdzać maluszka. Wybierz jedną zabawę na dziś i bawcie się, dopóki sprawia mu
        frajdę. Jeśli martwisz się rozwojem swojego maluszka, porozmawiaj z pediatrą.
      </p>
    </>
  ),
};
