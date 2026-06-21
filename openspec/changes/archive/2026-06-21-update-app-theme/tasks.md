## 1. Configuration

- [x] 1.1 Update app.json `userInterfaceStyle` from "light" to "dark"
- [x] 1.2 Create src/theme/dark.ts with dark theme color constants
- [x] 1.3 Create src/theme/index.ts to export theme configuration

## 2. Custom Theme Hook

- [x] 2.1 Create src/hooks/useTheme.ts
- [x] 2.2 Hook imports and returns result of useColorScheme()
- [x] 2.3 Hook also returns theme color constants from src/theme
- [x] 2.4 Export useTheme from src/hooks/index.ts

## 3. App Root Updates

- [x] 3.1 Import `useTheme` hook in App.tsx
- [x] 3.2 Update App.tsx container to conditionally apply dark theme background using theme hook
- [x] 3.3 Verify dark theme renders correctly on App.tsx root

## 4. Component Updates

- [x] 4.1 Update AudioControl component to import and use useTheme hook
- [x] 4.2 Import dark theme colors in AudioControl styles using theme hook
- [x] 4.3 Review all files in src/components/ for theme color updates
- [x] 4.4 Ensure components use useTheme hook for theme-aware styling

## 5. Testing

- [x] 5.1 Run app on iOS simulator to verify dark theme rendering
- [x] 5.2 Run app on Android emulator to verify dark theme rendering
- [x] 5.3 Verify @expo/ui components render with dark theme
- [x] 5.4 Verify accessibility contrast ratios using color contrast checker
- [x] 5.5 Verify tab transitions and hover states use theme colors
