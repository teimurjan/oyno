import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../does-my-phone-affect-my-baby";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Usare il telefono fa male al mio bambino?",
  description:
    "Cosa mostrano gli esperimenti dello still face, cosa gli studi quotidiani si limitano a collegare e le piccole abitudini che tengono vivo il botta e risposta con il tuo bambino.",
  body: (
    <>
      <p>
        Se te lo stai chiedendo, stai già facendo attenzione. Il telefono è anche ciò che usi per guardare l’ora,
        scrivere al pediatra e superare una poppata notturna. Non sparirà.
      </p>
      <p>
        La ricerca è più tranquilla di quanto potresti temere. Non punta il dito contro l’occhiata veloce. In uno studio
        su genitori con bambini fino a 5 anni, un’occhiata veloce al telefono non cambiava il fatto che un genitore
        rispondesse o no al bambino <Cite id="vanden-abeele-2020" />. Punta invece il dito contro i lunghi momenti in
        cui si è assorbiti. Ecco cosa mostrano gli studi, e quanto sono sicuri.
      </p>

      <h2>Cosa mostrano gli esperimenti</h2>
      <p>
        In un esperimento, i ricercatori cambiano una cosa apposta e guardano cosa succede dopo. Questo permette di
        dire di più sulle cause.
      </p>
      <p>
        Il classico è l’esperimento dello still face, il viso immobile. Mamme di bambini da 1 a 4 mesi tenevano un viso
        immobile e senza reazioni. Nel giro di pochi minuti i bambini diventavano diffidenti e si chiudevano{" "}
        <Cite id="tronick-1978" />. I neonati si accorgono quando il botta e risposta si interrompe.
      </p>
      <p>
        Una versione più recente usava un telefono. Quando le mamme si giravano verso il telefono nel mezzo di un
        compito di still face, i bambini da 7 a 24 mesi si agitavano <Cite id="myruski-2018" />.
      </p>
      <p>
        I bambini piccoli provano a riconquistarti. Mamme di bambini da 20 a 22 mesi interrompevano il gioco per due
        minuti per compilare un questionario, sul telefono o su carta. Entrambi i gruppi diventavano meno reattivi, e i
        loro bambini cercavano di più la loro attenzione <Cite id="konrad-2021" />. La carta aveva lo stesso effetto del
        telefono. Contava la pausa nell’attenzione, non lo schermo.
      </p>
      <p>
        Le interruzioni possono costare anche in apprendimento. Alcune mamme hanno insegnato due parole nuove ai loro
        bambini di 2 anni. I bambini hanno imparato la parola insegnata senza pause, ma non quella interrotta da una
        telefonata <Cite id="reed-2017" />.
      </p>

      <h2>Cosa gli studi sulla vita di tutti i giorni si limitano a collegare</h2>
      <p>
        Altri studi osservano le famiglie o chiedono ai genitori com’è andata la giornata. Possono trovare cose che
        vanno insieme. Non possono dire quale abbia causato l’altra.
      </p>
      <ul>
        <li>
          Nello studio dello still face con il telefono, i bambini le cui mamme usavano di più i dispositivi a casa si
          riprendevano meno <Cite id="myruski-2018" />. Quella parte è un collegamento.
        </li>
        <li>
          I genitori che riferivano più interruzioni dovute al telefono durante il tempo in famiglia riferivano anche
          più problemi di comportamento nel loro bambino <Cite id="mcdaniel-radesky-2018" />.
        </li>
        <li>
          Quando famiglie con un figlio da 0 a 5 anni sono state seguite per sei mesi, il collegamento andava in
          entrambe le direzioni. Un comportamento più difficile del bambino prediceva più interferenze della tecnologia
          attraverso lo stress dei genitori, e quelle interferenze spesso predicevano più comportamenti oppositivi in
          seguito <Cite id="mcdaniel-radesky-2018b" />.
        </li>
      </ul>
      <p>
        Quindi un genitore stressato che prende il telefono non è il cattivo di questa storia. In quello studio, stress
        e uso del telefono andavano insieme.
      </p>

      <h2>Perché un’occhiata non è il problema</h2>
      <p>
        Lo studio nei parchi giochi ha trovato che un’occhiata veloce non faceva differenza, mentre l’essere molto
        assorbiti in altre attività costava più o meno quanto il telefono <Cite id="vanden-abeele-2020" />. Il
        telefono è una delle tante cose che possono portarti via.
      </p>
      <p>
        Anche le pause fanno parte del gioco. La guida di Harvard sul “serve and return”, il botta e risposta, per i
        neonati comprende fare a turno, aspettare ed esercitarsi con le fini e gli inizi, con il cucù come esempio{" "}
        <Cite id="serve-return" />. Una pausa seguita dal tuo viso che ricompare è proprio il cucù.
      </p>

      <h2>Cosa aiuta stasera</h2>
      <p>
        La buona notizia sta anche dall’altra parte. Quando i genitori di bambini da 6 a 10 mesi sono stati sostenuti
        verso una genitorialità responsiva, l’attenzione dei loro bambini e la loro capacità di risolvere problemi da
        soli sono migliorate <Cite id="landry-2006" />. Quando i genitori di bambini da 6 a 21 mesi sono stati guidati a
        seguire il bambino, a rispondergli e a mostrare gioia, i loro figli avevano una flessibilità mentale migliore a
        4 anni <Cite id="lind-2017" />.
      </p>
      <p>
        L’American Academy of Pediatrics consiglia di tenere i momenti di gioco tra genitori e figli liberi dagli
        schermi, per i genitori come per i bambini, e suggerisce di attivare Non disturbare in quei momenti{" "}
        <Cite id="aap-media-2016" />. Per cominciare basta un gioco breve:
      </p>
      <ul>
        <li>
          <GameLink id="babble-back" />: rispondi a qualsiasi suono del tuo bambino come fosse una frase, poi aspetta
          il suo turno.
        </li>
        <li>
          <GameLink id="follow-their-gaze" />: guarda quello che guarda il tuo bambino, e dagli un nome con poche parole
          dolci.
        </li>
        <li>
          <GameLink id="hands-peekaboo" />: sdraiati con il tuo bambino sul petto e nasconditi dietro le mani contando
          piano fino a tre.
        </li>
        <li>
          <GameLink id="copy-cat-faces" />: copia la faccia o il verso del tuo bambino un attimo dopo di lui.
        </li>
      </ul>
      <p>
        Per una serata di lamenti, <GameLink id="baby-mind-reader" /> ti chiede di dire ad alta voce cosa sembra volere
        il tuo bambino, poi di fare una pausa per la sua risposta. <GameLink id="house-sounds" /> lascia fare il lavoro
        al bollitore e alla porta. Ne trovi altri nei <Link href="/games/age/babies">giochi per neonati</Link>, e la
        guida <Link href="/guides/phone-down-with-your-kid">Giù il telefono quando sei con tuo figlio</Link> ha i passi
        per il telefono stesso.
      </p>
      <p>Se ti preoccupa come si sta sviluppando il tuo bambino, parlane con il tuo pediatra.</p>
    </>
  ),
};
