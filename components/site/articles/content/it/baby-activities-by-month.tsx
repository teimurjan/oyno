import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../baby-activities-by-month";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Attività per neonati da 0 a 12 mesi, mese per mese",
  description:
    "Giochi semplici per ogni fase del primo anno del tuo bambino, dal cucù sul petto al fare a turno, con quello che hanno trovato gli studi a ogni età.",
  body: (
    <>
      <p>
        Un gioco che un mese faceva ridere il tuo bambino può annoiarlo qualche settimana dopo. Questa guida ordina
        giochi semplici per fase, dalle prime settimane al primo compleanno. Ognuno dura da 5 a 15 minuti, e quasi
        tutti richiedono solo il tuo viso, la tua voce e magari una tazza o un panno.
      </p>
      <p>
        I mesi vengono dagli studi citati qui sotto, che hanno osservato i bambini a quelle età. Usali come una mappa
        approssimativa, non come una lista da spuntare. Se un gioco di una fase precedente fa ancora sorridere il tuo
        bambino, continua a farlo.
      </p>
      <p>
        Stasera trova qui sotto la fase del tuo bambino, scegli un gioco e leggine i passi una volta. Lascia il
        telefono in un’altra stanza, gioca finché il tuo bambino guarda altrove, e fermati lì.
      </p>

      <h2>Com’è il gioco nel primo anno</h2>
      <p>
        L’American Academy of Pediatrics descrive il gioco nel primo anno come qualcosa che cresce dal sorriso sociale
        fino al botta e risposta, al cucù e a batti batti le manine. I suoi pediatri incoraggiano anche la lettura ad
        alta voce accanto al gioco fin dalla nascita <Cite id="aap-play" />.
      </p>
      <p>
        Per i bambini dai 6 ai 18 mesi, il Center on the Developing Child di Harvard consiglia giochi in braccio con
        una sorpresa attesa, giochi del nascondere, giochi di imitazione, semplici giochi di ruolo, giochi con le dita
        e chiacchiere su ciò che il tuo bambino nota <Cite id="cdc-guide" />. Quasi tutti i giochi qui sotto sono uno di
        questi. Quello che cambia da una fase all’altra è ciò che il tuo bambino ci mette.
      </p>

      <h2>Da 0 a 3 mesi: il tuo viso e la tua voce</h2>
      <p>
        Nelle prime settimane il giocattolo sei tu. Il gioco è il tuo viso, la tua voce e le pause tra l’uno e
        l’altra.
      </p>
      <p>
        I neonati notano quando quel viso si spegne. In un esperimento classico, bambini da 1 a 4 mesi le cui mamme
        tenevano un viso immobile e senza reazioni diventavano diffidenti e si chiudevano nel giro di pochi minuti{" "}
        <Cite id="tronick-1978" />. I neonati notano anche la forma di un gioco. Quando i ricercatori hanno alterato il
        ritmo e la struttura del cucù e dei versetti a turno, bambini da 2 a 6 mesi hanno reagito al cambiamento{" "}
        <Cite id="rochat-1999" />.
      </p>
      <p>Due giochi sono adatti a questa fase, e tutti e due si fanno sdraiati:</p>
      <ul>
        <li>
          <GameLink id="hands-peekaboo" />: sdraiati con il tuo bambino sul petto e copriti il viso con tutte e due le
          mani. Resta immobile contando piano fino a tre, poi di’ “Cucù… settete!” e apri le mani. Allunga l’attesa un
          pochino ogni volta, e smetti quando il tuo bambino sorride ancora.
        </li>
        <li>
          <GameLink id="missing-last-word" />: canta piano una canzoncina che il tuo bambino ha sentito cento volte,
          guardandolo in viso. Fermati proprio prima dell’ultima parola di un verso e resta in silenzio, con le
          sopracciglia alzate. Aspetta un movimento, un calcetto o uno sguardo, poi canta la parola con un gran sorriso.
        </li>
      </ul>
      <p>
        Anche i libri contano, fin dall’inizio. In uno studio randomizzato che sosteneva i genitori nel leggere ad alta
        voce e nel giocare a far finta con il bambino dalla nascita ai 3 anni, il percorso ha ridotto iperattività e
        problemi di attenzione a quattro anni e mezzo <Cite id="mendelsohn-2018" />. Altri giochi in braccio sono nei{" "}
        <Link href="/games/type/anticipation-rhyme">giochi con filastrocche a sorpresa</Link> e nei{" "}
        <Link href="/games/type/peekaboo">giochi del cucù</Link>.
      </p>

      <h2>Da 3 a 6 mesi: guardare e aspettarsi</h2>
      <p>
        Il tuo bambino comincia a guardare avanti. In un esperimento, bambini di 3 mesi e mezzo imparavano una
        sequenza di immagini a sinistra e a destra e guardavano in anticipo dove sarebbe apparsa l’immagine successiva{" "}
        <Cite id="haith-1988" />.
      </p>
      <p>
        Anche l’attenzione fa parte di questa fase. Quanto bene i bambini concentravano l’attenzione a 5 mesi
        prediceva le loro funzioni esecutive tra i 2 e i 4 anni <Cite id="cuevas-bell-2014" />. Le funzioni esecutive
        sono l’insieme di abilità che un bambino usa per tenere a mente un pensiero, fermarsi prima di agire e cambiare
        piano. La nostra <Link href="/guides/executive-function-babies-toddlers">guida alle funzioni esecutive</Link>{" "}
        le spiega più nel dettaglio.
      </p>
      <p>
        I primi segni della memoria di lavoro compaiono verso la fine di questa fase. Bambini da cinque mesi e mezzo a
        sei mesi e mezzo ritrovavano un giocattolo dopo una breve attesa <Cite id="reznick-2004" />.
      </p>
      <ul>
        <li>
          <GameLink id="toy-comet" />: sdraiatevi a pancia in su e tieni un giocattolo a un avambraccio di distanza dal
          viso del tuo bambino, finché i suoi occhi non ci si posano. Spostalo piano da un lato, fermati e aspetta che lo
          sguardo ti raggiunga prima di muoverlo ancora. Smetti quando guarda altrove.
        </li>
        <li>
          <GameLink id="peeking-tail" />: per un bambino di circa 5 mesi che afferra ma non trova ancora un giocattolo
          nascosto del tutto. Copri un giocattolo con un panno lasciandone spuntare un angolo. Chiedi “Dov’è finito?”,
          tocca il pezzetto che spunta e aspetta con le mani ferme. Quando tira via il panno, festeggia piano, e la
          volta dopo copri un po’ di più il giocattolo.
        </li>
      </ul>
      <p>
        Per altri giochi, guarda i <Link href="/games/type/joint-attention">giochi di guarda e indica</Link> e i{" "}
        <Link href="/games/type/hide-and-find">giochi di nascondi e trova</Link>.
      </p>

      <h2>Da 6 a 9 mesi: canzoni, imitazione e nascondino</h2>
      <p>
        Adesso cantare si guadagna il suo posto. Bambini di 6 mesi prestavano attenzione più a lungo alla mamma che
        cantava che alla mamma che parlava <Cite id="nakata-trehub-2004" />. Non serve una bella voce, solo una
        canzoncina che il tuo bambino conosce.
      </p>
      <p>
        Per i bambini di 6 e 9 mesi, le schede di Harvard Brain-Building Through Play elencano il cucù e i giochi del
        nascondere, Trot Trot to Boston (arri arri cavallino), Pat-a-Cake (batti batti le manine), Dickory Dean, Baby
        See Baby Do, far cadere a turno un giocattolo con un “bum”, giochi di conversazione e giochi con le dita{" "}
        <Cite id="brain-play" />.
      </p>
      <p>
        A questa età conta come rispondi. In uno studio randomizzato, insegnare ai genitori a rispondere ai loro
        bambini da 6 a 10 mesi ha migliorato l’attenzione dei piccoli e la loro capacità di risolvere problemi da soli{" "}
        <Cite id="landry-2006" />. Dai 7 mesi e mezzo circa, in un esperimento classico, i bambini ritrovavano un
        giocattolo nascosto sotto una di due coperture dopo una breve attesa <Cite id="diamond-1985" />.
      </p>
      <ul>
        <li>
          <GameLink id="copy-cat-faces" />: copia la faccia o il verso del tuo bambino un attimo dopo di lui, la lingua
          fuori, uno squittio, un broncio. Dopo qualche volta, fai tu una faccia nuova, piano piano, e tienila. Aspetta,
          con la faccia ferma, che provi a rifarla.
        </li>
        <li>
          <GameLink id="two-cup-switch" />: per il vassoio del seggiolone e un bambino dagli 8 mesi circa. Capovolgi
          due tazze e infila un giocattolo sotto una, mentre il tuo bambino guarda. Conta piano “uno, due, tre”, poi
          lascia che sollevi una tazza. Dopo qualche successo, sposta il giocattolo sotto l’altra tazza davanti ai suoi
          occhi, conta di nuovo e guarda dove allunga la mano.
        </li>
      </ul>
      <p>
        Per altri giochi, guarda i <Link href="/games/type/fingerplay-song">giochi con le dita e canzoni mimate</Link>{" "}
        e i <Link href="/games/type/imitation">giochi di imitazione</Link>.
      </p>

      <h2>Da 9 a 12 mesi: turni, indicare e le prime finzioni</h2>
      <p>
        I giochi diventano un vero botta e risposta. Bambini da 9 a 18 mesi, in giochi a turno come dare e prendere e
        il cucù, segnalavano quando l’adulto saltava il proprio turno <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        Verso il primo compleanno, conta dove guardi. Bambini di un anno mantenevano più a lungo l’attenzione su un
        giocattolo quando il genitore guardava e nominava lo stesso giocattolo <Cite id="yu-smith-2016" />. Contano
        anche le parole. Il modo in cui i genitori parlavano con sensibilità di ciò che il bambino poteva pensare, e il
        loro sostegno al bambino che fa da solo, tra i 12 e i 15 mesi hanno predetto le funzioni esecutive a 18 e a 26
        mesi <Cite id="bernier-2010" />. A casa può bastare dire cosa pensi che voglia il tuo bambino, “vuoi il
        cucchiaio”, e lasciarlo provare prima di aiutarlo.
      </p>
      <ul>
        <li>
          <GameLink id="toy-give-back" />: per un bambino dai 9 mesi circa in braccio. Dagli un giocattolo e di’
          “tieni”. Poi tendi la mano aperta, di’ “tocca a me” e aspetta senza prenderlo, anche se ci vuole un minuto.
          Quando te lo mette in mano, di’ “grazie” e ridaglielo subito dicendo “tocca a te”.
        </li>
        <li>
          <GameLink id="look-where-i-look" />: per un bambino di circa 9 mesi che sta seduto. Metti due giocattoli sul
          pavimento davanti a voi. Gira la testa verso uno, fissalo bene e di’ il suo nome una volta. Aspetta che i
          suoi occhi seguano i tuoi, poi ripeti il nome e lasciaglielo.
        </li>
      </ul>
      <p>
        Anche i semplici giochi di ruolo della lista di Harvard sono adatti qui: una tazza vuota da cui fai finta di
        bere, o una telefonata per finta alla nonna. Ne trovi altri nei{" "}
        <Link href="/games/type/turn-taking">giochi a turno</Link> e nei{" "}
        <Link href="/games/type/pretend-play">giochi del far finta</Link>, oppure sfoglia tutti i{" "}
        <Link href="/games/age/babies">giochi per neonati</Link>.
      </p>

      <h2>Cosa resta uguale tutto l’anno</h2>
      <p>
        Il metodo non cambia con i mesi. La scheda di Harvard sul “serve and return”, il botta e risposta, lo riassume
        in cinque passi: nota su cosa si concentra il tuo bambino e condividilo, rispondi dandogli sostegno, dai un
        nome a ciò che vede o sente, fate a turno e aspetta, ed esercitatevi con le fini e gli inizi. Il suo esempio è
        il cucù <Cite id="serve-return" />.
      </p>
      <p>
        Seguire il tuo bambino è la parte da allenare. Quando i genitori di bambini da 6 a 21 mesi sono stati guidati
        a seguire il bambino, a rispondergli e a mostrare gioia, la flessibilità mentale dei loro figli a 4 anni è
        migliorata <Cite id="lind-2017" />.
      </p>
      <p>Qualche abitudine presa dai passi dei giochi qui sopra va bene a ogni fase:</p>
      <ul>
        <li>Smetti quando il tuo bambino sorride ancora, non quando ne ha abbastanza.</li>
        <li>Quando guarda altrove, prendilo come la fine del giro.</li>
        <li>Allunga un po’ la pausa ogni volta, e lascia che sia lui a riempirla.</li>
        <li>Dai un nome a ciò che guarda, con poche parole affettuose.</li>
      </ul>
      <p>
        I neonati notano anche il telefono. Bambini da 7 a 24 mesi si agitavano quando la mamma si girava verso il
        telefono durante un compito di still face, il viso immobile, e quelli le cui mamme usavano di più i dispositivi
        a casa si riprendevano meno <Cite id="myruski-2018" />. So quanto è difficile metterlo giù. Lavoro tutto il
        giorno, torno a casa e la mano va al telefono. Per dieci minuti di gioco, lascialo in un’altra stanza.
      </p>

      <h2>Se il tuo bambino non lo fa ancora</h2>
      <p>
        I mesi di questa guida sono le età osservate negli studi, non delle scadenze. Se stasera un gioco è troppo
        difficile, torna a uno della fase prima. Quasi tutti questi giochi hanno già un inizio più facile: un angolo
        che spunta prima di un giocattolo nascosto del tutto, una pausa breve prima di una lunga.
      </p>
      <p>
        Non devi tenere traccia di niente né mettere alla prova il tuo bambino. Scegli un gioco adatto a stasera e
        giocalo finché si diverte. Se hai dubbi su come si sta sviluppando il tuo bambino, parlane con il tuo
        pediatra.
      </p>
    </>
  ),
};
