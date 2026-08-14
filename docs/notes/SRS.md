# SRS — Notes

Module: `notes`
Last updated: 2026-08-14
Design: [View Design](http://localhost:8080/design/7abe5c87-95b3-4cb1-8d04-b540b1e653f6)
Design system: `design/design-system.md`

> One file per module, at `docs/{module}/SRS.md`. It covers only functions that belong to this module. Never write `docs/SRS.md`.

## 1. Purpose

Notes module powers “Note Board”, a single read-only web page for viewing saved notes already stored in the database. Visitors use it to see existing notes without account setup or editing tools. If this module does not exist, product has no visible value because saved notes cannot be read.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Anyone opening “Note Board”; no sign-in exists | View saved notes list and system states: loading, empty, error, loaded |

## 3. Scope

**In scope** — functions specified below, by plan title:

- Display saved notes

**Out of scope** — expected note-board capabilities deliberately not built:

- Add notes — deliberately not built; product is read-only.
- Edit notes — deliberately not built; product is read-only.
- Delete notes — deliberately not built; product is read-only.
- Search, filtering, sorting, tagging, or pagination controls — deliberately not built; scope is one list.
- Authentication, accounts, roles, or permissions UI — deliberately not built; no auth in product scope.
- Note detail pages — deliberately not built; one screen only.

## 4. Functional requirements

### 4.1 Display saved notes

**Requirement NOTES-001 — Show saved notes list**

*As a* Visitor, *I want to* view saved notes already stored in the database, *so that* I can read note content on one board.

Behaviour:

1. Visitor opens “Note Board”.
2. Page starts fetching saved notes and shows loading state while fetch is unresolved.
3. When saved notes exist, page displays them as a read-only list.
4. Each note item displays title, body or excerpt, and updated date.
5. Updated date displays with month, day, and year only, matching design wording such as `Updated Aug 14, 2026`; no time is shown.
6. List does not expose add, edit, delete, search, auth, or navigation to detail actions.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/notes/test-cases/display-saved-notes.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | Saved notes exist | Visitor opens “Note Board” | Page displays note list |
| AC-2 | Saved notes exist | Note list renders | Each note shows title |
| AC-3 | Saved notes exist | Note list renders | Each note shows body or excerpt |
| AC-4 | Saved notes exist | Note list renders | Each note shows updated date as `Updated Mon DD, YYYY` with no time |
| AC-5 | Saved notes exist | Visitor views page | Page exposes no add control |
| AC-6 | Saved notes exist | Visitor views page | Page exposes no edit control |
| AC-7 | Saved notes exist | Visitor views page | Page exposes no delete control |
| AC-8 | Saved notes exist | Visitor views page | Page exposes no search control |
| AC-9 | Saved notes exist | Visitor views page | Page exposes no sign-in or account control |

**Requirement NOTES-002 — Show loading state**

*As a* Visitor, *I want to* see that notes are loading, *so that* I know page is working while saved notes are being fetched.

Behaviour:

1. Visitor opens “Note Board”.
2. While fetch is unresolved, page displays loading state matching approved design.
3. Loading state is replaced by loaded, empty, or error state after fetch resolves.
4. Loading state does not include any note-management controls.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/notes/test-cases/display-saved-notes.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-10 | Notes fetch is unresolved | Visitor opens “Note Board” | Page displays loading state |
| AC-11 | Notes fetch later succeeds with notes | Fetch resolves | Loading state is replaced by note list |
| AC-12 | Notes fetch later succeeds with zero notes | Fetch resolves | Loading state is replaced by empty state |
| AC-13 | Notes fetch later fails | Fetch resolves | Loading state is replaced by error state |

**Requirement NOTES-003 — Show empty state**

*As a* Visitor, *I want to* see a clear empty state when no notes exist, *so that* I understand list is empty and not broken.

Behaviour:

1. Visitor opens “Note Board”.
2. When fetch succeeds with zero notes, page displays empty state matching approved design.
3. Empty state does not offer creating notes or other out-of-scope actions.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/notes/test-cases/display-saved-notes.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-14 | Database contains zero notes | Visitor opens “Note Board” | Page displays empty state |
| AC-15 | Database contains zero notes | Empty state renders | Page displays no note cards |
| AC-16 | Database contains zero notes | Empty state renders | Page exposes no create-note action |

**Requirement NOTES-004 — Show error state with retry**

*As a* Visitor, *I want to* see a safe error state when notes cannot load, *so that* I can retry without refreshing manually.

Behaviour:

1. Visitor opens “Note Board”.
2. When fetch fails, page displays error state matching approved design.
3. Error state explains notes could not load without exposing internal error details.
4. Error state includes a retry action.
5. When Visitor uses retry, page attempts to fetch notes again.
6. Retry action does not create, edit, or delete notes.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/notes/test-cases/display-saved-notes.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-17 | Notes fetch fails | Visitor opens “Note Board” | Page displays error state |
| AC-18 | Notes fetch fails | Error state renders | Page does not expose internal error details |
| AC-19 | Notes fetch fails | Error state renders | Page displays retry action |
| AC-20 | Error state is visible | Visitor activates retry | Page attempts to fetch notes again |
| AC-21 | Retry succeeds with notes | Fetch resolves | Page displays note list |
| AC-22 | Retry succeeds with zero notes | Fetch resolves | Page displays empty state |
| AC-23 | Retry fails | Fetch resolves | Page keeps error state available |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Upstream failure | Saved notes cannot be fetched | Error state appears with retry; internal error details are not shown to Visitor |
| Empty data | Fetch succeeds with zero notes | Empty state appears; no note cards render |
| Slow response | Fetch remains unresolved | Loading state remains visible until success or failure |
| Missing title | A saved note has no title value | Note still appears with a safe untitled label rather than blank heading |
| Missing body | A saved note has no body value | Note still appears without body text; title and date remain visible when present |
| Missing updated date | A saved note has no updated date value | Note still appears and omits date text rather than showing invalid date text |
| Long title | A note title exceeds one line in the card | Title wraps or truncates without horizontal page scroll |
| Long body | Note body exceeds card preview space | Body preview is constrained by design; page remains readable without layout break |
| Malformed date | Updated date cannot be formatted | Date text is omitted for that note; page does not crash |
| Not permitted | Visitor has no account because auth is out of scope | Visitor can view read-only list; no account prompt appears |
| Unsupported action | Visitor looks for add, edit, delete, search, or auth controls | Those controls are absent |
| Preview controls | Design preview state toggles exist in design artifact | Product page does not include preview controls |

**Data touched** — fields this function reads, in product terms. Physical schema belongs in `docs/architecture/erd.md`.

| Field | Type | Required | Rule |
|---|---|---|---|
| Note title | text | no | Display when present; safe untitled label when absent |
| Note body | text | no | Display body or excerpt when present; omit when absent |
| Updated date | date/time | no | Display as `Updated Mon DD, YYYY`; omit if absent or invalid |

## 5. Screens

## Design

Approved design preview: [View Design](http://localhost:8080/design/7abe5c87-95b3-4cb1-8d04-b540b1e653f6).

Main screen:

- Note Board — one read-only saved-notes page with loaded list, loading skeletons, empty state, and safe error retry.

Color palette:

- `#2563EB` primary blue.
- `#F9FAFB` soft background.
- `#111827` ink.
- `#10B981` success accent.
- `#EF4444` error.

The design is source of truth for appearance; this section maps functions onto it so nothing in design is unaccounted for and nothing specified here is missing from design.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Note Board | Saved notes board | NOTES-001, NOTES-002, NOTES-003, NOTES-004 | loaded, loading, empty, error |

## 6. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | Initial page shell renders within 2 seconds on a typical broadband connection; note fetch state appears immediately while data loads |
| Accessibility | Note list and retry action are keyboard reachable; visible focus is present; text and controls meet contrast ratio ≥ 4.5:1 |
| Responsive | Page works at 320px width and up with no horizontal page scroll |
| Localisation | Copy is English; dates display in English month abbreviation format such as `Updated Aug 14, 2026` |
| Privacy | Page displays saved note content; no authentication, tracking, or personal profile data is required by this module |

## 7. Dependencies and assumptions

- **Depends on:** saved notes data source, for reading existing notes.
- **Depends on:** approved design and design system, for page appearance and state presentation.
- **Assumption:** Notes already exist in database before product use; creating and maintaining notes happens outside this product scope.
- **Assumption:** All visitors may view all saved notes; if notes later need privacy, auth becomes new scope.

| Open question | Proposed default | Who decides |
|---|---|---|
| Maximum number of notes visible on one screen | Render all returned notes without pagination for initial release | Stakeholder |

## 8. Traceability

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Display saved notes | NOTES-001, NOTES-002, NOTES-003, NOTES-004 | `docs/notes/test-cases/display-saved-notes.md` |
