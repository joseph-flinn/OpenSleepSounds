## Why

The current audio player UI has multiple buttons (Play, Pause, Stop) that create a cluttered interface. Users have requested a simplified experience with just a single toggle button that changes behavior based on playback state. This reduces visual complexity and follows modern UI patterns where a single control toggles between states.

## What Changes

- Replace the current separate Play and Pause buttons with a single dynamic button
- The button displays "Pause" when audio is playing and "Play" when paused
- Remove the Stop button entirely (deprecate functionality)
- Button state automatically updates based on audio playback state
- **BREAKING**: The Stop functionality is removed; users must use pause/resume instead

## Capabilities

### New Capabilities
- `audio-control-toggle`: Single button that toggles between Play and Pause states based on current playback status

### Modified Capabilities
- `audio-controls`: Existing audio control set - requirements change to consolidate Play/Pause into a single toggle

## Impact

- **UI Components**: AudioControls component needs to be refactored
- **State Management**: Playback state tracking remains the same, only UI representation changes
- **Accessibility**: Button ARIA label must dynamically update
- **Testing**: Unit tests for AudioControls component need update
- **Documentation**: User guide should reflect simplified controls
