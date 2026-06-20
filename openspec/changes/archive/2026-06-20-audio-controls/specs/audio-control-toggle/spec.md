# audio-control-toggle

## Overview

Defines the single-toggle audio control that replaces separate Play and Pause buttons.

## Requirements

### Functional

1. The button displays "Pause" when audio is playing
2. The button displays "Play" when audio is paused
3. Button click toggles playback state
4. Button text updates immediately on state change

### Non-Functional

1. Button must be accessible via keyboard (Enter/Space triggers)
2. Screen reader must announce current state
3. No visible flicker when state changes

## API

```tsx
interface AudioToggleProps {
  isPlaying: boolean;
  onToggle: () => void;
  className?: string;
}
```

## Implementation Notes

- Use state-driven text: `isPlaying ? 'Pause' : 'Play'`
- ARIA label: `isPlaying ? 'Pause current track' : 'Play current track'`
- Keyboard handlers: Enter and Space trigger `onToggle()`
