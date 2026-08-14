# Story — Display saved notes

Module: `notes`
Plan item: Display saved notes
Requirements: NOTES-001, NOTES-002, NOTES-003, NOTES-004

## User story

As a Visitor, I want to view saved notes already stored in the database, so that I can read note content on one board.

## In scope

- Render one “Note Board” page that fetches saved notes from the backend/database-backed API.
- Show loading state while notes fetch is unresolved.
- Show read-only note list when saved notes exist.
- Show empty state when fetch succeeds with zero notes.
- Show safe error state when fetch fails.
- Provide retry action only in error state, and refetch notes when Visitor activates it.
- Display each note title, body or excerpt, and updated date when values are available.
- Display missing title as safe untitled label.
- Omit missing, invalid, or malformed body/date fields without crashing.
- Format updated date as `Updated Mon DD, YYYY`, for example `Updated Aug 14, 2026`, with no time.
- Keep page responsive from 320px width upward with no horizontal scroll.
- Keep retry action keyboard reachable with visible focus.

## Out of scope

- Adding notes.
- Editing notes.
- Deleting notes.
- Searching notes.
- Filtering, sorting, tagging controls, or pagination controls.
- Authentication, sign-in, account prompts, roles, or permissions UI.
- Note detail pages or navigation to note detail.
- Product state preview controls for Loaded, Loading, Empty, or Error tabs.
- Exposing raw server, database, stack, or network error details to Visitor.
- Creating or managing saved notes; data must already exist outside this product scope.

## UI scope

This story touches only approved “Note Board” screen.

- AppShell, HeaderNav, Hero, Board, NoteCard, SkeletonList, CenterState, Button, StatusPill, and ReadOnlyNotice must follow `design/design-system.md`.
- Loaded state: Board displays note cards as read-only articles, with no hidden actions and no card click behavior.
- Loading state: Board displays skeleton list immediately while fetch is unresolved, with `aria-live="polite"` and no management controls.
- Empty state: Board displays centered empty message explaining database returned zero notes and no add button appears.
- Error state: Board displays centered safe error message and retry button; raw technical details stay hidden.
- Design preview state switcher controls are not implemented in product page.

## Acceptance criteria

1. Given saved notes exist, when Visitor opens “Note Board”, then page displays note list.
2. Given saved notes exist, when note list renders, then each note displays title, or safe untitled label when title is missing.
3. Given saved notes exist, when note list renders, then each note displays body or excerpt when body exists.
4. Given saved notes exist, when note list renders, then each valid updated date displays as `Updated Mon DD, YYYY` with no time.
5. Given saved notes include missing or malformed updated date, when note list renders, then page omits date text for that note and does not crash.
6. Given saved notes exist, when Visitor views page, then no add control appears.
7. Given saved notes exist, when Visitor views page, then no edit control appears.
8. Given saved notes exist, when Visitor views page, then no delete control appears.
9. Given saved notes exist, when Visitor views page, then no search control appears.
10. Given saved notes exist, when Visitor views page, then no sign-in, account, or auth control appears.
11. Given notes fetch is unresolved, when Visitor opens “Note Board”, then page displays loading skeleton state.
12. Given notes fetch later succeeds with notes, when fetch resolves, then loading state is replaced by note list.
13. Given notes fetch later succeeds with zero notes, when fetch resolves, then loading state is replaced by empty state.
14. Given notes fetch later fails, when fetch resolves, then loading state is replaced by error state.
15. Given database contains zero notes, when Visitor opens “Note Board”, then page displays empty state.
16. Given database contains zero notes, when empty state renders, then page displays no note cards.
17. Given database contains zero notes, when empty state renders, then page exposes no create-note action.
18. Given notes fetch fails, when Visitor opens “Note Board”, then page displays error state.
19. Given notes fetch fails, when error state renders, then page does not expose internal error details.
20. Given notes fetch fails, when error state renders, then page displays retry action.
21. Given error state is visible, when Visitor activates retry, then page attempts to fetch notes again.
22. Given retry succeeds with notes, when fetch resolves, then page displays note list.
23. Given retry succeeds with zero notes, when fetch resolves, then page displays empty state.
24. Given retry fails, when fetch resolves, then page keeps error state and retry action available.
25. Given note title or body is long, when note card renders at 320px width, then content wraps or is constrained without horizontal page scroll.

## Dependencies

- Depends on approved design and `design/design-system.md`.
- Depends on existing frontend scaffold using Next.js App Router, TypeScript strict mode, Tailwind CSS v3, and frozen shared tokens in `app/globals.css`.
- Depends on backend service contract and database schema for reading saved notes, to be defined by Khoa in architecture/service design.
- Depends on saved notes data source returning existing notes.
- No external account, credential, or stakeholder decision blocks this story.
