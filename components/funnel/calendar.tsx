import type { ComponentChildren, JSX } from "preact";

/** One hour of the day column, in CSS pixels. */
export const HOUR_PX = 56;

/** The app's default Kid hours (`KidHoursSchedule.afterWork`), 4:30 to 7:30 PM, in minutes
 * after 4 PM. */
const KID_FROM = 30;
const KID_UNTIL = 210;

/** An example evening, labelled as one: minutes after 4 PM when the phone pulls the parent
 * away. Illustrative, not a statistic. */
export const INTERRUPTIONS = [64, 82, 99, 118, 134, 153, 171, 190];

export const px = (minutes: number) => (minutes / 60) * HOUR_PX;

/**
 * The example evening as a day column: hour labels, hour lines and the kid's hours, with
 * `children` laid over the day. The calendar and the promise after it both draw this one, so
 * the second reads as the same evening line for line.
 */
export function EveningDay({
  hours,
  kid,
  label,
  children,
}: {
  hours: string[];
  kid: string;
  label: string;
  children: ComponentChildren;
}) {
  const height = px((hours.length - 1) * 60);

  return (
    <div role="img" aria-label={label} className="mt-4 flex gap-2">
      <div className="relative w-10 shrink-0" style={{ height }}>
        {hours.map((hour, index) => (
          <span
            key={hour}
            className="num absolute right-0 -translate-y-1/2 text-[13px] font-medium text-muted"
            style={{ top: index * HOUR_PX }}
          >
            {hour}
          </span>
        ))}
      </div>

      <div className="relative flex-1" style={{ height }}>
        {hours.map((hour, index) => (
          <span
            key={hour}
            className="absolute inset-x-0 border-t border-hairline"
            style={{ top: index * HOUR_PX }}
          />
        ))}

        {/* The tint over a solid surface, so the sky through the glass card cannot wash it out. */}
        <div
          className="absolute inset-x-1 overflow-hidden rounded-[8px] bg-surface"
          style={{ top: px(KID_FROM) + 1, height: px(KID_UNTIL - KID_FROM) - 2 }}
        >
          <div className="h-full border-l-[3px] border-good bg-good/22 px-2.5 py-1.5">
            <p className="text-[15.5px] font-semibold leading-[1.2] text-ink">{kid}</p>
          </div>
        </div>

        {children}
      </div>
    </div>
  );
}

/** Red is the phone, costing the reader, so it rules a line across the evening. A game is only
 * a neutral chip with its name in green. */
const TONES = {
  alert: { line: "bg-alert", pill: "bg-alert text-white" },
  good: { line: null, pill: "bg-surface text-good-ink" },
} as const;

/** A pill in the kid's hours at `minute`, right-aligned: the phone's, or a game's. */
export function DayLine({
  minute,
  tone,
  shown,
  style,
  children,
}: {
  minute: number;
  tone: keyof typeof TONES;
  shown: boolean;
  style?: JSX.CSSProperties;
  children: ComponentChildren;
}) {
  return (
    <div
      data-shown={shown}
      className="row absolute inset-x-1 flex items-center justify-end"
      style={{ top: px(minute), ...style }}
    >
      {TONES[tone].line && <span className={`h-[2px] min-w-2 flex-1 ${TONES[tone].line}`} />}
      <span
        className={`flex min-w-0 -translate-y-px items-center gap-1 truncate rounded-full px-1.5 py-px text-[10.5px] font-bold leading-[1.3] ${TONES[tone].pill}`}
      >
        {children}
      </span>
    </div>
  );
}

/** One "one sec": the red line, tagged with the phone. */
export function PhoneLine({
  minute,
  label,
  shown,
  style,
}: {
  minute: number;
  label: string;
  shown: boolean;
  style?: JSX.CSSProperties;
}) {
  return (
    <DayLine minute={minute} tone="alert" shown={shown} style={style}>
      <span aria-hidden>!</span>
      {label}
    </DayLine>
  );
}
