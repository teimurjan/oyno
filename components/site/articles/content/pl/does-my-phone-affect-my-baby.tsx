import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../does-my-phone-affect-my-baby";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Czy mój telefon wpływa na moje niemowlę?",
  description:
    "Co pokazują eksperymenty still-face, co badania z codziennego życia tylko łączą i jakie drobne nawyki podtrzymują wymianę z twoim maluszkiem.",
  body: (
    <>
      <p>
        Skoro zadajesz to pytanie, już zwracasz uwagę. Telefon to też twój zegarek, sposób na wiadomość do pediatry i
        towarzysz nocnego karmienia. Nigdzie się nie wybiera.
      </p>
      <p>
        Badania są spokojniejsze, niż może się wydawać. Nie wskazują na szybkie zerknięcie. W jednym badaniu rodziców
        dzieci do 5 lat szybkie zerknięcie na telefon nie robiło różnicy w tym, czy rodzic odpowiadał dziecku{" "}
        <Cite id="vanden-abeele-2020" />. Wskazują na długie chwile pełnego pochłonięcia. Oto, co pokazują badania i jak
        bardzo są pewne.
      </p>

      <h2>Co pokazują eksperymenty</h2>
      <p>
        W eksperymencie badacze celowo zmieniają jedną rzecz i patrzą, co z tego wynika. Dzięki temu mogą powiedzieć więcej
        o przyczynie.
      </p>
      <p>
        Klasykiem jest eksperyment still-face (nieruchomej twarzy). Mamy niemowląt w wieku od 1 do 4 miesięcy zastygały z
        nieruchomą, niereagującą twarzą. W ciągu kilku minut niemowlęta stawały się nieufne i wycofywały się{" "}
        <Cite id="tronick-1978" />. Niemowlęta zauważają, gdy wymiana się urywa.
      </p>
      <p>
        Nowsza wersja użyła telefonu. Gdy mamy w środku zadania still-face zwracały się do telefonów, niemowlęta w wieku od
        7 do 24 miesięcy się denerwowały <Cite id="myruski-2018" />.
      </p>
      <p>
        Maluchy próbują cię odzyskać. Mamy dzieci w wieku od 20 do 22 miesięcy przerywały zabawę na dwie minuty, żeby
        wypełnić kwestionariusz na telefonie albo na papierze. Obie grupy reagowały na dziecko słabiej, a ich maluchy
        częściej domagały się uwagi <Cite id="konrad-2021" />. Papier działał tak samo jak telefon. Liczyła się przerwa w
        uwadze, a nie ekran.
      </p>
      <p>
        Przerwy mogą też kosztować naukę. Mamy uczyły swoje dwulatki dwóch nowych słów. Dzieci nauczyły się słowa uczonego
        bez przerwy, ale nie tego przerwanego telefonem <Cite id="reed-2017" />.
      </p>

      <h2>Co badania z codziennego życia tylko łączą</h2>
      <p>
        Inne badania obserwują rodziny albo pytają rodziców o ich dni. Mogą znaleźć rzeczy, które idą w parze. Nie mogą
        powiedzieć, co spowodowało co.
      </p>
      <ul>
        <li>
          W badaniu still-face z telefonem niemowlęta, których mamy częściej używały urządzeń w domu, słabiej dochodziły do
          siebie <Cite id="myruski-2018" />. Ta część to związek.
        </li>
        <li>
          Rodzice, którzy zgłaszali więcej przerw wywołanych przez telefon w czasie z rodziną, zgłaszali też więcej
          problemów z zachowaniem dziecka <Cite id="mcdaniel-radesky-2018" />.
        </li>
        <li>
          Gdy rodziny z dzieckiem w wieku od 0 do 5 lat śledzono przez sześć miesięcy, związek działał w obie strony.
          Trudniejsze zachowanie dziecka przewidywało więcej zakłóceń przez technologię za pośrednictwem stresu
          rodzicielskiego, a te zakłócenia często przewidywały później więcej zachowań eksternalizacyjnych{" "}
          <Cite id="mcdaniel-radesky-2018b" />.
        </li>
      </ul>
      <p>
        Zestresowany rodzic, który sięga po telefon, nie jest więc w tej historii czarnym charakterem. W tym badaniu stres
        i korzystanie z telefonu szły w parze.
      </p>

      <h2>Dlaczego zerknięcie to nie problem</h2>
      <p>
        Badanie z placów zabaw wykazało, że szybkie zerknięcie nie robiło różnicy, a głębokie pochłonięcie innymi
        zajęciami kosztowało mniej więcej tyle samo co telefon <Cite id="vanden-abeele-2020" />. Telefon to jedna z wielu
        rzeczy, które mogą cię odciągnąć.
      </p>
      <p>
        Przerwy są też częścią zabawy. Harwardzki materiał o „podaniu i odbiciu” dla niemowląt obejmuje działanie na
        zmianę, czekanie oraz ćwiczenie zakończeń i początków, a przykładem jest a kuku <Cite id="serve-return" />. Pauza,
        po której wraca twoja twarz, to właśnie a kuku.
      </p>

      <h2>Co pomoże dziś wieczorem</h2>
      <p>
        Dobre wieści są też po drugiej stronie. Gdy rodziców niemowląt w wieku od 6 do 10 miesięcy szkolono z
        responsywnego rodzicielstwa, uwaga ich maluszków i samodzielne rozwiązywanie problemów się poprawiły{" "}
        <Cite id="landry-2006" />. Gdy rodziców dzieci w wieku od 6 do 21 miesięcy szkolono, jak podążać za dzieckiem,
        odpowiadać mu i cieszyć się nim, ich dzieci miały lepszą elastyczność poznawczą w wieku 4 lat{" "}
        <Cite id="lind-2017" />.
      </p>
      <p>
        Amerykańska Akademia Pediatrii radzi, żeby czas zabawy rodzica z dzieckiem był wolny od ekranów, i to zarówno dla
        rodziców, jak i dla dzieci, a na ten czas sugeruje włączać tryb „Nie przeszkadzać” <Cite id="aap-media-2016" />.
        Na początek wystarczy jedna krótka zabawa:
      </p>
      <ul>
        <li>
          <GameLink id="babble-back" />: odpowiadaj na każdy dźwięk maluszka, jakby to było zdanie, a potem czekaj na jego
          kolej.
        </li>
        <li>
          <GameLink id="follow-their-gaze" />: patrz na to, na co patrzy maluszek, i nazwij to kilkoma ciepłymi słowami.
        </li>
        <li>
          <GameLink id="hands-peekaboo" />: połóż się na plecach z maluszkiem na piersi i schowaj się za dłońmi na
          powolne „raz, dwa, trzy”.
        </li>
        <li>
          <GameLink id="copy-cat-faces" />: powtarzaj minę albo dźwięk maluszka chwilę po nim.
        </li>
      </ul>
      <p>
        Na marudny wieczór <GameLink id="baby-mind-reader" /> prosi cię, żeby na głos mówić, czego maluszek chyba chce, a
        potem zrobić pauzę na jego odpowiedź. W zabawie <GameLink id="house-sounds" /> całą robotę wykonują czajnik i
        drzwi. Więcej znajdziesz w <Link href="/games/age/babies">zabawach z niemowlakiem</Link>, a poradnik{" "}
        <Link href="/guides/phone-down-with-your-kid">Odłóż telefon przy dziecku</Link> ma kroki dotyczące samego
        telefonu.
      </p>
      <p>Jeśli martwisz się rozwojem swojego maluszka, porozmawiaj z pediatrą.</p>
    </>
  ),
};
