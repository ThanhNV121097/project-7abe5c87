# Test Cases — Display saved notes

Risk level: low. Single read-only page, but covers load, empty, error, and display states named in SRS.

## Automated coverage

### Scenario: Display note list when saved notes exist
**Given** saved notes exist in database and fetch succeeds with note data
**When** visitor opens “Note Board”
**Then** page displays note list

### Scenario: Show note title in each rendered note
**Given** saved notes exist in database and note list renders
**When** visitor views list
**Then** each note shows title

### Scenario: Show note body or excerpt in each rendered note
**Given** saved notes exist in database and note list renders
**When** visitor views list
**Then** each note shows body or excerpt

### Scenario: Show updated date in required format
**Given** saved notes exist in database and note list renders
**When** visitor views list
**Then** each note shows updated date as `Updated Mon DD, YYYY` with no time

### Scenario: Expose no add control
**Given** saved notes exist in database and page is visible
**When** visitor views page
**Then** page exposes no add control

### Scenario: Expose no edit control
**Given** saved notes exist in database and page is visible
**When** visitor views page
**Then** page exposes no edit control

### Scenario: Expose no delete control
**Given** saved notes exist in database and page is visible
**When** visitor views page
**Then** page exposes no delete control

### Scenario: Expose no search control
**Given** saved notes exist in database and page is visible
**When** visitor views page
**Then** page exposes no search control

### Scenario: Expose no sign-in or account control
**Given** saved notes exist in database and page is visible
**When** visitor views page
**Then** page exposes no sign-in or account control

### Scenario: Show loading state while fetch is unresolved
**Given** notes fetch is unresolved
**When** visitor opens “Note Board”
**Then** page displays loading state

### Scenario: Replace loading state with note list after successful fetch
**Given** notes fetch later succeeds with notes
**When** fetch resolves
**Then** loading state is replaced by note list

### Scenario: Replace loading state with empty state after successful empty fetch
**Given** notes fetch later succeeds with zero notes
**When** fetch resolves
**Then** loading state is replaced by empty state

### Scenario: Replace loading state with error state after fetch failure
**Given** notes fetch later fails
**When** fetch resolves
**Then** loading state is replaced by error state

### Scenario: Show empty state when database has zero notes
**Given** database contains zero notes and fetch succeeds
**When** visitor opens “Note Board”
**Then** page displays empty state

### Scenario: Show no note cards in empty state
**Given** database contains zero notes and empty state renders
**When** visitor views empty state
**Then** page displays no note cards

### Scenario: Expose no create-note action in empty state
**Given** database contains zero notes and empty state renders
**When** visitor views empty state
**Then** page exposes no create-note action

### Scenario: Show error state when notes fetch fails
**Given** notes fetch fails
**When** visitor opens “Note Board”
**Then** page displays error state

### Scenario: Hide internal error details in error state
**Given** notes fetch fails and error state renders
**When** visitor views error state
**Then** page does not expose internal error details

### Scenario: Show retry action in error state
**Given** notes fetch fails and error state renders
**When** visitor views error state
**Then** page displays retry action

### Scenario: Retry fetch when visitor activates retry
**Given** error state is visible
**When** visitor activates retry
**Then** page attempts to fetch notes again

### Scenario: Show note list after retry succeeds with notes
**Given** error state is visible and retry succeeds with notes
**When** fetch resolves
**Then** page displays note list

### Scenario: Show empty state after retry succeeds with zero notes
**Given** error state is visible and retry succeeds with zero notes
**When** fetch resolves
**Then** page displays empty state

### Scenario: Keep error state available after retry fails
**Given** error state is visible and retry fails
**When** fetch resolves
**Then** page keeps error state available

## Manual coverage

### Scenario: Loading state stays visible until fetch resolves
**Given** notes fetch remains unresolved
**When** visitor keeps page open
**Then** loading state remains visible until success or failure
**Reason** timing and persistence need browser observation.

### Scenario: Page shows only read-only visitor access
**Given** visitor opens “Note Board”
**When** page loads
**Then** visitor can view read-only list and no account prompt appears
**Reason** no auth UI may exist; this is visible end-user behavior.
