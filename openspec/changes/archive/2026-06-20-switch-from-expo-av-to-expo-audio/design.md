## Context

The application currently uses `expo-av` (version 16.0.8) for audio playback functionality through the `Audio` module's `Sound` class. The `audioService.ts` file provides a simple wrapper with `playAudio`, `pauseAudio`, `stopAudio`, and `getPlaybackStatus` functions. This implementation uses the legacy `expo-av` API which has been deprecated.

`expo-audio` is the new standard audio library in Expo SDK 56, offering a modern hook-based API with `useAudioPlayer` and `useAudioRecorder` hooks. It provides better TypeScript support, improved performance, and ongoing feature development.

### Clarified Requirements
- Use industry standard pattern for React audio playback
- Play/pause button in the app UI
- Audio continues after screen turns off (background playback)
- No audio format changes or remote URLs
- No recording functionality

## Goals / Non-Goals

**Goals:**
- Replace `expo-av` with `expo-audio` using industry-standard patterns
- Implement play/pause button in app UI using `useAudioPlayer` and `useAudioPlayerStatus` hooks
- Ensure audio continues playing after screen turns off (background playback)
- Maintain clean component-based architecture

**Non-Goals:**
- No recording functionality
- No remote URL support
- No audio format changes
- No changes to existing audio assets

## Decisions

1. **Component-based pattern**: Use `useAudioPlayer` and `useAudioPlayerStatus` hooks directly in React components. This is the industry standard pattern and ensures proper lifecycle management.

2. **Play/Pause button**: Create an AudioControl component that uses the hooks and displays play/pause button. The button state reflects current playback status.

3. **Background playback**: Configure `enableBackgroundPlayback: true` in app.json plugin. Audio will continue after screen turns off.

4. **Audio session**: Call `setAudioModeAsync` with proper configuration for background playback before starting audio.

5. **State management**: Use `useAudioPlayerStatus(player)` hook for real-time playback state instead of local state.

6. **API mapping**:
   - `playAudio` → player.play()
   - `pauseAudio` → player.pause()
   - `stopAudio` → player.pause() + player.seekTo(0)
   - Status → use `useAudioPlayerStatus(player)` to get real-time state

## Risks / Trade-offs

- **Breaking component changes**: Current service is used outside components. Need to refactor to use hooks directly in components (e.g., AudioControl component).

- **Audio session configuration**: Background playback requires both native config (app.json) and runtime `setAudioModeAsync` call before first playback.

## Migration Plan

1. Update package.json: replace `expo-av` with `expo-audio`
2. Install dependencies: `npx expo install expo-audio`
3. Add `expo-audio` config plugin to app.json with `enableBackgroundPlayback: true`
4. Create AudioControl component with play/pause button using `useAudioPlayer` and `useAudioPlayerStatus`
5. Configure audio session with `setAudioModeAsync` before first playback
6. Test playback, pause, stop functionality
7. Verify background audio with screen off

## Open Questions

- None - industry standard pattern confirmed: hooks in components, `useAudioPlayer` + `useAudioPlayerStatus`
