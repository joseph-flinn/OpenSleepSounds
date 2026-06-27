## ADDED Requirements

### Requirement: Optimized Props Parsing for @expo/ui Components
The app SHALL use @expo/ui components with `@OptimizedComposeProps` annotations for props parsing to avoid reflection-based fallback.

#### Scenario: @expo/ui component rendering
- **WHEN** using @expo/ui components like InnerTextField or Placeholder
- **THEN** props are parsed using optimized annotation-based approach, not reflection
