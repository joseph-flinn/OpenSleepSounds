## Context

Currently, audio controls and state display are positioned in a non-central location on the screen. This creates an inconsistent user experience as users must navigate away from the center to control audio. Moving them to the center creates a more intuitive and accessible interface.

## Goals / Non-Goals

**Goals:**
- Center audio controls and state on screen
- Maintain responsive behavior across screen sizes
- Preserve existing audio functionality
- Ensure accessibility standards are met

**Non-Goals:**
- Changing audio functionality or behavior
- Modifying the audio control styling beyond positioning
- Adding new audio features

## Decisions

1. **Use CSS flexbox or grid for centering**: These provide reliable centering across different screen sizes and orientations
2. **Center both audio state and controls together**: Keep related UI elements grouped for better usability
3. **Maintain z-index and stacking order**: Ensure audio controls remain visible and accessible

## Risks / Trade-offs

- [Audio controls might overlap content] → Implement proper spacing and padding to prevent overlap
- [Centering may not work well on all screen sizes] → Test and adjust for mobile, tablet, and desktop