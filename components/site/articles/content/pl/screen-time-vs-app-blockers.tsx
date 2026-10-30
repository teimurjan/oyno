import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../screen-time-vs-app-blockers";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Czas przed ekranem, blokady aplikacji i Oyno: co które daje rodzicom",
  description:
    "Uczciwe porównanie Czasu przed ekranem od Apple, aplikacji blokujących i Oyno dla rodziców, którzy chcą odzyskać wieczór, z tym, czego każde z nich nie robi.",
  body: (
    <>
      <p>
        Chcesz wyrzucić telefon z godziny, którą spędzasz z dzieckiem. Na iPhonie są do tego trzy rodzaje narzędzi:
        ustawienia Czasu przed ekranem wbudowane przez Apple, aplikacje stworzone do blokowania innych aplikacji i Oyno,
        które tworzę. To uczciwe spojrzenie na każde z nich, także na sytuacje, w których Oyno to zły wybór.
      </p>
      <p>
        Ten cel jest wart narzędzia. Amerykańska Akademia Pediatrii zaleca, żeby posiłki i czas zabawy rodzica z dzieckiem
        były wolne od ekranów, zarówno dla rodziców, jak i dla dzieci, i mówi, że rodzice mogą na ten czas włączać w
        telefonach tryb „Nie przeszkadzać” <Cite id="aap-media-2016" />.
      </p>

      <h2>Czas przed ekranem od Apple</h2>
      <p>
        Czas przed ekranem już jest na twoim iPhonie i nic nie kosztuje. W iOS 27 ustawiasz{" "}
        <strong>Harmonogram Czasu przed ekranem</strong> z oknami czasowymi, na przykład oknem na wieczór, oraz{" "}
        <strong>Przydziały czasu</strong>, które ograniczają, jak długo korzystasz z kategorii aplikacji, takich jak Sieci
        społecznościowe czy Gry. Lista <strong>Zawsze dozwolone</strong> zostawia wybrane osoby i aplikacje otwarte bez
        względu na harmonogram (
        <a href="https://support.apple.com/pl-pl/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Wsparcie Apple: ustawianie harmonogramów i przydziałów czasu
        </a>
        ). Czterocyfrowy kod Czasu przed ekranem nie pozwala ci zmienić tych ustawień bez niego (
        <a href="https://support.apple.com/pl-pl/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Wsparcie Apple: kod Czasu przed ekranem
        </a>
        ).
      </p>
      <p>
        Co robi dobrze: jest darmowy, wbudowany i może objąć też twojego iPada i Maca, gdy włączysz Udostępniaj między
        urządzeniami. Apple podaje też, że przydział czasu obejmuje stronę internetową aplikacji, jeśli aplikacja ją
        deklaruje.
      </p>
      <p>
        Czego nie robi: mówi „nie” i na tym koniec. Gdy okno się zaczyna, nic nie podpowiada, co zrobić z tym czasem. A
        jeśli kod ustawiasz dla siebie, to go znasz. Nasz{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">poradnik krok po kroku o Czasie przed ekranem</Link>{" "}
        opisuje ustawienia i problem z kodem.
      </p>

      <h2>Aplikacje blokujące i aplikacje do skupienia</h2>
      <p>
        W App Store jest wiele aplikacji stworzonych do blokowania albo ograniczania innych aplikacji. Bardzo się od
        siebie różnią, więc ta część daje ci pytania do zadania, a nie werdykty. Zanim za którąś zapłacisz, sprawdź:
      </p>
      <ul>
        <li>Czy jest na twój własny telefon, czy to kontrola rodzicielska na urządzenie dziecka?</li>
        <li>Czy możesz ustawić dni i godziny, czy tylko ręcznie uruchomić sesję?</li>
        <li>Co się dzieje, gdy otworzysz zablokowaną aplikację, i jak łatwo to obejść?</li>
        <li>Czy blokuje strony internetowe, aplikacje czy jedno i drugie?</li>
        <li>Czy daje ci cokolwiek do zrobienia w czasie, który zwalnia?</li>
      </ul>
      <p>
        Sam próbowałem blokad i usunąłem aplikacje społecznościowe. Nawyk został. To nie werdykt o żadnej aplikacji. To
        powód, dla którego ostatnie pytanie z tej listy jest dla mnie ważne.
      </p>

      <h2>Oyno</h2>
      <p>
        Oyno to aplikacja na iOS dla rodziców dzieci od 0 do 5 lat. Korzysta z Czasu przed ekranem od Apple na twoim
        własnym iPhonie. Ustawiasz Czas z dzieckiem: dni, godzinę początku i końca i tyle harmonogramów, ile potrzebujesz.
        W Czasie z dzieckiem wybrane przez ciebie aplikacje są wstrzymane. Wybierasz, które aplikacje są zawsze dozwolone,
        a które nigdy, i jest 20-minutowa przerwa „Nie teraz”.
      </p>
      <p>
        Wstrzymana aplikacja pokazuje ekran Oyno. Jego przycisk „Otwórz Oyno” prowadzi do zabawy. Jest ich 500, w trzech
        przedziałach wiekowych i na niską, średnią albo pełną energię, każda trwa od 5 do 15 minut i każda opiera się na
        badaniu i poradniku. Harmonogram może odblokować twoje aplikacje na jakiś czas po tym, jak rozegracie z dzieckiem
        rundę. Każda runda sprawia, że mała planeta twojej rodziny rośnie. Oyno nie pyta o imię ani zdjęcie dziecka.
      </p>
      <p>
        Chodzi o to, żeby blokada i zabawa przychodziły razem. W jednym eksperymencie rodzice w muzeum nauki, których
        poproszono, by dużo korzystali z telefonów, czuli się bardziej rozkojarzeni i mniej związani z dziećmi niż rodzice
        poproszeni, by korzystali z nich mało <Cite id="kushlev-dunn-2019" />. Odpowiedź Oyno to włożenie czegoś w
        miejsce, które zostawia telefon.
      </p>

      <h2>Czego Oyno nie robi</h2>
      <ul>
        <li>
          <strong>Jest tylko na iOS.</strong> Nie ma wersji na Androida.
        </li>
        <li>
          <strong>Jest na twój telefon, nie na telefon dziecka.</strong> To nie kontrola rodzicielska na urządzenie
          dziecka. Do tego Apple ma własny poradnik,{" "}
          <a href="https://support.apple.com/pl-pl/guide/child-safety/welcome-r1jy0rk9vfz8/web">
            Urządzenia Apple dla dzieci i rodzin
          </a>
          .
        </li>
        <li>
          <strong>Nie blokuje stron internetowych.</strong> Wstrzymuje aplikacje. Jeśli problemem jest strona, użyj
          samego Czasu przed ekranem.
        </li>
        <li>
          <strong>To nie zamek.</strong> Przerwa „Nie teraz” otwiera aplikacje na 20 minut. To szturchnięcie, które
          ustawiasz dla siebie.
        </li>
        <li>
          <strong>Nie jest darmowe.</strong> To subskrypcja miesięczna albo roczna, z 3-dniowym darmowym okresem próbnym w
          App Store. Czas przed ekranem nic nie kosztuje.
        </li>
      </ul>

      <h2>Jak wybrać</h2>
      <p>
        Zacznij od Czasu przed ekranem. Jest darmowy, a tydzień z nim wiele ci powie. Jeśli wieczorne okno się trzyma i
        jest dobrze, na tym poprzestań.
      </p>
      <p>
        Przyjrzyj się aplikacji blokującej, jeśli twoim problemem jest głównie dzień pracy, strony internetowe albo
        telefon z Androidem, bo Oyno tego nie obejmuje. Zadaj pytania z listy powyżej i sprawdź, czy wybrana aplikacja
        odpowiada na twoje potrzeby.
      </p>
      <p>
        Przyjrzyj się Oyno, jeśli twoje dziecko ma mniej niż 6 lat, godzina, którą chcesz odzyskać, to ta spędzana z
        nim, a samo blokowanie się nie przyjęło, bo lukę, którą zostawiło, wypełniło coś innego w telefonie.
      </p>
      <p>
        Cokolwiek wybierzesz, miej gotową zabawę na pierwszy wieczór. Z niemowlakiem spróbuj zabawy{" "}
        <GameLink id="babble-back" />: poczekaj na jakikolwiek dźwięk i odpowiedz na niego, jakby to było prawdziwe
        zdanie. Z maluchem spróbuj zabawy <GameLink id="pocket-kiss-hand" />, w której buziak chowa się w jednej z jego
        piąstek. Z przedszkolakiem spróbuj zabawy <GameLink id="countdown-stop" /> albo <GameLink id="sleepy-lion" />, w
        które bawisz się na leżąco. Więcej znajdziesz w{" "}
        <Link href="/games/energy/low">leniwych zabawach dla zmęczonych rodziców</Link>.
      </p>
    </>
  ),
};
