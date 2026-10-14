-- A third total: the minutes Kid hours kept the apps paused, on the days already over.
alter table public.progress
  add column if not exists together integer not null default 0 check (together >= 0);

-- The three-total `merge_progress` stays beside this one, so the API already deployed keeps
-- backing up until the new one replaces it. Drop it in a later migration, after that deploy.

-- Totals only grow, so a phone that is behind (an old install, a second device) can never
-- shrink the planet. Returns the merged row, which is what the phone restores from.
create or replace function public.merge_progress(
  p_user_id uuid,
  p_rounds integer,
  p_minutes integer,
  p_together integer
) returns public.progress
language sql
as $$
  insert into public.progress as p (user_id, rounds, minutes, together)
  values (p_user_id, p_rounds, p_minutes, p_together)
  on conflict (user_id) do update set
    rounds = greatest(p.rounds, excluded.rounds),
    minutes = greatest(p.minutes, excluded.minutes),
    together = greatest(p.together, excluded.together),
    updated_at = now()
  returning p.*;
$$;

-- Callable with the secret key only. PostgREST would otherwise let anyone with the
-- publishable key write any account's totals.
revoke execute on function public.merge_progress(uuid, integer, integer, integer) from public, anon, authenticated;
