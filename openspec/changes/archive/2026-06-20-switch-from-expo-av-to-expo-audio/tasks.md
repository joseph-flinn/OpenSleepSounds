## 1. Dependencies

- [x] 1.1 Update package.json to replace `expo-av` with `expo-audio`
- [x] 1.2 Run `npx expo install expo-audio` to install new dependency
- [x] 1.3 Verify no `expo-av` references remain in lockfile or node_modules

## 2. Configuration

- [x] 2.1 Add `expo-audio` config plugin to app.json/app.config.ts with `enableBackgroundPlayback: true`
- [x] 2.2 Verify native config is generated correctly

## 3. Audio Control Component

- [x] 3.1 Create AudioControl component
- [x] 3.11 Delete legacy audioService.ts and AudioPlayerControl.tsx
- [x] 3.2 Import `useAudioPlayer` and `useAudioPlayerStatus` from `expo-audio`
- [x] 3.3 Import `setAudioModeAsync` for audio session configuration
- [x] 3.4 Configure audio session with `setAudioModeAsync` on mount
- [x] 3.5 Create player with `useAudioPlayer(require('./assets/audio/river_trimmed.aac'))`
- [x] 3.6 Use `useAudioPlayerStatus(player)` to get playback state
- [x] 3.7 Implement play button that calls `player.play()` when paused
- [x] 3.8 Implement pause button that calls `player.pause()` when playing
- [x] 3.9 Implement stop button that calls `player.pause()` + `player.seekTo(0)`
- [x] 3.10 Display playback status (playing/paused)

## 4. Testing

- [x] 4.1 Test play/pause button visibility and state
- [x] 4.2 Test audio playback starts on play
- [x] 4.3 Test audio pauses on pause
- [x] 4.4 Test audio stops and resets on stop
- [x] 4.5 Verify background audio continues with screen off
