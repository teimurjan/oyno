import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../parents-phone-use-around-kids";

const { Link, GameLink } = linksIn("pt-BR");

export const article: Article = {
  ...english,
  title: "Quanto os pais usam o celular perto dos filhos?",
  description:
    "O que os pesquisadores contaram ao observar pais com filhos pequenos em restaurantes, parquinhos e laboratórios, e o que esses números não dizem.",
  body: (
    <>
      <p>
        Se você já tirou os olhos do celular e encontrou seu filho olhando para você, provavelmente já se perguntou como
        se compara aos outros pais. Este post se limita ao que os pesquisadores viram e contaram ao observar pais com
        crianças. Quando um estudo não dá um número, o post diz isso.
      </p>

      <h2>À mesa</h2>
      <p>
        Um estudo mandou observadores a lanchonetes de fast food. Eles observaram 55 cuidadores comendo com crianças
        pequenas. A maioria usou o celular durante a refeição. Os cuidadores mais absortos nele muitas vezes responderam
        à criança tarde ou com rispidez <Cite id="radesky-2014" />.
      </p>
      <p>
        Esse estudo diz “a maioria”, não um número de horas. Ele mostra quão comum era o celular à mesa, não quanto tempo
        ele ficou na mão.
      </p>

      <h2>No parquinho</h2>
      <p>
        Um estudo posterior observou 53 pais de crianças de 0 a 5 anos em salas de espera e parquinhos. 23 deles usaram o
        celular enquanto eram observados <Cite id="vanden-abeele-2020" />.
      </p>
      <p>
        O mesmo estudo contou o que aconteceu em seguida. Enquanto o pai ou a mãe estava no celular, a chance de
        responder a um chamado da criança por atenção foi cinco vezes menor. Uma olhada rápida no celular não fez
        diferença. Estar muito absorto em outras tarefas teve mais ou menos o mesmo efeito{" "}
        <Cite id="vanden-abeele-2020" />.
      </p>
      <p>
        Um chamado é qualquer coisa que a criança faz para ganhar a sua atenção: apontar, chamar, puxar a sua manga. Em
        outras palavras, um pai ou uma mãe mergulhado no celular tinha muito menos chance de responder a um deles.
      </p>

      <h2>No laboratório</h2>
      <p>
        Num estudo de laboratório, 225 mães e seus filhos de 6 anos foram filmados durante uma tarefa. Ninguém pediu que
        as mães usassem um aparelho celular, e 23% delas usaram mesmo assim. As que usaram tiveram menos interações com a
        criança, sobretudo as não verbais <Cite id="radesky-2015" />.
      </p>
      <p>
        Essas crianças eram mais velhas que a faixa do Oyno, de 0 a 5 anos. Mesmo assim, o estudo põe uma porcentagem em
        quantas vezes um pai ou uma mãe pega um aparelho na frente do filho sem que ninguém peça.
      </p>

      <h2>Ao longo de um dia inteiro</h2>
      <p>
        Nenhum dos estudos acima acompanha um pai ou uma mãe por um dia inteiro com o registro do celular. Para o dia
        inteiro, os números aqui vêm de adultos em geral. Jovens adultos cujos celulares registravam o uso pegavam o
        aparelho cerca de 85 vezes por dia e o usavam por cerca de cinco horas, mais ou menos o dobro do que estimavam{" "}
        <Cite id="andrews-2015" />. Não eram pais, e o uso não foi contado perto de crianças.
      </p>
      <p>
        As pesquisas de questionário fazem outra pergunta: o celular atrapalha? A maioria das mulheres num estudo disse
        que os aparelhos muitas vezes interrompiam o tempo com o parceiro <Cite id="mcdaniel-coyne-2016" />. Pais de
        crianças pequenas que relataram mais interrupções do celular durante o tempo em família também relataram mais
        problemas de comportamento no filho <Cite id="mcdaniel-radesky-2018" />.
      </p>
      <p>
        Se você quer o seu próprio número, o iPhone conta para você. O{" "}
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          relatório do Tempo de Uso
        </a>{" "}
        mostra quantas vezes você pegou o celular em cada dia. Olhe uma noite antes de decidir qualquer coisa.
      </p>

      <h2>O que isso custa para você</h2>
      <p>
        A maioria desses estudos olha para a criança. Um experimento olhou para os pais. Num museu de ciências, pais a
        quem se pediu que usassem muito o celular se sentiram mais distraídos e menos conectados aos filhos do que pais a
        quem se pediu que usassem pouco <Cite id="kushlev-dunn-2019" />. O tempo com seu filho fica diferente quando o
        celular está no meio.
      </p>
      <p>
        A Academia Americana de Pediatria resume a pesquisa assim: o uso intenso de aparelhos móveis pelos pais está
        associado a menos interações verbais e não verbais entre pais e filhos <Cite id="aap-media-2016" />.
      </p>

      <h2>O que os números não dizem</h2>
      <p>
        Estes são estudos observacionais. Eles mostram o que os pais fizeram e o que veio junto. Não conseguem mostrar
        que o celular causou o comportamento da criança. Num estudo que acompanhou famílias por seis meses, a relação foi
        nos dois sentidos: o comportamento mais difícil da criança previu mais interferência da tecnologia por meio do
        estresse dos pais, e essa interferência muitas vezes previu mais comportamentos agitados depois{" "}
        <Cite id="mcdaniel-radesky-2018b" />.
      </p>
      <p>
        Eles também não dizem que toda olhada é um problema. O estudo do parquinho não viu efeito numa olhada rápida{" "}
        <Cite id="vanden-abeele-2020" />. É o trecho longo e absorto que os números apontam.
      </p>
      <p>
        A Academia Americana de Pediatria recomenda manter as refeições e as horas de brincar entre pais e filhos sem
        telas, para os pais e para as crianças, e sugere ativar o Não Perturbe nesses momentos{" "}
        <Cite id="aap-media-2016" />. Uma brincadeira curta preenche esse tempo sem muito esforço. Com um bebê,
        experimente <GameLink id="hands-peekaboo" /> ou <GameLink id="babble-back" />. Com uma criança de 1 a 3 anos,
        experimente <GameLink id="give-and-take" /> ou <GameLink id="animal-sound-swap" />. Com uma criança de 3 a 5
        anos, experimente <GameLink id="pretend-phone" />, em que o único telefone é a sua mão. Há mais em{" "}
        <Link href="/games/age/toddlers">brincadeiras para crianças de 1 a 3 anos</Link> e em{" "}
        <Link href="/games/age/babies">brincadeiras para bebês de 0 a 12 meses</Link>, e o guia{" "}
        <Link href="/guides/phone-down-with-your-kid">Largue o celular perto do seu filho</Link> tem passos para a
        noite.
      </p>
    </>
  ),
};
