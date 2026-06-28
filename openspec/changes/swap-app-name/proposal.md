## Why

The App Name in AudioControl (lines 90-98) currently uses a hardcoded Text component with "OpenSleepSounds". This needs to be replaced with the SVG from `./assets/app-name-500.svg` to provide a higher-quality, scalable logo that matches the design system.

## What Changes

- Replace the hardcoded Text component (lines 90-98 in AudioControl.tsx) with an SVG component
- Extract the SVG from `./assets/app-name-500.svg` and convert it to React Native SVG elements
- Remove all `<g>` tags from the SVG structure, keeping only the path, rect, and other SVG shape elements
- Preserve all SVG attributes (coordinates, transforms, styles) exactly as they appear

## Capabilities

### New Capabilities
- `audio-control-svg-logo`: A new capability to render the app name logo using SVG elements in the AudioControl component

### Modified Capabilities

## Impact

- **AudioControl.tsx**: Replace Text component with SVG-based logo (lines 90-98)
- **assets/app-name-500.svg**: Source file for the logo (read-only reference)
- No API changes or breaking changes
- No dependency changes required
