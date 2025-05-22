# Project Configuration (LTM)

_This file contains the stable, long-term context for the project._
_It should be updated infrequently, primarily when core goals, tech, or patterns change._
Last-Updated: <date_will_be_updated_by_AI_or_user>

## ✨ Core Goal

Upgrade landing page with x10 improved UI/UX having a CTA button in Hero section inviting to register as a patient
---

## 🛠️ Tech Stack & Environment

**Frontend:**

- Next.js (v14.2.3), React (v18), TypeScript (v5)
- Tailwind CSS (v3.4.1), PostCSS (v8)
- ShadCN UI (components built on Radix UI, managed via `components.json`)
- Icons: `lucide-react`, `@heroicons/react`
- Forms: `react-hook-form` (v7.51.4) with `zod` (v3.23.6) for validation
- Other UI Libs: `cmdk`, `react-datepicker`, `react-dropzone`, `input-otp`, `react-phone-number-input`, `framer-motion`, `next-themes`
- Utilities: `class-variance-authority`, `clsx`, `tailwind-merge`, `@tanstack/react-table`

**Backend:**

- Node.js (via Next.js API Routes)
- Appwrite (Backend-as-a-Service, `node-appwrite` v12.0.1)
  _(Template mentions Express for custom APIs; not explicitly found in `package.json`, Next.js API routes fulfill this role)._

**Database:**

- Appwrite's built-in database.
  _(Template mentions PostgreSQL for analytics; not found in initial project scan)._

**Comm:**

- Twilio SMS (`twilio` v5.0.4)

**VCS & CI:**

- Git (implied by `.gitignore`).
  _(Template mentions GitHub + GitHub Actions; GitHub Actions configuration not found in initial project scan)._

**IDE:**

- Windsurf _(User-provided)_

**Deploy:**
_(Template mentions Vercel for frontend, Docker/ECS for backend; deployment configurations not found in initial project scan)._

**Linting/Formatting:**

- ESLint (v8) with Next.js, Prettier, Standard JS, Tailwind CSS, and Import plugins.
- Prettier (v3.2.5)

---

## 🔑 Critical Patterns & Conventions

**State Management:**

- React Context API and component-level state (`useState`, `useReducer`).
- `react-hook-form` for form state.
  _(Template mentions SWR for client data fetching; SWR was not found as a direct dependency in `package.json` during the initial scan)._

**API:**

- Next.js API Routes for backend logic.
- Appwrite SDK for BaaS interactions.
  _(Template suggests RESTful, versioned (`/api/v1/...`), JWT/Appwrite sessions. These are common practices but not explicitly configured in a central file found during scan; API structure would be within individual API route files.)\*_

**Error Handling:**

- Frontend: `@sentry/nextjs` for error tracking.
- Input Validation: `zod` for schema validation.
  _(Template mentions Backend: `AppError` class and Frontend: Error Boundaries; these specific implementations were not identified in the initial scan)._

**Commits:**
_(Template specifies Conventional Commits (`feat:`, `fix:`, `chore:`). No Linting/hook configuration for this was found in `package.json` or root configs during the initial scan)._

**Structure & Naming:**

- `shadcn/ui` convention (e.g., `components/ui/`).
- Path aliases: `@/components`, `@/lib/utils` (from `components.json` and `tsconfig.json`).
  _(Template suggests Feature-slice dirs; PascalCase for components; camelCase for functions. These are common conventions and likely followed)._

**Security:**

- Environment variables for secrets (e.g., `.env.local` exists).
  _(Template mentions: Validate/sanitize inputs; least-privilege Appwrite roles. These are best practices)._

---

**Planning & Development Approach:**

- Thorough internal planning before any code gen.
- Break down complex tasks into logical, granular steps.
- Prioritize clarity and maintainability.

---

## 🧩 Integrated Tools & Services

**GitHub API:** for branches/PRs
_(running it entirely internal; no external sequential planners.)_

---

## 🛑 Key Constraints & Non-Negotiables

**Budget:**
_(To be defined)_
**Perf:**
_(To be defined)_
**Browser:**
_(To be defined, e.g., latest 2 versions of major browsers)_
**Third-Party Libraries:**
_(Stick to the approved list in Tech Stack unless a strong case is made and approved)_
**AI Limits:**

- `workflow_state.md` updates < 2000 chars.
- Internal planning depth ≤ 5 levels.
- Draft items ≤ 15.
  **Effort Hints:**
- S: < 2 h
- M: 2-8 h
- L: 1-2 days
- XL: > 2 days

---

## Changelog

- Implemented a new animated landing page (`app/page.tsx`) using the `HeroGeometric` component, featuring "Get Started Now" and "Admin" navigation buttons.
- Added `lucide-react` and `framer-motion` as dependencies.
<!-- The agent prepends the latest summary here as a new list item after each VALIDATE phase -->
