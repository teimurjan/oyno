import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../rainy-day-games-toddlers";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Giochi per bambini piccoli nei giorni di pioggia",
  description:
    "Otto giochi movimentati in casa per un bambino piccolo chiuso dentro: tunnel di sedie, gare in corridoio, cuscini sulla lava e statuine, con l’età minima di ognuno.",
  body: (
    <>
      <p>
        Una giornata chiusi in casa con un bambino piccolo è lunga. Questi giochi sono per le ore in cui il tuo bambino
        ha ancora energia da sfogare e uscire non si può. Usano il corridoio, i cuscini del divano e le sedie della
        cucina, e quasi tutti hanno un segnale che ferma la corsa per un momento.
      </p>
      <p>
        Per ogni gioco è indicata l’età minima. Alcuni vanno bene dal primo compleanno, altri dai 2 anni. Non ti servono
        tutti e otto in un giorno. Scegline due, gioca ognuno per dieci minuti e tieni gli altri per il prossimo giorno
        in casa.
      </p>

      <h2>Costruisci un tunnel</h2>
      <p>
        <GameLink id="chair-tunnels" /> va bene da 1 anno. Metti in fila due o tre sedie della cucina a fare un tunnel,
        con un cuscino in fondo come traguardo. Passa tu per primo, piano, così il tuo bambino vede la strada, poi seguilo
        dentro. Dopo qualche giro, aggiungi un cuscino da scavalcare.
      </p>
      <p>
        La scheda di Harvard Brain-Building Through Play per i bambini dai 12 mesi ai 3 anni comprende l’esplorare sopra i
        cuscini sul pavimento <Cite id="brain-play" />. Quando il tuo bambino si ferma nel tunnel, chiedi “e adesso?”
        invece di indicare. Così il piano resta a lui. In uno studio, il sostegno dei genitori ai tentativi del bambino
        tra i 12 e i 15 mesi ha predetto le funzioni esecutive a 18 e a 26 mesi <Cite id="bernier-2010" />. Ne trovi
        altri nei <Link href="/games/tag/chairs">giochi con le sedie</Link>.
      </p>

      <h2>Usa il corridoio</h2>
      <p>
        <GameLink id="silly-walk-leader" /> va bene da 1 anno. Percorri il corridoio con una camminata buffa, tipo un
        pinguino traballante, con il tuo bambino dietro che ti copia. Cambia camminata ogni due o tre passi. In fondo,
        girati e di’ “tocca a te”, poi copia esattamente qualsiasi camminata inventi lui, anche se pesta solo i piedi.
        Follow the Leader (segui il capo) è nella lista di attività di Harvard per i bambini piccoli{" "}
        <Cite id="cdc-guide" />.
      </p>
      <p>
        <GameLink id="roll-wait-go" /> è per i bambini dai 2 anni in su. Accucciati in fondo al corridoio con il tuo
        bambino accanto e fai rotolare una palla lungo il corridoio. Tenetevi per mano e guardatela rotolare. Solo quando
        si è fermata e dici “via” la inseguite tutti e due. Ogni volta allunga un po’ l’attesa dopo che si è fermata, poi
        lascia che il via lo dia lui.
      </p>
      <p>
        Altri nei <Link href="/games/tag/hallway">giochi in corridoio</Link>.
      </p>

      <h2>Trasforma il pavimento in lava</h2>
      <p>
        <GameLink id="cushion-lava" /> è per i bambini dai 2 anni in su. Sparpaglia tutti i cuscini di casa sul pavimento
        e annuncia che il pavimento è lava, quindi i piedi restano sui cuscini. Saltate insieme fino al divano, tenendovi
        per mano nei buchi più grandi. Di’ “la lava sale” e togli un cuscino a ogni giro.
      </p>
      <p>
        Anche <GameLink id="run-home" /> è per i bambini dai 2 anni in su. Ognuno ha un cuscino-casa in un angolo diverso,
        poi girate per la stanza con camminate buffe. Grida “a casa!” e correte tutti e due a sedervi sul vostro cuscino.
        Scambiate le case ogni tanto, e festeggiate quando vi ricordate tutti e due qual è il vostro cuscino adesso. Altri
        nei <Link href="/games/tag/cushions">giochi con i cuscini</Link>.
      </p>

      <h2>Metti uno stop al rumore</h2>
      <p>
        Fermarsi a un segnale è una cosa che i ricercatori chiedono ai bambini piccoli. In uno studio durato anni, a
        bambini da 22 a 45 mesi veniva chiesto di aspettare, di camminare piano su una linea, di sussurrare e di fermarsi
        e ripartire a un segnale <Cite id="kochanska-2000" />. In un altro, cantare, ballare e fare giochi musicali
        insieme a casa a 2-3 anni ha predetto l’attenzione e l’autoregolazione a 5 anni <Cite id="williams-2015" />.
      </p>
      <p>
        <GameLink id="sock-rain" /> è per i bambini dai 2 anni in su. Rovescia sul pavimento una tazza di calzini
        arrotolati e grida “pioggia”, così li lanciate tutti e due più in alto che potete. Grida “sole” e i lanci si
        fermano, e ogni calzino torna nella tazza il più in fretta possibile. L’ultimo sole lascia la stanza in ordine.
      </p>
      <p>
        <GameLink id="cup-drum-parade" /> è per i bambini dai 2 anni in su. Capovolgi una tazza, suonala come un tamburo e
        marcia per casa con il tuo bambino dietro. Ferma il tamburo senza preavviso, e tutta la banda si blocca a metà
        passo finché non riparte. Poi dai il tamburo al tuo bambino.
      </p>

      <h2>Nascondino per principianti</h2>
      <p>
        La scheda di Harvard sul gioco per i bambini piccoli elenca anche un semplice nascondino{" "}
        <Cite id="brain-play" />. <GameLink id="terrible-hider" /> va bene da 1 anno, prima che il tuo bambino sappia
        contare. Digli di restare sul tappeto, poi nasconditi malissimo dietro una sedia, contando fino a cinque ad alta
        voce per tutto il tempo. Continua a contare dal tuo nascondiglio, così la voce ti tradisce. Poi scambiatevi, e
        cerca in due posti sbagliati prima di trovarlo.
      </p>
      <p>
        Quando le corse sono finite, passa a qualcosa di tranquillo. I{" "}
        <Link href="/games/energy/low">giochi a batteria bassa</Link> si fanno seduti o sdraiati, e{" "}
        <Link href="/blog/bedtime-wind-down-games">giochi tranquilli prima della nanna</Link> ne ha qualcuno per la fine
        della giornata. La lista completa è nei <Link href="/games/age/toddlers">giochi per bambini da 1 a 3 anni</Link>.
      </p>
    </>
  ),
};
