import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../iphone-screen-time-family-evenings";

const { Link, GameLink } = linksIn("pt-BR");

export const article: Article = {
  ...english,
  title: "Como configurar o Tempo de Uso do iPhone para as noites em família",
  description:
    "Passo a passo: configure o Tempo de Uso no seu próprio iPhone para que a noite com seu filho continue sua, mais o que ele não faz e o que brincar no lugar.",
  body: (
    <>
      <p>
        Este guia é sobre o seu celular, não o do seu filho. Se você chega em casa cansado e o celular toma a hora antes
        de dormir, o Tempo de Uso no seu próprio iPhone pode cercar essa hora. É grátis, já está no seu celular e dá para
        configurar hoje à noite.
      </p>
      <p>
        Vale a pena. Num experimento, pais num museu de ciências a quem se pediu que usassem muito o celular se sentiram
        mais distraídos e menos conectados aos filhos do que pais a quem se pediu que usassem pouco{" "}
        <Cite id="kushlev-dunn-2019" />.
      </p>
      <p>
        Os passos abaixo seguem as páginas de suporte da própria Apple para o iOS 27, a versão mais recente que a Apple
        documenta. Se o seu iPhone usa o iOS 26 ou anterior, os menus têm outros nomes, e há uma seção para você perto
        do fim.
      </p>

      <h2>O que mudou no iOS 27</h2>
      <p>
        Guias mais antigos falam de Repouso e Limites de Apps. Para o iOS 27, o guia da Apple descreve duas outras
        ferramentas. Os <strong>Horários do Tempo de Uso</strong> definem quando, durante o dia, você pode usar seus
        apps. Os <strong>Limites de Tempo</strong> definem por quanto tempo você pode usá-los a cada dia, por categoria,
        como Entretenimento, Jogos ou Redes Sociais. O próprio exemplo da Apple é um horário com períodos para o
        trabalho, o jantar e a noite (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Suporte da Apple: Defina Horários e Limites de Tempo
        </a>
        ).
      </p>
      <p>
        A Apple avisa que esses recursos precisam do iOS 27 ou posterior em todos os seus dispositivos Apple. Se o seu
        iPad ou Mac ainda está numa versão mais antiga, atualize-o primeiro, ou os passos abaixo podem não bater com o
        que você vê.
      </p>

      <h2>Passo 1: Ative o Tempo de Uso e olhe a sua semana</h2>
      <p>
        Abra o app Ajustes e toque em Tempo de Uso. Toque em Gerenciar Tempo de Uso e depois em Ativar Atividade em
        Apps e Sites (
        <a href="https://support.apple.com/guide/iphone/set-up-screen-time-for-yourself-iphbfa595995/ios">
          Suporte da Apple: Configure o Tempo de Uso para você
        </a>
        ).
      </p>
      <p>
        Se você já usa há algum tempo, olhe antes de mudar qualquer coisa. Toque em Média Diária e depois em Semana. Role
        para baixo até as ativações para ver quantas vezes você pegou o celular. Anote os dois ou três apps que você
        mais usa. São esses os apps que você vai cercar.
      </p>
      <p>
        O número real pode ser maior do que você imagina. Num estudo, jovens adultos cujos celulares registravam o uso
        pegavam o aparelho cerca de 85 vezes por dia e o usavam por cerca de cinco horas, mais ou menos o dobro do que
        estimavam <Cite id="andrews-2015" />.
      </p>
      <p>
        Se você também usa um iPad ou um Mac, a Apple deixa você compartilhar esses ajustes entre eles. Toque em
        Gerenciar Tempo de Uso e ative Sincronizar Entre Dispositivos. Com isso ativado, o horário que você definir
        abaixo vale em todos eles, e a noite não se muda para o iPad.
      </p>

      <h2>Passo 2: Defina limites para os apps que mais puxam você</h2>
      <p>
        Os Limites de Tempo funcionam por categoria. Você pode usar os apps de uma categoria até atingir o limite dessa
        categoria ou o seu total diário, o que vier primeiro.
      </p>
      <ol>
        <li>Abra os Ajustes, toque em Tempo de Uso e depois em Limites de Tempo.</li>
        <li>
          Toque em Gerenciar Categorias, toque no botão de adicionar e escolha uma categoria, como Redes Sociais ou
          Entretenimento.
        </li>
        <li>
          De volta a Limites de Tempo, toque na categoria e arraste o controle para definir quanto tempo você tem por
          dia.
        </li>
        <li>
          Para ver quais apps estão numa categoria, toque em Gerenciar Categorias e depois na categoria. Ali você também
          vê a sua média de uso diário, e pode tocar num app para ver a dele.
        </li>
      </ol>
      <p>Comece pelos apps do Passo 1. Seja honesto sobre quais deles devoram a noite.</p>
      <p>
        Um detalhe importa se você rola a tela no navegador. A Apple diz que, se um app tiver um site associado a ele, o
        Limite de Tempo vale para os dois. Então limitar um app também pode limitar o site dele.
      </p>

      <h2>Passo 3: Dê à noite o seu próprio período</h2>
      <p>
        Esta é a parte que protege a hora com seu filho. Você cria um horário e, dentro dele, um período que cobre a sua
        noite em família.
      </p>
      <ol>
        <li>Abra os Ajustes, toque em Tempo de Uso, toque em Horários do Tempo de Uso e ative Horários.</li>
        <li>Toque em Adicionar Horários, toque nos dias que você quer, como de segunda a sexta, e confirme.</li>
        <li>Toque no período. Toque no nome dele e dê um nome simples, como “Noite”.</li>
        <li>Toque nas horas de início e de término e ajuste para as horas em que você está em casa com seu filho.</li>
        <li>
          Abaixo do período, toque nas categorias de Limites de Tempo que você quer disponíveis nessa hora. Deixe de fora
          as que você configurou no Passo 2 para os apps que mais puxam você.
        </li>
      </ol>
      <p>
        Cada período mostra os ícones das categorias que ele permite, para você ver de relance que tipos de apps ficam
        abertos à noite. Se os fins de semana são diferentes, adicione um segundo horário para sábado e domingo, com as
        horas dele.
      </p>
      <p>
        De volta a Limites de Tempo, a Apple também tem uma opção chamada Aplicar os Horários do Tempo de Uso. Ative-a se
        quiser que seus limites valham só em certos períodos do seu horário.
      </p>
      <p>
        Escolha horas que você consiga cumprir, como do jantar até a hora de dormir. Isso bate com o que a Academia
        Americana de Pediatria recomenda às famílias: manter quartos, refeições e momentos de brincadeira entre pais e
        filhos livres de telas, para as crianças e para os pais <Cite id="aap-media-2016" />.
      </p>

      <h2>Passo 4: Escolha o que continua permitido</h2>
      <p>
        Alguns apps nunca devem ficar cercados. Seu parceiro precisa falar com você. A babá precisa falar com você. Você
        pode querer o Mapas, a câmera ou um app de saúde.
      </p>
      <ol>
        <li>Abra os Ajustes, toque em Tempo de Uso e depois em Sempre Permitidos.</li>
        <li>Toque em Adicionar Pessoas para incluir os contatos com quem você sempre pode falar e que sempre podem falar com você.</li>
        <li>Toque em Adicionar Apps para incluir os apps que ficam abertos, diga o horário o que disser.</li>
      </ol>
      <p>
        A Apple diz que os apps e contatos dessa lista continuam disponíveis independentemente de qualquer horário ou
        limite que você definir. Os exemplos dela são os membros da família e o app Saúde, para emergências. Mantenha a
        lista curta. Cada app nela é uma porta que fica aberta.
      </p>

      <h2>Passo 5: Tranque com um código</h2>
      <p>
        Um código do Tempo de Uso faz com que você precise digitar um código antes de mudar os ajustes acima (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Suporte da Apple: Crie, altere ou remova um código do Tempo de Uso
        </a>
        ).
      </p>
      <ol>
        <li>
          Abra os Ajustes, toque em Tempo de Uso, toque em Gerenciar Tempo de Uso e depois em Bloquear Ajustes do Tempo
          de Uso.
        </li>
        <li>Digite um código de quatro dígitos e digite de novo para confirmar.</li>
      </ol>
      <p>
        Agora a parte honesta. Foi você que criou esse código, então você sabe qual é. Às 20h, cansado, com o sofá e o
        celular ali do lado, um código que você conhece é uma lombada, não um muro.
      </p>
      <p>
        É por isso que alguns pais pedem ao parceiro que digite o código, para não saberem qual é. Ajuda. Mas a Apple
        também oferece a Recuperação do código do Tempo de Uso, que deixa você redefinir o código com a sua Conta Apple
        se esquecer. Se você ativar isso, o código do parceiro vira só mais um passo para você, não uma tranca. Decida o
        que você quer.
      </p>

      <h2>No iOS 26 ou anterior: Repouso e Limites de Apps</h2>
      <p>
        Se o seu iPhone ainda não passou para o iOS 27, as mesmas ideias têm nomes mais antigos (
        <a href="https://support.apple.com/guide/iphone/set-schedules-with-screen-time-iphb0c7313c9/26/ios/26">
          Suporte da Apple: Defina horários com o Tempo de Uso, iOS 26
        </a>
        ).
      </p>
      <ul>
        <li>
          <strong>Repouso</strong> é o período da noite. Nos Ajustes, toque em Tempo de Uso, depois em Repouso e depois
          em Agendado. Escolha Todos os Dias ou Personalizar Dias e defina as horas de início e de fim. A Apple manda um
          lembrete cinco minutos antes de começar.
        </li>
        <li>
          <strong>Limites de Apps</strong> são os limites de tempo. Toque em Limites de Apps, depois em Adicionar Limite,
          escolha categorias ou apps individuais, toque em Seguinte e defina o tempo.
        </li>
        <li>
          <strong>Sempre Permitidos</strong> funciona do mesmo jeito, para contatos e apps.
        </li>
      </ul>
      <p>
        Um porém: a Apple diz que, por padrão, esses limites podem ser ignorados quando você os atinge. Se você tiver um
        código do Tempo de Uso, pode ativar Bloquear ao Repousar, e aí os apps não podem ser abertos durante o Repouso.
        Com essa opção desativada, você só vê um lembrete e pode continuar.
      </p>

      <h2>O que o Tempo de Uso não faz</h2>
      <p>O Tempo de Uso é bom em uma tarefa. Ele diz não. Ele não diz o que fazer no lugar.</p>
      <p>
        Conheço isso das minhas próprias noites. Trabalho o dia inteiro, chego em casa e pego o celular. Tentei os
        bloqueadores. Apaguei as redes sociais. O hábito ficou. Um app bloqueado deixa um buraco na noite, e o Tempo de
        Uso não preenche esse buraco.
      </p>
      <p>
        A declaração oficial da Academia Americana de Pediatria sobre crianças pequenas e mídia diz o mesmo pelo outro
        lado. Ela observa que o uso intenso de aparelhos celulares pelos pais está ligado a menos trocas verbais e não
        verbais entre pais e filhos. E pede aos pediatras que ajudem as famílias com um Plano de Uso de Mídia da Família,
        com orientações para cada filho e para cada pai e mãe, e com ideias de brincadeiras para fazer no lugar das
        telas <Cite id="aap-media-2016" />. Uma regra sobre o celular é meio plano. A outra metade é o que você faz com o
        tempo.
      </p>
      <p>
        Então deixe os próximos dez minutos prontos antes de o período começar. Eles não precisam ser geniais. Precisam
        funcionar quando você não tem mais nada para dar. O Oyno usa o Tempo de Uso para pausar os apps que você
        escolher durante o Tempo em família e te dá uma brincadeira curta para fazer no lugar.
      </p>

      <h2>Sua primeira noite</h2>
      <p>Aqui vai um plano para hoje à noite, feito para um pai ou uma mãe que preferia deitar.</p>
      <ol>
        <li>Ajuste o período do Passo 3 para começar daqui a dez minutos.</li>
        <li>Deixe o celular numa prateleira fora de alcance, virado para baixo, com o som ligado caso alguém ligue.</li>
        <li>Escolha uma brincadeira da lista abaixo e brinque até seu filho parar de sorrir, não mais que isso.</li>
      </ol>
      <p>
        Para um bebê, experimente <GameLink id="hands-peekaboo" />. Você se deita de costas com o bebê no peito, cobre o
        rosto com as duas mãos e conta devagar até três antes do “Achou!”.
      </p>
      <p>
        Para uma criança a partir dos 2 anos, experimente <GameLink id="still-stone-mouse">Pedra e ratinho</GameLink>.
        Seu filho fica parado como uma pedra enquanto sua mão vira um ratinho que vem chegando de mansinho, e qualquer
        remexida faz o ratinho voltar para o começo. Ou <GameLink id="touch-the-bear" />: você é um urso dormindo no
        sofá, cada grito te faz roncar mais alto, e só uma mão na sua pata te acorda.
      </p>
      <p>
        Para uma criança de 3 a 5 anos, experimente <GameLink id="belly-boat" />. Vocês dois se deitam de barriga para
        cima com um brinquedinho em cada barriga e respiram devagar para os barcos subirem e descerem.{" "}
        <GameLink id="sleepy-lion" /> e <GameLink id="day-says-night" /> também dão certo no sofá.
      </p>
      <p>
        Há mais em <Link href="/games/energy/low">brincadeiras para pais cansados</Link>, e você pode filtrar por idade
        em <Link href="/games/age/toddlers">brincadeiras para crianças de 1 a 3 anos</Link> ou{" "}
        <Link href="/games/age/preschoolers">brincadeiras para crianças de 3 a 5 anos</Link>. Se ainda está escolhendo
        entre o Tempo de Uso e um app por cima dele, leia{" "}
        <Link href="/blog/screen-time-vs-app-blockers">Tempo de Uso, bloqueadores de apps e Oyno</Link>.
      </p>
      <p>
        Dê uma semana à configuração antes de mudá-la. Se o período começa cedo demais, mude o horário. Se um app
        continua escapando pelo Sempre Permitidos, tire-o da lista.
      </p>
    </>
  ),
};
