import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../parents-phone-use-around-kids";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Quanto usano il telefono i genitori davanti ai figli?",
  description:
    "Cosa hanno contato i ricercatori osservando genitori con bambini piccoli in ristoranti, parchi giochi e laboratori, e cosa quei numeri non dicono.",
  body: (
    <>
      <p>
        Se hai alzato gli occhi dal telefono e hai trovato il tuo bambino che ti guardava, probabilmente ti sei chiesto
        come te la cavi rispetto agli altri. Questo articolo si attiene a ciò che i ricercatori hanno visto e contato
        osservando genitori con i figli. Dove uno studio non dà un numero, lo dice.
      </p>

      <h2>A tavola</h2>
      <p>
        Uno studio ha mandato degli osservatori nei fast food. Hanno osservato 55 adulti che mangiavano con bambini
        piccoli. La maggior parte usava il telefono durante il pasto. Gli adulti più assorbiti spesso rispondevano al
        bambino in ritardo o con durezza <Cite id="radesky-2014" />.
      </p>
      <p>
        Quello studio dice “la maggior parte”, non dà una cifra oraria. Ti dice quanto era comune il telefono a tavola,
        non per quanto tempo restava fuori.
      </p>

      <h2>Al parco giochi</h2>
      <p>
        Uno studio successivo ha osservato 53 genitori di bambini da 0 a 5 anni in sale d’attesa e parchi giochi. 23 di
        loro hanno usato il telefono mentre erano osservati <Cite id="vanden-abeele-2020" />.
      </p>
      <p>
        Lo stesso studio ha contato cosa succedeva dopo. Mentre un genitore era al telefono, la probabilità che
        rispondesse a un richiamo del bambino era cinque volte più bassa. Un’occhiata veloce al telefono non faceva
        differenza. L’essere molto assorbiti in altre attività aveva più o meno lo stesso costo{" "}
        <Cite id="vanden-abeele-2020" />.
      </p>
      <p>
        Un richiamo è qualsiasi cosa un bambino faccia per attirare la tua attenzione: indicare, chiamarti, tirarti la
        manica. In parole semplici, un genitore immerso nel telefono era molto meno propenso a rispondere.
      </p>

      <h2>In laboratorio</h2>
      <p>
        In uno studio di laboratorio, 225 mamme e i loro bambini di 6 anni sono stati filmati durante un compito. Nessuno
        aveva chiesto alle mamme di usare un dispositivo mobile, e il 23% di loro lo ha usato comunque. Chi lo ha usato
        ha avuto meno interazioni con il bambino, soprattutto non verbali <Cite id="radesky-2015" />.
      </p>
      <p>
        Questi bambini erano più grandi della fascia di Oyno, da 0 a 5 anni. Lo studio dà comunque una percentuale di
        quanto spesso un genitore prende in mano un dispositivo davanti al figlio quando nessuno glielo chiede.
      </p>

      <h2>Nell’arco di una giornata</h2>
      <p>
        Nessuno degli studi qui sopra segue un genitore per un’intera giornata con un registro del telefono. Per una
        giornata intera, i numeri qui vengono da adulti in generale. Giovani adulti il cui telefono registrava l’uso lo
        prendevano in mano circa 85 volte al giorno e lo usavano per circa cinque ore, più o meno il doppio di quanto
        pensavano <Cite id="andrews-2015" />. Non erano genitori, e non sono stati contati in presenza di bambini.
      </p>
      <p>
        I sondaggi fanno un’altra domanda: il telefono si mette in mezzo? La maggior parte delle donne in uno studio ha
        detto che i dispositivi interrompevano spesso il tempo con il partner <Cite id="mcdaniel-coyne-2016" />. I
        genitori di bambini piccoli che riferivano più interruzioni dovute al telefono durante il tempo in famiglia
        riferivano anche più problemi di comportamento nel loro bambino <Cite id="mcdaniel-radesky-2018" />.
      </p>
      <p>
        Se vuoi il tuo numero, lo conta il tuo iPhone. Il{" "}
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          resoconto di Tempo di utilizzo
        </a>{" "}
        mostra quante volte al giorno hai preso in mano il telefono. Guarda una serata prima di decidere qualsiasi cosa.
      </p>

      <h2>Quanto costa a te</h2>
      <p>
        Quasi tutti questi studi guardano il bambino. Un esperimento ha guardato il genitore. In un museo della scienza,
        i genitori a cui era stato chiesto di usare molto il telefono si sentivano più distratti e meno in sintonia con i
        figli rispetto a quelli a cui era stato chiesto di usarlo poco <Cite id="kushlev-dunn-2019" />. Il tempo con il
        tuo bambino si vive diversamente quando c’è di mezzo il telefono.
      </p>
      <p>
        L’American Academy of Pediatrics riassume la ricerca così: un uso intenso dei dispositivi mobili da parte dei
        genitori è associato a meno interazioni verbali e non verbali tra genitori e figli <Cite id="aap-media-2016" />.
      </p>

      <h2>Cosa non dicono i numeri</h2>
      <p>
        Questi sono studi osservazionali. Mostrano cosa facevano i genitori e cosa andava insieme a quello. Non possono
        dimostrare che il telefono abbia causato il comportamento di un bambino. In uno studio che ha seguito le famiglie
        per sei mesi, il collegamento andava in entrambe le direzioni: un comportamento più difficile del bambino
        prediceva più interferenze della tecnologia attraverso lo stress dei genitori, e quelle interferenze spesso
        predicevano più comportamenti oppositivi in seguito <Cite id="mcdaniel-radesky-2018b" />.
      </p>
      <p>
        Non dicono nemmeno che ogni sguardo sia un problema. Lo studio nei parchi giochi non ha trovato alcun costo in
        un’occhiata veloce <Cite id="vanden-abeele-2020" />. I numeri puntano sui lunghi momenti in cui si è assorbiti.
      </p>
      <p>
        L’American Academy of Pediatrics consiglia di tenere i pasti e i momenti di gioco tra genitori e figli liberi
        dagli schermi, per i genitori come per i bambini, e suggerisce di attivare Non disturbare in quei momenti{" "}
        <Cite id="aap-media-2016" />. Un gioco breve riempie quel tempo senza troppa fatica. Con un neonato, prova{" "}
        <GameLink id="hands-peekaboo" /> o <GameLink id="babble-back" />. Con un bambino piccolo, prova{" "}
        <GameLink id="give-and-take" /> o <GameLink id="animal-sound-swap" />. Con un bambino in età prescolare, prova{" "}
        <GameLink id="pretend-phone" />, dove l’unico telefono è la tua mano. Ne trovi altri nei{" "}
        <Link href="/games/age/toddlers">giochi per bambini da 1 a 3 anni</Link> e nei{" "}
        <Link href="/games/age/babies">giochi per neonati</Link>, e la guida{" "}
        <Link href="/guides/phone-down-with-your-kid">Giù il telefono quando sei con tuo figlio</Link> ha i passi per la
        serata.
      </p>
    </>
  ),
};
