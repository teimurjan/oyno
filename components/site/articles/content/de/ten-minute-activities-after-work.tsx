import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../ten-minute-activities-after-work";

const { Link, GameLink } = linksIn("de");

export const article: Article = {
  ...english,
  title: "10-Minuten-Spiele mit Kind nach der Arbeit",
  description:
    "Du bist gerade zur Tür herein und hast noch etwa zehn Minuten Energie. Hier sind kurze Spiele für Babys, Kleinkinder und Kindergartenkinder, die fast keine Vorbereitung brauchen.",
  body: (
    <>
      <p>
        Du kommst herein, stellst die Tasche ab, und dein Kind hängt schon an deinen Beinen. Gleich wartet das
        Abendessen, und viel hast du nicht mehr übrig. Du hast etwa zehn Minuten. Das reicht für ein gutes Spiel.
      </p>
      <p>
        Ich arbeite auch den ganzen Tag, und wenn ich nach Hause komme, greift meine Hand zum Handy, bevor die Jacke aus
        ist. Diese ersten Minuten gehen leicht verloren. In einem Experiment fühlten sich Eltern in einem
        Wissenschaftsmuseum, die ihr Handy viel benutzen sollten, abgelenkter und weniger mit ihren Kindern verbunden als
        Eltern, die es wenig benutzen sollten <Cite id="kushlev-dunn-2019" />. Mit den Spielen unten verbringst du
        dieselben Minuten stattdessen auf dem Boden.
      </p>

      <h2>Warum zehn Minuten reichen</h2>
      <p>
        Auch ein kurzes Spiel ist echte gemeinsame Zeit. Harvards Handout zu Serve and Return beschreibt das Hin und
        Her, auf das es ankommt: bemerken, worauf dein Kind sich konzentriert, es teilen, es benennen, abwechseln und
        warten <Cite id="serve-return" />. Nichts davon braucht eine Stunde.
      </p>
      <p>
        Jedes Spiel hier dauert 10 Minuten oder weniger und hat höchstens drei Schritte. Such dir eins aus, spiel es, bis
        dein Kind das Interesse verliert, und fang dann mit dem Abendessen an.
      </p>

      <h2>Babys: ein Spiel auf dem Boden</h2>
      <p>
        Für ein Baby, das sicher sitzt, probier <GameLink id="ball-back" />. Setz dich ihm gegenüber, die Beine
        gegrätscht wie ein kleines Gehege, und roll einen Ball langsam in seinen Schoß. Streck die Hände aus und warte
        still, bis es ihn zurückschubst. Sag „ich bin dran“, roll ihn wieder hin und lass die Pausen länger werden.
      </p>
      <p>
        Das Warten ist dein Teil der Arbeit. In einer Studie verbesserte ein Coaching, das Eltern von Babys von 6 bis 10
        Monaten zeigte, auf ihr Baby einzugehen, die Aufmerksamkeit und das selbstständige Problemlösen der Babys{" "}
        <Cite id="landry-2006" />.
      </p>
      <p>
        Ab etwa 9 Monaten, wenn Babys anfangen, einem Zeigefinger zu folgen, probier{" "}
        <GameLink id="point-and-name" />. Mit deinem Baby auf dem Schoß zeigst du auf eine Sache im Zimmer und hältst den
        Arm dort, bis seine Augen darauf landen. Benenne sie einmal langsam. Dann folg umgekehrt seinem Blick und benenne
        alles, was es anstarrt. Einjährige blieben länger bei einem Spielzeug aufmerksam, wenn der Elternteil dasselbe
        Spielzeug anschaute und benannte <Cite id="yu-smith-2016" />.
      </p>

      <h2>Kleinkinder: kurze Regeln, schnelle Wechsel</h2>
      <p>
        Diese drei sind für Kinder ab 2, und du kannst alle im Sitzen spielen.
      </p>
      <ul>
        <li>
          <GameLink id="wait-wait-go" />: Setzt euch gegenüber, der Ball in den Händen deines Kindes. Sag langsam
          „warte, warte“, dann „los“, und es rollt ihn zu dir. Mach das Warten jedes Mal etwas länger.
        </li>
        <li>
          <GameLink id="loud-soft-singing">Lautstärkeregler</GameLink>: Singt zusammen ein Lied. Hand hoch heißt laut,
          Hand auf dem Knie heißt flüstern. Dann bestimmt die Hand deines Kindes.
        </li>
        <li>
          <GameLink id="tell-teddy" />: Setz den Teddy ans andere Ende des Zimmers und flüster deinem Kind eine kurze
          Nachricht zu, etwa „Teddy, Essen ist fertig“. Es geht hin und sagt sie dem Teddy, und du antwortest mit
          Teddystimme.
        </li>
      </ul>
      <p>
        Warten und Flüstern sind beides Aufgaben, mit denen Forschende die Selbstkontrolle von Kindern zwischen 22 und 45
        Monaten untersucht haben <Cite id="kochanska-2000" />. Musikspiele zählen auch. In einer Studie sagten
        gemeinsames Singen, Tanzen und Musikspiele zu Hause mit 2 bis 3 Jahren Aufmerksamkeit und Selbstregulation mit 5
        Jahren voraus <Cite id="williams-2015" />.
      </p>

      <h2>Kindergartenkinder: eine Regel zum Brechen</h2>
      <p>
        Kindergartenkinder lieben Regeln, die alles auf den Kopf stellen. Für ein Kind ab vier probier{" "}
        <GameLink id="heads-mean-toes" />. Wenn du „Kopf“ sagst, berührt es die Zehen, und wenn du „Zehen“ sagst, den
        Kopf. Fang langsam an und werdet dann schneller. Du kannst es vom Stuhl aus rufen. Das kommt einer Aufgabe aus
        einer Studie nahe, in der Kinder von 4 bis 6 Jahren genau diesen Tausch machten, und wie gut sie es schafften,
        sagte ihre Ergebnisse in der Vorschulklasse voraus <Cite id="ponitz-2009" />.
      </p>
      <p>
        Wenn dein Kind nach der Kita aufgedreht ist, bremsen <GameLink id="closed-hands" /> das Tempo. Es macht die Augen
        zu und streckt zwei geschlossene Hände aus. Zählt zusammen langsam bis zwanzig, und gehen Augen oder Hände auf,
        fangt ihr von vorn an. Bei zwanzig landet ein kleines Spielzeug in seinen Händen.
      </p>
      <p>
        Wenn es sich bewegen muss, klappen <GameLink id="pillow-island" /> in zehn Minuten. Leg Kissen als Inseln quer
        über den Boden. Dein Kind überquert das Zimmer, ohne das „Wasser“ zu berühren, und jedes Mal, wenn es rüberkommt,
        nimmst du eine Insel weg.
      </p>

      <h2>Ein Plan für die Haustür</h2>
      <ol>
        <li>Lass dein Handy in der Tasche oder am Ladekabel neben der Tür.</li>
        <li>Biete zwei Spiele an und lass dein Kind wählen.</li>
        <li>Setz dich auf den Boden, bevor du dich aufs Sofa setzt. Von dort aus fängt ein Spiel leichter an.</li>
        <li>Spielt, bis dein Kind weiterzieht, und fang dann ohne schlechtes Gewissen mit dem Abendessen an.</li>
      </ol>
      <p>
        Mehr Spiele wie diese findest du bei den <Link href="/games/energy/medium">einfachen Abendspielen</Link>. An
        Abenden, an denen du weniger übrig hast, probier die <Link href="/games/energy/low">Spiele für müde Eltern</Link>.
      </p>
    </>
  ),
};
