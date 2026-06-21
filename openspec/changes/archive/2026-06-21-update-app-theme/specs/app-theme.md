## ADDED Requirements

### Requirement: Custom Theme Hook
The system SHALL provide a custom theme hook that simplifies `useColorScheme()` usage.

#### Scenario: Hook returns theme state
- **WHEN** a component imports and uses `useTheme()` hook
- **THEN** it receives `isDark` boolean indicating current theme

#### Scenario: Hook returns theme colors
- **WHEN** a component uses `useTheme()` hook
- **THEN** it receives color constants for the current theme

### Requirement: Theme Color Palette
The system SHALL define a dark theme color palette with the following color constants:

- `bgBody`: `#03110d` (primary background color)
- `bgCard`: `#032017` (card and surface background)
- `bgCardBorder`: `rgba(216, 181, 137, 0.1)` (card border color)
- `bgCardBorderLight`: `rgba(218, 181, 137, 0.2)` (lighter border)
- `bgTabActive`: `rgba(234, 210, 172, 0.08)` (active tab background)
- `bgTabHover`: `rgba(216, 181, 137, 0.05)` (tab hover background)
- `colorTextPrimary`: `#c3b597` (primary text)
- `colorTextSecondary`: `#EAD2AC` (secondary text, headings)
- `colorTextMuted`: `#D8B589` (muted text, links)
- `shadowElevation`: `0 20px 40px rgba(0, 0, 0, 0.4)` (elevation shadow)

#### Scenario: Theme colors are accessible
- **WHEN** a component imports theme colors
- **THEN** it can access all color constants from theme configuration

### Requirement: Dark Theme Default
The system SHALL configure the app to use dark theme as the default user interface style.

#### Scenario: App launches with dark theme
- **WHEN** the app starts
- **THEN** the user interface renders in dark mode

#### Scenario: @expo/ui components auto-adapt
- **WHEN** @expo/ui components are rendered
- **THEN** they automatically use dark theme colors from system preference

### Requirement: Accessibility Compliance
The system SHALL ensure all color combinations meet accessibility contrast requirements.

#### Scenario: Text on background contrast
- **WHEN** primary text (`#c3b597`) is displayed on body background (`#03110d`)
- **THEN** the contrast ratio meets WCAG AA standard (4.5:1 for normal text)

#### Scenario: Secondary text visibility
- **WHEN** secondary text (`#EAD2AC`) is displayed on card background (`#032017`)
- **THEN** the contrast ratio meets WCAG AA standard

### Requirement: Theme-Aware Component Styling
The system SHALL enable components to apply different styles based on the current theme.

#### Scenario: Component uses useTheme hook
- **WHEN** a component imports and uses `useTheme()` hook
- **THEN** it can apply dark theme styles when `isDark` is true

#### Scenario: StyleSheet uses theme colors
- **WHEN** `StyleSheet.create` is called with dark theme colors
- **THEN** the styles reference theme color constants
