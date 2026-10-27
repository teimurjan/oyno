import { describe, expect, test } from "bun:test";
import { compose, readSource, versionFingerprint } from "./notifications";

const ALL_OTHERS = `
## letter-ready
- at: 10:00
- tap: home
### Here
It came.
## world-close
- within: 2 moments
- at: 18:30
- tap: play
### Close
{moments} left.
## first-round
- after: 1 day
- again: 3 days
- at: 18:30
- tap: play
### Hi
{game}.
## comeback
- after: 3 days
- again: 7 days
- at: 18:30
- tap: play
### Back
{game}.
## practice-milestone
- every: 30 minutes
- at: 18:30
- tap: play
### Practice
{minutes}.
## keepsake-first-moment
- every: 4 days
- at: 18:30
- tap: play
### New
{moment}.
## keepsakes-waiting
- every: 5 days
- at: 18:30
- tap: play
### Hidden
{keepsakes}.
## low-energy
- every: 2 days
- at: 19:00
- tap: play
### Tired
{game}.
# Kid hours
## kid-hours-start
- tap: play
### Start
{schedule} until {end}.
## kid-hours-end
- tap: home
### End
Apps back.
`;

const file = (first: string) => `Notes above the first group are ignored.\n\n# Reminders\n${first}\n${ALL_OTHERS}`;

const LETTER = `
## letter-at-risk
> A note for the editor.
- at: 18:00
- tap: play

### Your letter needs {evenings}
Play tonight,
and Sunday brings it.

### {kid}'s letter
{evenings} more.
`;

describe("readSource", () => {
  test("reads settings, versions and the order the file gives", () => {
    const { reminders, problems } = readSource(file(LETTER));
    expect(problems).toEqual([]);
    expect(reminders[0]).toEqual({
      id: "letter-at-risk",
      group: "reminders",
      tap: "play",
      settings: { at: 18 * 60 },
      versions: [
        { title: "Your letter needs {evenings}", body: "Play tonight, and Sunday brings it." },
        { title: "{kid}'s letter", body: "{evenings} more." },
      ],
    });
    expect(reminders.map((reminder) => reminder.id).slice(0, 2)).toEqual(["letter-at-risk", "letter-ready"]);
  });

  test("refuses a placeholder the reminder does not fill in", () => {
    const { problems } = readSource(file(LETTER.replace("{evenings} more.", "{game} tonight.")));
    expect(problems.map((problem) => problem.message)).toContain(
      '{game} is not filled in for "letter-at-risk": use {evenings}, {goal}, {kid}',
    );
  });

  test("needs a version without the kid's name", () => {
    const { problems } = readSource(file(LETTER.replace("Your letter needs {evenings}", "{kid} needs {evenings}")));
    expect(problems.map((problem) => problem.message)).toContain(
      '"letter-at-risk" needs one version without {kid}, for families who gave no name',
    );
  });

  test("names the line of a setting it cannot read", () => {
    const { problems } = readSource(file(LETTER.replace("- at: 18:00", "- at: evening")));
    expect(problems[0]).toEqual({ line: 7, message: 'at: expected a time like 18:30, got "evening"' });
  });

  test("reports a reminder the file leaves out", () => {
    const { problems } = readSource(file(""));
    expect(problems.map((problem) => problem.message)).toContain('"letter-at-risk" is missing');
  });
});

describe("compose", () => {
  const { reminders } = readSource(file(LETTER));
  const english = reminders[0].versions[0];

  test("ships a translation made from the current English", () => {
    const fr = { "letter-at-risk": { [versionFingerprint(english)]: { title: "Ta lettre attend {evenings}", body: "Joue ce soir." } } };
    const { catalogue, gaps } = compose(reminders, { fr }, ["en", "fr"]);
    expect(catalogue.decks.fr["letter-at-risk"][0].title).toBe("Ta lettre attend {evenings}");
    expect(gaps.filter((gap) => gap.id === "letter-at-risk" && gap.version === 0)).toEqual([]);
  });

  test("ships English where a translation dropped a placeholder", () => {
    const fr = { "letter-at-risk": { [versionFingerprint(english)]: { title: "Ta lettre", body: "Joue ce soir." } } };
    const { catalogue, gaps } = compose(reminders, { fr }, ["en", "fr"]);
    expect(catalogue.decks.fr["letter-at-risk"][0]).toEqual(english);
    expect(gaps).toContainEqual({ locale: "fr", id: "letter-at-risk", version: 0, reason: "placeholders" });
  });
});
