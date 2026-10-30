import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-no-toys";

const { Link, GameLink } = linksIn("it");

export const article: Article = {
  ...english,
  title: "Giochi da fare senza giocattoli",
  description:
    "Niente giocattoli a portata di mano, o niente voglia di tirarli fuori? Questi giochi per bambini da 0 a 5 anni richiedono solo mani, voce e la stanza in cui sei.",
  body: (
    <>
      <p>
        I giocattoli sono nell’altra stanza, o messi via, o sparsi sotto il divano. Non ti servono. Molti dei giochi
        più antichi per i bambini piccoli usano solo un viso, due mani e una voce.
      </p>
      <p>
        L’American Academy of Pediatrics descrive come il gioco cresca dal sorriso sociale fino al botta e risposta, al
        cucù e a batti batti le manine <Cite id="aap-play" />. Le schede di Harvard Brain-Building Through Play elencano
        Pat-a-Cake (batti batti le manine) e Baby See Baby Do per i neonati, Follow the Leader (segui il capo) per i
        bambini piccoli, e Simon dice e What Time Is It Mr Fox (Lupo, che ore sono?) per i più grandi{" "}
        <Cite id="brain-play" />. Nessuno di questi richiede un giocattolo.
      </p>

      <h2>Neonati: il giocattolo è il tuo viso</h2>
      <p>
        Dai 6 mesi circa, prova <GameLink id="copy-cat-faces" />. Copia la faccia o il verso del tuo bambino un attimo
        dopo di lui: la lingua fuori, uno squittio, un broncio. Fallo qualche volta, poi fai tu una faccia nuova, piano
        piano, e tienila. Aspetta, con la faccia ferma, che provi a rifarla.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> si fa con il bambino in braccio. Chiedi “Dov’è il nasino?” e aspetta un
        respiro lento guardandolo in viso. Toccagli piano il naso e di’ “nasino”, poi passa a orecchie, piedini e
        pancino.
      </p>
      <p>
        Tutti e due i giochi seguono il tuo bambino. In uno studio randomizzato, guidare i genitori di bambini da 6 a 21
        mesi a seguire il bambino, a rispondergli e a mostrare gioia ha migliorato la flessibilità mentale dei figli a 4
        anni <Cite id="lind-2017" />.
      </p>

      <h2>Bambini piccoli: il tabellone è il corpo</h2>
      <p>
        <GameLink id="nose-knees-toes" /> è per un bambino dai 2 anni in su che sa dov’è il suo naso. Chiedi “dov’è il
        tuo naso?” e tocca il tuo, e il tuo bambino tocca il suo. Poi ginocchia, piedi, orecchie. Quando è veloce, di’
        “toccati i piedi” mentre ti tocchi il naso, e lui deve seguire le tue parole, non la tua mano.
      </p>
      <p>
        <GameLink id="rug-tightrope-walk" /> richiede solo il bordo di un tappeto o una riga del parquet. È una fune che
        porta fino a te sul divano. Il tuo bambino ci cammina sopra un passo lento alla volta, braccia larghe, mentre tu
        racconti ogni passo sottovoce. Un piede fuori dalla fune vuol dire tornare all’inizio, e chi ti raggiunge si
        prende un abbraccio sul divano. Non devi alzarti nemmeno una volta.
      </p>
      <p>
        Sono simili ai compiti di uno studio durato anni, in cui a bambini da 22 a 45 mesi veniva chiesto di camminare
        piano su una linea, di sussurrare e di fermarsi e ripartire a un segnale <Cite id="kochanska-2000" />.
      </p>

      <h2>Bambini in età prescolare: giochi fatti di parole</h2>
      <p>
        A 3 anni, un gioco può essere fatto solo di regole e parole. <GameLink id="simon-says" /> è il classico. Dai dei
        comandi, e il tuo bambino esegue solo quelli che iniziano con “Simon dice”. Mescola ordini semplici e beccalo se
        si muove. Dopo tre volte che lo becchi, Simon diventa lui. Simon dice era uno dei compiti di uno studio su
        bambini da 2 a 6 anni <Cite id="carlson-2005" />.
      </p>
      <p>
        <GameLink id="wolf-time" /> è il classico gioco del lupo, in versione corridoio. Tu stai con la faccia al muro in
        fondo. Il tuo bambino chiede “lupo, che ore sono?”, e tu rispondi un numero fino a dieci, così lui fa esattamente
        quei passi verso di te, contando ad alta voce. Quando è vicino, rispondi “ora di cena!” e inseguilo fino al via.
      </p>
      <p>
        <GameLink id="whisper-telephone" /> funziona quando un fratellino dorme. Sussurra un breve messaggio all’orecchio
        del tuo bambino, tipo “il gatto ha mangiato un calzino”, e lui te lo risussurra, parola per parola. A ogni giro
        aggiungi una parola.
      </p>

      <h2>Quando sei fuori casa</h2>
      <p>
        I giochi senza giocattoli danno il meglio in una sala d’attesa, in coda o in un lungo viaggio in macchina. In{" "}
        <GameLink id="zoo-list" /> dici “allo zoo ho visto una zebra”. Il tuo bambino ripete tutta la lista e aggiunge
        un animale, poi fai lo stesso tu, finché qualcuno si dimentica un animale. Poi partite per un nuovo viaggio in
        un posto nuovo. Il mare, la fattoria e il negozio vanno tutti bene, e può scegliere il tuo bambino dove andare.
      </p>
      <p>
        Altri giochi per il viaggio sono nei <Link href="/games/tag/in-the-car">giochi in macchina</Link>.
      </p>

      <h2>Come cominciarne uno stasera</h2>
      <ul>
        <li>Scegli un gioco per l’età del tuo bambino e spiega la regola in una frase.</li>
        <li>Con un neonato, resta su facce e versi. Copia quello che fa, poi aspetta che risponda.</li>
        <li>Fai il primo giro piano, così può vincerlo.</li>
        <li>Passagli il comando. Quasi tutti questi giochi finiscono con uno scambio, così anche lui ha un turno da capo.</li>
      </ul>
      <p>
        Tutti i giochi nei <Link href="/games/tag/nothing-to-grab">giochi senza giocattoli</Link> si fanno a mani vuote.
        Puoi anche sfogliarli per età, cominciando dai{" "}
        <Link href="/games/age/toddlers">giochi per bambini da 1 a 3 anni</Link>.
      </p>
    </>
  ),
};
