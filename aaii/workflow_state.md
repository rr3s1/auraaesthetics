# workflow_state.md
_Last updated: 2025-05-16_
## State
Phase: INIT
Status: READY
CurrentItem: null
## Plan
<!-- The AI fills this in during the BLUEPRINT phase -->
## Rules
> **Keep every major section under an explicit H2 ('##') heading so the agent can locate them unambiguously.**

### [PHASE: ANALYZE]
1. Read **project_config.md**, relevant code & docs.
2. Summarize requirements. *No code or planning.*
### [PHASE: BLUEPRINT]
1. Decompose current task (from `## Items` or initial prompt) into ordered steps.
2. Write detailed pseudocode or file-level diff outline under **## Plan**.
3. **Perform self-evaluation of the `**## Plan**`:**
    *   Verify alignment with `project_config.md`: `## Project Goal`, `## Tech Stack`, `## Critical Patterns & Conventions`, `## Constraints`.
    *   Ensure the plan is detailed, actionable, complete, and logically sound.
4.  If self-evaluation is successful: set `Phase = CONSTRUCT`, `Status = READY`.
5.  If self-evaluation identifies issues: append refinement notes to `**## Log**`, update `**## Plan**`, and repeat step 3 (self-evaluation).
### [PHASE: CONSTRUCT]
1. Follow the self-approved **## Plan** exactly.
2. After each atomic change:
    - run test / linter commands specified in `project_config.md`.
    - capture tool output in **## Log**.
3. On success of all steps, set `Phase = VALIDATE`.
### [PHASE: VALIDATE]
1. Rerun full test suite & any E2E checks.
2. If clean, set `Status = COMPLETED`.
3. Trigger **RULE_ITERATE_01** when applicable.
4. Trigger **RULE_SUMMARY_01** when applicable.
---
### RULE_INIT_01
Trigger ► `Phase == INIT`
Action ► Ask user for first high-level task → `Phase = ANALYZE, Status = RUNNING`.

### RULE_ITERATE_01
Trigger ► `Status == COMPLETED && Items contains unprocessed rows`
Action ►
1. Set `CurrentItem` to next unprocessed row in **## Items** table.
2. Clear **## Log**, reset `Phase = ANALYZE, Status = READY`.

### RULE_LOG_ROTATE_01 (NEW)
Trigger ► `length(## Log) > 5 000 chars`
Action ► Summarise the top 5 findings from **## Log** into **## ArchiveLog**, then clear **## Log**.

### RULE_SUMMARY_01 (NEW)
Trigger ► `Phase == VALIDATE && Status == COMPLETED`
Action ►
1. Read `project_config.md`.
2. Construct the new changelog line: `- <One-sentence summary of completed work>`.
3. Find the `## Changelog` heading in `project_config.md`.
4. Insert the new changelog line immediately after the `## Changelog` heading and its following newline (making it the new first item in the list).
---
## Items
| id | description | status |
|----|-------------|--------|
<!-- AI appends new tasks here -->
## Log
<!-- AI appends detailed reasoning, tool output, and errors here -->
## ArchiveLog
<!-- RULE_LOG_ROTATE_01 stores condensed summaries here -->
