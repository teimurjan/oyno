/**
 * The reminders as words. `push-notifications/en.md` is the source: one section per reminder,
 * its settings, and the versions the phone takes turns between. `push-notifications/<locale>.json`
 * holds what the translator wrote, keyed by a fingerprint of the English it was written from.
 * `compose` joins them into `ios/Oyno/Resources/Notifications.json`. Pure: the scripts own the files.
 *
 * When a reminder goes out is decided on the phone (`ReminderPlan.swift`). This file only holds
 * what each one may be tuned by, which words the phone fills in, and where a tap lands.
 */
import { fingerprint } from "./activities";

export const SOURCE_LANG = "en";

const GROUPS = { Reminders: "reminders", "Kid hours": "kid-hours" } as const;
type Group = (typeof GROUPS)[keyof typeof GROUPS];

/** What a setting is measured in. A time is written 18:30 and stored as minutes after midnight. */
type Unit = "time" | "days" | "minutes" | "moments";

interface Rule {
  group: Group;
  settings: Record<string, Unit>;
  placeholders: readonly string[];
}

/** Every reminder the phone knows, and what each may hold. The order in the file is the priority. */
export const RULES: Record<string, Rule> = {
  "letter-at-risk": { group: "reminders", settings: { at: "time" }, placeholders: ["evenings", "goal", "kid"] },
  "letter-ready": { group: "reminders", settings: { at: "time" }, placeholders: ["evenings", "kid"] },
  "world-close": { group: "reminders", settings: { within: "moments", at: "time" }, placeholders: ["world", "moments", "kid"] },
  "first-round": { group: "reminders", settings: { after: "days", again: "days", at: "time" }, placeholders: ["game", "kid"] },
  comeback: { group: "reminders", settings: { after: "days", again: "days", at: "time" }, placeholders: ["game", "skill", "kid"] },
  "practice-milestone": {
    group: "reminders",
    settings: { every: "minutes", at: "time" },
    placeholders: ["minutes", "skill", "game", "kid"],
  },
  "keepsake-first-moment": { group: "reminders", settings: { every: "days", at: "time" }, placeholders: ["moment", "kid"] },
  "keepsakes-waiting": { group: "reminders", settings: { every: "days", at: "time" }, placeholders: ["keepsakes", "kid"] },
  "low-energy": { group: "reminders", settings: { every: "days", at: "time" }, placeholders: ["game", "kid"] },
  "kid-hours-start": { group: "kid-hours", settings: {}, placeholders: ["schedule", "end"] },
  "kid-hours-end": { group: "kid-hours", settings: {}, placeholders: ["schedule", "kid"] },
};

export const TAPS = ["play", "home"] as const;
export type Tap = (typeof TAPS)[number];

/** What fits on a lock screen without being cut. */
export const MAX_TITLE = 50;
export const MAX_BODY = 150;

export interface Words {
  title: string;
  body: string;
}

export interface Reminder {
  id: string;
  group: Group;
  tap: Tap;
  settings: Record<string, number>;
  versions: Words[];
}

/** Where a problem is, as `en.md:12`, so an editor can jump to it. */
export interface Problem {
  line: number;
  message: string;
}

const UNIT_WORDS: Record<Exclude<Unit, "time">, string[]> = {
  days: ["day", "days"],
  minutes: ["minute", "minutes"],
  moments: ["moment", "moments"],
};

/** `18:30`, `3 days`, `2 moments`, as the unit asks; the number, else why not. */
function readSetting(value: string, unit: Unit): number | string {
  if (unit === "time") {
    const time = /^(\d{1,2}):(\d{2})$/.exec(value);
    if (time && Number(time[1]) < 24 && Number(time[2]) < 60) return Number(time[1]) * 60 + Number(time[2]);
    return `expected a time like 18:30, got "${value}"`;
  }
  const amount = /^(\d+) ([a-z]+)$/.exec(value);
  if (amount && UNIT_WORDS[unit].includes(amount[2]) && Number(amount[1]) > 0) return Number(amount[1]);
  return `expected a number of ${unit}, like "2 ${unit}", got "${value}"`;
}

export const placeholdersIn = (text: string) => [...text.matchAll(/\{([a-z]+)\}/g)].map((match) => match[1]);

const samePlaceholders = (a: Words, b: Words) => {
  const set = (words: Words) => [...new Set(placeholdersIn(`${words.title} ${words.body}`))].sort().join(",");
  return set(a) === set(b);
};

/**
 * Reads `en.md`. `#` is a group, `##` a reminder, `- key: value` a setting, `###` a version
 * whose heading is the title and whose paragraph is the body. A line starting with `>` is a
 * note for whoever edits the file, and so is anything above the first group.
 */
