import type { JSX } from "preact";
import { Glyph } from "./icons";
import { useLocale } from "./locale";
import { StatementStep } from "./StatementStep";
import type { FunnelAnswers, FunnelStep } from "./steps";

/** Lucide's geometry, at the size the app's badges draw their symbols. */
const Icon = ({ size = 12, children }: { size?: number; children: JSX.Element | JSX.Element[] }) => (
  <Glyph size={size} box={24} stroke={2.4}>
    {children}
  </Glyph>
);

/** The tags of "countdown-stop", in the catalogue's order, each with the app's symbol for it. */
const TAGS = {
  "lying-down": (
    <Icon>
      <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
      <path d="M2 16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z" />
      <path d="M4 18v2M20 18v2" />
    </Icon>
  ),
  quiet: (
    <Icon>
      <path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6a1.4 1.4 0 0 1-1 .4H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5z" />
      <path d="m22 9-6 6M16 9l6 6" />
    </Icon>
  ),
  "nothing-to-grab": (
    <Icon>
      <circle cx="12" cy="12" r="9" />
      <path d="m5.6 5.6 12.8 12.8" />
    </Icon>
  ),
} as const;

const SKILLS = {
  "inhibitory-control": (
    <Icon>
      <path d="M18 11V6a2 2 0 0 0-4 0M14 10V4a2 2 0 0 0-4 0v2M10 10.5V6a2 2 0 0 0-4 0v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-6-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </Icon>
  ),
  "working-memory": (
    <Icon>
      <path d="M12 5a3 3 0 1 0-6 .13 4 4 0 0 0-2.52 5.77 4 4 0 0 0 .55 6.59A4 4 0 1 0 12 18Z" />
      <path d="M12 5a3 3 0 1 1 6 .13 4 4 0 0 1 2.52 5.77 4 4 0 0 1-.55 6.59A4 4 0 1 1 12 18Z" />
      <path d="M12 5v13" />
    </Icon>
  ),
} as const;

/** The game's evidence, youngest-covering study first, as the catalogue cites it. */
const SOURCES = [
  { short: "Kochanska et al., 2000", url: "https://doi.org/10.1037/0012-1649.36.2.220" },
  { short: "Carlson, 2005", url: "https://doi.org/10.1207/s15326942dn2802_3" },
  {
    short: "Harvard Center on the Developing Child, 2014",
    url: "https://developingchild.harvard.edu/resources/handouts-tools/activities-guide-enhancing-and-practicing-executive-function-skills/",
  },
];

/**
 * Widget: what Oyno hands over instead of a block. The top of the app's play screen
 * (`PlayScreen.swift`) for one real game: eyebrow and age, the big title, minutes and tags,
 * the blurb, then why it works. Its words live in the deck so the bundle never loads the
 * catalogue.
 */
export function AlternativeStep({ step, answers }: { step: FunnelStep; answers: FunnelAnswers }) {
  const { copy } = useLocale();
  const game = copy.alternative;

  return (
    <>
      <StatementStep step={step} answers={answers} />

      <div className="card mt-2 px-5 py-4">
        <div className="flex items-center justify-between gap-2">
          <p className="text-[13px] font-bold text-muted">{game.eyebrow}</p>
          <span className="num flex min-h-8 items-center rounded-full bg-surface px-3 text-[13px] font-bold text-ink">
            {game.age}
          </span>
        </div>

        <p className="mt-1 text-[48px] font-extrabold leading-[1.05] tracking-[-1.8px] text-ink">
          {game.title}
        </p>

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <span className="num mr-1 flex min-h-[26px] items-center gap-[5px] text-[13px] font-semibold text-muted">
            <Icon size={13}>
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </Icon>
            {game.minutes}
          </span>
          {Object.entries(TAGS).map(([id, icon]) => (
            <Badge key={id} icon={icon} label={game.tags[id as keyof typeof TAGS]} />
          ))}
        </div>

        <p className="mt-3 max-w-[310px] text-[15px] leading-[1.45] text-muted">{game.blurb}</p>

        <div className="mt-5 flex flex-col gap-2">
          <p className="eyebrow">{game.why}</p>
          <div className="flex flex-wrap gap-1.5">
            {Object.entries(SKILLS).map(([id, icon]) => (
              <Badge key={id} icon={icon} label={game.skills[id as keyof typeof SKILLS]} />
            ))}
          </div>
          <div className="flex flex-col">
            {SOURCES.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-7 items-baseline gap-1 text-[13px] font-semibold text-muted"
              >
                {source.short}
                <Icon size={10}>
                  <path d="M7 7h10v10M7 17 17 7" />
                </Icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

/** The app's `Badge`: a glyph and a few words on a quiet ink wash. Not a control. */
function Badge({ icon, label }: { icon: JSX.Element; label: string }) {
  return (
    <span className="flex min-h-[26px] items-center gap-[5px] rounded-[8px] bg-ink/6 px-[9px] py-1 text-[13px] font-semibold text-slate">
      {icon}
      {label}
    </span>
  );
}
