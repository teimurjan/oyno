import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../iphone-screen-time-family-evenings";

const { Link, GameLink } = linksIn("de");

export const article: Article = {
  ...english,
  title: "iPhone-Bildschirmzeit für Familienabende einrichten: so geht’s",
  description:
    "Schritt für Schritt: Richte die Bildschirmzeit auf deinem eigenen iPhone so ein, dass der Abend mit deinem Kind dir gehört, dazu, was sie nicht kann und was ihr stattdessen spielen könnt.",
  body: (
    <>
      <p>
        In diesem Ratgeber geht es um dein Handy, nicht um das deines Kindes. Wenn du müde nach Hause kommst und das
        Handy die Stunde vor dem Schlafengehen füllt, kann die Bildschirmzeit auf deinem eigenen iPhone einen Zaun um
        diese Stunde ziehen. Sie ist kostenlos, schon auf deinem Handy, und du kannst sie heute Abend einrichten.
      </p>
      <p>
        Es lohnt sich. In einem Experiment fühlten sich Eltern in einem Wissenschaftsmuseum, die ihr Handy viel benutzen
        sollten, abgelenkter und weniger mit ihren Kindern verbunden als Eltern, die es wenig benutzen sollten{" "}
        <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>
        Die Schritte unten folgen Apples eigenen Supportseiten für iOS 27, die neueste Version, die Apple dokumentiert.
        Wenn auf deinem iPhone iOS 26 oder älter läuft, heißen die Menüs anders, und gegen Ende gibt es einen Abschnitt
        für dich.
      </p>

      <h2>Was sich in iOS 27 geändert hat</h2>
      <p>
        Ältere Anleitungen sprechen von Auszeit und App-Limits. Für iOS 27 beschreibt Apples Anleitung stattdessen zwei
        Werkzeuge. <strong>Bildschirmzeit-Zeitpläne</strong> legen fest, wann am Tag du deine Apps nutzen kannst.{" "}
        <strong>Zeitkontingente</strong> legen fest, wie lange du sie jeden Tag nutzen kannst, nach Kategorie, etwa
        Unterhaltung, Spiele oder soziale Netzwerke. Apples eigenes Beispiel ist ein Zeitplan mit Zeitfenstern für
        Arbeit, Abendessen und den Abend (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Apple Support: Zeitpläne und Zeitkontingente festlegen
        </a>
        ).
      </p>
      <p>
        Apple weist darauf hin, dass diese Funktionen iOS 27 oder neuer auf all deinen Apple-Geräten brauchen. Wenn dein
        iPad oder Mac noch eine ältere Version hat, aktualisiere ihn zuerst, sonst passen die Schritte unten vielleicht
        nicht zu dem, was du siehst.
      </p>

      <h2>Schritt 1: Bildschirmzeit einschalten und deine Woche ansehen</h2>
      <p>
        Öffne die App „Einstellungen“ und tippe auf „Bildschirmzeit“. Tippe auf „Bildschirmzeit verwalten“ und dann auf
        „App- &amp; Websiteaktivität aktivieren“ (
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Apple Support: Bildschirmzeit für dich selbst einrichten
        </a>
        ).
      </p>
      <p>
        Wenn du sie schon eine Weile nutzt, schau erst hin, bevor du etwas änderst. Tippe auf „Tagesdurchschnitt“ und
        dann auf „Woche“. Scroll nach unten zu „Aktivierungen“, um zu sehen, wie oft du das Handy in die Hand genommen
        hast. Notier dir die zwei oder drei Apps, die du am meisten nutzt. Um genau diese Apps ziehst du gleich den Zaun.
      </p>
      <p>
        Die echte Zahl kann höher sein, als du schätzt. In einer Studie griffen junge Erwachsene, deren Handys ihre
        Nutzung aufzeichneten, etwa 85-mal am Tag zum Handy und nutzten es etwa fünf Stunden, ungefähr doppelt so viel,
        wie sie geschätzt hatten <Cite id="andrews-2015" />.
      </p>
      <p>
        Wenn du auch ein iPad oder einen Mac nutzt, kannst du diese Einstellungen bei Apple auf allen Geräten teilen.
        Tippe auf „Bildschirmzeit verwalten“ und schalte „Geräteübergreifend teilen“ ein. Dann gilt der Zeitplan, den du
        unten festlegst, auf allen Geräten, und der Abend wandert nicht aufs iPad.
      </p>

      <h2>Schritt 2: Zeitkontingente für die Apps festlegen, die am stärksten ziehen</h2>
      <p>
        Zeitkontingente funktionieren nach Kategorie. Du kannst die Apps einer Kategorie nutzen, bis sie das Kontingent
        dieser Kategorie oder deine tägliche Gesamtzeit erreichen, je nachdem, was zuerst kommt.
      </p>
      <ol>
        <li>Öffne „Einstellungen“, tippe auf „Bildschirmzeit“ und dann auf „Zeitkontingente“.</li>
        <li>
          Tippe auf „Kategorien verwalten“, tippe auf die Taste zum Hinzufügen und wähle eine Kategorie, etwa soziale
          Netzwerke oder Unterhaltung.
        </li>
        <li>
          Tippe zurück unter „Zeitkontingente“ auf die Kategorie und zieh den Regler, um festzulegen, wie lange du sie
          jeden Tag bekommst.
        </li>
        <li>
          Um zu sehen, welche Apps zu einer Kategorie gehören, tippe auf „Kategorien verwalten“ und dann auf die
          Kategorie. Dort siehst du auch deine durchschnittliche tägliche Nutzung, und du kannst auf eine App tippen, um
          ihre eigene zu sehen.
        </li>
      </ol>
      <p>
        Fang mit den Apps aus Schritt 1 an. Sei ehrlich, welche davon den Abend auffressen.
      </p>
      <p>
        Ein Detail ist wichtig, wenn du im Browser scrollst. Laut Apple gilt das Zeitkontingent für beides, wenn eine App
        eine zugehörige Website angibt. Eine App zu begrenzen kann also auch ihre Website begrenzen.
      </p>

      <h2>Schritt 3: Dem Abend ein eigenes Zeitfenster geben</h2>
      <p>
        Das ist der Teil, der die Stunde mit deinem Kind schützt. Du legst einen Zeitplan an und darin ein Zeitfenster,
        das euren Familienabend abdeckt.
      </p>
      <ol>
        <li>
          Öffne „Einstellungen“, tippe auf „Bildschirmzeit“, dann auf „Bildschirmzeit-Zeitplan“, und schalte „Zeitplan“
          ein.
        </li>
        <li>Tippe auf „Zeitplan hinzufügen“, wähle die Tage, etwa Montag bis Freitag, und bestätige.</li>
        <li>Tippe auf das Zeitfenster. Tippe auf seinen Namen und nenn es schlicht, etwa „Abend“.</li>
        <li>Tippe auf Start- und Endzeit und stell sie auf die Stunden, in denen du mit deinem Kind zu Hause bist.</li>
        <li>
          Tippe unter dem Zeitfenster auf die Kategorien mit Zeitkontingent, die in dieser Zeit verfügbar sein sollen.
          Lass die weg, die du in Schritt 2 für die Apps angelegt hast, die am stärksten ziehen.
        </li>
      </ol>
      <p>
        Jedes Zeitfenster zeigt Symbole für die Kategorien, die es erlaubt, so siehst du auf einen Blick, welche Arten
        von Apps am Abend offen sind. Wenn das Wochenende anders aussieht, leg einen zweiten Zeitplan für Samstag und
        Sonntag mit eigenen Uhrzeiten an.
      </p>
      <p>
        Zurück in „Zeitkontingente“ hat Apple außerdem einen Schalter namens „An Bildschirmzeit-Zeitplan anpassen“.
        Schalte ihn ein, wenn deine Kontingente nur zu bestimmten Zeiten in deinem Zeitplan gelten sollen.
      </p>
      <p>
        Wähl Uhrzeiten, die du einhalten kannst, etwa vom Abendessen bis zum Schlafengehen. Das passt zu dem, was die
        American Academy of Pediatrics Familien empfiehlt: Schlafzimmer, Mahlzeiten und Spielzeiten von Eltern und Kind
        bildschirmfrei halten, für Kinder und für Eltern <Cite id="aap-media-2016" />.
      </p>

      <h2>Schritt 4: Festlegen, was erlaubt bleibt</h2>
      <p>
        Manche Apps sollten nie hinter dem Zaun landen. Dein Partner muss dich erreichen können. Der Babysitter muss dich
        erreichen können. Vielleicht willst du Karten, die Kamera oder eine Gesundheits-App.
      </p>
      <ol>
        <li>Öffne „Einstellungen“, tippe auf „Bildschirmzeit“ und dann auf „Immer erlaubt“.</li>
        <li>
          Tippe auf „Personen hinzufügen“, um die Kontakte hinzuzufügen, die du immer erreichen kannst und die dich immer
          erreichen können.
        </li>
        <li>Tippe auf „Apps hinzufügen“, um die Apps hinzuzufügen, die offen bleiben, egal was der Zeitplan sagt.</li>
      </ol>
      <p>
        Laut Apple bleiben Apps und Kontakte auf dieser Liste unabhängig von jedem Zeitplan oder Kontingent verfügbar.
        Apples eigene Beispiele sind Familienmitglieder und die Health-App für Notfälle. Halt die Liste kurz. Jede App
        darauf ist eine Tür, die offen bleibt.
      </p>

      <h2>Schritt 5: Mit einem Code sperren</h2>
      <p>
        Ein Bildschirmzeit-Code bedeutet, dass du einen Code eingeben musst, bevor du die Einstellungen oben ändern
        kannst (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Apple Support: Bildschirmzeit-Code erstellen, ändern oder entfernen
        </a>
        ).
      </p>
      <ol>
        <li>
          Öffne „Einstellungen“, tippe auf „Bildschirmzeit“, dann auf „Bildschirmzeit verwalten“ und dann auf
          „Bildschirmzeiteinstellungen sperren“.
        </li>
        <li>Gib einen vierstelligen Code ein und dann zur Bestätigung noch einmal.</li>
      </ol>
      <p>
        Jetzt der ehrliche Teil. Du legst diesen Code selbst fest, also kennst du ihn. Um 20 Uhr, müde, mit dem Sofa und
        dem Handy direkt vor dir, ist ein Code, den du kennst, eine Schwelle, keine Mauer.
      </p>
      <p>
        Deshalb lassen manche Eltern den Code von ihrem Partner eingeben, damit sie ihn nicht kennen. Das hilft. Aber
        Apple bietet auch die Wiederherstellung des Bildschirmzeit-Codes an, mit der du den Code über deinen Apple Account
        zurücksetzen kannst, wenn du ihn vergisst. Wenn du sie einschaltest, wird der Code deines Partners für dich zu
        einem Schritt mehr, nicht zu einem Schloss. Entscheide, was du willst.
      </p>

      <h2>Mit iOS 26 oder älter: Auszeit und App-Limits</h2>
      <p>
        Wenn dein iPhone noch nicht auf iOS 27 ist, haben dieselben Ideen ältere Namen (
        <a href="https://support.apple.com/guide/iphone/set-schedules-with-screen-time-iphb0c7313c9/26/ios/26">
          Apple Support: Zeitpläne mit der Bildschirmzeit festlegen, iOS 26
        </a>
        ).
      </p>
      <ul>
        <li>
          <strong>Auszeit</strong> ist das Abendfenster. Tippe in „Einstellungen“ auf „Bildschirmzeit“, dann auf
          „Auszeit“ und dann auf „Geplant“. Wähle „Täglich“ oder „Tage anpassen“ und leg Start- und Endzeit fest. Apple
          schickt fünf Minuten vor Beginn eine Erinnerung.
        </li>
        <li>
          <strong>App-Limits</strong> sind die Kontingente. Tippe auf „App-Limits“, dann auf „Limit hinzufügen“, wähle
          Kategorien oder einzelne Apps, tippe auf „Weiter“ und leg die Zeit fest.
        </li>
        <li>
          <strong>Immer erlaubt</strong> funktioniert genauso, für Kontakte und Apps.
        </li>
      </ul>
      <p>
        Ein Haken: Laut Apple lassen sich diese Limits standardmäßig ignorieren, sobald du sie erreichst. Wenn du einen
        Bildschirmzeit-Code hast, kannst du „Bei Auszeit blockieren“ einschalten, dann lassen sich die Apps während der
        Auszeit nicht öffnen. Ist es aus, siehst du nur eine Erinnerung und kannst weitermachen.
      </p>

      <h2>Was die Bildschirmzeit nicht kann</h2>
      <p>
        Die Bildschirmzeit ist gut in einer Sache. Sie sagt Nein. Sie sagt nicht, was du stattdessen tun sollst.
      </p>
      <p>
        Das kenne ich von meinen eigenen Abenden. Ich arbeite den ganzen Tag, komme nach Hause und greife zum Handy. Ich
        habe Blocker ausprobiert. Ich habe meine Social-Media-Apps gelöscht. Die Gewohnheit blieb. Eine gesperrte App
        hinterlässt eine Lücke im Abend, und die Bildschirmzeit füllt sie nicht.
      </p>
      <p>
        Das Grundsatzpapier der AAP zu kleinen Kindern und Medien sagt dasselbe von der anderen Seite. Es hält fest, dass
        starke Nutzung von Mobilgeräten durch Eltern mit weniger verbalem und nonverbalem Austausch zwischen Eltern und
        Kindern zusammenhängt. Es bittet Kinderärzte, Familien mit einem Familien-Medienplan zu helfen, der Regeln für
        jedes Kind und jeden Elternteil enthält, und mit Ideen für Spiele statt Bildschirmen{" "}
        <Cite id="aap-media-2016" />. Eine Regel fürs Handy ist ein halber Plan. Die andere Hälfte ist, was du mit der
        Zeit machst.
      </p>
      <p>
        Halt also die nächsten zehn Minuten bereit, bevor das Zeitfenster beginnt. Sie müssen nicht ausgeklügelt sein.
        Sie müssen funktionieren, wenn du nichts mehr übrig hast. Oyno nutzt die Bildschirmzeit, um in der Familienzeit
        die Apps zu pausieren, die du auswählst, und gibt dir stattdessen ein kurzes Spiel.
      </p>

      <h2>Dein erster Abend</h2>
      <p>
        Hier ist ein Plan für heute Abend, gemacht für Eltern, die sich lieber hinlegen würden.
      </p>
      <ol>
        <li>Lass das Zeitfenster aus Schritt 3 in zehn Minuten beginnen.</li>
        <li>
          Leg das Handy außer Reichweite auf ein Regal, mit dem Display nach unten und mit Ton, falls jemand anruft.
        </li>
        <li>
          Such dir ein Spiel aus der Liste unten aus und spiel es, bis dein Kind nicht mehr lächelt, nicht länger.
        </li>
      </ol>
      <p>
        Mit einem Baby probier das <GameLink id="hands-peekaboo" />. Du legst dich auf den Rücken, dein Baby auf der
        Brust, versteckst dein Gesicht hinter beiden Händen und zählst langsam bis drei vor dem „Kuckuck!“.
      </p>
      <p>
        Mit einem Kleinkind ab 2 probier <GameLink id="still-stone-mouse">Stein und Maus</GameLink>. Dein Kind liegt
        still wie ein Stein, während deine Hand sich als Maus anschleicht, und jedes Zappeln schickt die Maus zurück zum
        Start. Oder <GameLink id="touch-the-bear" />: Du bist ein Bär, der auf dem Sofa schläft, bei jedem Schrei
        schnarchst du lauter, und nur eine Hand auf deiner Tatze weckt dich.
      </p>
      <p>
        Mit einem Kindergartenkind probier das <GameLink id="belly-boat" />. Ihr legt euch beide auf den Rücken, auf
        jedem Bauch ein kleines Spielzeug, und atmet langsam, damit die Boote steigen und sinken.{" "}
        <GameLink id="sleepy-lion" /> und <GameLink id="day-says-night" /> klappen auch vom Sofa aus.
      </p>
      <p>
        Mehr findest du bei den <Link href="/games/energy/low">Spielen für müde Eltern</Link>, und nach Alter sortiert
        bei den <Link href="/games/age/toddlers">Spielen für Kleinkinder</Link> oder den{" "}
        <Link href="/games/age/preschoolers">Spielen für Kindergartenkinder</Link>. Wenn du noch zwischen der
        Bildschirmzeit und einer App obendrauf schwankst, lies{" "}
        <Link href="/blog/screen-time-vs-app-blockers">Bildschirmzeit, App-Blocker und Oyno</Link>.
      </p>
      <p>
        Gib der Einrichtung eine Woche, bevor du sie änderst. Wenn das Zeitfenster zu früh beginnt, verschieb es. Wenn
        sich eine App immer wieder über „Immer erlaubt“ durchmogelt, nimm sie von der Liste.
      </p>
    </>
  ),
};
