## Why

Current audio controls include both Play and Stop buttons, but many users find the Stop button redundant. When audio is stopped, users typically want to resume from the beginning, which Play already does. Removing Stop simplifies the interface and reduces cognitive load.

## What Changes

- **Remove Stop button** - Eliminate Stop functionality from audio controls
- **Replace Play/Stop toggle** with a single Play/Pause button that:
  - Shows "Pause" when audio is playing
  - Shows "Play" when audio is stopped or paused
- **Consolidate state management** - Audio state transitions: Play ↔ Pause (no Stop state)

## Capabilities

### New Capabilities
- `audio-play-pause-control`: Single button that toggles between Play and Pause states based on audio playback status

### Modified Capabilities
- `audio-controls`: Remove Stop button and associated functionality; modify to only include Play/Pause button

## Impact

- **Audio controls component**: Remove Stop button and associated handlers
- **Audio state machine**: Simplify from three states (Play, Pause, Stop) to two (Play, Pause)
- **API changes**: May need to deprecate `stop()` method or convert it to `play()` (restart from beginning)
- **Accessibility**: Update ARIA labels to reflect single-button interface
