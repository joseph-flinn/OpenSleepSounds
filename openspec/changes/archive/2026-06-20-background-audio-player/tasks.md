## 1. Setup & Configuration

- [x] 1.1 Install `expo-av` dependency.
- [x] 1.2 Configure `app.json` for iOS background audio (`UIBackgroundModes: ["audio"]`).
- [x] 1.3 Research and implement Android Foreground Service via a Config Plugin if needed.
- [x] 1.4 Ensure `./assets/audio` directory exists and contains test audio files.

## 2. Core Audio Implementation

- [x] 2.1 Create an audio service/hook for managing playback.
- [x] 2.2 Implement looping logic using `expo-av`.
- [x] 2.3 Implement background playback verification.

## 3. User Interface

- [x] 3.1 Create a simple UI component with Play/Pause buttons.
- [x] 3.2 Connect the UI component to the audio service.

## 4. Verification

- [x] 4.1 Verify audio loops correctly.
- [x] 4.2 Verify audio continues when the app is in the background (iOS).
- [x] 4.3 Verify audio continues when the screen is off (Android).
- [x] 4.4 Verify manual stop functionality works.
