## ADDED Requirements

### Requirement: AudioControl component must render app name using SVG

The AudioControl component SHALL render the app name logo using the SVG structure from `./assets/app-name-500.svg` instead of a Text component.

#### Scenario: SVG logo renders correctly
- **WHEN** the AudioControl component is mounted
- **THEN** the app name logo is displayed at the top center of the component
- **THEN** all SVG elements (path, rect) from the source file are rendered with their exact attributes preserved
- **THEN** no `<g>` tags are present in the rendered structure

### Requirement: SVG structure must be flattened

All `<g>` tags from the source SVG file SHALL be removed when creating the React version, while preserving all SVG shape elements (path, rect, circle, etc.) and their attributes.

#### Scenario: Flattening removes groups
- **WHEN** the SVG is converted to React components
- **THEN** all `<g>` tag wrappers are removed
- **THEN** all child elements are rendered directly in their parent container
- **THEN** coordinate transforms and styles are preserved on individual elements

### Requirement: Visual appearance must match source SVG

The rendered SVG SHALL maintain visual compatibility with the original `./assets/app-name-500.svg` file, including all colors, positions, and shapes.

#### Scenario: Visual fidelity preserved
- **WHEN** the SVG component is rendered
- **THEN** the logo appears identical to the source SVG file
- **THEN** all fill colors, stroke properties, and transforms are copied exactly
