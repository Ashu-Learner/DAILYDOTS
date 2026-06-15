---
description: Describe when these instructions should be loaded by the agent based on task context
# applyTo: 'Describe when these instructions should be loaded by the agent based on task context' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

<!-- Tip: Use /create-instructions in chat to generate content with agent assistance -->

---

applyTo: "**/*.css,**/*.ts,**/*.tsx"

# Tailwind CSS Standards

## Styling Philosophy

* Use Tailwind CSS as the primary styling solution.
* Prefer utility classes over custom CSS.
* Build reusable UI patterns through components rather than custom stylesheets.
* Keep styling consistent with the existing design system.
* Avoid inline style objects unless values are dynamic and cannot be represented with Tailwind utilities.

---

## Class Organization

Order Tailwind classes consistently:

1. Layout
2. Positioning
3. Flex/Grid
4. Sizing
5. Spacing
6. Borders
7. Backgrounds
8. Typography
9. Effects
10. Transitions & Animations
11. State Variants
12. Responsive Variants

Example:

```html
class="
flex items-center justify-between
w-full max-w-md
p-4
border rounded-lg
bg-white
text-sm font-medium
shadow-sm
transition
hover:bg-gray-50
focus-visible:outline-none focus-visible:ring-2
md:p-6
"
```

---

## Responsive Design

* Use a mobile-first approach.
* Start with base styles, then apply breakpoint modifiers.
* Prefer Tailwind breakpoints over custom media queries.
* Design for common screen sizes without hardcoding device-specific layouts.
* Verify layouts remain usable across mobile, tablet, and desktop views.

Example:

```html
class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
```

---

## Accessibility

### Interactive Elements

* All interactive elements must have visible focus states.
* Use `focus-visible` styles instead of removing outlines.
* Ensure keyboard navigation is fully supported.
* Maintain sufficient color contrast.

Example:

```html
class="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
```

### Semantic Structure

* Use semantic HTML before adding ARIA attributes.
* Add ARIA attributes only when native semantics are insufficient.
* Ensure form controls have accessible labels.

---

## State Styling

* Use Tailwind state variants whenever possible:

  * `hover:`
  * `focus:`
  * `focus-visible:`
  * `active:`
  * `disabled:`
  * `aria-*`
  * `data-*`

* Keep state styling predictable and consistent.

---

## Custom CSS Usage

Custom CSS is allowed only when:

* Tailwind cannot express the required styling cleanly.
* Complex animations are required.
* Third-party library overrides are necessary.
* Repeated utility combinations justify extraction.

Avoid custom CSS for:

* Spacing
* Colors
* Typography
* Layouts
* Standard component styling

---

## Design Consistency

* Reuse existing spacing, typography, and color scales.
* Prefer design tokens defined in Tailwind configuration.
* Avoid arbitrary values unless justified.
* Keep visual patterns consistent across the application.

---

## Code Quality

* Keep class lists readable and organized.
* Extract repeated UI patterns into reusable components.
* Remove unused styles and custom CSS.
* Favor maintainability and consistency over visual shortcuts.
