import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../screen-time-vs-app-blockers";

const { Link, GameLink } = linksIn("pt-BR");

export const article: Article = {
  ...english,
  title: "Tempo de Uso, bloqueadores de apps e Oyno: o que cada um faz pelos pais",
  description:
    "Uma comparação justa entre o Tempo de Uso da Apple, os apps bloqueadores e o Oyno para pais que querem a noite de volta, com o que cada um não faz.",
  body: (
    <>
      <p>
        Você quer tirar o celular da hora que passa com seu filho. No iPhone, há três tipos de ferramenta para isso: os
        ajustes do Tempo de Uso que a Apple já embute, os apps feitos para bloquear outros apps e o Oyno, que eu faço.
        Este é um olhar honesto sobre cada um, inclusive sobre quando o Oyno é a escolha errada.
      </p>
      <p>
        O objetivo merece uma ferramenta. A Academia Americana de Pediatria recomenda manter as refeições e os momentos
        de brincadeira entre pais e filhos livres de telas, para os pais e também para as crianças, e diz que os pais
        podem ativar a opção “não perturbe” no celular nesses momentos <Cite id="aap-media-2016" />.
      </p>

      <h2>O Tempo de Uso da Apple</h2>
      <p>
        O Tempo de Uso já está no seu iPhone e não custa nada. No iOS 27, você define um{" "}
        <strong>Horário do Tempo de Uso</strong> com períodos, como um período da noite, e{" "}
        <strong>Limites de Tempo</strong> que limitam por quanto tempo você usa categorias de apps, como Redes Sociais
        ou Jogos. Uma lista de <strong>Sempre Permitidos</strong> mantém abertos as pessoas e os apps escolhidos, diga o
        horário o que disser (
        <a href="https://support.apple.com/guide/iphone/set-schedules-and-time-allowances-iphb0c7313c9/ios">
          Suporte da Apple: Defina Horários e Limites de Tempo
        </a>
        ). Um código do Tempo de Uso de quatro dígitos impede que você mude esses ajustes sem ele (
        <a href="https://support.apple.com/guide/iphone/create-change-remove-a-screen-time-passcode-iph272b4c4bd/ios">
          Suporte da Apple: código do Tempo de Uso
        </a>
        ).
      </p>
      <p>
        O que ele faz bem: é grátis, já vem no celular e também pode cobrir seu iPad e seu Mac quando você ativa
        Sincronizar Entre Dispositivos. A Apple também diz que um Limite de Tempo cobre o site de um app quando o app
        tem um site associado.
      </p>
      <p>
        O que ele não faz: ele diz não, e só. Quando o período começa, nada te diz o que fazer com o tempo. E, se foi
        você que criou o código, você sabe qual é. Nosso{" "}
        <Link href="/guides/iphone-screen-time-family-evenings">guia passo a passo do Tempo de Uso</Link> mostra a
        configuração e o problema do código.
      </p>

      <h2>Apps bloqueadores e de foco</h2>
      <p>
        A App Store tem muitos apps feitos para bloquear ou limitar outros apps. Eles mudam muito de um para outro,
        então esta seção traz perguntas para fazer, não veredictos. Antes de pagar por um, confira:
      </p>
      <ul>
        <li>Ele é para o seu próprio celular ou é um controle parental para o aparelho de uma criança?</li>
        <li>Dá para definir os dias e as horas, ou só começar uma sessão na mão?</li>
        <li>O que acontece quando você abre um app bloqueado, e é fácil passar por cima?</li>
        <li>Ele bloqueia sites, apps ou os dois?</li>
        <li>Ele te dá alguma coisa para fazer no tempo que libera?</li>
      </ul>
      <p>
        Eu mesmo tentei os bloqueadores, e apaguei as redes sociais. O hábito ficou. Isso não é um veredicto sobre
        nenhum app. É o motivo de a última pergunta dessa lista importar para mim.
      </p>

      <h2>Oyno</h2>
      <p>
        O Oyno é um app para iOS para pais de crianças de 0 a 5 anos. Ele usa o Tempo de Uso da Apple no seu próprio
        iPhone. Você define o Tempo em família: os dias, as horas de início e de fim, e quantos horários precisar.
        Durante o Tempo em família, os apps que você escolheu ficam em pausa. Você escolhe quais apps ficam sempre
        liberados e quais ficam sempre bloqueados, e há uma pausa de 20 minutos no “Agora não”.
      </p>
      <p>
        Um app pausado mostra a tela do Oyno. O botão “Abrir o Oyno” leva a uma brincadeira. São 500, em três faixas de
        idade e para bateria baixa, média ou cheia, cada uma com 5 a 15 minutos, e cada uma apoiada num estudo e num
        guia. Um horário pode liberar seus apps por um tempo depois que você e seu filho brincam uma rodada. Cada rodada
        faz crescer o pequeno planeta da sua família. O Oyno não pede o nome nem a foto da criança.
      </p>
      <p>
        A ideia é que o bloqueio e a brincadeira venham juntos. Num experimento, pais num museu de ciências a quem se
        pediu que usassem muito o celular se sentiram mais distraídos e menos conectados aos filhos do que pais a quem
        se pediu que usassem pouco <Cite id="kushlev-dunn-2019" />. A resposta do Oyno é pôr alguma coisa no espaço que o
        celular deixa.
      </p>

      <h2>O que o Oyno não faz</h2>
      <ul>
        <li>
          <strong>É só para iOS.</strong> Não existe versão para Android.
        </li>
        <li>
          <strong>É para o seu celular, não para o do seu filho.</strong> Não é um controle parental para o aparelho de
          uma criança. Para isso, a Apple tem o próprio guia,{" "}
          <a href="https://support.apple.com/guide/child-safety/welcome-r1jy0rk9vfz8/web">
            Dispositivos Apple para Crianças e Famílias
          </a>
          .
        </li>
        <li>
          <strong>Não bloqueia sites.</strong> Ele pausa apps. Se o problema é um site, use o próprio Tempo de Uso.
        </li>
        <li>
          <strong>Não é uma tranca.</strong> A pausa do “Agora não” abre seus apps por 20 minutos. É um empurrãozinho que
          você configura para si mesmo.
        </li>
        <li>
          <strong>Não é grátis.</strong> É uma assinatura mensal ou anual, com 3 dias de teste grátis na App Store. O
          Tempo de Uso não custa nada.
        </li>
      </ul>

      <h2>Como escolher</h2>
      <p>
        Comece pelo Tempo de Uso. É grátis, e uma semana com ele já te diz muita coisa. Se o período da noite se
        sustenta e você está satisfeito, pare por aí.
      </p>
      <p>
        Olhe um app bloqueador se o seu problema é mais o dia de trabalho, os sites ou um celular Android, já que o
        Oyno não cobre isso. Faça as perguntas acima e confira se o app que você escolher cobre os seus casos.
      </p>
      <p>
        Olhe o Oyno se seu filho tem menos de 6 anos, a hora que você quer de volta é a hora com ele, e só bloquear não
        pegou porque o buraco que ficou foi preenchido por outra coisa no celular.
      </p>
      <p>
        Seja qual for a escolha, tenha uma brincadeira pronta para a primeira noite. Com um bebê, experimente{" "}
        <GameLink id="babble-back" />: espere qualquer som e responda como se fosse uma frase de verdade. Com uma
        criança de 1 a 3 anos, experimente <GameLink id="pocket-kiss-hand" />, em que um beijo se esconde numa das
        mãozinhas fechadas. Com uma criança de 3 a 5 anos, experimente <GameLink id="countdown-stop" /> ou{" "}
        <GameLink id="sleepy-lion" />, que dá para brincar deitado. Há mais em{" "}
        <Link href="/games/energy/low">brincadeiras para pais cansados</Link>.
      </p>
    </>
  ),
};
