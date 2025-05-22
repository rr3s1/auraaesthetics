# Project Configuration (LTM)

_This file contains the stable, long-term context for the project._
_It should be updated infrequently, primarily when core goals, tech, or patterns change._

---

## Core Goal

Create minimum 5 high polished sections for the landing page with 'register' & 'book an appointment' buttons on Hero section

---

## Tech Stack

_(List the primary technologies, frameworks, and languages used. E.g.,)_

- **Frontend:** React, TypeScript, CSS Modules
- **Backend:** Node.js, Express, PostgreSQL
- **Testing:** Jest, React Testing Library
- **Linting/Formatting:** ESLint, Prettier

---

## Critical Patterns & Conventions

_(Document any non-standard but crucial design patterns, architectural decisions, or coding conventions specific to this project. E.g.,)_

- **State Management:** Redux Toolkit slices pattern.
- **API Design:** RESTful principles, specific endpoint naming convention `/api/v1/...`.
- **Error Handling:** Use custom `AppError` class for backend errors.
- **Commit Messages:** Follow Conventional Commits format.

---

## Key Constraints

_(List any major limitations or non-negotiable requirements. E.g.,)_

- Must support IE11 (if applicable).
- Deployment target is AWS Lambda.
- Strict adherence to budget/performance targets.

---

## Tokenization Settings

- **Estimation Method:** Character-based
- **Characters Per Token (Estimate):** 4
