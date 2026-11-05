"use client";

import { useEffect, useState } from "react";
import type { Age, Energy } from "@/lib/activities";
import type { PickerWords } from "@/lib/tools/copy/types";
import { deal, type DealtGame } from "@/lib/tools/deal";
import { PICKER_ANCHOR } from "@/lib/tools";
import { DealtGameCard, useGames } from "./DealtGameCard";
import { Choice, GoButton } from "./parts";

type Options<Value> = readonly { value: Value; label: string }[];
const ANY = "any";

export function GamePicker({
  words,
  lang,
  gamesRoot,
  ages,
  energies,
  minutesUnit,
  age: fixedAge,
  energy: fixedEnergy,
}: {
  words: PickerWords;
  lang: string;
  /** The games' path in this language, without the id. */
  gamesRoot: string;
  ages: Options<Age>;
  energies: Options<Energy>;
  /** `{n}` is the minutes. */
  minutesUnit: string;
  age?: Age;
  energy?: Energy;
}) {
  const [dealing, setDealing] = useState(false);
  const games = useGames(lang, dealing);
  const [age, setAge] = useState<Age | typeof ANY>(fixedAge ?? ANY);
  const [energy, setEnergy] = useState<Energy | typeof ANY>(fixedEnergy ?? ANY);
  const [game, setGame] = useState<DealtGame | null>(null);

  useEffect(() => {
    if (!dealing || !games) return;
    setGame((shown) => deal(games, { age: age === ANY ? undefined : age, energy: energy === ANY ? undefined : energy }, shown?.id));
    setDealing(false);
  }, [dealing, games, age, energy]);

  const any = { value: ANY, label: words.any } as const;
  const labelOf = <Value,>(options: Options<Value>, value: Value) => options.find((option) => option.value === value)?.label;

  return (
    <section id={PICKER_ANCHOR} className="card mt-8 scroll-mt-24 p-6">
      <h2 className="text-[22px] font-extrabold tracking-[-0.02em] text-ink">{words.title}</h2>
      <div className="mt-4 flex flex-col gap-4 [&_div]:justify-start">
        <Choice label={words.age} options={[any, ...ages]} value={age} onChange={setAge} />
        <Choice label={words.energy} options={[any, ...energies]} value={energy} onChange={setEnergy} />
      </div>
      <div className="mt-5">
        <GoButton onClick={() => setDealing(true)}>{game ? words.another : words.deal}</GoButton>
      </div>
      {game && (
        <DealtGameCard
          game={game}
          href={`${gamesRoot}/${game.id}`}
          open={words.open}
          meta={[minutesUnit.replace("{n}", String(game.minutes)), labelOf(ages, game.age), labelOf(energies, game.energy)].join(" · ")}
        />
      )}
    </section>
  );
}
