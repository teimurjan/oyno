import Link from "next/link";
import { Cite, GameLink } from "../Cite";
import type { Article } from "../types";

export const article: Article = {
  slug: "why-peekaboo-matters",
  kind: "post",
  title: "Why peekaboo matters (and what the research says)",
  description:
    "Babies notice peekaboo’s timing and its turns. Here is what studies and pediatric guides say about it, and peekaboo games to try from 2 months up.",
  published: "2026-10-19",
  games: ["hands-peekaboo", "cloth-on-your-face", "cushion-peek-sides", "which-sofa-end", "peekaboo-faces-cloth", "lumpy-blanket-hide"],
  sources: ["rochat-1999", "ross-lollis-1987", "reznick-2004", "diamond-1985", "aap-play", "serve-return", "brain-play", "cdc-guide"],
  body: (
    <>
      <p>
        Peekaboo might be the oldest game there is. Your face disappears, your baby waits, and your face comes back.
        It looks too silly to matter. Yet researchers have studied it, and the guides that pediatricians and
        researchers write for parents keep coming back to it.
      </p>

      <h2>Babies notice the timing</h2>
      <p>
        Peekaboo has a shape: hide, pause, “boo”. Babies pick up on that shape early. When researchers disrupted the
        timing and structure of peekaboo for babies of 2 to 6 months, the babies reacted{" "}
        <Cite id="rochat-1999" />. The same study found it for babbling back and forth.
      </p>
      <p>
        That is why the pause matters. In <GameLink id="hands-peekaboo" />, you lie back with your baby on your chest
        and cover your face with both hands. Hold still for a slow count of three, then say “Boo!” and open your hands
        wide. Stretch the count a little longer each time, and stop while they are still smiling.
      </p>

      <h2>Babies notice whose turn it is</h2>
      <p>
        Later in the first year, peekaboo becomes a game with turns. Babies of 9 to 18 months in turn-taking games
        such as give and take and peekaboo signaled when the adult missed a turn <Cite id="ross-lollis-1987" />.
      </p>
      <p>
        <GameLink id="cloth-on-your-face" /> gives your baby a turn. Lie down beside them and drape a scarf or towel
        over your own face, never over theirs. Say “Where did I go?” and wait for them to pull it off, or peek out
        yourself after a slow count of five.
      </p>

      <h2>From hidden faces to hidden toys</h2>
      <p>
        Peekaboo hides a face. Soon babies can track a hidden toy too. Babies of five and a half to six and a half
        months could find a toy after a short delay <Cite id="reznick-2004" />. In a classic experiment, babies of 7
        and a half to 12 months found a toy hidden under one of two covers after a short delay{" "}
        <Cite id="diamond-1985" />.
      </p>
      <p>
        Two games sit between peekaboo and hide-and-find. In <GameLink id="cushion-peek-sides" />, you hold a big
        cushion in front of your face and pop out on the left with a “boo”, hide, and pop out on the left once more.
        Watch where their eyes go, then pop out on the right. For a crawler of about eight months,{" "}
        <GameLink id="which-sofa-end" /> moves the hiding to the sofa. Crouch behind one armrest and call “where am
        I?” Next time, hide behind the other armrest and see if they crawl to the new end or the old one.
      </p>

      <h2>What the guides say</h2>
      <p>The guides written for parents give peekaboo a lot of room:</p>
      <ul>
        <li>
          The American Academy of Pediatrics describes how play in the first year grows from social smiling into serve
          and return, peekaboo and pat-a-cake <Cite id="aap-play" />.
        </li>
        <li>
          Harvard’s serve and return handout uses peekaboo as its example of practicing endings and beginnings{" "}
          <Cite id="serve-return" />.
        </li>
        <li>
          Harvard’s Brain-Building Through Play handouts list peekaboo and hiding games for babies of 6 and 9 months,
          and simple hide and seek for toddlers <Cite id="brain-play" />.
        </li>
        <li>
          Harvard’s activities guide lists lap games with an expected surprise and hiding games for 6 to 18 months{" "}
          <Cite id="cdc-guide" />.
        </li>
      </ul>

      <h2>Peekaboo for toddlers</h2>
      <p>
        Peekaboo does not end at one. It grows with your kid.
      </p>
      <p>
        <GameLink id="peekaboo-faces-cloth" /> adds feelings. Hold a cloth in front of your face and drop it to show
        a huge happy face, saying “happy”. Lift it, and drop it again with a sad face, a sleepy face, a surprised
        face. Hold the cloth up a little longer each time, then ask “what face is coming?” before you drop it.
      </p>
      <p>
        <GameLink id="lumpy-blanket-hide" />, for a kid of 2 and up, flips the roles. Your kid hides under a blanket
        and tries to stay still and quiet. You hunt out loud in silly wrong places while they hold still, then find
        the lump with a gasp.
      </p>
      <p>
        And <GameLink id="terrible-hider" /> is the first hide and seek. Hide badly behind a chair, counting to five
        out loud the whole time, so your voice gives you away. Then swap, and look in two wrong places before you
        find them.
      </p>

      <h2>A few small changes that keep it fun</h2>
      <ul>
        <li>Stretch the pause a little each round. The wait is the game.</li>
        <li>Let your baby end the hiding when they can, by pulling the cloth or turning to find you.</li>
        <li>Keep cloths on your face, never on your baby’s.</li>
        <li>Stop while they are still smiling.</li>
      </ul>
      <p>
        There are more in <Link href="/games/type/peekaboo">peekaboo games</Link>, and when your kid is ready for
        hidden toys, try <Link href="/games/type/hide-and-find">hide-and-find games</Link>. If you have questions
        about how your baby is developing, ask your pediatrician.
      </p>
    </>
  ),
};
