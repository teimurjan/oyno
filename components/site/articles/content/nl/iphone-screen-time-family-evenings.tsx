import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../iphone-screen-time-family-evenings";

const { Link, GameLink } = linksIn("nl");

export const article: Article = {
  ...english,
  title: "Zo stel je Schermtijd op je iPhone in voor de avond met je gezin",
  description:
    "Stap voor stap: stel Schermtijd in op je eigen iPhone zodat de avond met je kind van jou blijft, plus wat het niet kan en wat je in plaats daarvan speelt.",
  body: (
    <>
      <p>
        Deze gids gaat over jouw telefoon, niet die van je kind. Kom je moe thuis en vult je telefoon het uur voor
        bedtijd, dan kan Schermtijd op je eigen iPhone een hek om dat uur zetten. Het is gratis, het staat al op je
        telefoon, en je kunt het vanavond instellen.
      </p>
      <p>
        Het is de moeite waard. In één experiment voelden ouders in een wetenschapsmuseum die gevraagd werden hun
        telefoon veel te gebruiken zich meer afgeleid en minder verbonden met hun kinderen dan ouders die gevraagd
        werden hem weinig te gebruiken <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>
        De stappen hieronder volgen Apples eigen supportpagina’s voor iOS 27, de nieuwste versie die Apple beschrijft.
        Draait je iPhone iOS 26 of ouder, dan hebben de menu’s andere namen, en tegen het eind staat een stuk voor jou.
      </p>

      <h2>Wat er veranderde in iOS 27</h2>
      <p>
        Oudere gidsen hebben het over Apparaatvrije tijd en Applimieten. Voor iOS 27 beschrijft Apples gids in plaats
        daarvan twee hulpmiddelen. <strong>Schermtijdschema’s</strong> bepalen wanneer op de dag je je apps kunt
        gebruiken. <strong>Tijdslimieten</strong> bepalen hoe lang je ze per dag kunt gebruiken, per categorie, zoals
        Amusement, Games of Sociale netwerken. Apples eigen voorbeeld is een schema met tijdvakken voor werk, het
        avondeten en de avond (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Apple Support: Schema’s en tijdslimieten instellen
        </a>
        ).
      </p>
      <p>
        Apple meldt dat deze functies iOS 27 of nieuwer vragen op al je Apple-apparaten. Staat je iPad of Mac nog op
        een oudere versie, werk die dan eerst bij, anders kloppen de stappen hieronder misschien niet met wat je ziet.
      </p>

      <h2>Stap 1: Zet Schermtijd aan en bekijk je week</h2>
      <p>
        Open de app Instellingen en tik op Schermtijd. Tik op Beheer Schermtijd en dan op Schakel app- en
        websiteactiviteit in (
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Apple Support: Schermtijd voor jezelf instellen
        </a>
        ).
      </p>
      <p>
        Gebruik je het al een tijdje, kijk dan eerst voor je iets verandert. Tik op Daggemiddelde en dan op Week. Scrol
        omlaag naar Opgepakt om te zien hoe vaak je je telefoon pakte. Noteer de twee of drie apps die je het meest
        gebruikt. Dat zijn de apps waar je zo een hek omheen zet.
      </p>
      <p>
        Het echte getal kan hoger zijn dan je schat. In één onderzoek pakten jongvolwassenen van wie de telefoon het
        gebruik bijhield hem zo’n 85 keer per dag op en gebruikten ze hem zo’n vijf uur, ongeveer twee keer zoveel als
        ze schatten <Cite id="andrews-2015" />.
      </p>
      <p>
        Gebruik je ook een iPad of Mac, dan laat Apple je deze instellingen daarop delen. Tik op Beheer Schermtijd en zet
        Deel tussen apparaten aan. Staat dat aan, dan geldt het schema dat je hieronder instelt op al je apparaten, zodat
        de avond niet naar de iPad verhuist.
      </p>

      <h2>Stap 2: Stel tijdslimieten in voor de apps die het hardst trekken</h2>
      <p>
        Tijdslimieten werken per categorie. Je kunt de apps in een categorie gebruiken tot ze de limiet van die
        categorie of je dagtotaal bereiken, wat het eerst komt.
      </p>
      <ol>
        <li>Ga naar Instellingen, tik op Schermtijd en dan op Tijdslimieten.</li>
        <li>Tik op Beheer categorieën, tik op de knop om toe te voegen en kies een categorie, zoals Sociale netwerken of Amusement.</li>
        <li>Tik terug onder Tijdslimieten op de categorie en sleep de schuifknop om in te stellen hoe lang je per dag krijgt.</li>
        <li>
          Wil je zien welke apps in een categorie zitten, tik dan op Beheer categorieën en daarna op de categorie. Daar
          zie je ook je gemiddelde dagelijkse gebruik, en je kunt op een app tikken om het gebruik van die app te zien.
        </li>
      </ol>
      <p>
        Begin met de apps uit stap 1. Wees eerlijk over welke de avond opeten.
      </p>
      <p>
        Eén detail doet ertoe als je in een browser scrolt. Volgens Apple geldt de tijdslimiet voor allebei als een app
        een bijbehorende website opgeeft. Een app beperken kan dus ook de website ervan beperken.
      </p>

      <h2>Stap 3: Geef de avond een eigen tijdvak</h2>
      <p>
        Dit is het deel dat het uur met je kind beschermt. Je maakt een schema, en daarin een tijdvak dat jullie
        gezinsavond dekt.
      </p>
      <ol>
        <li>Ga naar Instellingen, tik op Schermtijd, tik op Schermtijdschema en zet Schema aan.</li>
        <li>Tik op Voeg schema toe, tik op de dagen die je wilt, zoals maandag tot en met vrijdag, en bevestig.</li>
        <li>Tik op het tijdvak. Tik op de naam en noem het iets eenvoudigs, zoals ‘Avond’.</li>
        <li>Tik op de begin- en eindtijd en zet ze op de uren dat je thuis bent met je kind.</li>
        <li>
          Tik onder het tijdvak op de categorieën van Tijdslimieten die je dan beschikbaar wilt hebben. Laat de
          categorieën weg die je in stap 2 hebt ingesteld voor de apps die het hardst trekken.
        </li>
      </ol>
      <p>
        Elk tijdvak toont symbolen voor de categorieën die het toestaat, zodat je in één oogopslag ziet welke soorten
        apps ’s avonds open zijn. Zien je weekenden er anders uit, voeg dan een tweede schema toe voor zaterdag en
        zondag met eigen uren.
      </p>
      <p>
        Terug in Tijdslimieten heeft Apple ook een schakelaar die Volg Schermtijdschema heet. Zet die aan als je wilt dat
        je limieten alleen gelden op bepaalde tijden in je schema.
      </p>
      <p>
        Kies uren die je kunt volhouden, zoals van het avondeten tot bedtijd. Dat past bij wat de American Academy of
        Pediatrics gezinnen aanraadt: houd slaapkamers, maaltijden en speeltijd van ouder en kind schermvrij, voor
        kinderen en voor ouders <Cite id="aap-media-2016" />.
      </p>

      <h2>Stap 4: Kies wat toegestaan blijft</h2>
      <p>
        Sommige apps moet je nooit afschermen. Je partner moet je kunnen bereiken. De oppas moet je kunnen bereiken.
        Misschien wil je Kaarten, de camera of een gezondheidsapp.
      </p>
      <ol>
        <li>Ga naar Instellingen, tik op Schermtijd en dan op Altijd toegestaan.</li>
        <li>Tik op Voeg personen toe om de contacten toe te voegen die jij altijd kunt bereiken en die jou altijd kunnen bereiken.</li>
        <li>Tik op Voeg apps toe om de apps toe te voegen die open blijven, wat het schema ook zegt.</li>
      </ol>
      <p>
        Volgens Apple blijven apps en contacten op deze lijst beschikbaar, los van elk schema of elke limiet die je
        instelt. Apples eigen voorbeelden zijn familieleden en de app Gezondheid, voor noodgevallen. Houd de lijst
        kort. Elke app erop is een deur die open blijft.
      </p>

      <h2>Stap 5: Zet er een toegangscode op</h2>
      <p>
        Met een toegangscode voor Schermtijd moet je een code typen voor je de instellingen hierboven kunt wijzigen (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Apple Support: Een toegangscode voor Schermtijd aanmaken, wijzigen of verwijderen
        </a>
        ).
      </p>
      <ol>
        <li>Ga naar Instellingen, tik op Schermtijd, tik op Beheer Schermtijd en dan op Vergrendel Schermtijd-instellingen.</li>
        <li>Typ een toegangscode van vier cijfers en typ hem nog een keer om te bevestigen.</li>
      </ol>
      <p>
        Nu het eerlijke deel. Je stelt deze toegangscode zelf in, dus je kent hem. Om acht uur ’s avonds, moe, met de
        bank en de telefoon vlak naast je, is een code die je kent een verkeersdrempel, geen muur.
      </p>
      <p>
        Daarom vragen sommige ouders hun partner om de code in te typen, zodat ze hem zelf niet kennen. Dat helpt. Maar
        Apple biedt ook Herstel van toegangscode voor Schermtijd, waarmee je de code met je Apple Account opnieuw
        instelt als je hem vergeet. Zet je dat aan, dan is de code van je partner voor jou één stap extra, geen slot.
        Bepaal wat je wilt.
      </p>

      <h2>Op iOS 26 of ouder: Apparaatvrije tijd en Applimieten</h2>
      <p>
        Is je iPhone nog niet naar iOS 27 overgestapt, dan hebben dezelfde ideeën oudere namen (
        <a href="https://support.apple.com/guide/iphone/set-schedules-with-screen-time-iphb0c7313c9/26/ios/26">
          Apple Support: Schema’s instellen met Schermtijd, iOS 26
        </a>
        ).
      </p>
      <ul>
        <li>
          <strong>Apparaatvrije tijd</strong> is het tijdvak voor de avond. Tik in Instellingen op Schermtijd, dan op
          Apparaatvrije tijd en dan op Gepland. Kies Elke dag of Pas dagen aan, en stel de begin- en eindtijd in. Apple
          stuurt vijf minuten voor het begin een herinnering.
        </li>
        <li>
          <strong>Applimieten</strong> zijn de tijdslimieten. Tik op Applimieten en dan op Voeg limiet toe, kies
          categorieën of losse apps, tik op Volgende en stel de tijd in.
        </li>
        <li>
          <strong>Altijd toegestaan</strong> werkt hetzelfde, voor contacten en apps.
        </li>
      </ul>
      <p>
        Eén addertje: volgens Apple kun je deze limieten standaard negeren zodra je ze bereikt. Heb je een toegangscode
        voor Schermtijd, dan kun je Blokkeer tijdens apparaatvrije tijd aanzetten, en dan gaan de apps tijdens
        Apparaatvrije tijd niet open. Staat het uit, dan zie je alleen een herinnering en kun je gewoon doorgaan.
      </p>

      <h2>Wat Schermtijd niet doet</h2>
      <p>
        Schermtijd is goed in één ding. Het zegt nee. Het zegt niet wat je in plaats daarvan kunt doen.
      </p>
      <p>
        Dit ken ik van mijn eigen avonden. Ik werk de hele dag, kom thuis en grijp naar mijn telefoon. Ik probeerde
        blockers. Ik verwijderde mijn social-media-apps. De gewoonte bleef. Een geblokkeerde app laat een gat in de
        avond achter, en Schermtijd vult dat niet.
      </p>
      <p>
        Het beleidsstuk van de AAP over jonge kinderen en media zegt hetzelfde vanaf de andere kant. Het merkt op dat
        veel gebruik van mobiele apparaten door ouders samenhangt met minder verbale en non-verbale uitwisseling tussen
        ouders en kinderen. Het vraagt kinderartsen om gezinnen te helpen met een mediaplan voor het gezin, met
        afspraken voor elk kind en elke ouder, en met ideeën om te spelen in plaats van schermen{" "}
        <Cite id="aap-media-2016" />. Een regel over de telefoon is een half plan. De andere helft is wat je met de
        tijd doet.
      </p>
      <p>
        Zorg dus dat de volgende tien minuten klaarstaan voordat het tijdvak begint. Ze hoeven niet slim te zijn. Ze
        moeten werken als je niets meer over hebt. Oyno gebruikt Schermtijd om de apps die jij kiest op pauze te zetten
        tijdens Gezinstijd, en geeft je een kort spelletje om in plaats daarvan te spelen.
      </p>

      <h2>Je eerste avond</h2>
      <p>
        Hier is een plan voor vanavond, op maat van een ouder die liever gaat liggen.
      </p>
      <ol>
        <li>Laat het tijdvak uit stap 3 over tien minuten beginnen.</li>
        <li>Leg je telefoon op een plank buiten bereik, scherm naar beneden, met het geluid aan voor als iemand belt.</li>
        <li>Kies één spelletje uit de lijst hieronder en speel het tot je kind niet meer lacht, niet langer.</li>
      </ol>
      <p>
        Probeer voor een baby <GameLink id="hands-peekaboo" />. Je gaat achterover liggen met je baby op je borst,
        bedekt je gezicht met beide handen en telt langzaam tot drie voor “Kiekeboe!”.
      </p>
      <p>
        Probeer voor een peuter vanaf 2 jaar <GameLink id="still-stone-mouse">Stil als een steen</GameLink>. Je kind ligt
        stil als een steen terwijl jouw hand als muisje dichterbij sluipt, en elke wiebel stuurt het muisje terug naar
        het begin. Of <GameLink id="touch-the-bear" />: jij bent een beer die slaapt op de bank, elke schreeuw laat je
        harder snurken, en alleen een hand op je poot maakt je wakker.
      </p>
      <p>
        Probeer voor een kleuter <GameLink id="belly-boat" />. Jullie liggen allebei op je rug met een klein speeltje op
        elke buik en ademen langzaam, zodat de bootjes stijgen en zakken. <GameLink id="sleepy-lion" /> en{" "}
        <GameLink id="day-says-night" /> lukken ook vanaf de bank.
      </p>
      <p>
        Er staan er meer bij de <Link href="/games/energy/low">spelletjes voor vermoeide ouders met weinig
        energie</Link>, en je kunt op leeftijd filteren bij de{" "}
        <Link href="/games/age/toddlers">spelletjes voor peuters</Link> of de{" "}
        <Link href="/games/age/preschoolers">spelletjes voor kleuters</Link>. Twijfel je nog tussen Schermtijd en een
        app erbovenop, lees dan{" "}
        <Link href="/blog/screen-time-vs-app-blockers">Schermtijd, appblockers en Oyno</Link>.
      </p>
      <p>
        Geef de instellingen een week voor je ze verandert. Begint het tijdvak te vroeg, verschuif het dan. Glipt een app
        steeds terug via Altijd toegestaan, haal hem dan van de lijst.
      </p>
    </>
  ),
};
