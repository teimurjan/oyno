import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-grandparents";

const { Link, GameLink } = linksIn("de");

export const article: Article = {
  ...english,
  title: "Einfache Spiele für Oma und Opa mit den Enkeln",
  description:
    "Spiele mit wenig Energie, die Großeltern vom Stuhl aus oder mit einem Baby auf dem Schoß spielen können, ohne etwas zu kaufen. Ideen für Babys, Kleinkinder und Kindergartenkinder.",
  body: (
    <>
      <p>
        Diese Seite ist für zwei Leser. Bist du der Elternteil, ist sie etwas, das du deiner Mutter oder deinem Vater
        vor dem nächsten Besuch schicken kannst. Bist du Oma oder Opa, ist sie eine kurze Liste von Spielen, die du im
        Sitzen spielen kannst, ohne etwas zu kaufen und ohne etwas aufzubauen.
      </p>
      <p>
        Jedes Spiel hier dauert 5 bis 10 Minuten. Die meisten brauchen nur einen Schoß, einen Stuhl und deine
        Stimme.
      </p>

      <h2>Für die Eltern: was du weitergibst</h2>
      <p>
        Such zwei Spiele aus, die zum Alter deines Kindes passen, und schick die Links vorab. Jedes Spiel hat
        höchstens drei kurze Schritte, also lässt es sich gut auf dem Handy lesen. Zwei reichen für einen Besuch.
      </p>
      <p>
        Sag ihnen, was dein Kind gerade am meisten liebt, etwa ein Lied, ein Tier oder einen Witz. Jedes Spiel unten
        kann es aufnehmen.
      </p>

      <h2>Für Oma und Opa: drei Gewohnheiten</h2>
      <p>
        Harvards Center on the Developing Child nennt das Hin und Her beim Spielen Serve and Return. Bemerk, worauf
        sich das Kind konzentriert, und teil es mit ihm. Antworte darauf. Benenne, was es sieht oder fühlt. Dann
        wechselt euch ab und warte <Cite id="serve-return" />. Keiner dieser Schritte braucht schnelle Beine oder ein
        Spielzeug. Wenn der Boden zu hart für Knie oder Rücken ist: Jedes Spiel unten geht vom Stuhl oder vom Sofa
        aus.
      </p>
      <ul>
        <li>
          <strong>Warte länger, als es sich natürlich anfühlt.</strong> Gib einem kleinen Kind ein paar Sekunden zum
          Antworten.
        </li>
        <li>
          <strong>Lass es führen.</strong> Ändert es das Spiel, spiel seine Version.
        </li>
        <li>
          <strong>Hör auf, solange es noch Spaß macht.</strong> Beim nächsten Besuch dasselbe Spiel noch mal ist eine
          gute Sache.
        </li>
      </ul>

      <h2>Mit einem Baby auf dem Schoß</h2>
      <p>
        Die American Academy of Pediatrics beschreibt, wie das Spielen eines Babys vom sozialen Lächeln zu Serve and
        Return, Kuckuck und „Backe, backe Kuchen“ wächst <Cite id="aap-play" />. Beide Spiele unten passen auf einen
        Schoß.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> geht ab 6 Monaten. Frag „Wo ist deine Nase?“ und warte einen langen
        Atemzug, während du dem Baby ins Gesicht schaust. Tipp sanft auf seine Nase und sag „Nase“, dann genauso bei
        Ohren, Zehen und Bauch. Frag nach ein paar Runden „Wo ist meine Nase?“ und führ seine Hand zu deiner. In einer
        Studie verbesserte ein Coaching, das Eltern anleitete, so auf Babys von 6 bis 10 Monaten einzugehen, die
        Aufmerksamkeit der Babys und ihr selbstständiges Problemlösen <Cite id="landry-2006" />.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> geht ab 2 Monaten, mit nackten Füßen auf deinem Schoß. Sag „Das ist der
        Daumen“ langsam auf, eine Zeile pro Zeh. Mach beim letzten Zeh eine Pause und halt den Fuß ruhig, während du
        langsam bis drei zählst. Dann lass bei „und der Kleine isst sie alle auf“ die Finger zum Bauch hochlaufen und
        mach am anderen Fuß weiter.
      </p>

      <h2>Mit einem Kleinkind</h2>
      <p>
        <GameLink id="you-say-three" /> ist ein Kniereiter mit einer Lücke. Lass dein Enkelkind auf deinem Knie
        hopsen und zähl „eins, zwei“, dann halt abrupt an, die Hände in der Luft. Warte mit hochgezogenen
        Augenbrauen, bis es „drei“ sagt, dann gib ihm den größten Hopser von allen. Babys von 9 bis 18 Monaten, die
        mit einem Erwachsenen Abwechselspiele spielten, zeigten an, wenn der Erwachsene seinen Zug verpasste{" "}
        <Cite id="ross-lollis-1987" />. Hier verpasst du ihn mit Absicht.
      </p>
      <p>
        <GameLink id="face-copy-feelings" /> braucht ein Kleinkind auf deinen Knien, Nase an Nase. Mach ein großes
        Gesicht, sag, was es ist, etwa „überrascht“, und halt es, bis es das Gesicht nachmacht. Probier fröhlich,
        müde, sauer und albern. Dann tauscht ihr: Es schneidet eine Grimasse, du machst sie nach, und ihr ratet beide
        das Gefühl.
      </p>

      <h2>Mit einem Kindergartenkind</h2>
      <p>
        <GameLink id="grandma-footsteps" /> heißt auf Englisch Grandma’s Footsteps, „Omas Schritte“, und hat damit
        genau den richtigen Namen. Setz dich mit dem Rücken zu deinem Enkelkind auf einen Stuhl, es startet an der
        Wand gegenüber. Es schleicht sich an, und immer wenn du dich umdrehst, muss es eingefroren sein. Wen du beim
        Bewegen erwischst, der muss zurück zur Wand, und wer dir auf die Schulter tippt, hat gewonnen.
        Kindergartenkinder, die Kreisspiele spielten, etwa Stopp-Spiele mit vertauschten Regeln, verbesserten ihre
        Selbstregulation <Cite id="tominey-mcclelland-2011" />.
      </p>
      <p>
        <GameLink id="story-stones" /> braucht nur eine müde Stimme. Fang jede Geschichte mit „Es war einmal ein
        winziger Drache“ an und fügt abwechselnd genau drei Wörter hinzu. Zählt die Wörter an den Fingern ab, damit
        sich keiner ein viertes reinschmuggelt. Kinder von 3 bis 5 Jahren, die fünf Wochen lang fantastische
        Rollenspiele spielten, verbesserten ihr Arbeitsgedächtnis und ihre Selbstkontrolle{" "}
        <Cite id="thibodeau-2016" />.
      </p>
      <p>
        <GameLink id="i-spy-switch" /> ist „Ich sehe was, was du nicht siehst“ mit einem Kniff. Sag „Ich sehe was, was
        du nicht siehst, und das ist rot“, und dein Enkelkind findet es von deinem Platz aus. Nach drei Farben
        wechselst du zu Formen, dann dazu, wofür Dinge da sind. Kinder von 3 bis 5 Jahren wurden mit derselben Art von
        Wechsel getestet: erst nach Farbe sortieren, dann nach Form <Cite id="zelazo-2006" />.
      </p>
      <p>
        Mehr Spiele, die du vom Stuhl aus spielen kannst, findest du unter{" "}
        <Link href="/games/tag/sitting">Spiele im Sitzen</Link>,{" "}
        <Link href="/games/tag/on-your-lap">Schoßspiele</Link> und{" "}
        <Link href="/games/energy/low">Spiele für müde Eltern</Link>.
      </p>
    </>
  ),
};
