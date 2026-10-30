import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../games-with-no-toys";

const { Link, GameLink } = linksIn("pt-BR");

export const article: Article = {
  ...english,
  title: "Brincadeiras sem brinquedo para fazer em casa",
  description:
    "Nenhum brinquedo por perto, ou sem vontade de ir buscar? Estas brincadeiras para crianças de 0 a 5 anos só pedem suas mãos, sua voz e o cômodo onde você está.",
  body: (
    <>
      <p>
        Os brinquedos estão no outro cômodo, guardados ou espalhados debaixo do sofá. Você não precisa deles. Muitas
        das brincadeiras mais antigas para crianças pequenas não usam nada além de um rosto, duas mãos e uma voz.
      </p>
      <p>
        A Academia Americana de Pediatria descreve como a brincadeira cresce do sorriso social para o saque e
        devolução, o cadê-achou e as palminhas <Cite id="aap-play" />. Os materiais Brain-Building Through Play, de
        Harvard, listam Pat-a-Cake (as palminhas) e Baby See Baby Do para bebês, siga o líder para crianças de 1 a 3
        anos, e o mestre mandou e What Time Is It Mr Fox (que horas são, seu lobo?) para crianças maiores{" "}
        <Cite id="brain-play" />. Nenhuma delas precisa de brinquedo.
      </p>

      <h2>Bebês: seu rosto é o brinquedo</h2>
      <p>
        A partir de uns 6 meses, experimente <GameLink id="copy-cat-faces" />. Repita a careta ou o som do bebê logo
        depois que ele fizer: língua para fora, um gritinho, a testa franzida. Faça isso algumas vezes, depois invente
        uma careta nova, bem devagar, e segure. Fique com a careta e espere ele tentar imitar você.
      </p>
      <p>
        <GameLink id="wheres-your-nose" /> funciona com o bebê no seu colo. Pergunte “Cadê o nariz?” e espere o tempo
        de uma respiração lenta olhando o rostinho dele. Toque de leve no nariz dele e diga “nariz”, depois faça o
        mesmo com orelhas, dedinhos do pé e barriga.
      </p>
      <p>
        As duas brincadeiras seguem o que o bebê puxa. Num ensaio, orientar pais de crianças de 6 a 21 meses a seguir
        a iniciativa da criança, responder e mostrar prazer melhorou a flexibilidade mental dos filhos aos 4 anos{" "}
        <Cite id="lind-2017" />.
      </p>

      <h2>Crianças de 1 a 3 anos: seu corpo é o tabuleiro</h2>
      <p>
        <GameLink id="nose-knees-toes" /> é para uma criança a partir dos 2 anos que sabe onde fica o nariz. Pergunte
        “Cadê o nariz?” e toque no seu, e seu filho toca no dele. Depois joelhos, pés, orelhas. Quando ele já estiver
        rapidinho, diga “toque nos pés” enquanto toca no nariz, e ele tem que seguir as suas palavras, não a sua mão.
      </p>
      <p>
        <GameLink id="rug-tightrope-walk" /> só pede a borda de um tapete ou uma linha do piso. É uma corda bamba que
        leva até você no sofá. Seu filho anda nela um passo lento de cada vez, de braços abertos, enquanto você narra
        cada passo baixinho. Pisou fora da corda, volta para o começo, e quem chega até você ganha um abraço no sofá.
        Você não precisa levantar nem uma vez.
      </p>
      <p>
        Elas se parecem com tarefas de um estudo que acompanhou crianças por anos, em que crianças de 22 a 45 meses
        tinham que andar devagar sobre uma linha, cochichar e parar e começar num sinal <Cite id="kochanska-2000" />.
      </p>

      <h2>Crianças de 3 a 5 anos: brincadeiras feitas de palavras</h2>
      <p>
        Aos 3 anos, uma brincadeira pode ser só regras e conversa. <GameLink id="simon-says" /> é o clássico. Fale
        movimentos, e seu filho só faz os que começam com “o mestre mandou”. Misture ordens sem isso e pegue ele no
        flagra se ele se mexer. Depois de três pegadinhas, seu filho vira o mestre. O mestre mandou foi uma das
        tarefas de um estudo com crianças de 2 a 6 anos <Cite id="carlson-2005" />.
      </p>
      <p>
        <GameLink id="wolf-time" /> é o “que horas são, seu lobo?” para um corredor. Você fica de frente para a parede
        lá no fundo. Seu filho pergunta “Que horas são, seu lobo?”, e você responde um número até dez, para ele dar
        exatamente esse número de passos até você, contando em voz alta. Quando ele estiver perto, responda “hora do
        jantar” e corra atrás dele até o começo.
      </p>
      <p>
        <GameLink id="whisper-telephone" /> funciona quando um irmão está dormindo. Cochiche uma mensagem curta no
        ouvido do seu filho, tipo “o gato comeu uma meia”, e ele cochicha de volta para você, palavra por palavra.
        Acrescente uma palavra a cada rodada.
      </p>

      <h2>Quando vocês estão fora de casa</h2>
      <p>
        As brincadeiras sem brinquedo mostram seu valor numa sala de espera, numa fila ou numa viagem longa de carro.
        Em <GameLink id="zoo-list">Fui ao zoológico</GameLink>, você diz “fui ao zoológico e vi uma zebra”. Seu filho
        repete a lista toda e acrescenta um bicho, depois você faz o mesmo, até alguém esquecer um bicho. Aí comecem
        uma viagem nova para outro lugar. A praia, a fazenda e o mercado funcionam, e seu filho pode escolher para onde
        vocês vão.
      </p>
      <p>
        Há mais para a estrada em <Link href="/games/tag/in-the-car">brincadeiras para o carro</Link>.
      </p>

      <h2>Como começar uma hoje à noite</h2>
      <ul>
        <li>Escolha uma brincadeira para a idade do seu filho e diga a regra numa frase só.</li>
        <li>Com um bebê, fique nas caretas e nos sons. Imite o que ele faz e espere ele responder.</li>
        <li>Faça a primeira rodada devagar, para ele conseguir ganhar.</li>
        <li>Passe o comando para ele. A maioria dessas brincadeiras termina com uma troca, e seu filho ganha a vez de mandar.</li>
      </ul>
      <p>
        Todas as <Link href="/games/tag/nothing-to-grab">brincadeiras sem brinquedo</Link> funcionam de mãos vazias.
        Você também pode procurar por idade, começando pelas{" "}
        <Link href="/games/age/toddlers">brincadeiras para crianças de 1 a 3 anos</Link>.
      </p>
    </>
  ),
};
