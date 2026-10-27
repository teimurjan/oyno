import "server-only";
import { z } from "zod";
import { createAdminClient, isServiceConfigured } from "./supabase/admin";

/** The planet's backup: how many rounds an account played, for how many minutes, how many
 * minutes Kid hours kept the apps paused on the days already over, and the keepsakes found.
 * Builds from before `together` or `keepsakes` send none. The ceilings only keep a garbled
 * body out of the columns. */
const Slug = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/).max(64);

export const Tally = z.object({
  rounds: z.number().int().min(0).max(1_000_000),
  minutes: z.number().int().min(0).max(100_000_000),
  together: z.number().int().min(0).max(100_000_000).default(0),
  keepsakes: z.array(Slug).max(256).default([]),
});
export type Tally = z.infer<typeof Tally>;

/** One moment as the phone records it. The kind is a slug and not an enum, so a build with a
 * new kind still backs up before this route learns it. */
const PlayedRound = z.object({
  id: z.guid(),
  kind: Slug,
  activityID: Slug.nullish(),
  startedAt: z.iso.datetime({ offset: true }),
  minutes: z.number().int().min(0).max(1440),
  skills: z.array(Slug).max(16).default([]),
  keepsakeID: Slug.nullish(),
});

/** Something new the parent saw, as the signs they tapped. The parent's words never come. */
const NotedFirst = z.object({
  id: z.guid(),
  date: z.iso.datetime({ offset: true }),
  kind: Slug,
  signs: z.array(z.string().regex(/^[a-zA-Z]+$/).max(32)).min(1).max(16),
});

/** The rounds and firsts behind the totals, so a reinstall gets its letters back. The ceilings
 * keep the body under the platform's 4.5 MB. */
export const History = z.object({
  rounds: z.array(PlayedRound).max(20_000),
  firsts: z.array(NotedFirst).max(5_000),
});
export type History = z.infer<typeof History>;

/** Builds from before the history send only the totals. */
export const Backup = Tally.extend({ history: History.optional() });

/** Merges a phone's totals into the account's and returns the result. Each total keeps the
 * larger value and the keepsakes are a union, so a phone that is behind never shrinks the planet. Null when the write
 * failed, which the route reports as a 500. */
export async function mergeProgress(userId: string, tally: Tally): Promise<Tally | null> {
  if (!isServiceConfigured) return null;
  const { data, error } = await createAdminClient()
    .rpc("merge_progress", {
      p_user_id: userId,
      p_rounds: tally.rounds,
      p_minutes: tally.minutes,
      p_together: tally.together,
      p_keepsakes: tally.keepsakes,
    })
    .single<Tally>();
  if (error || !data) {
    console.error("mergeProgress failed", error);
    return null;
  }
  return { rounds: data.rounds, minutes: data.minutes, together: data.together, keepsakes: data.keepsakes };
}

type RoundRow = {
  id: string;
  kind: string;
  activity_id: string | null;
  started_at: string;
  minutes: number;
  skills: string[];
  keepsake_id: string | null;
};
type FirstRow = { id: string; noted_at: string; kind: string; signs: string[] };

/** Adds the phone's rounds and firsts the account does not have yet and returns all of them.
 * Rows already there are kept as they are. Null when the write failed. */
export async function mergeHistory(userId: string, history: History): Promise<History | null> {
  if (!isServiceConfigured) return null;
  const { data, error } = await createAdminClient().rpc("merge_history", {
    p_user_id: userId,
    p_rounds: history.rounds.map(toRoundRow),
    p_firsts: history.firsts.map(toFirstRow),
  });
  if (error || !data) {
    console.error("mergeHistory failed", error);
    return null;
  }
  const merged = data as { rounds: RoundRow[]; firsts: FirstRow[] };
  return { rounds: merged.rounds.map(fromRoundRow), firsts: merged.firsts.map(fromFirstRow) };
}

const toRoundRow = (round: History["rounds"][number]): RoundRow => ({
  id: round.id,
  kind: round.kind,
  activity_id: round.activityID ?? null,
  started_at: round.startedAt,
  minutes: round.minutes,
  skills: round.skills,
  keepsake_id: round.keepsakeID ?? null,
});

const toFirstRow = (first: History["firsts"][number]): FirstRow => ({
  id: first.id,
  noted_at: first.date,
  kind: first.kind,
  signs: first.signs,
});

/** Postgres spells instants its own way, so they go back in the spelling the phone sent. */
const fromRoundRow = (row: RoundRow): History["rounds"][number] => ({
  id: row.id,
  kind: row.kind,
  activityID: row.activity_id,
  startedAt: new Date(row.started_at).toISOString(),
  minutes: row.minutes,
  skills: row.skills,
  keepsakeID: row.keepsake_id,
});

const fromFirstRow = (row: FirstRow): History["firsts"][number] => ({
  id: row.id,
  date: new Date(row.noted_at).toISOString(),
  kind: row.kind,
  signs: row.signs,
});
