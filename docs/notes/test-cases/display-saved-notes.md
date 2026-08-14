# Test Cases — Display saved notes

Risk level: low. One read-only page, no mutation, no auth. Coverage stays exact to written acceptance criteria and required failure states.

## Automated cases

### Scenario: Display note list when notes exist
**Given** saved notes exist in database and page opens on “Note Board”
**When** visitor opens page and fetch resolves with notes
**Then** page displays read-only note list

Trace: AC-1, AC-2, AC-3, AC-4, AC-5, AC-6, AC-7, AC-8, AC-9

### Scenario: Show loading state while fetch unresolved
**Given** notes fetch is unresolved
**When** visitor opens “Note Board”
**Then** page displays loading state until fetch resolves

Trace: AC-10

### Scenario: Replace loading with note list when fetch succeeds
**Given** notes fetch is unresolved and later succeeds with notes
**When** fetch resolves
**Then** loading state disappears and note list is shown

Trace: AC-11

### Scenario: Replace loading with empty state when fetch succeeds with zero notes
**Given** notes fetch is unresolved and later succeeds with zero notes
**When** fetch resolves
**Then** loading state disappears and empty state is shown

Trace: AC-12, AC-14, AC-15, AC-16

### Scenario: Replace loading with error state when fetch fails
**Given** notes fetch is unresolved and later fails
**When** fetch resolves with failure
**Then** loading state disappears and error state is shown

Trace: AC-13, AC-17, AC-18, AC-19

### Scenario: Retry after error succeeds with notes
**Given** error state is visible and retry succeeds with notes
**When** visitor activates retry
**Then** page attempts fetch again and shows note list after success

Trace: AC-20, AC-21

### Scenario: Retry after error succeeds with zero notes
**Given** error state is visible and retry succeeds with zero notes
**When** visitor activates retry
**Then** page attempts fetch again and shows empty state after success

Trace: AC-20, AC-22

### Scenario: Retry after error fails again
**Given** error state is visible and retry fails
**When** visitor activates retry
**Then** page keeps error state available

Trace: AC-20, AC-23

## Manual cases

### Scenario: Error state hides internal failure details
**Given** notes fetch fails
**When** error state renders
**Then** page shows safe error copy and no internal error details

Reason manual: exact message text and absence of backend detail need visual review against design and network error source.

Trace: AC-18

### Scenario: Page exposes no note-management or auth controls
**Given** saved notes exist and page is visible
**When** visitor scans page
**Then** page shows no add, edit, delete, search, sign-in, or account controls

Reason manual: absence of controls is a UI audit against final rendered page and design.

Trace: AC-5, AC-6, AC-7, AC-8, AC-9
