import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../iphone-screen-time-family-evenings";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Come impostare Tempo di utilizzo su iPhone per le serate in famiglia",
  description:
    "Passo per passo: imposta Tempo di utilizzo sul tuo iPhone perché la serata con il tuo bambino resti tua, più cosa non può fare e a cosa giocare invece.",
  body: (
    <>
      <p>
        Questa guida parla del tuo telefono, non di quello di tuo figlio. Se torni a casa stanco e il telefono si mangia
        l’ora prima della nanna, Tempo di utilizzo sul tuo iPhone può mettere un recinto intorno a quell’ora. È
        gratuito, è già sul tuo telefono e puoi configurarlo stasera.
      </p>
      <p>
        Vale la pena farlo. In un esperimento, i genitori in un museo della scienza a cui era stato chiesto di usare
        molto il telefono si sentivano più distratti e meno in sintonia con i figli rispetto a quelli a cui era stato
        chiesto di usarlo poco <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>
        I passi qui sotto seguono le pagine di supporto di Apple per iOS 27, la versione più recente che Apple
        documenta. Se il tuo iPhone ha iOS 26 o una versione precedente, i menu hanno altri nomi, e verso la fine c’è
        una sezione per te.
      </p>

      <h2>Cosa è cambiato in iOS 27</h2>
      <p>
        Le guide più vecchie parlano di Tempo di inattività e Limitazioni app. Per iOS 27, la guida di Apple descrive
        invece due strumenti. I <strong>programmi di Tempo di utilizzo</strong> (Screen Time Schedules) stabiliscono in
        quali momenti della giornata puoi usare le tue app. I <strong>limiti di tempo</strong> (Time Allowances)
        stabiliscono per quanto tempo puoi usarle ogni giorno, per categoria, come Intrattenimento, Giochi o Social. L’esempio
        di Apple è un programma con fasce orarie per il lavoro, la cena e la sera (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Supporto Apple: impostare programmi e limiti di tempo
        </a>
        ).
      </p>
      <p>
        Apple precisa che queste funzioni richiedono iOS 27 o versioni successive su tutti i tuoi dispositivi Apple. Se
        il tuo iPad o il tuo Mac hanno ancora una versione più vecchia, aggiornali prima, altrimenti i passi qui sotto
        potrebbero non corrispondere a quello che vedi.
      </p>

      <h2>Passo 1: attiva Tempo di utilizzo e guarda la tua settimana</h2>
      <p>
        Apri l’app Impostazioni e tocca Tempo di utilizzo. Tocca Gestisci Tempo di utilizzo, poi tocca Attiva Attività
        di app e siti web (
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Supporto Apple: configurare Tempo di utilizzo per te
        </a>
        ).
      </p>
      <p>
        Se lo usi già da un po’, guarda prima di cambiare qualcosa. Tocca Media giornaliera, poi Settimana. Scorri fino a
        Riattivazioni per vedere quante volte hai preso in mano il telefono. Annota le due o tre app che usi di più. Sono
        le app che stai per recintare.
      </p>
      <p>
        Il numero vero può essere più alto di quanto pensi. In uno studio, giovani adulti il cui telefono registrava
        l’uso lo prendevano in mano circa 85 volte al giorno e lo usavano per circa cinque ore, più o meno il doppio di
        quanto stimavano <Cite id="andrews-2015" />.
      </p>
      <p>
        Se usi anche un iPad o un Mac, Apple ti permette di condividere queste impostazioni tra i dispositivi. Tocca
        Gestisci Tempo di utilizzo, poi attiva Condividi tra dispositivi. Così il programma che imposti qui sotto vale su
        tutti, e la serata non si sposta sull’iPad.
      </p>

      <h2>Passo 2: imposta i limiti per le app che attirano di più</h2>
      <p>
        I limiti di tempo funzionano per categoria. Puoi usare le app di una categoria finché raggiungono il limite di
        quella categoria o il tuo totale giornaliero, quale arriva prima.
      </p>
      <ol>
        <li>Vai in Impostazioni, tocca Tempo di utilizzo, poi tocca Limiti di tempo.</li>
        <li>Tocca Gestisci categorie, tocca il pulsante per aggiungere e scegli una categoria, come Social o Intrattenimento.</li>
        <li>Di nuovo in Limiti di tempo, tocca la categoria e trascina il cursore per stabilire quanto tempo hai ogni giorno.</li>
        <li>
          Per controllare quali app stanno in una categoria, tocca Gestisci categorie, poi la categoria. Lì vedi anche il
          tuo uso medio giornaliero, e puoi toccare un’app per vedere il suo.
        </li>
      </ol>
      <p>
        Comincia dalle app del passo 1. Sii onesto su quali si mangiano la serata.
      </p>
      <p>
        Un dettaglio conta se scrolli nel browser. Apple dice che se un’app dichiara un sito web associato, il limite di
        tempo vale per entrambi. Quindi limitare un’app può limitare anche il suo sito.
      </p>

      <h2>Passo 3: dai alla sera una fascia oraria tutta sua</h2>
      <p>
        Questa è la parte che protegge l’ora con il tuo bambino. Crei un programma, poi una fascia oraria al suo interno
        che copre la vostra serata in famiglia.
      </p>
      <ol>
        <li>Vai in Impostazioni, tocca Tempo di utilizzo, tocca Programma Tempo di utilizzo, poi attiva Programma.</li>
        <li>Tocca Aggiungi programma, tocca i giorni che vuoi, come da lunedì a venerdì, e conferma.</li>
        <li>Tocca la fascia oraria. Tocca il suo nome e chiamala in modo semplice, tipo “Sera”.</li>
        <li>Tocca l’ora di inizio e di fine e impostale sulle ore in cui sei a casa con il tuo bambino.</li>
        <li>
          Sotto la fascia, tocca le categorie di limiti di tempo che vuoi disponibili in quel momento. Lascia fuori quelle
          che hai impostato nel passo 2 per le app che attirano di più.
        </li>
      </ol>
      <p>
        Ogni fascia mostra le icone delle categorie che consente, così vedi a colpo d’occhio quali tipi di app sono
        aperti la sera. Se il weekend è diverso, aggiungi un secondo programma per sabato e domenica con i suoi orari.
      </p>
      <p>
        In Limiti di tempo, Apple ha anche un interruttore chiamato Segui il programma di Tempo di utilizzo. Attivalo se
        vuoi che i tuoi limiti valgano solo in certi momenti del programma.
      </p>
      <p>
        Scegli orari che riesci a rispettare, come dalla cena alla nanna. È in linea con ciò che l’American Academy of
        Pediatrics consiglia alle famiglie: tenere camere da letto, pasti e momenti di gioco tra genitori e figli liberi
        dagli schermi, per i bambini e per i genitori <Cite id="aap-media-2016" />.
      </p>

      <h2>Passo 4: scegli cosa resta consentito</h2>
      <p>
        Alcune app non dovrebbero mai finire dietro il recinto. Il tuo partner deve poterti raggiungere. La babysitter
        deve poterti raggiungere. Potresti volere Mappe, la fotocamera o un’app per la salute.
      </p>
      <ol>
        <li>Vai in Impostazioni, tocca Tempo di utilizzo, poi tocca Sempre consentite.</li>
        <li>Tocca Aggiungi persone per aggiungere i contatti che puoi sempre raggiungere e da cui puoi essere raggiunto.</li>
        <li>Tocca Aggiungi app per aggiungere le app che restano aperte qualunque cosa dica il programma.</li>
      </ol>
      <p>
        Apple dice che app e contatti in questa lista restano disponibili a prescindere da qualsiasi programma o limite
        tu abbia impostato. I suoi esempi sono i familiari e l’app Salute, per le emergenze. Tieni la lista corta. Ogni
        app che contiene è una porta che resta aperta.
      </p>

      <h2>Passo 5: bloccalo con un codice</h2>
      <p>
        Un codice di Tempo di utilizzo significa che devi digitare un codice prima di poter cambiare le impostazioni
        qui sopra (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Supporto Apple: creare, modificare o rimuovere un codice di Tempo di utilizzo
        </a>
        ).
      </p>
      <ol>
        <li>
          Vai in Impostazioni, tocca Tempo di utilizzo, tocca Gestisci Tempo di utilizzo, poi tocca Blocca impostazioni di
          Tempo di utilizzo.
        </li>
        <li>Digita un codice di quattro cifre, poi digitalo di nuovo per confermarlo.</li>
      </ol>
      <p>
        Ora la parte onesta. Questo codice lo imposti tu, quindi lo conosci. Alle 20, stanco, con il divano e il telefono
        lì a portata di mano, un codice che conosci è un dosso, non un muro.
      </p>
      <p>
        Per questo alcuni genitori chiedono al partner di digitare il codice, così non lo conoscono. Aiuta. Ma Apple offre
        anche il recupero del codice di Tempo di utilizzo, che ti permette di reimpostare il codice con il tuo Account
        Apple se lo dimentichi. Se lo attivi, il codice del partner diventa un passaggio in più per te, non un lucchetto.
        Decidi tu cosa preferisci.
      </p>

      <h2>Con iOS 26 o versioni precedenti: Tempo di inattività e Limitazioni app</h2>
      <p>
        Se il tuo iPhone non è ancora passato a iOS 27, le stesse idee hanno nomi più vecchi (
        <a href="https://support.apple.com/guide/iphone/set-schedules-with-screen-time-iphb0c7313c9/26/ios/26">
          Supporto Apple: impostare programmi con Tempo di utilizzo, iOS 26
        </a>
        ).
      </p>
      <ul>
        <li>
          <strong>Tempo di inattività</strong> è la fascia serale. In Impostazioni, tocca Tempo di utilizzo, poi Tempo di
          inattività, poi Programmato. Scegli Ogni giorno o Personalizza giorni, e imposta l’ora di inizio e di fine. Apple
          manda un promemoria cinque minuti prima che cominci.
        </li>
        <li>
          <strong>Limitazioni app</strong> sono i limiti di tempo. Tocca Limitazioni app, poi Aggiungi limitazione,
          scegli categorie o singole app, tocca Avanti e imposta il tempo.
        </li>
        <li>
          <strong>Sempre consentite</strong> funziona allo stesso modo, per contatti e app.
        </li>
      </ul>
      <p>
        Un’avvertenza: Apple dice che di default questi limiti si possono ignorare quando li raggiungi. Se hai un codice
        di Tempo di utilizzo, puoi attivare Blocca durante il tempo di inattività, e allora le app non si possono aprire
        durante il Tempo di inattività. Se è disattivato, vedi solo un promemoria e puoi andare avanti.
      </p>

      <h2>Cosa non fa Tempo di utilizzo</h2>
      <p>
        Tempo di utilizzo è bravo in una cosa sola. Dice di no. Non dice cosa fare invece.
      </p>
      <p>
        Lo so dalle mie serate. Lavoro tutto il giorno, torno a casa e la mano va al telefono. Ho provato le app che
        bloccano. Ho cancellato i social. L’abitudine è rimasta. Un’app bloccata lascia un vuoto nella serata, e Tempo di
        utilizzo non lo riempie.
      </p>
      <p>
        La dichiarazione dell’AAP sui bambini piccoli e i media dice la stessa cosa dall’altro lato. Osserva che un uso
        intenso dei dispositivi mobili da parte dei genitori è associato a meno scambi verbali e non verbali tra genitori
        e figli. Chiede ai pediatri di aiutare le famiglie con un Family Media Use Plan, un piano familiare per l’uso dei
        media con regole per ogni figlio e ogni genitore, e con idee di gioco da fare al posto degli schermi{" "}
        <Cite id="aap-media-2016" />. Una regola sul telefono è metà di un piano. L’altra metà è cosa fai con quel tempo.
      </p>
      <p>
        Quindi tieni pronti i dieci minuti successivi prima che la fascia cominci. Non devono essere geniali. Devono
        funzionare quando non ti è rimasto niente. Oyno usa Tempo di utilizzo per mettere in pausa le app che scegli
        durante il Tempo in famiglia e ti dà un gioco breve da fare invece.
      </p>

      <h2>La tua prima sera</h2>
      <p>
        Ecco un piano per stasera, su misura per un genitore che preferirebbe sdraiarsi.
      </p>
      <ol>
        <li>Imposta la fascia del passo 3 perché cominci tra dieci minuti.</li>
        <li>Metti il telefono su una mensola fuori portata, a faccia in giù, con la suoneria accesa nel caso qualcuno chiami.</li>
        <li>Scegli un gioco dalla lista qui sotto e giocalo finché il tuo bambino smette di sorridere, non di più.</li>
      </ol>
      <p>
        Per un neonato, prova <GameLink id="hands-peekaboo" />. Ti sdrai con il tuo bambino sul petto, ti copri il viso
        con tutte e due le mani e aspetti contando piano fino a tre prima del “Cucù… settete!”.
      </p>
      <p>
        Per un bambino dai 2 anni in su, prova <GameLink id="still-stone-mouse" />. Il tuo bambino resta fermo come un
        sasso mentre la tua mano gli si avvicina come un topolino, e ogni movimento rimanda il topolino al punto di
        partenza. Oppure <GameLink id="touch-the-bear" />: sei un orso che dorme sul divano, ogni urlo ti fa russare più
        forte, e solo una mano sulla zampa ti sveglia.
      </p>
      <p>
        Per un bambino in età prescolare, prova <GameLink id="belly-boat" />. Vi sdraiate tutti e due a pancia in su con
        un giocattolino su ogni pancia e respirate piano così le barchette salgono e scendono.{" "}
        <GameLink id="sleepy-lion" /> e <GameLink id="day-says-night" /> si fanno anche dal divano.
      </p>
      <p>
        Ne trovi altri nei <Link href="/games/energy/low">giochi a batteria bassa per genitori stanchi</Link>, e puoi
        filtrare per età nei <Link href="/games/age/toddlers">giochi per bambini da 1 a 3 anni</Link> o nei{" "}
        <Link href="/games/age/preschoolers">giochi per bambini da 3 a 5 anni</Link>. Se stai ancora scegliendo tra Tempo
        di utilizzo e un’app da aggiungere, leggi{" "}
        <Link href="/blog/screen-time-vs-app-blockers">Tempo di utilizzo, app che bloccano e Oyno</Link>.
      </p>
      <p>
        Dai alla configurazione una settimana prima di cambiarla. Se la fascia comincia troppo presto, spostala. Se
        un’app continua a rientrare da Sempre consentite, toglila dalla lista.
      </p>
    </>
  ),
};
