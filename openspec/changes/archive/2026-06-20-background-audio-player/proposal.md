## Why

The user needs a simple mobile application that can play audio files continuously in the background, even when the device screen is off, for extended periods (8+ hours).

## What Changes

- Implement background audio playback capability.
- Add functionality to loop/repeat audio files from `./assets/audio`.
- Ensure audio continues playing when the app is in the background or the screen is off.
- Provide a simple interface to start and stop the playback.

## Capabilities

### New Capabilities

- `background-audio-playback`: Capability to play audio files from local assets in the background and on repeat.

### Modified Capabilities

<!-- No existing capabilities are being modified. -->

## Impact

- Introduction of audio playback libraries (e.g., `expo-av`).
- Configuration changes for background modes (iOS/Android) to allow background audio.
- Implementation of a foreground service (on Android) to prevent the system from killing the process during long playback sessions.
