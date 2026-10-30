import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../winter-evening-games";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Zabawy z dzieckiem na ciemne zimowe wieczory",
  description:
    "Zabawy, które wykorzystują ciemność: lampę, latarkę w telefonie i cichy pokój. Propozycje dla niemowląt, maluchów i przedszkolaków oraz sposób na zabawę z dwójką dzieci w różnym wieku.",
  body: (
    <>
      <p>
        Gdy przed kolacją jest już ciemno, cały wieczór dzieje się w domu. Pracuję cały dzień, wracam do domu i sięgam po
        telefon. Zabawy poniżej dają telefonowi jedno inne zadanie: bycie latarką.
      </p>
      <p>
        Wykorzystują samą ciemność. Lampę, którą się gasi i zapala, plamkę światła na ścianie, cichy pokój, w którym można
        nasłuchiwać. Są ułożone według wieku, a na końcu jest część dla dwójki dzieci w różnym wieku.
      </p>

      <h2>Dla niemowlaka: lampa i plamka</h2>
      <p>
        <GameLink id="lamp-off-lamp-on" /> działa od 2 miesięcy. Usiądź z maluszkiem na kolanach przy lampie, do której
        sięgasz. Powiedz powoli „gaśnie” i zgaś, poczekaj, aż maluszek zacznie szukać światła, a potem powiedz „świeci” i
        zapal. Za każdym razem trochę wydłużaj ciemną pauzę i cały czas mów cicho.
      </p>
      <p>
        To a kuku z lampą. Kiedy badacze zaburzali rytm zabawy w a kuku u niemowląt w wieku od 2 do 6 miesięcy, maluchy
        reagowały <Cite id="rochat-1999" />.
      </p>
      <p>
        <GameLink id="light-spot-hunt" /> działa od 5 miesięcy, w przyciemnionej sypialni, z maluszkiem na kolanach.
        Poświeć latarką z telefonu na ścianę i poczekaj, aż maluszek znajdzie plamkę światła. Przesuń ją powoli po ścianie,
        a potem zgaś i zapytaj „gdzie on jest?”. Zapal zajączka w nowym miejscu i pozwól maluszkowi go znaleźć, zanim znowu
        go przesuniesz. Niemowlęta w wieku od pięciu i pół do sześciu i pół miesiąca odnajdowały zabawkę po krótkim
        opóźnieniu <Cite id="reznick-2004" />.
      </p>

      <h2>Dla malucha: gwiazdka na suficie</h2>
      <p>
        <GameLink id="ceiling-star-spot" /> działa od roku. Połóżcie się obok siebie w ciemnej sypialni, poświeć latarką w
        sufit i przesuwaj plamkę powoli. Dziecko śledzi gwiazdkę oczami, a gdy się zatrzyma, pokazuje ją palcem. Zgaś
        latarkę, zapytaj „gdzie była?” i pozwól mu pokazać, zanim zapalisz ją, żeby sprawdzić.
      </p>
      <p>
        Harvard nazywa taką zabawę „podaniem i odbiciem”: skup się na tym samym co dziecko, nazwij to, co widzi, działajcie
        na zmianę i czekaj <Cite id="serve-return" />.
      </p>
      <p>
        <GameLink id="goodnight-room-dark" /> jest dla dzieci od 2 lat. Powiedzcie razem dobranoc trzem rzeczom w pokoju,
        na przykład lampie, krzesłu i misiowi, pokazując każdą. Zgaś światło i zapytaj „gdzie jest lampa?”, żeby dziecko
        pokazało ją po ciemku. Zapal światło, żeby sprawdzić, a potem zapytaj o pozostałe dwie. W jednym badaniu dwulatki
        pamiętały, które garnki już opróżniły <Cite id="hughes-ensor-2005" />.
      </p>

      <h2>Od 2 lat: zamieranie po ciemku</h2>
      <p>
        <GameLink id="spot-chase" /> to zabawa na resztki energii. Przygaś światło, poświeć latarką na podłogę i niech
        dziecko depcze jasną plamkę. Przesuwaj plamkę, gdy ją goni. Gdy zgasisz latarkę, wszyscy zamierają, aż światło
        wróci. Potem oddaj latarkę dziecku i teraz ty goń plamkę.
      </p>
      <p>
        W wieloletnim badaniu dzieci w wieku od 22 do 45 miesięcy proszono, żeby zatrzymywały się i ruszały na sygnał, a
        do tego czekały i szeptały <Cite id="kochanska-2000" />. Tutaj sygnałem jest ciemność.
      </p>

      <h2>Dla przedszkolaka: ścieżki i przełączniki</h2>
      <p>
        W zabawę <GameLink id="torch-trail" /> bawicie się na leżąco. Przygaś światło i poświeć latarką na trzy rzeczy,
        jedną po drugiej. Zgaś ją, a dziecko wymienia te trzy rzeczy w tej samej kolejności. Dodaj czwartą, a potem oddaj
        latarkę, żeby teraz dziecko sprawdziło ciebie.
      </p>
      <p>
        <GameLink id="sun-moon-switch" /> wymaga stania przy włączniku światła. Gdy światło się zapala, dziecko mówi
        „noc” i się zwija. Gdy gaśnie, mówi „dzień” i przeciąga się na pobudkę. Pstrykaj włącznikiem w nieoczekiwanych
        momentach, najpierw powoli, potem szybko. Potem się zamieńcie, a ty celowo się myl. Mówienie „dzień” na noc to jedno
        z zadań, które badacze dawali dzieciom w wieku od 2 do 6 lat <Cite id="carlson-2005" />.
      </p>
      <p>
        Na najcichszy koniec wieczoru <GameLink id="five-sounds" /> nie wymaga żadnego światła. Połóżcie się razem bez
        ruchu z zamkniętymi oczami. Kiedy któreś z was usłyszy dźwięk, szepcze, co to było, i podnosi palec. Skończcie na
        pięciu i ustalcie razem, który dźwięk był najcichszy.
      </p>

      <h2>Dwoje dzieci, jedna latarka</h2>
      <p>
        Złap światełko kończy się tym, że latarkę trzyma dziecko. Starsze rodzeństwo może przejąć to zadanie na całą
        zabawę, a niemowlę albo maluch szuka plamki, jak w Zajączku na ścianie albo Gwiazdce na suficie. Ty zostajesz na
        podłodze między nimi i nazywasz.
      </p>
      <p>
        Świeć na ściany, sufit i podłogę, z dala od twarzy. Używaj telefonu tylko jako latarki, a po zabawie odłóż go
        ekranem w dół.
      </p>
      <p>
        Więcej znajdziesz w <Link href="/games/tag/lights">zabawach ze światłem</Link>,{" "}
        <Link href="/games/tag/quiet">cichych zabawach</Link> i w{" "}
        <Link href="/games/tag/bedtime">zabawach przed snem</Link>.
      </p>
    </>
  ),
};
