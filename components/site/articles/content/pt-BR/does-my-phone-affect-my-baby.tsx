import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../does-my-phone-affect-my-baby";

const { Link, GameLink } = linksIn("pt-BR");

export const article: Article = {
  ...english,
  title: "Meu uso do celular afeta meu bebê?",
  description:
    "O que mostram os experimentos do rosto imóvel, o que os estudos do dia a dia só relacionam e os pequenos hábitos que mantêm o vai e vem com seu bebê.",
  body: (
    <>
      <p>
        Se você está se perguntando isso, já está prestando atenção. O celular também é como você vê as horas, manda
        mensagem para o pediatra e atravessa uma mamada de madrugada. Ele não vai a lugar nenhum.
      </p>
      <p>
        A pesquisa é mais tranquila do que você talvez tema. Ela não aponta para a olhada rápida. Num estudo com pais de
        crianças de até 5 anos, uma olhada rápida no celular não fez diferença para o pai ou a mãe responder à criança{" "}
        <Cite id="vanden-abeele-2020" />. O que ela aponta é o tempo longo e absorto. Veja o que os estudos mostram, e o
        quanto eles têm certeza.
      </p>

      <h2>O que os experimentos mostram</h2>
      <p>
        Num experimento, os pesquisadores mudam uma coisa de propósito e observam o que vem depois. Isso permite dizer
        mais sobre causa.
      </p>
      <p>
        O clássico é o experimento do rosto imóvel (still face). Mães de bebês de 1 a 4 meses mantiveram o rosto parado
        e sem resposta. Em poucos minutos, os bebês ficaram desconfiados e se retraíram <Cite id="tronick-1978" />. Os
        bebês percebem quando o vai e vem para.
      </p>
      <p>
        Uma versão mais nova usou o celular. Quando as mães se voltaram para o celular no meio de uma tarefa de rosto
        imóvel, bebês de 7 a 24 meses ficaram aflitos <Cite id="myruski-2018" />.
      </p>
      <p>
        As crianças pequenas tentam reconquistar você. Mães de crianças de 20 a 22 meses interromperam a brincadeira por
        dois minutos para preencher um questionário, no celular ou no papel. Os dois grupos ficaram menos responsivos, e
        os filhos fizeram mais chamados por atenção <Cite id="konrad-2021" />. O papel fez o mesmo que o celular. O que
        importou foi a pausa na atenção, não a tela.
      </p>
      <p>
        As interrupções também podem custar aprendizado. Mães ensinaram duas palavras novas aos filhos de 2 anos. As
        crianças aprenderam a palavra ensinada sem pausa, mas não a interrompida por uma ligação{" "}
        <Cite id="reed-2017" />.
      </p>

      <h2>O que os estudos do dia a dia só relacionam</h2>
      <p>
        Outros estudos observam famílias ou perguntam aos pais sobre o dia deles. Eles conseguem achar coisas que andam
        juntas. Não conseguem dizer qual causou a outra.
      </p>
      <ul>
        <li>
          No estudo do rosto imóvel com celular, os bebês cujas mães usavam mais aparelhos em casa se recuperaram menos{" "}
          <Cite id="myruski-2018" />. Essa parte é uma relação.
        </li>
        <li>
          Pais que relataram mais interrupções do celular durante o tempo em família também relataram mais problemas de
          comportamento no filho <Cite id="mcdaniel-radesky-2018" />.
        </li>
        <li>
          Quando famílias com um filho de 0 a 5 anos foram acompanhadas por seis meses, a relação foi nos dois sentidos.
          O comportamento mais difícil da criança previu mais interferência da tecnologia por meio do estresse parental,
          e essa interferência muitas vezes previu mais problemas de comportamento depois{" "}
          <Cite id="mcdaniel-radesky-2018b" />.
        </li>
      </ul>
      <p>
        Então o pai ou a mãe estressado que pega o celular não é o vilão desta história. Nesse estudo, o estresse e o
        uso do celular andavam juntos.
      </p>

      <h2>Por que uma olhada não é o problema</h2>
      <p>
        O estudo dos parquinhos descobriu que uma olhada rápida não fez diferença, enquanto estar muito absorto em
        outras tarefas teve mais ou menos o mesmo efeito que o celular <Cite id="vanden-abeele-2020" />. O celular é só
        uma das muitas coisas que podem te afastar.
      </p>
      <p>
        As pausas também fazem parte da brincadeira. O guia de Harvard sobre saque e devolução para bebês inclui revezar,
        esperar e praticar fins e começos, com o cadê-achou como exemplo <Cite id="serve-return" />. Uma pausa seguida
        do seu rosto voltando é exatamente o que o cadê-achou é.
      </p>

      <h2>O que ajuda hoje à noite</h2>
      <p>
        A boa notícia também existe do outro lado. Quando pais de bebês de 6 a 10 meses foram orientados a responder com
        sensibilidade, a atenção dos bebês e a capacidade de resolver problemas sozinhos melhoraram{" "}
        <Cite id="landry-2006" />. Quando pais de bebês de 6 a 21 meses foram orientados a seguir a iniciativa da
        criança, responder e se encantar com ela, os filhos tiveram mais flexibilidade mental aos 4 anos{" "}
        <Cite id="lind-2017" />.
      </p>
      <p>
        A Academia Americana de Pediatria recomenda manter os momentos de brincadeira entre pais e filhos livres de
        telas, para os pais e também para as crianças, e sugere ativar o Não Perturbe nesses momentos{" "}
        <Cite id="aap-media-2016" />. Uma brincadeira curta basta para começar:
      </p>
      <ul>
        <li>
          <GameLink id="babble-back" />: responda a qualquer som do seu bebê como se fosse uma frase e depois espere a
          vez dele.
        </li>
        <li>
          <GameLink id="follow-their-gaze" />: olhe para onde seu bebê olhar e diga o nome da coisa com poucas palavras
          carinhosas.
        </li>
        <li>
          <GameLink id="hands-peekaboo" />: deite de costas com o bebê no peito e esconda o rosto atrás das mãos
          contando devagar até três.
        </li>
        <li>
          <GameLink id="copy-cat-faces" />: repita a careta ou o som do bebê logo depois que ele fizer.
        </li>
      </ul>
      <p>
        Para uma noite de manha, <GameLink id="baby-mind-reader" /> pede que você diga em voz alta o que seu bebê parece
        querer e depois faça uma pausa para a resposta dele. <GameLink id="house-sounds" /> deixa a chaleira e a porta
        fazerem o trabalho. Há mais em{" "}
        <Link href="/games/age/babies">brincadeiras para bebês de 0 a 12 meses</Link>, e o guia{" "}
        <Link href="/guides/phone-down-with-your-kid">Largue o celular perto do seu filho</Link> traz passos para o
        próprio celular.
      </p>
      <p>Se você está preocupado com o desenvolvimento do seu bebê, converse com o pediatra.</p>
    </>
  ),
};
