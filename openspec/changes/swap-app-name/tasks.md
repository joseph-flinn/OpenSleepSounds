## 1. Analyze Source SVG

- [ ] 1.1 Read and analyze the structure of ./assets/app-name-500.svg
- [ ] 1.2 Identify all SVG elements (path, rect, circle, etc.)
- [ ] 1.3 Identify all attributes (x, y, width, height, d, transform, fill, etc.)
- [ ] 1.4 Document all <g> tags that need to be removed

## 2. Create SVG Component

- [ ] 2.1 Create the SVG component structure with flattened elements (no <g> tags)
- [ ] 2.2 Copy all path, rect, and shape elements with exact attributes
- [ ] 2.3 Preserve coordinate transforms and styling on individual elements

## 3. Update AudioControl Component

- [ ] 3.1 Replace the Text component (lines 90-98) with the SVG component
- [ ] 3.2 Ensure the SVG is positioned correctly in the container
- [ ] 3.3 Verify the SVG inherits theme colors where appropriate

## 4. Testing

- [ ] 4.1 Run existing tests to ensure no regressions
- [ ] 4.2 Verify the app name logo renders correctly
- [ ] 4.3 Check visual appearance matches the source SVG
- [ ] 4.4 Test on both iOS and Android platforms
