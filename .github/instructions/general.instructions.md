---
description: Describe when these instructions should be loaded by the agent based on task context
applyTo: '**' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

<!-- Tip: Use /create-instructions in chat to generate content with agent assistance -->

---

## applyTo: "**/*"

# General Engineering Standards

## Core Principles

* Prioritize readability, maintainability, and consistency.
* Prefer simple solutions over unnecessary complexity.
* Follow established project patterns before introducing new ones.
* Optimize for long-term maintainability rather than short-term convenience.
* Avoid duplicate logic and code repetition.

---

## Naming Conventions

* Use descriptive and intention-revealing names.
* Avoid abbreviations unless they are widely understood.
* Keep naming consistent across the repository.
* Use singular or plural naming consistently based on the represented concept.
* Avoid generic names such as `data`, `temp`, `value`, `helper`, or `utils` when a more specific name is possible.

---

## File and Directory Structure

* Group related files together.
* Keep directories focused on a single responsibility.
* Avoid deeply nested folder structures unless justified.
* Place shared or reusable code in clearly designated locations.
* Follow existing repository structure before creating new patterns.

---

## Readability

* Write code that is easy to understand without additional explanation.
* Prefer small, focused functions and modules.
* Keep nesting levels minimal.
* Use early returns to reduce complexity where appropriate.
* Break large files into smaller units when responsibilities grow.

---

## Comments and Documentation

* Prefer self-explanatory code over excessive comments.
* Add comments only when explaining:

  * Complex business rules
  * Non-obvious decisions
  * Important implementation constraints
* Keep comments accurate and updated.
* Remove outdated or redundant comments.

---

## Refactoring Discipline

* Leave code cleaner than you found it.
* Refactor duplicated or overly complex logic when modifying related code.
* Avoid large-scale refactors unless explicitly required.
* Preserve existing behavior when refactoring.
* Improve clarity before introducing optimizations.

---

## Error Handling

* Handle errors explicitly.
* Fail gracefully and provide actionable feedback when possible.
* Avoid silently ignoring errors.
* Log or surface useful diagnostic information without exposing sensitive details.
* Validate inputs and assumptions at system boundaries.

---

## Imports and Dependencies

* Import only what is required.
* Remove unused imports and dependencies.
* Prefer existing project dependencies before introducing new ones.
* Keep dependency usage consistent across the codebase.
* Avoid unnecessary coupling between modules.

---

## Formatting and Style

* Follow repository formatting standards and tooling.
* Maintain consistent indentation, spacing, and line lengths.
* Keep functions, classes, and modules organized logically.
* Separate distinct logical sections with whitespace where it improves readability.
* Avoid formatting changes unrelated to the current task.

---

## Collaboration Rules

* Make changes that are focused and easy to review.
* Preserve backward compatibility unless requirements dictate otherwise.
* Do not modify unrelated code.
* Follow existing architectural decisions and conventions.
* Write code that future contributors can understand and extend easily.
* Prefer consistency with the repository over personal preferences.

---

## Quality Expectations

* Ensure changes are complete and production-ready.
* Avoid placeholder implementations in committed code.
* Consider maintainability, performance, and security in all changes.
* Keep solutions pragmatic and appropriately scoped.
* Deliver the simplest solution that fully satisfies the requirements.
