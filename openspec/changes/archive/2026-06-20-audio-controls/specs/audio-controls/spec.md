# audio-controls

## Overview

Defines the complete audio control component and its behavior.

## Changes to Existing Requirements

### Modified

1. **Button Count**: Changed from 3 buttons to 1 button
2. **Button States**: Play and Pause are now toggled on a single button instead of separate buttons
3. **Stop Functionality**: Stop button and associated API removed entirely

### Removed

1. Stop button rendering
2. Stop button event handlers
3. Stop button styling

## Requirements

### Functional

1. Display single dynamic button
2. Button text changes based on `isPlaying` state
3. Click toggles playback
4. All other controls (volume, seek, etc.) remain functional

### API

**Before:**
```tsx
interface AudioControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onStop: () => void;
}
```

**After:**
```tsx
interface AudioControlsProps {
  isPlaying: boolean;
  onToggle: () => void;
  // onStop removed
}
```

### State Flow

```
Playing state:
  Button displays: "Pause"
  Click triggers: Pause action

Paused state:
  Button displays: "Play"
  Click triggers: Play action
```

### Accessibility

- ARIA label must reflect current state
- Keyboard: Enter and Space trigger toggle

### Breaking Changes

**Stop functionality removed**: Users must use Pause to stop playback.

## Testing

1. Verify button text updates on state change
2. Verify click toggles playback correctly
3. Verify Stop button no longer exists in DOM
4. Verify accessibility attributes update properly

## Migration Guide

### For Component Consumers

**Before:**
```tsx
<AudioControls 
  isPlaying={isPlaying}
  onPlay={handlePlay}
  onPause={handlePause}
  onStop={handleStop}
/>
```

**After:**
```tsx
<AudioControls 
  isPlaying={isPlaying}
  onToggle={handlePlayPauseToggle}
/>
```
