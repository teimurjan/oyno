import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-no-toys";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Zabawy z dzieckiem bez zabawek",
  description:
    "Zabawki daleko albo brak ci sił, żeby je wygrzebać? Te zabawy dla dzieci od 0 do 5 lat wymagają tylko twoich rąk, głosu i pokoju, w którym jesteście.",
  body: (
    <>
      <p>
        Zabawki są w innym pokoju, schowane w pudle albo rozsypane pod kanapą. Nie potrzebujesz ich. Wiele najstarszych
        zabaw z małymi dziećmi nie wymaga niczego poza twarzą, parą rąk i głosem.
      </p>
      <p>
        Amerykańska Akademia Pediatrii opisuje, jak zabawa wyrasta z uśmiechu społecznego w wymianę „podanie i odbicie”, a
        kuku i „kosi, kosi łapci” <Cite id="aap-play" />. Harwardzkie materiały Brain-Building Through Play wymieniają
        Pat-a-Cake („Kosi, kosi łapci”) i Baby See Baby Do dla niemowląt, Follow the Leader dla maluchów oraz „Szymon mówi”
        i What Time Is It Mr Fox dla starszych dzieci <Cite id="brain-play" />. Żadna z nich nie wymaga zabawki.
      </p>

      <h2>Niemowlęta: twoja twarz to zabawka</h2>
      <p>
        Od około 6 miesięcy spróbuj zabawy <GameLink id="copy-cat-faces" />. Powtórz minę albo dźwięk maluszka chwilę po
        nim: wystawiony język, pisk, zmarszczone czoło. Zrób tak kilka razy, a potem pokaż powoli własną, nową minę i ją
        przytrzymaj. Czekaj z tą miną, aż maluszek spróbuje ją powtórzyć.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> działa z maluszkiem na kolanach. Zapytaj „Gdzie jest nosek?” i odczekaj
        spokojny oddech, patrząc mu w twarz. Delikatnie dotknij jego noska i powiedz „nosek”, a potem uszka, paluszki i
        brzuszek.
      </p>
      <p>
        Obie zabawy podążają za maluszkiem. W badaniu randomizowanym szkolenie rodziców dzieci w wieku od 6 do 21
        miesięcy, jak podążać za dzieckiem, odpowiadać mu i cieszyć się nim, poprawiło elastyczność poznawczą dzieci w
        wieku 4 lat <Cite id="lind-2017" />.
      </p>

      <h2>Maluchy: twoje ciało to plansza</h2>
      <p>
        <GameLink id="nose-knees-toes" /> jest dla malucha od 2 lat, który wie, gdzie ma nos. Zapytaj „gdzie jest twój
        nos?” i dotknij swojego, a dziecko dotyka swojego. Potem kolana, palce u stóp, uszy. Gdy już idzie mu szybko,
        powiedz „dotknij palców u stóp”, dotykając przy tym nosa, a dziecko musi słuchać słów, a nie patrzeć na twoją rękę.
      </p>
      <p>
        <GameLink id="rug-tightrope-walk" /> wymaga tylko brzegu dywanu albo linii między deskami podłogi. To lina, która
        prowadzi do ciebie na kanapę. Dziecko idzie po niej krok po kroku, powoli, z rozłożonymi rękami, a ty szeptem
        opisujesz każdy krok. Stopa poza liną to powrót na start, a kto do ciebie dojdzie, dostaje przytulasa na kanapie.
        Nie musisz ani razu wstawać.
      </p>
      <p>
        To zadania bliskie tym z wieloletniego badania, w którym dzieci w wieku od 22 do 45 miesięcy proszono, żeby szły
        powoli po linii, szeptały oraz zatrzymywały się i ruszały na sygnał <Cite id="kochanska-2000" />.
      </p>

      <h2>Przedszkolaki: zabawy ze słów</h2>
      <p>
        Od 3 lat zabawa może składać się wyłącznie z reguł i mówienia. <GameLink id="simon-says" /> to klasyka. Wołaj
        ruchy, a dziecko robi tylko te, które zaczynają się od „Szymon mówi”. Wplataj zwykłe polecenia i łap je, jeśli się
        ruszy. Po trzech wpadkach dziecko zostaje Szymonem. „Szymon mówi” było jednym z zadań w badaniu dzieci w wieku od
        2 do 6 lat <Cite id="carlson-2005" />.
      </p>
      <p>
        <GameLink id="wolf-time" /> to What Time Is It Mr Wolf na korytarz. Stoisz twarzą do ściany na jego końcu.
        Dziecko pyta „wilku, wilku, która godzina?”, a ty odpowiadasz liczbą do dziesięciu, więc robi dokładnie tyle kroków
        w twoją stronę, licząc na głos. Gdy będzie blisko, odpowiedz „pora na kolację!” i goń je na start.
      </p>
      <p>
        <GameLink id="whisper-telephone" /> działa, gdy rodzeństwo śpi. Szepnij dziecku do ucha krótką wiadomość, na
        przykład „kot zjadł skarpetkę”, a ono szepcze ci ją z powrotem, słowo w słowo. W każdej rundzie dodaj jedno słowo.
      </p>

      <h2>Gdy jesteście poza domem</h2>
      <p>
        Zabawy bez zabawek sprawdzają się najlepiej w poczekalni, w kolejce albo w długiej podróży. W zabawie{" "}
        <GameLink id="zoo-list">W zoo jest zebra</GameLink> mówisz „w zoo jest zebra”. Dziecko powtarza całą listę i dodaje
        jedno zwierzę, potem ty robisz to samo, aż komuś wypadnie zwierzę. Wtedy wybierzcie się na nową wycieczkę w nowe
        miejsce. Plaża, wieś i sklep też działają, a dziecko może wybrać, dokąd jedziecie.
      </p>
      <p>
        Więcej zabaw na drogę znajdziesz w <Link href="/games/tag/in-the-car">zabawach w samochodzie</Link>.
      </p>

      <h2>Jak zacząć dziś wieczorem</h2>
      <ul>
        <li>Wybierz jedną zabawę na wiek dziecka i powiedz regułę w jednym zdaniu.</li>
        <li>Z niemowlakiem trzymaj się min i dźwięków. Powtarzaj to, co robi, a potem czekaj na jego odpowiedź.</li>
        <li>Pierwszą rundę rozegraj powoli, żeby dziecko mogło ją wygrać.</li>
        <li>Oddaj mu prowadzenie. Większość tych zabaw kończy się zamianą, więc dziecko też dostaje swoją kolej na rządzenie.</li>
      </ul>
      <p>
        Każda zabawa w <Link href="/games/tag/nothing-to-grab">zabawach bez zabawek</Link> działa z pustymi rękami. Możesz
        też przeglądać zabawy według wieku, zaczynając od <Link href="/games/age/toddlers">zabaw z maluchem</Link>.
      </p>
    </>
  ),
};
