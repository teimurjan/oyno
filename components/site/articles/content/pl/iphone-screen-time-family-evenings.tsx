import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../iphone-screen-time-family-evenings";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Jak ustawić Czas przed ekranem na iPhonie na rodzinne wieczory",
  description:
    "Krok po kroku: ustaw Czas przed ekranem na swoim iPhonie, żeby wieczór z dzieckiem został twój, plus czego ta funkcja nie zrobi i w co się bawić zamiast telefonu.",
  body: (
    <>
      <p>
        Ten poradnik dotyczy twojego telefonu, nie telefonu dziecka. Jeśli wracasz do domu bez sił, a
        telefon wypełnia godzinę przed snem, Czas przed ekranem na twoim iPhonie może postawić płot wokół tej godziny. Jest
        darmowy, już masz go w telefonie i możesz go ustawić dziś wieczorem.
      </p>
      <p>
        Warto to zrobić. W jednym eksperymencie rodzice w muzeum nauki, których poproszono, by dużo korzystali z telefonów,
        czuli się bardziej rozkojarzeni i mniej związani z dziećmi niż rodzice poproszeni, by korzystali z nich mało{" "}
        <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>
        Kroki poniżej idą za stronami pomocy Apple dla iOS 27, najnowszej wersji, którą opisuje Apple. Jeśli twój iPhone
        ma iOS 26 lub starszy, menu nazywają się inaczej, a pod koniec jest część dla ciebie.
      </p>

      <h2>Co się zmieniło w iOS 27</h2>
      <p>
        Starsze poradniki mówią o Przerwie w korzystaniu i Limitach aplikacji. Dla iOS 27 poradnik Apple opisuje zamiast
        nich dwa narzędzia. <strong>Harmonogramy Czasu przed ekranem</strong> (Screen Time Schedules) ustalają, kiedy w
        ciągu dnia możesz korzystać z aplikacji. <strong>Przydziały czasu</strong> (Time Allowances) ustalają, jak długo
        możesz z nich korzystać każdego dnia, według kategorii, takich jak Rozrywka, Gry czy Sieci społecznościowe.
        Przykład samego Apple to harmonogram z oknami czasowymi na pracę, kolację i wieczór (
        <a href="https://support.apple.com/pl-pl/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Wsparcie Apple: ustawianie harmonogramów i przydziałów czasu
        </a>
        ).
      </p>
      <p>
        Apple zaznacza, że te funkcje wymagają iOS 27 lub nowszego na wszystkich twoich urządzeniach Apple. Jeśli twój
        iPad albo Mac ma jeszcze starszą wersję, najpierw go zaktualizuj, bo inaczej kroki poniżej mogą nie zgadzać się z
        tym, co widzisz.
      </p>

      <h2>Krok 1: Włącz Czas przed ekranem i przejrzyj swój tydzień</h2>
      <p>
        Otwórz aplikację Ustawienia i stuknij Czas przed ekranem. Stuknij Zarządzaj Czasem przed ekranem, a potem Włącz
        aktywność w aplikacjach i witrynach (
        <a href="https://support.apple.com/pl-pl/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Wsparcie Apple: konfigurowanie Czasu przed ekranem dla siebie
        </a>
        ).
      </p>
      <p>
        Jeśli korzystasz z niego od jakiegoś czasu, najpierw popatrz, zanim cokolwiek zmienisz. Stuknij Średnia dzienna,
        a potem Tydzień. Przewiń w dół do Podniesień, żeby zobaczyć, jak często podnosisz telefon. Zanotuj dwie albo trzy
        aplikacje, z których korzystasz najwięcej. To aplikacje, które zaraz ogrodzisz.
      </p>
      <p>
        Prawdziwa liczba może być wyższa, niż zgadujesz. W jednym badaniu młodzi dorośli, których telefony rejestrowały
        korzystanie, sięgali po nie około 85 razy dziennie i używali ich około pięciu godzin, mniej więcej dwa razy
        więcej, niż sami szacowali <Cite id="andrews-2015" />.
      </p>
      <p>
        Jeśli używasz też iPada albo Maca, Apple pozwala dzielić te ustawienia między urządzeniami. Stuknij Zarządzaj
        Czasem przed ekranem, a potem włącz Udostępniaj między urządzeniami. Gdy ta opcja jest włączona, harmonogram,
        który ustawisz niżej, działa na wszystkich, więc wieczór nie przeniesie się na iPada.
      </p>

      <h2>Krok 2: Ustaw przydziały dla aplikacji, które najmocniej wciągają</h2>
      <p>
        Przydziały czasu działają według kategorii. Możesz korzystać z aplikacji w danej kategorii, dopóki nie wyczerpią
        przydziału tej kategorii albo twojego dziennego limitu, w zależności od tego, co nastąpi pierwsze.
      </p>
      <ol>
        <li>Otwórz Ustawienia, stuknij Czas przed ekranem, a potem Przydziały czasu.</li>
        <li>
          Stuknij Zarządzaj kategoriami, stuknij przycisk dodawania i wybierz kategorię, na przykład Sieci
          społecznościowe albo Rozrywka.
        </li>
        <li>
          Wróć do Przydziałów czasu, stuknij kategorię i przesuń suwak, żeby ustawić, ile czasu dostajesz dziennie.
        </li>
        <li>
          Żeby sprawdzić, które aplikacje są w kategorii, stuknij Zarządzaj kategoriami, a potem kategorię. Zobaczysz tam
          też swoje średnie dzienne korzystanie, a po stuknięciu aplikacji jej własne.
        </li>
      </ol>
      <p>
        Zacznij od aplikacji z kroku 1. Powiedz sobie szczerze, które z nich zjadają ci wieczór.
      </p>
      <p>
        Jeden szczegół ma znaczenie, jeśli scrollujesz w przeglądarce. Apple podaje, że jeśli aplikacja deklaruje
        powiązaną stronę internetową, przydział czasu obejmuje obie. Ograniczenie aplikacji może więc ograniczyć też jej
        stronę.
      </p>

      <h2>Krok 3: Daj wieczorowi własne okno czasowe</h2>
      <p>
        To część, która chroni godzinę z dzieckiem. Tworzysz harmonogram, a w nim okno czasowe, które obejmuje twój
        rodzinny wieczór.
      </p>
      <ol>
        <li>
          Otwórz Ustawienia, stuknij Czas przed ekranem, stuknij Harmonogram Czasu przed ekranem, a potem włącz
          Harmonogram.
        </li>
        <li>Stuknij Dodaj harmonogram, zaznacz dni, które chcesz, na przykład od poniedziałku do piątku, i potwierdź.</li>
        <li>Stuknij okno czasowe. Stuknij jego nazwę i nazwij je zwyczajnie, na przykład „Wieczór”.</li>
        <li>Stuknij godzinę początku i końca i ustaw je na godziny, które spędzasz w domu z dzieckiem.</li>
        <li>
          Pod oknem zaznacz kategorie przydziałów czasu, które mają być wtedy dostępne. Pomiń te, które w kroku 2
          ustawiono dla najbardziej wciągających aplikacji.
        </li>
      </ol>
      <p>
        Każde okno pokazuje ikony kategorii, na które pozwala, więc od razu widzisz, jakie rodzaje aplikacji są otwarte
        wieczorem. Jeśli weekendy wyglądają inaczej, dodaj drugi harmonogram na sobotę i niedzielę z własnymi godzinami.
      </p>
      <p>
        W Przydziałach czasu Apple ma też przełącznik Dopasuj do harmonogramu Czasu przed ekranem (Match Screen Time
        Schedule). Włącz go, jeśli chcesz, żeby przydziały obowiązywały tylko w określonych porach twojego harmonogramu.
      </p>
      <p>
        Wybierz godziny, których dotrzymasz, na przykład od kolacji do pory snu. To zgadza się z tym, co Amerykańska
        Akademia Pediatrii zaleca rodzinom: sypialnie, posiłki i czas zabawy rodzica z dzieckiem mają być wolne od
        ekranów, dla dzieci i dla rodziców <Cite id="aap-media-2016" />.
      </p>

      <h2>Krok 4: Wybierz, co zostaje dozwolone</h2>
      <p>
        Niektórych aplikacji nigdy nie należy odgradzać. Partner musi móc się z tobą skontaktować. Opiekunka musi móc się
        z tobą skontaktować. Możesz chcieć mieć Mapy, aparat albo aplikację zdrowotną.
      </p>
      <ol>
        <li>Otwórz Ustawienia, stuknij Czas przed ekranem, a potem Zawsze dozwolone.</li>
        <li>Stuknij Dodaj osoby, żeby dodać kontakty, z którymi zawsze możesz się połączyć i które zawsze połączą się z tobą.</li>
        <li>Stuknij Dodaj aplikacje, żeby dodać aplikacje, które zostają otwarte bez względu na harmonogram.</li>
      </ol>
      <p>
        Apple podaje, że aplikacje i kontakty z tej listy pozostają dostępne niezależnie od ustawionych harmonogramów czy
        przydziałów. Jego własne przykłady to członkowie rodziny i aplikacja Zdrowie, na wypadek nagłych sytuacji. Niech
        lista będzie krótka. Każda aplikacja na niej to drzwi, które zostają otwarte.
      </p>

      <h2>Krok 5: Zablokuj to kodem</h2>
      <p>
        Kod Czasu przed ekranem oznacza, że musisz wpisać kod, zanim zmienisz ustawienia powyżej (
        <a href="https://support.apple.com/pl-pl/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Wsparcie Apple: tworzenie, zmiana lub usuwanie kodu Czasu przed ekranem
        </a>
        ).
      </p>
      <ol>
        <li>
          Otwórz Ustawienia, stuknij Czas przed ekranem, stuknij Zarządzaj Czasem przed ekranem, a potem Zablokuj
          ustawienia Czasu przed ekranem.
        </li>
        <li>Wpisz czterocyfrowy kod, a potem wpisz go jeszcze raz, żeby go potwierdzić.</li>
      </ol>
      <p>
        Teraz uczciwie. Ten kod ustawiasz dla siebie, więc go znasz. O 20:00, po całym dniu, z kanapą i telefonem na wyciągnięcie
        ręki, kod, który znasz, to próg zwalniający, a nie mur.
      </p>
      <p>
        Dlatego niektórzy rodzice proszą partnera, żeby to on wpisał kod, i wtedy go nie znają. To pomaga. Ale Apple
        oferuje też odzyskiwanie kodu Czasu przed ekranem, które pozwala zresetować kod przy użyciu konta Apple, jeśli go
        zapomnisz. Jeśli je włączysz, kod partnera staje się dla ciebie jednym krokiem więcej, a nie zamkiem. Zdecyduj, co
        wolisz.
      </p>

      <h2>W iOS 26 lub starszym: Przerwa w korzystaniu i Limity aplikacji</h2>
      <p>
        Jeśli twój iPhone nie przeszedł jeszcze na iOS 27, te same pomysły mają starsze nazwy (
        <a href="https://support.apple.com/pl-pl/guide/iphone/set-schedules-with-screen-time-iphb0c7313c9/26/ios/26">
          Wsparcie Apple: ustawianie harmonogramów w Czasie przed ekranem, iOS 26
        </a>
        ).
      </p>
      <ul>
        <li>
          <strong>Przerwa w korzystaniu</strong> to wieczorne okno. W Ustawieniach stuknij Czas przed ekranem, potem
          Przerwa w korzystaniu, a potem Zaplanowana. Wybierz Codziennie albo Dostosuj dni i ustaw godzinę początku i
          końca. Apple wysyła przypomnienie pięć minut przed jej rozpoczęciem.
        </li>
        <li>
          <strong>Limity aplikacji</strong> to przydziały. Stuknij Limity aplikacji, potem Dodaj limit, wybierz
          kategorie albo pojedyncze aplikacje, stuknij Dalej i ustaw czas.
        </li>
        <li>
          <strong>Zawsze dozwolone</strong> działa tak samo, dla kontaktów i aplikacji.
        </li>
      </ul>
      <p>
        Jeden haczyk: Apple podaje, że domyślnie te limity można zignorować, gdy już je osiągniesz. Jeśli masz kod Czasu
        przed ekranem, możesz włączyć Blokuj w czasie przerwy i wtedy w czasie Przerwy w korzystaniu aplikacji nie da się
        otworzyć. Gdy ta opcja jest wyłączona, widzisz tylko przypomnienie i możesz korzystać dalej.
      </p>

      <h2>Czego Czas przed ekranem nie robi</h2>
      <p>
        Czas przed ekranem dobrze wykonuje jedno zadanie. Mówi „nie”. Nie mówi, co robić zamiast tego.
      </p>
      <p>
        Znam to z własnych wieczorów. Pracuję cały dzień, wracam do domu i sięgam po telefon. Próbowałem blokad. Usunąłem
        aplikacje społecznościowe. Nawyk został. Zablokowana aplikacja zostawia w wieczorze lukę, a Czas przed ekranem jej
        nie wypełnia.
      </p>
      <p>
        Stanowisko AAP w sprawie małych dzieci i mediów mówi to samo od drugiej strony. Zauważa, że intensywne korzystanie
        rodziców z urządzeń mobilnych wiąże się z mniejszą liczbą werbalnych i niewerbalnych wymian między rodzicami a
        dziećmi. Prosi pediatrów, żeby pomagali rodzinom rodzinnym planem korzystania z mediów (Family Media Use Plan) z
        zasadami dla każdego dziecka i każdego rodzica oraz pomysłami na zabawę zamiast ekranów{" "}
        <Cite id="aap-media-2016" />. Zasada dotycząca telefonu to pół planu. Druga połowa to to, co robisz z tym czasem.
      </p>
      <p>
        Dlatego przygotuj kolejne dziesięć minut, zanim okno się zacznie. Nie muszą być pomysłowe. Muszą działać, gdy nie
        masz już sił. Oyno korzysta z Czasu przed ekranem, żeby w Czasie z dzieckiem wstrzymywać wybrane przez ciebie
        aplikacje, i podsuwa ci krótką zabawę zamiast nich.
      </p>

      <h2>Twój pierwszy wieczór</h2>
      <p>
        Oto plan na dziś wieczór, na miarę rodzica, który najchętniej by się położył.
      </p>
      <ol>
        <li>Ustaw okno z kroku 3 tak, żeby zaczynało się za dziesięć minut.</li>
        <li>Odłóż telefon na półkę poza zasięgiem ręki, ekranem w dół, z dźwiękiem włączonym na wypadek, gdyby ktoś dzwonił.</li>
        <li>Wybierz jedną zabawę z listy poniżej i bawcie się, aż dziecko przestanie się uśmiechać, nie dłużej.</li>
      </ol>
      <p>
        Z niemowlakiem spróbuj zabawy <GameLink id="hands-peekaboo" />. Kładziesz się na plecach z maluszkiem na piersi,
        zakrywasz twarz obiema dłońmi i czekasz na powolne „raz, dwa, trzy” przed „A kuku!”.
      </p>
      <p>
        Z maluchem od 2 lat spróbuj zabawy <GameLink id="still-stone-mouse">Kamień i myszka</GameLink>. Dziecko leży
        nieruchomo jak kamień, a twoja ręka skrada się do niego jak myszka, i każde wiercenie odsyła myszkę na start. Albo{" "}
        <GameLink id="touch-the-bear" />: jesteś niedźwiedziem śpiącym na kanapie, od każdego krzyku chrapiesz głośniej, a
        budzi cię tylko rączka na twojej łapie.
      </p>
      <p>
        Z przedszkolakiem spróbuj zabawy <GameLink id="belly-boat" />. Oboje leżycie na plecach z małą zabawką na
        brzuchu i oddychacie powoli, żeby łódki się unosiły i opadały. <GameLink id="sleepy-lion" /> i{" "}
        <GameLink id="day-says-night" /> też działają z kanapy.
      </p>
      <p>
        Więcej znajdziesz w <Link href="/games/energy/low">leniwych zabawach dla zmęczonych rodziców</Link>, a według
        wieku możesz przeglądać <Link href="/games/age/toddlers">zabawy z maluchem</Link> albo{" "}
        <Link href="/games/age/preschoolers">zabawy z przedszkolakiem</Link>. Jeśli wciąż wybierasz między Czasem przed
        ekranem a dodatkową aplikacją, przeczytaj{" "}
        <Link href="/blog/screen-time-vs-app-blockers">Czas przed ekranem, blokady aplikacji i Oyno</Link>.
      </p>
      <p>
        Daj ustawieniom tydzień, zanim je zmienisz. Jeśli okno zaczyna się za wcześnie, przesuń je. Jeśli jakaś aplikacja
        ciągle przemyka przez Zawsze dozwolone, usuń ją z listy.
      </p>
    </>
  ),
};
