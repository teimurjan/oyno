-- The keepsakes a family found, so a reinstall gets them back with the planet.
alter table public.progress
  add column if not exists keepsakes text[] not null default '{}';

-- The four-total `merge_progress` stays beside this one, so the API already deployed keeps
-- backing up until the new one replaces it. Drop it in a later migration, after that deploy.

-- Totals only grow and keepsakes are only ever added, so a phone that is behind can never
-- shrink the planet. Returns the merged row, which is what the phone restores from.
create or replace function public.merge_progress(
  p_user_id uuid,
  p_rounds integer,
  p_minutes integer,
  p_together integer,
  p_keepsakes text[]
) returns public.progress
language sql
as $$
  insert into public.progress as p (user_id, rounds, minutes, together, keepsakes)
  values (p_user_id, p_rounds, p_minutes, p_together, p_keepsakes)
  on conflict (user_id) do update set
    rounds = greatest(p.rounds, excluded.rounds),
    minutes = greatest(p.minutes, excluded.minutes),
    together = greatest(p.together, excluded.together),
    keepsakes = array(select distinct unnest(p.keepsakes || excluded.keepsakes) order by 1),
    updated_at = now()
  returning p.*;
$$;

-- Callable with the secret key only.
revoke execute on function public.merge_progress(uuid, integer, integer, integer, text[]) from public, anon, authenticated;
