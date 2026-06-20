## 1. Component Update

- [x] 1.1 Update AudioControls component to use single toggle button instead of three separate buttons
- [x] 1.2 Replace Play button with dynamic button that displays "Play" or "Pause" based on state
- [x] 1.3 Remove Stop button from component rendering
- [x] 1.4 Update button click handler to toggle playback (use `onToggle` instead of separate `onPlay`/`onPause`/`onStop`)

## 2. State Management

- [x] 2.1 Ensure `isPlaying` state correctly drives button text display
- [x] 2.2 Implement `onToggle` callback that handles both play and pause actions
- [x] 2.3 Ensure state updates are synchronous with no flicker

## 3. Accessibility

- [x] 3.1 Update ARIA label to reflect current state ("Pause track" vs "Play track")
- [x] 3.2 Implement keyboard handlers for Enter and Space keys
- [x] 3.3 Verify screen reader announces correct state

## 4. Testing

- [x] 4.1 Add unit tests for toggle button text updates
- [x] 4.2 Add tests for click handling (play/pause toggle)
- [x] 4.3 Verify Stop button no longer exists in DOM
- [x] 4.4 Run existing test suite to ensure no regressions
- [x] 4.5 Test accessibility compliance with automated tools

## 5. Documentation

- [x] 5.1 Update component documentation in Storybook
- [x] 5.2 Update API reference (add `onToggle`, remove `onStop`)
- [x] 5.3 Add migration guide for consumers removing `onStop` usage
- [x] 5.4 Update user-facing documentation about simplified controls
