import Link from "next/link";
import { pathFor } from "@/lib/i18n";
import type { SiteCopy } from "./types";

const to = (page: Parameters<typeof pathFor>[1]) => pathFor("de", page);

const UPDATED = "9. Oktober 2026";

const SUPPORT = (
  <a href="mailto:tim@oyno.app">tim@oyno.app</a>
);

export const de: SiteCopy = {
  nav: {
    pricing: "Preise",
    support: "Support",
    privacy: "Datenschutz",
    terms: "AGB",
    switchLabel: "Sprache wechseln",
    start: "Loslegen",
  },

  home: {
    meta: {
      title: "Oyno: Handy weg, zehn Minuten spielen",
      description:
        "Oyno pausiert deine Apps, während du mit deinem Kind zusammen bist, und gibt dir jeden Tag ein einfaches Spiel. Jede Runde lässt den kleinen Planeten deiner Familie wachsen.",
    },
    eyebrow: "Für Eltern von 0- bis 5-Jährigen",
    headline: (
      <>
        Dein Handy frisst den Abend. <span className="hl">Hol dir zehn Minuten zurück.</span>
      </>
    ),
    sub: "Oyno pausiert in der Familienzeit deine Apps und gibt dir ein einfaches Spiel, passend zu der Energie, die du noch hast. Jede Runde lässt den Planeten deiner Familie wachsen.",
    cta: "Loslegen",
    planet: {
      open: "Deine Welten öffnen",
      close: "Welten schließen",
      previous: "Vorherige Welt",
      next: "Nächste Welt",
      yours: "Jetzt deine",
      unlocksAt: "Frei ab Blütenstufe {n}",
      hint: "Tipp auf den Planeten",
      worlds: {
        earth: "Erde",
        meadow: "Wiese",
        ember: "Glut",
        blossom: "Knospe",
        lagoon: "Lagune",
        dune: "Düne",
        frost: "Raureif",
        lavender: "Lavendel",
        moss: "Moos",
        honey: "Honig",
        cloud: "Wolke",
        coral: "Koralle",
        rose: "Rose",
        pebble: "Kiesel",
        orchard: "Obstgarten",
        aurora: "Polarlicht",
        clay: "Lehm",
        mint: "Minze",
        twilight: "Dämmerung",
        poppy: "Mohn",
        pearl: "Perle",
        canyon: "Schlucht",
        rain: "Regen",
        cedar: "Zeder",
        sunlit: "Sonnenschein",
        berry: "Beere",
        glacier: "Gletscher",
        marigold: "Ringelblume",
        dream: "Traum",
        hearth: "Herdfeuer",
        home: "Zuhause",
      },
    },
    proof: {
      heading: "Leichtes Spielen für müde Eltern",
      sub: "Ein Spiel, ein Buch, Baden oder zusammen kochen: Jede gemeinsame Zeit lässt euren Planeten wachsen.",
      previous: "Vorheriger Bildschirm",
      next: "Nächster Bildschirm",
      bodies: {
        low: "Sag Oyno, wie voll dein Akku ist: niedrig, mittel oder voll. Du bekommst ein Spiel für 5 bis 15 Minuten ohne Vorbereitung, und bei leerem Akku eins, das du im Liegen spielst.",
        growth: "Jedes Spiel trainiert Konzentration, Arbeitsgedächtnis, Selbstkontrolle oder flexibles Denken und nennt die Studie und den Leitfaden dahinter. Unter „Entwicklung“ siehst du, was ihr zwei geübt habt, Fähigkeit für Fähigkeit.",
        kidhours: "Leg Zeitpläne für Schulabende, Wochenendmorgen oder Baden und Schlafen an, jeden mit eigenen Apps zum Pausieren. Die Apps, die du immer brauchst, bleiben offen.",
        keepsake: "Am Ende einer Runde tippt dein Kind auf den Planeten, und ein kleines Andenken kann angespült werden. Es gibt 24 zu finden, ein paar davon sind selten.",
        home: "Spiele, Vorlesen, Baden und Kochen zählen alle. Der Startbildschirm hält eine leichte Sache für heute Abend bereit und zeigt, wie nah die nächste Welt ist.",
        letter: "Jeden Sonntag schreibt euch der Planet über eure Woche: die Abende zusammen, was ihr gespielt habt und die ersten Male, die dir aufgefallen sind. Schreib eine Zeile dazu und schick ihn an die Familie.",
        find: "500 Spiele für 0 bis 5 Jahre, jedes in drei kurzen Schritten. Durchsuche alle oder lass dir von Oyno eins geben.",
        worlds: "Jede Runde lässt den Planeten erblühen, und beim Spielen öffnen sich 31 Welten. Ein ausgelassener Tag kostet nichts: Der Planet welkt nie.",
      },
    },
    author: {
      heading: "Warum ich Oyno gemacht habe",
      paragraphs: [
        "Ohne meine Tochter gäbe es Oyno nicht. Und es gäbe Oyno nicht, wenn Handys nicht so gut darin geworden wären, uns festzuhalten.",
        "Ich arbeite den ganzen Tag. Dann komme ich nach Hause und greife zum Handy. Nur für eine Sekunde. Ich hasse mich für diese Sekunde.",
        "Meine Tochter sieht das. Sie denkt, so ist das eben. Ist es nicht.",
        "Ich habe Blocker ausprobiert. Ich habe Social Media gelöscht. Die Gewohnheit blieb. Ich nahm das Handy, sah den gesperrten Bildschirm und legte es wieder weg. Für mich war das nichts weiter. Für sie hing ich schon wieder am Handy.",
        "Also habe ich aufgehört, gegen die Gewohnheit zu kämpfen. Ich habe der Gewohnheit etwas Besseres zu tun gegeben.",
        "Oyno heißt „spielen“ in der Sprache des Landes, in dem ich geboren bin. Wenn ich jetzt zum Handy greife, gibt es mir ein Spiel, das ich mit ihr spielen kann. Es macht Spaß und hilft ihrem Gehirn beim Wachsen.",
        "Es hat Monate gedauert. Es ist kein weiterer Blocker. Es ist keine Atemübung und keine Meditation. Es sind zehn Minuten mit deinem Kind, bei einem Spiel, hinter dem die Forschung steht.",
      ],
      name: "Tim",
      role: "Entwickler von Oyno",
      photoAlt: "Ein Elternteil und ein kleines Mädchen auf dem Wohnzimmerboden mit einem leuchtenden Planeten aus Knete",
    },
    plan: {
      eyebrow: "Ein Abo, alles drin",
      pitch: "Familienzeit, 500 Spiele, Andenken, der Brief am Sonntag und jede Welt, die deine Familie freischaltet. Jederzeit kündbar.",
      monthly: "Monatlich",
      yearly: "Jährlich",
      cta: "Loslegen",
      appNote: "Oyno ist eine iPhone-App. Abonniere hier oder in der App und melde dich dann mit demselben Konto an.",
    },
    closer: {
      heading: "Heute Abend: zehn Minuten.",
      body: "Die Einrichtung dauert eine Minute, und das erste Spiel ist vor dem Abendessen bereit.",
    },
  },

  pricing: {
    meta: {
      title: "Preise | Oyno",
      description: "Was Oyno kostet, im Web und im App Store.",
    },
    eyebrow: "Preise",
    heading: "Ein Abo. Zwei Wege zu zahlen.",
    intro: "Beide schalten dasselbe Oyno frei. Nimm die Tür, vor der du gerade stehst.",
    web: {
      eyebrow: "Im Web",
      perMonth: " / Monat",
      orYearly: (yearly) => `oder ${yearly} / Jahr`,
      cta: "Loslegen",
      note: "Abgerechnet über Dodo Payments, unseren Merchant of Record. Die Preise enthalten die Steuern, die in deinem Land anfallen. Jederzeit kündbar.",
    },
    app: {
      eyebrow: "Im App Store",
      headline: "3 Tage kostenlos",
      sub: "Danach rechnet Apple zum Preis im App Store ab.",
      note: "Die kostenlose Testphase ist ein Einführungsangebot von Apple. Du verwaltest sie in deinem Apple Account unter „Abonnements“.",
    },
    body: (
      <>
        <h2>Was enthalten ist</h2>
        <p>
          Familienzeit (die Apps, die du auswählst, werden zu den von dir festgelegten Zeiten auf
          deinem Handy pausiert), jeden Abend ein neues Spiel, der Timer und jede Welt, die deine
          Familie freischaltet. Es gibt keine kostenlose Version und keine Zusatzkäufe innerhalb
          des Abos.
        </p>
        <h2>Erstattungen</h2>
        <p>
          Im Web abonniert und es passt doch nicht? Schreib innerhalb von 14 Tagen nach der Zahlung
          an {SUPPORT}, und wir erstatten dir den vollen Betrag. Käufe im App Store erstattet Apple
          über <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        </p>
      </>
    ),
  },

  support: {
    meta: {
      title: "Support | Oyno",
      description: "So erreichst du uns, und Antworten auf die häufigsten Fragen.",
    },
    eyebrow: "Support",
    heading: "Wie können wir helfen?",
    intro: (
      <>
        Schreib an{" "}
        <a className="text-highlight" href="mailto:tim@oyno.app">
          tim@oyno.app
        </a>
        . Ein echter Mensch antwortet, meist innerhalb eines Tages.
      </>
    ),
    body: (
      <>
        <h2>Eine pausierte App öffnet sich trotzdem</h2>
        <p>
          Prüfe unter <strong>Einstellungen → Bildschirmzeit</strong>, ob Oyno Zugriff auf die
          Bildschirmzeit hat, und ob die App in deiner Liste unter{" "}
          <strong>Familienzeit → Pausiert</strong> steht. Apps, die nach dem Erstellen der Liste
          aufs Handy gekommen sind, stehen erst darin, wenn du sie hinzufügst.
        </p>
        <h2>Ich brauche mein Handy während der Familienzeit</h2>
        <p>
          Telefon, Nachrichten und Karten werden nie pausiert. Für alles andere halte{" "}
          <strong>Nicht jetzt</strong> gedrückt: Deine Apps öffnen sich für 20 Minuten, danach geht
          die Familienzeit weiter.
        </p>
        <h2>Ich habe im Web abonniert. Wie komme ich rein?</h2>
        <p>
          Installiere Oyno aus dem App Store und melde dich mit derselben E-Mail-Adresse oder
          demselben Apple-, Google- oder Facebook-Konto an, das du hier benutzt hast. Das Abo ist
          schon damit verknüpft.
        </p>
        <h2>Wie kündige ich?</h2>
        <p>
          In der App: <strong>Profil → Abo verwalten</strong>. Ein Web-Abo kannst du auch über den
          Link in deinem Zahlungsbeleg von Dodo Payments kündigen. Ein Abo aus dem App Store
          kündigst du in deinem Apple Account unter „Abonnements“.
        </p>
        <h2>Wie lösche ich mein Konto?</h2>
        <p>
          In der App: <strong>Profil → Konto löschen</strong>. Hier steht,{" "}
          <Link href={`${to("privacy")}#delete`}>was dabei gelöscht wird</Link>.
        </p>
      </>
    ),
  },

  privacy: {
    meta: {
      title: "Datenschutz | Oyno",
      description: "Was Oyno speichert, was es nie sieht und wie du alles löschen kannst.",
    },
    eyebrow: "Datenschutz",
    heading: "Deine Abende gehören dir",
    updatedLabel: "Zuletzt aktualisiert",
    updated: UPDATED,
    body: (
      <>
        <p>
          Oyno wird von Teimur Gasanov betrieben. Es ist eine iPhone-App, die die von einem
          Elternteil ausgewählten Apps zu den von ihm festgelegten Zeiten pausiert und kurze Spiele
          vorschlägt, die es mit seinem Kind spielen kann. Diese Seite beschreibt, was die App und
          diese Website speichern, warum und wie du es entfernen kannst.
        </p>

        <h2>Was wir speichern</h2>
        <h3>Dein Konto</h3>
        <p>
          Eine E-Mail-Adresse und, wenn du dich über Apple, Google oder Facebook anmeldest, die
          Kennung, die uns dieser Anbieter übermittelt, zusammen mit dem Namen und der
          E-Mail-Adresse, die er mit uns teilt. Wenn du bei „Mit Apple anmelden“ „E-Mail-Adresse
          verbergen“ wählst, sehen wir nur die Weiterleitungsadresse.
        </p>
        <h3>Deine Runden</h3>
        <p>
          Jede Runde, die du spielst, wie lange sie gedauert hat und welches Spiel es war, bleibt
          auf deinem Handy. Damit dein Planet bei einem neuen Handy oder einer Neuinstallation
          erhalten bleibt, sichern wir zwei Gesamtwerte in deinem Konto: wie viele Runden du
          gespielt hast und wie viele Minuten. Nichts davon benennt ein Kind: Oyno fragt nie nach
          dem Namen, dem Alter oder einem Foto deines Kindes. Die Antworten, die du auf die Fragen
          auf dieser Website gibst (zum Beispiel eine Altersspanne), werden zusammen mit deinem
          Abo-Datensatz gespeichert, damit wir erkennen können, welche Fragen zu Spielen führen,
          die Menschen weiterhin spielen.
        </p>
        <h3>Dein Abo</h3>
        <p>
          Wenn du in der App abonniert hast: Apples Transaktionskennung, das Produkt, das
          Ablaufdatum und ob das Abo aktiv ist. Wenn du im Web abonniert hast: Dodo Payments ist
          der Merchant of Record und verwahrt deine Kartendaten, die wir nie sehen. Wir speichern
          die Kunden- und Abo-Kennungen, die Dodo uns übermittelt, den Status und das Ende des
          bezahlten Zeitraums.
        </p>
        <h3>Produktanalyse</h3>
        <p>
          Über Amplitude erfassen wir, welche Bildschirme geöffnet und welche Aktionen ausgeführt
          werden (eine gestartete Runde, eine angezeigte Bezahlseite), um herauszufinden, wo die
          App verwirrend ist.
        </p>
        <h3>Werbung</h3>
        <p>
          Diese Website lädt das Meta-Pixel, um zu messen, welche Anzeigen Menschen bringen, die
          ein Abo abschließen. Wenn ein Abo beginnt, senden wir Meta eine gehashte E-Mail-Adresse,
          damit die Conversion zugeordnet werden kann. Das Hashing erfolgt auf unserem Server, nie
          in deinem Browser.
        </p>

        <h2>Was dein Handy nie verlässt</h2>
        <p>
          Oyno nutzt Apples Bildschirmzeit-API, um Apps zu pausieren. Apple übergibt der App für
          die Apps, die du auswählst, anonyme Tokens statt ihrer Namen, und diese Tokens bleiben auf
          dem Gerät. Wir sehen nie, welche Apps du nutzt, wie lange du sie nutzt, dein
          Surfverhalten, deine Nachrichten, deinen Standort, deine Kontakte oder deine Fotos.
        </p>

        <h2>Wer deine Daten sonst noch sieht</h2>
        <ul>
          <li>
            <strong>Supabase</strong>: die Datenbank und der Anmeldedienst.
          </li>
          <li>
            <strong>Vercel</strong>: Hosting für diese Website und die API, mit der die App
            kommuniziert.
          </li>
          <li>
            <strong>Dodo Payments</strong>: Merchant of Record für Abos im Web.
          </li>
          <li>
            <strong>Amplitude</strong>: Produktanalyse.
          </li>
          <li>
            <strong>Resend</strong>: die Anmeldecodes, die wir dir per E-Mail schicken.
          </li>
          <li>
            <strong>Meta</strong>: Anzeigenmessung, wie oben beschrieben.
          </li>
        </ul>
        <p>Wir verkaufen deine Daten nicht und geben sie nicht an Datenhändler weiter.</p>

        <h2 id="delete">Alles löschen</h2>
        <p>
          In der App: <strong>Profil → Konto löschen</strong>. Damit werden dein Konto, die von uns
          gesicherten Gesamtwerte und die Runden auf deinem Handy sofort gelöscht. Das lässt sich
          nicht rückgängig machen.
        </p>
        <p>
          Mit Facebook angemeldet? Du kannst Oyno auch auf Facebook unter{" "}
          <strong>Einstellungen und Privatsphäre → Einstellungen → Apps und Websites</strong>{" "}
          entfernen. Dann teilt Facebook nichts mehr mit uns; deine Daten löscht der Schritt oben.
        </p>
        <p>
          Das Löschen deines Kontos kündigt kein Abo. Kündige es zuerst (siehe{" "}
          <Link href={to("support")}>Support</Link>) und lösche dann. Oder schreib an {SUPPORT},
          dann erledigen wir beides und bestätigen es dir.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Du kannst deine Daten einsehen, berichtigen, exportieren und löschen sowie ihrer
          Verarbeitung widersprechen. Für alles, was die App nicht direkt ermöglicht, schreib an{" "}
          {SUPPORT}.
        </p>

        <h2>Kinder</h2>
        <p>
          Oyno ist für Eltern. Konten sind für Erwachsene, und die App erhebt keinerlei Daten von
          deinem Kind oder über dein Kind.
        </p>
      </>
    ),
  },

  terms: {
    meta: {
      title: "AGB | Oyno",
      description: "Die Bedingungen für die Nutzung von Oyno und für das auf dieser Website verkaufte Abo.",
    },
    eyebrow: "Allgemeine Geschäftsbedingungen",
    heading: "AGB",
    updatedLabel: "Zuletzt aktualisiert",
    updated: UPDATED,
    body: (
      <>
        <p>
          Diese Bedingungen gelten für die App Oyno und diese Website, die beide von Teimur Gasanov
          betrieben werden. Wenn du eines von beiden nutzt, akzeptierst du sie.
        </p>

        <h2>Was Oyno ist</h2>
        <p>
          Ein Tool, das von dir ausgewählte Apps auf deinem eigenen iPhone zu den von dir
          festgelegten Zeiten pausiert, kurze Spiele vorschlägt, die du mit deinem Kind spielen
          kannst, und die Runden festhält, die du spielst. Die Spiele sind Vorschläge. Du
          entscheidest, ob ein Spiel für dein Kind und deine Umgebung sicher und geeignet ist, und
          du beaufsichtigst es.
        </p>

        <h2>Dein Konto</h2>
        <p>
          Du brauchst ein Konto, damit ein im Web gekauftes Abo dich in der App findet. Gib deine
          Anmeldedaten nicht weiter. Du kannst das Konto jederzeit unter{" "}
          <strong>Profil → Konto löschen</strong> löschen.
        </p>

        <h2>Abos</h2>
        <h3>Auf dieser Website gekauft</h3>
        <p>
          Die Zahlung wickelt Dodo Payments als Merchant of Record ab; für die Transaktion gelten
          dessen Bedingungen. Abos verlängern sich automatisch im von dir gewählten Intervall, bis
          du kündigst. Die Preise werden vor der Zahlung in deiner Währung angezeigt und enthalten
          alle Steuern, die Dodo erheben muss. Wenn Oyno nicht das Richtige für dich ist, kannst du
          innerhalb von 14 Tagen nach einer Zahlung unter {SUPPORT} die volle Erstattung verlangen.
        </p>
        <h3>In der App gekauft</h3>
        <p>
          Apple wickelt die Zahlung nach seinen eigenen Bedingungen ab, einschließlich Apples
          Standard-Endbenutzer-Lizenzvertrag für lizenzierte Apps. Die 3-tägige kostenlose
          Testphase ist ein Einführungsangebot von Apple; wenn du nicht vor ihrem Ende kündigst,
          berechnet Apple das von dir gewählte Abo und verlängert es, bis du es in deinem Apple
          Account unter „Abonnements“ kündigst. Über Erstattungen entscheidet Apple.
        </p>
        <h3>Wenn ein Abo endet</h3>
        <p>
          Dein Planet und deine bisherigen Runden bleiben. Familienzeit und neue Spiele enden, bis
          du wieder abonnierst.
        </p>

        <h2>Änderungen und Verfügbarkeit</h2>
        <p>
          Wir verbessern Oyno laufend und können Funktionen ändern oder entfernen. Nimmt dir eine
          Änderung etwas weg, wofür du bezahlt hast, schreib an {SUPPORT}, und wir bringen das in
          Ordnung. Wir arbeiten daran, den Dienst am Laufen zu halten, können aber nicht
          versprechen, dass er nie unterbrochen wird.
        </p>

        <h2>Haftung</h2>
        <p>
          Oyno wird „wie besehen“ bereitgestellt. Soweit gesetzlich zulässig, ist unsere Haftung für
          jeden Anspruch auf den Betrag begrenzt, den du uns in den 12 Monaten davor gezahlt hast.
          Nichts hiervon schränkt Rechte ein, die du nach dem Verbraucherrecht hast.
        </p>

        <h2>Kontakt</h2>
        <p>
          Fragen zu diesen Bedingungen: {SUPPORT}. Unsere{" "}
          <Link href={to("privacy")}>Datenschutzerklärung</Link> erklärt, wie wir mit deinen Daten
          umgehen.
        </p>
      </>
    ),
  },
};
