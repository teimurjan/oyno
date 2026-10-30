import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-no-toys";

const { Link, GameLink } = linksIn("de");

export const article: Article = {
  ...english,
  title: "Spiele ohne Spielzeug für Kinder von 0 bis 5",
  description:
    "Kein Spielzeug in Reichweite oder keine Lust, es hervorzukramen? Diese Spiele für Kinder von 0 bis 5 brauchen nur deine Hände, deine Stimme und das Zimmer, in dem ihr seid.",
  body: (
    <>
      <p>
        Das Spielzeug liegt im anderen Zimmer, ist weggeräumt oder unter dem Sofa verstreut. Du brauchst es nicht.
        Viele der ältesten Spiele für kleine Kinder nutzen nichts außer einem Gesicht, zwei Händen und einer Stimme.
      </p>
      <p>
        Die American Academy of Pediatrics beschreibt, wie das Spielen vom sozialen Lächeln zu Serve and Return,
        Kuckuck und „Backe, backe Kuchen“ wächst <Cite id="aap-play" />. Harvards Handouts Brain-Building Through Play
        nennen Pat-a-Cake („Backe, backe Kuchen“) und Baby See Baby Do für Babys, Follow the Leader für Kleinkinder
        und Simon Says („Simon sagt“) und What Time Is It Mr Fox für ältere Kinder <Cite id="brain-play" />. Keins
        davon braucht ein Spielzeug.
      </p>

      <h2>Babys: dein Gesicht ist das Spielzeug</h2>
      <p>
        Probier ab etwa 6 Monaten <GameLink id="copy-cat-faces" />. Mach Gesicht oder Laut deines Babys einen
        Wimpernschlag später nach: Zunge rausstrecken, Quietschen, Stirnrunzeln. Mach das ein paar Mal, dann zieh
        langsam selbst eine neue Grimasse und halt sie. Warte mit dieser Grimasse, bis dein Baby versucht, sie
        nachzumachen.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> geht mit deinem Baby auf dem Schoß. Frag „Wo ist deine Nase?“ und warte
        einen langen Atemzug, während du ihm ins Gesicht schaust. Tipp sanft auf seine Nase und sag „Nase“, dann
        Ohren, Zehen und Bauch.
      </p>
      <p>
        Beide Spiele folgen deinem Baby. In einer Studie verbesserte ein Coaching, das Eltern von 6 bis 21 Monate
        alten Kindern anleitete, dem Kind zu folgen, darauf einzugehen und Freude zu zeigen, die kognitive
        Flexibilität der Kinder mit 4 Jahren <Cite id="lind-2017" />.
      </p>

      <h2>Kleinkinder: dein Körper ist das Spielbrett</h2>
      <p>
        <GameLink id="nose-knees-toes" /> ist für ein Kleinkind ab 2, das weiß, wo seine Nase ist. Frag „Wo ist deine
        Nase?“ und fass dir an deine, und dein Kind fasst sich an seine. Dann Knie, Zehen, Ohren. Ist es schnell
        genug, sag „Fass deine Zehen an“, während du deine Nase anfasst, und es muss deinen Worten folgen, nicht
        deiner Hand.
      </p>
      <p>
        <GameLink id="rug-tightrope-walk" /> braucht nur die Kante eines Teppichs oder eine Fuge im Dielenboden. Das ist
        ein Seil, das bis zu dir aufs Sofa führt. Dein Kind balanciert Schritt für Schritt langsam mit ausgestreckten
        Armen darüber, während du jeden Schritt leise kommentierst. Ein Fuß neben dem Seil heißt zurück zum Start, und
        wer bei dir ankommt, kriegt eine Sofa-Umarmung. Du musst kein einziges Mal aufstehen.
      </p>
      <p>
        Das ist nah an Aufgaben aus einer Langzeitstudie, in der Kinder von 22 bis 45 Monaten langsam eine Linie
        entlanggehen, flüstern und auf ein Signal anhalten und loslegen sollten <Cite id="kochanska-2000" />.
      </p>

      <h2>Kindergartenkinder: Spiele aus Worten</h2>
      <p>
        Ab 3 kann ein Spiel aus nichts als Regeln und Reden bestehen. <GameLink id="simon-says" /> ist der Klassiker.
        Ruf Bewegungen aus, und dein Kind macht nur die, die mit „Simon sagt“ anfangen. Misch einfache Befehle darunter
        und erwisch es, wenn es sich bewegt. Nach dreimal Erwischen ist dein Kind Simon. Simon sagt war eine der
        Aufgaben in einer Studie mit Kindern von 2 bis 6 Jahren <Cite id="carlson-2005" />.
      </p>
      <p>
        <GameLink id="wolf-time" /> ist das englische What Time Is It Mr Wolf für den Flur. Du stehst am anderen Ende
        mit dem Gesicht zur Wand. Dein Kind fragt „Wie spät ist es, Herr Wolf?“, und du antwortest mit einer Zahl bis
        zehn, und es macht genau so viele Schritte auf dich zu und zählt laut mit. Ist es nah dran, antworte
        „Essenszeit“ und jag es zurück.
      </p>
      <p>
        <GameLink id="whisper-telephone" /> geht, wenn ein Geschwisterkind schläft. Flüster deinem Kind eine kurze
        Nachricht ins Ohr, etwa „Die Katze hat eine Socke gefressen“, und es flüstert sie dir Wort für Wort zurück.
        Hängt jede Runde ein Wort an.
      </p>

      <h2>Wenn ihr unterwegs seid</h2>
      <p>
        Spiele ohne Spielzeug zeigen, was sie können, im Wartezimmer, in der Schlange oder auf einer langen Fahrt. Bei{" "}
        <GameLink id="zoo-list">Im Zoo sah ich ein Zebra</GameLink> sagst du „Ich war im Zoo und hab ein Zebra
        gesehen“. Dein Kind wiederholt die ganze Liste und hängt ein Tier an, dann machst du dasselbe, bis jemand ein
        Tier vergisst. Dann startet eine neue Reise an einen neuen Ort. Strand, Bauernhof und Supermarkt gehen alle,
        und dein Kind darf aussuchen, wohin es geht.
      </p>
      <p>
        Mehr für unterwegs findest du unter <Link href="/games/tag/in-the-car">Spiele im Auto</Link>.
      </p>

      <h2>So fängst du heute Abend an</h2>
      <ul>
        <li>Such ein Spiel für das Alter deines Kindes aus und sag die Regel in einem Satz.</li>
        <li>Bleib bei einem Baby bei Gesichtern und Lauten. Mach nach, was es tut, dann warte auf seine Antwort.</li>
        <li>Spiel die erste Runde langsam, damit es sie gewinnen kann.</li>
        <li>Gib ihm die Führung. Die meisten dieser Spiele enden mit einem Tausch, sodass dein Kind mal bestimmen darf.</li>
      </ul>
      <p>
        Jedes Spiel unter <Link href="/games/tag/nothing-to-grab">Spiele ohne Spielzeug</Link> geht mit leeren Händen.
        Du kannst auch nach Alter stöbern, zum Beispiel unter{" "}
        <Link href="/games/age/toddlers">Spiele für Kleinkinder</Link>.
      </p>
    </>
  ),
};
