import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../toddler-games-by-energy";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Zabawy dla dzieci od 1 do 3 lat: 40 pomysłów według energii",
  description:
    "Czterdzieści krótkich zabaw dla dzieci od roku do trzech lat, ułożonych według energii, która została ci na dziś wieczór. Każda trwa 5 do 15 minut i prawie nic nie wymaga.",
  body: (
    <>
      <p>
        Niektóre wieczory dają ci siłę na gonitwę po salonie. Często jednak starcza ci jej akurat na to, żeby położyć
        się na dywanie. Dobrze znam taki wieczór: pracuję cały dzień, wracam do domu i sięgam po telefon.
      </p>
      <p>
        Dlatego ta lista zaczyna się od tego, jak się czujesz. Wybierz część, która pasuje do dzisiejszego wieczoru,
        wybierz jedną zabawę i bawcie się przez 5 do 15 minut. Każda zabawa tutaj jest dla dzieci od roku do trzech
        lat, a większość wymaga tylko tego, co już masz w domu: kubka, skarpetki, poduszki, książeczki.
      </p>

      <h2>Jak korzystać z tej listy</h2>
      <p>
        Zabawy oznaczone <strong>2+</strong> są pisane dla dzieci od około 2 lat. Reszta działa od pierwszych urodzin.
        Każda jest krótka, a wiele kończy się zamianą, w której dziecko przejmuje twoją rolę.
      </p>
      <p>
        Przeczytaj opis, rozegrajcie jedną rundę i zobacz, czy dziecko chce następnej. Jeśli się oddali, zabawa się
        skończyła, i to jest w porządku. Każda zabawa ma własną stronę ze swoimi krokami.
      </p>

      <h2>Niska energia: 14 zabaw z kanapy albo z podłogi</h2>
      <p>
        Na wieczory, kiedy możesz siedzieć albo leżeć i niewiele więcej. Dziecko się rusza, a ty mówisz. Więcej
        znajdziesz w <Link href="/games/energy/low">leniwych zabawach</Link>.
      </p>
      <ol>
        <li>
          <GameLink id="cup-trio-hide" />: odwróć trzy kubki do góry dnem, wsuń zabawkę pod jeden, gdy dziecko patrzy,
          i pozwól mu podnosić kubki, aż ją znajdzie.
        </li>
        <li>
          <GameLink id="pat-pat-copy" />: wyklep dwa uderzenia na kolanie i poczekaj, aż dziecko wyklepie je na twojej
          ręce, a potem powtórz rytm, który ono wymyśli.
        </li>
        <li>
          <GameLink id="piggy-pause-toes" />: mów „Sroczka kaszkę warzyła” na kolejnych paluszkach, przy każdym
          wolniej, i zatrzymaj się przed ostatnim, aż dziecko na ciebie spojrzy.
        </li>
        <li>
          <GameLink id="two-in-the-picture" />: zanim otworzysz stronę gęstą od obrazków, wymień dwie rzeczy do
          znalezienia i pozwól dziecku szukać obu, a twój palec niech się nie rusza.
        </li>
        <li>
          <GameLink id="give-and-take" />: podaj zabawkę ze słowami „dla ciebie”, a potem wyciągnij otwartą dłoń i
          czekaj, aż wróci do ciebie, żeby powiedzieć „dziękuję”.
        </li>
        <li>
          <GameLink id="peekaboo-faces-cloth" />: opuść ściereczkę z twarzy i pokaż wesołą, smutną albo śpiącą minę,
          nazywając każdą.
        </li>
        <li>
          <GameLink id="fill-the-rhyme" />: zamilknij tuż przed ostatnim słowem wersu wierszyka, który dziecko zna, i
          czekaj, aż je powie.
        </li>
        <li>
          <GameLink id="doctor-kid-patient" />: połóż się jako pacjent z dwoma bolącymi miejscami i pozwól dziecku
          zbadać oba i je wyleczyć.
        </li>
        <li>
          <GameLink id="still-stone-mouse" /> (2+): dziecko leży nieruchomo jak kamień, a twoja ręka skrada się do
          niego jak myszka, i każde wiercenie odsyła myszkę na start.
        </li>
        <li>
          <GameLink id="hand-on-the-cup" /> (2+): schowaj zabawkę pod kubkiem, połóż na nim dłoń dziecka, a ono
          podnosi kubek dopiero wtedy, gdy powiesz „już”.
        </li>
        <li>
          <GameLink id="whisper-tent-rule" /> (2+): narzuć koc na zgięte kolana i zrób namiot, w którym wolno tylko
          szeptać, a poza nim mówcie normalnie.
        </li>
        <li>
          <GameLink id="tummy-drum-soft-loud" /> (2+): twój brzuch to bęben, „myszka” to malutkie, ciche klepnięcia,
          „słoń” to duże, powolne, a „stop!” sprawia, że rączki lecą w górę.
        </li>
        <li>
          <GameLink id="baby-cup-mummy-cup">Dzidziuś i mama</GameLink> (2+): nazwijcie duży kubek „dzidziuś”, a mały
          „mama”, a potem pokazuj po jednym, żeby dziecko podało nazwę.
        </li>
        <li>
          <GameLink id="hum-and-stop" /> (2+): nućcie i kołyszcie się razem, a gdy nucenie ustaje, oboje zamieracie, aż
          wróci.
        </li>
      </ol>

      <h2>Średnia energia: 13 zabaw na zwykły wieczór</h2>
      <p>
        Na wieczory, kiedy możesz posiedzieć na podłodze i może postać przez minutę. Mało przygotowań, kilka
        rekwizytów. Więcej znajdziesz w <Link href="/games/energy/medium">zabawach na średnią energię</Link>.
      </p>
      <ol>
        <li>
          <GameLink id="look-and-name" />: dla dziecka, które dopiero skończyło roczek, wpatrz się w jedną rzecz w
          drugim końcu pokoju i ją nazwij, a potem podążaj za jego wzrokiem i nazywaj wszystko, na co patrzy.
        </li>
        <li>
          <GameLink id="show-and-name" />: bierz wszystko, co dziecko ci poda, nazwij to, powiedz o tym jedną rzecz i
          oddaj.
        </li>
        <li>
          <GameLink id="ring-ring-calls" />: przyłóż klocek do ucha, powiedz „dryń, dryń”, zadaj jedno pytanie i
          czekaj, aż dziecko odpowie przez swój własny klocek.
        </li>
        <li>
          <GameLink id="cup-drum-turns" />: wystukaj krótki rytm na swoim odwróconym kubku, a potem nie ruszaj rękami,
          gdy dziecko odpowiada na swoim.
        </li>
        <li>
          <GameLink id="page-patrol" />: wybierz jedną rzecz, która jest na każdej stronie znanej wam książeczki, i na
          każdej stronie czekaj, aż dziecko ją znajdzie i pokaże.
        </li>
        <li>
          <GameLink id="cup-hat-pretend" />: kubek staje się czapką, kubkiem olbrzyma, autem i łódką, a potem dziecko
          decyduje, czym będzie dalej.
        </li>
        <li>
          <GameLink id="what-next-tower" />: wysyp klocki, trzymaj ręce na kolanach i pytaj „a teraz co?”, zamiast
          samemu dokładać klocek.
        </li>
        <li>
          <GameLink id="wait-wait-go" /> (2+): usiądźcie naprzeciw siebie z piłką w rękach dziecka, a ono toczy ją do
          ciebie dopiero na „już”.
        </li>
        <li>
          <GameLink id="two-sock-piles" /> (2+): sortujcie czyste skarpetki na kupkę ciemnych i kupkę jasnych, a potem
          pomieszajcie je i sortujcie na duże i małe.
        </li>
        <li>
          <GameLink id="cat-bear-switch" /> (2+): na „kot” skradajcie się na paluszkach bez jednego dźwięku, na
          „niedźwiedź” tupcie i mruczcie, a słowo zmieniaj coraz częściej.
        </li>
        <li>
          <GameLink id="who-ran-away" /> (2+): ustawcie w rzędzie trzy zabawki, schowaj jedną, gdy dziecko zakrywa
          oczy, i zapytaj „kto uciekł?”.
        </li>
        <li>
          <GameLink id="loud-soft-singing" /> (2+): śpiewajcie razem głośno, gdy twoja ręka jest wysoko, i szeptem,
          gdy opada do kolana.
        </li>
        <li>
          <GameLink id="red-light-whisper" /> (2+): gdy siedzisz obok kierowcy, na czerwonym świetle wszyscy szepczą,
          a na zielonym wracają do normalnego głosu.
        </li>
      </ol>

      <h2>Pełna energia: 13 zabaw, przy których ruszacie się oboje</h2>
      <p>
        Na wieczory, kiedy dasz jeszcze radę oblecieć salon. Najpierw zrób trochę miejsca na podłodze. Więcej
        znajdziesz w <Link href="/games/energy/high">aktywnych zabawach na pełną baterię</Link>.
      </p>
      <ol>
        <li>
          <GameLink id="terrible-hider" />: schowaj się nieudolnie za krzesłem i licz dalej na głos, żeby zdradził cię
          głos.
        </li>
        <li>
          <GameLink id="airplane-landing" />: przeleć z dzieckiem dookoła pokoju, wyląduj na kanapie na „trzy, dwa,
          jeden” i przed następnym lotem poczekaj, aż powie „na ręce”.
        </li>
        <li>
          <GameLink id="silly-walk-leader" />: przejdź korytarzem chwiejnym krokiem pingwina, a dziecko niech idzie za
          tobą i naśladuje, a potem naśladuj każdy chód, który ono wymyśli.
        </li>
        <li>
          <GameLink id="chair-tunnels" />: ustaw w rzędzie dwa albo trzy kuchenne krzesła jako tunel, najpierw ty
          przeczołgaj się przez tunel i zapytaj „a teraz co?”, gdy dziecko się zatrzyma.
        </li>
        <li>
          <GameLink id="blanket-parachute" />: unieście razem koc wysoko i pozwólcie mu opaść, a przy czwartym „w
          górę” dajcie oboje nura pod spód.
        </li>
        <li>
          <GameLink id="bridge-falls-down" />: zrób z rąk most przy ścianie, a dziecko przebiega pod nim, gdy
          śpiewasz „Wlazł kotek na płotek”, i opuść ręce na ostatnim słowie.
        </li>
        <li>
          <GameLink id="green-means-go" /> (2+): na „zielone” biegnijcie do przeciwległej ściany, na „czerwone”
          stańcie jak wryci, a wołajcie na zmianę.
        </li>
        <li>
          <GameLink id="jump-jump-freeze" /> (2+): złapcie się za ręce i skaczcie, licząc do trzech, a potem powiedz
          „stój” i zamrzyjcie.
        </li>
        <li>
          <GameLink id="snail-and-rocket" /> (2+): przejdźcie przez pokój wolno jak ślimak, a potem pędźcie jak
          rakieta, i za każdym razem zmieniaj słowo wcześniej.
        </li>
        <li>
          <GameLink id="dance-till-it-stops" /> (2+): tańczcie zamaszyście do piosenki, a gdy ją zatrzymasz, oboje
          zamieracie, aż znowu zagra.
        </li>
        <li>
          <GameLink id="cushion-lava" /> (2+): rozrzuć poduszki, ogłoś, że podłoga to lawa, i skaczcie z poduszki na
          poduszkę aż do kanapy.
        </li>
        <li>
          <GameLink id="roll-wait-go" /> (2+): potocz piłkę korytarzem, trzymajcie się za ręce, gdy się toczy, i
          gońcie ją dopiero, gdy się zatrzyma i powiesz „już”.
        </li>
        <li>
          <GameLink id="sock-rain" /> (2+): na „deszcz!” rzucajcie zwinięte skarpetki wysoko, a na „słońce!” rzucanie
          się kończy i wszystkie skarpetki wracają do kubka.
        </li>
      </ol>

      <h2>Skąd tyle zabaw w zamieranie i czekanie</h2>
      <p>
        Wiele zabaw powyżej wymaga od dziecka zatrzymania się, czekania albo szeptania na sygnał. To celowe. W
        wieloletnim badaniu dzieci w wieku od 22 do 45 miesięcy proszono, żeby czekały na smakołyk, szły powoli po
        linii, szeptały oraz zatrzymywały się i ruszały na sygnał <Cite id="kochanska-2000" />. To te same ruchy co w
        zabawach Kamień i myszka, Czekaj, czekaj, już! i Namiot szeptów.
      </p>
      <p>
        Zabawy muzyczne też tu pasują. Wspólne śpiewanie, taniec i zabawy muzyczne w domu w wieku od 2 do 3 lat
        przewidywały uwagę i samoregulację w wieku 5 lat <Cite id="williams-2015" />. To związek, a nie dowód, że to
        piosenki tak zadziałały, ale to dobry powód, żeby śpiewać.
      </p>
      <p>
        Dla dzieci od 18 do 36 miesięcy Center on the Developing Child Uniwersytetu Harvarda wymienia taniec z
        zamieraniem i piosenki „start i stop”, piosenki z ruchami, Follow the Leader i wyzwania ruchowe{" "}
        <Cite id="cdc-guide" />. Więcej znajdziesz w{" "}
        <Link href="/games/skill/self-control">zabawach uczących samokontroli</Link> i w{" "}
        <Link href="/games/type/stop-go">zabawach w start i stop</Link>.
      </p>

      <h2>Skąd zabawy w chowanie, naśladowanie i udawanie</h2>
      <p>
        Dwulatki potrafią już trzymać w głowie kilka rzeczy. W jednym badaniu dwulatki pamiętały, które garnki już
        opróżniły, i nazywały duży kubek „dzidziusiem”, a mały „mamą” <Cite id="hughes-ensor-2005" />. Zabawy Pod
        którym kubkiem?, Kto uciekł? i Dzidziuś i mama wymagają tego samego.
      </p>
      <p>
        Harwardzkie materiały o zabawie dla dzieci od 12 miesięcy do 3 lat wymieniają Toddler See Toddler Do, prostą
        zabawę w chowanego, zabawę na pamięć z trzema kubkami, dopasowywanie i sortowanie, udawane telefony i prace
        domowe, piosenki z ruchem, taniec z zamieraniem i Follow the Leader <Cite id="brain-play" />. Większość z nich
        znajdziesz na liście powyżej.
      </p>
      <p>
        To, jak się bawisz, też ma znaczenie. Roczne dzieci dłużej skupiały uwagę na zabawce, gdy rodzic patrzył na tę
        samą zabawkę i ją nazywał <Cite id="yu-smith-2016" />. Pomoc rodziców przy układance w wieku od 2 do 3 lat, w
        sam raz i z pytaniem, co dalej, przewidywała funkcje wykonawcze ich dzieci w wieku od 3 do 4 lat{" "}
        <Cite id="hammond-2012" />. Dlatego niektóre kroki każą ci pytać „a teraz co?”, zamiast pokazywać.
      </p>
      <p>
        Zabawa w udawanie też się liczy. Szkolenie rodziców z czytania na głos i zabawy w udawanie od urodzenia do 3 lat
        zmniejszyło nadpobudliwość i problemy z uwagą w wieku czterech i pół roku <Cite id="mendelsohn-2018" />.
        Więcej znajdziesz w <Link href="/games/type/pretend-play">zabawach w udawanie</Link> i w{" "}
        <Link href="/games/type/hide-and-find">zabawach w chowanie i szukanie</Link>.
      </p>

      <h2>Niech będzie mało</h2>
      <p>
        Amerykańska Akademia Pediatrii opisuje zabawę w tym wieku jako zabawę przedmiotami, która staje się udawaniem,
        umiejętności ruchowe, czekanie na swoją kolej i dorosłego, który trochę pomaga, na przykład obracając element
        układanki <Cite id="aap-play" />. Nic z tego nie wymaga planu ani zakupów.
      </p>
      <p>
        Jedna zabawa wystarczy na wieczór. Bawcie się, dopóki dziecko się śmieje, pozwól mu na jedną rundę przejąć
        twoją rolę i kończ, zanim zabawa zamieni się w obowiązek. Jeśli dziecko chce co wieczór tej samej zabawy, to też
        w porządku. Pełna lista <Link href="/games/age/toddlers">zabaw z maluchem</Link> jest ułożona według energii,
        tak jak ta.
      </p>
      <p>
        Jeśli martwisz się rozwojem albo zachowaniem swojego malucha, porozmawiaj z pediatrą.
      </p>
    </>
  ),
};
