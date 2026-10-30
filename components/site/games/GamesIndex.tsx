import type { Metadata } from "next";
import Link from "next/link";
import { langOfSegment, type RouteProps } from "@/components/site/route";
import { SiteShell } from "@/components/site/SiteShell";
import { GAMES, hubsIn } from "@/lib/games/catalog";
import { GAMES_PATH, HUB_KINDS, hubPath } from "@/lib/games/hubs";
import { localePath, type Lang } from "@/lib/i18n";
import { libraryFor } from "@/lib/library";
import { libraryPageMetadata } from "@/lib/seo";
import { AppPitch, Heading, Section } from "./parts";

function GamesIndex({ lang }: { lang: Lang }) {
  const { games } = libraryFor(lang);
  const hubs = hubsIn(lang);
  return (
    <SiteShell lang={lang} page={GAMES_PATH}>
      <Heading title={games.title} intro={games.intro(GAMES.length)} />
      {HUB_KINDS.map((kind) => (
        <Section key={kind} title={games.sections[kind]}>
          <ul className="mt-5 flex flex-wrap gap-2">
            {hubs.filter((hub) => hub.kind === kind).map((hub) => (
              <li key={hub.slug}>
                <Link href={localePath(lang, hubPath(hub))} className="card inline-flex h-11 items-center gap-2 px-4 text-[14px] font-semibold text-ink hover:bg-white/80">
                  {hub.title}
                  <span className="num font-normal text-faint">{GAMES.filter(hub.includes).length}</span>
                </Link>
              </li>
            ))}
          </ul>
        </Section>
      ))}
      <AppPitch lang={lang} />
    </SiteShell>
  );
}

/** What the games index exports, at the root and under every locale. */
export function gamesIndexRoute() {
  type Props = RouteProps<object>;
  const langOf = async ({ params }: Props) => langOfSegment((await params).locale);
  return {
    metadata: async (props: Props): Promise<Metadata> => {
      const lang = await langOf(props);
      const { games } = libraryFor(lang);
      return libraryPageMetadata(lang, { title: `${games.title} | Oyno`, description: games.intro(GAMES.length), path: GAMES_PATH });
    },
    Page: async (props: Props) => <GamesIndex lang={await langOf(props)} />,
  };
}
