-- The rounds and firsts behind the totals, so a reinstall gets back its letters, its firsts and
-- its practice by skill, not just the planet.
--
-- A first comes without the parent's words, and the letter lines never come at all: free text
-- is where a kid's name ends up, so it stays on the phone. Only new tables and a new function,
-- so the API and the builds already out keep calling `merge_progress` unchanged.
create table if not exists public.rounds (
  user_id uuid not null references auth.users (id) on delete cascade,
  id uuid not null,
  kind text not null,
  activity_id text,
  started_at timestamptz not null,
  minutes integer not null check (minutes >= 0),
  skills text[] not null default '{}',
  keepsake_id text,
  primary key (user_id, id)
);

create table if not exists public.firsts (
  user_id uuid not null references auth.users (id) on delete cascade,
  id uuid not null,
  noted_at timestamptz not null,
  kind text not null,
  signs text[] not null,
  primary key (user_id, id)
);

alter table public.rounds enable row level security;
alter table public.firsts enable row level security;

-- A round or a first never changes once written, so a row the account already has is kept as
-- it is. Returns every row the account has, which is what the phone restores from.
create or replace function public.merge_history(
  p_user_id uuid,
  p_rounds jsonb,
  p_firsts jsonb
) returns jsonb
language sql
as $$
  insert into public.rounds (user_id, id, kind, activity_id, started_at, minutes, skills, keepsake_id)
  select p_user_id, r.id, r.kind, r.activity_id, r.started_at, r.minutes, coalesce(r.skills, '{}'), r.keepsake_id
  from jsonb_populate_recordset(null::public.rounds, p_rounds) as r
  on conflict (user_id, id) do nothing;

  insert into public.firsts (user_id, id, noted_at, kind, signs)
  select p_user_id, f.id, f.noted_at, f.kind, f.signs
  from jsonb_populate_recordset(null::public.firsts, p_firsts) as f
  on conflict (user_id, id) do nothing;

  select jsonb_build_object(
    'rounds', coalesce((select jsonb_agg(to_jsonb(r) - 'user_id') from public.rounds r where r.user_id = p_user_id), '[]'::jsonb),
    'firsts', coalesce((select jsonb_agg(to_jsonb(f) - 'user_id') from public.firsts f where f.user_id = p_user_id), '[]'::jsonb)
  );
$$;

-- Callable with the secret key only.
revoke execute on function public.merge_history(uuid, jsonb, jsonb) from public, anon, authenticated;
