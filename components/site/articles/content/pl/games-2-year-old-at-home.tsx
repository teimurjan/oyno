import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-2-year-old-at-home";

const { Link, GameLink } = linksIn("pl");

export const article: Article = {
  ...english,
  title: "Zabawy z dwulatkiem w domu",
  description:
    "Osiem zabaw z dwulatkiem z kubkami, skarpetkami, poduszkami albo zupełnie bez niczego, każda na 5 do 12 minut, i co wykazały badania dwulatków.",
  body: (
    <>
      <p>
        Do zabawy z dwulatkiem nie potrzebujesz pokoju zabaw. Potrzebujesz tego, co już leży na podłodze: kilku
        kubków, sterty skarpetek, poduszek z kanapy. Każda zabawa poniżej pasuje do dwulatka, trwa od 5 do 12 minut i
        ma jedną regułę.
      </p>

      <h2>Co dwulatek potrafi w zabawie</h2>
      <p>
        Badacze bawili się z dwulatkami w prawdziwe zabawy z regułami. W jednym badaniu dwulatki pamiętały, które garnki
        już opróżniły, i nazywały duży kubek „dzidziusiem”, a mały „mamą” <Cite id="hughes-ensor-2005" />. W wieloletnim
        badaniu dzieci w wieku od 22 do 45 miesięcy proszono, żeby czekały na smakołyk, szły powoli po linii, szeptały
        oraz zatrzymywały się i ruszały na sygnał <Cite id="kochanska-2000" />.
      </p>
      <p>
        Harwardzki poradnik z zabawami dla dzieci od 18 do 36 miesięcy wymienia taniec z zamieraniem, piosenki „start i
        stop”, Follow the Leader, wyzwania ruchowe oraz dopasowywanie i zabawne sortowanie <Cite id="cdc-guide" />. Do
        niczego z tego nie trzeba nic kupować.
      </p>

      <h2>Zabawy z kubkami</h2>
      <p>
        <GameLink id="baby-cup-mummy-cup">Dzidziuś i mama</GameLink> to zabawa z kubkami z tego badania. Pokaż duży i
        mały kubek i umówcie się, że duży nazywa się „dzidziuś”, a mały „mama”. Pokazuj po jednym kubku, a dziecko mówi
        jego śmieszną nazwę. Przyspieszaj, a gdy się pomyli, zatrzymaj kubki i daj mu spróbować jeszcze raz.
      </p>
      <p>
        <GameLink id="cup-trio-hide" /> chowa zabawkę pod jednym z trzech kubków, gdy dziecko patrzy. Dwulatkowi schowaj
        dwie zabawki i zobacz, czy pamięta, który kubek jest już pusty, trochę jak z garnkami w badaniu.
      </p>
      <p>
        <GameLink id="hand-on-the-cup" /> to zabawa w czekanie. Przykryj zabawkę odwróconym kubkiem i połóż na nim
        płasko dłoń dziecka. Powiedz „czekaj, czekaj, czekaj”, a potem „już”, a dziecko podnosi kubek dopiero na „już”.
        Z każdą rundą trochę wydłużaj czekanie, a potem niech dziecko pilnuje kubka, a ty czekaj na jego „już”.
      </p>

      <h2>Zabawy ze skarpetkami</h2>
      <p>
        Sterta prania to gotowa zabawa. W zabawie <GameLink id="two-sock-piles" /> wysypujesz na podłogę stertę czystych
        skarpetek i zaczynasz dwie kupki: ciemne tutaj, jasne tam. Podawaj po jednej skarpetce i pozwól dziecku wybrać
        kupkę, podpowiadając tylko, gdy utknie. Gdy sterta zniknie, pomieszaj wszystko i zacznijcie od nowa, ale teraz
        duże tutaj, a małe tam. Druga runda zmienia regułę.
      </p>
      <p>
        Więcej znajdziesz w <Link href="/games/tag/socks">zabawach ze skarpetkami</Link>.
      </p>

      <h2>Zabawy z poduszkami</h2>
      <p>
        W zabawie <GameLink id="cushion-lava" /> rozrzucasz poduszki po podłodze i mówisz, że podłoga to lawa, więc
        stopy zostają na poduszkach. Skaczcie razem z poduszki na poduszkę aż do kanapy, trzymając się za ręce przy
        dużych przerwach. Powiedz „lawa rośnie” i co rundę zabieraj jedną poduszkę.
      </p>
      <p>
        <GameLink id="rescue-teddy" /> dodaje plan. Posadź misia wysoko na kanapie i powiedz, że utknął. Ułóżcie plan
        ratunku w dwóch krokach, na przykład „przez poduszkę, potem w górę”, powiedzcie razem oba kroki, a potem ramię w
        ramię czołgajcie się i wspinajcie według planu. Następnym razem posadź misia w nowym miejscu i niech dziecko
        powie ci oba kroki, zanim ktokolwiek się ruszy.
      </p>
      <p>
        Pomagaj tylko tyle, ile dziecko potrzebuje. W jednym badaniu to, jak dobrze rodzice dawali dzieciom w wieku od 2
        do 3 lat tyle pomocy przy układance, ile trzeba, i pytali, co dalej, przewidywało funkcje wykonawcze ich dzieci w
        wieku od 3 do 4 lat <Cite id="hammond-2012" />. Więcej zabaw z poduszkami znajdziesz w{" "}
        <Link href="/games/tag/cushions">zabawach z poduszkami</Link>.
      </p>

      <h2>Zabawy zupełnie bez niczego</h2>
      <p>
        <GameLink id="jump-jump-freeze" /> to coś na wiercenie. Złapcie się za ręce i skaczcie razem, licząc „raz, dwa,
        trzy”, a potem powiedz „stój” i zamrzyjcie. Z każdą rundą liczcie trochę dalej. Potem niech dziecko liczy skoki,
        a ty zamieraj dokładnie wtedy, kiedy powie.
      </p>
      <p>
        <GameLink id="three-two-one-hug" /> wymaga tylko twoich ramion. Rozłóż je szeroko i odliczaj powoli „trzy, dwa,
        jeden”, a dziecko czeka krok od ciebie. Powiedz „tulimy!”, a dziecko wpada w twoje objęcia, a potem wraca na
        swoje miejsce. Licz wolniej albo zawieś głos przed „jeden”.
      </p>
      <p>
        Zabawy w zamieranie to kuzynki tańca z zamieraniem. W jednym badaniu wspólne śpiewanie, taniec i zabawy muzyczne
        w domu w wieku od 2 do 3 lat przewidywały uwagę i samoregulację w wieku 5 lat <Cite id="williams-2015" />. Więcej
        znajdziesz w <Link href="/games/tag/one-room">zabawach w jednym pokoju</Link>.
      </p>

      <h2>Kiedy wszystko się sypie</h2>
      <p>
        Te umiejętności rosną przez całe lata przedszkolne. Zadania na pamięć roboczą, samokontrolę i przełączanie się
        między regułami pokazują różnice między kolejnymi etapami wieku od 18 miesięcy do pięciu i pół roku{" "}
        <Cite id="garon-2014" />. Dziecko, które łapie kubek przed „już”, ma po prostu dwa lata.
      </p>
      <p>
        Kończ, póki jest fajnie, a jutro spróbujcie innej zabawy. Pełna lista jest w{" "}
        <Link href="/games/age/toddlers">zabawach z maluchem</Link>. Jeśli martwisz się rozwojem swojego dziecka,
        porozmawiaj z pediatrą.
      </p>
    </>
  ),
};
