import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../winter-evening-games";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Giochi per le sere buie d’inverno",
  description:
    "Giochi che usano il buio: una lampada, la torcia del telefono e una stanza silenziosa. Idee per neonati e bambini fino a 5 anni, e un modo per giocare con due età insieme.",
  body: (
    <>
      <p>
        Quando fa buio prima di cena, tutta la serata si svolge in casa. Lavoro tutto il giorno, torno a casa e la mano va
        al telefono. I giochi qui sotto danno al telefono un altro compito: fare da torcia.
      </p>
      <p>
        Usano il buio stesso. Una lampada che si spegne e si riaccende, una lucina sul muro, una stanza silenziosa in cui
        ascoltare. Sono divisi per età, con una sezione finale per due bambini di età diverse.
      </p>

      <h2>Per un neonato: la lampada e la lucina</h2>
      <p>
        <GameLink id="lamp-off-lamp-on" /> va bene dai 2 mesi. Siediti con il bambino in braccio vicino a una lampada a
        portata di mano. Di’ “spenta” piano e spegnila, aspetta che la cerchi con gli occhi, poi di’ “accesa” e
        riaccendila. Allunga un po’ il buio ogni volta, e tieni la voce dolce.
      </p>
      <p>
        È il cucù con una lampada. Quando i ricercatori hanno spezzato i tempi del cucù con bambini da 2 a 6 mesi, i
        bambini hanno reagito <Cite id="rochat-1999" />.
      </p>
      <p>
        <GameLink id="light-spot-hunt" /> va bene dai 5 mesi, in una cameretta in penombra con il bambino in braccio.
        Punta la torcia del telefono sul muro e aspetta che il tuo bambino trovi la lucina. Falla scivolare piano lungo il
        muro, poi spegnila e chiedi “dov’è finita?”. Riaccendila in un punto nuovo e lascia che la trovi prima di
        spostarla ancora. Bambini da cinque mesi e mezzo a sei mesi e mezzo ritrovavano un giocattolo dopo una breve
        attesa <Cite id="reznick-2004" />.
      </p>

      <h2>Per un bambino piccolo: una stella sul soffitto</h2>
      <p>
        <GameLink id="ceiling-star-spot" /> va bene da 1 anno. Sdraiatevi fianco a fianco in una cameretta buia, punta la
        torcia sul soffitto e fai scivolare piano la lucina. Il tuo bambino segue la stella con gli occhi, e quando si
        ferma, la indica. Spegni la torcia, chiedi “dov’era?” e lascia che la indichi prima di riaccendere per
        controllare.
      </p>
      <p>
        Harvard chiama questo tipo di gioco “serve and return”, botta e risposta: condividi l’attenzione del tuo bambino,
        dai un nome a ciò che vede, fate a turno e aspetta <Cite id="serve-return" />.
      </p>
      <p>
        <GameLink id="goodnight-room-dark" /> è per bambini dai 2 anni in su. Date la buonanotte insieme a tre cose della
        stanza, tipo la lampada, la sedia e l’orsetto, indicandole una per una. Spegni la luce e chiedi “dov’è la
        lampada?”, così il tuo bambino la indica al buio. Riaccendi per controllare, poi chiedi le altre due. In uno
        studio, i bambini di due anni ricordavano quali vasetti avevano già svuotato <Cite id="hughes-ensor-2005" />.
      </p>

      <h2>Dai 2 anni in su: statuine al buio</h2>
      <p>
        <GameLink id="spot-chase" /> è quello per l’energia avanzata. Abbassa le luci, punta la torcia sul pavimento e
        lascia che il tuo bambino pesti la macchia luminosa. Sposta la luce mentre la insegue. Quando spegni la torcia,
        tutti restano immobili finché non torna. Poi passagli la torcia e insegui tu la luce.
      </p>
      <p>
        In uno studio durato anni, a bambini da 22 a 45 mesi veniva chiesto di fermarsi e ripartire a un segnale, oltre
        che di aspettare e sussurrare <Cite id="kochanska-2000" />. Qui il segnale è il buio.
      </p>

      <h2>Per un bambino in età prescolare: scie e interruttori</h2>
      <p>
        <GameLink id="torch-trail" /> si fa da sdraiati. Abbassa le luci e illumina con la torcia tre cose, una dopo
        l’altra. Spegnila, e il tuo bambino dice le tre cose nello stesso ordine. Aggiungi una quarta, poi passagli la
        torcia così ti mette alla prova.
      </p>
      <p>
        <GameLink id="sun-moon-switch" /> richiede che tu stia vicino all’interruttore. Luce accesa vuol dire che il tuo
        bambino dice “notte” e si raggomitola. Luce spenta vuol dire che dice “giorno” e si stiracchia sveglio. Premi
        l’interruttore nei momenti più strani, prima piano e poi veloce. Poi scambiatevi, e sbaglia apposta. Dire giorno
        per notte è uno dei compiti che i ricercatori hanno dato a bambini da 2 a 6 anni <Cite id="carlson-2005" />.
      </p>
      <p>
        Per la fine più quieta della serata, <GameLink id="five-sounds" /> non richiede nessuna luce. Sdraiatevi immobili
        insieme a occhi chiusi. Ogni volta che uno dei due sente un suono, sussurra cos’era e alza un dito. Fermatevi a
        cinque, e decidete insieme qual era il suono più leggero.
      </p>

      <h2>Due bambini, una torcia</h2>
      <p>
        La macchia di luce finisce con il tuo bambino che tiene la torcia. Un fratello più grande può prendersi quel
        compito per tutto il gioco mentre un neonato o un bambino piccolo cerca la lucina, come nella Lucina sul muro o
        nella Stella sul soffitto. Tu resti sul pavimento tra loro e dai i nomi alle cose.
      </p>
      <p>
        Tieni il fascio di luce su muri, soffitti e pavimenti, lontano dai visi. Usa il telefono solo come luce, e mettilo
        a faccia in giù quando il gioco è finito.
      </p>
      <p>
        Ne trovi altri nei <Link href="/games/tag/lights">giochi con le luci</Link>, nei{" "}
        <Link href="/games/tag/quiet">giochi tranquilli</Link> e nei{" "}
        <Link href="/games/tag/bedtime">giochi prima della nanna</Link>.
      </p>
    </>
  ),
};
