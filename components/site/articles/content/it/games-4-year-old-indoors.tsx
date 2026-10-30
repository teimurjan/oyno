import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-4-year-old-indoors";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Giochi da fare in casa con un bambino di 4 anni",
  description:
    "Otto giochi in casa per un bambino di quattro anni: regole capovolte, trucchi con le tazze, un ristorante per finta e un percorso a ostacoli in salotto, con gli studi dietro ognuno.",
  body: (
    <>
      <p>
        Tutti i giochi qui sotto hanno una regola, e quasi tutti la capovolgono a metà. Ognuno va bene per un bambino
        di quattro anni, richiede solo una stanza e quello che c’è dentro, e dura circa 10 minuti. Alcuni ti lasciano
        restare seduto.
      </p>

      <h2>Giochi con le regole che si capovolgono</h2>
      <p>
        In uno studio, bambini da 4 a 6 anni si toccavano i piedi quando sentivano “testa” e la testa quando sentivano
        “piedi”, e come se la cavavano prediceva come sarebbe andata alla scuola dell’infanzia{" "}
        <Cite id="ponitz-2009" />.
      </p>
      <p>
        <GameLink id="heads-mean-toes" /> è quel compito trasformato in gioco, e puoi chiamarlo da una sedia. Spiega al
        tuo bambino che quando dici “testa” si tocca i piedi, e quando dici “piedi” si tocca la testa. Di’ le due parole
        in ordine casuale, prima piano e poi più veloce. Quando diventa facile, aggiungi ginocchia e spalle come seconda
        coppia scambiata.
      </p>
      <p>
        <GameLink id="purple-light" /> richiede un corridoio. Mettiti in fondo. Il tuo bambino cammina verso di te con
        “luce viola” e si blocca con “luce rossa”. Quando ti raggiunge, scambiate le parole, così ora rosso vuol dire via
        e viola vuol dire stop. Di’ i colori sempre più veloce a ogni giro. Bambini in età prescolare che facevano
        giochi in cerchio come Red Light, Purple Light hanno migliorato l’autoregolazione{" "}
        <Cite id="tominey-mcclelland-2011" />, e un secondo studio randomizzato nelle classi di Head Start ha trovato
        che gli stessi giochi miglioravano l’autoregolazione e la preparazione alla scuola <Cite id="schmitt-2015" />.
      </p>

      <h2>Giochi di memoria a tavola</h2>
      <p>
        <GameLink id="cup-shuffle" /> richiede tre tazze e un calzino arrotolato. Nascondi il calzino sotto una tazza
        mentre il tuo bambino guarda. Scambia piano di posto due tazze, poi un’altra coppia, e chiedi sotto quale tazza
        c’è il calzino. Aggiungi uno scambio a ogni giro, poi passagli le tazze così mescola lui e indovini tu.
      </p>
      <p>
        In uno studio randomizzato, bambini di quattro e cinque anni allenati con compiti di memoria di lavoro hanno
        migliorato la memoria di lavoro e l’attenzione in compiti su cui non si erano allenati{" "}
        <Cite id="thorell-2009" />.
      </p>
      <p>
        <GameLink id="build-my-plan" /> trasforma le costruzioni in memoria. Descrivi prima a parole una torre, tipo tre
        tazze, poi il libro, poi due tazze in cima. Il tuo bambino la costruisce a memoria mentre tu tieni le mani in
        grembo. Confrontatela insieme con il piano, poi è lui a descriverne una e tu costruisci. Bambini in età
        prescolare che giocavano con i blocchi costruendo da progetti e immagini hanno migliorato le funzioni esecutive{" "}
        <Cite id="schmitt-2018" />.
      </p>

      <h2>Il far finta con un piano</h2>
      <p>
        In <GameLink id="pretend-restaurant" /> ti siedi come cliente e ordini tre piatti, tipo una minestra, una pizza
        e una banana. Il tuo bambino, il cameriere, ripete l’ordine, lo cucina con cuscini e tazze e serve i piatti
        nell’ordine in cui li hai chiesti. Al giro dopo, aggiungi una bibita.
      </p>
      <p>
        Bambini da 3 a 5 anni che hanno fatto cinque settimane di gioco del far finta fantastico hanno migliorato la
        memoria di lavoro e l’autocontrollo <Cite id="thibodeau-2016" />. In un altro studio, il gioco del far finta
        complesso dei bambini in età prescolare con altri bambini ha predetto la loro autoregolazione più avanti{" "}
        <Cite id="elias-berk-2002" />.
      </p>

      <h2>Un percorso a ostacoli in salotto</h2>
      <p>
        <GameLink id="obstacle" /> è quello che richiede più preparazione, e dura 15 minuti. Costruite un percorso che
        passa sotto una sedia, sopra un cuscino e intorno al tavolo. Cronometra il tuo bambino contando piano ad alta
        voce. Poi lui cambia un ostacolo e cronometra te.
      </p>
      <p>
        La guida alle attività di Harvard per i 3-5 anni elenca percorsi a ostacoli ed equilibrio{" "}
        <Cite id="cdc-guide" />. Bambini in età prescolare in un programma di saltelli, salti, lanci e prese hanno
        migliorato le funzioni esecutive <Cite id="mulvey-2018" />.
      </p>

      <h2>Cambiare regola e canzoni</h2>
      <p>
        <GameLink id="guess-my-rule" /> è un gioco da detective con un mucchio di calzini. Dividi i calzini in due
        mucchi seguendo una regola segreta, tipo a righe e a tinta unita. Il tuo bambino guarda e grida la regola appena
        la scopre. Poi lui smista con una sua regola segreta e indovini tu, e nessuna regola si può usare due volte.
        Bambini da 3 a 5 anni sono stati valutati sullo stesso tipo di cambio: dividere le carte per colore, poi passare
        alla forma <Cite id="zelazo-2006" />.
      </p>
      <p>
        <GameLink id="missing-word-song" /> è per un bambino di quattro anni che sa tutte le parole. Cantate una canzone
        che sapete tutti e due, tipo “Brilla brilla la stellina”. Scegliete una parola, tipo “stellina”, e ogni volta che
        arriva battete le mani invece di cantarla. A ogni giro aggiungete un’altra parola muta. Bambini da 4 a 6 anni in
        un breve programma musicale di canto, ritmo e strumenti hanno migliorato le funzioni esecutive{" "}
        <Cite id="bugos-demarie-2017" />.
      </p>

      <h2>Sceglierne uno stasera</h2>
      <p>
        Scegli il gioco in base all’energia che ti resta. Se ne hai ancora un po’, prepara il percorso a ostacoli o
        giocate a Luce viola in corridoio. Se sei sul divano, Testa vuol dire piedi e Indovina la regola si fanno tutti e
        due da lì. Se è quasi ora di dormire, La canzone con il buco si può cantare sdraiati.
      </p>
      <p>
        Ne trovi altri nei <Link href="/games/age/preschoolers">giochi per bambini da 3 a 5 anni</Link>, e i{" "}
        <Link href="/games/skill/self-control">giochi di autocontrollo</Link> raccolgono in un solo posto le statuine e i
        giochi dei contrari.
      </p>
    </>
  ),
};
