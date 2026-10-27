The words of every reminder Oyno sends. The app reads this file, so the layout matters.

> How the file works
> - A `#` heading is a group. Under "Reminders", Oyno sends at most one a day, and the higher section wins the day. Under "Kid hours", Oyno sends one at every schedule's start and end.
> - A `##` heading is one reminder. Keep its name as it is, because the app looks it up by name.
> - A `- key: value` line tunes the reminder. `at` is the time of day. `tap` is the tab a tap opens: `play` or `home`.
> - A `###` heading is one version. The heading is the title, and the paragraph under it is the text. Oyno takes turns between the versions.
> - The app fills in the words in braces, such as {game}. Each reminder lists the ones it can use. If no kid's name is set, a version with {kid} does not go out. Keep one version without it.
> - A title has at most 50 characters, and a text has at most 150.
> - A line that starts with `>` is a note like this one. The app ignores it.
> - After an edit, ask Claude Code to translate it, then run `bun run notifications:build` and `bun run notifications:check`.

# Reminders

## letter-at-risk

> The last evening on which the week's goal can still be met. Once a week.
> Fills in: {evenings} (still needed, such as "1 evening"), {goal}, {kid}.

- at: 18:00
- tap: play

### Your letter needs {evenings}
Play tonight, and on Sunday the planet writes you the week's letter.

### Still time for this week's letter
{evenings} to go before Sunday. One easy game tonight keeps it on track.

### {kid}'s letter depends on tonight
{evenings} more, and Sunday brings the planet's letter about your week.

## letter-ready

> On Sunday, if the week had at least one moment.
> Fills in: {evenings} (played this week, such as "3 evenings"), {kid}.

- at: 10:00
- tap: home

### This week's letter is here
The planet wrote down your {evenings} together. Open it before the week ends.

### A letter from your planet
It remembers your week: {evenings} of play. Come and read it.

### {kid}'s week, in a letter
Sunday's letter is here, with {evenings} of play in it.

## world-close

> The next world is only a few moments away. Once for each world.
> Fills in: {world}, {moments} (such as "2 moments"), {kid}.

- within: 2 moments
- at: 18:30
- tap: play

### {world} is {moments} away
One more easy evening, and a new world blooms on your planet.

### Almost at {world}
{moments} left until it opens. Maybe tonight is the night.

### {kid} is close to {world}
{moments} more, and your planet opens a new world.

## first-round

> No moment yet, one day after the first launch and again two days later.
> Fills in: {game} (a game for your kid's age), {kid}.

- after: 1 day
- again: 3 days
- at: 18:30
- tap: play

### Your planet is waiting
Its first moment takes a few easy minutes. Tonight's pick: {game}.

### One game, and a planet wakes up
{game} needs no prep. Play it once, and watch your planet grow.

### Tonight could be {kid}'s first round
{game} takes a few minutes and nothing but you two.

## comeback

> Some days after the last moment, and once more a few days later. Then it stops.
> Fills in: {game}, {skill} (a skill the game builds), {kid}.

- after: 3 days
- again: 7 days
- at: 18:30
- tap: play

### Your planet misses you
A few quiet days are fine. {game} is an easy way back tonight.

### Ready when you are
{game} takes a few minutes and builds {skill}. No catching up needed.

### {kid} would love a game
Pick up where you left off: {game}, a few easy minutes together.

## practice-milestone

> The month's most practiced skill passes another step.
> Fills in: {minutes} (such as "40 minutes"), {skill}, {game} (a game for that skill), {kid}.

- every: 30 minutes
- at: 18:30
- tap: play

### {minutes} of {skill} this month
That is real practice. {game} keeps it growing tonight.

### You two practiced {skill} for {minutes}
Keep it going with {game}, a few easy minutes.

### {kid} has {minutes} of {skill}
This month's practice adds up. Tonight's pick: {game}.

## keepsake-first-moment

> A kind of moment the family has not tried yet. The first one of each kind always leaves a keepsake.
> Fills in: {moment} (such as "Bath" or "Reading"), {kid}.

- every: 4 days
- at: 18:30
- tap: play

### Try “{moment}” tonight
The first one always leaves a keepsake on your planet.

### A keepsake is waiting
Your first “{moment}” moment always leaves one. Tonight is a good night.

### Something new for {kid}'s planet
The first “{moment}” moment always leaves a keepsake.

## keepsakes-waiting

> Some keepsakes are still hidden. Every few days.
> Fills in: {keepsakes} (still hidden, such as "12 keepsakes"), {kid}.

- every: 5 days
- at: 18:30
- tap: play

### Your planet is hiding something
Still to find: {keepsakes}. About one moment in four leaves one.

### Keepsakes are waiting
{keepsakes} still hidden on your planet. Play tonight and look.

### What will {kid} find next?
Still to find: {keepsakes}. Play tonight and see.

## low-energy

> An evening with nothing else to send and no moment yet. Every few days.
> Fills in: {game} (a game for low energy), {kid}.

- every: 2 days
- at: 19:00
- tap: play

### Running on empty?
{game} needs almost no energy. A few minutes on the sofa count.

### Tired is fine tonight
{game} is made for low-battery evenings. Sit back and play.

### An easy one for tonight
{game}: low energy, a few minutes, and {kid} gets all of you.

# Kid hours

## kid-hours-start

> At the start of every schedule that is on.
> Fills in: {schedule} (its name), {end} (when it ends, such as "7:30 PM").

- tap: play

### {schedule} starts now
Your apps are paused until {end}. Tonight's game is ready.

### Kid hours are on
{schedule} runs until {end}. Phone down, one easy game up.

## kid-hours-end

> At the end of every schedule that is on.
> Fills in: {schedule}, {kid}.

- tap: home

### {schedule} is over
Your apps are back. Was there something new tonight?

### Kid hours are done
Your apps are open again. Tell the planet what was new tonight.

### That was {kid}'s time
{schedule} is over, and your apps are back.
