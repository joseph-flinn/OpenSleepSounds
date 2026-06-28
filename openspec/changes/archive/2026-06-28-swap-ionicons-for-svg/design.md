## Context

The app currently uses `@expo/vector-icons` with Ionicons for audio control buttons in `AudioControl.tsx`. This adds an external dependency and the icon style may not perfectly match the app's custom design language.

Current state:
- `AudioControl.tsx` imports and uses `Ionicons` for play/pause icons
- Icons are imported as `<Ionicons name="play-circle-outline" />` and `<Ionicons name="pause-circle-outline" />`
- SVG assets already exist in `assets/` directory

## Goals / Non-Goals

**Goals:**
- Replace Ionicons with custom SVG icons in `AudioControl.tsx`
- Remove `@expo/vector-icons` dependency
- Maintain the same visual appearance and functionality

**Non-Goals:**
- No changes to icon design or visual style
- No changes to touch targets or button sizing
- No changes to existing SVG files

## Decisions

**Decision 1: Inline SVG vs React Native SVG Library**
- Choose inline SVG embedded directly in component
- Rationale: Simpler, no additional dependency needed, smaller bundle for few icons

**Decision 2: Create reusable SVGIcon component**
- Create `src/components/SVGIcon.tsx` to wrap SVG components
- Rationale: Consistent API, easier to apply theme colors, reusable across app

**Decision 3: Select icon based on playback state**
- Use ternary operator to select play or pause SVG
- Same approach as current Ionicons implementation

## Risks / Trade-offs

- **Risk**: SVG files may need optimization for production
  - **Mitigation**: Run SVGO or similar tool to clean up SVG code

- **Risk**: Icon size may need adjustment for different screen densities
  - **Mitigation**: Test on multiple devices, consider using responsive sizing

## Migration Plan

1. Create `SVGIcon.tsx` component wrapper
2. Update `AudioControl.tsx` to import and use SVG icons
3. Remove `@expo/vector-icons` import from `AudioControl.tsx`
4. Update `package.json` to remove `@expo/vector-icons` dependency
5. Test play/pause functionality
