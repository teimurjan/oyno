import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../exhausted-parent-toddler";

const { Link, GameLink } = linksIn("pt-BR");

export const article: Article = {
  ...english,
  title: "O que fazer com uma criança pequena quando você está exausto",
  description:
    "Cansado demais para brincar, mas seu filho não está? Veja jeitos honestos de atravessar a noite e brincadeiras para fazer deitado, quase sem energia.",
  body: (
    <>
      <p>
        Tem noite em que não sobra nada. Você trabalhou o dia inteiro, a casa está barulhenta, e seu filho quer que você
        corra, construa e cante. Você quer deitar no chão e não se mexer.
      </p>
      <p>
        Isso é normal. Este texto não vai te mandar se esforçar mais. Ele vai te dar alguns jeitos de ficar com seu
        filho que custam muito pouco.
      </p>

      <h2>Baixe a régua de propósito</h2>
      <p>
        Você não precisa de uma atividade manual, de um plano nem de uma sala arrumada. O que uma criança pequena tira
        de você é atenção, e atenção pode vir de um pai ou de uma mãe deitado.
      </p>
      <p>
        O material de Harvard sobre saque e devolução resume isso em alguns passos pequenos: perceba no que seu filho
        está focado e compartilhe esse foco, devolva o saque dele com apoio, dê nome ao que ele vê ou sente, revezem e
        espere <Cite id="serve-return" />. Tudo isso dá para fazer com os olhos meio fechados.
      </p>
      <p>
        Eu conheço a atração do celular nessas noites. Tentei bloqueadores e apaguei minhas redes sociais, e o hábito
        ficou. Por isso este texto não pede força de vontade. Ele te dá uma brincadeira para ter à mão.
      </p>

      <h2>Para uma criança de menos de dois anos</h2>
      <p>
        Experimente uma brincadeira com uma pausa. Em <GameLink id="piggy-pause-toes" />, seu filho senta no seu colo de
        pé descalço. Recite “Dedo mindinho” nos dedinhos do pé, mais devagar a cada dedo. Pare de repente antes do
        último e segure o dedo no ar até ele olhar para você. Depois termine com as cosquinhas.
      </p>
      <p>
        Crianças dessa idade percebem de quem é a vez. Bebês de 9 a 18 meses em brincadeiras de revezar, como dar e
        pegar e cadê-achou, sinalizavam quando o adulto perdia a vez <Cite id="ross-lollis-1987" />. A sua pausa é uma
        vez que ele pode pegar.
      </p>
      <p>
        <GameLink id="what-can-you-hear" /> pede ainda menos. Deitem juntos sem se mexer, fechem os olhos e cochiche “O
        que você está ouvindo?”. Não importa o que seu filho aponte ou diga, digam o nome juntos: a geladeira, um carro
        lá fora. Depois revezem achando um som novo cada um.
      </p>

      <h2>A partir dos dois anos: deite e dê uma regra só</h2>
      <p>
        Estas quatro são para crianças a partir dos 2 anos, e cada uma tem uma única regra. Todas deixam você ficar
        deitado.
      </p>
      <ul>
        <li>
          <GameLink id="pocket-kiss-hand" />: dê um beijo numa das palminhas do seu filho e ajude a fechar as duas mãos
          para guardar o beijo. Cante um verso de uma música e pergunte “Em qual mão está o beijo?”.
        </li>
        <li>
          <GameLink id="shy-tortoise-feet" />: seus pés debaixo da manta são duas tartarugas tímidas que só aparecem
          quando seu filho fecha os olhos. No instante em que ele espia, as duas se escondem de novo.
        </li>
        <li>
          <GameLink id="finger-candle-blow" />: levante um dedo como uma velinha. Um sopro rápido só faz a chama tremer e
          ficar em pé de novo, e só um sopro longo e lento dobra o dedo.
        </li>
        <li>
          <GameLink id="touch-the-bear" />: você é um urso dormindo no sofá. Cada grito faz você roncar mais alto, e só
          uma mão na sua pata te acorda.
        </li>
      </ul>
      <p>
        Pesquisadores que estudavam o autocontrole pediram a crianças de 22 a 45 meses que esperassem por um petisco,
        andassem devagar sobre uma linha e cochichassem <Cite id="kochanska-2000" />. Estas brincadeiras pedem o mesmo
        tipo de coisa, em doses pequenas, com você como prêmio.
      </p>

      <h2>Quando a hora de dormir está perto</h2>
      <p>
        Se a noite está quase no fim, escolha uma brincadeira que acalma. Em <GameLink id="sleepy-mirror-slow" />, vocês
        deitam lado a lado e fazem tudo em câmera lenta, para um bocejo levar uma respiração inteira. Seu filho copia
        cada movimento lento, uma espreguiçada, uma virada, uma coçadinha nos olhos. Deixe ele comandar um ou dois
        movimentos lentos, e terminem fechando os olhos no movimento mais lento de todos.
      </p>
      <p>
        Conversar também conta. O guia de Harvard para 18 a 36 meses lista conversa, histórias com “o que você vai fazer
        agora?” e conversa sobre sentimentos <Cite id="cdc-guide" />. Deitar no escuro e perguntar qual foi a melhor
        parte do dia é um ótimo jeito de terminar.
      </p>

      <h2>Pegue leve com você</h2>
      <ul>
        <li>Cinco minutos de brincadeira e depois dez minutos de silêncio lado a lado já são uma boa noite.</li>
        <li>Se uma brincadeira não pegar, pare. Tente outra amanhã.</li>
        <li>Se der, troque de função com outro adulto, nem que seja por vinte minutos.</li>
      </ul>
      <p>
        Se o cansaço não passa com descanso, ou se você se sente para baixo na maioria dos dias, converse com o seu
        médico. Isso é uma questão de saúde e merece cuidado.
      </p>
      <p>
        Para mais, veja as <Link href="/games/energy/low">brincadeiras para pais cansados</Link> ou as{" "}
        <Link href="/games/tag/lying-down">brincadeiras para fazer deitado</Link>. A página de{" "}
        <Link href="/games/age/toddlers">brincadeiras para crianças de 1 a 3 anos</Link> separa todas pela energia que
        sobrou para você.
      </p>
    </>
  ),
};
