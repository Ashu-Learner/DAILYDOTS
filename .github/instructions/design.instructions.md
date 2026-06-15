---
description: Describe when these instructions should be loaded by the agent based on task context
# applyTo: 'Describe when these instructions should be loaded by the agent based on task context' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

<!-- Tip: Use /create-instructions in chat to generate content with agent assistance -->

---

applyTo: "**/*.tsx,**/*.ts,**/*.css"

# UI/UX Design Standards

## Design Principles

* Prioritize clarity over decoration.
* Favor simplicity over complexity.
* Design for usability first, aesthetics second.
* Minimize cognitive load by reducing unnecessary choices and visual noise.
* Ensure users can quickly understand what actions are available and what information is important.

---

## Layout Consistency

* Use consistent page structures across the application.
* Maintain predictable placement of navigation, actions, and content.
* Align elements to a common layout grid.
* Group related information together.
* Separate unrelated content with sufficient spacing.
* Avoid overcrowded interfaces.

### Content Hierarchy

* Present the most important information first.
* Keep primary actions visually prominent.
* Reduce emphasis on secondary actions.
* Limit the number of competing focal points within a screen.

---

## Spacing System

* Use a consistent spacing scale throughout the application.
* Maintain predictable spacing between:

  * Sections
  * Components
  * Form elements
  * Text blocks

### Guidelines

* Larger sections should have larger separation.
* Related items should be visually grouped through proximity.
* Avoid arbitrary spacing values.
* Use whitespace intentionally to improve readability.

---

## Typography Hierarchy

### Structure

* Establish clear visual distinction between:

  * Page titles
  * Section headings
  * Subheadings
  * Body text
  * Supporting text

### Guidelines

* Limit the number of font sizes and weights.
* Ensure text remains readable across devices.
* Use consistent heading levels throughout the application.
* Avoid excessively small text.
* Prioritize readability over stylistic typography.

---

## Color Usage

### Purpose

Use color intentionally to communicate:

* Information hierarchy
* Status
* Feedback
* Interactive states

### Guidelines

* Maintain a consistent color palette.

* Reserve accent colors for important actions and highlights.

* Use status colors consistently:

  * Success
  * Warning
  * Error
  * Informational

* Avoid relying solely on color to convey meaning.

* Ensure sufficient contrast between foreground and background elements.

---

## Accessibility

### General

* Design for keyboard, mouse, touch, and assistive technology users.
* Ensure all functionality is accessible without relying on a specific input method.

### Requirements

* Maintain accessible color contrast.
* Provide visible focus indicators.
* Ensure interactive elements have adequate touch targets.
* Use clear labels for controls and inputs.
* Support screen reader-friendly content structure.

### Feedback

* Provide clear success, loading, warning, and error states.
* Communicate system status through multiple cues, not color alone.

---

## Forms and Inputs

* Keep forms simple and focused.
* Group related inputs logically.
* Clearly indicate required information.
* Provide helpful validation messages.
* Display errors near the affected field when possible.
* Avoid unnecessary input requirements.

---

## Component Consistency

### Reusability

* Reuse existing UI patterns before creating new ones.
* Similar actions should look and behave similarly.
* Similar content types should share consistent layouts.

### Behavior

* Buttons, inputs, dialogs, cards, and navigation elements should behave consistently throughout the application.
* Maintain consistent interaction patterns across screens.

---

## Responsive Design

* Design mobile-first while ensuring a high-quality desktop experience.
* Preserve usability across screen sizes.
* Prevent layout shifts and content overlap.
* Ensure important actions remain easily accessible on smaller screens.

---

## User Feedback

* Acknowledge user actions immediately.
* Provide loading indicators for asynchronous operations.
* Confirm successful actions when appropriate.
* Present actionable and understandable error messages.
* Avoid leaving users uncertain about system state.

---

## Quality Expectations

* Every interface should be:

  * Clear
  * Consistent
  * Accessible
  * Responsive
  * Easy to learn

* Remove unnecessary visual complexity.

* Favor predictable experiences over novel interactions.

* Design for long-term maintainability and scalability.
