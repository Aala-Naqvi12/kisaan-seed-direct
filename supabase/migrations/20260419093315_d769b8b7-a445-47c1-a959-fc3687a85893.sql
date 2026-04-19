-- Role enum
create type public.app_role as enum ('farmer', 'buyer');

-- user_roles table (separate from any profile table — security best practice)
create table public.user_roles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  role app_role not null,
  created_at timestamptz not null default now(),
  unique (user_id)
);

alter table public.user_roles enable row level security;

-- Security definer function to check roles without recursive RLS
create or replace function public.has_role(_user_id uuid, _role app_role)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.user_roles
    where user_id = _user_id
      and role = _role
  )
$$;

-- Helper to get the current user's role
create or replace function public.get_user_role(_user_id uuid)
returns app_role
language sql
stable
security definer
set search_path = public
as $$
  select role from public.user_roles where user_id = _user_id limit 1
$$;

-- Policies: users can read and insert their own role
create policy "Users can view their own role"
on public.user_roles
for select
to authenticated
using (auth.uid() = user_id);

create policy "Users can insert their own role"
on public.user_roles
for insert
to authenticated
with check (auth.uid() = user_id);

create policy "Users can update their own role"
on public.user_roles
for update
to authenticated
using (auth.uid() = user_id);