# Design System — Note Board

> Source of truth: the approved `index.html` (preview: http://localhost:8080/design/7abe5c87-95b3-4cb1-8d04-b540b1e653f6).
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2026-08-14

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#F9FAFB` | Page background and quiet read-only panels |
| `--color-surface` | `#FFFFFF` | Card, note, menu, panel background |
| `--color-surface-raised` | `#FFFFFF` | Sticky header, dropdown navigation, elevated board card |
| `--color-border` | `#D1D5DB` | Default border and divider |
| `--color-border-subtle` | `#E5E7EB` | Inner card borders and toolbar dividers |
| `--color-border-dashed` | `#CBD5E1` | Read-only note dashed border |
| `--color-text` | `#111827` | Body text, headings, brand text |
| `--color-text-muted` | `#6B7280` | Secondary text, metadata, footer |
| `--color-text-soft` | `#4B5563` | Note body text and empty icon |
| `--color-primary` | `#2563EB` | Primary action background, link text, brand accent |
| `--color-primary-hover` | `#1D4ED8` | Primary button hover background |
| `--color-primary-soft` | `#EFF6FF` | Primary-tinted badge, hover, state icon background |
| `--color-primary-border` | `#BFDBFE` | Primary-tinted border |
| `--color-primary-border-strong` | `#93C5FD` | Active state switcher border |
| `--color-brand-mark-end` | `#60A5FA` | Brand mark gradient end |
| `--color-primary-text` | `#FFFFFF` | Text and icon on primary action or brand mark |
| `--color-success` | `#10B981` | Read-only live dot |
| `--color-success-text` | `#047857` | Read-only pill and note tag text |
| `--color-success-soft` | `#ECFDF5` | Read-only pill and note tag background |
| `--color-success-border` | `#A7F3D0` | Read-only pill and note tag border |
| `--color-warning` | `#F59E0B` | Warning token reserved in approved CSS |
| `--color-danger` | `#EF4444` | Error icon color |
| `--color-danger-soft` | `#FEF2F2` | Error icon background |
| `--color-focus` | `rgba(37,99,235,.45)` | Keyboard focus outline |
| `--color-shadow-ink-04` | `rgba(17,24,39,.04)` | Resting note shadow |
| `--color-shadow-ink-07` | `rgba(17,24,39,.07)` | Sticky header shadow |
| `--color-shadow-ink-08` | `rgba(17,24,39,.08)` | Hover and secondary button shadow |
| `--color-shadow-ink-09` | `rgba(17,24,39,.09)` | Note hover shadow |
| `--color-shadow-ink-10` | `rgba(17,24,39,.10)` | Board and hero card shadow |
| `--color-shadow-ink-12` | `rgba(17,24,39,.12)` | Mobile navigation shadow |
| `--color-shadow-primary-25` | `rgba(37,99,235,.25)` | Primary button shadow |
| `--color-shadow-primary-28` | `rgba(37,99,235,.28)` | Brand mark shadow |
| `--color-primary-wash-08` | `rgba(37,99,235,.08)` | Skeleton shine |
| `--color-primary-wash-13` | `rgba(37,99,235,.13)` | Page radial background |
| `--color-success-wash-12` | `rgba(16,185,129,.12)` | Live dot halo |
| `--color-surface-glass-78` | `rgba(255,255,255,.78)` | Sticky header glass background |
| `--color-surface-glass-86` | `rgba(255,255,255,.86)` | Board glass background |
| `--color-surface-glass-92` | `rgba(255,255,255,.92)` | Hero card gradient start |
| `--color-surface-glass-98` | `rgba(255,255,255,.98)` | Hero card gradient end |
| `--color-border-glass-80` | `rgba(209,213,219,.8)` | Header and hero card border |
| `--color-border-glass-90` | `rgba(209,213,219,.9)` | Board border |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` `#111827` | `--color-bg` `#F9FAFB` | `16.9:1` | AA |
| `--color-text` `#111827` | `--color-surface` `#FFFFFF` | `17.7:1` | AA |
| `--color-text-muted` `#6B7280` | `--color-bg` `#F9FAFB` | `4.7:1` | AA |
| `--color-text-muted` `#6B7280` | `--color-surface` `#FFFFFF` | `4.8:1` | AA |
| `--color-text-soft` `#4B5563` | `--color-surface` `#FFFFFF` | `7.6:1` | AA |
| `--color-primary` `#2563EB` | `--color-primary-soft` `#EFF6FF` | `4.8:1` | AA |
| `--color-primary-text` `#FFFFFF` | `--color-primary` `#2563EB` | `5.2:1` | AA |
| `--color-primary-text` `#FFFFFF` | `--color-primary-hover` `#1D4ED8` | `6.7:1` | AA |
| `--color-success-text` `#047857` | `--color-success-soft` `#ECFDF5` | `4.9:1` | AA |
| `--color-danger` `#EF4444` | `--color-danger-soft` `#FEF2F2` | `3.5:1` | AA Large / UI only |
| `--color-text-soft` `#4B5563` | `#F3F4F6` | `7.1:1` | AA |
| `--color-border` `#D1D5DB` | `--color-surface` `#FFFFFF` | `1.5:1` | FAIL for UI border |
| `--color-border-subtle` `#E5E7EB` | `--color-surface` `#FFFFFF` | `1.2:1` | FAIL for UI border |
| `--color-primary-border` `#BFDBFE` | `--color-surface` `#FFFFFF` | `1.4:1` | FAIL for UI border |
| `--color-primary-border-strong` `#93C5FD` | `--color-surface` `#FFFFFF` | `1.8:1` | FAIL for UI border |

### 1.2 Spacing

Base unit: `1px`. The approved design uses many one-off values; reusable layout should prefer the documented tokens below and treat non-scale values as deviations.

| Token | Value |
|---|---|
| `--space-0` | `0` |
| `--space-1` | `4px` |
| `--space-2` | `8px` |
| `--space-3` | `12px` |
| `--space-4` | `16px` |
| `--space-5` | `20px` |
| `--space-6` | `24px` |
| `--space-7` | `28px` |
| `--space-8` | `32px` |
| `--space-9` | `34px` |
| `--space-11` | `44px` |
| `--space-12` | `48px` |
| `--space-18` | `74px` |
| `--space-98` | `390px` |
| `--space-118` | `470px` |

Extracted one-off spacing values: `5px`, `7px`, `9px`, `10px`, `13px`, `14px`, `18px`, `22px`, `26px`, `34px`, `38px`, `42px`, `62px`, `88px`, `190px`, `430px`, `610px`, `620px`, `1120px`, and `32rem`. Record as deviations when reused outside exact approved components.

### 1.3 Typography

Font families (include fallback stack and how font is loaded):

- Body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`; not externally loaded in approved HTML, so system fallback renders when Inter is absent.
- Headings: inherit body stack.
- Mono: not used in approved HTML.

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-xs` | `12px` | `1.5` inherited | `800` | Note tag |
| `--text-sm-tight` | `13px` | `1.5` inherited | `400` / `800` | Eyebrow, metadata, note dates |
| `--text-sm` | `14px` | `1.5` inherited | `400` / `700` / `800` | Secondary body, footer, status pills |
| `--text-base` | `16px` | `1.5` inherited | `400` | Default body |
| `--text-note-title` | `17px` | `1.5` inherited | default bold heading weight | Note card h4 |
| `--text-lg` | `18px` | `1.5` inherited | heading default bold | Board toolbar h3 |
| `--text-lead` | `19px` | `1.5` inherited | `400` | Hero lead paragraph |
| `--text-xl` | `24px` | `1.5` inherited | heading default bold | State card h4 |
| `--text-2xl` | `clamp(28px,4vw,44px)` | `1.5` inherited | heading default bold | h2 |
| `--text-3xl` | `clamp(42px,6vw,76px)` | `.95` | heading default bold | h1 |

Heading levels are used in order in main content: h1, h2, h3, h4. The brand area uses non-heading text for logo and preview titles.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-sm` | `12px` | Brand mark, eyebrow |
| `--radius-md` | `14px` | Button, mobile menu button |
| `--radius-lg` | `16px` | Read-only notice |
| `--radius-xl` | `18px` | Mini note |
| `--radius-2xl` | `20px` | Mobile nav, skeleton |
| `--radius-card` | `22px` | Note card, root `--radius` |
| `--radius-section` | `24px` | Hero card on mobile |
| `--radius-icon` | `26px` | State icon |
| `--radius-panel` | `32px` | Hero card, board |
| `--radius-full` | `999px` / `9999px` | Header, pills, dot, skeleton lines |
| `--border-width` | `1px` | Default border |
| `--border-focus` | `3px` | Focus outline |
| `--shadow-note` | `0 8px 18px rgba(17,24,39,.04)` | Resting note card |
| `--shadow-header` | `0 18px 45px rgba(17,24,39,.07)` | Sticky header |
| `--shadow-secondary-hover` | `0 14px 30px rgba(17,24,39,.08)` | Secondary button hover |
| `--shadow-mini-hover` | `0 12px 28px rgba(17,24,39,.08)` | Mini note hover |
| `--shadow-note-hover` | `0 18px 38px rgba(17,24,39,.09)` | Note card hover |
| `--shadow-panel` | `0 24px 70px rgba(17,24,39,.10)` | Hero card and board |
| `--shadow-mobile-menu` | `0 18px 40px rgba(17,24,39,.12)` | Mobile nav dropdown |
| `--shadow-primary` | `0 16px 32px rgba(37,99,235,.25)` | Primary button |
| `--shadow-brand` | `0 12px 26px rgba(37,99,235,.28)` | Brand mark |
| `--duration-instant` | `.01ms` | Reduced motion animation duration |
| `--duration-fast` | `.16s` | State switcher hover |
| `--duration-base` | `.18s` | Button and nav hover |
| `--duration-medium` | `.2s` | Mini note hover |
| `--duration-panel` | `.25s` | State panel fade |
| `--duration-enter` | `.7s` | Hero card entrance |
| `--duration-shine` | `1.4s` | Loading skeleton shine |
| `--duration-retry` | `900ms` | Preview retry delay |
| `--duration-initial-state` | `500ms` | Preview initial loaded delay |
| `--easing` | `ease` | All transitions and keyframes |

Motion respects `prefers-reduced-motion: reduce`: state changes remain, movement is removed by forcing near-zero animation duration and disabling transitions.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `base` | `0` | Fluid, `padding:16px` below tablet | 1 note column below tablet | `16px` notes gap |
| `md` | `860px` max-width media cutoff | `max-width:1120px`, page padding `24px` | Hero `1.04fr .96fr`; notes `repeat(3,1fr)` | `34px` hero gap, `16px` notes gap |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | `0` |
| Sticky header | `10` |
| Dropdown | Not set; positioned absolute inside sticky header |
| Modal backdrop | Not used |
| Modal | Not used |
| Toast | Not used |

## 2. Components

One subsection per reusable component. Every component lists all states.

### 2.1 AppShell

**Purpose** — Centers Note Board content in one page; use for the single read-only screen, not nested sections.

**Anatomy** — `[main.page] [div.shell] [HeaderNav] [Hero] [Board sections] [Footer]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default | `--color-bg`, `--color-text`, `--space-6`, `1120px` container | Whole page |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Desktop | `min-height:100vh` | `24px` | `--text-base` |
| Mobile | `min-height:100vh` | `16px` | `--text-base` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Soft radial primary wash over neutral background | `--color-primary-wash-13`, `--color-bg` |
| Hover | None; shell is non-interactive | Not applicable |
| Focus (keyboard) | Child controls show visible focus ring | `--color-focus` |
| Active / pressed | None | Not applicable |
| Disabled | None | Not applicable |
| Loading | Board area swaps to skeleton state, shell unchanged | `--duration-shine` |
| Error | Board area swaps to error state, shell unchanged | `--color-danger`, `--color-danger-soft` |
| Empty | Board area swaps to empty state, shell unchanged | `#F3F4F6`, `--color-text-soft` |

**Accessibility** — Main landmark uses `<main>`. Page keeps one h1. Minimum interactive target comes from child controls, at least `44×44px` for buttons and links with padding.

### 2.2 HeaderNav

**Purpose** — Provides brand, in-page navigation, and read-only status; do not add product actions here.

**Anatomy** — `[brand link with mark] [mobile menu button] [nav links] [read-only status pill]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Desktop sticky pill | `--color-surface-glass-78`, `--color-border-glass-80`, `--shadow-header`, `--radius-full` | Width above `860px` |
| Mobile dropdown | `--color-surface`, `--color-border-subtle`, `--shadow-mobile-menu`, `--radius-2xl` | Width at or below `860px` |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Desktop | Content-driven | `12px 14px 12px 18px` nav | `--text-base`, `--text-sm` pill |
| Mobile menu button | Content-driven | `10px` | Icon only |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Sticky glass pill with subtle border and shadow | `--color-surface-glass-78`, `--color-border-glass-80` |
| Hover | Nav links and ghost buttons get primary soft background and primary text | `--color-primary-soft`, `--color-primary` |
| Focus (keyboard) | 3px primary translucent outline offset 4px | `--color-focus` |
| Active / pressed | Mobile menu toggles dropdown open and `aria-expanded` | `--color-surface`, `--shadow-mobile-menu` |
| Disabled | Not used; navigation stays available | Not applicable |
| Loading | Status pill may still show read-only; no loading nav state | Not applicable |
| Error | Status pill unchanged; errors appear in board | Not applicable |
| Empty | Status pill unchanged; empty appears in board | Not applicable |

**Accessibility** — `<nav aria-label="Main navigation">`. Mobile button uses `aria-expanded`, `aria-controls`, and changing `aria-label`. Escape closes mobile nav. Links close dropdown after activation. Icon-only button target is visually about `42×42px`, below 44px target recommendation; recorded as known deviation.

### 2.3 Button

**Purpose** — Provides in-page navigation or retry action. Do not use for create, edit, delete, search, or auth in this product.

**Anatomy** — `[label]` or `[icon?] [label]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Primary | `--color-primary`, `--color-primary-hover`, `--color-primary-text`, `--shadow-primary` | Main link and retry loading |
| Secondary | `--color-surface`, `--color-text`, `--color-border` | Secondary in-page link |
| Ghost | Transparent background, `--color-text-muted`, `--color-primary-soft`, `--color-primary` | Low-emphasis nav action |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | About `50px` | `13px 18px` | `--text-base`, weight `800` |
| State switcher | About `38px` | `8px 12px` | `--text-sm`, weight `800` |
| Nav link | About `44px` | `10px 14px` | `--text-base` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Rounded rectangle or pill, bold label | `--radius-md`, `--radius-full` |
| Hover | Main buttons translate up `-2px`; primary darkens; secondary gains shadow | `--color-primary-hover`, `--shadow-secondary-hover` |
| Focus (keyboard) | 3px primary translucent outline offset 4px | `--color-focus` |
| Active / pressed | No separate pressed CSS in approved design | Known deviation |
| Disabled | No disabled button style in approved design | Known deviation |
| Loading | Retry button remains visible while board switches to loading skeleton | `--duration-retry` |
| Error | Primary retry button appears in error state | `--color-danger-soft`, `--color-primary` |
| Empty | No button appears in empty state | Not applicable |

**Accessibility** — Use real `<button type="button">` for state changes and retry, `<a>` for in-page navigation. Label text visible. Keyboard focus must remain visible. Minimum target about `44×44px` or larger except state switcher, recorded as deviation.

### 2.4 StatusPill

**Purpose** — Shows read-only state or note count; not interactive and not a filter.

**Anatomy** — `[dot?] [label]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Read-only | `--color-success-soft`, `--color-success-text`, `--color-success-border`, `--color-success` | Global database list status |
| Count | Same tokens | Hero preview count |
| Tag | Same tokens, smaller padding | Note category label |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Pill | Content-driven | `9px 13px` | `--text-sm`, weight `700` |
| Tag | Content-driven | `5px 9px` | `--text-xs`, weight `800` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Success soft pill with green text and border | `--color-success-soft`, `--color-success-text` |
| Hover | None; non-interactive | Not applicable |
| Focus (keyboard) | None; not focusable | Not applicable |
| Active / pressed | None | Not applicable |
| Disabled | Not used | Not applicable |
| Loading | Count pill may be absent or replaced by toolbar metadata; no spinner | Not applicable |
| Error | Status stays read-only; error shown in board | Not applicable |
| Empty | Status stays read-only; empty shown in board | Not applicable |

**Accessibility** — Non-interactive text. Global read-only pill uses `aria-label="Read-only database list"`. Decorative dot uses `aria-hidden="true"`.

### 2.5 Hero

**Purpose** — Explains product scope and shows read-only preview; use only once at top of page.

**Anatomy** — `[eyebrow] [h1] [lead] [primary link] [secondary link] [preview card]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Desktop split | `1.04fr .96fr`, `--space-9` gap | Width above `860px` |
| Mobile stacked | One column, `--radius-section` preview | Width at or below `860px` |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Text column | Content-driven | none | `--text-3xl`, `--text-lead` |
| Preview card | Content-driven | `20px` | `--text-sm`, `--text-base` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Split grid with elevated preview card | `--shadow-panel`, `--radius-panel` |
| Hover | Mini notes translate up and gain shadow | `--shadow-mini-hover`, `--duration-medium` |
| Focus (keyboard) | Hero links use global focus ring | `--color-focus` |
| Active / pressed | Links rely on browser active behavior; no separate CSS | Known deviation |
| Disabled | Not used | Not applicable |
| Loading | No hero loading state | Not applicable |
| Error | No hero error state | Not applicable |
| Empty | No hero empty state | Not applicable |

**Accessibility** — Hero has one h1. Preview aside uses `aria-label="Note preview"`. Brand icon inside preview remains decorative where applicable.

### 2.6 Board

**Purpose** — Main application surface for saved notes and state previews.

**Anatomy** — `[toolbar title/meta/state tabs] [board body] [loaded|loading|empty|error panel]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Main board | `--color-surface-glass-86`, `--color-border-glass-90`, `--shadow-panel`, `--radius-panel` | Note list screen |
| State behavior board | Same surface without toolbar | Documentation section |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Toolbar | Content-driven | `18px 20px` | `--text-lg`, `--text-sm` |
| Body | `min-height:470px` main, `390px` center state | `22px`, `28px` center | `--text-base` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Loaded notes panel visible | `--color-surface-glass-86`, `--shadow-panel` |
| Hover | Board itself does not move; child controls and notes respond | Child tokens |
| Focus (keyboard) | Tabs and retry show visible focus ring | `--color-focus` |
| Active / pressed | Active tab uses primary soft background and stronger primary border | `--color-primary-soft`, `--color-primary-border-strong` |
| Disabled | Not used | Not applicable |
| Loading | Skeleton list appears with animated shine | `--color-primary-wash-08`, `--duration-shine` |
| Error | Centered error card with danger icon and retry button | `--color-danger`, `--color-danger-soft` |
| Empty | Centered empty card with neutral icon, no add button | `#F3F4F6`, `--color-text-soft` |

**Accessibility** — Main board uses `aria-label="Note Board application screen"`. State switcher uses `role="tablist"`, buttons use `role="tab"`, panels use `role="tabpanel"`, selected tab updates `aria-selected`. Loading panel uses `aria-live="polite"`.

### 2.7 StateSwitcher

**Purpose** — Design preview control for loaded/loading/empty/error states. It is not product filtering or search.

**Anatomy** — `[tab button Loaded] [tab button Loading] [tab button Empty] [tab button Error]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Pill tabs | `--color-border`, `--color-primary-soft`, `--color-primary`, `--color-primary-border-strong` | Board state preview only |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | About `38px` | `8px 12px` | `--text-sm`, weight `800` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White pill with muted text and border | `--color-surface`, `--color-text-muted`, `--color-border` |
| Hover | Border turns stronger primary and text primary | `--color-primary-border-strong`, `--color-primary` |
| Focus (keyboard) | Global visible focus outline | `--color-focus` |
| Active / pressed | Active tab has primary soft background, strong primary border, primary text | `--color-primary-soft`, `--color-primary-border-strong`, `--color-primary` |
| Disabled | Not used | Not applicable |
| Loading | Loading tab can be active; skeleton panel appears | `--duration-shine` |
| Error | Error tab can be active; error panel appears | `--color-danger` |
| Empty | Empty tab can be active; empty panel appears | `#F3F4F6` |

**Accessibility** — Use `role="tablist"` and `role="tab"`. Update `aria-selected`. Keyboard focus visible. Approved design does not implement arrow-key tab navigation; recorded as known deviation.

### 2.8 NoteCard

**Purpose** — Displays one saved note record. Do not include edit/delete controls.

**Anatomy** — `[h4 title] [body excerpt] [tag?] [updated date]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Full card | `--color-surface`, `--color-border-subtle`, `--radius-card`, `--shadow-note` | Loaded board notes |
| Mini preview | `--color-surface`, `--color-border-subtle`, `--radius-xl` | Hero preview only |
| State summary | Same as full card | State behavior cards |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Full card | `min-height:178px` | `18px` | `--text-note-title`, `--text-base`, `--text-sm-tight` |
| Mini preview | Content-driven | `14px` | `--text-base`, `--text-sm` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White bordered card with subtle shadow | `--color-surface`, `--color-border-subtle`, `--shadow-note` |
| Hover | Moves up `-3px`, stronger shadow, primary border tint | `--shadow-note-hover`, `--color-primary-border` |
| Focus (keyboard) | Cards are not interactive; no focus state | Not applicable |
| Active / pressed | None; read-only card is not pressable | Not applicable |
| Disabled | Not used | Not applicable |
| Loading | Replaced by skeleton card | `--duration-shine` |
| Error | Replaced by error state card | `--color-danger` |
| Empty | Replaced by empty state card | `#F3F4F6` |

**Accessibility** — Use `<article>` for each note. Date uses `<time datetime="YYYY-MM-DD">Updated Mon D, YYYY</time>`. No hidden actions. Hover must not reveal unique content.

### 2.9 SkeletonList

**Purpose** — Keeps note layout stable while database notes load.

**Anatomy** — `[skeleton card] x repeated, each with [short line] [long line] [mid line]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Loading card list | `--color-surface`, `--color-border-subtle`, `--radius-2xl`, `--color-primary-wash-08` | Board loading state |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Card | Content-driven | `18px` | Not text |
| Line | `12px` high | `9px 0` margin | Not text |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Static gray bars inside bordered white cards | `--color-border-subtle`, `--color-surface` |
| Hover | None | Not applicable |
| Focus (keyboard) | None; not focusable | Not applicable |
| Active / pressed | None | Not applicable |
| Disabled | None | Not applicable |
| Loading | Blue-tinted shine moves left to right every `1.4s` | `--color-primary-wash-08`, `--duration-shine` |
| Error | Removed when error panel appears | Not applicable |
| Empty | Removed when empty panel appears | Not applicable |

**Accessibility** — Loading panel uses `aria-live="polite"` and descriptive `aria-label="Loading saved notes"`. Skeleton shapes are visual only and should not be announced as notes.

### 2.10 CenterState

**Purpose** — Communicates empty or error database result without adding extra capabilities.

**Anatomy** — `[icon] [h4] [message] [optional retry button]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Empty | `#F3F4F6`, `--color-text-soft`, `--color-text-muted` | Database returns zero notes |
| Error | `--color-danger-soft`, `--color-danger`, `--color-text-muted`, primary retry button | Database request fails |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Center wrapper | `min-height:390px` | `28px` | `--text-base` |
| Icon | `74px × 74px` | centered | Icon `38px × 38px` |
| Card | `max-width:430px` | none | `--text-xl`, `--text-base` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Centered message with icon | `--radius-icon`, `--text-xl` |
| Hover | Error retry button follows button hover; empty state has no hover | `--color-primary-hover` |
| Focus (keyboard) | Retry button shows focus ring | `--color-focus` |
| Active / pressed | Retry has no distinct pressed CSS | Known deviation |
| Disabled | No disabled retry style in approved design | Known deviation |
| Loading | Retry click switches to skeleton loading, then loaded in preview | `--duration-retry`, `--duration-shine` |
| Error | Danger icon, safe plain message, retry button | `--color-danger`, `--color-danger-soft` |
| Empty | Neutral icon, zero-records explanation, no add button | `#F3F4F6`, `--color-text-soft` |

**Accessibility** — Error copy hides raw technical details. Empty copy states zero notes and no add action. Retry is a real button. Icons are decorative with `aria-hidden="true"`.

### 2.11 ReadOnlyNotice

**Purpose** — Reinforces scope after loaded notes: display existing records only.

**Anatomy** — `[sentence]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Dashed notice | `--color-bg`, `--color-border-dashed`, `--color-text-muted`, `--radius-lg` | Below loaded note grid |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | Content-driven | `12px 14px` | `--text-sm` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Quiet dashed bordered block | `--color-bg`, `--color-border-dashed` |
| Hover | None; non-interactive | Not applicable |
| Focus (keyboard) | None; not focusable | Not applicable |
| Active / pressed | None | Not applicable |
| Disabled | Not used | Not applicable |
| Loading | Hidden with loaded panel when loading panel is active | Not applicable |
| Error | Hidden with loaded panel when error panel is active | Not applicable |
| Empty | Hidden with loaded panel when empty panel is active | Not applicable |

**Accessibility** — Plain text. Keep wording explicit: no create, edit, delete, search, or auth actions appear.

## 3. Content and formatting

- Voice and tone: calm, practical, direct; no marketing hype.
- Date format: `Updated Aug 14, 2026`; use English month abbreviation, day without leading zero, four-digit year, no time.
- Time format: not shown in this product.
- Number format: plain English count in toolbar metadata, e.g. `6 notes`, `0 notes`.
- Currency format: not used.
- Capitalization rule: sentence case for headings, buttons, tabs, labels, and messages; brand name remains `Note Board`.
- Empty-state wording pattern: say database returned zero notes, then confirm board stays read-only and no add button appears.
- Error-message wording pattern: say notes could not load, give a safe retry path, never expose raw server or database details.
- Product scope wording to preserve: `No adding, editing, deleting, search, or sign-in surfaces in this interface.` and `This screen displays existing records only. No create, edit, delete, search, or auth actions appear.`

## 4. Known deviations

Places where approved design does not follow its own rules or anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Color: borders | UI border contrast values are below `3:1` against white: `#D1D5DB`, `#E5E7EB`, `#BFDBFE`, `#93C5FD`. | Approved mockup uses low-contrast calm borders. | If accessibility review requires non-text border contrast, darken border tokens in design first. |
| Color: brand mark | Uses `linear-gradient(135deg,var(--primary),#60A5FA)`. | Approved design uses gradient as brand accent. | Keep gradient only for brand mark; do not spread to generic buttons or cards. |
| Color: page and panels | Uses decorative radial and panel gradients. | Approved mockup uses subtle depth. | Keep gradients constrained to page background, toolbar, board body, and hero card. |
| Spacing scale | Many spacing values are not on a clean 4px scale: `5px`, `7px`, `9px`, `10px`, `13px`, `14px`, `18px`, `22px`, `26px`, `34px`, `38px`, `42px`, `62px`, `88px`, `190px`, `430px`, `610px`, `620px`, `1120px`, `32rem`. | Approved HTML contains these exact values. | New work should reuse component tokens rather than invent more one-offs. |
| Radius scale | Radius has many values: `12px`, `14px`, `16px`, `18px`, `20px`, `22px`, `24px`, `26px`, `32px`, `999px`, `9999px`. | Approved mockup uses soft, friendly shapes. | Do not add new radius values; collapse scale in future redesign only. |
| Header/nav target | Mobile menu visual size is about `42×42px`, slightly below recommended `44×44px`. | Approved mockup sets `padding:10px` around `22px` icon. | Increase hit target in design if accessibility pass requires. |
| StateSwitcher keyboard behavior | Tabs update `aria-selected` but do not implement arrow-key navigation. | Approved preview script uses click only. | Add arrow-key behavior during implementation if tabs remain real tabs. |
| Button states | No distinct active/pressed or disabled CSS for buttons. | Approved product has no disabled action; pressed state not specified. | Add only when disabled or pressed behavior enters approved design. |
| AI default: maximum rounding | Pills use `999px` and skeleton lines use `9999px`, but cards use smaller structural radii. | Approved design uses pills only for pills and skeleton bars. | Do not apply full radius to cards. |
| AI default: oversized padding | Board and hero use generous padding; note cards stay denser. | Approved one-screen layout balances overview and list density. | Keep dense list padding at card level. |
| AI default: heavy shadows | Panel shadow `0 24px 70px rgba(17,24,39,.10)` is large. | Approved mockup uses one high-level elevated surface. | Do not use panel shadow on every card. |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2026-08-14 | Initial design system extracted from approved `index.html`. | This PR |
