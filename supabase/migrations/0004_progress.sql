-- The planet's backup: two totals per account, so a reinstall or a new phone keeps its planet.
--
-- The rounds themselves stay on the phone. Only how many were played and for how long come
-- here, written by /api/progress with the secret key. RLS is on with no policies.
create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  rounds integer not null default 0 check (rounds >= 0),
  minutes integer not null default 0 check (minutes >= 0),
  updated_at timestamptz not null default now()
);

alter table public.progress enable row level security;

-- Totals only grow, so a phone that is behind (an old install, a second device) can never
-- shrink the planet. Returns the merged row, which is what the phone restores from.
create or replace function public.merge_progress(
  p_user_id uuid,
  p_rounds integer,
  p_minutes integer
) returns public.progress
language sql
as $$
  insert into public.progress as p (user_id, rounds, minutes)
  values (p_user_id, p_rounds, p_minutes)
  on conflict (user_id) do update set
    rounds = greatest(p.rounds, excluded.rounds),
    minutes = greatest(p.minutes, excluded.minutes),
    updated_at = now()
  returning p.*;
$$;

-- Callable with the secret key only. PostgREST would otherwise let anyone with the
-- publishable key write any account's totals.
revoke execute on function public.merge_progress(uuid, integer, integer) from public, anon, authenticated;
