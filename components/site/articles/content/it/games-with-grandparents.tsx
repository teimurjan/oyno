import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-grandparents";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Giochi facili da fare con i nipotini per i nonni",
  description:
    "Giochi tranquilli che un nonno può fare da una sedia o con un neonato in braccio, senza niente da comprare. Idee per neonati e bambini fino a 5 anni.",
  body: (
    <>
      <p>
        Questa pagina è per due lettori. Se sei il genitore, è qualcosa da mandare a tua mamma o a tuo papà prima
        della prossima visita. Se sei il nonno o la nonna, è una breve lista di giochi da fare seduti, senza niente da
        comprare e niente da preparare.
      </p>
      <p>
        Ogni gioco qui dura da 5 a 10 minuti. Quasi tutti richiedono solo un grembo, una sedia e la tua voce.
      </p>

      <h2>Per il genitore: cosa passare ai nonni</h2>
      <p>
        Scegli due giochi adatti all’età del tuo bambino e manda i link in anticipo. Ogni gioco ha al massimo tre passi
        brevi, quindi si legge bene sul telefono. Due bastano per una visita.
      </p>
      <p>
        Di’ loro l’unica cosa che il tuo bambino adora in questo momento, tipo una canzone, un animale o una battuta.
        Tutti i giochi qui sotto possono accoglierla.
      </p>

      <h2>Per i nonni: tre abitudini</h2>
      <p>
        Il Center on the Developing Child di Harvard chiama il botta e risposta del gioco “serve and return”. Nota su
        cosa si concentra il bambino e condividilo. Rispondi. Dai un nome a ciò che vede o sente. Poi fate a turno, e
        aspetta <Cite id="serve-return" />. Nessuno di questi passi richiede gambe veloci o un giocattolo. Se il
        pavimento è duro per le ginocchia o la schiena, tutti i giochi qui sotto si fanno da una sedia o dal divano.
      </p>
      <ul>
        <li>
          <strong>Aspetta più di quanto ti sembri naturale.</strong> Dai a un bambino piccolo qualche secondo per
          rispondere.
        </li>
        <li>
          <strong>Lascia che guidi lui.</strong> Se cambia il gioco, gioca alla sua versione.
        </li>
        <li>
          <strong>Smetti finché è ancora divertente.</strong> Lo stesso gioco alla prossima visita è una bella cosa.
        </li>
      </ul>

      <h2>Con un neonato in braccio</h2>
      <p>
        L’American Academy of Pediatrics descrive come il gioco di un neonato cresca dai sorrisi sociali fino al botta e
        risposta, al cucù e a batti batti le manine <Cite id="aap-play" />. Tutti e due i giochi qui sotto si fanno in
        braccio.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> va bene dai 6 mesi. Chiedi “Dov’è il nasino?” e aspetta un respiro lento
        guardando il bambino in viso. Toccagli piano il naso e di’ “nasino”, poi fai lo stesso con orecchie, piedini e
        pancino. Dopo qualche giro, chiedi “E il mio naso dov’è?” e porta la sua manina sul tuo. In uno studio
        randomizzato, insegnare ai genitori a rispondere così a bambini da 6 a 10 mesi ha migliorato l’attenzione dei
        piccoli e la loro capacità di risolvere problemi da soli <Cite id="landry-2006" />.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> va bene dai 2 mesi, con i piedini nudi in grembo. Recita piano “Questo
        dice: ho fame”, un ditino per ogni verso. All’ultimo ditino fermati e tieni il piedino fermo contando piano fino
        a tre. Poi fai correre le dita fino al pancino con un solletico e ricomincia dall’altro piede.
      </p>

      <h2>Con un bambino piccolo</h2>
      <p>
        <GameLink id="you-say-three" /> è un saltello sulle ginocchia con un buco dentro. Fai saltellare il nipotino
        sulle ginocchia e conta “uno, due”, poi fermati di colpo con le mani in aria. Aspetta, sopracciglia alzate, che
        dica “tre”, poi dagli il saltello più grande di tutti. Bambini da 9 a 18 mesi che facevano giochi a turno con un
        adulto segnalavano quando l’adulto saltava il proprio turno <Cite id="ross-lollis-1987" />. Qui lo salti
        apposta.
      </p>
      <p>
        <GameLink id="face-copy-feelings" /> richiede un bambino sulle tue ginocchia, naso contro naso. Fai una faccia
        esagerata, di’ come si chiama, tipo “sorpreso”, e tienila finché la copia. Prova felice, assonnato, arrabbiato e
        buffo. Poi scambiatevi, così fa lui una faccia, tu la copi e indovinate insieme l’emozione.
      </p>

      <h2>Con un bambino in età prescolare</h2>
      <p>
        <GameLink id="grandma-footsteps" /> è un classico che i nonni conoscono già (in inglese si chiama perfino
        Grandma’s Footsteps, i passi della nonna). Siediti su una sedia di spalle al nipotino, che parte dalla parete in
        fondo. Lui si avvicina piano, e ogni volta che ti giri deve essere immobile come una statua. Chi becchi a
        muoversi torna alla parete, e chi ti tocca la spalla vince. Bambini in età prescolare che facevano giochi in
        cerchio, come le statuine con le regole scambiate, hanno migliorato l’autoregolazione{" "}
        <Cite id="tominey-mcclelland-2011" />.
      </p>
      <p>
        <GameLink id="story-stones" /> richiede solo una voce stanca. Inizia ogni storia con “C’era un draghetto” e a
        turno aggiungete esattamente tre parole. Contate le parole sulle dita, così nessuno ne infila una quarta.
        Bambini da 3 a 5 anni che hanno fatto cinque settimane di gioco del far finta fantastico hanno migliorato la
        memoria di lavoro e l’autocontrollo <Cite id="thibodeau-2016" />.
      </p>
      <p>
        <GameLink id="i-spy-switch" /> è Vedo vedo con una sorpresa. Di’ “vedo vedo una cosa rossa”, e il nipotino la
        trova senza muoversi da dove siete. Dopo tre colori, passa alle forme, poi a cosa servono le cose. Bambini da 3 a
        5 anni sono stati valutati sullo stesso tipo di cambio: dividere per colore, poi per forma{" "}
        <Cite id="zelazo-2006" />.
      </p>
      <p>
        Altri giochi da fare da una sedia sono nei <Link href="/games/tag/sitting">giochi da fare seduti</Link>, nei{" "}
        <Link href="/games/tag/on-your-lap">giochi in braccio</Link> e nei{" "}
        <Link href="/games/energy/low">giochi a batteria bassa</Link>.
      </p>
    </>
  ),
};
