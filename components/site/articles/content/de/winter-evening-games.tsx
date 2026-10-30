import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../winter-evening-games";

const { Link, GameLink } = linksIn("de");

export const article: Article = {
  ...english,
  title: "Spiele für dunkle Winterabende",
  description:
    "Spiele, die das Dunkel nutzen: eine Lampe, die Handytaschenlampe und ein stilles Zimmer. Ideen für Babys, Kleinkinder und Kindergartenkinder und eine Möglichkeit, mit zwei Altersstufen gleichzeitig zu spielen.",
  body: (
    <>
      <p>
        Wenn es vor dem Abendessen dunkel wird, findet der ganze Abend drinnen statt. Ich arbeite den ganzen Tag,
        komme nach Hause und greife zum Handy. Die Spiele unten geben dem Handy eine andere Aufgabe: Taschenlampe.
      </p>
      <p>
        Sie nutzen das Dunkel selbst. Eine Lampe, die aus- und angeht, ein Lichtfleck an der Wand, ein stilles
        Zimmer zum Lauschen. Sie sind nach Alter sortiert, und am Ende gibt es einen Abschnitt für zwei Kinder
        unterschiedlichen Alters.
      </p>

      <h2>Für ein Baby: die Lampe und der Lichtfleck</h2>
      <p>
        <GameLink id="lamp-off-lamp-on" /> geht ab 2 Monaten. Setz dich mit deinem Baby auf dem Schoß neben eine Lampe
        in Reichweite. Sag langsam „aus“ und schalt sie aus, warte, bis es danach sucht, dann sag „an“ und hol das
        Licht zurück. Mach die dunkle Pause jedes Mal ein bisschen länger und sprich leise.
      </p>
      <p>
        Es ist Kuckuck mit einer Lampe. Als Forschende bei Babys von 2 bis 6 Monaten das Timing von Kuckuck
        durcheinanderbrachten, reagierten die Babys <Cite id="rochat-1999" />.
      </p>
      <p>
        <GameLink id="light-spot-hunt" /> geht ab 5 Monaten, in einem dämmrigen Schlafzimmer mit deinem Baby auf dem
        Schoß. Leuchte mit der Handytaschenlampe an die Wand und warte, bis dein Baby den Fleck findet. Lass ihn
        langsam über die Wand gleiten, dann schalt ihn aus und frag „Wo ist er hin?“ Schalt ihn an einer neuen Stelle
        an und lass es ihn finden, bevor du ihn weiterbewegst. Babys von fünfeinhalb bis sechseinhalb Monaten fanden
        ein Spielzeug nach einer kurzen Wartezeit wieder <Cite id="reznick-2004" />.
      </p>

      <h2>Für ein Kleinkind: ein Stern an der Decke</h2>
      <p>
        <GameLink id="ceiling-star-spot" /> geht ab 1. Legt euch nebeneinander in ein dunkles Schlafzimmer, leuchte an
        die Decke und lass den Lichtpunkt langsam darüber gleiten. Dein Kind folgt dem Stern mit den Augen, und wenn
        er stehen bleibt, zeigt es darauf. Schalt die Lampe aus, frag „Wo war er?“ und lass es zeigen, bevor du zum
        Nachschauen wieder anschaltest.
      </p>
      <p>
        Harvard nennt diese Art zu spielen Serve and Return: den Fokus deines Kindes teilen, benennen, was es sieht,
        abwechseln und warten <Cite id="serve-return" />.
      </p>
      <p>
        <GameLink id="goodnight-room-dark" /> ist ab 2. Sagt zusammen drei Dingen im Zimmer gute Nacht, etwa der Lampe,
        dem Stuhl und dem Teddy, und zeigt auf jedes. Mach das Licht aus und frag „Wo ist die Lampe?“, damit dein Kind
        im Dunkeln hinzeigt. Mach zum Nachschauen das Licht wieder an, dann frag nach den anderen beiden. In einer
        Studie merkten sich Zweijährige, welche Töpfe sie schon geleert hatten <Cite id="hughes-ensor-2005" />.
      </p>

      <h2>Ab 2: Erstarren im Dunkeln</h2>
      <p>
        <GameLink id="spot-chase" /> ist das Spiel für übrige Energie. Mach das Licht schummrig, leuchte mit der
        Taschenlampe auf den Boden und lass dein Kind auf den hellen Fleck stampfen. Lass den Fleck davonhuschen,
        während es ihn jagt. Wenn du die Lampe ausmachst, erstarren alle, bis sie wieder an ist. Dann gib sie ab und
        jag selbst den Fleck.
      </p>
      <p>
        In einer Langzeitstudie sollten Kinder von 22 bis 45 Monaten auf ein Signal anhalten und loslegen, dazu warten
        und flüstern <Cite id="kochanska-2000" />. Hier ist das Signal das Dunkel.
      </p>

      <h2>Für ein Kindergartenkind: Spuren und Schalter</h2>
      <p>
        <GameLink id="torch-trail" /> spielt man im Liegen. Mach das Zimmer dunkel und leuchte mit der Taschenlampe
        nacheinander auf drei Dinge. Schalt sie aus, und dein Kind nennt die drei Dinge in derselben Reihenfolge. Nimm
        ein viertes dazu, dann gib die Lampe ab, damit es dich testen kann.
      </p>
      <p>
        Bei <GameLink id="sun-moon-switch" /> stehst du am Lichtschalter. Licht an heißt, dein Kind sagt „Nacht“ und
        rollt sich ein. Licht aus heißt, es sagt „Tag“ und streckt sich wach. Knips den Schalter in unerwarteten
        Momenten, erst langsam, dann schnell. Dann tauscht ihr, und du machst es mit Absicht falsch. Tag zu Nacht zu
        sagen gehört zu den Aufgaben, die Forschende Kindern von 2 bis 6 Jahren gegeben haben{" "}
        <Cite id="carlson-2005" />.
      </p>
      <p>
        Für das stillste Ende des Abends braucht <GameLink id="five-sounds" /> gar kein Licht. Liegt zusammen mit
        geschlossenen Augen still da. Jedes Mal, wenn einer von euch ein Geräusch hört, flüstert er, was es war, und
        hebt einen Finger. Hört bei fünf auf und entscheidet zusammen, welches Geräusch das leiseste war.
      </p>

      <h2>Zwei Kinder, eine Taschenlampe</h2>
      <p>
        Lichtfleck fangen endet damit, dass dein Kind die Taschenlampe hält. Ein älteres Geschwisterkind kann diese
        Aufgabe das ganze Spiel über übernehmen, während ein Baby oder Kleinkind den Fleck sucht, wie bei Lichtfleck
        oder Stern an der Decke. Du bleibst zwischen ihnen auf dem Boden und benennst alles.
      </p>
      <p>
        Halt den Lichtstrahl auf Wänden, Decke und Boden, weg von Gesichtern. Nutz das Handy nur als Lampe und leg es
        mit dem Display nach unten weg, wenn das Spiel vorbei ist.
      </p>
      <p>
        Mehr findest du unter <Link href="/games/tag/lights">Spiele mit Licht</Link>,{" "}
        <Link href="/games/tag/quiet">ruhige Spiele</Link> und{" "}
        <Link href="/games/tag/bedtime">Spiele vor dem Schlafengehen</Link>.
      </p>
    </>
  ),
};
