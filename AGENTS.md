# AGENTS.md

## Purpose

This repository uses AI coding agents and GitHub Copilot to assist development. Agents must follow the repository instruction files and existing project patterns before making changes.

---

## Project Context

* Stack: Vite + React + TypeScript + Supabase
* Styling: Tailwind CSS
* TypeScript: Strict mode enabled
* Architecture: Clean architecture with separated services, components, hooks, and UI layers

---

## Source of Truth

Agents must treat the following files as authoritative:

1. `general.instructions.md`
2. `copilot-instructions.md`
3. `typescript-react.instructions.md`
4. `design.instructions.md`

If multiple instruction files apply, use the most specific file for the affected code.

### Priority Order

When conflicts occur:

1. Direct user requirements
2. `typescript-react.instructions.md`
3. `design.instructions.md`
4. `copilot-instructions.md`
5. `general.instructions.md`

Do not invent new patterns that contradict these files.

---

## Agent Workflow

### Before Making Changes

* Understand the existing implementation.
* Follow established architecture and naming patterns.
* Reuse existing services, hooks, utilities, and components whenever possible.
* Prefer extending existing functionality over introducing parallel implementations.

### Change Scope

* Keep changes focused and minimal.
* Solve the requested problem only.
* Avoid unrelated cleanup.
* Avoid repository-wide formatting changes.
* Avoid speculative improvements.

### Refactoring

Allowed:

* Small refactors required to support the requested change.
* Removal of obvious duplication near modified code.

Avoid:

* Large architectural rewrites.
* Framework migrations.
* Directory restructuring.
* Broad renaming operations.
* Changes that increase scope beyond the request.

---

## Security Boundaries

Agents must never:

* Commit secrets, tokens, credentials, or environment values.
* Hardcode API keys.
* Bypass authentication or authorization flows.
* Disable security checks.
* Weaken TypeScript strictness.
* Introduce `any` as a shortcut around type safety.
* Circumvent validation, permission, or access-control logic.

Environment variables must remain externalized and managed through approved configuration mechanisms.

---

## Files That Must Not Be Modified

Unless explicitly requested:

* `dist/**`
* Build artifacts
* Generated files
* Cache directories
* Coverage output
* Package manager lockfiles

  * `package-lock.json`
  * `pnpm-lock.yaml`
  * `yarn.lock`

Do not manually edit generated content.

---

## Common Commands

Use the project's existing scripts when available.

```bash
npm install
npm run dev
npm run build
npm run lint
npm run format
npm run typecheck
npm run test
```

If a command is unavailable, use the equivalent project-defined script rather than introducing a new workflow.

---

## Validation Expectations

Before completing work:

* Ensure TypeScript type checking passes.
* Ensure linting passes when applicable.
* Ensure new code follows repository architecture.
* Verify imports, exports, and file placement are consistent with existing patterns.
* Validate user-facing behavior when modifying UI.

---

## Change Reporting

When reporting completed work, include:

1. Summary of changes made.
2. Files modified.
3. Any assumptions made.
4. Validation performed.
5. Remaining risks, limitations, or follow-up work (if applicable).

Keep reports concise and factual.

---

## Agent Principle

Make the smallest high-quality change that fully satisfies the request while preserving existing architecture, security, and maintainability.
