import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../activities-6-month-old";

const { Link, GameLink } = linksIn("de");

export const article: Article = {
  ...english,
  title: "Spiele mit einem 6 Monate alten Baby",
  description:
    "Acht Spiele von fünf Minuten für ein sechs Monate altes Baby, die du im Liegen oder mit dem Baby auf dem Schoß spielst, und was die Forschung zu jeder Art sagt.",
  body: (
    <>
      <p>
        Ein sechs Monate altes Baby braucht keinen Beschäftigungsplan. Es braucht dich in der Nähe, dein Gesicht da,
        wo es es sehen kann, und ein paar Minuten Hin und Her. Die meisten Spiele unten gehen, während du auf dem Boden
        oder dem Sofa liegst, und keins braucht mehr als einen Becher, eine Socke oder ein Buch.
      </p>
      <p>
        Jedes Spiel hier passt zu einem Baby von sechs Monaten oder jünger. Jedes dauert etwa fünf Minuten. Hör auf,
        solange es deinem Baby noch Spaß macht.
      </p>

      <h2>Wofür dein Baby bereit ist</h2>
      <p>
        Babys von fünfeinhalb bis sechseinhalb Monaten fanden ein Spielzeug nach einer kurzen Wartezeit wieder, was
        Forschende als das früheste Arbeitsgedächtnis werten <Cite id="reznick-2004" />. Arbeitsgedächtnis ist die
        Fähigkeit, etwas im Kopf zu behalten und es zu nutzen.
      </p>
      <p>
        Babys erfassen auch den Rhythmus eines Spiels. Als Forschende bei Babys von 2 bis 6 Monaten das Timing von
        Kuckuck und von abwechselndem Brabbeln durcheinanderbrachten, reagierten die Babys{" "}
        <Cite id="rochat-1999" />. Und sechs Monate alte Babys waren länger aufmerksam, wenn ihre Mutter ihnen
        vorsang, als wenn sie sprach <Cite id="nakata-trehub-2004" />.
      </p>
      <p>
        Harvards Center on the Developing Child schlägt für Babys von 6 bis 18 Monaten eine kurze Liste vor:
        Schoßspiele mit einer erwarteten Überraschung, Versteckspiele, Nachmachspiele, Fingerspiele und Gespräche
        über das, was dem Baby auffällt <Cite id="cdc-guide" />. Die Spiele unten folgen dieser Liste.
      </p>

      <h2>Versteckspiele</h2>
      <p>
        <GameLink id="under-the-cup" /> ist das einfachste. Stülp einen Becher über ein Spielzeug, während dein Baby
        zusieht, wie es verschwindet. Frag „Wo ist es hin?“, warte einen langen Atemzug und heb den Becher dann
        staunend hoch. Stülp ihn nach ein paar Runden wieder drüber und lass dein Baby heben.
      </p>
      <p>
        <GameLink id="slow-fist-open" /> braucht nur eine Hand. Schließ die Faust um ein Spielzeug, das zu groß zum
        Verschlucken ist, sodass ein Stück rausschaut, und frag „Was ist da drin?“ Öffne einen Finger nach dem
        anderen, so langsam du kannst. Zieht dein Baby deine Finger auf, lass es, und mach die Faust für eine neue
        Runde wieder zu.
      </p>

      <h2>Kuckuck und die Pause</h2>
      <p>
        Harvards Handout Brain-Building Through Play für 6 und 9 Monate beginnt mit Kuckuck und Versteckspielen und
        nennt dazu Schoßreime und Fingerspiele <Cite id="brain-play" />. Bei jedem steckt der Spaß in der Pause vor
        der Überraschung.
      </p>
      <p>
        Bei <GameLink id="hands-peekaboo" /> legst du dich auf den Rücken, dein Baby auf der Brust, und versteckst
        dein Gesicht hinter beiden Händen. Halt still, zähl langsam bis drei, dann sag „Kuckuck!“ und mach die Hände
        weit auf. Zähl jedes Mal ein bisschen länger.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> braucht nackte Füße auf deinem Schoß. Sag „Das ist der Daumen“ langsam
        auf, eine Zeile pro Zeh. Mach beim letzten Zeh eine Pause und halt den Fuß ruhig, während du langsam bis drei
        zählst. Dann lass bei „und der Kleine isst sie alle auf“ die Finger zum Bauch hochlaufen und mach am anderen
        Fuß weiter.
      </p>

      <h2>Reden und Nachmachen</h2>
      <p>
        Dein Baby kann abwechseln, lange bevor es Wörter hat. Bei <GameLink id="babble-back" /> wartest du auf
        irgendeinen Laut und antwortest darauf, als wäre es ein echter Satz. Halt inne, schau es an und lass eine
        lange Lücke, in der es dran ist. Lass es das Gespräch beenden, wenn es wegschaut.
      </p>
      <p>
        Bei <GameLink id="copy-cat-faces" /> machst du Gesicht oder Laut deines Babys einen Wimpernschlag später nach:
        Zunge rausstrecken, Quietschen, Stirnrunzeln. Zieh nach ein paar Runden langsam selbst eine neue Grimasse,
        halt sie und warte, bis es versucht, sie nachzumachen.
      </p>
      <p>
        Harvard nennt das Serve and Return. Bemerke, worauf sich dein Baby konzentriert, antworte darauf, benenne,
        was es sieht oder fühlt, dann wechselt euch ab und warte <Cite id="serve-return" />. In einer Studie
        verbesserte ein Coaching, das Eltern anleitete, so auf Babys von 6 bis 10 Monaten einzugehen, die
        Aufmerksamkeit der Babys und ihr selbstständiges Problemlösen <Cite id="landry-2006" />.
      </p>

      <h2>Lieder und Bücher</h2>
      <p>
        <GameLink id="big-tiny-voice" /> nutzt ein Lied, das dein Baby schon hundertmal gehört hat. Sing eine Zeile
        mit deiner lautesten Stimme, die Arme weit ausgebreitet. Sing die nächste Zeile im Flüsterton, ganz nah,
        damit es auf deinen Mund schaut. Wechsle immer weiter und wechsle früher, sobald seine Augen zu deinen
        hochkommen.
      </p>
      <p>
        Für Bücher probier <GameLink id="flat-out-story" />. Legt euch nebeneinander aufs Bett und halt ein
        aufgeschlagenes Bilderbuch über euch beide. Zeig auf ein Bild, benenne es und warte, bis die Augen deines
        Babys darauf landen. Schaut es auf etwas anderes auf der Seite, benenne lieber das und bleib dort.
      </p>
      <p>
        Zusammen auf eine Sache zu schauen ist Übung für die Aufmerksamkeit. In einer Studie sagte die Fähigkeit von
        Babys, mit 5 Monaten ihre Aufmerksamkeit zu bündeln, ihre exekutiven Funktionen zwischen 2 und 4 Jahren
        voraus <Cite id="cuevas-bell-2014" />. Die American Academy of Pediatrics hält fest, dass Kinderärzte von
        Geburt an neben dem Spielen auch das Vorlesen empfehlen <Cite id="aap-play" />. In einer Studie verringerte
        ein Coaching, das Eltern von der Geburt bis zum Alter von 3 Jahren zum Vorlesen und zu Rollenspielen
        anleitete, Hyperaktivität und Aufmerksamkeitsprobleme mit viereinhalb <Cite id="mendelsohn-2018" />.
      </p>

      <h2>Wie es in einen müden Abend passt</h2>
      <p>
        Du brauchst nicht alle acht. Such dir das aus, das dazu passt, wo du schon bist: auf dem Rücken, auf dem
        Sofa oder auf dem Boden. Fünf Minuten sind eine ganze Runde. Spiel morgen dasselbe Spiel noch mal, wenn es
        heute geklappt hat.
      </p>
      <p>
        Mehr findest du unter <Link href="/games/age/babies">Spiele für Babys</Link>, und die{" "}
        <Link href="/games/energy/low">Spiele für müde Eltern</Link> kannst du spielen, ohne aufzustehen. Wenn du
        Fragen zur Entwicklung deines Babys hast, sprich mit deiner Kinderärztin oder deinem Kinderarzt.
      </p>
    </>
  ),
};
