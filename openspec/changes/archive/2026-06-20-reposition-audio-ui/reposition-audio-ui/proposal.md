## Why

The audio controls and state are currently positioned in a non-intuitive location on the screen, making them difficult to access and interact with. Centering them improves usability by placing them in a natural focal point for users.

## What Changes

- Reposition audio controls and state display to the center of the screen (both horizontally and vertically)
- Maintain responsive behavior across different screen sizes
- Update layout logic to center-align audio UI components
- **BREAKING**: Any existing absolute positioning of audio controls will need adjustment

## Capabilities

### New Capabilities
- `audio-centering`: Centered audio state and controls UI layout

### Modified Capabilities
<!-- Existing capabilities whose REQUIREMENTS are changing -->

## Impact

- Audio control components and layout containers
- CSS/styling files defining audio control positioning
- Any components that depend on audio control placement