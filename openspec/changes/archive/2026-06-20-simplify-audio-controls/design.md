## Context

Current audio controls component displays three buttons: Play, Pause, and Stop. The Stop button has been frequently reported as confusing by users who expect it to "stop and remember position" but instead it restarts playback from the beginning. User research suggests a single Play/Pause button aligns better with user expectations for audio playback.

## Goals / Non-Goals

**Goals:**
- Simplify audio control interface to a single button
- Eliminate Stop button entirely
- Maintain state awareness: button shows Pause when playing, Play when stopped/paused
- Ensure accessibility (ARIA labels) reflects current state

**Non-Goals:**
- Not changing audio playback logic (play, pause, seek behaviors remain the same)
- Not removing audio progress bar or volume controls
- Not modifying keyboard shortcuts (spacebar still toggles play/pause)

## Decisions

**Single Play/Pause Button State Machine:**
- Decision: Use state-based labeling (show "Pause" when playing, "Play" when not)
- Rationale: Single source of truth - button always reflects current action
- Alternatives considered: Icon-only (play ▶, pause ‖), icon + text

**Stop Button Removal:**
- Decision: Completely remove Stop button and its event handler
- Rationale: Reduces visual clutter, simplifies state management
- Migration: Users who used Stop will now use Play to restart from beginning

**Audio State Simplification:**
- Decision: Reduce from 3 states (PLAYING, PAUSED, STOPPED) to 2 (PLAYING, PAUSED)
- Rationale: STOPPED state is effectively the same as PAUSED for audio playback
- Implementation: `audioState` transitions: `PLAYING → PAUSED`, `PAUSED → PLAYING`

## Risks / Trade-offs

**User confusion from Stop removal:** → Provide clear visual feedback that Play restarts from beginning
**Accessibility mismatch:** → Update ARIA labels to reflect single-button state
**Keyboard shortcut change:** → Spacebar behavior unchanged (still toggles play/pause)

## Migration Plan

1. Update audio controls component to remove Stop button
2. Modify state machine to collapse STOPPED and PAUSED into single PAUSED state
3. Update ARIA labels for accessibility
4. Test with keyboard and screen readers
5. Deploy and monitor for user feedback

## Open Questions

- None currently identified
