import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../screen-time-vs-app-blockers";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Tempo di utilizzo, app che bloccano e Oyno: cosa fa ognuno per i genitori",
  description:
    "Un confronto onesto tra Tempo di utilizzo di Apple, le app che bloccano altre app e Oyno, per i genitori che vogliono riprendersi la serata, con quello che ognuno non fa.",
  body: (
    <>
      <p>
        Vuoi togliere il telefono dall’ora che passi con il tuo bambino. Su iPhone ci sono tre tipi di strumenti per
        farlo: le impostazioni di Tempo di utilizzo integrate da Apple, le app fatte per bloccare altre app, e Oyno, che
        creo io. Questo è uno sguardo onesto su ognuno, compresi i casi in cui Oyno è la scelta sbagliata.
      </p>
      <p>
        L’obiettivo merita uno strumento. L’American Academy of Pediatrics consiglia di tenere i pasti e i momenti di
        gioco tra genitori e figli liberi dagli schermi, per i genitori come per i bambini, e dice che i genitori possono
        attivare l’opzione “non disturbare” sul telefono in quei momenti <Cite id="aap-media-2016" />.
      </p>

      <h2>Tempo di utilizzo di Apple</h2>
      <p>
        Tempo di utilizzo è già sul tuo iPhone e non costa niente. Su iOS 27 imposti un{" "}
        <strong>programma di Tempo di utilizzo</strong> con delle fasce orarie, come una fascia serale, e dei{" "}
        <strong>limiti di tempo</strong> che fissano per quanto puoi usare certe categorie di app, come Social o Giochi.
        Una lista <strong>Sempre consentite</strong> tiene aperte le persone e le app che scegli, qualunque cosa dica il
        programma (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Supporto Apple: impostare programmi e limiti di tempo
        </a>
        ). Un codice di Tempo di utilizzo di quattro cifre ti impedisce di cambiare quelle impostazioni senza digitarlo (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Supporto Apple: codice di Tempo di utilizzo
        </a>
        ).
      </p>
      <p>
        Cosa fa bene: è gratuito, è integrato e può coprire anche iPad e Mac quando attivi Condividi tra dispositivi.
        Apple dice anche che un limite di tempo copre il sito web di un’app quando l’app ne dichiara uno.
      </p>
      <p>
        Cosa non fa: dice di no, e basta. Quando la fascia comincia, niente ti dice cosa fare con quel tempo. E se il
        codice lo imposti tu, lo conosci. La nostra{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">guida passo per passo a Tempo di utilizzo</Link> spiega la
        configurazione e il problema del codice.
      </p>

      <h2>App che bloccano e app per la concentrazione</h2>
      <p>
        Su App Store ci sono tante app fatte per bloccare o limitare altre app. Sono molto diverse l’una dall’altra,
        quindi questa sezione ti dà domande da fare, non verdetti. Prima di pagarne una, controlla:
      </p>
      <ul>
        <li>È per il tuo telefono, o è un controllo parentale per il dispositivo di un bambino?</li>
        <li>Puoi impostare giorni e orari, o solo avviare una sessione a mano?</li>
        <li>Cosa succede quando apri un’app bloccata, e quanto è facile aggirarla?</li>
        <li>Blocca siti web, app o entrambi?</li>
        <li>Ti dà qualcosa da fare nel tempo che libera?</li>
      </ul>
      <p>
        Ho provato io stesso le app che bloccano, e ho cancellato i social. L’abitudine è rimasta. Non è un verdetto su
        nessuna app. È il motivo per cui l’ultima domanda di quella lista per me conta.
      </p>

      <h2>Oyno</h2>
      <p>
        Oyno è un’app per iOS per genitori di bambini da 0 a 5 anni. Usa Tempo di utilizzo di Apple sul tuo iPhone.
        Imposti il Tempo in famiglia: i giorni, l’ora di inizio e di fine, e tutti i programmi che ti servono. Durante il
        Tempo in famiglia, le app che hai scelto sono in pausa. Scegli quali app sono sempre consentite e quali mai
        consentite, e c’è una pausa “Non ora” di 20 minuti.
      </p>
      <p>
        Un’app in pausa mostra la schermata di Oyno. Il suo pulsante “Apri Oyno” porta a un gioco. Ce ne sono 500, in tre
        fasce d’età e per batteria bassa, media o carica, ognuno da 5 a 15 minuti, e ognuno basato su uno studio e una
        guida. Un programma può sbloccare le tue app per un po’ dopo che tu e il tuo bambino avete fatto una partita.
        Ogni partita fa crescere il piccolo pianeta della tua famiglia. Oyno non chiede il nome né la foto del bambino.
      </p>
      <p>
        L’idea è che il blocco e il gioco arrivino insieme. In un esperimento, i genitori in un museo della scienza a cui
        era stato chiesto di usare molto il telefono si sentivano più distratti e meno in sintonia con i figli rispetto a
        quelli a cui era stato chiesto di usarlo poco <Cite id="kushlev-dunn-2019" />. La risposta di Oyno è mettere
        qualcosa nello spazio che il telefono lascia.
      </p>

      <h2>Cosa non fa Oyno</h2>
      <ul>
        <li>
          <strong>È solo per iOS.</strong> Non esiste una versione per Android.
        </li>
        <li>
          <strong>È per il tuo telefono, non per quello di tuo figlio.</strong> Non è un controllo parentale per il
          dispositivo di un bambino. Per quello, Apple ha la sua guida,{" "}
          <a href="https://support.apple.com/guide/child-safety/welcome-r1jy0rk9vfz8/web">
            Dispositivi Apple per bambini e famiglie
          </a>
          .
        </li>
        <li>
          <strong>Non blocca i siti web.</strong> Mette in pausa le app. Se il problema è un sito, usa direttamente Tempo
          di utilizzo.
        </li>
        <li>
          <strong>Non è un lucchetto.</strong> La pausa “Non ora” apre le tue app per 20 minuti. È una spinta che ti dai
          da solo.
        </li>
        <li>
          <strong>Non è gratis.</strong> È un abbonamento mensile o annuale, con 3 giorni di prova gratuita su App Store.
          Tempo di utilizzo non costa niente.
        </li>
      </ul>

      <h2>Come scegliere</h2>
      <p>
        Comincia con Tempo di utilizzo. È gratuito, e una settimana ti dirà molto. Se la fascia serale regge e sei
        contento, fermati lì.
      </p>
      <p>
        Guarda un’app che blocca se il tuo problema è soprattutto la giornata di lavoro, i siti web o un telefono Android,
        perché Oyno non copre queste cose. Fai le domande qui sopra, e controlla che l’app che scegli copra le tue.
      </p>
      <p>
        Guarda Oyno se il tuo bambino ha meno di 6 anni, l’ora che vuoi riprenderti è quella con lui, e bloccare e basta
        non ha funzionato perché il vuoto che lasciava è stato riempito da qualcos’altro sul telefono.
      </p>
      <p>
        Qualunque cosa scegli, tieni pronto un gioco per la prima sera. Con un neonato, prova{" "}
        <GameLink id="babble-back" />: aspetta un suono qualsiasi e rispondigli come fosse una frase vera. Con un bambino
        piccolo, prova <GameLink id="pocket-kiss-hand" />, in cui un bacio si nasconde in uno dei suoi pugni. Con un
        bambino in età prescolare, prova <GameLink id="countdown-stop" /> o <GameLink id="sleepy-lion" />, che puoi fare
        sdraiato. Ne trovi altri nei <Link href="/games/energy/low">giochi a batteria bassa per genitori stanchi</Link>.
      </p>
    </>
  ),
};
