## ADDED Requirements

### Requirement: Predictive Back Gesture Support
The app SHALL enable Android 13+ predictive back gesture handler by setting `android:enableOnBackInvokedCallback="true"` in the AndroidManifest.xml application tag.

#### Scenario: Android 13+ device launch
- **WHEN** app launches on Android 13 (API 33) or later device
- **THEN** predictive back gesture handler is enabled and user can perform swipe-back gesture

#### Scenario: Pre-Android 13 device launch
- **WHEN** app launches on Android device running API 32 or earlier
- **THEN** existing `invokeDefaultOnBackPressed()` implementation handles back button as before

### Requirement: Stable Activity Lifecycle During Launch
The app SHALL ensure MainActivity does not experience rapid create→resume→pause→stop→restart cycles during initial launch.

#### Scenario: Clean app launch
- **WHEN** user launches app from launcher
- **THEN** MainActivity follows stable lifecycle: onCreate() → onResume() and remains stable

#### Scenario: App resumption from background
- **WHEN** user returns to app after switching to another app
- **THEN** MainActivity onResume() is called without intermediate lifecycle events

### Requirement: Optimized Props Parsing for @expo/ui Components
The app SHALL use @expo/ui components with `@OptimizedComposeProps` annotations for props parsing to avoid reflection-based fallback.

#### Scenario: @expo/ui component rendering
- **WHEN** using @expo/ui components like InnerTextField or Placeholder
- **THEN** props are parsed using optimized annotation-based approach, not reflection
