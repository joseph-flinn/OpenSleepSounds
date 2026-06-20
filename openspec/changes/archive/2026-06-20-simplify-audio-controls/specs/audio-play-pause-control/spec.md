## ADDED Requirements

### Requirement: Play/Pause button displays state-aware label

The audio control's primary button SHALL display "Play" when audio is not actively playing and "Pause" when audio is currently playing.

#### Scenario: Button shows Pause when audio is playing
- **WHEN** audio is in PLAYING state
- **THEN** the main button displays "Pause"

#### Scenario: Button shows Play when audio is paused
- **WHEN** audio is in PAUSED state
- **THEN** the main button displays "Play"

#### Scenario: Button shows Play when audio is stopped
- **WHEN** audio has been stopped or restarted from beginning
- **THEN** the main button displays "Play"

### Requirement: Single Play/Pause button toggles audio state

The Play/Pause button SHALL toggle between playing and paused states when clicked.

#### Scenario: Play audio when paused
- **WHEN** user clicks button while audio is PAUSED
- **THEN** audio begins playing and button displays "Pause"

#### Scenario: Pause audio when playing
- **WHEN** user clicks button while audio is PLAYING
- **THEN** audio pauses and button displays "Play"

### Requirement: Play restarts audio from beginning

When audio is in PAUSED or STOPPED state, clicking Play SHALL start playback from the beginning of the track.

#### Scenario: Restart from beginning after pause
- **WHEN** user clicks Play button while audio is PAUSED at 30 seconds
- **THEN** audio restarts from 0:00 and begins playing

#### Scenario: Restart from beginning after stop
- **WHEN** user clicks Play button after audio was stopped
- **THEN** audio restarts from 0:00 and begins playing

### Requirement: Stop button removed

The audio controls component SHALL NOT render a Stop button.

#### Scenario: No Stop button in UI
- **WHEN** audio controls are rendered
- **THEN** only Play/Pause button is present (no Stop button)

## REMOVED Requirements

### Requirement: Stop button functionality
**Reason**: Replaced by single Play/Pause button interface
**Migration**: Users should use Play button to restart audio from beginning

### Requirement: Separate Play and Pause buttons
**Reason**: Consolidated into single state-aware Play/Pause button
**Migration**: Use single Play/Pause button that toggles between states
