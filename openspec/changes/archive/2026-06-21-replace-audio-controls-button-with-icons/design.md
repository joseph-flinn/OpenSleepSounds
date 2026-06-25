## Context

Current AudioControls component uses a single toggle button with text ("Play"/"Pause") to control audio playback. The text changes based on the playing state. This change replaces the text with icon-based components (PlayIcon/PauseIcon) for a more intuitive and visually consistent experience.

## Goals / Non-Goals

**Goals:**
- Replace text-based toggle button with PlayIcon and PauseIcon
- Maintain all existing functionality (play/pause toggle, accessibility, keyboard support)
- Ensure icon updates are responsive and don't cause UI flicker
- Keep accessibility labels updated to describe icon states
- Make icons large (25% of screen width) and centered for better visibility and touch targets

**Non-Goals:**
- Changing the overall layout or styling of AudioControls
- Modifying the audio playback logic
- Adding new playback controls (stop, skip, volume)

## Decisions

**1. Icon Component Source:**
- **Decision**: Create PlayIcon and PauseIcon as part of a shared icon library
- **Rationale**: Icons should be reusable across the app and maintain consistent design language. Creating a dedicated icon library module ensures consistency and easy maintenance.
- **Alternatives considered**: Use SVG inline directly, use third-party icon library like react-native-vector-icons

**2. State-Based Icon Rendering:**
- **Decision**: Conditionally render PlayIcon or PauseIcon based on `isPlaying` state
- **Rationale**: Simple and straightforward approach that directly reflects the current audio state
- **Alternatives considered**: Single icon component with state prop, separate button components

**3. Accessibility Implementation:**
- **Decision**: Update ARIA label dynamically based on current state
- **Rationale**: Ensures screen readers announce the correct action ("Play track" vs "Pause track")
- **Alternatives considered**: Static label, title attribute

**4. Button Sizing and Layout:**
- **Decision**: Make toggle button take up 25% of screen width, centered
- **Rationale**: Large touch targets improve usability, especially for audio controls that users interact with frequently. Center alignment provides balanced visual composition.
- **Alternatives considered**: Small icon button, full-width button

## Risks / Trade-offs

**Risk:** Icon rendering may cause layout shift if icons have different dimensions
→ **Mitigation**: Ensure PlayIcon and PauseIcon have identical dimensions and spacing

**Risk:** Users may not immediately recognize icons without text
→ **Mitigation**: Maintain familiar icon design patterns and ensure clear visual feedback on interaction

**Risk:** Accessibility may suffer if icon states aren't properly labeled
→ **Mitigation**: Implement dynamic ARIA labels and test with screen readers

## Migration Plan

1. Create shared icon library module (`@/components/icons/`)
2. Implement PlayIcon and PauseIcon components with consistent sizing
3. Update AudioControls component to import PlayIcon and PauseIcon
4. Replace toggle button content with conditional icon rendering
5. Implement 25% screen width sizing with center alignment
6. Update accessibility props to reflect icon state
7. Add unit tests for icon rendering and sizing
8. Update documentation and Storybook stories
9. Deploy with no breaking changes (internal component implementation only)

## Open Questions

- Are there existing design tokens or icon sizing conventions to follow?
