import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../activities-18-month-old";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Zabawy z 18-miesięcznym dzieckiem",
  description:
    "Osiem krótkich zabaw z półtoraroczniakiem: chowanie, naśladowanie, zabawy na zmianę i udawane telefony, plus to, co wykazały badania dzieci w tym wieku.",
  body: (
    <>
      <p>
        Osiemnaście miesięcy to granica między zabawami dla niemowląt a zabawami dla maluchów. Center on the
        Developing Child Uniwersytetu Harvarda dzieli swój poradnik z zabawami właśnie w tym miejscu: jeden rozdział
        jest dla dzieci od 6 do 18 miesięcy, a następny dla dzieci od 18 do 36 miesięcy <Cite id="cdc-guide" />.
        Pierwszy wymienia zabawy na kolanach z niespodzianką, zabawy w chowanie i zabawy w naśladowanie. Drugi
        dodaje piosenki „start i stop”, Follow the Leader („idź za przewodnikiem”), dopasowywanie i zabawę w
        udawanie, którą kieruje dziecko.
      </p>
      <p>
        Każda zabawa poniżej pasuje do dziecka w wieku 18 miesięcy. Większość wymaga kilku kubków, jednej zabawki
        albo niczego, a każda trwa od 5 do 10 minut.
      </p>

      <h2>Zabawy w chowanie z większą liczbą kryjówek</h2>
      <p>
        W klasycznym eksperymencie niemowlęta w wieku od 7½ do 12 miesięcy odnajdowały zabawkę ukrytą pod jedną z
        dwóch osłon po krótkim opóźnieniu <Cite id="diamond-1985" />. W wieku 18 miesięcy możesz dodać trzecią
        kryjówkę. Harwardzki materiał Brain-Building Through Play dla dzieci od 12 miesięcy do 3 lat wymienia zabawę
        na pamięć z trzema kubkami i prostą zabawę w chowanego <Cite id="brain-play" />.
      </p>
      <p>
        <GameLink id="cup-trio-hide" /> to właśnie ta zabawa z kubkami. Ustaw w rzędzie trzy kubki do góry dnem i
        wsuń zabawkę pod jeden, gdy dziecko patrzy. Zapytaj „gdzie jest?” i pozwól mu podnosić kubki, aż ją znajdzie,
        a gdy trafi za pierwszym razem, wiwatuj.
      </p>
      <p>
        <GameLink id="terrible-hider" /> to chowany dla dziecka, które jeszcze nie umie liczyć. Powiedz mu, żeby
        zostało na dywanie, i schowaj się nieudolnie za krzesłem, cały czas licząc na głos do pięciu. Licz dalej,
        żeby zdradził cię głos. Potem się zamieńcie i zajrzyj w dwa złe miejsca, zanim znajdziesz dziecko.
      </p>
      <p>
        <GameLink id="pat-the-moo" /> to zabawa na pamięć dla dzieci od 18 miesięcy. Posadź trzy zabawki w rzędzie i
        ustalcie odgłos dla każdej, na przykład „muu” dla krowy i „bip” dla auta. Zrób jeden odgłos, nie patrząc na
        zabawki, a dziecko klepie tę, która go wydaje. Badacze sprawdzają pamięć roboczą, samokontrolę i
        przełączanie się między regułami u dzieci od 18 miesięcy za pomocą zadań, które wychwytują różnice między
        kolejnymi latami życia <Cite id="garon-2014" />.
      </p>

      <h2>Zabawy na zmianę</h2>
      <p>
        Niemowlęta w wieku od 9 do 18 miesięcy, które bawiły się z dorosłym w dawanie i branie oraz w a kuku, dawały
        znać, gdy dorosły opuścił swoją kolej <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        W zabawie <GameLink id="give-and-take" /> wyciągasz zabawkę i mówisz „dla ciebie”. Potem otwierasz dłoń i
        czekasz, aż dziecko ją odda. Za każdym razem mów „dziękuję” i trzymaj zabawkę chwilę dłużej, zanim znowu ją
        podasz. Przed każdym podaniem czekaj, aż sięgnie albo powie „jeszcze”.
      </p>
      <p>
        Czekanie to zadanie dla ciebie. Gdy rodziców dzieci w wieku od 6 do 21 miesięcy szkolono, jak podążać za
        dzieckiem, odpowiadać mu i cieszyć się nim, szkolenie poprawiło elastyczność poznawczą ich dzieci w wieku 4
        lat <Cite id="lind-2017" />.
      </p>

      <h2>Naśladowanie i udawanie</h2>
      <p>
        Ten sam harwardzki materiał wymienia dla tego wieku Toddler See Toddler Do („maluch widzi, maluch robi”) i
        udawane rozmowy telefoniczne <Cite id="brain-play" />.
      </p>
      <p>
        <GameLink id="pat-pat-copy" /> to zabawa w naśladowanie. Wyklep krótki rytm na kolanie, na przykład
        klep-klep, i poczekaj, aż dziecko wyklepie go na twojej ręce. Na razie wystarczą dwa klepnięcia. Potem się
        zamieńcie: dziecko wymyśla rytm, a ty go powtarzasz i czasem się mylisz, żeby mogło cię poprawić.
      </p>
      <p>
        <GameLink id="ring-ring-calls" /> działa z kanapy. Przyłóż klocek do ucha, powiedz „dryń, dryń” i daj
        dziecku jego własny klocek. Zadaj jedno pytanie, a potem zamilknij i trzymaj telefon przy uchu, aż dziecko
        coś odpowie. Powiedz „pa, pa”, odłóż słuchawkę i czekaj, aż dziecko do ciebie zadzwoni.
      </p>
      <p>
        W badaniu randomizowanym szkolenie rodziców z czytania na głos i zabawy w udawanie od urodzenia do 3 lat
        zmniejszyło nadpobudliwość i problemy z uwagą w wieku czterech i pół roku <Cite id="mendelsohn-2018" />.
      </p>

      <h2>Patrzenie, nazywanie i czekanie</h2>
      <p>
        Roczne dzieci dłużej skupiały uwagę na zabawce, gdy rodzic patrzył na tę samą zabawkę i ją nazywał{" "}
        <Cite id="yu-smith-2016" />. <GameLink id="look-and-name" /> zamienia to w zabawę. Usiądź obok dziecka,
        odwróć głowę, wpatrz się w jedną rzecz w drugim końcu pokoju i powiedz jej nazwę. Gdy jego oczy też tam
        trafią, powtórz nazwę. Potem to ty podążaj za jego wzrokiem i nazywaj wszystko, na co patrzy, tak długo, jak
        patrzy.
      </p>
      <p>
        Zostaw dziecku miejsce, żeby robiło rzeczy samo. W jednym badaniu wrażliwe mówienie rodziców o tym, co dziecko
        myśli, i wspieranie jego własnych prób w wieku od 12 do 15 miesięcy przewidywały funkcje wykonawcze w wieku 18
        i 26 miesięcy <Cite id="bernier-2010" />.
      </p>
      <p>
        <GameLink id="what-next-tower" /> ćwiczy to celowo. Wysyp klocki albo kubki, powiedz „zbudujmy wysoką
        wieżę” i trzymaj ręce na kolanach. Gdy dziecko przestanie, zapytaj „a teraz co?”, zamiast samemu dokładać
        klocek. Jeśli coś nie pasuje, pokaż, gdzie mogłoby pasować, i pozwól mu spróbować.
      </p>

      <h2>Ile wystarczy</h2>
      <p>
        Jedna zabawa na wieczór w zupełności wystarczy. Bawcie się, dopóki dziecko jest zaangażowane, i kończ, gdy
        się oddala. Ta sama zabawa może wrócić jutro.
      </p>
      <p>
        Więcej znajdziesz w <Link href="/games/age/toddlers">zabawach z maluchem</Link>, ułożonych według energii,
        która ci została, oraz w <Link href="/games/skill/working-memory">zabawach na pamięć roboczą</Link>. Jeśli
        martwisz się rozwojem swojego dziecka, porozmawiaj z pediatrą.
      </p>
    </>
  ),
};
