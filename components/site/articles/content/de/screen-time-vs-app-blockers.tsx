import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../screen-time-vs-app-blockers";

const { Link, GameLink } = linksIn("de");

export const article: Article = {
  ...english,
  title: "Bildschirmzeit, App-Blocker und Oyno: was jedes davon für Eltern tut",
  description:
    "Ein fairer Vergleich von Apples Bildschirmzeit, App-Blockern und Oyno für Eltern, die ihren Abend zurückwollen, mit dem, was jedes davon nicht kann.",
  body: (
    <>
      <p>
        Du willst das Handy aus der Stunde verbannen, die du mit deinem Kind verbringst. Auf dem iPhone gibt es dafür
        drei Arten von Werkzeugen: die Bildschirmzeit-Einstellungen, die Apple mitliefert, Apps, die andere Apps
        blockieren, und Oyno, das ich entwickle. Hier ist ein ehrlicher Blick auf alle drei, auch darauf, wann Oyno die
        falsche Wahl ist.
      </p>
      <p>
        Das Ziel ist ein Werkzeug wert. Die American Academy of Pediatrics empfiehlt, Mahlzeiten und Spielzeiten von
        Eltern und Kind bildschirmfrei zu halten, für Eltern wie für Kinder, und sagt, dass Eltern in dieser Zeit „Nicht
        stören“ auf ihrem Handy einschalten können <Cite id="aap-media-2016" />.
      </p>

      <h2>Apples Bildschirmzeit</h2>
      <p>
        Die Bildschirmzeit ist schon auf deinem iPhone und kostet nichts. Unter iOS 27 legst du einen{" "}
        <strong>Bildschirmzeit-Zeitplan</strong> mit Zeitfenstern fest, etwa einem Abendfenster, und{" "}
        <strong>Zeitkontingente</strong>, die begrenzen, wie lange du Kategorien von Apps nutzt, etwa soziale Netzwerke
        oder Spiele. Eine Liste <strong>Immer erlaubt</strong> hält ausgewählte Personen und Apps offen, egal was der
        Zeitplan sagt (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Apple Support: Zeitpläne und Zeitkontingente festlegen
        </a>
        ). Ein vierstelliger Bildschirmzeit-Code verhindert, dass du diese Einstellungen ohne ihn änderst (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Apple Support: Bildschirmzeit-Code
        </a>
        ).
      </p>
      <p>
        Was sie gut kann: Sie ist kostenlos, eingebaut und kann auch dein iPad und deinen Mac abdecken, wenn du
        „Geräteübergreifend teilen“ einschaltest. Laut Apple gilt ein Zeitkontingent außerdem für die Website einer App,
        wenn die App eine angibt.
      </p>
      <p>
        Was sie nicht kann: Sie sagt Nein, und das ist alles. Wenn das Zeitfenster beginnt, sagt dir nichts, was du mit
        der Zeit anfangen sollst. Und wenn du den Code selbst festlegst, kennst du ihn. Unser{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">Schritt-für-Schritt-Ratgeber zur Bildschirmzeit</Link>{" "}
        erklärt die Einrichtung und das Problem mit dem Code.
      </p>

      <h2>App-Blocker und Fokus-Apps</h2>
      <p>
        Im App Store gibt es viele Apps, die andere Apps blockieren oder begrenzen. Sie unterscheiden sich stark
        voneinander, deshalb gibt dir dieser Abschnitt Fragen statt Urteile. Bevor du für eine bezahlst, prüf:
      </p>
      <ul>
        <li>Ist sie für dein eigenes Handy oder eine Kindersicherung für das Gerät eines Kindes?</li>
        <li>Kannst du Tage und Uhrzeiten festlegen oder nur von Hand eine Sitzung starten?</li>
        <li>Was passiert, wenn du eine blockierte App öffnest, und wie leicht kommst du daran vorbei?</li>
        <li>Blockiert sie Websites, Apps oder beides?</li>
        <li>Gibt sie dir etwas zu tun in der Zeit, die frei wird?</li>
      </ul>
      <p>
        Ich habe selbst Blocker ausprobiert und meine Social-Media-Apps gelöscht. Die Gewohnheit blieb. Das ist kein
        Urteil über irgendeine App. Es ist der Grund, warum mir die letzte Frage auf der Liste wichtig ist.
      </p>

      <h2>Oyno</h2>
      <p>
        Oyno ist eine iOS-App für Eltern von Kindern von 0 bis 5. Sie nutzt Apples Bildschirmzeit auf deinem eigenen
        iPhone. Du legst die Familienzeit fest: die Tage, die Start- und Endzeiten und so viele Zeitpläne, wie du
        brauchst. In der Familienzeit sind die Apps pausiert, die du ausgewählt hast. Du bestimmst, welche Apps immer
        erlaubt und welche nie erlaubt sind, und es gibt eine 20-minütige Pause mit „Nicht jetzt“.
      </p>
      <p>
        Eine pausierte App zeigt den Bildschirm von Oyno. Sein Knopf „Oyno öffnen“ führt zu einem Spiel. Es gibt 500
        davon, in drei Altersgruppen und für wenig, mittlere oder viel Energie, jedes 5 bis 15 Minuten lang und jedes
        gestützt auf eine Studie und einen Leitfaden. Ein Zeitplan kann deine Apps für eine Weile freigeben, nachdem du
        und dein Kind eine Runde gespielt habt. Jede Runde lässt den kleinen Planeten deiner Familie wachsen. Oyno fragt
        nicht nach dem Namen oder einem Foto deines Kindes.
      </p>
      <p>
        Die Idee ist, dass Sperre und Spiel zusammengehören. In einem Experiment fühlten sich Eltern in einem
        Wissenschaftsmuseum, die ihr Handy viel benutzen sollten, abgelenkter und weniger mit ihren Kindern verbunden als
        Eltern, die es wenig benutzen sollten <Cite id="kushlev-dunn-2019" />. Oynos Antwort ist, etwas in die Lücke zu
        legen, die das Handy hinterlässt.
      </p>

      <h2>Was Oyno nicht kann</h2>
      <ul>
        <li>
          <strong>Es gibt Oyno nur für iOS.</strong> Eine Android-Version gibt es nicht.
        </li>
        <li>
          <strong>Es ist für dein Handy, nicht für das deines Kindes.</strong> Es ist keine Kindersicherung für das Gerät
          eines Kindes. Dafür hat Apple einen eigenen Leitfaden,{" "}
          <a href="https://support.apple.com/guide/child-safety/welcome-r1jy0rk9vfz8/web">
            Apple-Geräte für Kinder und Familien
          </a>
          .
        </li>
        <li>
          <strong>Es blockiert keine Websites.</strong> Es pausiert Apps. Wenn eine Website das Problem ist, nutz die
          Bildschirmzeit selbst.
        </li>
        <li>
          <strong>Es ist kein Schloss.</strong> Die Pause mit „Nicht jetzt“ öffnet deine Apps für 20 Minuten. Es ist ein
          Schubs, den du dir selbst einrichtest.
        </li>
        <li>
          <strong>Es ist nicht kostenlos.</strong> Es ist ein Monats- oder Jahresabo mit 3 Tagen kostenlosem Test im App
          Store. Die Bildschirmzeit kostet nichts.
        </li>
      </ul>

      <h2>Wie du dich entscheidest</h2>
      <p>
        Fang mit der Bildschirmzeit an. Sie ist kostenlos, und eine Woche damit verrät dir viel. Wenn das Abendfenster
        hält und du zufrieden bist, bleib dabei.
      </p>
      <p>
        Schau dir einen App-Blocker an, wenn dein Problem vor allem der Arbeitstag, Websites oder ein Android-Handy ist,
        denn das deckt Oyno nicht ab. Stell die Fragen oben und prüf, ob die App, die du wählst, deine abdeckt.
      </p>
      <p>
        Schau dir Oyno an, wenn dein Kind unter 6 ist, die Stunde, die du zurückwillst, die mit ihm ist, und Blockieren
        allein nicht gehalten hat, weil die Lücke, die es hinterließ, von etwas anderem auf dem Handy gefüllt wurde.
      </p>
      <p>
        Egal, wofür du dich entscheidest, halt für den ersten Abend ein Spiel bereit. Mit einem Baby probier das{" "}
        <GameLink id="babble-back" />: Warte auf irgendeinen Laut und antworte, als wäre er ein echter Satz. Mit einem
        Kleinkind probier <GameLink id="pocket-kiss-hand" />, bei dem sich ein Kuss in einer seiner Fäuste versteckt. Mit
        einem Kindergartenkind probier <GameLink id="countdown-stop" /> oder <GameLink id="sleepy-lion" />, die du im
        Liegen spielen kannst. Mehr findest du bei den <Link href="/games/energy/low">Spielen für müde Eltern</Link>.
      </p>
    </>
  ),
};
