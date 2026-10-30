import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../activities-6-month-old";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Attività per un bambino di 6 mesi",
  description:
    "Otto giochi da cinque minuti per un bambino di sei mesi, da fare sdraiati o con il bimbo in braccio, e cosa dice la ricerca su ogni tipo di gioco.",
  body: (
    <>
      <p>
        Un bambino di sei mesi non ha bisogno di un programma di attività. Ha bisogno di te vicino, del tuo viso dove
        può vederlo e di qualche minuto di botta e risposta. Quasi tutti i giochi qui sotto si fanno sdraiati sul
        pavimento o sul divano, e nessuno richiede più di una tazza, un calzino o un libro.
      </p>
      <p>
        Tutti i giochi vanno bene per un bambino di sei mesi o più piccolo. Ognuno dura circa cinque minuti. Smetti
        quando il tuo bambino si sta ancora divertendo.
      </p>

      <h2>Per cosa è pronto il tuo bambino</h2>
      <p>
        Bambini da cinque mesi e mezzo a sei mesi e mezzo ritrovavano un giocattolo dopo una breve attesa, cosa che i
        ricercatori considerano la prima forma di memoria di lavoro <Cite id="reznick-2004" />. La memoria di lavoro è
        la capacità di tenere a mente qualcosa e di usarlo.
      </p>
      <p>
        I neonati colgono anche il ritmo di un gioco. Quando i ricercatori hanno spezzato i tempi del cucù e dei
        versetti a turno con bambini da 2 a 6 mesi, i bambini hanno reagito <Cite id="rochat-1999" />. E i bambini di
        sei mesi prestavano attenzione più a lungo quando la mamma cantava per loro che quando parlava{" "}
        <Cite id="nakata-trehub-2004" />.
      </p>
      <p>
        Il Center on the Developing Child di Harvard propone una breve lista per i bambini dai 6 ai 18 mesi: giochi in
        braccio con una sorpresa attesa, giochi del nascondere, giochi di imitazione, giochi con le dita e
        chiacchiere su ciò che il bambino nota <Cite id="cdc-guide" />. I giochi qui sotto seguono quella lista.
      </p>

      <h2>Giochi del nascondere</h2>
      <p>
        <GameLink id="under-the-cup" /> è il più semplice. Copri un giocattolo con una tazza capovolta mentre il tuo
        bambino lo guarda sparire. Chiedi “Dov’è finito?”, lascia passare un respiro lento, poi solleva la tazza con un
        “oh!” di sorpresa. Dopo qualche giro, rimettila giù e lascia che la alzi lui.
      </p>
      <p>
        <GameLink id="slow-fist-open" /> richiede una mano sola. Chiudi il pugno su un giocattolo troppo grande da
        inghiottire, lasciandone sbucare un pezzetto, e chiedi “Cosa c’è qui dentro?”. Apri un dito alla volta, il più
        piano possibile. Se il tuo bambino ti apre le dita, lascialo fare, e richiudi per un altro giro.
      </p>

      <h2>Il cucù e la pausa</h2>
      <p>
        La scheda di Harvard Brain-Building Through Play per i 6 e i 9 mesi comincia con il cucù e i giochi del
        nascondere, e aggiunge filastrocche in braccio e giochi con le dita <Cite id="brain-play" />. In ognuno, il
        divertimento sta nella pausa prima della sorpresa.
      </p>
      <p>
        In <GameLink id="hands-peekaboo" /> ti sdrai con il tuo bambino sul petto e ti copri il viso con tutte e due
        le mani. Resta immobile contando piano fino a tre, poi di’ “Cucù… settete!” e apri le mani. Allunga l’attesa un
        pochino ogni volta.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> richiede due piedini nudi in grembo. Recita piano “Questo dice: ho fame”,
        un ditino per ogni verso. All’ultimo ditino fermati e tieni il piedino fermo contando piano fino a tre. Poi fai
        correre le dita fino al pancino con un solletico e ricomincia dall’altro piede.
      </p>

      <h2>Parlare e imitare</h2>
      <p>
        Il tuo bambino sa fare a turno molto prima di avere le parole. In <GameLink id="babble-back" /> aspetti un
        suono qualsiasi, poi gli rispondi come fosse una frase vera. Fermati, guardalo e lascia una lunga pausa per il
        suo turno. Lascia che sia lui a chiudere la conversazione quando guarda altrove.
      </p>
      <p>
        In <GameLink id="copy-cat-faces" /> copi la faccia o il verso del tuo bambino un attimo dopo di lui: la lingua
        fuori, uno squittio, un broncio. Dopo qualche giro, fai tu una faccia nuova, piano piano, tienila e aspetta che
        provi a rifarla.
      </p>
      <p>
        Harvard lo chiama “serve and return”, botta e risposta. Nota su cosa si concentra il tuo bambino, rispondi,
        dai un nome a ciò che vede o sente, poi fate a turno e aspetta <Cite id="serve-return" />. In uno studio
        randomizzato, insegnare ai genitori a rispondere così a bambini da 6 a 10 mesi ha migliorato l’attenzione dei
        piccoli e la loro capacità di risolvere problemi da soli <Cite id="landry-2006" />.
      </p>

      <h2>Canzoni e libri</h2>
      <p>
        <GameLink id="big-tiny-voice" /> usa una canzoncina che il tuo bambino ha sentito cento volte. Canta un verso
        con il vocione più grosso che hai, a braccia larghe. Canta il verso dopo sussurrando, avvicinandoti perché
        guardi la tua bocca. Continua ad alternare, e cambia prima ogni volta che i suoi occhi incontrano i tuoi.
      </p>
      <p>
        Per i libri, prova <GameLink id="flat-out-story" />. Sdraiatevi uno accanto all’altro sul letto e tieni un
        libro illustrato aperto sopra di voi. Indica una figura, di’ cos’è e aspetta che gli occhi del tuo bambino ci
        arrivino. Se guarda qualcos’altro sulla pagina, dai un nome a quello e restaci.
      </p>
      <p>
        Guardare insieme una cosa sola allena l’attenzione. In uno studio, quanto bene i bambini concentravano
        l’attenzione a 5 mesi prediceva le loro funzioni esecutive tra i 2 e i 4 anni <Cite id="cuevas-bell-2014" />.
        L’American Academy of Pediatrics ricorda che i pediatri incoraggiano la lettura ad alta voce accanto al gioco
        fin dalla nascita <Cite id="aap-play" />. In uno studio randomizzato, sostenere i genitori nel leggere ad alta
        voce e nel giocare a far finta dalla nascita ai 3 anni ha ridotto iperattività e problemi di attenzione a
        quattro anni e mezzo <Cite id="mendelsohn-2018" />.
      </p>

      <h2>Farci stare una serata stanca</h2>
      <p>
        Non ti servono tutti e otto. Scegli quello che si adatta a dove sei già: sdraiato, sul divano o sul
        pavimento. Cinque minuti sono una partita intera. Se oggi ha funzionato, rifai lo stesso gioco domani.
      </p>
      <p>
        Ne trovi altri nei <Link href="/games/age/babies">giochi per neonati</Link>, e i{" "}
        <Link href="/games/energy/low">giochi a batteria bassa</Link> sono quelli che puoi fare senza alzarti. Se hai
        domande su come si sta sviluppando il tuo bambino, parlane con il tuo pediatra.
      </p>
    </>
  ),
};
