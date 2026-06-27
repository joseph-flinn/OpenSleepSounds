## Context

OpenSleepSounds is an Expo-based React Native application targeting Android and iOS platforms. The app uses:

- **Expo SDK 56.0.11** with Bridgeless New Architecture enabled
- **React Native 0.86.0** with Hermes JS engine
- **@expo/ui 56.0.18** for cross-platform UI components
- **React 19.2.7**
- **Gradle 9.3.1** with Android Gradle Plugin
- **Target SDK 36**, **Min SDK 24**

The app is currently in development with an alpha release planned. Recent testing revealed multiple Android-specific issues blocking production readiness:

1. **Back Gesture Handler**: Missing modern Android 13+ predictive back gesture support
2. **React Native Codegen**: Missing generated setters causing view manager warnings
3. **Performance**: @expo/ui components using reflection-based props parsing
4. **Launch Stability**: MainActivity experiencing rapid lifecycle cycling (create→resume→pause→stop→restart) during app launch

## Goals / Non-Goals

**Goals:**
- Enable `android:enableOnBackInvokedCallback="true"` for modern back gesture handling
- Resolve React Native codegen and version compatibility issues
- Fix rapid activity lifecycle cycling causing potential crashes on app launch
- Eliminate reflection-based props parsing in @expo/ui components
- Ensure stable app launch with no activity recreation loops

**Non-Goals:**
- iOS platform changes (scope is Android-specific issues)
- Major architectural refactoring of the app
- New feature implementation beyond fixing these critical issues
- Breaking changes to existing functionality

## Decisions

### Decision 1: Enable Predictive Back Gesture
**Choice**: Set `android:enableOnBackInvokedCallback="true"` in AndroidManifest.xml

**Rationale**: 
- This is the modern, recommended approach for Android 13+ (API 33+)
- The app already implements `invokeDefaultOnBackPressed()` in MainActivity which is compatible with this setting
- No breaking changes - `enableOnBackInvokedCallback="false"` is the legacy behavior
- The existing `invokeDefaultOnBackPressed()` implementation already handles the Android R backward compatibility

**Alternatives Considered**:
- Keep the default and implement custom back handling (rejected - unnecessary work, missing out of box functionality)

### Decision 2: Run `npx expo install --fix`
**Choice**: Use Expo's dependency resolver to fix version incompatibilities

**Rationale**:
- Expo's `--fix` flag automatically resolves version mismatches between React Native, Expo SDK, and native modules
- This should resolve the "Could not find generated setter" warnings for React Native view managers
- This is the officially recommended approach for fixing dependency issues in Expo projects

**Alternatives Considered**:
- Manual version pinning (rejected - time-consuming, error-prone, Expo's tooling handles this better)

### Decision 3:Investigate Activity Lifecycle Issue First
**Choice**: Prioritize fixing the rapid activity lifecycle cycling before other changes

**Rationale**:
- This is the only issue explicitly noted as potentially causing crashes
- The logs state: "Note: The provided logs do not contain the actual crash"
- Activity recreation loops can cause cascading failures and poor user experience
- The issue may be related to splash screen theme, React Native initialization timing, or configuration changes

**Investigation Steps**:
- Review MainActivity.onCreate() for theme application timing
- Check splash screen configuration in app.json
- Verify no auth redirects or permission checks causing loops
- Monitor with `adb logcat` during launch

**Alternatives Considered**:
- Ignore and investigate later (rejected - potential crash risk)

### Decision 4: Audit @expo/ui Version for Optimized Props
**Choice**: Check if @expo/ui 56.0.18 or newer versions have `@OptimizedComposeProps` annotations

**Rationale**:
- Reflection-based props parsing has performance implications
- @expo/ui 56.0.18 may need an update or the classes may need upstream annotation
- This is a performance optimization rather than a stability fix

**Next Steps**:
- Verify @expo/ui version compatibility with React Native 0.86.0
- If issue persists after `expo install --fix`, consider filing upstream issue

**Alternatives Considered**:
- Implement custom props caching (rejected - reinventing framework functionality)

## Risks / Trade-offs

**Risk 1**: Enabling predictive back gesture may break custom back handling on older devices
**Mitigation**: MainActivity already has `Build.VERSION_CODES.R` check for backward compatibility, and the existing `invokeDefaultOnBackPressed()` implementation handles pre-Android 13 devices correctly

**Risk 2**: `npx expo install --fix` may upgrade/downgrade packages unexpectedly
**Mitigation**: Review the changes made by `expo install --fix` before committing; keep git backup

**Risk 3**: Activity lifecycle fix may require splash screen reconfiguration
**Mitigation**: Document current splash screen implementation (AppTheme); ensure theme changes don't break splash screen display

**Risk 4**: @expo/ui performance issue may not be fully resolved without upstream changes
**Mitigation**: Document issue, monitor for updates, consider temporary workaround if critical

## Migration Plan

1. **Create OpenSpec Change**: Proposal, Design, and Tasks artifacts (this change)
2. **Run Dependency Fix**: `npx expo install --fix`
3. **Apply AndroidManifest Change**: Enable back gesture callback
4. **Fix Activity Lifecycle Issue**: Review and modify MainActivity/MainApplication as needed
5. **Verify @expo/ui Fix**: Test props parsing optimization
6. **Test Build**: Run release build and verify no warnings
7. **Test Launch**: Verify stable activity lifecycle on clean app launch
8. **Deploy**: Push changes to staging for user testing

**Rollback Strategy**:
- If issues arise, revert the AndroidManifest.xml change (set `enableOnBackInvokedCallback="false"`)
- Run `npx expo install` to restore original dependencies
- Revert MainActivity/MainApplication changes if needed

## Open Questions

1. What is the root cause of the rapid activity lifecycle cycling? Is it related to theme application timing, splash screen configuration, or something else?
2. Will `npx expo install --fix` resolve the codegen setter warnings, or will additional configuration changes be needed?
3. Is the @expo/ui props parsing issue a known limitation in version 56.0.18, or does it indicate a version mismatch?
