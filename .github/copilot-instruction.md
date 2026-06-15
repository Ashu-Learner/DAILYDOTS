# GitHub Copilot Instructions

## Project Overview

This project is a Daily Journal with Mood Tracker built using:

* Vite
* React
* Supabase
* JavaScript
* Plain CSS

GitHub Copilot should generate code that follows the standards and architecture defined in this document.

---

## General Principles

* Prefer clean, readable, maintainable code.
* Prioritize simplicity over premature optimization.
* Follow modern React best practices.
* Use functional components exclusively.
* Use React Hooks instead of class components.
* Keep components focused on a single responsibility.
* Avoid code duplication.
* Create reusable components when functionality is shared.

---

## Folder Structure

Use a feature-based architecture.

```text
src/
├── assets/
├── components/
│   ├── Button/
│   ├── Card/
│   ├── Input/
│   ├── Modal/
│   └── MoodSelector/
│
├── features/
│   ├── auth/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
│   │
│   ├── journal/
│   │   ├── pages/
│   │   ├── components/
│   │   └── services/
│   │
│   └── mood-tracker/
│       ├── pages/
│       ├── components/
│       └── services/
│
├── context/
├── hooks/
├── services/
├── utils/
└── App.jsx
```

---

## React Guidelines

### Components

Always use functional components.

Example:

```jsx
function JournalEntry() {
  return <div>Journal Entry</div>;
}

export default JournalEntry;
```

### Hooks

Prefer:

* useState
* useEffect
* useContext
* custom hooks when necessary

Avoid unnecessary state.

---

## State Management

Use:

* React Context
* React Hooks

Do not introduce Redux, Zustand, MobX, or other state libraries unless explicitly requested.

Example:

```jsx
const AuthContext = createContext();
```

---

## Styling Guidelines

Use Plain CSS only.

### CSS Rules

* Create one CSS file per component.
* Import CSS directly into the component.
* Keep styles scoped by naming conventions.
* Avoid inline styles unless necessary.

Example:

```jsx
import "./JournalEntry.css";
```

Example:

```text
JournalEntry.jsx
JournalEntry.css
```

---

## Naming Conventions

### Components

Use PascalCase:

```text
JournalEntry.jsx
MoodTracker.jsx
LoginForm.jsx
```

### Variables and Functions

Use camelCase:

```js
currentMood
journalEntries
saveJournalEntry()
fetchUserEntries()
```

### Constants

Use UPPER_SNAKE_CASE:

```js
MAX_ENTRY_LENGTH
DEFAULT_MOOD
```

---

## Supabase Guidelines

### Service Layer

Never place Supabase queries directly inside UI components when a service abstraction is appropriate.

Use dedicated service files:

```text
services/
├── supabase.js
├── authService.js
├── journalService.js
└── moodService.js
```

Example:

```js
const entries = await journalService.getEntries();
```

### Authentication

Use Supabase Email/Password Authentication.

Preferred features:

* Sign Up
* Login
* Logout
* Password Reset
* Session Persistence

---

## Data Fetching

Use:

```js
async/await
```

Preferred pattern:

```js
try {
  const entries = await journalService.getEntries();
} catch (error) {
  console.error(error);
}
```

Keep API and database logic inside service files.

---

## Form Handling

Use controlled React forms.

Example:

```jsx
const [title, setTitle] = useState("");
```

Requirements:

* Validate inputs before submission.
* Show user-friendly validation messages.
* Keep form state local when possible.

---

## Error Handling

Always use try/catch for asynchronous operations.

Provide user-friendly feedback.

Example:

```js
try {
  await saveEntry(data);
} catch (error) {
  setError("Unable to save journal entry. Please try again.");
  console.error(error);
}
```

Guidelines:

* Show clear messages to users.
* Log technical details for developers.
* Never expose sensitive backend information.

---

## Reusable Components

Prefer reusable components from the beginning.

Common reusable components:

* Button
* Input
* Card
* Modal
* MoodSelector
* LoadingSpinner
* ErrorMessage

Keep reusable components generic and configurable through props.

---

## Comments

Use moderate comments.

Add comments for:

* complex business logic
* Supabase queries that are not obvious
* non-trivial calculations

Do not comment obvious code.

Bad:

```js
// Set name
setName(value);
```

Good:

```js
// Convert mood score to category used by analytics dashboard
```

---

## Testing

Use Vitest.

Prioritize testing:

* utility functions
* service layer functions
* custom hooks
* important business logic

Example file names:

```text
journalService.test.js
moodService.test.js
```

---

## Code Quality

Copilot should:

* Prefer small functions.
* Extract repeated logic.
* Avoid deeply nested conditionals.
* Use early returns when possible.
* Keep files focused and maintainable.

---

## Journal Feature Guidelines

Suggested journal entry structure:

```js
{
  id,
  userId,
  title,
  content,
  mood,
  createdAt,
  updatedAt
}
```

Suggested moods:

```js
[
  "Happy",
  "Excited",
  "Calm",
  "Neutral",
  "Sad",
  "Stressed"
]
```

---

## Copilot Behavior Preferences

When generating code:

* Follow existing project structure.
* Reuse existing components before creating new ones.
* Reuse existing services before creating new database logic.
* Generate production-ready React code.
* Prefer maintainability over cleverness.
* Prefer consistency over introducing new patterns.
* Use JavaScript, not TypeScript.
* Use Plain CSS, not Tailwind CSS.
* Use functional React components only.
* Use Supabase service abstractions.
* Use React Context for shared application state.
