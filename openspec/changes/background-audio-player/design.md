## Context

The user wants to add background audio playback capabilities to a blank Expo application. The goal is to play audio files located in `./assets/audio` continuously, even when the screen is off, for several hours.

## Goals / Non-Goals

**Goals:**
- Continuous, looping playback of local audio assets.
- Reliable background audio playback on both iOS and Android.
- Minimalistic UI with start/stop functionality.

**Non-Goals:**
- Streaming audio from remote URLs.
- Complex UI (playlists, seeking, volume sliders, etc.).
- Advanced audio processing (equalization, etc.).

## Decisions

- **Audio Library**: Use `expo-av` for audio playback. It provides the necessary API for playing sounds and handles basic looping.
- **Background Support (iOS)**: Configure the app via `app.json` to include `UIBackgroundModes: ["audio"]`. This allows the app to continue playing audio when in the background.
- **Background Support (Android)**: To ensure the app is not terminated during long-running playback sessions (8+ hours), we will need to implement a Foreground Service. We will explore using a configuration plugin for a native module or `expo-task-manager` if standard `expo-av` backgrounding is insufficient for long durations.
- **Audio Source**: All audio files will be loaded from the `./assets/audio` directory.
- **UI Implementation**: A single-screen interface using standard React Native components (or `@expo/ui` if available) with a prominent Play/Pause toggle.

## Risks / Trade-offs

- [Risk] OS-level process termination on Android during long sessions → [Mitigation] Implement a Foreground Service using a custom Expo Config Plugin if `expo-av`'s standard backgrounding doesn't prevent process death.
- [Risk] Complexity of managing native configurations → [Mitigation] Use Expo Config Plugins to ensure all native changes are reproducible and managed within the Expo workflow.
- [Risk] Battery consumption during long sessions → [Mitigation] Keep the UI simple and minimize background processing to only what is necessary for audio playback.
