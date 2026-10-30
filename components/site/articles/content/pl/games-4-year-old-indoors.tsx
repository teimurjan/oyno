import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-4-year-old-indoors";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Zabawy w domu z czterolatkiem",
  description:
    "Osiem zabaw w domu z czterolatkiem: odwracane reguły, sztuczki z kubkami, restauracja na niby i tor przeszkód w salonie, z badaniami, na których się opierają.",
  body: (
    <>
      <p>
        Każda zabawa poniżej ma jedną regułę, a większość odwraca ją w połowie. Każda pasuje do czterolatka, wymaga
        tylko pokoju i tego, co w nim jest, i trwa około 10 minut. W kilku możesz zostać na krześle.
      </p>

      <h2>Zabawy z regułą, która się odwraca</h2>
      <p>
        W jednym badaniu dzieci w wieku od 4 do 6 lat dotykały palców stóp na słowo „głowa” i głowy na słowo „palce”, a
        to, jak im szło, przewidywało, jak poradzą sobie w zerówce <Cite id="ponitz-2009" />.
      </p>
      <p>
        <GameLink id="heads-mean-toes" /> to to zadanie w formie zabawy, a polecenia możesz wołać z krzesła. Powiedz
        dziecku, że gdy mówisz „głowa”, dotyka stóp, a gdy mówisz „stopy”, dotyka głowy. Wołaj te dwa słowa w
        przypadkowej kolejności, najpierw powoli, potem szybciej. Gdy pójdzie łatwo, dodaj kolana i ramiona jako drugą
        zamienioną parę.
      </p>
      <p>
        <GameLink id="purple-light" /> wymaga korytarza. Stań na jednym końcu. Dziecko idzie do ciebie na „fioletowe
        światło” i zamiera na „czerwone światło”. Gdy do ciebie dojdzie, zamieńcie słowa: teraz czerwone znaczy idź, a
        fioletowe stój. W każdej rundzie wołaj kolory szybciej. Przedszkolaki, które bawiły się w zabawy w kole takie jak
        Red Light, Purple Light, poprawiły samoregulację <Cite id="tominey-mcclelland-2011" />, a drugie badanie w
        grupach programu Head Start wykazało, że te same zabawy poprawiły samoregulację i gotowość szkolną{" "}
        <Cite id="schmitt-2015" />.
      </p>

      <h2>Zabawy na pamięć przy stole</h2>
      <p>
        <GameLink id="cup-shuffle" /> wymaga trzech kubków i zwiniętej skarpetki. Schowaj skarpetkę pod jednym kubkiem,
        gdy dziecko patrzy. Zamień powoli miejscami dwa kubki, potem inną parę, i zapytaj, pod którym jest skarpetka. Co
        rundę dodaj jedną zamianę, a potem oddaj kubki dziecku: ono miesza, a ty zgadujesz.
      </p>
      <p>
        W badaniu randomizowanym cztero- i pięciolatki, które trenowały zadania na pamięć roboczą, poprawiły pamięć
        roboczą i uwagę w zadaniach, których nie trenowały <Cite id="thorell-2009" />.
      </p>
      <p>
        <GameLink id="build-my-plan" /> zamienia budowanie w ćwiczenie pamięci. Najpierw opisz wieżę słowami, na
        przykład trzy kubki, potem książka, a na górze dwa kubki. Dziecko buduje ją z pamięci, a ty trzymasz ręce na
        kolanach. Sprawdźcie razem z planem, a potem dziecko opisuje swoją wieżę, a ty budujesz. Przedszkolaki w zabawie
        klockami, w której budowały według planów i obrazków, poprawiły funkcje wykonawcze <Cite id="schmitt-2018" />.
      </p>

      <h2>Zabawa w udawanie z planem</h2>
      <p>
        W zabawie <GameLink id="pretend-restaurant" /> siadasz jako klient i zamawiasz trzy dania, na przykład zupę,
        pizzę i banana. Dziecko jako kelner powtarza zamówienie, gotuje je z poduszek i kubków i podaje dania w
        kolejności z zamówienia. W następnej rundzie dochodzi napój.
      </p>
      <p>
        Dzieci w wieku od 3 do 5 lat, które przez pięć tygodni bawiły się w fantastyczne udawanie, poprawiły pamięć
        roboczą i samokontrolę <Cite id="thibodeau-2016" />. W innym badaniu złożona zabawa w udawanie przedszkolaków z
        innymi dziećmi przewidywała ich późniejszą samoregulację <Cite id="elias-berk-2002" />.
      </p>

      <h2>Tor przeszkód w salonie</h2>
      <p>
        <GameLink id="obstacle" /> wymaga tu najwięcej przygotowań i trwa 15 minut. Zbudujcie tor, który prowadzi pod
        krzesłem, przez poduszkę i dookoła stołu. Mierz czas dziecka, licząc powoli na głos. Potem dziecko zmienia
        jedną przeszkodę i mierzy czas tobie.
      </p>
      <p>
        Harwardzki poradnik z zabawami dla dzieci od 3 do 5 lat wymienia tory przeszkód i równowagę{" "}
        <Cite id="cdc-guide" />. Przedszkolaki w programie ze skakaniem na jednej nodze, skokami, rzucaniem i łapaniem
        poprawiły funkcje wykonawcze <Cite id="mulvey-2018" />.
      </p>

      <h2>Zmienianie reguł i piosenki</h2>
      <p>
        <GameLink id="guess-my-rule" /> to zabawa w detektywa ze stertą skarpetek. Sortuj skarpetki na dwie kupki według
        tajnej zasady, na przykład w paski i gładkie. Dziecko patrzy i mówi zasadę, gdy tylko ją odkryje. Potem dziecko
        sortuje według swojej tajnej zasady, a ty zgadujesz, i żadna zasada nie może się powtórzyć. Dzieci w wieku od 3
        do 5 lat sprawdzano w takiej samej zmianie: sortowanie kart według koloru, a potem według kształtu{" "}
        <Cite id="zelazo-2006" />.
      </p>
      <p>
        <GameLink id="missing-word-song" /> jest dla czterolatka, który zna wszystkie słowa. Zaśpiewajcie piosenkę, którą
        oboje znacie, na przykład „Panie Janie”. Wybierzcie jedno słowo, na przykład „rano”, i za każdym razem, gdy się
        pojawia, klaszczecie zamiast je śpiewać. W każdej rundzie dodajcie jeszcze jedno ciche słowo. Dzieci w wieku od 4
        do 6 lat w krótkim programie muzycznym ze śpiewem, rytmem i instrumentami poprawiły funkcje wykonawcze{" "}
        <Cite id="bugos-demarie-2017" />.
      </p>

      <h2>Jak wybrać jedną na dziś</h2>
      <p>
        Dopasuj zabawę do energii, która ci została. Jeśli masz jej jeszcze trochę, zbudujcie tor przeszkód albo bawcie
        się w Fioletowe światło na korytarzu. Jeśli siedzisz na kanapie, Głowa to stopy i Zgadnij zasadę działają stamtąd.
        Jeśli zbliża się pora snu, Piosenkę bez słowa można śpiewać na leżąco.
      </p>
      <p>
        Więcej znajdziesz w <Link href="/games/age/preschoolers">zabawach z przedszkolakiem</Link>, a{" "}
        <Link href="/games/skill/self-control">zabawy uczące samokontroli</Link> zbierają w jednym miejscu zabawy w
        zamieranie i w odwrotności.
      </p>
    </>
  ),
};
