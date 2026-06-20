## Context

The current audio player UI has separate Play, Pause, and Stop buttons. Users have requested a simplified interface with just a single button that dynamically changes based on playback state. This is a common pattern in modern media applications.

## Goals / Non-Goals

**Goals:**
- Consolidate Play and Pause into a single toggle button
- Remove Stop button and its associated functionality
- Maintain all existing audio playback functionality (play, pause, resume, seek, volume)
- Ensure accessible button with dynamic ARIA labels
- Zero runtime errors or regressions

**Non-Goals:**
- Not changing the underlying audio engine or API
- Not adding new features like playlists or equalizer
- Not modifying existing mobile app behavior (if applicable)

## Decisions

**1. Single Toggle Button**
- Decision: Replace two separate buttons (Play/Pause) with one dynamic button
- Rationale: Reduces UI clutter, follows modern media player patterns (Spotify, YouTube, etc.)
- Alternative considered: Keep both buttons but visually group them - rejected for simplicity

**2. Remove Stop Button Entirely**
- Decision: Deprecate and remove Stop functionality
- Rationale: "Stop" is often confused with "Pause" by users; most modern apps use Pause/Play instead
- Alternative considered: Add "Stop" to button text (e.g., "Play" / "Pause" / "Stop") - rejected as too many states

**3. State-Driven Text Updates**
- Decision: Button text changes based on current playback state
- Rationale: Users immediately understand what will happen when they press the button
- Implementation: Use state selector `isPlaying` → "Pause" / "Play"

**4. Accessibility Handling**
- Decision: Update ARIA label dynamically with screen reader text
- Rationale: Ensures screen readers announce the current state
- Implementation: `aria-label="Pause track"` when playing, `aria-label="Play track"` when paused

## Risks / Trade-offs

[User confusion about missing Stop] → Mitigation: Add tooltip/hint "Use Pause to stop playback" in UI

[Existing users expecting Stop button] → Mitigation: Add analytics to track stop button usage pre-removal; consider deprecation notice

[Design inconsistency with mobile app] → Mitigation: Coordinate release with mobile app team for consistency

## Migration Plan

1. Update AudioControls component to use single toggle button
2. Remove Stop button from component
3. Update state logic to map toggle click to appropriate action
4. Run existing test suite to ensure no regressions
5. Deploy with feature flag for A/B testing
6. Monitor analytics post-release

## Open Questions

- Should we add a hidden "Stop" functionality accessible via long-press or keyboard shortcut?
- Do we need to update the mobile app simultaneously for consistency?
