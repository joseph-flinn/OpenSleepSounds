## ADDED Requirements

### Requirement: Audio controls use PlayIcon and PauseIcon
The AudioControls component MUST display PlayIcon when audio is paused and PauseIcon when audio is playing.

#### Scenario: PlayIcon displayed when paused
- **WHEN** the audio is in paused state
- **THEN** PlayIcon is displayed on the toggle button

#### Scenario: PauseIcon displayed when playing
- **WHEN** the audio is in playing state
- **THEN** PauseIcon is displayed on the toggle button

## MODIFIED Requirements

### Requirement: Audio controls toggle button
**Reason**: Replaced text-based toggle button with icon-based toggle button
**Migration**: The toggle button now displays PlayIcon or PauseIcon instead of text

#### Scenario: Toggle button interaction
- **WHEN** user clicks the toggle button
- **THEN** audio playback state toggles between playing and paused, and the icon updates accordingly

#### Scenario: Accessibility label updates
- **WHEN** audio state changes from playing to paused or vice versa
- **THEN** ARIA label updates to describe the icon state ("Play track" or "Pause track")
