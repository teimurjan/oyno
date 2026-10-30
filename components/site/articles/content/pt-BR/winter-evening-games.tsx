import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../winter-evening-games";

const { Link, GameLink } = linksIn("pt-BR");

export const article: Article = {
  ...english,
  title: "Brincadeiras para as noites escuras de inverno",
  description:
    "Brincadeiras que usam o escuro: um abajur, a lanterna do celular e um quarto silencioso. Sugestões para bebês e crianças de 1 a 5 anos, e um jeito de brincar com duas idades ao mesmo tempo.",
  body: (
    <>
      <p>
        Quando escurece antes do jantar, a noite inteira acontece dentro de casa. Eu trabalho o dia todo, chego em casa
        e pego o celular. As brincadeiras abaixo dão ao celular uma outra função: lanterna.
      </p>
      <p>
        Elas usam o próprio escuro. Um abajur que apaga e acende, uma bolinha de luz na parede, um quarto silencioso
        para escutar. Estão separadas por idade, com uma parte no final para duas crianças de idades diferentes.
      </p>

      <h2>Para um bebê: o abajur e a bolinha de luz</h2>
      <p>
        <GameLink id="lamp-off-lamp-on" /> funciona a partir dos 2 meses. Sente perto de um abajur que você alcança, com
        o bebê no colo. Diga “apagou” devagar e apague, espere ele procurar a luz, depois diga “acendeu” e acenda de
        novo. Estique a pausa no escuro um pouco a cada vez e mantenha a voz suave.
      </p>
      <p>
        É um cadê-achou com abajur. Quando pesquisadores quebraram o ritmo do cadê-achou com bebês de 2 a 6 meses, os
        bebês reagiram <Cite id="rochat-1999" />.
      </p>
      <p>
        <GameLink id="light-spot-hunt" /> funciona a partir dos 5 meses, num quarto na penumbra com o bebê no colo.
        Aponte a lanterna do celular para a parede e espere o bebê achar a bolinha de luz. Deslize a luz devagar pela
        parede, depois apague e pergunte “Cadê?”. Acenda em outro lugar e deixe ele achar antes de mudar de novo. Bebês
        de cinco meses e meio a seis meses e meio conseguiam achar um brinquedo depois de uma pequena espera{" "}
        <Cite id="reznick-2004" />.
      </p>

      <h2>Para uma criança de 1 a 3 anos: uma estrela no teto</h2>
      <p>
        <GameLink id="ceiling-star-spot" /> funciona a partir de 1 ano. Deitem lado a lado num quarto escuro, aponte a
        lanterna para o teto e deslize a luz devagar por ele. Seu filho segue a estrela com os olhos e, quando ela para,
        aponta para ela. Apague, pergunte “Onde ela estava?” e deixe ele apontar antes de acender de novo para conferir.
      </p>
      <p>
        Harvard chama esse tipo de brincadeira de saque e devolução: compartilhe o foco do seu filho, dê nome ao que ele
        vê, revezem e espere <Cite id="serve-return" />.
      </p>
      <p>
        <GameLink id="goodnight-room-dark" /> é a partir dos 2 anos. Deem boa-noite juntos a três coisas do quarto, tipo
        o abajur, a cadeira e o ursinho, apontando para cada uma. Apague a luz e pergunte “Cadê o abajur?” para seu filho
        apontar no escuro. Acenda para conferir, depois pergunte pelas outras duas. Num estudo, crianças de dois anos
        lembravam quais potes já tinham esvaziado <Cite id="hughes-ensor-2005" />.
      </p>

      <h2>A partir dos 2 anos: estátua no escuro</h2>
      <p>
        <GameLink id="spot-chase" /> é a brincadeira para quando sobra energia. Deixe o quarto na penumbra, aponte a
        lanterna para o chão e deixe seu filho pisar na bolinha de luz. Faça a luz fugir enquanto ele persegue. Quando
        você desligar a lanterna, todo mundo congela até ela voltar. Depois passe a lanterna para ele e corra você atrás
        da luz.
      </p>
      <p>
        Num estudo de longo prazo, crianças de 22 a 45 meses tinham de parar e começar num sinal, além de esperar e
        cochichar <Cite id="kochanska-2000" />. Aqui o sinal é o escuro.
      </p>

      <h2>Para uma criança de 3 a 5 anos: trilhas e trocas</h2>
      <p>
        <GameLink id="torch-trail" /> se brinca deitado. Diminua a luz e ilumine três coisas com a lanterna, uma depois
        da outra. Desligue, e seu filho diz as três coisas na mesma ordem. Ponha uma quarta, depois passe a lanterna
        para ele testar você.
      </p>
      <p>
        <GameLink id="sun-moon-switch" /> pede você de pé ao lado do interruptor. Luz acesa quer dizer que seu filho diz
        “noite” e se encolhe. Luz apagada quer dizer que ele diz “dia” e se espreguiça. Mexa no interruptor em momentos
        inesperados, devagar no começo e depois rápido. Depois troquem, e erre de propósito. Dizer dia no lugar de noite
        é uma das tarefas que os pesquisadores já deram a crianças de 2 a 6 anos <Cite id="carlson-2005" />.
      </p>
      <p>
        Para o fim mais calmo da noite, <GameLink id="five-sounds" /> não precisa de luz nenhuma. Deitem quietinhos
        juntos de olhos fechados. Cada vez que um de vocês ouvir um som, cochiche o que foi e levante um dedo. Parem nos
        cinco e decidam juntos qual som foi o mais baixinho.
      </p>

      <h2>Duas crianças, uma lanterna</h2>
      <p>
        A Caça à luzinha termina com seu filho segurando a lanterna. Um irmão mais velho pode ficar com essa função a
        brincadeira inteira enquanto o bebê ou a criança menor caça a luz, como na Bolinha de luz ou na Estrela no teto.
        Você fica no chão entre os dois e vai dando nome às coisas.
      </p>
      <p>
        Mantenha a luz nas paredes, no teto e no chão, longe dos rostos. Use o celular só como lanterna e deixe ele com
        a tela para baixo quando a brincadeira acabar.
      </p>
      <p>
        Há mais em <Link href="/games/tag/lights">brincadeiras com luzes</Link>,{" "}
        <Link href="/games/tag/quiet">brincadeiras silenciosas</Link> e{" "}
        <Link href="/games/tag/bedtime">brincadeiras para a hora de dormir</Link>.
      </p>
    </>
  ),
};
