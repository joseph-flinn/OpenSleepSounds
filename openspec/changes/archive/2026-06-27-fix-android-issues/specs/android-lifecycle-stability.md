## ADDED Requirements

### Requirement: Stable Activity Lifecycle During Launch
The app SHALL ensure MainActivity does not experience rapid create→resume→pause→stop→restart cycles during initial launch.

#### Scenario: Clean app launch
- **WHEN** user launches app from launcher
- **THEN** MainActivity follows stable lifecycle: onCreate() → onResume() and remains stable

#### Scenario: App resumption from background
- **WHEN** user returns to app after switching to another app
- **THEN** MainActivity onResume() is called without intermediate lifecycle events
