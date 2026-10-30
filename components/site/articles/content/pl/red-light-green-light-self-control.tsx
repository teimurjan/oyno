import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../red-light-green-light-self-control";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Czerwone światło, zielone światło a samokontrola",
  description:
    "Dlaczego zabawy w start i stop, jak „czerwone światło, zielone światło”, trafiają do poradników o samokontroli, co wykazały dwa badania w przedszkolach i jak się w nie bawić w domu.",
  body: (
    <>
      <p>
        Znasz tę zabawę. Ktoś woła „zielone światło” i wszyscy ruszają. Ktoś woła „czerwone światło” i wszyscy stają
        jak wryci. Kto się jeszcze rusza, wraca na start.
      </p>
      <p>
        Cała frajda jest w zatrzymaniu. Nogi dziecka chcą biec dalej, a zabawa każe mu mimo to stanąć. Ta chwila,
        powstrzymanie tego, co chce zrobić ciało, to właśnie samokontrola.
      </p>

      <h2>Zatrzymywanie się na sygnał zaczyna się wcześnie</h2>
      <p>
        Badacze obserwowali tę umiejętność u maluchów. W wieloletnim badaniu dzieci w wieku od 22 do 45 miesięcy
        proszono, żeby czekały na smakołyk, szły powoli po linii, szeptały oraz zatrzymywały się i ruszały na sygnał{" "}
        <Cite id="kochanska-2000" />. Zatrzymywanie się i ruszanie na sygnał to „czerwone światło, zielone światło”,
        tylko bez nazwy.
      </p>
      <p>
        Dlatego dwulatek może się bawić w jej wersję. W zabawie <GameLink id="green-means-go" />, dla dzieci od 2 lat,
        stajecie obok siebie na jednym końcu pokoju, a ty mówisz „zielone” i oboje biegniecie do przeciwległej ściany.
        W dowolnej chwili zawołaj „czerwone”, a oboje stajecie jak wryci. Potem wołajcie na zmianę, a gdy woła dziecko,
        hamuj fatalnie, z poślizgiem i chwianiem się.
      </p>

      <h2>Co wykazały badania w przedszkolach</h2>
      <p>
        Dwa badania randomizowane sprawdziły zabawy w start i stop bezpośrednio. Przedszkolaki w wieku od 3 do 5 lat
        bawiły się w zabawy w kole, takie jak Red Light, Purple Light („czerwone światło, fioletowe światło”), w
        zamieranie z zamienionymi regułami, w uderzenia bębna i w dyrygowanie. Ich samoregulacja się poprawiła{" "}
        <Cite id="tominey-mcclelland-2011" />. Późniejsze badanie w przedszkolnych grupach programu Head Start wykazało,
        że zabawy Red Light, Purple Light poprawiły samoregulację i gotowość szkolną <Cite id="schmitt-2015" />.
      </p>
      <p>
        Były to badania przedszkolaków bawiących się w grupach. W domu bawicie się w ten sam rodzaj zabawy, a nie
        prowadzicie programu. To w porządku. W tę zabawę i tak warto się bawić dla niej samej.
      </p>

      <h2>Haczyk: zamień regułę</h2>
      <p>
        Pierwsze badanie nie poprzestało na czerwonym i zielonym. Korzystało z zabaw w zamieranie z zamienionymi
        regułami <Cite id="tominey-mcclelland-2011" />. Zamiana wymaga od dziecka porzucenia starej reguły i trzymania
        się nowej.
      </p>
      <p>
        <GameLink id="purple-light" /> przenosi ten haczyk do domu. Stań na jednym końcu korytarza. Dziecko idzie do
        ciebie na „fioletowe światło” i zamiera na „czerwone światło”. Gdy do ciebie dojdzie, zamieńcie słowa: teraz
        czerwone znaczy idź, a fioletowe stój. W każdej rundzie wołaj kolory szybciej.
      </p>
      <p>
        <GameLink id="three-lights" /> dodaje trzecią regułę. Zielone światło to bieg, czerwone to stój, a fioletowe
        znaczy chodzenie na palcach. Wołaj wszystkie trzy w dowolnej kolejności, a gdy dziecko do ciebie dobiegnie, to
        ono woła światła.
      </p>

      <h2>Co wymieniają poradniki</h2>
      <p>Poradniki, które badacze piszą dla rodziców, wymieniają zabawy w start i stop dla każdego wieku:</p>
      <ul>
        <li>
          Dla dzieci od 18 do 36 miesięcy harwardzki poradnik z zabawami wymienia taniec z zamieraniem i piosenki
          „start i stop” <Cite id="cdc-guide" />.
        </li>
        <li>
          Dla dzieci od 4 do 7 lat harwardzkie materiały Brain-Building Through Play wymieniają taniec z zamieraniem w
          pozach, „Szymon mówi” i Red Light Green Light („Raz, dwa, trzy, Baba Jaga patrzy”){" "}
          <Cite id="brain-play" />.
        </li>
        <li>
          Dla dzieci od 5 do 7 lat harwardzki poradnik z zabawami wymienia taniec z zamieraniem, zabawę w krzesełka i
          Red Light Green Light <Cite id="cdc-guide-5-7" />.
        </li>
      </ul>

      <h2>Jak się w to bawić w domu, według wieku</h2>
      <h3>Maluchy od 2 lat</h3>
      <p>
        Wystarczy jeden sygnał zatrzymania. Oprócz zabawy Zielone — biegiem! spróbuj w zmęczony wieczór zabawy{" "}
        <GameLink id="hum-and-stop" />: nuć dowolną melodię i kołyszcie się razem, a potem przestań nucić bez
        ostrzeżenia i zamrzyj. Dziecko też zastyga, aż nucenie wróci. <GameLink id="red-means-clap" /> działa z krzesła:
        pokazuj różne rzeczy w pokoju, a dziecko klaszcze tylko wtedy, gdy rzecz jest czerwona.
      </p>
      <h3>Przedszkolaki</h3>
      <p>
        Dodaj zamianę. Zacznij od Fioletowego światła, a potem przejdź do Trzech świateł. W głośny wieczór włącz jedną
        piosenkę do zabawy <GameLink id="freeze-dance" />. Kto prowadzi, w dowolnej chwili krzyczy „stop!”, wszyscy
        zamierają, a kto się zachwieje, prowadzi następny. Wersja na siedząco to <GameLink id="stop-the-song" />:
        piosenka milknie, gdy podnosisz rękę, nawet w środku słowa.
      </p>
      <h3>W każdym wieku</h3>
      <ul>
        <li>Zacznij powoli, z długimi przerwami między sygnałami, żeby dziecko mogło wygrać.</li>
        <li>Wypróbuj sygnały inne niż słowa: podniesioną rękę, urwane nucenie, zgaszone światło.</li>
        <li>Od czasu do czasu celowo źle hamuj. Przyłapanie cię to dla dziecka połowa frajdy.</li>
        <li>Daj mu kolej w roli wołającego. Większość tych zabaw kończy się zamianą.</li>
        <li>Niech zabawa będzie krótka i kończ, póki dziecko chce jeszcze jednej rundy.</li>
      </ul>
      <p>
        Więcej znajdziesz w <Link href="/games/type/stop-go">zabawach w start i stop</Link> i w{" "}
        <Link href="/games/skill/self-control">zabawach uczących samokontroli</Link>. Jeśli martwisz się zachowaniem
        albo rozwojem swojego dziecka, porozmawiaj z pediatrą.
      </p>
    </>
  ),
};
