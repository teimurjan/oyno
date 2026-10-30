import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../rainy-day-games-toddlers";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Zabawy z maluchem w deszczowy dzień",
  description:
    "Osiem aktywnych zabaw w domu dla malucha, który nie może wyjść: tunele z krzeseł, wyścigi na korytarzu, lawa z poduszek i zabawy w zamieranie, z najmłodszym wiekiem dla każdej.",
  body: (
    <>
      <p>
        Dzień zamknięty w domu z maluchem jest długi. Te zabawy są na godziny, gdy dziecko wciąż ma energię do spalenia, a
        wyjście nie wchodzi w grę. Korzystają z korytarza, poduszek z kanapy i kuchennych krzeseł, a większość ma sygnał,
        który na chwilę zatrzymuje bieganie.
      </p>
      <p>
        Przy każdej zabawie podany jest najmłodszy wiek, do którego pasuje. Niektóre działają od pierwszych urodzin, inne
        od 2 lat. Nie potrzebujesz wszystkich ośmiu jednego dnia. Wybierz dwie, bawcie się w każdą przez dziesięć minut, a
        resztę zostaw na następny dzień w domu.
      </p>

      <h2>Zbudujcie tunel</h2>
      <p>
        <GameLink id="chair-tunnels" /> działa od roku. Ustaw w rzędzie dwa albo trzy kuchenne krzesła, żeby zrobić tunel,
        z poduszką na końcu jako metą. Najpierw ty przeczołgaj się powoli, żeby dziecko widziało drogę, a potem idź za
        nim. Po kilku przejściach dołóż poduszkę do wspinania.
      </p>
      <p>
        Harwardzki materiał Brain-Building Through Play dla dzieci od 12 miesięcy do 3 lat wymienia odkrywanie poduszek
        rozłożonych na podłodze <Cite id="brain-play" />. Gdy dziecko zatrzyma się w tunelu, zapytaj „a teraz co?”,
        zamiast pokazywać. Wtedy plan zostaje w jego rękach. W jednym badaniu wspieranie przez rodziców własnych prób
        dziecka w wieku od 12 do 15 miesięcy przewidywało funkcje wykonawcze w wieku 18 i 26 miesięcy{" "}
        <Cite id="bernier-2010" />. Więcej znajdziesz w <Link href="/games/tag/chairs">zabawach z krzesłami</Link>.
      </p>

      <h2>Wykorzystajcie korytarz</h2>
      <p>
        <GameLink id="silly-walk-leader" /> działa od roku. Przejdź korytarzem śmiesznym krokiem, na przykład jak chwiejny
        pingwin, a dziecko niech idzie za tobą i naśladuje. Co kilka kroków zmieniaj chód. Na końcu odwróć się i powiedz
        „teraz ty”, a potem naśladuj dokładnie każdy chód, który wymyśli dziecko, nawet jeśli to zwykłe tupanie. Follow the
        Leader jest na harwardzkiej liście zabaw dla maluchów <Cite id="cdc-guide" />.
      </p>
      <p>
        <GameLink id="roll-wait-go" /> jest dla dzieci od 2 lat. Kucnij na jednym końcu korytarza z dzieckiem obok i potocz
        piłkę przed siebie. Trzymajcie się za ręce i patrzcie, jak się toczy. Gonicie ją dopiero, gdy się zatrzyma i
        powiesz „już”. Za każdym razem czekaj trochę dłużej, gdy piłka już stanie, a potem niech dziecko mówi „już”.
      </p>
      <p>
        Więcej znajdziesz w <Link href="/games/tag/hallway">zabawach na korytarzu</Link>.
      </p>

      <h2>Zamieńcie podłogę w lawę</h2>
      <p>
        <GameLink id="cushion-lava" /> jest dla dzieci od 2 lat. Rozrzuć po podłodze wszystkie poduszki z domu i powiedz,
        że podłoga to lawa, więc stopy zostają na poduszkach. Skaczcie razem aż do kanapy, trzymając się za ręce przy
        dużych przerwach. Powiedz „lawa rośnie” i co rundę zabieraj jedną poduszkę.
      </p>
      <p>
        <GameLink id="run-home" /> też jest dla dzieci od 2 lat. Połóżcie dwie poduszki-domki w różnych kątach, po jednej
        dla każdego, a potem chodźcie po pokoju śmiesznymi krokami. Krzyknij „do domku!” i oboje pędźcie usiąść na swojej
        poduszce. Co kilka rund zamieńcie się domkami i cieszcie się, gdy oboje pamiętacie, która poduszka jest teraz czyja.
        Więcej znajdziesz w <Link href="/games/tag/cushions">zabawach z poduszkami</Link>.
      </p>

      <h2>Dodajcie do hałasu „stop”</h2>
      <p>
        Zatrzymywanie się na sygnał to coś, czego badacze wymagają od maluchów. W wieloletnim badaniu dzieci w wieku od 22
        do 45 miesięcy proszono, żeby czekały, szły powoli po linii, szeptały oraz zatrzymywały się i ruszały na sygnał{" "}
        <Cite id="kochanska-2000" />. W innym wspólne śpiewanie, taniec i zabawy muzyczne w domu w wieku od 2 do 3 lat
        przewidywały uwagę i samoregulację w wieku 5 lat <Cite id="williams-2015" />.
      </p>
      <p>
        <GameLink id="sock-rain" /> jest dla dzieci od 2 lat. Wysyp z kubka zwinięte skarpetki na podłogę i krzyknij
        „deszcz!”, a wtedy oboje rzucajcie je jak najwyżej. Krzyknij „słońce!” i rzucanie się kończy, a wszystkie
        skarpetki jak najszybciej wracają do kubka. Po ostatnim słońcu pokój jest posprzątany.
      </p>
      <p>
        <GameLink id="cup-drum-parade" /> jest dla dzieci od 2 lat. Odwróć kubek do góry dnem, bębnij w niego jak w bęben i
        maszeruj po domu, a dziecko za tobą. Przestań bębnić bez ostrzeżenia, a cała orkiestra staje w pół kroku, aż bęben
        znowu zagra. Potem daj bęben dziecku.
      </p>

      <h2>Chowany dla początkujących</h2>
      <p>
        Harwardzki materiał o zabawie dla maluchów wymienia też prostą zabawę w chowanego <Cite id="brain-play" />.{" "}
        <GameLink id="terrible-hider" /> działa od roku, zanim dziecko nauczy się liczyć. Powiedz mu, żeby zostało na
        dywanie, i schowaj się nieudolnie za krzesłem, cały czas licząc na głos do pięciu. Licz dalej ze swojej kryjówki,
        żeby zdradził cię głos. Potem się zamieńcie i zajrzyj w dwa złe miejsca, zanim znajdziesz dziecko.
      </p>
      <p>
        Gdy bieganie się skończy, przejdźcie do czegoś cichego. W <Link href="/games/energy/low">leniwe zabawy</Link>{" "}
        bawicie się na siedząco albo na leżąco, a{" "}
        <Link href="/blog/bedtime-wind-down-games">spokojne zabawy przed snem</Link> to kilka propozycji na koniec dnia.
        Pełna lista jest w <Link href="/games/age/toddlers">zabawach z maluchem</Link>.
      </p>
    </>
  ),
};
