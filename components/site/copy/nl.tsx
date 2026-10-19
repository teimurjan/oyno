import Link from "next/link";
import { pathFor } from "@/lib/i18n";
import type { SiteCopy } from "./types";

const to = (page: Parameters<typeof pathFor>[1]) => pathFor("nl", page);

const UPDATED = "9 oktober 2026";

const SUPPORT = (
  <a href="mailto:tim@oyno.app">tim@oyno.app</a>
);

export const nl: SiteCopy = {
  nav: {
    pricing: "Prijzen",
    support: "Hulp",
    privacy: "Privacy",
    terms: "Voorwaarden",
    switchLabel: "Taal wijzigen",
    start: "Aan de slag",
  },

  home: {
    meta: {
      title: "Oyno: leg je telefoon weg, speel tien minuten",
      description:
        "Oyno zet je apps op pauze als je bij je kind bent en geeft je elke dag één makkelijk spelletje. Elk rondje laat de kleine planeet van je gezin groeien.",
    },
    eyebrow: "Voor ouders van kinderen van 0 tot 5",
    headline: (
      <>
        Je telefoon slokt je avond op. <span className="hl">Pak tien minuten terug.</span>
      </>
    ),
    sub: "Oyno zet je apps op pauze tijdens Gezinstijd en geeft je één makkelijk spelletje, passend bij de energie die je nog hebt. Elk rondje laat de planeet van je gezin groeien.",
    cta: "Aan de slag",
    planet: {
      open: "Open je werelden",
      close: "Sluit werelden",
      previous: "Vorige wereld",
      next: "Volgende wereld",
      yours: "Nu van jou",
      unlocksAt: "Gaat open bij bloeiniveau {n}",
      hint: "Druk op de planeet",
      worlds: {
        earth: "Aarde",
        meadow: "Weide",
        ember: "Gloed",
        blossom: "Bloesem",
        lagoon: "Lagune",
        dune: "Duin",
        frost: "Vorst",
        lavender: "Lavendel",
        moss: "Mos",
        honey: "Honing",
        cloud: "Wolk",
        coral: "Koraal",
        rose: "Roos",
        pebble: "Kiezel",
        orchard: "Boomgaard",
        aurora: "Noorderlicht",
        clay: "Klei",
        mint: "Munt",
        twilight: "Schemer",
        poppy: "Klaproos",
        pearl: "Parel",
        canyon: "Kloof",
        rain: "Regen",
        cedar: "Ceder",
        sunlit: "Zonlicht",
        berry: "Bes",
        glacier: "Gletsjer",
        marigold: "Goudsbloem",
        dream: "Droom",
        hearth: "Haard",
        home: "Thuis",
      },
    },
    proof: {
      heading: "Een avond met Oyno",
      sub: "Geen wilskracht nodig. Je telefoon staat al op pauze voordat je hoeft te kiezen.",
      previous: "Vorig scherm",
      next: "Volgend scherm",
      steps: [
        {
          shot: "/screenshots/nl-NL/screens/kidhours.webp",
          title: "Gezinstijd begint",
          body: "Op het tijdstip dat je instelt, gaan de apps die je koos op pauze. Telefoon, Berichten en Kaarten blijven open.",
        },
        {
          shot: "/screenshots/nl-NL/screens/low.webp",
          title: "Iets makkelijks",
          body: "Vertel Oyno hoe vol je batterij nog is. Je krijgt één spelletje van tien minuten, zonder voorbereiding.",
        },
        {
          shot: "/screenshots/nl-NL/screens/science.webp",
          title: "Spelen waar ze van groeien",
          body: "Elk spelletje traint concentratie, geheugen of zelfbeheersing, en noemt het onderzoek en de richtlijn erachter.",
        },
        {
          shot: "/screenshots/nl-NL/screens/worlds.webp",
          title: "De planeet groeit",
          body: "Als de timer afloopt, tikt je kind op de planeet. Die bloeit op, en om de paar rondjes gaat er een nieuwe wereld open.",
        },
        {
          shot: "/screenshots/nl-NL/screens/together-time.webp",
          title: "Tijd samen, bijgehouden",
          body: "Home laat zien hoe lang je telefoon vandaag wegbleef, zodat je ziet hoeveel avond je terugkreeg.",
        },
      ],
    },
    author: {
      heading: "Waarom ik Oyno maakte",
      paragraphs: [
        "Zonder mijn dochter was er geen Oyno geweest. En ook niet als telefoons ons niet zo goed vast waren gaan houden.",
        "Ik werk de hele dag. Dan kom ik thuis en grijp ik naar mijn telefoon. Het is maar een seconde. Ik haat mezelf om die seconde.",
        "Mijn dochter ziet het. Ze denkt dat het zo hoort. Dat is niet zo.",
        "Ik probeerde blockers. Ik verwijderde social media. De gewoonte bleef. Ik pakte mijn telefoon, zag het vergrendelde scherm en legde hem weer neer. Voor mij was dat niks. Voor haar zat ik wéér op mijn telefoon.",
        "Dus stopte ik met vechten tegen die gewoonte. Ik gaf hem iets beters te doen.",
        "Oyno betekent ‘speel’ in de taal van het land waar ik geboren ben. Als ik nu mijn telefoon pak, krijg ik een spelletje om met haar te spelen. Het is leuk, en het helpt haar hersenen groeien.",
        "Het kostte maanden. Het is niet weer een blocker. Het is geen ademhalingsoefening en geen meditatie. Het is tien minuten met je kind, met een spelletje waar onderzoek achter staat.",
      ],
      name: "Tim",
      role: "Maker van Oyno",
      photoAlt: "Een ouder en een klein meisje op de vloer van de woonkamer bij een gloeiende planeet van klei",
    },
    plan: {
      eyebrow: "Eén abonnement, alles erin",
      pitch: "Gezinstijd, elke avond een nieuw spelletje en alle werelden die je gezin vrijspeelt. Altijd opzegbaar.",
      monthly: "Maandelijks",
      yearly: "Jaarlijks",
      cta: "Aan de slag",
      appNote: "Oyno is een iPhone-app. Neem hier of in de app een abonnement en log daarna in met hetzelfde account.",
    },
    closer: {
      heading: "Vanavond, tien minuten.",
      body: "Instellen kost een minuut, en het eerste spelletje staat al klaar voor het eten.",
    },
  },

  pricing: {
    meta: {
      title: "Prijzen | Oyno",
      description: "Wat Oyno kost, op het web en in de App Store.",
    },
    eyebrow: "Prijzen",
    heading: "Eén abonnement. Twee manieren om te betalen.",
    intro: "Allebei geven ze je hetzelfde Oyno. Kies de deur waar je al voor staat.",
    web: {
      eyebrow: "Op het web",
      perMonth: " / maand",
      orYearly: (yearly) => `of ${yearly} / jaar`,
      cta: "Aan de slag",
      note: "Gefactureerd door Dodo Payments, onze merchant of record. De prijzen zijn inclusief de belasting die je land heft. Altijd opzegbaar.",
    },
    app: {
      eyebrow: "In de App Store",
      headline: "3 dagen gratis",
      sub: "Daarna rekent Apple af tegen de prijs in de App Store.",
      note: "De proefperiode is de introductieaanbieding van Apple en beheer je bij de abonnementen van je Apple Account.",
    },
    body: (
      <>
        <h2>Wat zit erin</h2>
        <p>
          Gezinstijd (de apps die je kiest gaan op je telefoon op pauze op de tijden die je
          instelt), elke avond een nieuw spelletje, de timer en alle werelden die je gezin
          vrijspeelt. Er is geen gratis versie, en binnen het abonnement hoef je niets bij te kopen.
        </p>
        <h2>Geld terug</h2>
        <p>
          Op het web een abonnement genomen en is het niks voor jou? Mail binnen 14 dagen na de
          betaling naar {SUPPORT} en je krijgt het volledige bedrag terug. Aankopen in de App Store
          worden door Apple terugbetaald via{" "}
          <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.
        </p>
      </>
    ),
  },

  support: {
    meta: {
      title: "Hulp | Oyno",
      description: "Hoe je ons bereikt, en antwoorden op de vragen die het vaakst langskomen.",
    },
    eyebrow: "Hulp",
    heading: "Waarmee kunnen we helpen?",
    intro: (
      <>
        Mail naar{" "}
        <a className="text-highlight" href="mailto:tim@oyno.app">
          tim@oyno.app
        </a>
        . Je krijgt antwoord van een echt mens, meestal binnen een dag.
      </>
    ),
    body: (
      <>
        <h2>Een app die ik heb gepauzeerd, gaat toch open</h2>
        <p>
          Controleer in <strong>Instellingen → Schermtijd</strong> of Oyno toegang heeft tot
          Schermtijd, en of de app in je lijst staat onder <strong>Gezinstijd → Op pauze</strong>.
          Apps die je op je telefoon zet nadat je de lijst hebt gemaakt, staan er pas in als je ze
          toevoegt.
        </p>
        <h2>Ik heb mijn telefoon nodig tijdens Gezinstijd</h2>
        <p>
          Telefoon, Berichten en Kaarten gaan nooit op pauze. Voor al het andere houd je{" "}
          <strong>Niet nu</strong> ingedrukt: je apps gaan 20 minuten open, daarna gaat Gezinstijd
          weer verder.
        </p>
        <h2>Ik heb een abonnement op het web genomen. Hoe kom ik erin?</h2>
        <p>
          Installeer Oyno uit de App Store en log in met hetzelfde e-mailadres of hetzelfde Apple-,
          Google- of Facebook-account dat je hier gebruikte. Je abonnement staat er al op.
        </p>
        <h2>Hoe zeg ik op?</h2>
        <p>
          In de app: <strong>Profiel → Beheer abonnement</strong>. Een abonnement van het web kun
          je ook opzeggen via de link in je betaalbewijs van Dodo Payments. Een App Store-abonnement
          zeg je op bij de abonnementen van je Apple Account.
        </p>
        <h2>Hoe verwijder ik mijn account?</h2>
        <p>
          In de app: <strong>Profiel → Verwijder account</strong>. Lees{" "}
          <Link href={`${to("privacy")}#delete`}>wat er dan wordt verwijderd</Link>.
        </p>
      </>
    ),
  },

  privacy: {
    meta: {
      title: "Privacy | Oyno",
      description: "Wat Oyno bewaart, wat het nooit ziet en hoe je alles verwijdert.",
    },
    eyebrow: "Privacy",
    heading: "Je avonden zijn van jou",
    updatedLabel: "Laatst bijgewerkt",
    updated: UPDATED,
    body: (
      <>
        <p>
          Oyno wordt geëxploiteerd door Teimur Gasanov. Het is een iPhone-app die de apps die een
          ouder kiest pauzeert tijdens de uren die die ouder instelt, en korte spelletjes voorstelt
          om met het kind te spelen. Op deze pagina staat wat de app en deze website opslaan,
          waarom, en hoe je het verwijdert.
        </p>

        <h2>Wat we opslaan</h2>
        <h3>Je account</h3>
        <p>
          Een e-mailadres en, als je inlogt met Apple, Google of Facebook, de identificatiecode
          die die partij ons geeft, samen met de naam en het e-mailadres die die partij deelt. Als
          je het verborgen adres van ‘Log in met Apple’ gebruikt, zien we uitsluitend het
          doorstuuradres.
        </p>
        <h3>Je rondjes</h3>
        <p>
          Elk rondje dat je speelt, hoe lang het duurde en welk spelletje het was, blijft op je
          telefoon. Zodat je planeet bewaard blijft op een nieuwe telefoon of na een herinstallatie,
          maken we bij je account een back-up van twee totalen: hoeveel rondjes je hebt gespeeld
          en hoeveel minuten. Niets daarvan identificeert een kind: Oyno vraagt nooit naar de
          naam, de leeftijd of een foto van je kind. De antwoorden die je geeft op de vragen op
          deze website (bijvoorbeeld een leeftijdscategorie) worden bij je abonnementsgegevens
          opgeslagen, zodat we kunnen zien welke vragen leiden tot spelletjes die mensen blijven
          spelen.
        </p>
        <h3>Je abonnement</h3>
        <p>
          Als je het abonnement in de app hebt afgesloten: de transactie-ID van Apple, het
          product, de vervaldatum en of het abonnement actief is. Als je het abonnement op het web
          hebt afgesloten: Dodo Payments is de merchant of record en bewaart je kaartgegevens, die
          wij nooit zien. Wij slaan de klant- en abonnements-ID’s op die Dodo ons geeft, de status
          en het einde van de betaalde periode.
        </p>
        <h3>Productanalyse</h3>
        <p>
          Via Amplitude registreren we welke schermen worden geopend en welke acties worden
          uitgevoerd (een rondje gestart, een betaalscherm gezien), om te ontdekken waar de app
          verwarrend is.
        </p>
        <h3>Advertenties</h3>
        <p>
          Deze website laadt de Meta-pixel om te meten welke advertenties mensen opleveren die een
          abonnement nemen. Als een abonnement start, sturen we Meta een gehasht e-mailadres, zodat
          de conversie kan worden gekoppeld. Het hashen gebeurt op onze server, nooit in je
          browser.
        </p>

        <h2>Wat je telefoon nooit verlaat</h2>
        <p>
          Oyno gebruikt de Schermtijd-API van Apple om apps te pauzeren. Apple geeft de app
          ondoorzichtige tokens voor de apps die je kiest, niet hun namen, en die tokens blijven op
          het apparaat. We zien nooit welke apps je gebruikt, hoe lang je ze gebruikt, wat je
          bekijkt op internet, je berichten, je locatie, je contacten of je foto’s.
        </p>

        <h2>Wie het nog meer ziet</h2>
        <ul>
          <li>
            <strong>Supabase</strong>: de database en de inlogdienst.
          </li>
          <li>
            <strong>Vercel</strong>: hosting van deze website en van de API waarmee de app
            communiceert.
          </li>
          <li>
            <strong>Dodo Payments</strong>: merchant of record voor abonnementen op het web.
          </li>
          <li>
            <strong>Amplitude</strong>: productanalyse.
          </li>
          <li>
            <strong>Resend</strong>: de inlogcodes die we je mailen.
          </li>
          <li>
            <strong>Meta</strong>: advertentiemeting, zoals hierboven beschreven.
          </li>
        </ul>
        <p>We verkopen je gegevens niet en delen ze niet met databrokers.</p>

        <h2 id="delete">Alles verwijderen</h2>
        <p>
          In de app: <strong>Profiel → Verwijder account</strong>. Daarmee worden je account, de
          totalen waarvan we een back-up maken en de rondjes op je telefoon direct gewist, en dat
          kan niet ongedaan worden gemaakt.
        </p>
        <p>
          Ingelogd met Facebook? Je kunt Oyno ook op Facebook verwijderen onder{" "}
          <strong>Instellingen en privacy → Instellingen → Apps en websites</strong>. Dan deelt
          Facebook verder niets meer met ons; de stap hierboven wist je gegevens.
        </p>
        <p>
          Als je je account verwijdert, wordt je abonnement niet opgezegd. Zeg het eerst op (zie{" "}
          <Link href={to("support")}>Hulp</Link>) en verwijder daarna je account. Of mail naar{" "}
          {SUPPORT}, dan regelen wij allebei en laten we het je weten.
        </p>

        <h2>Je rechten</h2>
        <p>
          Je kunt je gegevens inzien, corrigeren, exporteren en wissen, en bezwaar maken tegen de
          verwerking ervan. Mail naar {SUPPORT} voor alles wat de app niet rechtstreeks doet.
        </p>

        <h2>Kinderen</h2>
        <p>
          Oyno is voor ouders. Accounts zijn voor volwassenen, en de app verzamelt niets van of
          over het kind met wie de app je helpt te spelen.
        </p>
      </>
    ),
  },

  terms: {
    meta: {
      title: "Voorwaarden | Oyno",
      description: "De voorwaarden voor het gebruik van Oyno en voor het abonnement dat op deze site wordt verkocht.",
    },
    eyebrow: "Gebruiksvoorwaarden",
    heading: "Voorwaarden",
    updatedLabel: "Laatst bijgewerkt",
    updated: UPDATED,
    body: (
      <>
        <p>
          Deze voorwaarden gelden voor de Oyno-app en deze website, die allebei worden
          geëxploiteerd door Teimur Gasanov. Door een van beide te gebruiken, ga je akkoord met
          deze voorwaarden.
        </p>

        <h2>Wat Oyno is</h2>
        <p>
          Een hulpmiddel dat apps die jij kiest op je eigen iPhone pauzeert tijdens uren die jij
          instelt, korte spelletjes voorstelt om met je kind te spelen en bijhoudt welke rondjes je
          speelt. De spelletjes zijn suggesties. Jij beslist of een spelletje veilig en geschikt is
          voor je kind en je omgeving, en jij houdt er toezicht op.
        </p>

        <h2>Je account</h2>
        <p>
          Je hebt een account nodig, zodat een abonnement dat je op het web koopt je in de app
          terugvindt. Houd je inloggegevens voor jezelf. Je kunt je account op elk moment
          verwijderen via <strong>Profiel → Verwijder account</strong>.
        </p>

        <h2>Abonnementen</h2>
        <h3>Gekocht op deze website</h3>
        <p>
          De betaling wordt afgehandeld door Dodo Payments, de merchant of record, waarvan de
          voorwaarden op de transactie van toepassing zijn. Abonnementen worden automatisch
          verlengd met de door jou gekozen termijn totdat je opzegt. Prijzen worden vóór de
          betaling in je eigen valuta getoond en zijn inclusief alle belastingen die Dodo moet
          innen. Als Oyno niets voor je is, kun je binnen 14 dagen na een betaling via {SUPPORT}{" "}
          om volledige terugbetaling vragen.
        </p>
        <h3>Gekocht in de app</h3>
        <p>
          Apple handelt de betaling af onder zijn eigen voorwaarden, waaronder de standaard
          eindgebruikerslicentieovereenkomst van Apple voor gelicentieerde apps. De gratis
          proefperiode van 3 dagen is de introductieaanbieding van Apple; als je niet opzegt
          voordat die afloopt, brengt Apple het door jou gekozen abonnement in rekening en verlengt
          het dat totdat je opzegt bij de abonnementen van je Apple Account. Over terugbetalingen
          beslist Apple.
        </p>
        <h3>Als een abonnement afloopt</h3>
        <p>
          Je planeet en je eerdere rondjes blijven. Gezinstijd en nieuwe spelletjes stoppen totdat
          je opnieuw een abonnement neemt.
        </p>

        <h2>Wijzigingen en beschikbaarheid</h2>
        <p>
          We verbeteren Oyno voortdurend en kunnen functies wijzigen of verwijderen. Als een
          wijziging iets wegneemt waarvoor je hebt betaald, mail dan naar {SUPPORT} en dan maken we
          het goed. We doen ons best om de dienst draaiende te houden, maar kunnen niet beloven dat
          die nooit wordt onderbroken.
        </p>

        <h2>Aansprakelijkheid</h2>
        <p>
          Oyno wordt geleverd ‘zoals het is’. Voor zover de wet dat toestaat, is onze
          aansprakelijkheid voor elke vordering beperkt tot het bedrag dat je ons in de 12 maanden
          voorafgaand aan die vordering hebt betaald. Niets hierin beperkt de rechten die je hebt op
          grond van het consumentenrecht.
        </p>

        <h2>Contact</h2>
        <p>
          Vragen over deze voorwaarden: {SUPPORT}. In ons{" "}
          <Link href={to("privacy")}>privacybeleid</Link> lees je hoe we met je gegevens omgaan.
        </p>
      </>
    ),
  },
};
