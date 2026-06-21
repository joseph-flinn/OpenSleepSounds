## Context

The app currently uses the default light theme with white backgrounds (`#fff`) and dark text. The `app.json` has `"userInterfaceStyle": "light"` configured. Expo provides `useColorScheme()` from `react-native` which returns the current system theme ('light' or 'dark'). For apps with a fixed theme (no user toggle), we use `app.json`'s `userInterfaceStyle` to set the default.

## Goals / Non-Goals

**Goals:**
- Implement a cohesive dark theme with the Deep Midnight Green & Tan color palette
- Create a custom theme hook that wraps `useColorScheme()` to simplify component usage
- Use `StyleSheet.create` with theme colors for styling
- Ensure `@expo/ui` components auto-adapt to the theme configuration
- Set dark theme as default via `app.json` configuration
- Update all components to use theme-aware colors
- Maintain theme consistency across iOS and Android platforms

**Non-Goals:**
- User-controlled theme switching (this is a default theme change)
- Light theme support (can be added later via `userInterfaceStyle` detection)
- Dynamic color customization

## Decisions

**Decision 1: Create a custom theme hook**
- Rationale: Simplifies component usage by abstracting `useColorScheme()` pattern
- Rationale: Provides consistent theme access across the app
- Implementation: Create `src/hooks/useTheme.ts` that returns `isDark` boolean and theme colors
- Implementation: Hook internally uses `useColorScheme()` from 'react-native'

**Decision 2: Use `useColorScheme()` with `StyleSheet.create` pattern**
- Rationale: This is the standard Expo/React Native approach for theme styling
- Rationale: Clean separation of theme colors from component logic
- Implementation: Create a theme object with dark styles, apply via theme hook

**Decision 3: Update app.json `userInterfaceStyle` to "dark"**
- Rationale: Makes dark mode the default system-wide theme
- Rationale: Expo Router and `@expo/ui` components respect this setting
- `@expo/ui` components auto-adapt because they read the system theme preference
- Breaks: Default theme changes from light to dark

**Decision 4: Define theme colors in a centralized config**
- Rationale: Single source of truth for color values
- Implementation: Create `src/theme/dark.ts` with color constants, import in components

**Decision 5: Apply dark theme to App.tsx**
- Rationale: Main container currently has `backgroundColor: '#fff'` which needs to change
- Implementation: Use custom theme hook to apply dark background when theme is dark

## Risks / Trade-offs

**Risk:** Users expecting light mode will see dark mode by default
→ **Mitigation:** Document this as a breaking change; future enhancement can add user-controlled theme selection

**Risk:** Existing components may have hardcoded light theme colors
→ **Mitigation:** Review all components in `src/components/` and update to use theme colors or theme-aware styling

**Risk:** Accessibility contrast issues with new color palette
→ **Mitigation:** Verify contrast ratios meet WCAG AA standards for text on background

**Risk:** `@expo/ui` components not auto-adapting as expected
→ **Mitigation:** Test thoroughly on both platforms; `@expo/ui` should read the system theme via `useColorScheme()`

## Migration Plan

1. Update `app.json` to set `"userInterfaceStyle": "dark"`
2. Create custom theme hook at `src/hooks/useTheme.ts`
3. Create theme configuration with color values at `src/theme/dark.ts`
4. Update `App.tsx` to use theme hook
5. Review and update all components in `src/components/` using theme hook
6. Test `@expo/ui` component rendering with dark theme
7. Test on both iOS and Android to verify theme rendering

## Open Questions

**Answered 1:** Create a custom theme hook to simplify useColorScheme()
- Implemented via `src/hooks/useTheme.ts` returning `isDark` boolean and theme colors

**Answered 2:** `@expo/ui` components auto-adapt to the theme configuration
- `@expo/ui` components automatically respond to the system theme via `useColorScheme()`
- Setting `app.json` -> `userInterfaceStyle: "dark"` sets the default system theme
- No additional configuration needed beyond the app.json setting