export function readSource(text: string): { reminders: Reminder[]; problems: Problem[] } {
  const reminders: Reminder[] = [];
  const problems: Problem[] = [];
  const lines = text.split("\n");
  const starts = new Map<Reminder, number>();
  const versionLines = new Map<Words, number>();
  const tapped = new Set<Reminder>();
  let group: Group | undefined;
  let reminder: Reminder | undefined;
  let version: Words | undefined;
  /** A blank line ends a version's text: one paragraph each. */
  let ended = false;

  const problem = (line: number, message: string) => problems.push({ line, message });

  lines.forEach((raw, index) => {
    const line = index + 1;
    const text = raw.trim();
    if (!text) {
      ended = Boolean(version?.body);
      return;
    }
    if (text.startsWith(">")) return;
    const heading = /^(#{1,3}) (.+)$/.exec(text);
    if (heading?.[1] === "#") {
      const name = heading[2].trim();
      group = name in GROUPS ? GROUPS[name as keyof typeof GROUPS] : undefined;
      if (!group) problem(line, `unknown group "${name}": use ${Object.keys(GROUPS).join(" or ")}`);
      reminder = undefined;
      version = undefined;
      return;
    }
    if (!group) return;
    if (heading?.[1] === "##") {
      const id = heading[2].trim();
      reminder = undefined;
      version = undefined;
      const rule = RULES[id];
      if (!rule) return problem(line, `unknown reminder "${id}"`);
      if (rule.group !== group) return problem(line, `"${id}" belongs under the other group`);
      if (reminders.some((other) => other.id === id)) return problem(line, `"${id}" appears twice`);
      reminder = { id, group, tap: "play", settings: {}, versions: [] };
      starts.set(reminder, line);
      reminders.push(reminder);
      return;
    }
    if (!reminder) return problem(line, "text outside a reminder: start a section with ## and its name");
    if (heading?.[1] === "###") {
      version = { title: heading[2].trim(), body: "" };
      ended = false;
      reminder.versions.push(version);
      versionLines.set(version, line);
      return;
    }
    const setting = /^- ([a-z]+): (.+)$/.exec(text);
    if (setting) {
      if (version) return problem(line, "settings go above the first ### version");
      const [, key, value] = setting;
      if (key === "tap") {
        if (!(TAPS as readonly string[]).includes(value)) return problem(line, `tap must be ${TAPS.join(" or ")}, got "${value}"`);
        reminder.tap = value as Tap;
        tapped.add(reminder);
        return;
      }
      const unit = RULES[reminder.id].settings[key];
      if (!unit) return problem(line, `"${reminder.id}" has no setting "${key}"`);
      const read = readSetting(value.trim(), unit);
      if (typeof read === "string") return problem(line, `${key}: ${read}`);
      reminder.settings[key] = read;
      return;
    }
    if (!version) return problem(line, "text before the first ### version");
    if (ended) return problem(line, "a version's text is one paragraph");
    version.body = version.body ? `${version.body} ${text}` : text;
  });

  for (const reminder of reminders) {
    const rule = RULES[reminder.id];
    const at = starts.get(reminder) ?? 0;
    for (const key of Object.keys(rule.settings)) {
      if (!(key in reminder.settings)) problem(at, `"${reminder.id}" needs "- ${key}: …"`);
    }
    if (!tapped.has(reminder)) problem(at, `"${reminder.id}" needs "- tap: play" or "- tap: home"`);
    if (!reminder.versions.length) problem(at, `"${reminder.id}" has no ### version`);
    if (reminder.versions.length && reminder.versions.every((words) => placeholdersIn(`${words.title} ${words.body}`).includes("kid"))) {
      problem(at, `"${reminder.id}" needs one version without {kid}, for families who gave no name`);
    }
    for (const words of reminder.versions) {
      const line = versionLines.get(words) ?? at;
      if (!words.body) problem(line, "a version needs a line of text under its title");
      if (words.title.length > MAX_TITLE) problem(line, `title is ${words.title.length} characters, at most ${MAX_TITLE}`);
      if (words.body.length > MAX_BODY) problem(line, `text is ${words.body.length} characters, at most ${MAX_BODY}`);
      for (const name of placeholdersIn(`${words.title} ${words.body}`)) {
        if (!rule.placeholders.includes(name)) {
          problem(line, `{${name}} is not filled in for "${reminder.id}": use ${rule.placeholders.map((p) => `{${p}}`).join(", ")}`);
        }
      }
    }
  }
  for (const id of Object.keys(RULES)) {
    if (!reminders.some((reminder) => reminder.id === id)) problems.push({ line: lines.length, message: `"${id}" is missing` });
  }
  return { reminders, problems };
}

export const versionFingerprint = (words: Words) => fingerprint([words.title, words.body]);

/** One language's versions: per reminder, per fingerprint of the English version. */
export type Translations = Record<string, Record<string, Words>>;

/** What the phone decodes: the reminders in priority order once, and the words once per language. */
export interface Catalogue {
  reminders: { id: string; group: Group; tap: Tap; settings: Record<string, number> }[];
  decks: Record<string, Record<string, Words[]>>;
}

/** A version a language is missing, or holds with different placeholders from the English. */
export interface Gap {
  locale: string;
  id: string;
  version: number;
  reason: "missing" | "placeholders";
}

/** The bundle for `locales`, English filling every gap, and the gaps. */
export function compose(
  reminders: readonly Reminder[],
  translations: Record<string, Translations | undefined>,
  locales: readonly string[],
): { catalogue: Catalogue; gaps: Gap[] } {
  const gaps: Gap[] = [];
  const decks: Catalogue["decks"] = {};
  for (const locale of locales) {
    const own = translations[locale] ?? {};
    decks[locale] = Object.fromEntries(
      reminders.map((reminder) => [
        reminder.id,
        reminder.versions.map((english, version) => {
          if (locale === SOURCE_LANG) return english;
          const unit = own[reminder.id]?.[versionFingerprint(english)];
          const reason = !unit ? "missing" : samePlaceholders(unit, english) ? null : "placeholders";
          if (reason) gaps.push({ locale, id: reminder.id, version, reason });
          return reason || !unit ? english : { title: unit.title, body: unit.body };
        }),
      ]),
    );
  }
  return {
    catalogue: { reminders: reminders.map(({ id, group, tap, settings }) => ({ id, group, tap, settings })), decks },
    gaps,
  };
}
