## Why

Expo AV (`expo-av`) has been deprecated in favor of `expo-audio`, which provides a modern, streamlined API for audio playback and recording in Expo SDK 56. The current implementation uses `expo-av`'s legacy `Audio.Sound` API. Migrating to `expo-audio` will provide access to the latest features, bug fixes, and ensure compatibility with future Expo versions.

## What Changes

- Replace `expo-av` dependency with `expo-audio` in package.json
- Update audioService.ts to use `expo-audio` hooks (`useAudioPlayer`) instead of `Audio.Sound.createAsync`
- Remove `expo-av` from dependencies
- Update import statements from `expo-av` to `expo-audio`
- Refactor `playAudio`, `pauseAudio`, `stopAudio` functions to use the new API

## Capabilities

### New Capabilities
- `audio-player`: New capability covering audio playback using `expo-audio`'s `useAudioPlayer` hook and modern audio session management

### Modified Capabilities
- None

## Impact

- **Files affected**: src/audio/audioService.ts
- **Dependencies**: Remove `expo-av`, add `expo-audio`
- **Breaking changes**: The API surface changes significantly - `Audio.Sound` is replaced by `useAudioPlayer` hook pattern
- **Native config**: May require adding `expo-audio` config plugin for background playback settings
