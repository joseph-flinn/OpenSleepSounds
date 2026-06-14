## 1. Setup & Configuration

- [ ] 1.1 Install `expo-av` dependency.
- [ ] 1.2 Configure `app.json` for iOS background audio (`UIBackgroundModes: ["audio"]`).
- [ ] 1.3 Research and implement Android Foreground Service via a Config Plugin if needed.
- [ ] 1.4 Ensure `./assets/audio` directory exists and contains test audio files.

## 2. Core Audio Implementation

- [ ] 2.1 Create an audio service/hook for managing playback.
- [ ] 2.2 Implement looping logic using `expo-av`.
- [ ] 2.3 Implement background playback verification.

## 3. User Interface

- [ ] 3.1 Create a simple UI component with Play/Pause buttons.
- [ ] 3.2 Connect the UI component to the audio service.

## 4. Verification

- [ ] 4.1 Verify audio loops correctly.
- [ ] 4.2 Verify audio continues when the app is in the background (iOS).
- [ ] 4.3 Verify audio continues when the screen is off (Android).
- [ ] 4.4 Verify manual stop functionality works.
