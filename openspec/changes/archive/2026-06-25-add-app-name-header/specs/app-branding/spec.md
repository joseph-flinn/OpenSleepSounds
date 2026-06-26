## ADDED Requirements

### Requirement: App Name Branding
The system MUST display the text "OpenSleepSounds" at the top of the main viewport.

#### Scenario: App branding is visible
- **WHEN** the application is opened and the main viewport is displayed
- **THEN** the text "OpenSleepSounds" is visible at the top of the screen, respecting safe area insets.

#### Scenario: IconButton remains centered
- **WHEN** the branding text is rendered
- **THEN** the existing `IconButton` remains centered in the viewport.
