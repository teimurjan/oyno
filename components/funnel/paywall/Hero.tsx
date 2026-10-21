import { fill, useLocale } from "../locale";

/** One per line of `paywall.game.skills`, as the app's pastel tiles pair them. */
const CHIPS = [
  "bg-[var(--pastel-green)] text-[var(--pastel-green-ink)]",
  "bg-[var(--pastel-lavender)] text-[var(--pastel-lavender-ink)]",
];

/**
 * What the money buys, drawn rather than listed: a paused phone, Oyno's nudge over it, and the
 * game it offers instead. The phone fades out at the bottom, as `PaywallHero.swift` draws it.
 */
export function Hero() {
  const { copy } = useLocale();
  const { nudge, game } = copy.paywall;

  return (
    <div className="relative mx-auto mt-5 mb-8 h-[280px] w-[300px] shrink-0 overflow-hidden [mask-image:linear-gradient(180deg,#000_78%,transparent)]">
      <div
        aria-hidden
        className="absolute top-0 left-10 h-[340px] w-[220px] rounded-t-[40px] border-[1.5px] border-b-0 border-ink/20 bg-white/35"
      />
      <span aria-hidden className="absolute top-3 left-[118px] h-[18px] w-16 rounded-full bg-ink/10" />

      <div className="absolute top-11 left-0 z-10 flex w-[300px] items-center gap-3 rounded-[18px] bg-surface px-3.5 py-3 text-left shadow-[0_6px_16px_rgba(48,80,130,0.14)]">
        <img
          src="/ico/apple-icon-180x180.png"
          alt=""
          width={38}
          height={38}
          className="size-[38px] shrink-0 rounded-[9px] shadow-[0_0_0_0.5px_rgba(24,32,46,0.12)]"
        />
        <span className="flex min-w-0 flex-1 flex-col gap-px">
          <span className="text-[14px] font-extrabold text-ink">{nudge.title}</span>
          <span className="text-[12.5px] text-muted">{fill(nudge.body, { game: game.title })}</span>
        </span>
        <span className="self-start text-[11px] text-muted">{nudge.time}</span>
      </div>

      <div className="card absolute top-32 left-[54px] flex w-[192px] flex-col gap-1.5 px-3 pt-2.5 pb-3.5 text-left">
        <img
          src="/art/activities/doctor-kid-patient.webp"
          alt=""
          width={168}
          height={88}
          className="block h-[88px] w-[168px] object-contain"
        />
        <span className="flex flex-wrap gap-1">
          {game.skills.map((skill, index) => (
            <span key={skill} className={`flex h-[22px] items-center rounded-[7px] px-2 text-[11.5px] font-bold ${CHIPS[index]}`}>
              {skill}
            </span>
          ))}
        </span>
        <span className="text-[22px] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">{game.title}</span>
        <span className="text-[12px] text-muted">{game.meta}</span>
      </div>
    </div>
  );
}
