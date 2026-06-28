## Why

Replace Ionicons with custom SVG icons (play-icon-500.svg, pause-icon-500.svg) in AppControl for better visual consistency with the app's design and reduced external dependencies.

## What Changes

- Replace `Ionicons` component usage with inline SVG components in `AudioControl.tsx`
- Update icon rendering for play/pause states to use custom SVG files
- Remove `@expo/vector-icons` dependency from package.json

## Capabilities

### New Capabilities
- `svg-icon-component`: Custom SVG icon component that accepts source and renders the SVG inline with theme support

### Modified Capabilities
- `audio-control`: Modified to use SVG icons instead of Ionicons for play/pause controls

## Impact

- **Affected Code**: `src/components/AudioControl.tsx`
- **Dependencies**: `@expo/vector-icons` can be removed
- **Assets**: Requires `play-icon-500.svg` and `pause-icon-500.svg` in `assets/`
