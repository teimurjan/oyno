import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-grandparents";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Proste zabawy dla dziadków z wnukami",
  description:
    "Spokojne zabawy, w które babcia albo dziadek pobawi się z krzesła albo z maluszkiem na kolanach, bez żadnych zakupów. Propozycje dla niemowląt, maluchów i przedszkolaków.",
  body: (
    <>
      <p>
        Ta strona jest dla dwóch czytelników. Jeśli jesteś rodzicem, to coś do wysłania twojej mamie albo tacie przed
        następną wizytą. Jeśli jesteś babcią albo dziadkiem, to krótka lista zabaw na siedząco, bez kupowania i bez
        przygotowań.
      </p>
      <p>
        Każda zabawa tutaj trwa od 5 do 10 minut. Większość wymaga tylko kolan, krzesła i twojego głosu.
      </p>

      <h2>Dla rodzica: co przekazać</h2>
      <p>
        Wybierz dwie zabawy, które pasują do wieku dziecka, i wyślij linki wcześniej. Każda zabawa ma najwyżej trzy
        krótkie kroki, więc dobrze czyta się ją na telefonie. Dwie wystarczą na jedną wizytę.
      </p>
      <p>
        Powiedz dziadkom o jednej rzeczy, którą dziecko teraz uwielbia, na przykład o piosence, zwierzątku albo żarcie.
        Każda zabawa poniżej może ją wchłonąć.
      </p>

      <h2>Dla babci i dziadka: trzy nawyki</h2>
      <p>
        Center on the Developing Child Uniwersytetu Harvarda nazywa wymianę w zabawie „podaniem i odbiciem”. Zauważ, na
        czym skupia się dziecko, i skup się na tym razem z nim. Odpowiedz na to. Nazwij to, co widzi lub czuje. Potem
        działajcie na zmianę i czekaj <Cite id="serve-return" />. Żaden z tych kroków nie wymaga szybkich nóg ani
        zabawki. Jeśli podłoga męczy kolana albo plecy, każda zabawa poniżej działa z krzesła albo z kanapy.
      </p>
      <ul>
        <li>
          <strong>Czekaj dłużej, niż wydaje się naturalne.</strong> Daj małemu dziecku kilka sekund na odpowiedź.
        </li>
        <li>
          <strong>Pozwól mu prowadzić.</strong> Jeśli zmieni zabawę, baw się w jego wersję.
        </li>
        <li>
          <strong>Kończ, póki jest fajnie.</strong> Ta sama zabawa przy następnej wizycie to dobra rzecz.
        </li>
      </ul>

      <h2>Z maluszkiem na kolanach</h2>
      <p>
        Amerykańska Akademia Pediatrii opisuje, jak zabawa niemowlęcia wyrasta z uśmiechów społecznych w wymianę „podanie i
        odbicie”, a kuku i „kosi, kosi łapci” <Cite id="aap-play" />. Obie zabawy poniżej mieszczą się na kolanach.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> działa od 6 miesięcy. Zapytaj „Gdzie jest nosek?” i odczekaj spokojny oddech,
        patrząc maluszkowi w twarz. Delikatnie dotknij jego noska i powiedz „nosek”, a potem tak samo z uszkami,
        paluszkami i brzuszkiem. Po kilku rundach zapytaj „Gdzie mój nos?” i przyłóż jego rączkę do swojego. W badaniu
        randomizowanym szkolenie rodziców niemowląt w wieku od 6 do 10 miesięcy z takiego reagowania poprawiło uwagę
        maluszków i ich samodzielne rozwiązywanie problemów <Cite id="landry-2006" />.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> działa od 2 miesięcy, z bosymi stópkami na twoich kolanach. Mów powoli
        „Sroczka kaszkę warzyła”, dotykając po kolei paluszków u stópki. Przy ostatnim paluszku zatrzymaj się i przytrzymaj
        stópkę nieruchomo na długie „raz, dwa, trzy”. Potem na „frr, poleciała!” przebiegnij palcami do brzuszka i zacznij
        na drugiej stópce.
      </p>

      <h2>Z maluchem</h2>
      <p>
        <GameLink id="you-say-three" /> to podskoki na kolanie z przerwą. Podrzucaj wnuka na kolanie i licz „raz, dwa”, a
        potem zatrzymaj się z rękami w górze. Czekaj z uniesionymi brwiami, aż powie „trzy”, a wtedy daj największy
        podskok ze wszystkich. Niemowlęta w wieku od 9 do 18 miesięcy, które bawiły się z dorosłym w zabawy na zmianę,
        dawały znać, gdy dorosły opuścił swoją kolej <Cite id="ross-lollis-1987" />. Tutaj opuszczasz ją celowo.
      </p>
      <p>
        <GameLink id="face-copy-feelings" /> wymaga malucha na kolanach, nosek w nosek. Zrób wielką minę, nazwij ją, na
        przykład „zdziwiona mina”, i trzymaj, aż dziecko ją powtórzy. Spróbuj wesołej, śpiącej, złej i głupiej. Potem się
        zamieńcie: dziecko robi minę, ty ją powtarzasz, i razem zgadujecie, co to za uczucie.
      </p>

      <h2>Z przedszkolakiem</h2>
      <p>
        <GameLink id="grandma-footsteps" /> pasuje jak ulał: po angielsku ta zabawa nazywa się Grandma’s Footsteps, czyli
        „kroki babci”. Usiądź na krześle tyłem do wnuka, który zaczyna pod przeciwległą ścianą. Dziecko skrada się do
        ciebie, a za każdym razem, gdy się odwrócisz, musi stać jak posąg. Kogo przyłapiesz na ruchu, wraca pod ścianę, a
        kto klepnie cię w ramię, wygrywa. Przedszkolaki, które bawiły się w zabawy w kole, takie jak zamieranie z
        zamienionymi regułami, poprawiły samoregulację <Cite id="tominey-mcclelland-2011" />.
      </p>
      <p>
        <GameLink id="story-stones" /> wymaga tylko zmęczonego głosu. Zaczynajcie każdą bajkę od „Był sobie malutki smok” i
        dokładajcie na zmianę dokładnie po trzy słowa. Liczcie słowa na palcach, żeby nikt nie przemycił czwartego. Dzieci
        w wieku od 3 do 5 lat, które przez pięć tygodni bawiły się w fantastyczne udawanie, poprawiły pamięć roboczą i
        samokontrolę <Cite id="thibodeau-2016" />.
      </p>
      <p>
        <GameLink id="i-spy-switch" /> to „Widzę coś, czego ty nie widzisz” z haczykiem. Powiedz „widzę coś czerwonego”, a
        wnuk szuka tej rzeczy wzrokiem z miejsca, w którym siedzicie. Po trzech kolorach przejdź na kształty, a potem na to,
        do czego rzeczy służą. Dzieci w wieku od 3 do 5 lat sprawdzano w takiej samej zmianie: sortowanie według koloru, a
        potem według kształtu <Cite id="zelazo-2006" />.
      </p>
      <p>
        Więcej zabaw, w które można się bawić z krzesła, znajdziesz w{" "}
        <Link href="/games/tag/sitting">zabawach na siedząco</Link>,{" "}
        <Link href="/games/tag/on-your-lap">zabawach na kolanach</Link> i w{" "}
        <Link href="/games/energy/low">leniwych zabawach</Link>.
      </p>
    </>
  ),
};
