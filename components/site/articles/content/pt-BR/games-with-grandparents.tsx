import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-grandparents";

const { Link, GameLink } = linksIn("pt-BR");

export const article: Article = {
  ...english,
  title: "Brincadeiras fáceis para avós brincarem com os netos",
  description:
    "Brincadeiras de pouca energia que os avós podem fazer sentados numa cadeira ou com o bebê no colo, sem comprar nada. Sugestões para bebês e crianças de 1 a 5 anos.",
  body: (
    <>
      <p>
        Esta página é para dois leitores. Se você é o pai ou a mãe, é algo para mandar para a sua mãe ou o seu pai antes
        da próxima visita. Se você é avó ou avô, é uma lista curta de brincadeiras para fazer sentado, sem comprar nada e
        sem preparar nada.
      </p>
      <p>
        Todas as brincadeiras daqui levam de 5 a 10 minutos. A maioria só precisa de um colo, uma cadeira e a sua voz.
      </p>

      <h2>Para os pais: o que passar adiante</h2>
      <p>
        Escolha duas brincadeiras que combinem com a idade do seu filho e mande os links antes. Cada brincadeira tem no
        máximo três passos curtos, então dá para ler tranquilamente no celular. Duas bastam para uma visita.
      </p>
      <p>
        Conte a eles a coisa que seu filho mais ama agora, como uma música, um bicho ou uma piada. Todas as brincadeiras
        abaixo podem incluir isso.
      </p>

      <h2>Para os avós: três hábitos</h2>
      <p>
        O Center on the Developing Child de Harvard chama o vai e vem da brincadeira de saque e devolução. Perceba no que
        a criança está focada e compartilhe esse foco. Responda. Dê nome ao que ela vê ou sente. Depois revezem, e espere{" "}
        <Cite id="serve-return" />. Nenhum desses passos pede pernas rápidas ou um brinquedo. Se o chão é duro para os
        seus joelhos ou as suas costas, todas as brincadeiras abaixo funcionam numa cadeira ou no sofá.
      </p>
      <ul>
        <li>
          <strong>Espere mais do que parece natural.</strong> Dê a uma criança pequena alguns segundos para responder.
        </li>
        <li>
          <strong>Deixe a criança conduzir.</strong> Se ela mudar a brincadeira, brinque do jeito dela.
        </li>
        <li>
          <strong>Pare enquanto ainda estiver divertido.</strong> Repetir a mesma brincadeira na próxima visita é ótimo.
        </li>
      </ul>

      <h2>Com um bebê no colo</h2>
      <p>
        A Academia Americana de Pediatria descreve como a brincadeira do bebê cresce do sorriso social para o saque e
        devolução, o cadê-achou e as palminhas <Cite id="aap-play" />. As duas brincadeiras abaixo cabem num colo.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> funciona a partir dos 6 meses. Pergunte “Cadê o nariz?” e espere o tempo de
        uma respiração lenta olhando o rostinho do bebê. Toque de leve no nariz e diga “nariz”, depois faça o mesmo com
        orelhas, dedinhos do pé e barriga. Depois de algumas rodadas, pergunte “Cadê o meu nariz?” e leve a mãozinha dele
        até o seu. Num ensaio, orientar os pais a responder assim a bebês de 6 a 10 meses melhorou a atenção dos bebês e
        a capacidade de resolver problemas sozinhos <Cite id="landry-2006" />.
      </p>
      <p>
        <GameLink id="little-piggy-pause" /> funciona a partir dos 2 meses, com pezinhos descalços no seu colo. Recite
        “Dedo mindinho” nos dedos do pé do bebê, devagar, um dedinho para cada verso. No último dedinho, pare e segure o
        pezinho parado contando devagar até três. Depois suba os dedos até a barriguinha com um “iiiiih!” e comece no
        outro pé.
      </p>

      <h2>Com uma criança de 1 a 3 anos</h2>
      <p>
        <GameLink id="you-say-three" /> é um cavalinho no joelho com uma pausa no meio. Faça cavalinho com o seu neto no
        joelho e conte “um, dois”, depois pare de repente com as mãos no ar. Espere, de sobrancelhas erguidas, até ele
        dizer “três”, e aí dê o maior pulo de todos. Bebês de 9 a 18 meses que faziam brincadeiras de revezar com um
        adulto sinalizavam quando o adulto perdia a vez <Cite id="ross-lollis-1987" />. Aqui você perde a vez de
        propósito.
      </p>
      <p>
        <GameLink id="face-copy-feelings" /> pede uma criança nos seus joelhos, nariz com nariz. Faça uma cara bem grande,
        diga o nome dela, tipo “surpresa”, e segure até a criança copiar. Tente cara de feliz, de sono, de bravo e de
        bobo. Depois troquem, para ela fazer uma cara, você copiar e os dois adivinharem o sentimento.
      </p>

      <h2>Com uma criança de 3 a 5 anos</h2>
      <p>
        <GameLink id="grandma-footsteps" /> tem, em inglês, o nome perfeito: Grandma’s Footsteps, os passos da vovó.
        Sente numa cadeira de costas para o seu neto, que começa lá na parede do outro lado. Ele vem chegando de
        fininho, e sempre que você virar, ele tem que estar congelado. Quem você pegar se mexendo volta para a parede, e
        um toque no seu ombro ganha. Pré-escolares que brincaram de brincadeiras de roda, como estátua com regras
        trocadas, melhoraram a autorregulação <Cite id="tominey-mcclelland-2011" />.
      </p>
      <p>
        <GameLink id="story-stones" /> só precisa de uma voz cansada. Comece toda história com “Era uma vez um
        dragãozinho” e revezem acrescentando exatamente três palavras. Contem as palavras nos dedos, para ninguém enfiar
        uma quarta. Crianças de 3 a 5 anos que passaram cinco semanas em faz de conta fantasioso melhoraram a memória de
        trabalho e o autocontrole <Cite id="thibodeau-2016" />.
      </p>
      <p>
        <GameLink id="i-spy-switch" /> é o “estou vendo uma coisa” com uma reviravolta. Diga “estou vendo uma coisa
        vermelha”, e o seu neto acha sem sair do lugar. Depois de três cores, mude a pista para formas e depois para a
        função das coisas. Crianças de 3 a 5 anos já foram testadas nesse mesmo tipo de troca: separar por cor, depois
        por forma <Cite id="zelazo-2006" />.
      </p>
      <p>
        Mais brincadeiras para fazer numa cadeira estão em{" "}
        <Link href="/games/tag/sitting">brincadeiras para fazer sentado</Link>,{" "}
        <Link href="/games/tag/on-your-lap">brincadeiras de colo</Link> e{" "}
        <Link href="/games/energy/low">brincadeiras para pais cansados</Link>.
      </p>
    </>
  ),
};
