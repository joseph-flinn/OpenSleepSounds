## ADDED Requirements

### Requirement: Continuous looping playback
The system SHALL play audio files from the `./assets/audio` directory on a continuous loop.

#### Scenario: Audio reaches end of file
- **WHEN** the currently playing audio file reaches its end
- **THEN** the system SHALL immediately restart the same audio file from the beginning.

### Requirement: iOS background audio playback
The system SHALL continue audio playback when the application is in the background or the device is locked on iOS.

#### Scenario: App moved to background on iOS
- **WHEN** the user minimizes the application or locks the device on an iOS device
- **THEN** the audio playback MUST continue without interruption.

### Requirement: Android background audio playback
The system SHALL continue audio playback when the application is in the background or the device screen is off on Android, utilizing a foreground service to prevent process termination.

#### Scenario: App moved to background on Android
- **WHEN** the user minimizes the application or turns off the screen on an Android device
- **THEN** the audio playback MUST continue without interruption.

### Requirement: Manual playback control
The system SHALL provide a user interface that allows the user to manually start and stop the audio playback.

#### Scenario: User stops playback
- **WHEN** the user interacts with the "Stop" button in the application UI
- **THEN** the audio playback MUST cease immediately.
