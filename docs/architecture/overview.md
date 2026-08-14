# Architecture Overview — Note Board

## Scope

“Note Board” is fullstack: Next.js UI, Go API, PostgreSQL database. Product has one capability: display saved notes already stored in database with loading, empty, error, and loaded states. Scaffold must not add note management features.

## Tech stack

- Frontend: Next.js 15 App Router, TypeScript strict mode, Tailwind CSS v3, ESLint.
- Backend: Go 1.22 module, standard `net/http`, `database/sql`, pgx PostgreSQL driver.
- Database: PostgreSQL 16 in local compose; deployed runtime injects `DATABASE_URL`.
- Runtime: `docker compose up` from repo root boots database, backend, and frontend.

## Repository layout

```text
code/
  backend/
    cmd/api/main.go                 API entry point and boot-time migrations
    cmd/api/migrations/*.sql        ordered SQL migrations tracked in schema_migrations
    .env.example                    backend environment contract
    go.mod / go.sum                 Go module and dependency checksums
  frontend/
    app/layout.tsx                  App Router root layout
    app/page.tsx                    composition root only; story components mount here
    app/globals.css                 shared design tokens and base styles; frozen after scaffold
    components/                     story-owned components later
    lib/mock/                       story mock data later, deleted when API lands
    .env.example                    browser-visible env contract
    package.json / package-lock.json

docs/
  architecture/overview.md          this document
  architecture/erd.md               later table design
  architecture/services.md          later API contract
```

## Runtime flow

1. Frontend renders shell from `code/frontend/app/page.tsx`.
2. Story component later fetches notes from `NEXT_PUBLIC_API_URL`.
3. Backend reads `DATABASE_URL`, applies all pending migrations, then starts HTTP listener.
4. `/healthz` returns 200 only after migrations succeed and database responds to `SELECT 1`/ping.
5. PostgreSQL stores saved notes; initial notes schema belongs in ERD task, not scaffold.

## Environment variables

Root `.env.example` for compose:

- `POSTGRES_USER` — local database user.
- `POSTGRES_PASSWORD` — local database password placeholder.
- `POSTGRES_DB` — local database name.
- `BACKEND_PORT` — host port mapped to backend `8080`.
- `FRONTEND_PORT` — host port mapped to frontend `3000`.
- `NEXT_PUBLIC_API_URL` — browser-visible backend API base URL.

Backend `code/backend/.env.example`:

- `DATABASE_URL` — PostgreSQL connection URL injected by runtime.
- `PORT` — HTTP listener port.
- `APP_PORT` — optional fallback when `PORT` is unset.

Frontend `code/frontend/.env.example`:

- `NEXT_PUBLIC_API_URL` — browser-visible backend API base URL.

No secrets are committed. `.env` files stay local.

## Naming conventions

- Go entry point stays in `code/backend/cmd/api` with one `main` package.
- SQL migrations use timestamp prefix and `.up.sql` / `.down.sql` suffix.
- React component files use PascalCase and `export default function ComponentName()`.
- `app/page.tsx` stays Server Component and only composes child components.
- Any component using hooks, events, or browser APIs must start with literal first line `"use client"`.
- CSS tokens live in `app/globals.css`; story CSS modules must use `var(--token)` without fallbacks.

## Decisions and tradeoffs

1. Fullstack retained.
   - Chosen: frontend + backend + PostgreSQL because SRS says notes are already stored in database and UI must fetch them.
   - Rejected: static mock page. Faster but cannot satisfy database-backed saved notes.
   - Rejected: API-only. Would omit required single screen.

2. Backend self-migrates on boot.
   - Chosen: embed SQL migrations and apply before listening.
   - Rejected: external migration command. Runtime starts with empty database and has no separate migration phase.
   - Tradeoff: server boot owns schema safety; migration bugs block health, which is preferable to serving broken API.

3. Minimal backend skeleton.
   - Chosen: `net/http`, `database/sql`, pgx driver, `/healthz` only.
   - Rejected: router/framework. One read-only endpoint later does not need routing abstraction yet.
   - Tradeoff: fewer dependencies now; add router only if endpoint set grows enough to justify it.

4. Next.js App Router composition root.
   - Chosen: `app/page.tsx` contains thin shell and no product UI.
   - Rejected: building Note Board markup in scaffold. Would steal story scope and force rewrites.
   - Tradeoff: blank shell until story lands, but later PRs can mount one component with one import and one element.

5. Design tokens centralized.
   - Chosen: shared colors, focus, typography, reduced motion in `globals.css`.
   - Rejected: per-component hardcoded colors. Causes drift and CI token failures.
   - Tradeoff: tokens may need extension only through architecture/design change, not story edits.

## CI gates

`.github/workflows/ci.yml` runs on pull requests and pushes to `main`:

- Backend: `go build ./...`, `go vet ./...`, `go test ./...`.
- Frontend: `npm ci`, `npm run lint`, `npm run build`, `npm test --if-present`.
- Compose: `docker compose config -q`.
- Tokens: reject hardcoded colors and CSS variable fallbacks in `*.module.css`.

## How to run

```sh
cp .env.example .env
docker compose --profile local up --build
```

Frontend: `http://localhost:3000`.
Backend health: `http://localhost:8080/healthz`.

Local checks:

```sh
cd code/backend && go build ./... && go vet ./... && go test ./...
cd code/frontend && npm ci && npm run lint && npm run build && npm test --if-present
docker compose config -q
```

## Risks and unknowns

- Note table and API contract not defined here; ERD and service design tasks must add them before backend story.
- Maximum visible note count remains stakeholder default: render all returned notes without pagination for initial release.
- All visitors can read all notes. If privacy changes, auth becomes new scope.
