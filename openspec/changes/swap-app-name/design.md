## Context

The AudioControl component currently displays the app name as a hardcoded Text component with "OpenSleepSounds" (lines 90-98). This approach lacks scalability and doesn't provide the visual fidelity of a logo design. The SVG file `./assets/app-name-500.svg` contains the vector artwork for the app name that should be used instead.

## Goals / Non-Goals

**Goals:**
- Replace the Text component with an SVG-based implementation
- Extract all SVG elements from `./assets/app-name-500.svg`
- Remove all `<g>` tags and flatten the structure
- Preserve all SVG shape elements (path, rect) with their exact attributes
- Maintain visual compatibility with the existing component layout

**Non-Goals:**
- No changes to SVG optimization or minification
- No changes to the component's styling or layout
- No integration with external libraries for SVG handling

## Decisions

**Approach:**
1. Read the SVG file `./assets/app-name-500.svg` to extract its structure
2. Convert the SVG elements to React Native SVG components (or use the `react-native-svg` library if available)
3. Flatten the SVG by removing all `<g>` tags and their children
4. Copy all path, rect, and other SVG elements with their exact attributes
5. Replace the Text component in AudioControl.tsx with the SVG structure

**Technical Considerations:**
- The SVG uses `react-native-svg` if available, or inline SVG rendering
- All SVG attributes (x, y, width, height, d, transform, fill, etc.) must be preserved exactly
- The SVG will replace the Text component in the same container position (lines 90-98)

**Risks / Trade-offs:**
- [SVG library dependency] If `react-native-svg` is not already installed, it may need to be added
  - Mitigation: Check existing dependencies; use inline SVG if needed
- [Performance] Complex SVGs may impact rendering performance
  - Mitigation: The provided SVG appears to be a simple logo; performance impact should be minimal
- [Maintenance] Direct SVG copying may require updates if the source SVG changes
  - Mitigation: Document the source file and keep it as a reference

## Migration Plan

1. Read and analyze `./assets/app-name-500.svg` structure
2. Create the SVG component with flattened structure (no `<g>` tags)
3. Replace the Text component in AudioControl.tsx (lines 90-98)
4. Test the component to ensure the logo displays correctly
5. Verify all SVG elements are rendered as expected

## Open Questions

None.
