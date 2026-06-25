## Why

Current AudioControls implementation uses a single toggle button with text ("Play"/"Pause"). This change replaces that button with PlayIcon and PauseIcon for a more intuitive and visually consistent audio control experience.

## What Changes

- Replace the text-based toggle button in AudioControls with icon-based buttons
- Use PlayIcon when audio is paused
- Use PauseIcon when audio is playing
- Remove text display from the toggle button
- Update accessibility labels to describe the icon state

## Capabilities

### New Capabilities
- `audio-controls-icons`: Audio controls use icon-based buttons (PlayIcon/PauseIcon) instead of text-based buttons

### Modified Capabilities
- `audio-controls`: Change from text-based toggle button to icon-based toggle button

## Impact

- **UI Components**: AudioControls component needs to be refactored to use icon components
- **Dependencies**: May need to install or import PlayIcon and PauseIcon components
- **Testing**: Unit tests for AudioControls component need update to verify icon rendering
- **Accessibility**: ARIA labels need to be updated to describe icon states
