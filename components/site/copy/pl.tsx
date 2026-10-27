import Link from "next/link";
import { pathFor } from "@/lib/i18n";
import type { SiteCopy } from "./types";

const to = (page: Parameters<typeof pathFor>[1]) => pathFor("pl", page);

const UPDATED = "9 października 2026 r.";

const SUPPORT = (
  <a href="mailto:tim@oyno.app">tim@oyno.app</a>
);

export const pl: SiteCopy = {
  nav: {
    pricing: "Cennik",
    support: "Pomoc",
    privacy: "Prywatność",
    terms: "Regulamin",
    switchLabel: "Zmień język",
    start: "Zacznij",
  },

  home: {
    meta: {
      title: "Oyno: odłóż telefon i pobaw się dziesięć minut",
      description:
        "Oyno wstrzymuje twoje aplikacje na czas z dzieckiem i podsuwa jedną łatwą zabawę dziennie. Każda runda sprawia, że mała planeta twojej rodziny rośnie.",
    },
    eyebrow: "Dla rodziców dzieci od 0 do 5 lat",
    headline: (
      <>
        Telefon zjada ci wieczór. <span className="hl">Odzyskaj dziesięć minut.</span>
      </>
    ),
    sub: "W Czasie z dzieckiem Oyno wstrzymuje twoje aplikacje i podsuwa jedną łatwą zabawę, dopasowaną do energii, która ci została. Z każdą rundą planeta twojej rodziny rośnie.",
    cta: "Zacznij",
    planet: {
      open: "Otwórz swoje światy",
      close: "Zamknij światy",
      previous: "Poprzedni świat",
      next: "Następny świat",
      yours: "Już twój",
      unlocksAt: "Odblokujesz na poziomie rozkwitu {n}",
      hint: "Dotknij planety",
      worlds: {
        earth: "Ziemia",
        meadow: "Łąka",
        ember: "Żar",
        blossom: "Pąk",
        lagoon: "Laguna",
        dune: "Wydma",
        frost: "Szron",
        lavender: "Lawenda",
        moss: "Mech",
        honey: "Miód",
        cloud: "Chmura",
        coral: "Koral",
        rose: "Róża",
        pebble: "Kamyk",
        orchard: "Sad",
        aurora: "Zorza",
        clay: "Glina",
        mint: "Mięta",
        twilight: "Zmierzch",
        poppy: "Mak",
        pearl: "Perła",
        canyon: "Kanion",
        rain: "Deszcz",
        cedar: "Cedr",
        sunlit: "Słońce",
        berry: "Jagoda",
        glacier: "Lodowiec",
        marigold: "Nagietek",
        dream: "Marzenie",
        hearth: "Ognisko",
        home: "Dom",
      },
    },
    proof: {
      heading: "Łatwa zabawa dla zmęczonych rodziców",
      sub: "Zabawa, książka, kąpiel czy wspólne gotowanie: każda chwila razem sprawia, że wasza planeta rośnie.",
      previous: "Poprzedni ekran",
      next: "Następny ekran",
      bodies: {
        low: "Powiedz Oyno, ile masz baterii: niska, średnia czy pełna. Dostaniesz jedną zabawę na 5 do 15 minut bez przygotowań, a przy niskiej baterii taką, którą zrobisz na leżąco.",
        growth: "Każda zabawa ćwiczy skupienie, pamięć roboczą, samokontrolę lub elastyczne myślenie i podaje badanie oraz poradnik, na których się opiera. Ekran Rozwój pokazuje, co ćwiczyliście razem, umiejętność po umiejętności.",
        kidhours: "Ustaw harmonogramy na szkolne wieczory, weekendowe poranki albo kąpiel i sen, każdy z własnymi aplikacjami do wstrzymania. Aplikacje, których zawsze potrzebujesz, działają dalej.",
        keepsake: "Po rundzie dziecko dotyka planety, a obok może pojawić się mała pamiątka. Jest ich 24 do znalezienia, a kilka jest rzadkich.",
        home: "Zabawy, czytanie, kąpiel i gotowanie liczą się tak samo. Ekran główny trzyma jedną łatwą rzecz na dziś wieczór i pokazuje, jak blisko jest następny świat.",
        letter: "W każdą niedzielę planeta pisze o waszym tygodniu: o wspólnych wieczorach, zabawach i pierwszych razach waszego dziecka. Dopisz zdanie i wyślij list rodzinie.",
        find: "500 zabaw dla dzieci od 0 do 5 lat, każda w trzech krótkich krokach. Przeszukaj wszystkie albo pozwól, żeby Oyno wybrało jedną.",
        worlds: "Każda runda sprawia, że planeta rozkwita, a w trakcie zabawy otwiera się 31 światów. Opuszczony dzień nic nie kosztuje: planeta nigdy nie więdnie.",
      },
    },
    author: {
      heading: "Dlaczego stworzyłem Oyno",
      paragraphs: [
        "Nie byłoby Oyno bez mojej córeczki. Nie byłoby go też, gdyby telefony nie nauczyły się tak mocno nas trzymać.",
        "Pracuję cały dzień. Potem wracam do domu i sięgam po telefon. To tylko sekunda. Nienawidzę siebie za tę sekundę.",
        "Moja córeczka to widzi. Myśli, że tak po prostu jest. A tak nie jest.",
        "Próbowałem blokad. Usunąłem media społecznościowe. Nawyk został. Brałem telefon, widziałem zablokowany ekran i odkładałem go. Dla mnie to było nic. Dla niej to znowu był tata w telefonie.",
        "Przestałem więc walczyć z nawykiem. Dałem mu lepsze zajęcie.",
        "W języku kraju, w którym się urodziłem, „oyno” znaczy „baw się”. Teraz, gdy sięgam po telefon, podsuwa mi zabawę z nią. To frajda, a do tego pomaga rozwijać się jej mózgowi.",
        "Zajęło to miesiące. To nie kolejna blokada. To nie ćwiczenia oddechowe ani medytacja. To dziesięć minut z dzieckiem przy zabawie, za którą stoją badania.",
      ],
      name: "Tim",
      role: "Twórca Oyno",
      photoAlt: "Rodzic i mała dziewczynka na podłodze w salonie przy świecącej planecie z plasteliny",
    },
    plan: {
      eyebrow: "Jeden plan, wszystko w środku",
      pitch: "Czas z dzieckiem, 500 zabaw, pamiątki, niedzielny list i wszystkie światy, które odblokuje twoja rodzina. Anulujesz w każdej chwili.",
      monthly: "Miesięczna",
      yearly: "Roczna",
      cta: "Zacznij",
      appNote: "Oyno to aplikacja na iPhone’a. Wykup subskrypcję tutaj lub w aplikacji, a potem zaloguj się na to samo konto.",
    },
    closer: {
      heading: "Dziś wieczorem dziesięć minut.",
      body: "Konfiguracja zajmuje minutę, a pierwsza zabawa jest gotowa jeszcze przed kolacją.",
    },
  },

  pricing: {
    meta: {
      title: "Cennik | Oyno",
      description: "Ile kosztuje Oyno na stronie i w App Store.",
    },
    eyebrow: "Cennik",
    heading: "Jeden plan. Dwa sposoby płatności.",
    intro: "Oba dają dostęp do tego samego Oyno. Wybierz drzwi, przed którymi stoisz.",
    web: {
      eyebrow: "Na stronie",
      perMonth: " / mies.",
      orYearly: (yearly) => `lub ${yearly} / rok`,
      cta: "Zacznij",
      note: "Płatność obsługuje Dodo Payments, nasz oficjalny sprzedawca (merchant of record). Ceny zawierają podatek obowiązujący w twoim kraju. Anulujesz w każdej chwili.",
    },
    app: {
      eyebrow: "W App Store",
      headline: "3 dni za darmo",
      sub: "Potem płatność przez Apple według ceny w App Store.",
      note: "Okres próbny to oferta wprowadzająca Apple. Zarządzasz nim w subskrypcjach swojego konta Apple.",
    },
    body: (
      <>
        <h2>Co obejmuje subskrypcja</h2>
        <p>
          Czas z dzieckiem (wybrane aplikacje są wstrzymywane na twoim telefonie w ustawionych
          godzinach), nową zabawę co wieczór, minutnik i wszystkie światy, które odblokuje twoja
          rodzina. Nie ma darmowej wersji ani dodatkowych płatności w ramach subskrypcji.
        </p>
        <h2>Zwroty</h2>
        <p>
          Subskrypcja kupiona na stronie jednak nie dla ciebie? Napisz na {SUPPORT} w ciągu 14 dni
          od płatności, a zwrócimy całą kwotę. Zakupy w App Store zwraca Apple na stronie{" "}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        </p>
      </>
    ),
  },

  support: {
    meta: {
      title: "Pomoc | Oyno",
      description: "Jak się z nami skontaktować i odpowiedzi na najczęstsze pytania.",
    },
    eyebrow: "Pomoc",
    heading: "Jak możemy pomóc?",
    intro: (
      <>
        Napisz na{" "}
        <a className="text-highlight" href="mailto:tim@oyno.app">
          tim@oyno.app
        </a>
        . Odpowiada prawdziwy człowiek, zwykle w ciągu doby.
      </>
    ),
    body: (
      <>
        <h2>Wstrzymana aplikacja nadal się otwiera</h2>
        <p>
          Sprawdź, czy Oyno ma dostęp do Czasu przed ekranem w{" "}
          <strong>Ustawienia → Czas przed ekranem</strong> i czy aplikacja jest na liście w{" "}
          <strong>Czas z dzieckiem → Wstrzymane</strong>. Aplikacji zainstalowanych po utworzeniu
          listy nie ma na niej, dopóki ich nie dodasz.
        </p>
        <h2>Potrzebuję telefonu w Czasie z dzieckiem</h2>
        <p>
          Telefon, Wiadomości i Mapy nigdy nie są wstrzymywane. W każdym innym przypadku naciśnij
          i przytrzymaj <strong>Nie teraz</strong>: aplikacje odblokują się na 20 minut, a potem
          Czas z dzieckiem wróci.
        </p>
        <h2>Mam subskrypcję ze strony. Jak się zalogować?</h2>
        <p>
          Zainstaluj Oyno z App Store i zaloguj się tak samo jak tutaj: tym samym adresem e-mail albo
          przez Apple, Google lub Facebooka. Subskrypcja jest już przypisana do tego konta.
        </p>
        <h2>Jak anulować subskrypcję?</h2>
        <p>
          W aplikacji: <strong>Profil → Zarządzaj subskrypcją</strong>. Subskrypcję ze strony
          możesz też anulować przez link w rachunku od Dodo Payments. Subskrypcję z App Store
          anulujesz w subskrypcjach swojego konta Apple.
        </p>
        <h2>Jak usunąć konto?</h2>
        <p>
          W aplikacji: <strong>Profil → Usuń konto</strong>. Sprawdź,{" "}
          <Link href={`${to("privacy")}#delete`}>co zostaje wtedy usunięte</Link>.
        </p>
      </>
    ),
  },

  privacy: {
    meta: {
      title: "Prywatność | Oyno",
      description: "Co Oyno przechowuje, czego nigdy nie widzi i jak to wszystko usunąć.",
    },
    eyebrow: "Prywatność",
    heading: "Twoje wieczory należą do ciebie",
    updatedLabel: "Ostatnia aktualizacja",
    updated: UPDATED,
    body: (
      <>
        <p>
          Operatorem Oyno jest Teimur Gasanov. Oyno to aplikacja na iPhone’a, która w ustawionych
          przez rodzica godzinach wstrzymuje wybrane przez niego aplikacje i proponuje krótkie
          zabawy z dzieckiem. Na tej stronie opisujemy, jakie dane przechowują aplikacja i ta
          strona internetowa, w jakim celu oraz jak je usunąć.
        </p>

        <h2>Jakie dane przechowujemy</h2>
        <h3>Twoje konto</h3>
        <p>
          Adres e-mail, a jeśli logujesz się przez Apple, Google lub Facebook — identyfikator,
          który przekazuje nam dany dostawca, wraz z imieniem i adresem e-mail udostępnianymi
          przez tego dostawcę. Jeśli korzystasz z ukrytego adresu w ramach funkcji „Zaloguj się,
          używając konta Apple”, widzimy wyłącznie adres przekierowujący.
        </p>
        <h3>Twoje rundy</h3>
        <p>
          Każda rozegrana runda, czas jej trwania i informacja o tym, jaka to była zabawa,
          pozostają na twoim telefonie. Aby po zmianie telefonu lub ponownej instalacji twoja
          planeta została zachowana, w ramach twojego konta przechowujemy kopię zapasową dwóch
          sum: liczby rozegranych rund i liczby minut. Żadna z tych informacji nie wskazuje
          dziecka: Oyno nigdy nie pyta o imię, wiek ani zdjęcie twojego dziecka. Odpowiedzi
          udzielone na pytania na tej stronie (na przykład przedział wiekowy) są przechowywane
          razem z danymi twojej subskrypcji, abyśmy mogli ustalić, które pytania prowadzą do
          zabaw, do których ludzie wracają.
        </p>
        <h3>Twoja subskrypcja</h3>
        <p>
          W przypadku subskrypcji wykupionej w aplikacji: identyfikator transakcji Apple, produkt,
          data wygaśnięcia oraz informacja, czy subskrypcja jest aktywna. W przypadku subskrypcji
          wykupionej na stronie: oficjalnym sprzedawcą (merchant of record) jest Dodo Payments,
          który przechowuje dane twojej karty — nigdy ich nie widzimy. Przechowujemy przekazane
          nam przez Dodo identyfikatory klienta i subskrypcji, status oraz datę zakończenia
          opłaconego okresu.
        </p>
        <h3>Analityka produktowa</h3>
        <p>
          Za pośrednictwem Amplitude rejestrujemy, które ekrany są otwierane i jakie działania są
          podejmowane (rozpoczęcie rundy, wyświetlenie ekranu płatności), aby znaleźć miejsca, w
          których aplikacja jest niezrozumiała.
        </p>
        <h3>Reklama</h3>
        <p>
          Ta strona ładuje piksel Meta, aby mierzyć, które reklamy przyprowadzają osoby
          wykupujące subskrypcję. Gdy subskrypcja się rozpoczyna, przesyłamy do Meta skrót (hash)
          adresu e-mail, aby można było dopasować konwersję. Skrót jest tworzony na naszym
          serwerze, nigdy w twojej przeglądarce.
        </p>

        <h2>Co nigdy nie opuszcza twojego telefonu</h2>
        <p>
          Do wstrzymywania aplikacji Oyno używa interfejsu API Czasu przed ekranem firmy Apple.
          Apple przekazuje aplikacji nieprzejrzyste tokeny wybranych aplikacji, a nie ich nazwy, i
          tokeny te pozostają na urządzeniu. Nigdy nie widzimy, z jakich aplikacji korzystasz ani
          jak długo, nie widzimy też twojej historii przeglądania, wiadomości, lokalizacji,
          kontaktów ani zdjęć.
        </p>

        <h2>Kto jeszcze ma do nich dostęp</h2>
        <ul>
          <li>
            <strong>Supabase</strong>: baza danych i usługa logowania.
          </li>
          <li>
            <strong>Vercel</strong>: hosting tej strony i API, z którym łączy się aplikacja.
          </li>
          <li>
            <strong>Dodo Payments</strong>: oficjalny sprzedawca (merchant of record) subskrypcji
            kupowanych na stronie.
          </li>
          <li>
            <strong>Amplitude</strong>: analityka produktowa.
          </li>
          <li>
            <strong>Resend</strong>: kody logowania, które wysyłamy ci e-mailem.
          </li>
          <li>
            <strong>Meta</strong>: pomiar skuteczności reklam, jak opisano powyżej.
          </li>
        </ul>
        <p>Nie sprzedajemy twoich danych ani nie udostępniamy ich brokerom danych.</p>

        <h2 id="delete">Usunięcie wszystkich danych</h2>
        <p>
          W aplikacji: <strong>Profil → Usuń konto</strong>. Spowoduje to natychmiastowe
          usunięcie twojego konta, sum, których kopię przechowujemy, oraz rund zapisanych na
          twoim telefonie. Tej operacji nie można cofnąć.
        </p>
        <p>
          Logujesz się przez Facebooka? Możesz też usunąć Oyno na Facebooku w sekcji{" "}
          <strong>Ustawienia i prywatność → Ustawienia → Aplikacje i witryny</strong>. Facebook
          przestanie wtedy przekazywać nam jakiekolwiek dalsze dane; same dane usuwa krok opisany
          powyżej.
        </p>
        <p>
          Usunięcie konta nie anuluje subskrypcji. Najpierw ją anuluj (zob. sekcję{" "}
          „<Link href={to("support")}>Pomoc</Link>”), a potem usuń konto. Możesz też napisać na{" "}
          {SUPPORT}, a my zrobimy jedno i drugie i to potwierdzimy.
        </p>

        <h2>Twoje prawa</h2>
        <p>
          Masz prawo dostępu do swoich danych, ich sprostowania, eksportu i usunięcia, a także
          prawo wniesienia sprzeciwu wobec ich przetwarzania. We wszystkich sprawach, których
          aplikacja nie pozwala załatwić bezpośrednio, napisz na {SUPPORT}.
        </p>

        <h2>Dzieci</h2>
        <p>
          Oyno jest przeznaczone dla rodziców. Konta są przeznaczone dla osób dorosłych, a
          aplikacja nie zbiera żadnych danych od dziecka, z którym pomaga ci się bawić, ani na
          jego temat.
        </p>
      </>
    ),
  },

  terms: {
    meta: {
      title: "Regulamin | Oyno",
      description: "Zasady korzystania z Oyno i z subskrypcji sprzedawanej na tej stronie.",
    },
    eyebrow: "Warunki korzystania",
    heading: "Regulamin",
    updatedLabel: "Ostatnia aktualizacja",
    updated: UPDATED,
    body: (
      <>
        <p>
          Niniejszy regulamin dotyczy aplikacji Oyno oraz tej strony internetowej, których
          operatorem jest Teimur Gasanov. Korzystanie z którejkolwiek z nich oznacza akceptację
          regulaminu.
        </p>

        <h2>Czym jest Oyno</h2>
        <p>
          Narzędziem, które w ustawionych przez ciebie godzinach wstrzymuje wybrane przez ciebie
          aplikacje na twoim własnym iPhonie, proponuje krótkie zabawy z dzieckiem i prowadzi
          zapis rozegranych rund. Zabawy są propozycjami. To ty decydujesz, czy dana zabawa jest
          bezpieczna i odpowiednia dla twojego dziecka i twojego otoczenia, i to ty sprawujesz nad
          nią nadzór.
        </p>

        <h2>Twoje konto</h2>
        <p>
          Konto jest potrzebne, aby subskrypcja kupiona na stronie była dostępna dla ciebie w
          aplikacji. Nie udostępniaj nikomu swoich danych logowania. Konto możesz usunąć w każdej
          chwili w <strong>Profil → Usuń konto</strong>.
        </p>

        <h2>Subskrypcje</h2>
        <h3>Kupione na tej stronie</h3>
        <p>
          Płatność pobiera Dodo Payments, oficjalny sprzedawca (merchant of record), którego
          warunki mają zastosowanie do transakcji. Subskrypcje odnawiają się automatycznie w
          wybranym przez ciebie cyklu, dopóki ich nie anulujesz. Ceny są wyświetlane w twojej
          walucie przed dokonaniem płatności i obejmują wszelkie podatki, które Dodo ma obowiązek
          pobrać. Jeśli Oyno ci nie odpowiada, poproś pod adresem {SUPPORT} o pełny zwrot w ciągu
          14 dni od płatności.
        </p>
        <h3>Kupione w aplikacji</h3>
        <p>
          Płatność pobiera Apple na własnych warunkach, w tym zgodnie ze standardową umową
          licencyjną użytkownika końcowego licencjonowanej aplikacji Apple. 3-dniowy darmowy
          okres próbny jest ofertą wprowadzającą Apple; jeśli nie anulujesz subskrypcji przed
          jego zakończeniem, Apple pobierze opłatę za wybrany plan i będzie go odnawiać, dopóki
          nie anulujesz subskrypcji w ustawieniach konta Apple. O zwrotach decyduje Apple.
        </p>
        <h3>Gdy subskrypcja się kończy</h3>
        <p>
          Twoja planeta i rozegrane rundy zostają. Czas z dzieckiem i nowe zabawy przestają
          działać, dopóki ponownie nie wykupisz subskrypcji.
        </p>

        <h2>Zmiany i dostępność</h2>
        <p>
          Stale ulepszamy Oyno i możemy zmieniać lub usuwać funkcje. Jeśli zmiana odbierze ci
          coś, co masz opłacone, napisz na {SUPPORT}, a naprawimy to. Dbamy o ciągłość działania
          usługi, ale nie możemy obiecać, że nigdy nie dojdzie do przerw.
        </p>

        <h2>Odpowiedzialność</h2>
        <p>
          Oyno jest udostępniane w stanie „takim, jakie jest”. W zakresie dozwolonym przez prawo
          nasza odpowiedzialność z tytułu jakiegokolwiek roszczenia jest ograniczona do kwoty
          zapłaconej nam przez ciebie w ciągu 12 miesięcy poprzedzających to roszczenie. Żadne z
          postanowień niniejszego regulaminu nie ogranicza praw przysługujących ci na podstawie
          przepisów o ochronie konsumentów.
        </p>

        <h2>Kontakt</h2>
        <p>
          Pytania dotyczące regulaminu: {SUPPORT}. Nasza{" "}
          <Link href={to("privacy")}>polityka prywatności</Link> wyjaśnia, jak przetwarzamy twoje
          dane.
        </p>
      </>
    ),
  },
};
