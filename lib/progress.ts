import "server-only";
import { z } from "zod";
import { createAdminClient, isServiceConfigured } from "./supabase/admin";

/** The planet's backup: how many rounds an account played, for how many minutes, and how many
 * minutes Kid hours kept the apps paused on the days already over. Builds from before
 * `together` send none. The ceilings only keep a garbled body out of an `integer` column. */
export const Tally = z.object({
  rounds: z.number().int().min(0).max(1_000_000),
  minutes: z.number().int().min(0).max(100_000_000),
  together: z.number().int().min(0).max(100_000_000).default(0),
});
export type Tally = z.infer<typeof Tally>;

/** Merges a phone's totals into the account's and returns the result. Each total keeps the
 * larger value, so a phone that is behind never shrinks the planet. Null when the write
 * failed, which the route reports as a 500. */
export async function mergeProgress(userId: string, tally: Tally): Promise<Tally | null> {
  if (!isServiceConfigured) return null;
  const { data, error } = await createAdminClient()
    .rpc("merge_progress", {
      p_user_id: userId,
      p_rounds: tally.rounds,
      p_minutes: tally.minutes,
      p_together: tally.together,
    })
    .single<Tally>();
  if (error || !data) {
    console.error("mergeProgress failed", error);
    return null;
  }
  return { rounds: data.rounds, minutes: data.minutes, together: data.together };
}
