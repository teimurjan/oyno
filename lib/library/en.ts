import type { Age } from "@/lib/activities";
import type { LibraryCopy } from "./types";

const AGE_NOUN: Record<Age, string> = { "0-1": "babies", "1-3": "toddlers", "3-5": "preschoolers" };

const lower = (text: string) => text.toLowerCase();

export const en: LibraryCopy = {
  ageNoun: AGE_NOUN,
  ageRange: { "0-1": "0 to 12 months", "1-3": "1 to 3 years", "3-5": "3 to 5 years" },
  energy: { low: "Low energy", okay: "Medium energy", full: "High energy" },

  hubs: {
    age: {
      "0-1": {
        title: "Games for babies, 0 to 12 months",
        intro: "Lap games, peekaboo and first back-and-forth for the first year. Each takes 5 to 15 minutes and fits a tired parent.",
      },
      "1-3": {
        title: "Games for toddlers, 1 to 3 years",
        intro: "Freeze games, hide-and-find and copycat games for one to three year olds, 5 to 15 minutes each, sorted by the energy you have left.",
      },
      "3-5": {
        title: "Games for preschoolers, 3 to 5 years",
        intro: "Rule games, memory games and pretend play that build self-control in three to five year olds, 5 to 15 minutes each.",
      },
    },
    energy: {
      low: {
        title: "Low energy games for tired parents",
        intro: "Games for the end of a long day, many of them sitting or lying down. Your kid does the moving, you do the talking.",
      },
      okay: {
        title: "Easy games for an ordinary evening",
        intro: "Games for when you have some energy left but not much: almost no setup and 5 to 15 minutes of play.",
      },
      full: {
        title: "Active games for when you have energy",
        intro: "Games that get you both moving: chasing, hopping, building and racing, 5 to 15 minutes each.",
      },
    },
    skill: {
      "working-memory": {
        title: "Working memory games",
        intro: "Games that ask your kid to hold something in mind and use it: where the toy went, what comes next, which word is missing.",
      },
      "inhibitory-control": {
        title: "Self-control games",
        intro: "Games that practice stopping, waiting and doing the opposite of what the body wants: freeze games, waiting games, Simon says.",
      },
      "cognitive-flexibility": {
        title: "Flexible thinking games",
        intro: "Games that switch the rule halfway: sort by color, then by size; big means small; now you lead, now I do.",
      },
      attention: {
        title: "Focus games",
        intro: "Games that hold your kid's attention on one thing a little longer: a toy that moves, a quiet sound, one page of a book.",
      },
    },
    type: {
      peekaboo: { title: "Peekaboo games", what: "A face or a toy disappears and comes back, and your baby learns to expect it." },
      "hide-and-find": { title: "Hide-and-find games", what: "You hide a toy while your kid watches, and they remember where it went." },
      "anticipation-rhyme": { title: "Anticipation rhymes", what: "A rhyme builds to a tickle or a pause, and your kid learns to wait for it." },
      imitation: { title: "Copycat games", what: "You copy your kid and your kid copies you, one beat apart." },
      "pretend-play": { title: "Pretend play games", what: "An empty cup becomes tea and a teddy gets a whole day, so your kid holds a story in mind." },
      "fingerplay-song": { title: "Finger plays and action songs", what: "Songs with hand moves and sudden stops, sung slowly enough to follow." },
      conversation: { title: "Talking games", what: "You name what your kid looks at and wants, and leave room for them to answer." },
      "vocal-turns": { title: "Babble back-and-forth games", what: "You and your baby take turns babbling, like a real chat." },
      "joint-attention": { title: "Look-and-point games", what: "You and your kid look at the same thing, and their eyes learn to follow yours." },
      "turn-taking": { title: "Turn-taking games", what: "A toy or a ball goes back and forth, and each of you waits for a turn." },
      building: { title: "Building games", what: "Stacking, tipping and making tunnels, one careful step at a time." },
      "stop-go": { title: "Stop and go games", what: "Freeze games: move on go, stop dead on stop." },
      tempo: { title: "Fast and slow games", what: "The same move done fast, then slow, on your signal." },
      "simon-says": { title: "Simon says games", what: "Touch your nose, but only when the rule says so." },
      opposites: { title: "Opposite games", what: "Big means small and day means night, so your kid says the opposite of what they see." },
      "sorting-switch": { title: "Sorting games", what: "Sort things one way, then switch the rule and sort them another way." },
      "working-memory-list": { title: "Memory games", what: "Hold a short list in mind, in order, and say it back." },
      waiting: { title: "Waiting games", what: "Wait a few seconds for something good, with a game to help the wait." },
      "motor-control": { title: "Slow-motion games", what: "Slow, careful moves under a rule: tiptoe, tightrope, one finger only." },
      "motor-skill": { title: "Movement games", what: "Hopping, crawling, throwing and catching." },
      rhythm: { title: "Rhythm games", what: "Clap or tap a beat and copy it back." },
      storytelling: { title: "Storytelling games", what: "Tell a story together, in order, with your kid as the hero." },
      reading: { title: "Reading games", what: "A picture book with a job: find, guess or turn the page at the right time." },
      "quiet-focus": { title: "Quiet focus games", what: "Lie still, listen and breathe, with a small task to hold attention." },
      "rule-game": { title: "Rule games", what: "Classic games with one rule to remember, like Grandma's Footsteps." },
      planning: { title: "Planning games", what: "Think first, then do: aim, plan a route, say the plan out loud." },
      "quiet-voice": { title: "Whisper games", what: "Whisper, tiptoe and keep your voice small on purpose." },
    },
    tag: {
      "nothing-to-grab": "Games with no toys",
      "lying-down": "Games to play lying down",
      sitting: "Games to play sitting down",
      standing: "Standing games",
      "on-your-lap": "Lap games",
      quiet: "Quiet games",
      "one-room": "Games for one room",
      hallway: "Hallway games",
      bedtime: "Bedtime games",
      mealtime: "Mealtime games",
      bath: "Bath time games",
      "on-a-walk": "Games for a walk",
      "in-the-car": "Car games",
      stairs: "Stair games",
      window: "Window games",
      socks: "Games with socks",
      cushions: "Cushion games",
      chairs: "Games with chairs",
      "a-cup": "Games with a cup",
      "a-cloth": "Games with a cloth",
      "a-book": "Games with a book",
      "a-mirror": "Mirror games",
      "a-ball": "Ball games",
      "a-toy": "Games with one toy",
      stacking: "Stacking games",
      crayons: "Crayon games",
      lights: "Games with lights",
      music: "Music games",
      singing: "Singing games",
    },
    audience: (ages) => (ages.length === 3 ? "kids 0 to 5" : ages.map((age) => AGE_NOUN[age]).join(" and ")),
    titleFor: (title, audience) => `${title} for ${audience}`,
    countLine: (count, title, audience) => `${count} ${lower(title)} for ${audience}, 5 to 15 minutes each, with at most three steps.`,
  },

  games: {
    crumb: "Games",
    title: "Games to play with babies, toddlers and preschoolers",
    intro: (count) =>
      `${count} games for kids 0 to 5, each 5 to 15 minutes with at most three steps. Every one rests on a published study and a guide from Harvard's Center on the Developing Child or the American Academy of Pediatrics.`,
    sections: {
      age: "By age",
      energy: "By the energy you have left",
      skill: "By the skill it builds",
      type: "By type of game",
      tag: "By where you are and what you have",
    },
    minutes: (minutes) => `${minutes} minutes`,
    minutesShort: (minutes) => `${minutes} min`,
    whyItWorks: "Why it works",
    moreOf: (typeTitle) => `More ${lower(typeTitle)}`,
    allOf: (typeTitle) => `All ${lower(typeTitle)}`,
    more: "More games",
    researchBehind: "The research behind these games",
    metaTitle: ({ title, minutes, age }) => `${title}: a ${minutes}-minute game for ${AGE_NOUN[age]}`,
    metaDescription: ({ blurb, steps, minutes, skills }) =>
      `${blurb} ${steps} steps, ${minutes} minutes, builds ${new Intl.ListFormat("en").format(skills.map(lower))}.`,
  },

  research: {
    design: { rct: "Randomized trial", experiment: "Experiment", longitudinal: "Long-term study", observational: "Observational study" },
    study: "Study",
    guide: "Guide",
  },

  pitch: {
    title: "Oyno deals one game like this every evening",
    body: "It picks a game for your kid’s age and the energy you have left, pauses the apps you choose while you play, and grows your family’s little planet with every round.",
    cta: "Get started",
  },

  articles: {
    guide: {
      crumb: "Guides",
      title: "Guides for parents of kids 0 to 5",
      intro: "Long reads on how play builds focus and self-control, and on putting the phone down. Every claim links to the study behind it.",
    },
    post: {
      crumb: "Blog",
      title: "The Oyno blog",
      intro: "Short reads for tired parents: games for tonight, what the research says, and how to take the evening back from the phone.",
    },
    tryThese: "Try these games",
    sources: "Sources",
    byline: (name) => `${name}, maker of Oyno`,
  },

  sources: {},
};
