import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../phone-down-with-your-kid";

const { Link, GameLink } = linksIn("pt-BR");

export const article: Article = {
  ...english,
  title: "Largue o celular perto do seu filho: um guia para pais que vivem rolando a tela",
  description:
    "O que é technoference, o que os estudos viram quando os pais pegam o celular perto dos filhos e passos para deixar o seu de lado à noite.",
  body: (
    <>
      <p>
        Eu tenho uma filha. Trabalho o dia inteiro, chego em casa e pego o celular. Tentei os bloqueadores. Apaguei as
        redes sociais. O hábito ficou.
      </p>
      <p>
        Se isso parece a sua noite, este guia é para você. Ele mostra as palavras que os pesquisadores usam para isso,
        o que os estudos deles descobriram e por que pegar o celular é um hábito, e não um defeito seu. Depois, traz
        passos que você pode testar hoje à noite.
      </p>

      <h2>Duas palavras para a mesma noite</h2>
      <p>
        <strong>Technoference</strong> é o nome que os pesquisadores deram às interrupções do dia a dia que os
        aparelhos trazem para o tempo juntos. No estudo que criou o termo, a maioria das mulheres disse que os
        aparelhos muitas vezes interrompiam o tempo com o parceiro, e as que relataram mais disso também relataram mais
        conflitos por causa da tecnologia e menos satisfação com a relação <Cite id="mcdaniel-coyne-2016" />. Hoje a
        mesma palavra é usada para o celular que interrompe o tempo em família com crianças pequenas{" "}
        <Cite id="mcdaniel-radesky-2018" />.
      </p>
      <p>
        <strong>Phubbing</strong> junta “phone” (celular) e “snubbing” (esnobar). Quer dizer esnobar alguém num momento
        social olhando para o celular em vez de conversar com a pessoa. Um estudo descobriu que quem fazia mais
        phubbing, e quem sofria mais com ele, o via como mais normal <Cite id="chotpitayasunondh-douglas-2016" />.
        Talvez seja por isso que ele passa tão despercebido em casa.
      </p>

      <h2>O que mostram os experimentos do rosto imóvel</h2>
      <p>
        O experimento mais conhecido aqui é mais antigo que o smartphone. Pesquisadores pediram a mães de bebês de 1 a 4
        meses que mantivessem o rosto parado e sem resposta. Em poucos minutos, os bebês ficaram desconfiados e se
        retraíram <Cite id="tronick-1978" />.
      </p>
      <p>
        Uma versão mais nova usou o celular. Quando as mães se voltaram para o celular no meio de uma tarefa de rosto
        imóvel, bebês de 7 a 24 meses ficaram aflitos <Cite id="myruski-2018" />. Num estudo parecido, mães de crianças
        de 20 a 22 meses interromperam a brincadeira por dois minutos para preencher um questionário, no celular ou no
        papel. Os dois grupos ficaram menos responsivos, e os filhos fizeram mais chamados por atenção{" "}
        <Cite id="konrad-2021" />. O celular é um tipo de interrupção. O papel fez o mesmo.
      </p>
      <p>
        As interrupções também podem custar aprendizado. Mães ensinaram duas palavras novas aos filhos de 2 anos. As
        crianças aprenderam a palavra ensinada sem pausa, mas não a interrompida por uma ligação, embora as duas
        palavras tenham sido ditas o mesmo número de vezes <Cite id="reed-2017" />.
      </p>

      <h2>O que os estudos do dia a dia encontraram</h2>
      <p>
        Fora do laboratório, os pesquisadores observam famílias ou perguntam aos pais sobre o dia deles. Esses estudos
        mostram relações, não causas.
      </p>
      <ul>
        <li>
          Em lanchonetes de fast food, a maioria de 55 cuidadores que comiam com crianças pequenas usou o celular
          durante a refeição. Os mais absortos muitas vezes responderam à criança tarde ou com rispidez{" "}
          <Cite id="radesky-2014" />.
        </li>
        <li>
          Em salas de espera e parquinhos, a chance de o pai ou a mãe responder a um chamado da criança foi cinco vezes
          menor enquanto estava no celular. Uma olhada rápida não fez diferença, e estar muito absorto em outras tarefas
          teve mais ou menos o mesmo efeito <Cite id="vanden-abeele-2020" />.
        </li>
        <li>
          Pais que relataram mais interrupções do celular durante o tempo em família também relataram mais problemas de
          comportamento no filho <Cite id="mcdaniel-radesky-2018" />.
        </li>
        <li>
          Numa tarefa filmada em laboratório com 225 mães e seus filhos de 6 anos, 23% das mães usaram um aparelho
          celular sem que ninguém pedisse. As que usaram tiveram menos interações com a criança, sobretudo as não
          verbais <Cite id="radesky-2015" />.
        </li>
      </ul>
      <p>
        A Academia Americana de Pediatria lê esses estudos do mesmo jeito: o uso intenso de aparelhos celulares pelos
        pais está associado a menos interações verbais e não verbais entre pais e filhos{" "}
        <Cite id="aap-media-2016" />. “Associado” é a palavra cuidadosa. Esses estudos não conseguem dizer o que veio
        primeiro.
      </p>
      <p>
        Um experimento olhou o lado dos pais. Num museu de ciências, pais a quem se pediu que usassem muito o celular se
        sentiram mais distraídos e menos conectados aos filhos do que pais a quem se pediu que usassem pouco{" "}
        <Cite id="kushlev-dunn-2019" />. O celular também tira algo de você.
      </p>

      <h2>Um hábito, não um defeito</h2>
      <p>
        Nada disso faz de você um pai ou uma mãe ruim. Pesquisadores que estudaram usuários de smartphone encontraram um
        “hábito de checagem”: olhadas breves e repetidas em conteúdos de acesso rápido. Os usuários sentiam isso mais
        como um incômodo do que como um vício <Cite id="oulasvirta-2012" />.
      </p>
      <p>
        Os hábitos funcionam com a cabeça em outro lugar. Em estudos com diários, as pessoas que faziam algo que
        repetiam quase todo dia no mesmo lugar tendiam a pensar em outra coisa <Cite id="wood-2002" />. Também é difícil
        enxergar o próprio hábito. Jovens adultos cujos celulares registravam o uso pegavam o aparelho cerca de 85 vezes
        por dia e o usavam por cerca de cinco horas, mais ou menos o dobro do que estimavam{" "}
        <Cite id="andrews-2015" />.
      </p>
      <p>
        O estresse tem seu papel. Num estudo de seis meses com casais com um filho de 0 a 5 anos, o comportamento mais
        difícil da criança previu mais interferência da tecnologia por meio do estresse parental, e essa interferência
        muitas vezes previu mais problemas de comportamento depois <Cite id="mcdaniel-radesky-2018b" />. As noites
        difíceis e o celular andavam juntos, nas duas direções.
      </p>
      <p>
        Apagar os apps não apagou a vontade de pegar o celular. Por isso os passos abaixo não pedem mais força de
        vontade. Eles mudam o ambiente em volta do hábito e dão outro destino para essa mão que vai até o celular.
      </p>

      <h2>Escolha um horário sem celular</h2>
      <p>
        A Academia Americana de Pediatria recomenda manter quartos, refeições e momentos de brincadeira entre pais e
        filhos livres de telas, para os pais e também para as crianças, e sugere ativar o Não Perturbe nesses momentos{" "}
        <Cite id="aap-media-2016" />.
      </p>
      <p>
        Comece com um horário, não com a noite inteira. Mantenha-o na mesma hora e no mesmo lugar todos os dias. Num
        estudo sobre novos hábitos, as pessoas repetiram um comportamento todo dia no mesmo contexto. Levaram de 18 a 254
        dias para chegar ao pico de automatismo, e pular um dia não afetou isso de forma significativa{" "}
        <Cite id="lally-2010" />.
      </p>
      <ul>
        <li>Os primeiros 15 minutos depois que você entra em casa.</li>
        <li>O jantar, da primeira à última garfada.</li>
        <li>Do banho até a cama.</li>
      </ul>
      <p>Escolha um e organize tudo para que ele aconteça sem você precisar decidir toda noite:</p>
      <ul>
        <li>
          <strong>Amarre a um sinal.</strong> A porta de casa, o primeiro prato na mesa, a torneira do banho. O sinal é
          a hora em que o celular vai embora.
        </li>
        <li>
          <strong>Diga em voz alta.</strong> Conte ao seu parceiro ou ao seu filho, para que mais alguém conheça a
          regra.
        </li>
        <li>
          <strong>Defina as exceções agora.</strong> Uma ligação da babá ou uma emergência do trabalho pode passar. Todo
          o resto espera o horário acabar.
        </li>
        <li>
          <strong>Comece curto.</strong> Quinze minutos que você cumpre valem mais que uma hora que você abandona.
          Aumente quando o horário curto parecer normal.
        </li>
      </ul>

      <h2>Deixe o celular fora de alcance</h2>
      <p>
        Mude o celular de lugar, não só a sua atenção. Num experimento, pessoas numa refeição em restaurante com amigos
        ou família foram orientadas a deixar o celular na mesa ou guardá-lo. Com o celular na mesa, elas se sentiram
        mais distraídas e aproveitaram menos a refeição <Cite id="dwyer-2018" />.
      </p>
      <p>
        A vibração também tem um custo. Só as notificações, sem ninguém tocar no celular, atrapalharam uma tarefa de
        atenção mais ou menos tanto quanto atender uma ligação ou mandar mensagem <Cite id="stothart-2015" />.
      </p>
      <ul>
        <li>Durante o seu horário, deixe o celular carregando em outro cômodo, virado para baixo e no silencioso.</li>
        <li>Ative o Não Perturbe antes de entrar em casa, para que a primeira vibração nunca chegue.</li>
        <li>Se você precisa estar disponível, deixe passar ligações de algumas pessoas e silencie o resto.</li>
      </ul>
      <p>
        Você não precisa desligar as notificações para sempre. Num estudo, pessoas foram sorteadas para receber
        notificações como sempre, agrupadas três vezes por dia ou nunca. O grupo com notificações agrupadas se sentiu
        mais atento, de melhor humor, com mais controle sobre o celular e menos estressado, e o grupo sem notificações
        se sentiu mais ansioso <Cite id="fitz-2019" />. Seu iPhone pode agrupá-las para você com o{" "}
        <a href="https://support.apple.com/guide/iphone/change-notification-settings-iph7c3d96bab/ios">
          Resumo Agendado
        </a>
        . Programe um resumo para depois que seu filho dormir.
      </p>

      <h2>Dê um destino para essa vontade</h2>
      <p>
        A vontade ainda vai aparecer. Tenha algo pronto para as suas mãos e os seus olhos. A ideia de saque e devolução,
        de Harvard, é um bom ponto de partida para bebês e crianças pequenas: perceba o que seu filho está olhando, dê
        nome a isso, revezem e espere <Cite id="serve-return" />.
      </p>
      <p>
        Esse tipo de atenção dá resultado nos estudos. Quando pais de bebês de 6 a 10 meses foram orientados a responder
        com sensibilidade, a atenção dos bebês e a capacidade de resolver problemas sozinhos melhoraram{" "}
        <Cite id="landry-2006" />. Quando pais de bebês de 6 a 21 meses foram orientados a seguir a iniciativa da
        criança, responder e se encantar com ela, os filhos tiveram mais flexibilidade mental aos 4 anos{" "}
        <Cite id="lind-2017" />.
      </p>
      <p>
        As brincadeiras facilitam isso numa noite cansada. Cada uma destas leva de 5 a 12 minutos e quase nenhuma
        energia:
      </p>
      <ul>
        <li>
          Com um bebê, experimente <GameLink id="babble-back" />: responda a qualquer som como se fosse uma frase de
          verdade e depois dê um bom tempo para ele responder. Ou <GameLink id="follow-their-gaze" />, em que você olha
          para onde ele olha e dá nome à coisa.
        </li>
        <li>
          Com uma criança de 1 a 3 anos, experimente <GameLink id="animal-sound-swap" />, em que vocês trocam de papel
          dizendo o nome dos bichos e fazendo o som deles, ou <GameLink id="lumpy-blanket-hide" />, em que você procura
          em voz alta seu filho escondido debaixo de uma manta.
        </li>
        <li>
          Com uma criança de 3 a 5 anos, experimente <GameLink id="pretend-phone" />, em que sua mão vira o telefone e
          quem liga é a vovó ou um lobo com fome, ou <GameLink id="story-stones" />, uma história contada de três em três
          palavras.
        </li>
      </ul>
      <p>
        Escolha a brincadeira antes de o horário começar. Quando o sinal vier, você já sabe o que suas mãos vão fazer. Se
        tiver mais energia do que esperava, escolha entre as{" "}
        <Link href="/games/energy/medium">brincadeiras fáceis para uma noite comum</Link>. Numa noite sem pique, há mais
        em <Link href="/games/energy/low">brincadeiras para pais cansados</Link>, muitas delas para fazer deitado.
      </p>

      <h2>Deixe o iPhone segurar a regra</h2>
      <p>
        Você não precisa vigiar o horário na mão toda noite. Seu iPhone pode{" "}
        <a href="https://support.apple.com/guide/iphone/set-up-a-focus-iphd6288a67f/ios">
          silenciar as notificações com um modo Foco
        </a>{" "}
        e ativá-lo numa hora definida. O Tempo de Uso pode{" "}
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          definir horários em que os apps ficam disponíveis
        </a>
        . O guia de{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">Tempo de Uso para as noites em família</Link> mostra os
        ajustes passo a passo.
      </p>
      <p>
        Antes de mudar qualquer coisa, olhe o seu próprio número. O{" "}
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          relatório do Tempo de Uso
        </a>{" "}
        mostra quantas vezes você pegou o celular por dia. Confira de novo depois de duas semanas com o seu horário.
      </p>
      <p>
        O Oyno usa o mesmo Tempo de Uso para pausar os apps que você escolher durante o Tempo em família, e um app
        pausado mostra um botão que leva a uma brincadeira.
      </p>

      <h2>Quando escapar</h2>
      <p>
        Em algumas noites você vai rolar a tela durante o jantar inteiro. Tudo bem. No estudo sobre hábitos, pular um
        dia não afetou o hábito de forma significativa <Cite id="lally-2010" />. Recomece no horário de amanhã.
      </p>
      <p>
        Seu filho também não precisa de um pai ou uma mãe que nunca olhe o celular. No estudo dos parquinhos, uma
        olhada rápida não fez diferença para o pai ou a mãe responder à criança <Cite id="vanden-abeele-2020" />. Mire
        na rolagem longa e absorta, e deixe para lá a olhada rápida para ver as horas.
      </p>
    </>
  ),
};
