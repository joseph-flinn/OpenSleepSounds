## Why

The app currently uses the default light theme with white backgrounds and dark text. We need to update it to use the Deep Midnight Green & Tan dark theme palette from `/workspace/tmp/example-palette.html` to provide a modern, professional dark mode experience.

## What Changes

- Replace all hardcoded `#fff` and light colors with theme-aware colors using `useColorScheme()` and `StyleSheet.create` for dark mode
- Update `app.json` to set `"userInterfaceStyle": "dark"` (BREAKING - changes default theme from light to dark)
- Create theme configuration that provides the Dark theme colors:
  - Background body: `#03110d`
  - Background card: `#032017`
  - Text primary: `#c3b597`
  - Text secondary: `#EAD2AC`
  - Text muted: `#D8B589`
  - Card border: `rgba(216, 181, 137, 0.1)`
- Update `App.tsx` to use dark theme colors
- Review all components in `src/components/` and update to use theme colors via `useColorScheme()`

## Capabilities

### New Capabilities
- `app-theme`: Define and manage app-wide dark theme configuration and color palette using `useColorScheme()` and `StyleSheet.create`

### Modified Capabilities
- None

## Impact

- `app.json`: Change `userInterfaceStyle` from `"light"` to `"dark"`
- `App.tsx`: Replace hardcoded `#fff` background with theme-aware `dark.backgroundColor`
- All components in `src/components/`: Use `useColorScheme()` hook and apply dark theme styles
- Components will now have consistent dark theme colors instead of hardcoded light theme values
