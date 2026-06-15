---
description: Describe when these instructions should be loaded by the agent based on task context
# applyTo: 'Describe when these instructions should be loaded by the agent based on task context' # when provided, instructions will automatically be added to the request context when the pattern matches an attached file
---

<!-- Tip: Use /create-instructions in chat to generate content with agent assistance -->

---

applyTo: "**/*.ts,**/*.tsx"

# TypeScript & React Standards

## TypeScript Standards

### Type Safety

* Assume TypeScript strict mode is enabled.
* Do not use `any`.
* Prefer `unknown` over `any` when type information is unavailable.
* Explicitly model domain data with interfaces or type aliases.
* Prefer narrow types over broad types.
* Avoid unnecessary type assertions (`as`).
* Use generics when they improve type safety and reusability.

### Immutability

* Treat state and domain objects as immutable.
* Prefer `readonly` for immutable properties when practical.
* Avoid mutating function parameters.
* Prefer immutable update patterns over in-place mutations.

### Union Types

* Prefer discriminated unions for state machines and variant data.
* Use exhaustive checks when handling union types.
* Ensure all union members are explicitly handled.

### Nullability

* Minimize nullable values.
* Handle `null` and `undefined` explicitly.
* Do not rely on non-null assertions (`!`) unless unavoidable and justified.

---

## React Standards

### Components

* Use functional components exclusively.
* Keep components focused on a single responsibility.
* Prefer composition over inheritance.
* Split large components into smaller reusable components.
* Avoid deeply nested component trees when possible.

### Typing

* Explicitly type:

  * Props
  * State when inference is unclear
  * Context values
  * Hook return values when beneficial
  * Event handlers

* Define component props using interfaces or type aliases.

* Avoid implicit public APIs.

### Hooks

* Follow the Rules of Hooks without exception.
* Call hooks only at the top level of React functions.
* Do not call hooks conditionally.
* Extract reusable logic into custom hooks.
* Keep custom hooks focused and predictable.

### Rendering

* Keep render logic simple.
* Move complex calculations outside JSX.
* Avoid unnecessary re-renders.
* Derive values instead of duplicating state whenever possible.

---

## State Management

### Philosophy

* Keep state as local as possible.
* Lift state only when required.
* Prefer derived state over duplicated state.
* Store the minimum amount of information necessary.

### Shared State

* Use Context only for truly shared application state.
* Avoid large monolithic contexts.
* Separate concerns into focused providers.

### State Updates

* Use immutable update patterns.
* Keep state transitions predictable.
* Avoid hidden side effects during updates.

---

## Error Handling

### General

* Handle errors explicitly.
* Never silently ignore failures.
* Surface meaningful error messages to users.
* Log diagnostic information appropriately.

### Async Operations

* Wrap asynchronous operations in proper error handling.
* Model loading, success, and failure states explicitly.
* Avoid unhandled promise rejections.

### Type-Safe Errors

* Narrow unknown errors before use.
* Do not assume error shapes from external systems.
* Convert external errors into application-specific error models when appropriate.

---

## Imports and Module Design

* Prefer named exports for reusable modules.
* Avoid circular dependencies.
* Keep modules focused on a single responsibility.
* Export only what is required by consumers.
* Remove unused imports and dead code.

---

## Performance

* Optimize only when justified by measurable need.
* Memoize expensive computations when appropriate.
* Avoid premature optimization.
* Keep dependency arrays accurate and intentional.

---

## Testing Expectations

* Write code that is easy to test.
* Prefer pure functions for business logic.
* Minimize hidden dependencies.
* Keep side effects isolated and predictable.

---

## Code Quality

* Favor readability over clever abstractions.
* Prefer explicitness over implicit behavior.
* Keep functions small and focused.
* Eliminate duplication where practical.
* Ensure all code is production-ready before completion.
