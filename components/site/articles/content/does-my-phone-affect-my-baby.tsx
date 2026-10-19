import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "does-my-phone-affect-my-baby",
  kind: "post",
  title: "Does my phone use affect my baby?",
  description:
    "What still-face experiments show, what everyday studies only link, and the small habits that keep the back-and-forth with your baby going.",
  published: "2026-10-19",
  games: ["babble-back", "follow-their-gaze", "hands-peekaboo", "copy-cat-faces", "house-sounds", "baby-mind-reader"],
  sources: [
    "vanden-abeele-2020",
    "tronick-1978",
    "myruski-2018",
    "konrad-2021",
    "reed-2017",
    "mcdaniel-radesky-2018",
    "mcdaniel-radesky-2018b",
    "serve-return",
    "landry-2006",
    "lind-2017",
    "aap-media-2016",
  ],
  body: (
    <>
      <p>
        If you are asking this, you are already paying attention. Your phone is also how you check the time, message
        the pediatrician and get through a night feed. It is not going anywhere.
      </p>
      <p>
        The research is calmer than you might fear. It does not point at the quick look. In one study of parents with
        children up to age 5, a quick glance at the phone made no difference to whether a parent answered their child{" "}
        <Cite id="vanden-abeele-2020" />. What it points at is the long, absorbed stretch. Here is what the studies
        show, and how sure they are.
      </p>

      <h2>What the experiments show</h2>
      <p>
        In an experiment, researchers change one thing on purpose and watch what follows. That lets them say more
        about cause.
      </p>
      <p>
        The classic is the still-face experiment. Mothers of babies 1 to 4 months old held a still, unresponsive
        face. Within minutes the babies grew wary and withdrew <Cite id="tronick-1978" />. Babies notice when the
        back-and-forth stops.
      </p>
      <p>
        A newer version used a phone. When mothers turned to their phones in the middle of a still-face task, babies
        of 7 to 24 months got upset <Cite id="myruski-2018" />.
      </p>
      <p>
        Toddlers try to win you back. Mothers of 20- to 22-month-olds broke off play for two minutes to fill in a
        questionnaire, on a phone or on paper. Both groups became less responsive, and their toddlers made more bids
        for attention <Cite id="konrad-2021" />. Paper did the same as the phone. The pause in attention mattered, not
        the screen.
      </p>
      <p>
        Interruptions can cost learning too. Mothers taught their 2-year-olds two new words. The children learned the
        word taught without a break, but not the one cut off by a phone call <Cite id="reed-2017" />.
      </p>

      <h2>What everyday studies only link</h2>
      <p>
        Other studies watch families or ask parents about their days. They can find things that go together. They
        cannot say which one caused the other.
      </p>
      <ul>
        <li>
          In the phone still-face study, babies whose mothers used devices more at home recovered less{" "}
          <Cite id="myruski-2018" />. That part is a link.
        </li>
        <li>
          Parents who reported more phone interruptions during family time also reported more behavior problems in
          their child <Cite id="mcdaniel-radesky-2018" />.
        </li>
        <li>
          When families with a child of 0 to 5 were followed for six months, the link ran both ways. A child’s harder
          behavior predicted more technology interference through parenting stress, and that interference often
          predicted more acting out later <Cite id="mcdaniel-radesky-2018b" />.
        </li>
      </ul>
      <p>
        So a stressed parent who reaches for the phone is not a villain in this story. In that study, stress and
        phone use went together.
      </p>

      <h2>Why a glance is not the problem</h2>
      <p>
        The playground study found that a quick glance made no
        difference, while deep absorption in other tasks had about the same cost as the phone{" "}
        <Cite id="vanden-abeele-2020" />. The phone is one of many things that can pull you away.
      </p>
      <p>
        Breaks are also part of the game. Harvard’s serve and return guide for babies includes taking turns, waiting,
        and practicing endings and beginnings, with peekaboo as the example <Cite id="serve-return" />. A pause
        followed by your face coming back is what peekaboo is.
      </p>

      <h2>What helps tonight</h2>
      <p>
        The good news is on the other side too. When parents of babies 6 to 10 months old were coached in responsive
        parenting, their babies’ attention and independent problem solving improved <Cite id="landry-2006" />. When
        parents of 6- to 21-month-olds were coached to follow the child’s lead, respond and show delight, their
        children had better cognitive flexibility at age 4 <Cite id="lind-2017" />.
      </p>
      <p>
        The American Academy of Pediatrics advises keeping parent–child playtimes screen free for parents as well as
        children, and suggests turning on Do Not Disturb during those times <Cite id="aap-media-2016" />. One short
        game is enough to start:
      </p>
      <ul>
        <li>
          <GameLink id="babble-back" />: answer any sound your baby makes as if it were a sentence, then wait for
          their turn.
        </li>
        <li>
          <GameLink id="follow-their-gaze" />: look at whatever your baby looks at, and name it in a few warm words.
        </li>
        <li>
          <GameLink id="hands-peekaboo" />: lie back with your baby on your chest and hide behind your hands for a
          slow count of three.
        </li>
        <li>
          <GameLink id="copy-cat-faces" />: copy your baby’s face or sound one beat after they make it.
        </li>
      </ul>
      <p>
        For a grizzly evening, <GameLink id="baby-mind-reader" /> asks you to say out loud what your baby seems
        to want, then pause for their answer. <GameLink id="house-sounds" /> lets the kettle and
        the door do the work. There are more in{" "}
        <Link href="/games/age/babies">games for babies</Link>, and the guide{" "}
        <Link href="/guides/phone-down-with-your-kid">Phone down with your kid</Link> has steps for the phone itself.
      </p>
      <p>If you are worried about how your baby is developing, talk to your pediatrician.</p>
    </>
  ),
};
