import { Cite, linksIn } from "../../Cite";
import type { Article } from "../../types";
import { article as english } from "../does-my-phone-affect-my-baby";

const { Link, GameLink } = linksIn("de");

export const article: Article = {
  ...english,
  title: "Schadet meine Handynutzung meinem Baby?",
  description:
    "Was Still-Face-Experimente zeigen, was Alltagsstudien nur verknüpfen und welche kleinen Gewohnheiten das Hin und Her mit deinem Baby am Laufen halten.",
  body: (
    <>
      <p>
        Wenn du dir diese Frage stellst, bist du schon aufmerksam. Dein Handy ist auch deine Uhr, dein Draht zur
        Kinderarztpraxis und deine Begleitung beim nächtlichen Stillen oder Fläschchen. Es wird nicht verschwinden.
      </p>
      <p>
        Die Forschung ist gelassener, als du vielleicht befürchtest. Sie zielt nicht auf den kurzen Blick. In einer
        Studie mit Eltern von Kindern bis 5 Jahren machte ein kurzer Blick aufs Handy keinen Unterschied dafür, ob ein
        Elternteil auf sein Kind reagierte <Cite id="vanden-abeele-2020" />. Worauf sie zielt, ist die lange, versunkene
        Phase. Hier steht, was die Studien zeigen und wie sicher sie sind.
      </p>

      <h2>Was die Experimente zeigen</h2>
      <p>
        In einem Experiment verändern Forschende gezielt eine Sache und beobachten, was folgt. So können sie mehr über
        Ursachen sagen.
      </p>
      <p>
        Der Klassiker ist das Still-Face-Experiment. Mütter von 1 bis 4 Monate alten Babys zeigten ein starres,
        unbewegtes Gesicht. Innerhalb von Minuten wurden die Babys misstrauisch und zogen sich zurück{" "}
        <Cite id="tronick-1978" />. Babys merken, wenn das Hin und Her aufhört.
      </p>
      <p>
        Eine neuere Version nutzte ein Handy. Als sich Mütter mitten in einer Still-Face-Aufgabe ihrem Handy zuwandten,
        wurden Babys von 7 bis 24 Monaten unruhig <Cite id="myruski-2018" />.
      </p>
      <p>
        Kleinkinder versuchen, dich zurückzugewinnen. Mütter von 20 bis 22 Monate alten Kindern unterbrachen das Spielen
        für zwei Minuten, um einen Fragebogen auszufüllen, auf dem Handy oder auf Papier. Beide Gruppen reagierten
        weniger feinfühlig, und ihre Kleinkinder suchten öfter ihre Aufmerksamkeit <Cite id="konrad-2021" />. Papier
        wirkte genauso wie das Handy. Es kam auf die Pause in der Aufmerksamkeit an, nicht auf den Bildschirm.
      </p>
      <p>
        Unterbrechungen können auch das Lernen kosten. Mütter brachten ihren Zweijährigen zwei neue Wörter bei. Die
        Kinder lernten das Wort, das ohne Unterbrechung beigebracht wurde, aber nicht das, das ein Anruf unterbrach{" "}
        <Cite id="reed-2017" />.
      </p>

      <h2>Was Alltagsstudien nur verknüpfen</h2>
      <p>
        Andere Studien beobachten Familien oder fragen Eltern nach ihrem Alltag. Sie können Dinge finden, die
        zusammen auftreten. Sie können nicht sagen, was davon die Ursache war.
      </p>
      <ul>
        <li>
          In der Still-Face-Studie mit dem Handy erholten sich Babys, deren Mütter zu Hause mehr Geräte nutzten, weniger{" "}
          <Cite id="myruski-2018" />. Dieser Teil ist ein Zusammenhang.
        </li>
        <li>
          Eltern, die von mehr Unterbrechungen durch das Handy in der gemeinsamen Zeit mit der Familie berichteten,
          berichteten auch von mehr Verhaltensproblemen ihres Kindes <Cite id="mcdaniel-radesky-2018" />.
        </li>
        <li>
          Als Familien mit einem Kind von 0 bis 5 Jahren sechs Monate lang begleitet wurden, wirkte der Zusammenhang in
          beide Richtungen. Schwierigeres Verhalten des Kindes sagte über den Erziehungsstress mehr Störungen durch
          Technik voraus, und diese Störungen sagten oft später mehr ausagierendes Verhalten voraus{" "}
          <Cite id="mcdaniel-radesky-2018b" />.
        </li>
      </ul>
      <p>
        Ein gestresster Elternteil, der zum Handy greift, ist in dieser Geschichte also kein Bösewicht. In dieser Studie
        gingen Stress und Handynutzung Hand in Hand.
      </p>

      <h2>Warum ein kurzer Blick nicht das Problem ist</h2>
      <p>
        Die Spielplatzstudie fand, dass ein kurzer Blick keinen Unterschied machte, während tiefes Versinken in andere
        Tätigkeiten etwa so viel kostete wie das Handy <Cite id="vanden-abeele-2020" />. Das Handy ist nur eines von
        vielen Dingen, die dich wegziehen können.
      </p>
      <p>
        Pausen gehören auch zum Spiel. Harvards Serve-and-Return-Leitfaden für Babys nennt abwechseln, warten und das
        Üben von Enden und Anfängen, mit Kuckuck als Beispiel <Cite id="serve-return" />. Eine Pause, nach der dein
        Gesicht zurückkommt, ist genau das, was Kuckuck ist.
      </p>

      <h2>Was heute Abend hilft</h2>
      <p>
        Die gute Nachricht gibt es auch. Als Eltern von 6 bis 10 Monate alten Babys ein Coaching zu feinfühliger
        Erziehung bekamen, verbesserten sich die Aufmerksamkeit und das selbstständige Problemlösen ihrer Babys{" "}
        <Cite id="landry-2006" />. Als Eltern von 6 bis 21 Monate alten Kindern gezeigt wurde, dem Kind zu folgen,
        darauf einzugehen und Freude zu zeigen, hatten ihre Kinder mit 4 Jahren eine bessere kognitive Flexibilität{" "}
        <Cite id="lind-2017" />.
      </p>
      <p>
        Die American Academy of Pediatrics rät, Spielzeiten von Eltern und Kind bildschirmfrei zu halten, für Eltern wie
        für Kinder, und schlägt vor, in dieser Zeit „Nicht stören“ einzuschalten <Cite id="aap-media-2016" />. Ein kurzes
        Spiel reicht für den Anfang:
      </p>
      <ul>
        <li>
          <GameLink id="babble-back" />: Antworte auf jeden Laut deines Babys, als wäre er ein echter Satz, und warte
          dann, bis es dran ist.
        </li>
        <li>
          <GameLink id="follow-their-gaze" />: Schau dahin, wo dein Baby hinschaut, und benenne es mit ein paar warmen
          Worten.
        </li>
        <li>
          <GameLink id="hands-peekaboo" />: Leg dich auf den Rücken, dein Baby auf der Brust, und versteck dich hinter
          deinen Händen, während du langsam bis drei zählst.
        </li>
        <li>
          <GameLink id="copy-cat-faces" />: Mach Gesicht oder Laut deines Babys einen Wimpernschlag später nach.
        </li>
      </ul>
      <p>
        Für einen quengeligen Abend lässt dich <GameLink id="baby-mind-reader" /> laut sagen, was dein Baby zu wollen
        scheint, und dann auf seine Antwort warten. Bei <GameLink id="house-sounds" /> übernehmen der Wasserkocher und
        die Tür die Arbeit. Mehr findest du bei den <Link href="/games/age/babies">Spielen für Babys</Link>, und der
        Ratgeber <Link href="/guides/phone-down-with-your-kid">Handy weg, wenn dein Kind da ist</Link> hat Schritte für
        das Handy selbst.
      </p>
      <p>
        Wenn du dir Sorgen um die Entwicklung deines Babys machst, sprich mit deiner Kinderärztin oder deinem
        Kinderarzt.
      </p>
    </>
  ),
};
