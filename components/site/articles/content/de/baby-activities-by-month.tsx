import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../baby-activities-by-month";

const { Link, GameLink } = linksIn("de");

export const article: Article = {
  ...english,
  title: "Spiele für Babys von 0 bis 12 Monaten, Monat für Monat",
  description:
    "Einfache Spiele für jede Phase im ersten Lebensjahr deines Babys, vom Kuckuck auf deiner Brust bis zum Abwechseln, mit dem, was die Studien in jedem Alter fanden.",
  body: (
    <>
      <p>
        Ein Spiel, über das dein Baby in einem Monat lacht, kann es ein paar Wochen später langweilen. Dieser
        Ratgeber sortiert einfache Spiele nach Phasen, von den ersten Wochen bis zum ersten Geburtstag. Jedes dauert 5
        bis 15 Minuten, und die meisten brauchen nichts außer deinem Gesicht, deiner Stimme und vielleicht einem
        Becher oder einem Tuch.
      </p>
      <p>
        Die Monatsangaben stammen aus den Studien unten, die Babys in diesem Alter untersucht haben. Nimm sie als
        grobe Landkarte, nicht als Checkliste. Bringt ein Spiel aus einer früheren Phase dein Baby noch zum Lächeln,
        spiel es weiter.
      </p>
      <p>
        Such heute Abend unten die Phase deines Babys, wähl ein Spiel und lies seine Schritte einmal durch. Lass das
        Handy in einem anderen Zimmer, spiel, bis dein Baby wegschaut, und hör dann auf.
      </p>

      <h2>Wie Spielen im ersten Jahr aussieht</h2>
      <p>
        Die American Academy of Pediatrics beschreibt, wie das Spielen im ersten Jahr vom sozialen Lächeln zu Serve
        and Return, Kuckuck und „Backe, backe Kuchen“ wächst. Ihre Kinderärzte empfehlen außerdem, von Geburt an neben
        dem Spielen auch vorzulesen <Cite id="aap-play" />.
      </p>
      <p>
        Für Babys von 6 bis 18 Monaten empfiehlt Harvards Center on the Developing Child Schoßspiele mit einer
        erwarteten Überraschung, Versteckspiele, Nachmachspiele, einfaches Rollenspiel, Fingerspiele und Gespräche
        über das, was deinem Baby auffällt <Cite id="cdc-guide" />. Fast jedes Spiel unten gehört dazu. Was sich von
        Phase zu Phase ändert, ist das, was dein Baby mitbringt.
      </p>

      <h2>0 bis 3 Monate: dein Gesicht und deine Stimme</h2>
      <p>
        In den ersten Wochen bist du das Spielzeug. Das Spiel sind dein Gesicht, deine Stimme und die Pausen
        dazwischen.
      </p>
      <p>
        Babys merken, wenn dieses Gesicht leer wird. In einem klassischen Experiment wurden Babys von 1 bis 4
        Monaten, deren Mütter ein starres, unbewegtes Gesicht zeigten, innerhalb von Minuten misstrauisch und zogen
        sich zurück <Cite id="tronick-1978" />. Babys bemerken auch die Form eines Spiels. Als Forschende Timing und
        Ablauf von Kuckuck und von abwechselndem Brabbeln störten, reagierten Babys von 2 bis 6 Monaten auf die
        Veränderung <Cite id="rochat-1999" />.
      </p>
      <p>Zwei Spiele passen zu dieser Phase, und bei beiden kannst du liegen:</p>
      <ul>
        <li>
          <GameLink id="hands-peekaboo" />: Leg dich auf den Rücken, dein Baby auf der Brust, und versteck dein
          Gesicht hinter beiden Händen. Halt still, zähl langsam bis drei, dann sag „Kuckuck!“ und mach die Hände weit
          auf. Zähl jedes Mal ein bisschen länger und hör auf, solange dein Baby noch lächelt.
        </li>
        <li>
          <GameLink id="missing-last-word" />: Sing langsam ein Lied, das dein Baby schon hundertmal gehört hat, und
          schau ihm dabei ins Gesicht. Hör kurz vor dem letzten Wort einer Zeile auf und halt die Stille mit
          hochgezogenen Augenbrauen. Warte, bis es zappelt, strampelt oder dich anschaut, dann sing das Wort mit einem
          breiten Lächeln.
        </li>
      </ul>
      <p>
        Auch Bücher zählen, von Anfang an. In einer Studie, in der Eltern angeleitet wurden, ihrem Kind von der Geburt
        bis zum Alter von 3 Jahren vorzulesen und mit ihm Rollenspiele zu spielen, verringerte das Coaching
        Hyperaktivität und Aufmerksamkeitsprobleme mit viereinhalb <Cite id="mendelsohn-2018" />. Mehr Schoßspiele
        findest du unter <Link href="/games/type/anticipation-rhyme">Kniereiter und Kitzelverse</Link> und{" "}
        <Link href="/games/type/peekaboo">Kuckuckspiele</Link>.
      </p>

      <h2>3 bis 6 Monate: zuschauen und erwarten</h2>
      <p>
        Dein Baby fängt an, vorauszuschauen. In einem Experiment lernten Babys von dreieinhalb Monaten eine Bilderfolge
        links und rechts und schauten schon vorher dorthin, wo das nächste Bild erscheinen würde{" "}
        <Cite id="haith-1988" />.
      </p>
      <p>
        Auch Aufmerksamkeit gehört zu dieser Phase. Wie gut Babys mit 5 Monaten ihre Aufmerksamkeit bündelten, sagte
        ihre exekutiven Funktionen mit 2 bis 4 Jahren voraus <Cite id="cuevas-bell-2014" />. Exekutive Funktionen sind
        die Fähigkeiten, mit denen ein Kind einen Gedanken festhält, innehält, bevor es handelt, und den Plan wechselt.
        Unser <Link href="/guides/executive-function-babies-toddlers">Ratgeber zu exekutiven Funktionen</Link> erklärt
        das genauer.
      </p>
      <p>
        Gegen Ende dieser Phase zeigen sich die ersten Zeichen von Arbeitsgedächtnis. Babys von fünfeinhalb bis
        sechseinhalb Monaten fanden ein Spielzeug nach einer kurzen Wartezeit wieder <Cite id="reznick-2004" />.
      </p>
      <ul>
        <li>
          <GameLink id="toy-comet" />: Legt euch auf den Rücken und halt ein Spielzeug etwa eine Unterarmlänge vor das
          Gesicht deines Babys, bis sein Blick daran hängen bleibt. Lass es langsam zur Seite gleiten, halt an und
          warte, bis die Augen nachkommen, bevor du weitermachst. Hör auf, wenn es wegschaut.
        </li>
        <li>
          <GameLink id="peeking-tail" />: Für ein Baby von etwa 5 Monaten, das greift, aber ein ganz verstecktes
          Spielzeug noch nicht findet. Leg ein Tuch so über ein Spielzeug, dass eine Ecke noch rausschaut. Frag „Wo
          ist es hin?“, tipp auf das Stück, das rausguckt, und nimm die Hände weg. Zieht es das Tuch weg, freu dich
          leise mit und deck das Spielzeug beim nächsten Mal ein bisschen mehr zu.
        </li>
      </ul>
      <p>
        Mehr findest du unter <Link href="/games/type/joint-attention">Schau-und-zeig-Spiele</Link> und{" "}
        <Link href="/games/type/hide-and-find">Versteckspiele</Link>.
      </p>

      <h2>6 bis 9 Monate: Lieder, Nachmachen und Verstecken</h2>
      <p>
        Jetzt lohnt sich das Singen. Babys von 6 Monaten waren länger aufmerksam, wenn ihre Mutter sang, als wenn sie
        sprach <Cite id="nakata-trehub-2004" />. Du brauchst keine schöne Stimme, nur ein Lied, das dein Baby kennt.
      </p>
      <p>
        Für Babys von 6 und 9 Monaten nennen Harvards Handouts Brain-Building Through Play Kuckuck und Versteckspiele,
        Trot Trot to Boston („Hoppe, hoppe Reiter“), Pat-a-Cake („Backe, backe Kuchen“), Dickory Dean, Baby See Baby
        Do, abwechselnd ein Spielzeug fallen lassen mit „Bumm“, Gesprächsspiele und Fingerspiele{" "}
        <Cite id="brain-play" />.
      </p>
      <p>
        In diesem Alter zählt, wie du reagierst. In einer Studie verbesserte ein Coaching, das Eltern anleitete, auf
        ihre Babys von 6 bis 10 Monaten einzugehen, die Aufmerksamkeit und das selbstständige Problemlösen der Babys{" "}
        <Cite id="landry-2006" />. Ab etwa siebeneinhalb Monaten konnten Babys in einem klassischen Experiment nach
        einer kurzen Wartezeit ein Spielzeug finden, das unter einer von zwei Abdeckungen versteckt war{" "}
        <Cite id="diamond-1985" />.
      </p>
      <ul>
        <li>
          <GameLink id="copy-cat-faces" />: Mach Gesicht oder Laut deines Babys einen Wimpernschlag später nach, ob
          Zunge rausstrecken, Quietschen oder Stirnrunzeln. Zieh nach ein paar Mal langsam selbst eine neue Grimasse
          und halt sie. Warte mit dieser Grimasse, bis dein Baby versucht, sie nachzumachen.
        </li>
        <li>
          <GameLink id="two-cup-switch" />: Für das Tablett am Hochstuhl und ein Baby ab etwa 8 Monaten. Stell zwei
          Becher umgedreht hin und versteck ein Spielzeug unter einem, während dein Baby zusieht. Zähl langsam „eins,
          zwei, drei“, dann lass es einen Becher hochheben. Leg das Spielzeug nach ein paar Treffern sichtbar unter
          den anderen Becher, zähl wieder und schau, wohin es greift.
        </li>
      </ul>
      <p>
        Mehr findest du unter <Link href="/games/type/fingerplay-song">Fingerspiele und Bewegungslieder</Link> und{" "}
        <Link href="/games/type/imitation">Nachmachspiele</Link>.
      </p>

      <h2>9 bis 12 Monate: abwechseln, zeigen und erstes So-tun-als-ob</h2>
      <p>
        Aus Spielen wird ein echtes Hin und Her. Babys von 9 bis 18 Monaten zeigten in Abwechselspielen wie Geben und
        Nehmen und Kuckuck an, wenn der Erwachsene seinen Zug verpasste <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        Um den ersten Geburtstag herum zählt, wohin du schaust. Einjährige blieben länger bei einem Spielzeug
        aufmerksam, wenn ihr Elternteil dasselbe Spielzeug anschaute und benannte <Cite id="yu-smith-2016" />. Auch
        das Sprechen zählt. Wenn Eltern mit 12 bis 15 Monaten feinfühlig darüber sprachen, was ihr Baby wohl denkt,
        und es unterstützten, Dinge allein zu tun, sagte das die exekutiven Funktionen mit 18 und 26 Monaten voraus{" "}
        <Cite id="bernier-2010" />. Zu Hause kann das ganz klein sein: sagen, was dein Baby wohl will, „du willst den
        Löffel“, und es probieren lassen, bevor du hilfst.
      </p>
      <ul>
        <li>
          <GameLink id="toy-give-back" />: Für ein Baby ab etwa 9 Monaten auf deinem Schoß. Gib ihm ein Spielzeug und
          sag „bitte schön“. Dann halt deine offene Hand hin, sag „ich bin dran“ und warte, ohne zu greifen, auch wenn
          es eine Minute dauert. Landet das Spielzeug in deiner Hand, sag „danke“ und gib es gleich zurück mit „du
          bist dran“.
        </li>
        <li>
          <GameLink id="look-where-i-look" />: Für ein Baby von etwa 9 Monaten, das sitzen kann. Leg zwei
          Spielsachen vor euch auf den Boden. Dreh den Kopf zu einem, schau es ganz genau an und sag einmal, wie es
          heißt. Warte, bis seine Augen deinem Blick folgen, dann sag den Namen noch mal und gib es ihm.
        </li>
      </ul>
      <p>
        Einfaches Rollenspiel aus Harvards Liste oben passt hier auch: ein leerer Becher, aus dem du schlürfst, oder
        ein gespielter Anruf bei Oma. Mehr findest du unter{" "}
        <Link href="/games/type/turn-taking">Spiele zum Abwechseln</Link> und{" "}
        <Link href="/games/type/pretend-play">Rollenspiele</Link>, oder stöbere in allen{" "}
        <Link href="/games/age/babies">Spielen für Babys</Link>.
      </p>

      <h2>Was das ganze Jahr gleich bleibt</h2>
      <p>
        Die Methode ändert sich nicht mit den Monaten. Harvards Handout zu Serve and Return fasst sie in fünf
        Schritten zusammen: bemerken, worauf dein Baby sich konzentriert, und es mit ihm teilen, es mit Unterstützung
        zurückspielen, benennen, was es sieht oder fühlt, abwechseln und warten und Enden und Anfänge üben. Sein
        Beispiel ist Kuckuck <Cite id="serve-return" />.
      </p>
      <p>
        Deinem Baby zu folgen ist der Teil, den du üben kannst. Als Eltern von 6 bis 21 Monate alten Kindern
        angeleitet wurden, dem Kind zu folgen, darauf einzugehen und Freude zu zeigen, verbesserte das die kognitive
        Flexibilität ihrer Kinder mit 4 Jahren <Cite id="lind-2017" />.
      </p>
      <p>Ein paar Gewohnheiten aus den Spielschritten oben passen zu jeder Phase:</p>
      <ul>
        <li>Hör auf, solange dein Baby noch lächelt, nicht erst, wenn es genug hat.</li>
        <li>Schaut es weg, nimm das als Ende der Runde.</li>
        <li>Mach die Pause jedes Mal ein bisschen länger und lass es sie füllen.</li>
        <li>Benenne mit ein paar warmen Worten, was es anschaut.</li>
      </ul>
      <p>
        Babys bemerken auch das Handy. Babys von 7 bis 24 Monaten wurden unruhig, wenn sich ihre Mutter in einer
        Still-Face-Aufgabe ihrem Handy zuwandte, und Babys, deren Mütter zu Hause mehr Geräte nutzten, erholten sich
        weniger <Cite id="myruski-2018" />. Ich weiß, wie schwer es ist, es wegzulegen. Ich arbeite den ganzen Tag,
        komme nach Hause und greife zum Handy. Für zehn Minuten Spielen lass es in einem anderen Zimmer.
      </p>

      <h2>Wenn dein Baby das noch nicht macht</h2>
      <p>
        Die Monate in diesem Ratgeber sind das Alter, in dem die Studien getestet haben, keine Fristen. Ist ein Spiel
        heute Abend zu schwer, geh zu einem aus der Phase davor zurück. Die meisten dieser Spiele haben einen
        leichteren Einstieg eingebaut: eine Ecke, die rausguckt, bevor das Spielzeug ganz versteckt ist, eine kurze
        Pause vor einer langen.
      </p>
      <p>
        Du musst nichts aufschreiben und dein Baby nicht testen. Such dir ein Spiel aus, das zu heute Abend passt, und
        spiel es, solange es ihm Spaß macht. Wenn du dir Sorgen um die Entwicklung deines Babys machst, sprich mit
        deiner Kinderärztin oder deinem Kinderarzt.
      </p>
    </>
  ),
};
