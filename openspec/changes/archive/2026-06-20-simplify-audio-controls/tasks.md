## 1. Audio Controls Component

- [x] 1.1 Remove Stop button from audio controls UI component
- [x] 1.2 Update Play/Pause button to toggle between states
- [x] 1.3 Add state-aware label (Play/Pause) based on audio playback state
- [x] 1.4 Remove Stop button event handlers and associated logic

## 2. Audio State Management

- [x] 2.1 Simplify audio state machine from 3 states to 2 (remove STOPPED state)
- [x] 2.2 Update state transitions to collapse STOPPED and PAUSED into single PAUSED state
- [x] 2.3 Ensure Play button always restarts audio from beginning
- [x] 2.4 Update audio controller logic to handle simplified state transitions

## 3. Accessibility Updates

- [x] 3.1 Update ARIA label on Play/Pause button to reflect current state
- [x] 3.2 Test keyboard navigation (spacebar should toggle play/pause)
- [x] 3.3 Verify screen reader announces correct button state

## 4. Testing

- [x] 4.1 Add unit tests for Play/Pause toggle behavior
- [x] 4.2 Add integration tests for audio state transitions
- [x] 4.3 Test with keyboard and screen reader
- [x] 4.4 Verify no Stop button appears in UI tests
