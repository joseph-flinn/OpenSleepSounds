## Context

The current app viewport displays a centered `IconButton` but lacks any branding or title. This makes it difficult for users to immediately identify the application.

## Goals / Non-Goals

**Goals:**
- Display the text "OpenSleepSounds" at the top of the viewport.
- Maintain the exact centering of the existing `IconButton` on the screen.

**Non-Goals:**
- Adding complex logos or images.
- Modifying the functionality of the `IconButton`.

## Decisions

- **Header Positioning**: Use an absolutely positioned `Text` component for the "OpenSleepSounds" header. This ensures that adding the text does not affect the flexbox centering of the `IconButton` within the main container.
- **Styling**: Use standard Expo/React Native `Text` components with appropriate font size and padding.
- **Safe Area**: Use `SafeAreaView` or `useSafeAreaInsets` to ensure the text is not obscured by device notches or status bars.

## Risks / Trade-offs

- [Text overlapping content] → Mitigation: Use `SafeAreaView` and ensure the header has sufficient vertical padding.
- [Centering issues] → Mitigation: Absolute positioning for the header ensures the layout engine still treats the main container's center as the center for the `IconButton`.
