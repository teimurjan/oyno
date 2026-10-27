import { NextResponse } from "next/server";
import { Backup, mergeHistory, mergeProgress } from "@/lib/progress";
import { getUserFromRequest } from "@/lib/supabase/auth";
import { logFields, withLogging } from "@/lib/log";

export const dynamic = "force-dynamic";

/** Backs up the planet. The phone sends its totals, rounds and firsts and gets back the
 * account's, so one call both saves after a round and restores after a reinstall. Not gated on a subscription:
 * the rounds it counts were already gated when they were played. */
export const POST = withLogging("progress", async (request: Request) => {
  const user = await getUserFromRequest(request);
  if (!user) return NextResponse.json({ error: "unauthorized" }, { status: 401 });

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
  const backup = Backup.safeParse(body);
  if (!backup.success) return NextResponse.json({ error: "bad_request" }, { status: 400 });

  const { history, ...tally } = backup.data;
  const [merged, mergedHistory] = await Promise.all([
    mergeProgress(user.id, tally),
    history ? mergeHistory(user.id, history) : undefined,
  ]);
  if (!merged || mergedHistory === null) {
    logFields({ outcome: "write_failed" });
    return NextResponse.json({ error: "write_failed" }, { status: 500 });
  }

  logFields({ outcome: "merged", rounds: merged.rounds });
  return NextResponse.json(mergedHistory ? { ...merged, history: mergedHistory } : merged);
});
