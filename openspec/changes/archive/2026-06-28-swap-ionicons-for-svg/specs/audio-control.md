## ADDED Requirements

### Requirement: SVG icon component
The system SHALL provide a reusable SVG icon component that can render inline SVG assets with theme-based color support.

#### Scenario: Render SVG with theme color
- **WHEN** SVGIcon component is used with an SVG asset and theme color
- **THEN** the component renders the SVG with the correct fill color

### Requirement: Play/pause toggle with SVG icons
The audio control SHALL display play icon when paused and pause icon when playing, using custom SVG files.

#### Scenario: Display play icon when paused
- **WHEN** audio is not playing
- **THEN** the play-icon-500.svg is displayed

#### Scenario: Display pause icon when playing
- **WHEN** audio is playing
- **THEN** the pause-icon-500.svg is displayed

## MODIFIED Requirements

### Requirement: AudioControl component
**MODIFIED**: The AudioControl component SHALL use custom SVG icons instead of Ionicons for play/pause controls.

#### Scenario: AudioControl renders with SVG icons
- **WHEN** AudioControl component is mounted
- **THEN** play/pause icons are rendered using inline SVG components instead of Ionicons
