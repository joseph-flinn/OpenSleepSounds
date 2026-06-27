## Why

This change addresses multiple critical Android-specific issues in the OpenSleepSounds app that are causing warnings, performance degradation, and potential crashes:

1. **Predictive Back Gesture Disabled**: The app currently has `enableOnBackInvokedCallback="false"`, missing the modern Android 13+ back gesture handler
2. **Codegen Setters Missing**: React Native view manager warnings indicate version incompatibility between React Native 0.86.0 and Expo modules
3. **Unoptimized Props Parsing**: @expo/ui components falling back to reflection-based parsing impacts performance
4. **Rapid Activity Lifecycle Cycling**: MainActivity experiencing create→resume→pause→stop→restart loops on launch, potentially causing crashes

These issues are blocking production readiness and need immediate attention.

## What Changes

- Enable `android:enableOnBackInvokedCallback="true"` in `android/app/src/main/AndroidManifest.xml`
- Run `npx expo install --fix` to resolve React Native and Expo module version compatibility
- Investigate and fix activity lifecycle issue in `MainActivity.kt` and `MainApplication.kt`
- Audit @expo/ui version for optimized props parsing support
- Verify app theme configuration and splash screen setup

## Capabilities

### New Capabilities
- `android-predictive-back`: Enable modern back gesture handling for Android 13+
- `android-lifecycle-stability`: Ensure stable activity lifecycle during app launch
- `android-perf-optimization`: Eliminate reflection-based props parsing in @expo/ui

### Modified Capabilities
- None

## Impact

**Affected Files:**
- `android/app/src/main/AndroidManifest.xml` - Enable back gesture callback
- `android/app/src/main/java/com/workspace/MainActivity.kt` - Review onCreate() lifecycle
- `android/app/src/main/java/com/workspace/MainApplication.kt` - Review Application lifecycle
- `package.json` - Dependency updates via `expo install --fix`
- `android/app/build.gradle` - May need React Native version alignment

**Dependencies:**
- React Native 0.86.0
- Expo SDK 56.0.11
- @expo/ui 56.0.18
- React 19.2.7

**Breaking Changes:** None
