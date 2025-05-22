# Project Configuration (LTM - Long-Term Memory)
*This file defines the stable, long-term context for the project.
It should be updated infrequently, primarily when core goals, tech, patterns, or major constraints change.*
*Version: 1.2.1*

---
## 🎯 Core Goal (Project Overarching)

Upgrade UI/UX of admin page up to X99 fold [admin](../app/admin/page.tsx) by implementing animations on hover, smooth transitions, and modern design elements. Use same color palette, font & as the rest of the app

*(Note: Session-specific `Core Goal`s, which are sub-components of this, will be provided in `workflow_state.md`)*

---
## 🛠️ Tech Stack & Environment
*(List the primary technologies, frameworks, languages, and platforms used. Be specific where it aids the AI.)*

*   **Frontend:**
    *   Framework: Next.js
    *   Language: TypeScript
    *   Styling: TailwindCSS
    *   UI Components: ShadCN
*   **Backend:**
    *   Platform: Appwrite (Cloud or Self-Hosted - specify version if critical)
    *   (If custom backend beyond Appwrite): Language: Node.js, Framework: Express.js (example)
*   **Database:** (Implicitly Appwrite DB, but if others are used, list them, e.g., PostgreSQL for analytics)
*   **Communications:**
    *   SMS: Twilio API
*   **Monitoring & Observability:**
    *   Error Tracking: Sentry
    *   (If applicable: Logging Platform, Metrics Platform)
*   **Development Environment:**
    *   IDE: Windsurf
    *   Version Control: Git (Platform: GitHub)
*   **Deployment (Target Platforms):**
    *   Vercel for Next.js

---
## 🔑 Critical Patterns & Conventions
*(Document any non-standard but crucial design patterns, architectural decisions, or coding conventions specific to this project. These are rules the AI must adhere to.)*

*   **State Management (Frontend):**
    *   React Context API for simple global state.
    *   Data Fetching: SWR with Next.js client-side fetching.
*   **API Design (if building custom APIs):**
    *   Principles: RESTful
    *   Versioning: Path-based (e.g., `/api/v1/...`)
    *   Authentication: Appwrite session management.
*   **Error Handling:**
    *   Backend: Use custom `AppError` class for controlled API errors, with distinct error codes.
    *   Frontend: Graceful error boundaries; user-friendly error messages. Log detailed errors to Sentry.
*   **Commit Messages:**
    *   Format: Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, etc.)
*   **Code Structure & Naming:**
    *   Feature-sliced directory structure for frontend components.
    *   PascalCase for components and types, camelCase for functions and variables.
*   **Security Practices:**
    *   Input Validation: Always validate and sanitize user inputs on both client and server.
    *   Secrets Management: Use environment variables; never commit secrets to VCS.
    *   Permissions: Adhere to principle of least privilege for Appwrite roles and permissions.
*   **Planning & Development Approach:**
    *   Emphasize thorough internal planning: systematic decomposition of objectives, detailed refinement of tasks (considering technical specifics, files, dependencies), and structured plan generation before coding.
    *   Break down complex tasks into smaller, manageable, and logical steps. Prioritize creating a clear hierarchy in plans.
    *   Prioritize clarity, maintainability, and adherence to project patterns in generated code.
    *   Utilize the structured `InternalPlanningState.currentDraftPlanItems` to build detailed plans.

---
## 🧩 Integrated Tools & Services
*(List external tools or services the AI is expected to interact with, beyond the core tech stack. Note: Detailed planning is now handled by internal AI logic.)*

*   **(No specific external planning tools. Internal logic is primary.)**
*   **GitHub API (via PAT or App - if enabled for PRs etc.):**
    *   **Purpose:** For programmatic repository interactions (e.g., creating branches, PRs if AI is given such capabilities).
    *   **Access:** Direct API calls using a configured token.

---
## 🛑 Key Constraints & Non-Negotiables
*(List any major limitations, non-negotiable requirements, or boundaries the AI must respect.)*


*   **AI Operational Limits:**
    *   Updates to `workflow_state.md` must be concise and strictly under 2000 characters per update. AI is responsible for summarization.
    *   Prioritize non-destructive actions; seek confirmation for potentially breaking changes if not part of an approved plan (via `PendingUserConfirmation`).
    *   Internal planning iterations (`iterationCount`, `decompositionDepth`) should be efficient, adhering to `maxIterations` and `maxDecompositionDepth` in `workflow_state.md`. Avoid over-planning trivial items.
    *   Re-planning attempts are limited (`maxReplanAttempts`). Persistent planning failures will result in escalation.

---
## ℹ️ Project Owner & Review Process
*(Optional, but can be useful for more advanced AI interactions)*

*   **Project Owner/Contact:** [Name/Role] (For escalation if `PLAN_GENERATION_FAILED` or `PendingUserConfirmation` requires human intervention).
*   **Code Review:** AI's internally generated plan may be subject to conceptual review for complex features before full implementation (potentially triggered via `PendingUserConfirmation`).
