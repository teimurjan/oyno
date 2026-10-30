import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../screen-time-vs-app-blockers";

const { Link, GameLink } = linksIn("nl");

export const article: Article = {
  ...english,
  title: "Schermtijd, appblockers en Oyno: wat elk doet voor ouders",
  description:
    "Een eerlijke vergelijking van Apples Schermtijd, appblockers en Oyno voor ouders die hun avond terug willen, met wat elk ervan niet doet.",
  body: (
    <>
      <p>
        Je wilt de telefoon uit het uur dat je met je kind doorbrengt. Daar zijn op een iPhone drie soorten hulpmiddelen
        voor: de Schermtijd-instellingen die Apple inbouwt, apps die gemaakt zijn om andere apps te blokkeren, en Oyno,
        dat ik maak. Dit is een eerlijke blik op elk ervan, ook op waar Oyno de verkeerde keuze is.
      </p>
      <p>
        Het doel is een hulpmiddel waard. De American Academy of Pediatrics raadt aan om maaltijden en speeltijd van
        ouder en kind schermvrij te houden, voor ouders én kinderen, en zegt dat ouders in die tijd ‘niet storen’ op hun
        telefoon kunnen aanzetten <Cite id="aap-media-2016" />.
      </p>

      <h2>Apples Schermtijd</h2>
      <p>
        Schermtijd staat al op je iPhone en kost niets. Op iOS 27 stel je een <strong>Schermtijdschema</strong> in met
        tijdvakken, zoals een tijdvak voor de avond, en <strong>Tijdslimieten</strong> die begrenzen hoe lang je
        categorieën apps gebruikt, zoals Sociale netwerken of Games. Een lijst <strong>Altijd toegestaan</strong> houdt
        gekozen personen en apps open, wat het schema ook zegt (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Apple Support: Schema’s en tijdslimieten instellen
        </a>
        ). Een toegangscode van vier cijfers voor Schermtijd voorkomt dat je die instellingen zonder code wijzigt (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Apple Support: Toegangscode voor Schermtijd
        </a>
        ).
      </p>
      <p>
        Wat het goed doet: het is gratis, het is ingebouwd, en het kan ook je iPad en Mac dekken als je Deel tussen
        apparaten aanzet. Volgens Apple geldt een tijdslimiet ook voor de website van een app als de app er een opgeeft.
      </p>
      <p>
        Wat het niet doet: het zegt nee, en dat is alles. Begint het tijdvak, dan vertelt niets je wat je met de tijd
        kunt doen. En stel je de toegangscode zelf in, dan ken je hem. Onze{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">stapsgewijze gids voor Schermtijd</Link> behandelt de
        instellingen en het probleem met de toegangscode.
      </p>

      <h2>Appblockers en focusapps</h2>
      <p>
        In de App Store staan veel apps die gemaakt zijn om andere apps te blokkeren of te beperken. Ze verschillen
        onderling sterk, dus dit stuk geeft je vragen om te stellen, geen oordelen. Controleer voor je er voor een
        betaalt:
      </p>
      <ul>
        <li>Is het voor je eigen telefoon, of is het ouderlijk toezicht voor het apparaat van een kind?</li>
        <li>Kun je de dagen en uren instellen, of alleen met de hand een sessie starten?</li>
        <li>Wat gebeurt er als je een geblokkeerde app opent, en hoe makkelijk kom je erlangs?</li>
        <li>Blokkeert het websites, apps of allebei?</li>
        <li>Geeft het je iets te doen in de tijd die het vrijmaakt?</li>
      </ul>
      <p>
        Ik probeerde zelf blockers, en ik verwijderde mijn social-media-apps. De gewoonte bleef. Dat is geen oordeel over
        welke app dan ook. Het is de reden dat de laatste vraag op dat lijstje voor mij telt.
      </p>

      <h2>Oyno</h2>
      <p>
        Oyno is een iOS-app voor ouders van kinderen van 0 tot 5. Het gebruikt Apples Schermtijd op je eigen iPhone. Je
        stelt Gezinstijd in: de dagen, de begin- en eindtijd, en zoveel schema’s als je nodig hebt. Tijdens Gezinstijd
        staan de apps die je koos op pauze. Je kiest welke apps altijd toegestaan zijn en welke nooit, en er is een pauze
        van 20 minuten: ‘Niet nu’.
      </p>
      <p>
        Een gepauzeerde app toont het scherm van Oyno. De knop ‘Open Oyno’ leidt naar een spelletje. Er zijn er 500, in
        drie leeftijdsgroepen en voor een lege, halfvolle of volle batterij, elk 5 tot 15 minuten lang, en achter elk
        spelletje staan een onderzoek en een gids. Een schema kan je apps een tijdje openzetten nadat jij en je kind een
        rondje hebben gespeeld. Elk rondje laat de kleine planeet van je gezin groeien. Oyno vraagt niet om de naam of
        een foto van je kind.
      </p>
      <p>
        Het idee is dat de blokkade en het spelletje samen komen. In één experiment voelden ouders in een
        wetenschapsmuseum die gevraagd werden hun telefoon veel te gebruiken zich meer afgeleid en minder verbonden met
        hun kinderen dan ouders die gevraagd werden hem weinig te gebruiken <Cite id="kushlev-dunn-2019" />. Het antwoord
        van Oyno is iets neerzetten in de ruimte die de telefoon openlaat.
      </p>

      <h2>Wat Oyno niet doet</h2>
      <ul>
        <li>
          <strong>Het is alleen voor iOS.</strong> Er is geen Android-versie.
        </li>
        <li>
          <strong>Het is voor jouw telefoon, niet die van je kind.</strong> Het is geen ouderlijk toezicht voor het
          apparaat van een kind. Daarvoor heeft Apple een eigen gids,{" "}
          <a href="https://support.apple.com/guide/child-safety/welcome-r1jy0rk9vfz8/web">
            Apple-apparaten voor kinderen en gezinnen
          </a>
          .
        </li>
        <li>
          <strong>Het blokkeert geen websites.</strong> Het zet apps op pauze. Is een website het probleem, gebruik dan
          Schermtijd zelf.
        </li>
        <li>
          <strong>Het is geen slot.</strong> De pauze ‘Niet nu’ zet je apps 20 minuten open. Het is een duwtje dat je
          voor jezelf instelt.
        </li>
        <li>
          <strong>Het is niet gratis.</strong> Het is een maand- of jaarabonnement, met 3 dagen gratis proberen in de
          App Store. Schermtijd kost niets.
        </li>
      </ul>

      <h2>Zo kies je</h2>
      <p>
        Begin met Schermtijd. Het is gratis, en een week ermee vertelt je veel. Houdt het tijdvak voor de avond stand en
        ben je tevreden, stop dan daar.
      </p>
      <p>
        Kijk naar een appblocker als je probleem vooral de werkdag, websites of een Android-telefoon is, want die dekt
        Oyno niet. Stel de vragen hierboven, en controleer of de app die je kiest jouw situatie dekt.
      </p>
      <p>
        Kijk naar Oyno als je kind jonger is dan 6, het uur dat je terug wilt het uur met je kind is, en alleen blokkeren
        niet bleef hangen omdat het gat dat het achterliet werd gevuld met iets anders op de telefoon.
      </p>
      <p>
        Wat je ook kiest, zorg voor een spelletje op de eerste avond. Probeer met een baby{" "}
        <GameLink id="babble-back" />: wacht op een geluidje en antwoord alsof het een echte zin was. Probeer met een
        peuter <GameLink id="pocket-kiss-hand" />, waarbij een kus zich verstopt in een van de vuistjes. Probeer met een
        kleuter <GameLink id="countdown-stop" /> of <GameLink id="sleepy-lion" />, die je liggend kunt spelen. Meer staan
        er bij de <Link href="/games/energy/low">spelletjes voor vermoeide ouders met weinig energie</Link>.
      </p>
    </>
  ),
};
