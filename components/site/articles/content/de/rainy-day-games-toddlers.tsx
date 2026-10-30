import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../rainy-day-games-toddlers";

const { Link, GameLink } = linksIn("de");

export const article: Article = {
  ...english,
  title: "Spiele für Kleinkinder an Regentagen",
  description:
    "Acht Bewegungsspiele für drinnen, wenn dein Kleinkind nicht rauskann: Stuhltunnel, Rennen im Flur, Kissen-Lava und Stopp-Spiele, jeweils mit dem Mindestalter.",
  body: (
    <>
      <p>
        Ein Tag drinnen mit einem Kleinkind ist lang. Diese Spiele sind für die Stunden, in denen dein Kind noch
        Energie loswerden muss und Rausgehen nicht geht. Sie nutzen den Flur, die Sofakissen und die Küchenstühle,
        und die meisten haben ein Signal, das das Rennen kurz stoppt.
      </p>
      <p>
        Bei jedem Spiel steht, ab welchem Alter es passt. Manche gehen ab dem ersten Geburtstag, manche ab 2. Du
        brauchst nicht alle acht an einem Tag. Such dir zwei aus, spiel jedes zehn Minuten und heb dir den Rest für
        den nächsten Tag drinnen auf.
      </p>

      <h2>Bau einen Tunnel</h2>
      <p>
        <GameLink id="chair-tunnels" /> geht ab 1. Stell zwei oder drei Küchenstühle als Tunnel in eine Reihe, mit
        einem Kissen am Ende als Ziel. Krabbel zuerst langsam durch, damit dein Kind den Weg sieht, dann krabbel ihm
        hinterher. Leg nach ein paar Runden ein Kissen zum Drüberklettern dazu.
      </p>
      <p>
        Harvards Handout Brain-Building Through Play für 12 Monate bis 3 Jahre nennt auch das Erkunden über Kissen
        auf dem Boden <Cite id="brain-play" />. Hält dein Kind im Tunnel an, frag „Was kommt jetzt?“, statt zu zeigen.
        So bleibt der Plan bei ihm. In einer Studie sagte die Unterstützung der Eltern für die eigenen Versuche ihres
        Kindes mit 12 bis 15 Monaten die exekutiven Funktionen mit 18 und 26 Monaten voraus{" "}
        <Cite id="bernier-2010" />. Mehr findest du unter <Link href="/games/tag/chairs">Spiele mit Stühlen</Link>.
      </p>

      <h2>Nutz den Flur</h2>
      <p>
        <GameLink id="silly-walk-leader" /> geht ab 1. Geh auf eine alberne Art den Flur entlang, etwa wie ein
        wackliger Pinguin, und dein Kind macht es hinter dir nach. Wechsel alle paar Schritte die Gangart. Dreh dich
        am Ende um und sag „du bist dran“, dann mach jede Gangart, die es erfindet, genau nach, auch wenn es nur
        Stampfen ist. Follow the Leader steht auf Harvards Spieleliste für Kleinkinder <Cite id="cdc-guide" />.
      </p>
      <p>
        <GameLink id="roll-wait-go" /> ist ab 2. Hock dich mit deinem Kind an ein Ende des Flurs und roll einen Ball
        den Flur hinunter. Haltet euch an den Händen und schaut ihm nach. Erst wenn er liegt und du „los“ sagst, jagt
        ihr beide hinterher. Mach das Warten, nachdem er liegt, jedes Mal etwas länger, dann lass dein Kind „los“
        sagen.
      </p>
      <p>
        Mehr findest du unter <Link href="/games/tag/hallway">Spiele im Flur</Link>.
      </p>

      <h2>Mach den Boden zu Lava</h2>
      <p>
        <GameLink id="cushion-lava" /> ist ab 2. Verteil alle Kissen im Haus auf dem Boden und sag, der Boden ist
        Lava, also bleiben die Füße auf den Kissen. Hüpft zusammen bis zum Sofa und haltet euch bei großen Lücken an
        den Händen. Sag „die Lava steigt“ und nimm jede Runde ein Kissen weg.
      </p>
      <p>
        <GameLink id="run-home" /> ist auch ab 2. Jeder bekommt ein Heimkissen in einer anderen Ecke, dann lauft ihr
        mit albernen Gangarten durchs Zimmer. Ruf „Nach Hause!“, und ihr rennt beide los und setzt euch auf euer
        eigenes Kissen. Tauscht alle paar Runden die Kissen und jubelt, wenn ihr beide wisst, welches jetzt eures ist.
        Mehr findest du unter <Link href="/games/tag/cushions">Spiele mit Kissen</Link>.
      </p>

      <h2>Bau einen Stopp in den Lärm ein</h2>
      <p>
        Auf ein Signal anzuhalten ist etwas, das Forschende von Kleinkindern verlangen. In einer Langzeitstudie
        sollten Kinder von 22 bis 45 Monaten warten, langsam eine Linie entlanggehen, flüstern und auf ein Signal
        anhalten und loslegen <Cite id="kochanska-2000" />. In einer anderen sagten gemeinsames Singen, Tanzen und
        Musikspiele zu Hause mit 2 bis 3 Jahren Aufmerksamkeit und Selbstregulation mit 5 Jahren voraus{" "}
        <Cite id="williams-2015" />.
      </p>
      <p>
        <GameLink id="sock-rain" /> ist ab 2. Kipp einen Becher Sockenknäuel auf den Boden und ruf „Regen“, dann werft
        ihr sie beide so hoch, wie ihr könnt. Ruf „Sonne“, und das Werfen hört auf, jetzt wandern alle Socken so
        schnell wie möglich zurück in den Becher. Nach der letzten Sonne ist das Zimmer aufgeräumt.
      </p>
      <p>
        <GameLink id="cup-drum-parade" /> ist ab 2. Dreh einen Becher um, trommel darauf und marschier durch die
        Wohnung, dein Kind hinter dir. Hör ohne Vorwarnung auf zu trommeln, und die ganze Kapelle bleibt mitten im
        Schritt stehen, bis es weitergeht. Dann gib deinem Kind die Trommel.
      </p>

      <h2>Verstecken für Anfänger</h2>
      <p>
        Harvards Spiel-Handout für Kleinkinder nennt auch einfaches Verstecken <Cite id="brain-play" />.{" "}
        <GameLink id="terrible-hider" /> geht ab 1, bevor dein Kind zählen kann. Sag ihm, es soll auf dem Teppich
        bleiben, dann versteck dich schlecht hinter einem Stuhl und zähl dabei die ganze Zeit laut bis fünf. Zähl von
        deinem Versteck aus weiter, damit deine Stimme dich verrät. Dann tauscht ihr, und du schaust an zwei falschen
        Stellen nach, bevor du es findest.
      </p>
      <p>
        Wenn das Rennen vorbei ist, wechsel zu etwas Ruhigem. Die{" "}
        <Link href="/games/energy/low">Spiele für müde Eltern</Link> spielt man im Sitzen oder Liegen, und{" "}
        <Link href="/blog/bedtime-wind-down-games">ruhige Spiele vor dem Schlafengehen</Link> hat ein paar für das Ende
        des Tages. Die ganze Liste findest du unter <Link href="/games/age/toddlers">Spiele für Kleinkinder</Link>.
      </p>
    </>
  ),
};
