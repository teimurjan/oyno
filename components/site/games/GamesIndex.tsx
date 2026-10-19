import Link from "next/link";
import { SiteShell } from "@/components/site/SiteShell";
import { GAMES, HUBS } from "@/lib/games/catalog";
import { hubPath, type HubKind } from "@/lib/games/hubs";
import { AppPitch, Heading, Section } from "./parts";

export const GAMES_TITLE = "Games to play with babies, toddlers and preschoolers";
export const GAMES_INTRO = `${GAMES.length} games for kids 0 to 5, each 5 to 15 minutes with at most three steps. Every one rests on a published study and a guide from Harvard's Center on the Developing Child or the American Academy of Pediatrics.`;

const SECTIONS: { kind: HubKind; title: string }[] = [
  { kind: "age", title: "By age" },
  { kind: "energy", title: "By the energy you have left" },
  { kind: "skill", title: "By the skill it builds" },
  { kind: "type", title: "By type of game" },
  { kind: "tag", title: "By where you are and what you have" },
];

export function GamesIndex() {
  return (
    <SiteShell lang="en" page="home">
      <Heading title={GAMES_TITLE} intro={GAMES_INTRO} />
      {SECTIONS.map((section) => (
        <Section key={section.kind} title={section.title}>
          <ul className="mt-5 flex flex-wrap gap-2">
            {HUBS.filter((hub) => hub.kind === section.kind).map((hub) => (
              <li key={hub.slug}>
                <Link href={hubPath(hub)} className="card inline-flex h-11 items-center gap-2 px-4 text-[14px] font-semibold text-ink hover:bg-white/80">
                  {hub.title}
                  <span className="num font-normal text-faint">{GAMES.filter(hub.includes).length}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ))}
      <AppPitch />
    </SiteShell>
  );
}
