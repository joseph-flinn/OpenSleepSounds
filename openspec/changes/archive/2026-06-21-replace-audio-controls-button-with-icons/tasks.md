## 0. Icon Library Setup (if not already existing)

- [x] 0.1 Create shared icon library module at `./components/icons/`
- [x] 0.2 Create PlayIcon component with appropriate viewBox and paths
- [x] 0.3 Create PauseIcon component with appropriate viewBox and paths
- [x] 0.4 Ensure both icons have identical dimensions and styling
- [x] 0.5 Export icons from library module

## 2. Component Update

- [x] 2.1 Import PlayIcon and PauseIcon components into AudioControls
- [x] 2.2 Replace toggle button text content with conditional icon rendering
- [x] 2.3 Display PlayIcon when isPlaying is false
- [x] 2.4 Display PauseIcon when isPlaying is true
- [x] 2.5 Set button width to 25% of screen width
- [x] 2.6 Center the button on screen

## 4. Accessibility

- [x] 4.1 Update ARIA label to show "Play track" when paused
- [x] 4.2 Update ARIA label to show "Pause track" when playing
- [x] 4.3 Verify keyboard handlers (Enter/Space) work with icon buttons
- [x] 4.4 Test screen reader announces correct state

## 5. Testing

- [x] 5.1 Add unit test to verify PlayIcon renders when paused
- [x] 5.2 Add unit test to verify PauseIcon renders when playing
- [x] 5.3 Add test to verify ARIA label updates on state change
- [x] 5.4 Run existing test suite to ensure no regressions

## 6. Documentation

- [x] 6.1 Update component documentation in Storybook
- [x] 6.2 Add icon component usage examples
- [x] 6.3 Update API reference if component props change
