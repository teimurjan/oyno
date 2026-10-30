import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../ten-minute-activities-after-work";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "10-minutowe zabawy z dzieckiem po pracy",
  description:
    "Właśnie wchodzisz do domu i zostało ci energii na jakieś dziesięć minut. Oto krótkie zabawy dla niemowląt, maluchów i przedszkolaków, prawie bez przygotowań.",
  body: (
    <>
      <p>
        Wchodzisz, odkładasz torbę, a dziecko już wisi ci na nogach. Za chwilę trzeba robić kolację, a sił zostało
        niewiele. Masz jakieś dziesięć minut. To wystarczy na jedną dobrą zabawę.
      </p>
      <p>
        Ja też pracuję cały dzień, a gdy wracam do domu, ręka sięga po telefon, zanim zdejmę kurtkę. Te pierwsze minuty
        łatwo stracić. W jednym eksperymencie rodzice w muzeum nauki, których poproszono, by dużo korzystali z telefonów,
        czuli się bardziej rozkojarzeni i mniej związani z dziećmi niż rodzice poproszeni, by korzystali z nich mało{" "}
        <Cite id="kushlev-dunn-2019" />. Zabawy poniżej to sposób, żeby te same minuty spędzić zamiast tego na podłodze.
      </p>

      <h2>Dlaczego dziesięć minut wystarczy</h2>
      <p>
        Krótka zabawa to wciąż prawdziwy wspólny czas. Harwardzki materiał o „podaniu i odbiciu” opisuje wymianę, która ma
        znaczenie: zauważ, na czym skupia się dziecko, skup się na tym razem z nim, nazwij to, działajcie na zmianę i
        czekaj <Cite id="serve-return" />. Nic z tego nie wymaga godziny.
      </p>
      <p>
        Każda zabawa tutaj trwa 10 minut lub krócej i ma najwyżej trzy kroki. Wybierz jedną, bawcie się, aż dziecko straci
        zainteresowanie, a potem zabierz się za kolację.
      </p>

      <h2>Niemowlęta: jedna zabawa na podłodze</h2>
      <p>
        Dla maluszka, który pewnie siedzi, spróbuj zabawy <GameLink id="ball-back" />. Usiądź naprzeciw niego, rozstaw
        szeroko nogi jak zagródkę i powoli potocz mu piłkę na kolana. Wyciągnij ręce i czekaj w ciszy, aż ją odepchnie.
        Powiedz „teraz ja”, potocz ją znowu i z czasem czekaj coraz dłużej.
      </p>
      <p>
        Czekanie to twoja część pracy. W badaniu randomizowanym szkolenie rodziców niemowląt w wieku od 6 do 10 miesięcy z
        reagowania na dziecko poprawiło uwagę maluszków i ich samodzielne rozwiązywanie problemów{" "}
        <Cite id="landry-2006" />.
      </p>
      <p>
        Od około 9 miesięcy, gdy maluszki zaczynają patrzeć tam, gdzie pokazujesz, spróbuj zabawy{" "}
        <GameLink id="point-and-name" />. Z maluszkiem na kolanach wskaż jedną rzecz w drugim końcu pokoju i trzymaj rękę,
        aż jego wzrok się na niej zatrzyma. Nazwij ją raz, powoli. Potem to ty podążaj za jego spojrzeniem i nazywaj
        wszystko, w co się wpatruje. Roczne dzieci dłużej skupiały uwagę na zabawce, gdy rodzic patrzył na tę samą zabawkę
        i ją nazywał <Cite id="yu-smith-2016" />.
      </p>

      <h2>Maluchy: krótkie reguły, szybkie kolejki</h2>
      <p>
        Te trzy zabawy są dla dzieci od 2 lat i we wszystkie możesz się bawić na siedząco.
      </p>
      <ul>
        <li>
          <GameLink id="wait-wait-go" />: usiądźcie naprzeciw siebie, a piłka niech będzie w rękach dziecka. Mów powoli
          „czekaj, czekaj”, a potem „już”, i wtedy dziecko toczy ją do ciebie. Z każdą rundą trochę wydłużaj czekanie.
        </li>
        <li>
          <GameLink id="loud-soft-singing">Głośniej, ciszej</GameLink>: śpiewajcie razem piosenkę. Ręka wysoko znaczy
          głośno, ręka na kolanie znaczy szept. Potem decyduje ręka dziecka.
        </li>
        <li>
          <GameLink id="tell-teddy" />: posadź misia po drugiej stronie pokoju i szepnij dziecku krótką wiadomość, na
          przykład „misiu, kolacja”. Dziecko idzie i przekazuje ją misiowi, a ty odpowiadasz głosem misia.
        </li>
      </ul>
      <p>
        Czekanie i szeptanie to zadania, których badacze używali do badania samokontroli u dzieci w wieku od 22 do 45
        miesięcy <Cite id="kochanska-2000" />. Zabawy muzyczne też się liczą. W jednym badaniu wspólne śpiewanie, taniec i
        zabawy muzyczne w domu w wieku od 2 do 3 lat przewidywały uwagę i samoregulację w wieku 5 lat{" "}
        <Cite id="williams-2015" />.
      </p>

      <h2>Przedszkolaki: reguła do złamania</h2>
      <p>
        Przedszkolaki uwielbiają reguły, które wywracają wszystko do góry nogami. Dziecku od czterech lat zaproponuj
        zabawę <GameLink id="heads-mean-toes" />. Gdy mówisz „głowa”, dotyka stóp, a gdy mówisz „stopy”, dotyka głowy.
        Zacznij powoli, a potem przyspieszaj. Możesz wołać z krzesła. To zadanie bliskie temu z badania, w którym dzieci w
        wieku od 4 do 6 lat robiły tę samą zamianę, a to, jak im szło, przewidywało ich wyniki w zerówce{" "}
        <Cite id="ponitz-2009" />.
      </p>
      <p>
        Jeśli dziecko jest nakręcone po przedszkolu, <GameLink id="closed-hands" /> uspokaja tempo. Dziecko zamyka oczy i
        wyciąga przed siebie dwie zamknięte dłonie. Liczcie razem powoli do dwudziestu, a jeśli oczy albo dłonie się
        otworzą, liczycie od nowa. Na dwadzieścia w dłoniach ląduje mała zabawka.
      </p>
      <p>
        Jeśli dziecko musi się poruszać, <GameLink id="pillow-island" /> mieści się w dziesięciu minutach. Rozłóż poduszki
        na podłodze jak wyspy. Dziecko przechodzi przez pokój, nie dotykając „wody”, a za każdym razem, gdy mu się uda,
        zabierasz jedną wyspę.
      </p>

      <h2>Plan na wejście do domu</h2>
      <ol>
        <li>Zostaw telefon w torbie albo na ładowarce przy drzwiach.</li>
        <li>Zaproponuj dwie zabawy i pozwól dziecku wybrać.</li>
        <li>Usiądź na podłodze, zanim usiądziesz na kanapie. Stamtąd łatwiej zacząć zabawę.</li>
        <li>Bawcie się, aż dziecko się oddali, a potem zabierz się za kolację bez poczucia winy.</li>
      </ol>
      <p>
        Więcej takich zabaw znajdziesz w <Link href="/games/energy/medium">łatwych zabawach na zwykły wieczór</Link>. W
        wieczory, gdy masz mniej sił, spróbuj <Link href="/games/energy/low">leniwych zabaw</Link>.
      </p>
    </>
  ),
};
