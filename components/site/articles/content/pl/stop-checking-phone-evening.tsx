import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../stop-checking-phone-evening";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Jak przestać sprawdzać telefon wieczorem",
  description:
    "Dlaczego wieczorne sprawdzanie telefonu to nawyk i kroki na dziś: mniej powiadomień, telefon w innym pokoju, stałe okno i zabawa, po którą sięgniesz zamiast niego.",
  body: (
    <>
      <p>
        Pracuję cały dzień, wracam do domu i sięgam po telefon. Próbowałem blokad i usunąłem aplikacje społecznościowe, a
        nawyk został. Jeśli twoje wieczory wyglądają tak samo, większość kroków poniżej opiera się na badaniu. Żaden nie
        wymaga więcej silnej woli.
      </p>

      <h2>Dlaczego ciągle sprawdzasz</h2>
      <p>
        Badacze, którzy badali użytkowników smartfonów, opisali „nawyk sprawdzania”: krótkie, powtarzane zerknięcia na
        treści, do których łatwo szybko dotrzeć. Użytkownicy odczuwali go bardziej jako uciążliwość niż jako uzależnienie{" "}
        <Cite id="oulasvirta-2012" />. Jeśli wieczorne sprawdzanie bardziej cię irytuje, niż cieszy, to uczucie zna
        wielu ludzi.
      </p>
      <p>
        Nawyki działają, gdy myślami jesteś gdzie indziej. W badaniach dzienniczkowych ludzie robiący to, co robili niemal
        codziennie w tym samym otoczeniu, zwykle myśleli o czymś innym <Cite id="wood-2002" />. Kanapa po pracy, codziennie,
        to właśnie takie otoczenie.
      </p>
      <p>
        Pewnie sprawdzasz częściej, niż myślisz. Młodzi dorośli, których telefony rejestrowały korzystanie, sięgali po nie
        około 85 razy dziennie i używali ich około pięciu godzin, mniej więcej dwa razy więcej, niż sami szacowali{" "}
        <Cite id="andrews-2015" />. Twój iPhone prowadzi takie same statystyki.{" "}
        <a href="https://support.apple.com/pl-pl/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Raport Czasu przed ekranem
        </a>{" "}
        pokazuje podniesienia telefonu z każdego dnia. Spójrz na niego raz, bez oceniania, żeby wiedzieć, skąd zaczynasz.
      </p>

      <h2>Ogranicz powiadomienia, ale ich nie wyłączaj</h2>
      <p>
        Każda wibracja to zaproszenie. Same powiadomienia, nawet gdy nikt nie dotykał telefonu, zakłócały zadanie
        wymagające uwagi mniej więcej tak samo jak odebranie połączenia czy pisanie wiadomości{" "}
        <Cite id="stothart-2015" />.
      </p>
      <p>
        Wyłączenie ich wszystkich to też nie rozwiązanie. W badaniu randomizowanym ludzi losowo przydzielono do
        otrzymywania powiadomień jak zwykle, zebranych w paczki trzy razy dziennie albo wcale. Grupa z paczkami czuła się
        bardziej uważna, w lepszym nastroju, bardziej panująca nad telefonem i mniej zestresowana. Grupa bez powiadomień
        czuła się bardziej niespokojna <Cite id="fitz-2019" />.
      </p>
      <ul>
        <li>
          Włącz{" "}
          <a href="https://support.apple.com/pl-pl/guide/iphone/change-notification-settings-iph7c3d96bab/ios">
            Zaplanowane podsumowanie
          </a>{" "}
          i przenieś do niego najbardziej hałaśliwe aplikacje. Ustaw jedno podsumowanie na porę po położeniu dziecka spać.
        </li>
        <li>
          Ustaw na wieczór{" "}
          <a href="https://support.apple.com/pl-pl/guide/iphone/set-up-a-focus-iphd6288a67f/ios">tryb skupienia</a>,
          który przepuszcza połączenia od kilku osób, a resztę wstrzymuje.
        </li>
      </ul>

      <h2>Przenieś telefon</h2>
      <p>
        W jednym eksperymencie ludziom jedzącym posiłek w restauracji z przyjaciółmi lub rodziną kazano albo trzymać
        telefony na stole, albo je schować. Z telefonami na stole czuli się bardziej rozkojarzeni i mniej cieszyli się
        posiłkiem <Cite id="dwyer-2018" />.
      </p>
      <p>
        Daj telefonowi na wieczór miejsce, które nie jest twoją kieszenią ani oparciem kanapy. Sprawdzi się ładowarka w
        przedpokoju albo w kuchni. Odłóż go tam zaraz po wejściu, ekranem w dół i wyciszony, a jeśli go potrzebujesz, podejdź
        do niego.
      </p>

      <h2>Ta sama pora, to samo miejsce</h2>
      <p>
        Nowe nawyki powstają przez powtarzanie w stałym otoczeniu. Ochotnicy, którzy powtarzali nowe codzienne zachowanie w
        tym samym otoczeniu, potrzebowali od 18 do 254 dni, by osiągnąć szczyt automatyzmu, a opuszczenie jednego dnia nie
        miało na niego istotnego wpływu <Cite id="lally-2010" />. Wybierz więc jedno okno i trzymaj się go. Nie oczekuj,
        że w pierwszym tygodniu będzie łatwo, i nie rezygnuj po jednym złym wieczorze.
      </p>
      <p>
        Amerykańska Akademia Pediatrii radzi, żeby posiłki i czas zabawy rodzica z dzieckiem były wolne od ekranów, i to
        zarówno dla rodziców, jak i dla dzieci, a na ten czas sugeruje włączać tryb „Nie przeszkadzać”{" "}
        <Cite id="aap-media-2016" />. Kolacja to dobre pierwsze okno. Tak samo pierwsze 15 minut po powrocie do domu.
      </p>
      <p>
        Jeśli chcesz, żeby to telefon pilnował granicy za ciebie, Czas przed ekranem może{" "}
        <a href="https://support.apple.com/pl-pl/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          ustalać, kiedy aplikacje są dostępne
        </a>
        . Poradnik o{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">Czasie przed ekranem na rodzinne wieczory</Link>{" "}
        prowadzi przez to krok po kroku.
      </p>

      <h2>Miej gotową zabawę</h2>
      <p>
        Odruch sięgania i tak przyjdzie. Daj mu ujście. W eksperymencie w muzeum nauki rodzice, których poproszono, by
        dużo korzystali z telefonów, czuli się bardziej rozkojarzeni i mniej związani z dziećmi niż rodzice poproszeni, by
        korzystali z nich mało <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>Wybierz zabawę, zanim zacznie się wieczór, żeby nie musieć myśleć, gdy przyjdzie ta chwila:</p>
      <ul>
        <li>
          Z niemowlakiem: <GameLink id="sock-puppet-chat" /> wymaga jednej wolnej skarpetki i piskliwego głosiku.
        </li>
        <li>
          Z maluchem: w zabawie <GameLink id="what-can-you-hear" /> oboje leżycie nieruchomo i nazywacie dźwięki domu.{" "}
          <GameLink id="give-and-take" /> to zabawka podawana tam i z powrotem.
        </li>
        <li>
          Z przedszkolakiem: w zabawie <GameLink id="sleepy-lion" /> chrapiesz na kanapie, a dziecko się skrada.{" "}
          <GameLink id="rewind-the-day" /> cofa dzień od teraz aż do śniadania, a <GameLink id="story-stones" /> buduje
          bajkę po trzy słowa.
        </li>
      </ul>
      <p>
        Więcej znajdziesz w <Link href="/games/energy/low">leniwych zabawach</Link>, na wieczory, gdy ledwo dajesz radę
        usiąść.
      </p>
    </>
  ),
};
